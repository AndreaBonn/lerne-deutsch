/* ============================================================
   Learner-language text (en) for data/core/pfl-08.js, unit pfl-u08.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:pfl-u08": {
    title: "Rounds, orders and the team",
    grammarNote: "the passive in the present and with modals on rounds · dass and ob clauses to report and check an order · the connectors deshalb, aber, denn · verbs with a fixed preposition in the team meeting · the polite Konjunktiv II on the phone"
  },
  "lesson:pfl-u08-l1": {
    theme: "Rounds",
    title: "Rounds",
    objectives: [
      "follow rounds and understand what is decided for the patient",
      "recognize the passive: wird abgenommen, wird gewechselt, wurde gemacht",
      "understand the passive with modals: soll mobilisiert werden",
      "speak up with the nursing observations"
    ],
    theory: [
      {
        h: "What happens on rounds",
        p: "On <strong>Visite</strong> the physician (often with the <em>Oberärztin</em> or <em>Oberarzt</em>) goes from room to room with the patient's nurse. The team looks at the results (<em>Befunde</em>), decides whether the treatment continues and gives the orders for the next days. Your job is to listen, write things down and bring in the nursing observations: how the patient slept, whether they are eating, whether they are getting up, whether they are in pain. Orders given verbally on rounds must then show up in writing in the chart."
      },
      {
        h: "The passive: what gets done matters",
        p: "On rounds people talk mostly about <strong>what gets done</strong>, not about who does it. That is why German uses the <strong>passive</strong>: conjugated <em>werden</em> + past participle at the end. In the present: <em>Der Verband <b>wird</b> morgen <b>gewechselt</b>.</em> In the Präteritum: <em>Die Röntgenaufnahme <b>wurde</b> gestern <b>gemacht</b>.</em> With a modal, the modal is conjugated and the participle plus the infinitive <em>werden</em> go to the end: <em>Frau Lang <b>soll</b> heute <b>mobilisiert werden</b>.</em> Often the person doing it is you: <em>Bei Herrn Wolf wird ein Blutbild abgenommen</em> means that after rounds the blood draw is a nursing task."
      },
      {
        contrast: "English uses the passive on rounds too (“labs will be drawn in the morning”, “the dressing gets changed today”), so the idea is not new to you. The trap is the auxiliary. English builds the passive with <em>be</em> or <em>get</em>; German uses <em>werden</em>, and <em>sein</em> + participle describes a state, not an action: <em>Der Verband ist gewechselt</em> means “the dressing is (already) changed”, while <em>Der Verband wird gewechselt</em> means “the dressing is being / will be changed”, which on rounds is usually the order. The second trap is the future: <em>werden</em> also builds the future, so watch the last word. <em>wird gewechselt</em> (participle) is passive, “gets changed”; <em>wird wechseln</em> (infinitive) is future, “will change”. And the cast on rounds does not map one to one onto a US team: there are no residents and attendings by those names. The <em>Assistenzarzt</em> is a physician in specialty training (roughly a resident), the <em>Oberarzt</em> is a senior specialist supervising a section (roughly an attending), and the <em>Chefarzt</em> heads the whole department."
      },
      {
        trap: "<em>fortsetzen</em> is a separable verb and takes <em>ge-</em> after the prefix: <em>fortgesetzt</em>, never <em>gefortsetzt</em>. <em>mobilisieren</em> ends in <em>-ieren</em>, so its participle has no <em>ge-</em>: <em>mobilisiert</em>, never <em>gemobilisiert</em>. And <em>der Befund</em> is a result or finding, not only the written report: <em>ohne Befund</em> means “normal, nothing found”, so a report “without findings” is good news, not a missing report. Do not confuse <em>die Visite</em> with an English “visit”: a visit from family is <em>der Besuch</em>."
      },
      {
        tip: "Bring a sheet or the tablet with your patients to rounds and write down every order the moment you hear it, with who does it and when. If you miss something, ask right away, at the bedside: <em>Entschuldigung, wird das Blutbild heute oder morgen abgenommen?</em> One more question on rounds costs ten seconds; a misunderstood order costs far more."
      }
    ],
    grammar: {
      title: "The passive with werden",
      note: "Present: <b>wird</b> + participle. Präteritum: <b>wurde</b> + participle. With a modal: <b>soll / muss / kann</b> + participle + <b>werden</b>.",
      table: {
        head: ["form", "structure", "example"],
        rows: [
          ["present passive", "wird + participle", "Der Verband wird morgen gewechselt."],
          ["Präteritum passive", "wurde + participle", "Die Röntgenaufnahme wurde gestern gemacht."],
          ["passive with a modal", "soll + participle + werden", "Frau Lang soll heute mobilisiert werden."],
          ["question", "Wann / Wird ... + participle", "Wann wird Herr Wolf entlassen?"]
        ]
      },
      examples: [
        { tr: "Mr. Wolf is getting a CBC drawn today.", note: "wird ... abgenommen: the blood draw is usually a nursing task" },
        { tr: "The dressing will be changed tomorrow.", note: "present passive: wird + gewechselt at the end" },
        { tr: "The X-ray was taken yesterday.", note: "Präteritum passive: wurde gemacht" },
        { tr: "Mrs. Lang is supposed to be mobilized today.", note: "modal soll + mobilisiert werden; mobilisiert without ge-" },
        { tr: "The treatment continues as before.", note: "fortsetzen is separable: fortgesetzt" },
        { tr: "When is Mr. Wolf being discharged?", note: "question with the passive: entlassen at the end" }
      ]
    },
    vocab: [
      "rounds",
      "the senior physician (female), roughly an attending",
      "the result, the finding",
      "the complete blood count, the CBC",
      "the X-ray",
      "the therapy, the treatment plan",
      "the treatment, the care",
      "the dressing change",
      "to draw blood",
      "to continue",
      "to discharge",
      "normal, unremarkable"
    ],
    dialogue: [
      "Good morning, Mr. Wolf. How are you today?",
      "Better than yesterday, but I'm still tired.",
      "Yesterday's X-ray is unremarkable. The treatment continues as before.",
      "Should we draw another CBC tomorrow?",
      "Yes, tomorrow morning, please. And the dressing gets changed today.",
      "Okay. And what about mobilization?",
      "Mr. Wolf should be mobilized twice today, first to the edge of the bed.",
      "When will I be discharged?",
      "If the values stay good, maybe on Friday."
    ],
    culture: {
      title: "A German angle: who is on rounds",
      text: "<p>On German units <i>Visite</i> usually happens in the morning. The unit physician (<i>Stationsarzt</i>, <i>Stationsärztin</i>) does it every day; once or twice a week there is also the <i>Oberarztvisite</i> or the <i>Chefarztvisite</i>, with the head of the department. The titles do not match US ones: an <i>Oberarzt</i> is a senior specialist responsible for a section, the <i>Chefarzt</i> is the department chief, and the <i>Assistenzarzt</i> is still in specialty training.</p><p>Whether the nurse joins rounds varies: on some units you go along on every round, on others the orders are passed on afterwards in the staff room. When you start, ask how your unit does it.</p>"
    },
    exercises: [
      {
        q: "On rounds the doctor says a CBC needs to be drawn tomorrow morning. Complete: “Morgen früh ___ ein Blutbild abgenommen.”",
        opts: ["wird", "ist", "hat"],
        why: "The present passive is built with <b>werden</b>: <i>wird</i> + the participle <i>abgenommen</i> at the end. <i>ist abgenommen</i> describes a state, <i>hat abgenommen</i> is an active Perfekt (and with <i>abnehmen</i> it can also mean “has lost weight”)."
      },
      {
        tr: "The Präteritum of werden, all persons.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i>: this is the form that carries the passive in the past, <i>wurde gemacht</i>. First and third person singular are the same."
      },
      {
        q: "Complete: “Der Verband ___ heute gewechselt.”",
        hint: "present passive",
        why: "<b>wird</b>: singular subject <i>der Verband</i>, present passive with the participle <i>gewechselt</i> at the end."
      },
      {
        q: "Complete the sentence.",
        tr: "Mr. Wolf is supposed to be mobilized twice today.",
        why: "<i>soll ... <b>mobilisiert werden</b></i>: with a modal, the participle comes at the end and then the infinitive <i>werden</i>. <i>mobilisiert</i> takes no <i>ge-</i> because the verb ends in <i>-ieren</i>."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Die Therapie wird gefortsetzt.",
          "Das Blutbild wurde gestern abgenommen.",
          "Der Patient soll heute entlassen werden.",
          "Der Patient soll heute werden entlassen."
        ],
        why: "<i>fortsetzen</i> is separable: <i>fort<b>ge</b>setzt</i>, with <i>ge-</i> after the prefix. With a modal the final order is participle + <i>werden</i>: <i>entlassen werden</i>, not <i>werden entlassen</i>."
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["rounds", "senior physician (female)", "result, finding", "CBC", "X-ray", "dressing change"]
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["the therapy", "the result, the finding", "the X-ray", "the CBC"]
      },
      {
        q: "Put the words in order.",
        tr: "The treatment continues as before.",
        why: "<i>Die Therapie wird wie bisher fortgesetzt.</i> The conjugated verb <i>wird</i> in second position, the participle <i>fortgesetzt</i> at the end; <i>wie bisher</i> normally goes in the middle; in speech it can also follow the participle, <i>wird fortgesetzt wie bisher</i>, and that order is accepted too."
      },
      {
        q: "Translate (on rounds): “A CBC will be drawn tomorrow morning.”",
        why: "<i>Morgen früh wird ein Blutbild abgenommen.</i> English “will be drawn” becomes <i>wird</i> + participle, not <i>wird ... sein</i>. The usual verb for a blood draw is <i>abnehmen</i>; <i>gemacht</i> also works. Strictly, what is drawn is the blood (<i>Blut abnehmen</i>) and the CBC is run on the sample: <i>ein Blutbild abnehmen</i> is everyday ward shorthand. <i>morgen früh</i> means “tomorrow morning”."
      },
      {
        q: "On rounds.",
        setting: "You are Mr. Wolf's nurse and you are on rounds with the senior physician.",
        lines: [
          { tr: "Anything else from nursing about Mr. Wolf?" },
          { tr: "Say that Mr. Wolf slept poorly last night.", answerTr: "Yes, Mr. Wolf slept poorly last night." },
          { tr: "The dressing gets changed today." },
          { tr: "Say that you will change it after rounds.", answerTr: "Okay, I'll change it after rounds." },
          { tr: "And mobilization?" },
          { tr: "Say that Mr. Wolf has already been mobilized once today.", answerTr: "Mr. Wolf was already mobilized once today." }
        ]
      },
      {
        tr: "Yesterday's X-ray is unremarkable. The treatment continues as before.",
        why: "In <i>Röntgenaufnahme</i> the <b>ö</b> is short and the stress falls on <b>Rönt</b>; in <i>unauffällig</i> the stress falls on <b>un</b> and the final <b>g</b> sounds like [ç]; in <i>Therapie</i> the <b>th</b> is a plain [t], with no English “th” sound, and the stress falls on the last syllable, <b>pie</b>."
      },
      {
        tr: "Mr. Wolf is getting a CBC drawn today.",
        why: "In <i>Blutbild</i> the <b>u</b> is long and the final <b>d</b> sounds like [t]; in <i>abgenommen</i> the stress falls on <b>ab</b>; the <b>w</b> in <i>Wolf</i> and <i>wird</i> is [v], like English “v”."
      }
    ]
  },
  "lesson:pfl-u08-l2": {
    theme: "Orders and clarifying questions",
    title: "Understanding and checking an order",
    objectives: [
      "report what was ordered with dass",
      "express a doubt about an order with ob",
      "ask the physician for clarification with nachfragen",
      "link reason and consequence with deshalb, aber, denn"
    ],
    theory: [
      {
        h: "An unclear order does not get carried out",
        p: "The <strong>Anordnung</strong> is the physician's order: a test, a dressing, mobilization, nothing by mouth before a procedure. If an order is unclear, incomplete or unusual (it says what but not when or how, or it does not seem to fit the patient), there is one rule: <strong>ask first, then carry it out</strong>. The sentence to have ready is <em>Ich frage noch einmal nach.</em> Asking is not questioning the physician's competence: it is part of the responsibility of whoever carries out the order. After the clarification, the correct order has to appear in writing."
      },
      {
        h: "Report with dass, check with ob",
        p: "To say what is written or what was ordered, use <em>dass</em>: <em>In der Akte steht, <b>dass</b> sie heute nüchtern bleibt.</em> To express a doubt, use <em>ob</em>, the indirect yes/no question: <em>Ich bin nicht sicher, <b>ob</b> die Anordnung noch gilt.</em> In both subordinate clauses the conjugated verb goes to the end. To link two main clauses: <em>deshalb</em> (consequence, the verb comes right after), <em>aber</em> and <em>denn</em> (no change in word order): <em>Die Anordnung ist unklar, <b>deshalb frage</b> ich nach. Ich frage nach, <b>denn</b> ich <b>möchte</b> keinen Fehler machen.</em>"
      },
      {
        contrast: "In English “if” does two jobs: the condition (“if it rains”) and the indirect question (“I'm not sure if it's still valid”). German splits them: the condition is <em>wenn</em>, the indirect question is <em>ob</em>. English speakers tend to say <em>Ich weiß nicht, wenn die Anordnung noch gilt</em>, which to a German ear sounds like “I don't know, whenever the order is still valid”. The easy test: if you could say “whether” instead of “if”, you need <em>ob</em>. The other half of this lesson is a habit you may already have. In US hospitals a verbal or phone order is usually written down and read back (“read back and verified”) before you act on it. German units do the same, often with less formal wording: you repeat the order out loud, <em>Ich wiederhole: ...</em>, and the physician confirms and signs it as soon as possible. Keep the habit, just switch the words."
      },
      {
        trap: "<em>anordnen</em> is separable: <em>Die Ärztin <b>ordnet</b> ein Blutbild <b>an</b></em>, Perfekt <em>hat ... ange<b>ordnet</b></em>. Do not mix it up with <em>ordnen</em>, “to sort, tidy up”. To order supplies or food is <em>bestellen</em>, not <em>anordnen</em>. <em>Die Indikation</em> is the reason a treatment is given, just like “indication” in English; with the patient you do not say <em>Indikation</em> but <em>der Grund für die Behandlung</em>. And the chart is <em>die Patientenakte</em>: <em>die Karte</em> is a card or a map, never the chart."
      },
      {
        tip: "When you ask for clarification, first say in your own words what you understood, then ask your question: <em>In der Akte steht, dass sie nüchtern bleiben soll. Gilt das noch?</em> The physician sees right away where the doubt is. Write down the answer, the time and the name of the person who gave it."
      }
    ],
    grammar: {
      title: "dass, ob and the connectors",
      note: "<b>dass</b> reports a fact, <b>ob</b> introduces a doubt (indirect yes/no question): in both, the conjugated verb goes to the end. After <b>deshalb</b> the verb comes right away; <b>aber</b> and <b>denn</b> do not change the order.",
      table: {
        head: ["word", "function", "example"],
        rows: [
          ["dass", "report what is written or ordered", "In der Akte steht, dass der Verband täglich gewechselt wird."],
          ["ob", "express a doubt, indirect yes/no question", "Ich bin nicht sicher, ob die Anordnung noch gilt."],
          ["deshalb", "consequence, verb right after", "Die Anordnung ist unklar, deshalb frage ich nach."],
          ["aber", "contrast, normal order", "Ich habe sie gelesen, aber ich verstehe sie nicht."],
          ["denn", "reason, normal order", "Ich frage nach, denn ich möchte keinen Fehler machen."]
        ]
      },
      examples: [
        { tr: "The doctor ordered that Mrs. Lang stay NPO today.", note: "dass: the verb bleibt goes to the end" },
        { tr: "The chart says the dressing is to be changed daily.", note: "dass + passive: gewechselt wird at the end" },
        { tr: "I'm not sure whether the order is still valid.", note: "ob: indirect yes/no question, gilt at the end; English can say “if” or “whether” here" },
        { tr: "The order isn't clear, so I'm checking again.", note: "deshalb in first position, then frage right away" },
        { tr: "I read the order, but I don't understand it.", note: "aber does not move the verb" },
        { tr: "I'd rather ask one more time, because I don't want to make a mistake.", note: "denn does not move the verb: möchte stays in second position" }
      ]
    },
    vocab: [
      "the (physician's) order",
      "to order, to prescribe",
      "the indication, the reason for a treatment",
      "the reason",
      "the clarifying question, the follow-up question",
      "to ask again, to check back",
      "unambiguous, clear",
      "unclear",
      "to be valid, to apply",
      "the patient chart",
      "to sign",
      "to carry out"
    ],
    dialogue: [
      "Excuse me, doctor, I have a question about Mrs. Lang.",
      "Yes, go ahead.",
      "The chart says she's supposed to stay NPO today. I'm not sure whether that still applies.",
      "Good that you're asking. The test was postponed, so she can eat again.",
      "And the CBC? It only says lab here, but not when.",
      "Tomorrow morning, please. I'll add that to the chart right away.",
      "Thank you. I'd rather ask one more time, because I don't want to make a mistake."
    ],
    culture: {
      title: "A German angle: orders and responsibility",
      text: "<p>In Germany there is a distinction between the responsibility of the person who orders (<i>Anordnungsverantwortung</i>, the physician's) and that of the person who carries it out (<i>Durchführungsverantwortung</i>, whoever performs the task). The person carrying it out is accountable for how they do it, and also for doing it when they had reason to doubt it. That is why an unclear order is clarified before, not after.</p><p>Verbal orders, for example by phone at night, are usually repeated out loud on the unit and then signed by the physician as soon as possible, much like read-back in the US. The exact procedure is set by your facility's rules: ask about it during orientation.</p>"
    },
    exercises: [
      {
        q: "In the chart you find an order that seems unusual to you. What do you say?",
        opts: ["Ich mache es so, wie ich es verstehe.", "Ich frage noch einmal nach.", "Ich warte bis morgen."],
        why: "An unclear or unusual order is always clarified with the physician before you carry it out: <b>Ich frage noch einmal nach</b>. Interpreting it on your own or putting it off without telling anyone are not safe options."
      },
      {
        tr: "The Perfekt of anordnen, all persons.",
        why: "<i>Habe angeordnet, hast angeordnet, hat angeordnet</i> ...: separable verb, <i>ge-</i> goes between the prefix <i>an-</i> and the stem, and the ending is <i>-et</i> because the stem ends in <b>d</b>."
      },
      {
        q: "Complete: “Ich bin nicht sicher, ___ die Anordnung noch gilt.”",
        hint: "indirect yes/no question",
        why: "<b>ob</b>: the clause hides a yes/no question (“is the order still valid?”). In English you could say “whether” here, which is the sign. <i>wenn</i> would be a condition; <i>dass</i> reports a content and asks nothing, and after <i>nicht sicher</i> the normal choice is <i>ob</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "The doctor ordered that the dressing be changed daily.",
        why: "<i><b>dass</b></i> reports the content of the order; in the subordinate clause the passive ends in <i>gewechselt <b>wird</b></i>: the conjugated verb goes to the end, after the participle."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "In der Akte steht, dass Frau Lang nüchtern bleibt.",
          "In der Akte steht, dass Frau Lang bleibt nüchtern.",
          "Ich weiß nicht, ob die Anordnung noch gilt.",
          "Ich weiß nicht, ob gilt die Anordnung noch.",
          "Die Anordnung ist unklar, deshalb frage ich nach."
        ],
        why: "After <i>dass</i> and <i>ob</i> the conjugated verb goes to the end: <i>nüchtern bleibt</i>, <i>noch gilt</i>. After <i>deshalb</i> the verb comes right away: <i>deshalb frage ich</i>."
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["order", "indication", "reason", "clarifying question", "patient chart", "lab"]
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["the order", "the clarifying question", "the indication", "to ask again"]
      },
      {
        q: "Put the words in order.",
        tr: "I'm not sure whether the order is still valid.",
        why: "<i>Ich bin nicht sicher, ob die Anordnung noch gilt.</i> After the comma <i>ob</i> opens the subordinate clause and the verb <i>gilt</i> goes to the end."
      },
      {
        q: "Translate: “The order isn't clear, so I'm checking again.”",
        why: "<i>Die Anordnung ist nicht eindeutig, deshalb frage ich noch einmal nach.</i> <i>unklar</i> or <i>nicht klar</i> also work, and <i>darum</i> or <i>deswegen</i> instead of <i>deshalb</i>. English “so I'm checking” keeps subject before verb; German puts the verb right after <i>deshalb</i>. “again” is <i>noch einmal</i>; the prefix <i>nach</i> goes to the end."
      },
      {
        q: "A clarifying question.",
        setting: "You have a doubt about Mrs. Lang's order and you go to the unit physician.",
        lines: [
          { tr: "You wanted to talk to me?" },
          { tr: "Say that you have a question about Mrs. Lang's order.", answerTr: "Yes, I have a question about Mrs. Lang's order." },
          { tr: "What's unclear?" },
          { tr: "Say that you don't know whether she is supposed to stay NPO today.", answerTr: "I don't know whether she's supposed to stay NPO today." },
          { tr: "She can eat again. The test was postponed." },
          { tr: "Say thank you and ask the doctor to add it to the chart.", answerTr: "Thank you. Please add that to the chart as well." }
        ]
      },
      {
        tr: "The chart says she's supposed to stay NPO today. I'm not sure whether that still applies.",
        why: "In <i>nüchtern</i> the <b>ü</b> is short and the <b>ch</b> after <b>ü</b> is [ç]; in <i>sicher</i> the initial <b>s</b> is voiced, like English “z”; in <i>gilt</i> the <b>g</b> is always hard, never like “gin”."
      },
      {
        tr: "I'd rather ask one more time, because I don't want to make a mistake.",
        why: "In <i>lieber</i> the <b>ie</b> is long; in <i>nach</i> the <b>ch</b> after <b>a</b> is [x], with no English equivalent; in <i>möchte</i> the <b>ö</b> is short and the <b>ch</b> is [ç]; in <i>Fehler</i> the <b>e</b> is long and the <b>h</b> is silent."
      }
    ]
  },
  "lesson:pfl-u08-l3": {
    theme: "Team meeting",
    title: "The team meeting",
    objectives: [
      "take part in a team meeting and get the floor",
      "use verbs with a fixed preposition: sich kümmern um, sich erkundigen nach, warten auf, sprechen über",
      "ask what someone is talking about with worum and worauf",
      "refer back to a topic with darum, darüber, darauf"
    ],
    theory: [
      {
        h: "Who does what",
        p: "In the <strong>Teambesprechung</strong> the team splits up tasks, discusses difficult cases (<em>Fallbesprechung</em>) and organizes the <em>Dienstplan</em>, the shift schedule. The question you hear most is <em>Wer kümmert sich um ...?</em>, “who's taking care of ...?”, and the answer that takes on a task is <em>Ich kümmere mich darum</em> or, more simply, <em>Das mache ich.</em> To get the floor without interrupting: <em>Ich würde gern etwas zu Herrn Wolf sagen.</em>"
      },
      {
        h: "Verbs with a fixed preposition",
        p: "Many German verbs come with a <strong>fixed preposition</strong> that you learn together with the verb as one block: <em>sich kümmern <b>um</b></em> + accusative, <em>sich erkundigen <b>nach</b></em> + dative, <em>warten <b>auf</b></em> + accusative, <em>sprechen <b>über</b></em> + accusative. The question is built with <em>wo(r)</em> + preposition: <em><b>Worauf</b> wartest du?</em> To refer back to something already mentioned, use <em>da(r)</em> + preposition: <em>Ich kümmere mich <b>darum</b>. <b>Darüber</b> sprechen wir am Ende.</em> For people, though, you keep the preposition with the pronoun: <em>Ich kümmere mich <b>um ihn</b>.</em>"
      },
      {
        contrast: "English has prepositional verbs too, and that is exactly the trap: the prepositions almost never match. “Take care <b>of</b>” is <em>sich kümmern <b>um</b></em>, “ask <b>about</b>” is <em>sich erkundigen <b>nach</b></em>, “wait <b>for</b>” is <em>warten <b>auf</b></em>, “talk <b>about</b>” is <em>sprechen <b>über</b></em>. Translating the English preposition gives the typical mistakes: <em>warten für</em>, <em>sich kümmern von</em>, <em>sich erkundigen über</em>. There is a second difference. English refers back with “it” or “that” and leaves the preposition at the end (“I'll take care of it”, “we'll talk about that later”); German fuses them into one word with <em>da-</em> and puts it in the middle of the clause: <em>Ich kümmere mich <b>darum</b>. Wir sprechen später <b>darüber</b>.</em> The same goes for questions: “What are you waiting for?” is <em><b>Worauf</b> wartest du?</em>, never <em>Was wartest du auf?</em>"
      },
      {
        trap: "<em>sich erkundigen</em> and <em>sich kümmern</em> are reflexive: without <em>sich</em> the sentence is wrong (<em>Ich kümmere <b>mich</b> um ihn</em>, not <em>Ich kümmere um ihn</em>). <em>erkundigen</em> has the inseparable prefix <em>er-</em>, so no <em>ge-</em> in the participle: <em>hat sich erkundigt</em>. <em>Der Dienstplan</em> is the schedule, not a “service plan”. And when a relative asks about a result, the answer in the meeting is not the result: the team decides who tells the physician, because discussing the diagnosis is the physician's job."
      },
      {
        tip: "Learn the verbs with their preposition and case inside a unit sentence: <em>Ich kümmere mich um Zimmer acht. Ich warte auf den Befund. Wir sprechen über den Dienstplan.</em> Three sentences like these, said out loud a few times, are worth more than a list of prepositions to memorize."
      }
    ],
    grammar: {
      title: "Verbs with a fixed preposition",
      note: "Learn the verb with its <b>preposition</b> and its <b>case</b>. Question: <b>wo(r)</b> + preposition. Referring back to a thing: <b>da(r)</b> + preposition. For people: preposition + pronoun.",
      table: {
        head: ["verb", "case", "question", "referring back"],
        rows: [
          ["sich kümmern um", "accusative", "Worum kümmerst du dich?", "Ich kümmere mich darum."],
          ["sich erkundigen nach", "dative", "Wonach hat sie sich erkundigt?", "Sie hat sich danach erkundigt."],
          ["warten auf", "accusative", "Worauf wartest du?", "Ich warte darauf."],
          ["sprechen über", "accusative", "Worüber sprechen wir?", "Darüber sprechen wir am Ende."]
        ]
      },
      examples: [
        { tr: "Who's taking care of room eight today?", note: "sich kümmern um + accusative" },
        { tr: "I'll take care of the new admission.", note: "um die Neuaufnahme: feminine accusative" },
        { tr: "Today we're talking about the schedule.", note: "sprechen über + accusative: über den Dienstplan" },
        { tr: "The daughter asked about the results.", note: "sich erkundigen nach + dative: nach dem Befund; erkundigt without ge-" },
        { tr: "I'm still waiting for the doctor's letter.", note: "warten auf + accusative: auf den Arztbrief" },
        { tr: "We'll talk about that at the end.", note: "darüber refers back to a topic already mentioned" }
      ]
    },
    vocab: [
      "the team meeting",
      "the shift schedule",
      "to take care of",
      "to ask about, to inquire about",
      "to talk about",
      "to wait for",
      "to complain about",
      "the new admission, the newly admitted patient",
      "the case discussion",
      "the suggestion",
      "in agreement, okay with",
      "the nurse manager, the charge nurse"
    ],
    dialogue: [
      "Today we have two things: the schedule and Mr. Wolf.",
      "I'd like to say something about Mr. Wolf first.",
      "Go ahead.",
      "His daughter asked about the results yesterday. I told her the doctor will talk to her.",
      "I'll make sure the doctor calls her today.",
      "Good. And who's taking care of the new admission this afternoon?",
      "I'll do it. But I'm still waiting for the doctor's letter.",
      "Okay. We'll talk about the schedule at the end."
    ],
    culture: {
      title: "A German angle: the Stationsleitung and the Dienstplan",
      text: "<p>The <i>Stationsleitung</i> is roughly the nurse manager of the unit: she or he handles staffing, prepares the <i>Dienstplan</i> and usually leads the team meeting. The schedule is posted in advance, and requests for days off (<i>Wunschfrei</i>) go in by a deadline set by the unit. There is no exact match for a rotating charge nurse; the shift lead is often just the most experienced nurse on duty.</p><p>Coworkers often use <i>du</i> with each other in the meeting, even though many units stay with <i>Sie</i> for management and physicians. English has no such split, so this one is new: if you are not sure, listen to how the others address each other, or ask: <i>Duzen wir uns?</i></p>"
    },
    exercises: [
      {
        q: "Complete: “Ich kümmere mich ___ die Neuaufnahme.”",
        opts: ["um", "für", "auf"],
        why: "<i>sich kümmern</i> always takes <b>um</b> + accusative. <i>für</i> is a literal “for” that does not belong here; <i>auf</i> goes with <i>warten auf</i>."
      },
      {
        tr: "The present tense of sich kümmern, all persons.",
        why: "<i>Kümmere mich, kümmerst dich, kümmert sich, kümmern uns, kümmert euch, kümmern sich</i>: the reflexive pronoun changes with the person. In the first person singular the <b>e</b> before <b>r</b> stays: <i>kümmere</i>."
      },
      {
        q: "Complete: “Wir warten noch ___ den Befund.”",
        hint: "preposition of warten",
        why: "<b>auf</b>: <i>warten auf</i> + accusative. English “wait for” pushes you toward <i>für</i>, which is exactly the mistake."
      },
      {
        q: "Complete the sentence.",
        tr: "The daughter asked about the results.",
        why: "<i>sich erkundigen <b>nach</b></i> + dative: <i>nach dem Befund</i>: to ask after a result or a person German uses <i>nach</i>, even though English says “about”. <i>sich über etwas erkundigen</i> exists, but it means gathering information on a topic. The participle <i><b>erkundigt</b></i> has no <i>ge-</i>, because <i>er-</i> is an inseparable prefix."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Wer kümmert sich um Zimmer acht?",
          "Wer kümmert sich für Zimmer acht?",
          "Wir sprechen über den Dienstplan.",
          "Er hat sich nach seinem Befund erkundigt.",
          "Wir warten noch für die Laborwerte."
        ],
        why: "The fixed prepositions are <i>kümmern <b>um</b></i>, <i>sprechen <b>über</b></i>, <i>erkundigen <b>nach</b></i>, <i>warten <b>auf</b></i>. <i>für</i> goes with none of these verbs."
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["team meeting", "shift schedule", "new admission", "case discussion", "suggestion", "nurse manager"]
      },
      {
        q: "Match each verb to its meaning.",
        pairs: ["to take care of", "to ask about", "to wait for", "to talk about"]
      },
      {
        q: "Put the words in order.",
        tr: "Who's taking care of the new admission?",
        why: "<i>Wer kümmert sich um die Neuaufnahme?</i> <i>Wer</i> is the subject, the verb follows right away, then the reflexive <i>sich</i> and finally the preposition with its object."
      },
      {
        q: "Translate: “Tomorrow we'll talk about the schedule.”",
        why: "<i>Morgen sprechen wir über den Dienstplan</i> or <i>Wir sprechen morgen über den Dienstplan</i>. “talk about” is <i>sprechen über</i> + accusative; <i>reden über</i> also works. German uses the present for a planned future: no <i>werden</i> needed."
      },
      {
        q: "In the team meeting.",
        setting: "The nurse manager is assigning tasks. You are caring for Mr. Wolf.",
        lines: [
          { tr: "Who's taking care of Mr. Wolf today?" },
          { tr: "Say that you are taking care of him.", answerTr: "I'm taking care of him." },
          { tr: "Has anyone asked about him?" },
          { tr: "Say that his daughter asked about him yesterday.", answerTr: "Yes, his daughter asked about him yesterday." },
          { tr: "What are you still waiting for?" },
          { tr: "Say that you are still waiting for the doctor's letter.", answerTr: "I'm still waiting for the doctor's letter." }
        ]
      },
      {
        tr: "The daughter asked about the results.",
        why: "In <i>Tochter</i> the <b>ch</b> after <b>o</b> is [x]; in <i>erkundigt</i> the stress falls on <b>kun</b> and the <b>g</b> before <b>t</b> sounds like [ç]; in <i>Befund</i> the final <b>d</b> sounds like [t]."
      },
      {
        tr: "I'll take care of the new admission.",
        why: "In <i>kümmere</i> the <b>ü</b> is short; <i>Neuaufnahme</i> has two diphthongs, <b>eu</b> [ɔʏ] as in “boy” and <b>au</b> [aʊ] as in “how”, and the stress falls on <b>Neu</b>."
      }
    ]
  },
  "lesson:pfl-u08-l4": {
    theme: "On the phone",
    title: "On the phone: lab, pharmacy, primary care doctor",
    objectives: [
      "introduce yourself on the phone and say which unit you are calling from",
      "ask politely: hätte, könnten, wäre es möglich, würden",
      "ask someone to repeat or spell a name",
      "read back the information you received to check it"
    ],
    theory: [
      {
        h: "A call from the unit",
        p: "On the phone you start by saying who is calling and from where: <em>Guten Tag, hier ist Station drei.</em> Then you say which patient it is about (<em>Um Herrn Wolf, Zimmer fünf</em>) and what you need. The person answering usually gives the department and their last name: <em>Labor, Schneider, guten Tag.</em> At the end you repeat the important details: <em>Ich wiederhole: ...</em> A lab value you receive by phone is written down right away, read back to check it and, if it is abnormal, reported to the physician."
      },
      {
        h: "The polite Konjunktiv II",
        p: "To ask for something politely, German uses the <strong>Konjunktiv II</strong>, the equivalent of “would” and “could”. Four phrases cover almost every call: <em>Ich <b>hätte</b> eine Frage zu ...</em> (I'd have a question, i.e. I have a question), <em><b>Könnten</b> Sie mir ... durchgeben?</em> (could you ...?), <em><b>Wäre</b> es möglich, ... zu schicken?</em> (would it be possible ...?), <em><b>Würden</b> Sie mich bitte zurückrufen?</em> (would you call me back?). For a wish: <em>Ich <b>würde</b> gern mit Doktor Becker sprechen.</em> After <em>Wäre es möglich</em> comes the infinitive with <em>zu</em>, at the end: <em>den Befund heute noch <b>zu schicken</b></em>."
      },
      {
        contrast: "English makes requests polite in the same way, with “could you” and “would you”, so you already have the reflex. Two things differ. First, German uses its own short forms with <em>haben</em>, <em>sein</em>, the modals and a few other frequent verbs (<em>hätte, wäre, könnte, müsste, dürfte</em>, and <em>würde</em> itself); for most other verbs it uses <em>würde</em> + infinitive, just like English “would” + verb: “would you call me back?” is <em>Würden Sie mich zurückrufen?</em>, and the infinitive goes to the end of the clause, not right after “would”. Second, English often softens with “can you” or even a plain “I need the labs on room five”; on a German phone line <em>Können Sie ...?</em> is acceptable, but a bare statement sounds abrupt. <em>Geben Sie mir die Werte!</em> is an order, and <em>Sie können mir die Werte durchgeben</em> sounds like you are granting permission. The safe default on the phone is <em>Könnten Sie ...?</em> or <em>Würden Sie ...?</em>"
      },
      {
        trap: "<em>Ich hätte eine Frage</em> does not mean the question is hypothetical: it is simply the polite way to say “I have a question”, like English “I'd like to ask”. Do not confuse <em>hätte</em> (would have) with <em>hatte</em> (had): the only difference is the umlaut, and on the phone you hear it in the vowel, [ɛ] versus [a]. <em>durchgeben</em> is separable: <em>Könnten Sie mir die Werte <b>durchgeben</b>?</em>, but <em>Das Labor <b>gibt</b> die Werte <b>durch</b>.</em> And <em>der Hausarzt</em> is the primary care doctor, not a doctor who makes house calls."
      },
      {
        tip: "On the phone, names are spelled with the German spelling alphabet, not the NATO one: <em>W wie Wilhelm, O wie Otto</em>, not “Whiskey, Oscar”: outside aviation and the military the NATO words are not what a German lab tech expects. The current official German list uses city names (<em>W wie Wuppertal</em>), but the older first names like <em>Wilhelm</em> and <em>Otto</em> are still what most people say on a hospital phone. Say numbers one digit at a time: <em>zwei, drei, vier, fünf</em>, not <em>dreiundzwanzig, fünfundvierzig</em>, because the reversed order of the tens (<em>drei-und-zwanzig</em>, “three-and-twenty”) is exactly where mistakes happen. When you receive information, always read it back: <em>Ich wiederhole: ...</em>"
      }
    ],
    grammar: {
      title: "Polite phrases on the phone",
      note: "<b>hätte, wäre, könnte</b> are short Konjunktiv II forms of their own. For almost every other verb: <b>würde</b> + infinitive at the end. After <b>Wäre es möglich</b>: infinitive with <b>zu</b> at the end.",
      table: {
        head: ["phrase", "meaning", "example"],
        rows: [
          ["Ich hätte ...", "I'd have, i.e. I have", "Ich hätte eine Frage zu einem Medikament."],
          ["Könnten Sie ...?", "could you ...?", "Könnten Sie mir die Laborwerte durchgeben?"],
          ["Wäre es möglich, ... zu ...?", "would it be possible ...?", "Wäre es möglich, den Befund heute noch zu schicken?"],
          ["Würden Sie ...?", "+ infinitive: “would” for other verbs", "Würden Sie mich bitte zurückrufen?"],
          ["Ich würde gern ...", "I'd like to", "Ich würde gern mit Doktor Becker sprechen."]
        ]
      },
      examples: [
        { tr: "I have a question about a medication.", note: "hätte: polite form of haben" },
        { tr: "Could you give me Mr. Wolf's lab values?", note: "könnten + durchgeben at the end" },
        { tr: "Would it be possible to send the results today?", note: "Wäre es möglich + infinitive with zu at the end" },
        { tr: "Would you call me back, please?", note: "würden + infinitive: zurückrufen at the end" },
        { tr: "I'd like to speak with Dr. Becker.", note: "würde gern + infinitive" },
        { tr: "Let me read that back: room five, Mr. Wolf.", note: "read the details back to check them" }
      ]
    },
    vocab: [
      "the lab",
      "the pharmacy",
      "the primary care doctor, the family doctor",
      "the lab value",
      "the extension (phone number)",
      "the callback",
      "to give, to pass on (by phone)",
      "to call back",
      "reachable, available",
      "to spell",
      "to put through, to connect",
      "to deliver, to supply"
    ],
    dialogue: [
      "Lab, Schneider speaking, good afternoon.",
      "Good afternoon, this is unit three. I have a question about a CBC.",
      "Which patient is it?",
      "Mr. Wolf, room five. Could you tell me whether the values are back yet?",
      "The values are almost ready. I'll send them to you in ten minutes.",
      "Would it be possible to call me if a value is abnormal?",
      "Yes, of course. What's your extension?",
      "Two, three, four, five. Let me read that back: you'll call if a value is abnormal. Thanks a lot."
    ],
    culture: {
      title: "A German angle: hospital pharmacy and primary care doctor",
      text: "<p>In German hospitals medications usually come from the <i>Krankenhausapotheke</i>, the in-house pharmacy, or from an outside pharmacy under contract. Orders follow fixed times; for a missing medication you call and ask whether an extra delivery is possible.</p><p>The <i>Hausarzt</i> is the primary care doctor. The unit calls them, for example, to ask which medications the patient was taking at home or to prepare the discharge. What you may share by phone is governed by data protection rules, which in Germany play the role HIPAA plays in the US: before giving out information about a patient, check who is on the other end.</p>"
    },
    exercises: [
      {
        q: "You call the lab and want a patient's values. Which sentence is polite?",
        opts: ["Geben Sie mir die Werte!", "Könnten Sie mir bitte die Werte durchgeben?", "Sie können mir die Werte durchgeben."],
        why: "<b>Könnten Sie ...?</b> with the Konjunktiv II is the polite request. The imperative sounds like an order, and <i>Sie können</i> as if you were the one granting permission."
      },
      {
        tr: "The Konjunktiv II of können, all persons.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: the stem takes the umlaut (<b>ö</b>) and the endings are those of the Präteritum. On the phone the form you need most is <i>Könnten Sie ...?</i>"
      },
      {
        q: "Complete: “Ich ___ eine Frage zu einem Medikament.”",
        hint: "Konjunktiv II of haben",
        why: "<b>hätte</b>: polite form of <i>haben</i>, “I'd have”. Watch the umlaut: <i>hatte</i> without it is the Präteritum, “had”."
      },
      {
        q: "Complete the sentence.",
        tr: "Would you call me back, please?",
        why: "<i><b>Würden</b> Sie mich bitte <b>zurückrufen</b>?</i>: Konjunktiv II with <i>würden</i> and the infinitive at the end. <i>Könnten</i> also works. In the infinitive <i>zurückrufen</i> stays in one piece."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Ich hätte eine Frage zur Lieferung.",
          "Ich habe gern eine Frage.",
          "Wäre es möglich, den Befund heute noch zu schicken?",
          "Ich würde gern mit Doktor Becker sprechen.",
          "Ich würde gern mit Doktor Becker zu sprechen."
        ],
        why: "<i>hätte</i> is the correct polite form; <i>gern</i> goes with <i>würde</i>, not with <i>habe eine Frage</i>. After <i>Wäre es möglich</i> you need <i>zu</i>; after <i>würde gern</i> the infinitive has no <i>zu</i>, just as English “I would speak” has no “to” after “would”."
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["lab", "pharmacy", "primary care doctor", "lab value", "extension", "callback"]
      },
      {
        q: "Match each verb to its meaning.",
        pairs: ["to pass on (by phone)", "to call back", "to spell", "to put a call through"]
      },
      {
        q: "Put the words in order.",
        tr: "I have a question about a CBC.",
        why: "<i>Ich hätte eine Frage zu einem Blutbild.</i> The verb <i>hätte</i> in second position; “about” here is <i>zu</i> + dative: <i>zu einem Blutbild</i>. <i>Ich hätte zu einem Blutbild eine Frage</i> also works."
      },
      {
        q: "Translate: “Could you call me back in ten minutes?”",
        why: "<i>Könnten Sie mich in zehn Minuten zurückrufen?</i> <i>Würden Sie mich ... zurückrufen?</i> also works, with or without <i>bitte</i>. “in ten minutes” is <i>in zehn Minuten</i>, and the infinitive goes to the very end."
      },
      {
        q: "A call to the pharmacy.",
        setting: "A medication for room five has not arrived. You call the hospital pharmacy.",
        lines: [
          { tr: "Pharmacy, good afternoon." },
          { tr: "Say which unit you are calling from and that you have a question about a delivery.", answerTr: "Good afternoon, this is unit three. I have a question about a delivery." },
          { tr: "What exactly is it about?" },
          { tr: "Explain that a medication for room five hasn't arrived yet and ask whether it could be delivered today.", answerTr: "A medication for room five hasn't arrived yet. Would it be possible to deliver it today?" },
          { tr: "I'll look into it and call you back." },
          { tr: "Say thank you and give your extension.", answerTr: "Thank you. My extension is two, three, four, five." }
        ]
      },
      {
        tr: "Would it be possible to call me if a value is abnormal?",
        why: "In <i>wäre</i> the <b>ä</b> is long, [ɛː]; in <i>möglich</i> the <b>ö</b> is long and the final <b>ch</b> is [ç]; in <i>auffällig</i> the stress falls on <b>auf</b>."
      },
      {
        tr: "I have a question about a medication.",
        why: "In <i>hätte</i> the <b>ä</b> is short and differs from <i>hatte</i> only in the vowel; in <i>Medikament</i> the stress falls on the last syllable, <b>ment</b>, unlike English “medicament”."
      }
    ]
  },
  "lesson:pfl-u08-test": {
    theme: "Test",
    title: "Test: Rounds, orders and the team",
    objectives: [
      "check the passive on rounds, dass and ob with orders, verbs with a preposition and the Konjunktiv II on the phone"
    ],
    theory: [
      {
        p: "Eleven questions on the whole unit. The pass mark is 70%. The patients and situations are made up and are only examples: how orders are carried out and documented is set by your facility's rules. An unclear order is always clarified with the physician."
      }
    ],
    exercises: [
      {
        q: "An order seems unusual to you. What do you do?",
        opts: ["Ich führe die Anordnung trotzdem aus.", "Ich frage noch einmal bei der Ärztin nach.", "Ich ändere die Anordnung selbst."],
        why: "An unusual order is clarified with the physician before you carry it out: <b>Ich frage noch einmal bei der Ärztin nach</b>. Carrying it out anyway or changing it yourself are not safe options."
      },
      {
        q: "Complete: “Der Verband ___ morgen gewechselt.”",
        hint: "present passive",
        why: "<b>wird</b>: present passive, conjugated <i>werden</i> + the participle <i>gewechselt</i> at the end."
      },
      {
        tr: "The Konjunktiv II of haben, all persons.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: like the Präteritum <i>hatte</i>, but with the umlaut <b>ä</b>."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["rounds", "the clarifying question", "the shift schedule", "the extension"]
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Ich warte noch für den Befund.",
          "Könnten Sie mich bitte zurückrufen?",
          "Ich bin nicht sicher, ob die Anordnung gilt noch.",
          "Die Tochter hat sich nach dem Befund erkundigt."
        ],
        why: "<i>warten</i> takes <i>auf</i>, not <i>für</i>, even though English says “wait for”. After <i>ob</i> the verb goes to the end: <i>ob die Anordnung noch gilt</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "The chart says a CBC is to be drawn today.",
        why: "<i><b>dass</b></i> reports what is written; in the subordinate clause the passive ends in <i>abgenommen <b>wird</b></i>."
      },
      {
        q: "Put the words in order.",
        tr: "We're still waiting for the lab values.",
        why: "<i>Wir warten noch auf die Laborwerte.</i> <i>warten auf</i> + accusative; <i>noch</i> comes before the preposition."
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["rounds", "order", "result, finding", "CBC", "shift schedule", "lab"]
      },
      {
        q: "Translate: “The dressing will be changed tomorrow.”",
        why: "<i>Morgen wird der Verband gewechselt</i> or <i>Der Verband wird morgen gewechselt</i>: present passive with <i>wird</i> and the participle at the end. No <i>sein</i>. <i>Der Verband wird morgen gewechselt werden</i> is also correct and accepted, but the present passive is what you hear on the ward."
      },
      {
        tr: "The treatment continues as before.",
        why: "In <i>Therapie</i> the stress falls on <b>pie</b>; in <i>bisher</i> the stress falls on <b>her</b>; in <i>fortgesetzt</i> the stress falls on <b>fort</b>."
      },
      {
        tr: "Would it be possible to call me if a value is abnormal?",
        why: "In <i>wäre</i> the <b>ä</b> is long; in <i>anzurufen</i> the <i>zu</i> sits between the prefix <i>an</i> and the verb; in <i>Wert</i> the <b>w</b> is [v] and the <b>e</b> is long."
      }
    ]
  }
});
