/* ============================================================
   Learner-language text (en) for data/core/b2-02.js, unit b2-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:b2-u05": {
    title: "She said she was ill",
    grammarNote: "Konjunktiv I in reported speech (er sei, er habe, er werde) · the Konjunktiv II as a substitute (sie hätten) · shifts of time, place and person · reported questions with ob and question words · reported commands with sollen"
  },
  "lesson:b2-u05-l1": {
    theme: "News and witness statements",
    title: "From direct to reported speech",
    objectives: [
      "recognize and form the Konjunktiv I in the third person",
      "report someone's words at a distance, as newspapers do",
      "replace the Konjunktiv I with the Konjunktiv II where it looks like the indicative",
      "use verbs like behaupten, erklären, betonen"
    ],
    theory: [
      {
        h: "The Konjunktiv I",
        p: "Newspapers, minutes and reports render other people's words with the <strong>Konjunktiv I</strong>: the writer signals that this is that person's account. It is formed from the <strong>infinitive stem</strong> + <em>-e</em> and used mostly in the third person singular, where it differs from the indicative: <em>er habe, er komme, er wisse, er könne, er werde</em>. <em>sein</em> is irregular: <em>er sei, sie seien</em>. <em>Der Minister sagte, er sei mit dem Ergebnis zufrieden.</em>"
      },
      {
        h: "Past and substitution",
        p: "The past is <strong>habe</strong> or <strong>sei</strong> + participle: <em>Die Zeugin erklärte, sie habe nichts gesehen. Laut Polizei sei der Fahrer zu schnell gefahren.</em> The future is <strong>werde</strong> + infinitive: <em>Die Firma werde keine Stellen streichen.</em> Where the Konjunktiv I looks like the indicative, especially in the plural (<em>sie haben</em>), German uses the <strong>Konjunktiv II</strong>: <em>Sie sagten, sie hätten keine Zeit.</em>"
      },
      {
        contrast: "English reported speech shifts the tense back: <em>“I'm ill”</em> becomes <em>she said she was ill</em>. German keeps the tense and changes the mood: <em>sie sagte, sie sei krank</em>. To keep a distance from a claim, English news writing adds words like <em>reportedly</em> or <em>allegedly</em>; German can do it with the verb form alone: <em>Laut Polizei sei der Fahrer zu schnell gefahren</em>, “according to the police, the driver was reportedly going too fast”."
      },
      {
        trap: "The Konjunktiv I does not express doubt: it only marks the words as someone else's. And it is rare in speech: <em>Er hat gesagt, er ist krank</em> is normal in conversation. In writing, the Konjunktiv I marks the attribution explicitly; the indicative, especially with <em>dass</em> and a named source, is possible too and does not necessarily mean the writer vouches for the claim."
      },
      {
        tip: "With verbs in <em>-en</em>, you form the third person singular of the Konjunktiv I by dropping the <em>-n</em> of the infinitive: <em>haben → habe, kommen → komme, wissen → wisse, können → könne</em>. The exceptions are <em>sein → sei</em> and verbs in <em>-eln</em> or like <em>tun</em> (<em>er handle, er tue</em>)."
      }
    ],
    grammar: {
      title: "The Konjunktiv I in reported speech",
      note: "<b>Present</b>: stem + <i>-e</i> (er habe, er komme; er sei). <b>Past</b>: habe / sei + participle. <b>Future</b>: werde + infinitive. Where it looks like the indicative: <b>Konjunktiv II</b> (sie hätten).",
      table: {
        head: ["infinitive", "indicative (er)", "Konjunktiv I (er)", "Konjunktiv I (sie, plural)", "substitute"],
        rows: [
          ["sein", "er ist", "er sei", "sie seien", "-"],
          ["haben", "er hat", "er habe", "sie haben", "sie hätten"],
          ["werden", "er wird", "er werde", "sie werden", "sie würden"],
          ["wissen", "er weiß", "er wisse", "sie wissen", "sie wüssten"],
          ["können", "er kann", "er könne", "sie können", "sie könnten"]
        ]
      },
      examples: [
        { tr: "The minister said he was satisfied with the result.", note: "er sei: Konjunktiv I of sein" },
        { tr: "The witness stated that she had seen nothing.", note: "past: habe + participle" },
        { tr: "According to the police, the driver was reportedly going too fast.", note: "laut + Konjunktiv I: the distance English expresses with reportedly" },
        { tr: "The spokesman stressed that the company would not cut any jobs.", note: "future: werde + infinitive" },
        { tr: "They said they had no time.", note: "sie haben looks like the indicative: hätten" },
        { tr: "He claims he knows nothing about it.", note: "er wisse: Konjunktiv I of wissen" }
      ]
    },
    vocab: [
      "the statement, the testimony",
      "the witness (male)",
      "the witness (female)",
      "the spokesperson (male)",
      "the news item, the report",
      "the report, the account",
      "to claim",
      "to state, to explain",
      "to stress, to emphasize",
      "to report (über + accusative: on)",
      "according to (+ dative or genitive)",
      "reportedly, allegedly (as an adjective: die angebliche Krankheit, the alleged illness)"
    ],
    exercises: [
      {
        q: "How does a newspaper report “I'm ill”, said by her?",
        opts: [
          "Sie sagte, sie sei krank.",
          "Sie sagte, sie wäre krank gewesen.",
          "Sie sagte, sie seien krank."
        ],
        why: "Konjunktiv I of <i>sein</i>, third person singular: <b>sie sei</b>. The tense does not shift: <i>wäre krank gewesen</i> would be about the past, <i>seien</i> is plural."
      },
      {
        q: "What is the Konjunktiv I of haben in the third person singular?",
        opts: [
          "er habe",
          "er hat",
          "er hatte"
        ],
        why: "Infinitive stem <i>hab-</i> + <i>-e</i>: <b>er habe</b>. <i>hat</i> is the present indicative, <i>hatte</i> the Präteritum."
      },
      {
        q: "Fill in, newspaper style, with the form that replaces the Konjunktiv I: “Sie sagten, sie ___ keine Zeit.”",
        opts: [
          "hätten",
          "haben",
          "hatten"
        ],
        why: "The Konjunktiv I <i>sie haben</i> looks like the indicative, so the Konjunktiv II is used: <b>hätten</b>. <i>hatten</i> is the Präteritum."
      },
      {
        q: "Fill in: “Der Minister sagte, er ___ zufrieden.”",
        hint: "Konjunktiv I of sein, er",
        why: "<b>sei</b>: Konjunktiv I of <i>sein</i>, the typical newspaper form."
      },
      {
        q: "Fill in: “Die Zeugin erklärte, sie ___ nichts gesehen.”",
        hint: "Konjunktiv I of haben, sie (she)",
        why: "<b>habe</b>: the past of the Konjunktiv I is <i>habe</i> + participle."
      },
      {
        q: "Complete the sentence.",
        tr: "He claims he knows nothing about it.",
        why: "<i>Er behauptet, er wisse von nichts</i>: <i>wisse</i> is the Konjunktiv I of <i>wissen</i>; <i>von nichts wissen</i> means “to know nothing about it”."
      },
      {
        q: "Match each verb with its meaning.",
        pairs: [
          "to claim",
          "to stress, to emphasize",
          "to report",
          "to state, to explain"
        ]
      },
      {
        q: "Put the words in order.",
        tr: "According to the police, the driver was reportedly going too fast.",
        why: "<i>Laut Polizei sei der Fahrer zu schnell gefahren.</i> <i>Laut Polizei</i> takes the first position, then the verb <i>sei</i>, the participle <i>gefahren</i> at the end."
      },
      {
        q: "Translate for a news article: “The spokesman said the company would not cut any jobs.” (Stellen streichen)",
        why: "<i>Der Sprecher sagte, die Firma werde keine Stellen streichen</i>: the future of the Konjunktiv I with <i>werde</i>, where English backshifts to <i>would</i>. With <i>dass</i> the verb goes to the end: <i>..., dass die Firma keine Stellen streichen werde</i>."
      },
      {
        tr: "The police said the accident had happened around eight o'clock. A witness reported that the driver had not braked.",
        why: "In <i>teilte ... mit</i> the particle goes to the end; in <i>Zeuge</i> the <b>Z</b> is [ts] and the <b>eu</b> is [ɔʏ]; in <i>gebremst</i> the <b>ge-</b> is unstressed."
      },
      {
        tr: "The spokeswoman stated that the problem had since been solved.",
        why: "In <i>Sprecherin</i> the initial <b>sp</b> is [ʃp]; in <i>inzwischen</i> the <b>z</b> is [ts] and the <b>sch</b> is [ʃ]; in <i>gelöst</i> the <b>ö</b> is long."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    theme: "Minutes and press conferences",
    title: "Time, place, person",
    objectives: [
      "shift person, time and place in reported speech",
      "keep the tense of the direct speech in the Konjunktiv I",
      "use am Tag davor, am nächsten Tag, dort",
      "report a press conference or an interview"
    ],
    theory: [
      {
        h: "What changes",
        p: "When you report someone's words at another time or in another place, the <strong>person</strong> changes (<em>ich → er/sie, mein → sein/ihr</em>), as do <strong>time</strong> expressions (<em>heute → an diesem Tag, morgen → am nächsten Tag / am folgenden Tag, gestern → am Tag davor / am Vortag, nächste Woche → in der folgenden Woche</em>) and <strong>place</strong> (<em>hier → dort</em>). If you are reporting on the same day or in the same place, <em>heute</em> or <em>hier</em> can stay. „Ich komme morgen.“ → <em>Er sagte, er komme am nächsten Tag.</em> „Das ist mein Auto.“ → <em>Er sagte, das sei sein Auto.</em>"
      },
      {
        h: "What does not change",
        p: "The <strong>tense</strong> stays that of the direct speech; only the mood changes. Present → present Konjunktiv I („Ich kenne ihn nicht.“ → <em>sie kenne ihn nicht</em>); past → past Konjunktiv I („Ich war gestern hier.“ → <em>sie sei am Tag davor dort gewesen</em>); future → <em>werde</em> + infinitive („Ich werde anrufen.“ → <em>er werde anrufen</em>)."
      },
      {
        contrast: "English backshifts the tense: <em>“I know him”</em> becomes <em>she said she knew him</em>, <em>“I was here yesterday”</em> becomes <em>she said she had been there the day before</em>, <em>“I'll call”</em> becomes <em>he said he would call</em>. German does not: <em>sie kenne</em>, <em>sie sei ... gewesen</em>, <em>er werde anrufen</em>. The shifts of person, time and place are the same as in English."
      },
      {
        trap: "Don't turn the future into a past Konjunktiv II to imitate <em>would have</em> or <em>would</em>: the reported future is <em>er werde anrufen</em> (in the plural, <em>sie würden anrufen</em>). And <em>the day before</em> is <em>am Tag davor</em> or <em>am Vortag</em>, not <em>der Tag vorher</em> as a time phrase."
      },
      {
        tip: "Before reporting a sentence, underline the pronouns and the time and place words in the direct speech: they are the only words that change, apart from the mood of the verb."
      }
    ],
    grammar: {
      title: "Shifts in reported speech",
      note: "<b>Person</b> changes, and, if the reporter's time or place differs, so do <b>time</b> and <b>place</b> words; the <b>tense</b> stays that of the direct speech, only in the Konjunktiv I.",
      table: {
        head: ["direct speech", "reported speech"],
        rows: [
          ["heute", "an diesem Tag"],
          ["morgen", "am nächsten Tag, am folgenden Tag"],
          ["gestern", "am Tag davor, am Vortag"],
          ["nächste Woche", "in der folgenden Woche"],
          ["hier", "dort"]
        ]
      },
      examples: [
        { tr: "He said he would come the next day.", note: "„Ich komme morgen.“: present → present Konjunktiv I" },
        { tr: "She said she had been there the day before.", note: "„Ich war gestern hier.“: past → sei ... gewesen" },
        { tr: "They said they had no time that day.", note: "„Wir haben heute keine Zeit.“: hätten instead of haben" },
        { tr: "He said he would call the following week.", note: "„Ich werde nächste Woche anrufen.“: werde + infinitive" },
        { tr: "He said that was his car.", note: "mein → sein" },
        { tr: "She said she didn't know him.", note: "„Ich kenne ihn nicht.“: kenne" }
      ]
    },
    vocab: [
      "the day before, the previous day",
      "the announcement, the notice",
      "the minutes, the record",
      "the press conference",
      "the interview",
      "the source",
      "to announce, to inform",
      "to assure",
      "to quote",
      "to report, to render (someone's words)",
      "following, next",
      "meanwhile, by now"
    ],
    exercises: [
      {
        q: "A week later you report “Ich komme morgen” (he). Which sentence reports it in the Konjunktiv I?",
        opts: [
          "Er sagte, er komme am nächsten Tag.",
          "Er sagte, ich komme am nächsten Tag.",
          "Er sagte, er kam am nächsten Tag."
        ],
        why: "The person shifts (<i>ich → er</i>) and so does the time (<i>morgen → am nächsten Tag</i>); the verb takes the present Konjunktiv I: <b>komme</b>. <i>kam</i> is a Präteritum indicative, not a Konjunktiv I."
      },
      {
        q: "Days later, in another city, you report “Ich war gestern hier” (she). Which sentence is correct?",
        opts: [
          "Sie sagte, sie sei am Tag davor dort gewesen.",
          "Sie sagte, sie war gestern hier.",
          "Sie sagte, sie sei am Tag davor hier."
        ],
        why: "Past → <b>sei ... gewesen</b>; <i>gestern → am Tag davor</i>, <i>hier → dort</i>. The third sentence has lost the past."
      },
      {
        q: "How do you report “Das ist mein Auto” (he)?",
        opts: [
          "Er sagte, das sei sein Auto.",
          "Er sagte, das sei mein Auto.",
          "Er sagte, das ist sein Auto sei."
        ],
        why: "The possessive changes with the person: <i>mein → sein</i>; the verb goes into the Konjunktiv I: <b>sei</b>."
      },
      {
        q: "„Ich kenne ihn nicht.“ → “Sie sagte, sie ___ ihn nicht.”",
        hint: "Konjunktiv I of kennen, sie (she)",
        why: "<b>kenne</b>: stem <i>kenn-</i> + <i>-e</i>. The tense stays present, where English would backshift to <i>knew</i>."
      },
      {
        q: "Reported days later: „Wir haben heute keine Zeit.“ → “Sie sagten, sie ___ an diesem Tag keine Zeit.”",
        hint: "plural: the Konjunktiv I looks like the indicative",
        why: "<b>hätten</b>: <i>sie haben</i> would look like the indicative, so Konjunktiv II. And <i>heute → an diesem Tag</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "„Ich werde nächste Woche anrufen.“ → He said he would call the following week.",
        why: "<i>Er sagte, er werde in der folgenden Woche anrufen</i>: the reported future is <i>werde</i> + infinitive, not a <i>would</i> form."
      },
      {
        q: "Which sentences report “Ich bin müde”, said by her, correctly in newspaper style?",
        opts: [
          "Sie sagte, sie sei müde.",
          "Sie sagte, dass sie müde sei.",
          "Sie sagte, ich sei müde.",
          "Sie sagte, dass sie sei müde."
        ],
        why: "The first two are correct: without <i>dass</i> the verb is in second position, with <i>dass</i> it goes to the end. The third doesn't change the person, the fourth doesn't send the verb to the end after <i>dass</i>."
      },
      {
        q: "Put the words in order.",
        tr: "She said she had been there the day before.",
        why: "<i>Sie sagte, sie sei am Tag davor dort gewesen.</i> <i>sei</i> in second position, the participle <i>gewesen</i> at the end."
      },
      {
        q: "Translate, newspaper style: “He said he had seen the film the day before.”",
        why: "<i>Er sagte, er habe den Film am Tag davor gesehen</i> (or <i>am Vortag</i>): the past Konjunktiv I, without the English backshift to <i>had seen</i>."
      },
      {
        tr: "At the press conference the mayor announced that the bridge would reopen the following Monday. She assured everyone that all the work had since been completed.",
        why: "In <i>Bürgermeisterin</i> the stress falls on <b>Bür</b>; in <i>versicherte</i> the <b>v</b> sounds like [f]; in <i>abgeschlossen</i> the <b>b</b> before <i>g</i> sounds like [p]."
      },
      {
        tr: "The minister assured us that he had known nothing about the problem.",
        why: "In <i>Minister</i> the stress falls on <b>nis</b>; in <i>Problem</i> the stress falls on <b>blem</b>; in <i>gewusst</i> the <b>u</b> is short."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    theme: "Reported questions and commands",
    title: "He asked whether ...; she told me to ...",
    objectives: [
      "report a yes/no question with ob",
      "report an open question with the question word",
      "report a command with sollen",
      "report a polite request with bitten + zu + infinitive"
    ],
    theory: [
      {
        h: "Reported questions",
        p: "A <strong>yes/no</strong> question is reported with <strong>ob</strong> and the verb at the end: „Hast du Zeit?“ → <em>Er fragte, ob ich Zeit hätte.</em> An <strong>open</strong> question keeps its question word, and the verb goes to the end here too: „Wann fährt der Zug?“ → <em>Sie fragte, wann der Zug fahre.</em> Besides <em>fragen</em> you can use <em>wissen wollen</em> and <em>sich erkundigen</em>: <em>Sie wollte wissen, ob ich mitkäme.</em>"
      },
      {
        h: "Reported commands and requests",
        p: "A command is reported with <strong>sollen</strong> in the Konjunktiv I: „Warte hier!“ → <em>Sie sagte, ich solle hier warten.</em> <em>Der Arzt sagte, ich solle mehr schlafen.</em> The infinitive is also possible with the person as an object: <em>Sie sagte mir, hier zu warten.</em> A polite request is often reported with <strong>bitten</strong> or <strong>auffordern</strong> + <em>zu</em> + infinitive: „Rufen Sie mich bitte an!“ → <em>Er bat mich, ihn anzurufen.</em>"
      },
      {
        contrast: "English reports questions with <em>if</em> or <em>whether</em> and a backshifted tense (<em>he asked if I had time</em>), and commands with <em>tell</em> + object + infinitive (<em>she told me to wait</em>). German uses <em>ob</em> with the verb at the end, in the Konjunktiv (<em>ob ich Zeit hätte</em>), and for commands usually a clause with <em>sollen</em> (<em>Sie sagte, ich solle warten</em>); the infinitive works best with <em>bitten</em> and <em>auffordern</em>."
      },
      {
        trap: "<em>ob</em> is not <em>dass</em>: <em>Er fragte, dass ich Zeit hätte</em> makes no sense. And after <em>ob</em> or a question word the verb goes to the end, not into second position as in the direct question: <em>wann der Zug fahre</em>, not <em>wann fährt der Zug</em>."
      },
      {
        tip: "In speech the indicative is often enough for reported questions (<em>Er hat gefragt, ob ich Zeit habe</em>); the Konjunktiv is the form of written texts and reports."
      }
    ],
    grammar: {
      title: "Questions and commands in reported speech",
      note: "<b>Yes/no question</b>: ob + verb at the end. <b>Open question</b>: question word + verb at the end. <b>Command</b>: sollen in the Konjunktiv I. <b>Request</b>: jemanden bitten / jemanden auffordern, etwas zu tun (Er bat mich, ihn anzurufen. Er forderte mich auf, zu warten.).",
      table: {
        head: ["direct speech", "reported speech"],
        rows: [
          ["„Hast du Zeit?“", "Er fragte, ob ich Zeit hätte."],
          ["„Wann fährt der Zug?“", "Sie fragte, wann der Zug fahre."],
          ["„Warte hier!“", "Sie sagte, ich solle hier warten."],
          ["„Rufen Sie mich bitte an!“", "Er bat mich, ihn anzurufen."]
        ]
      },
      examples: [
        { tr: "He asked if I had time.", note: "ob + verb at the end, Konjunktiv II instead of ich habe" },
        { tr: "She asked when the train left.", note: "question word + fahre" },
        { tr: "She told me to wait here.", note: "command: ich solle" },
        { tr: "He asked me to call him.", note: "bitten + zu + infinitive" },
        { tr: "She wanted to know whether I'd come along.", note: "wissen wollen, ob ..." },
        { tr: "The doctor told me to sleep more.", note: "advice reported with sollen" }
      ]
    },
    vocab: [
      "the request, the favor",
      "the instruction",
      "the order, the command",
      "the information (Auskunft geben: to give information)",
      "the questioning, the interrogation",
      "to call on, to ask (someone to do something)",
      "to ask, to request (um + accusative: for)",
      "to inquire (nach + dative: about)",
      "to want to know",
      "to demand",
      "expressly, explicitly",
      "urgently"
    ],
    exercises: [
      {
        q: "How do you report “Hast du Zeit?” (he to me)?",
        opts: [
          "Er fragte, ob ich Zeit hätte.",
          "Er fragte, dass ich Zeit hätte.",
          "Er fragte, ob hätte ich Zeit."
        ],
        why: "Yes/no question: <b>ob</b> + verb at the end. <i>dass</i> does not introduce questions, and after <i>ob</i> the verb must go to the end, not straight after it."
      },
      {
        q: "How do you report “Warte hier!” (she to me)?",
        opts: [
          "Sie sagte, ich solle hier warten.",
          "Sie sagte, ich warte hier.",
          "Sie sagte, warte ich hier."
        ],
        why: "A reported command uses <b>sollen</b> in the Konjunktiv I: <i>ich solle ... warten</i>."
      },
      {
        q: "How do you report “Wann fährt der Zug?” (she)?",
        opts: [
          "Sie fragte, wann der Zug fahre.",
          "Sie fragte, wann fährt der Zug.",
          "Sie fragte, ob wann der Zug fahre."
        ],
        why: "The question word stays and the verb goes to the end: <b>wann der Zug fahre</b>. No <i>ob</i> is added."
      },
      {
        q: "Fill in: “Er fragte, ___ ich mitkommen wolle.”",
        hint: "reported yes/no question",
        why: "<b>ob</b>: it introduces a reported yes/no question and sends the verb to the end, like English <i>whether</i>."
      },
      {
        q: "Fill in: “Der Arzt sagte, ich ___ mehr schlafen.”",
        hint: "sollen in the Konjunktiv I, ich",
        why: "<b>solle</b>: Konjunktiv I of <i>sollen</i>, which here differs from the indicative <i>ich soll</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "“Please call me!” → He asked me to call him.",
        why: "<i>Er bat mich, ihn anzurufen</i>: <i>bat</i> is the Präteritum of <i>bitten</i>; with a separable verb, <i>zu</i> goes between the particle and the verb."
      },
      {
        q: "Match each verb with its meaning.",
        pairs: [
          "to ask, to request",
          "to call on (someone to do something)",
          "to inquire",
          "to demand"
        ]
      },
      {
        q: "Put the words in order.",
        tr: "She wanted to know whether I had time tomorrow.",
        why: "<i>Sie wollte wissen, ob ich morgen Zeit hätte.</i> After <i>ob</i> the verb <i>hätte</i> ends the clause."
      },
      {
        q: "Translate: “She asked me where I lived.”",
        why: "<i>Sie fragte mich, wo ich wohnte</i>, or <i>wo ich wohne</i>, also correct. The Konjunktiv I <i>ich wohne</i> looks like the indicative, and so does <i>wohnte</i>, identical to the Präteritum: if you want the Konjunktiv to be recognizable, use <i>wo ich wohnen würde</i>."
      },
      {
        tr: "The police officer asked me if I had seen the accident. Then he asked me to show him my ID.",
        why: "In <i>Polizist</i> the stress falls on <b>zist</b>; in <i>forderte ... auf</i> the particle goes to the end; in <i>Ausweis</i> the <b>au</b> is [aʊ] and the <b>ei</b> is [aɪ]."
      },
      {
        tr: "She asked me to call her back urgently.",
        why: "In <i>dringend</i> the <b>ng</b> is [ŋ] and the final <b>d</b> sounds like [t]; in <i>zurückzurufen</i> the second <i>zu</i> sits between <i>zurück</i> and <i>rufen</i>."
      }
    ]
  },
  "lesson:b2-u05-test": {
    theme: "Check",
    title: "Test: She said she was ill",
    objectives: [
      "check the Konjunktiv I, the shifts in reported speech, ob and sollen"
    ],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Fill in: “Sie sagte, sie ___ keine Zeit.”",
        hint: "Konjunktiv I of haben, sie (she)",
        why: "<b>habe</b>: in the third person singular the Konjunktiv I differs from the indicative <i>hat</i>."
      },
      {
        q: "Fill in: “Er erklärte, er ___ am Vortag in Berlin gewesen.”",
        hint: "Konjunktiv I of sein, er",
        why: "<b>sei</b>: past Konjunktiv I with <i>sein</i> + <i>gewesen</i>."
      },
      {
        q: "Fill in: “Sie fragte, ___ ich Hunger hätte.”",
        hint: "reported yes/no question",
        why: "<b>ob</b>, with the verb <i>hätte</i> at the end."
      },
      {
        q: "What is the Konjunktiv I of können in the third person singular?",
        opts: [
          "er könne",
          "er kann",
          "er könnte"
        ],
        why: "Infinitive stem <i>könn-</i> + <i>-e</i>: <b>er könne</b>. <i>könnte</i> is the Konjunktiv II."
      },
      {
        q: "How do you report “Bring mir das Buch!” (he to me)?",
        opts: [
          "Er sagte, ich solle ihm das Buch bringen.",
          "Er sagte, ich bringe ihm das Buch.",
          "Er sagte, bring ihm das Buch."
        ],
        why: "Reported command: <b>sollen</b> in the Konjunktiv I, and <i>mir</i> becomes <i>ihm</i>."
      },
      {
        q: "Fill in, newspaper style, with the form that replaces the Konjunktiv I: “Die Kinder sagten, sie ___ Hunger.”",
        opts: [
          "hätten",
          "haben",
          "habe"
        ],
        why: "In the plural <i>sie haben</i> looks like the indicative, so the Konjunktiv II <b>hätten</b> is used. <i>habe</i> is singular."
      },
      {
        q: "Which sentences report “Ich kann nicht kommen”, said by him, correctly in newspaper style?",
        opts: [
          "Er sagte, er könne nicht kommen.",
          "Er sagte, dass er nicht kommen könne.",
          "Er sagte, er kann nicht kommen könne.",
          "Er sagte, ich könne nicht kommen."
        ],
        why: "The first two are correct. The third mixes indicative and Konjunktiv, the fourth doesn't change the person."
      },
      {
        q: "Complete the sentence.",
        tr: "“I sent the letter yesterday.” → She said she had sent the letter the day before.",
        why: "<i>Sie sagte, sie habe den Brief am Tag davor geschickt</i>: past Konjunktiv I and <i>gestern → am Tag davor</i>."
      },
      {
        tr: "The company's spokeswoman stated that the customers had been informed immediately. Asked whether there were further problems, she replied that she could not say yet.",
        why: "In <i>Sprecherin</i> the <b>sp</b> is [ʃp]; in <i>informiert</i> the stress falls on <b>miert</b>; in <i>weitere</i> the <b>ei</b> is [aɪ]."
      },
      {
        tr: "The witness said he had never seen the man before.",
        why: "In <i>Zeuge</i> the <b>Z</b> is [ts]; in <i>zuvor</i> the <b>v</b> sounds like [f]; in <i>gesehen</i> the <b>h</b> is silent."
      }
    ]
  }
});
