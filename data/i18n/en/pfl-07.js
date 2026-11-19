/* ============================================================
   Learner-language text (en) for data/core/pfl-07.js, unit pfl-u07.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:pfl-u07": {
    title: "Talking with patients and families",
    grammarNote: "explaining in plain words with dass clauses · the particles doch, mal, ja · polite requests in the Konjunktiv II · reported speech in the Konjunktiv I · short sentences with the verb in second place for people with dementia"
  },
  "lesson:pfl-u07-l1": {
    theme: "Explaining in plain words",
    title: "Explaining simply",
    objectives: [
      "tell the patient what is going to happen, without medical jargon",
      "use dass clauses: das heißt, dass...; wichtig ist, dass...",
      "check that the patient has understood",
      "refer questions about the diagnosis to the doctor: Das bespricht der Arzt mit Ihnen"
    ],
    theory: [
      {
        h: "Two registers, one explanation",
        p: "Among colleagues you say <em>Gastroskopie</em>; to the patient you say <em>Magenspiegelung</em>. The same goes for many words in this lesson: for the patient the <strong>Diagnose</strong> is <em>was ich habe</em>, and the <strong>Prognose</strong> is <em>wie es weitergeht</em>. To explain simply: short sentences, one piece of information at a time, everyday German words instead of Latin ones. Then check that the patient has understood, not by asking <em>Haben Sie verstanden?</em> (almost everyone says yes) but by asking them to say it back in their own words: <em>Können Sie mit Ihren eigenen Worten wiederholen, was morgen passiert?</em>"
      },
      {
        h: "Clauses with dass",
        p: "Explanations are often built with <strong>dass</strong>: <em>Das heißt, dass...</em>, <em>Wichtig ist, dass...</em>, <em>Ich verstehe, dass...</em>, <em>Ich sage dem Arzt, dass...</em> After <em>dass</em> the conjugated verb goes <strong>to the end</strong>: <em>dass der Arzt in Ihren Magen <b>schaut</b></em>, <em>dass Sie noch Fragen <b>haben</b></em>. With a compound tense the auxiliary goes last, after the participle: <em>dass Sie alles verstanden <b>haben</b></em>. There is always a comma before <em>dass</em>."
      },
      {
        contrast: "This part will feel familiar: in English you already switch registers, from “EGD” or “upper endoscopy” on the chart to “we'll put a small camera down to look at your stomach” at the bedside, and American doctors say “high blood pressure” even to each other. The difference is where the plain words come from. English patient language is often short Anglo-Saxon words or a paraphrase; German patient language is German compounds that you have to learn one by one: <em>Magenspiegelung</em> (stomach + mirroring), <em>Ultraschall</em>, <em>Bluthochdruck</em>. The Latin term, which may be the one you recognize first, is opaque to many German patients. The syntax differs too. In English “that” is optional and moves nothing: “I'll tell the doctor (that) you have questions”. In German <em>dass</em> sends the verb to the end: <em>dass Sie noch Fragen haben</em>. Leave <em>dass</em> out and the verb goes back to second place: <em>Ich sage ihm, Sie haben noch Fragen.</em>"
      },
      {
        trap: "<em>die Aufklärung</em> on the unit is not a vague “clarification” (and not the Enlightenment either): it is the informed-consent conversation in which, as a rule, the doctor explains an exam or procedure before the patient agrees to it. You can repeat in plain words what will happen and how to get ready, but the consent conversation and the diagnosis belong to the doctor: <em>Das bespricht der Arzt mit Ihnen.</em> Watch the spelling as well: <em>das</em> with one s is the article or pronoun (<em>Das heißt...</em>), <em>dass</em> with two is the conjunction “that” (<em>..., dass der Arzt...</em>)."
      },
      {
        tip: "When the patient asks something that is not yours to answer, don't let it drop: pass it on and make a promise you can keep. <em>Das bespricht der Arzt mit Ihnen. Ich sage ihm, dass Sie noch Fragen haben.</em> The patient knows the question has landed somewhere, and you haven't said anything you weren't allowed to say."
      }
    ],
    grammar: {
      title: "Explaining with dass",
      note: "Main clause, comma, <b>dass</b>, and the conjugated verb <b>at the end</b>. With a compound tense: participle, then auxiliary.",
      table: {
        head: ["main clause", "dass + verb at the end"],
        rows: [
          ["Das heißt,", "dass der Arzt in Ihren Magen schaut."],
          ["Wichtig ist,", "dass Sie ab Mitternacht nichts mehr essen."],
          ["Ich sage dem Arzt,", "dass Sie noch Fragen haben."],
          ["Ich möchte sicher sein,", "dass Sie alles verstanden haben."]
        ]
      },
      examples: [
        { tr: "Tomorrow morning you're having an upper endoscopy.", note: "Magenspiegelung: the patient's word for Gastroskopie" },
        { tr: "That means the doctor looks into your stomach with a small camera.", note: "dass: the verb schaut goes to the end" },
        { tr: "It's important that you don't eat anything after midnight.", note: "Wichtig ist, dass...: for the one thing not to forget" },
        { tr: "I'll tell the doctor that you still have questions.", note: "dass: the verb haben goes to the end" },
        { tr: "I want to be sure you've understood everything.", note: "compound tense: verstanden haben, auxiliary last" },
        { tr: "The doctor will go over that with you.", note: "the sentence for questions about the diagnosis" }
      ]
    },
    vocab: [
      "the diagnosis",
      "the prognosis",
      "the exam, the test",
      "the upper endoscopy (patient's word)",
      "the gastroscopy (medical term)",
      "the informed-consent talk before an exam or procedure",
      "the technical term",
      "to explain",
      "understandable, clear",
      "to ask (for more detail)",
      "unclear",
      "to repeat"
    ],
    dialogue: [
      "Mr. Schulz, let me quickly explain what's happening tomorrow. Tomorrow morning you're having an upper endoscopy.",
      "A gastroscopy, the doctor said. What is that exactly?",
      "That means the doctor looks into your stomach with a small camera. It's important that you don't eat anything after midnight.",
      "And what do I have? Is it something serious?",
      "I understand that you're worried. The doctor will go over that with you.",
      "Is he coming by today?",
      "I'll tell him you still have questions. Is anything else unclear?",
      "No, thank you. You explained it well."
    ],
    culture: {
      title: "A German view: who informs the patient",
      text: "<p>In Germany the law requires that a patient be informed before an exam or procedure in a conversation, the <i>Aufklärung</i>, in language they can understand. As a rule the doctor holds that conversation, and the patient often signs a form. Nurses explain the preparation and the practical side: when to stop eating, what to bring, how the day will go.</p><p>Many facilities also use materials in <i>Einfache Sprache</i> or <i>Leichte Sprache</i>, texts written in short sentences with common words. German learners often find them clearer than the official versions, so they are worth reading for yourself too.</p>"
    },
    exercises: [
      {
        q: "The patient asks: “Was habe ich denn?” The doctor hasn't talked to him yet. Which answer stays within your role?",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Das ist sicher nichts Schlimmes.",
          "Das darf ich nicht sagen, fragen Sie nicht."
        ],
        why: "The doctor gives the diagnosis: <b>Das bespricht der Arzt mit Ihnen.</b> <i>Das ist sicher nichts Schlimmes</i> is reassurance you can't give, and the third answer shuts the conversation down instead of pointing the question to the right person."
      },
      {
        tr: "The present tense of erklären, all persons.",
        why: "<i>Erkläre, erklärst, erklärt, erklären, erklärt, erklären</i>: a regular verb. The prefix <i>er-</i> never separates, and the <b>ä</b> stays in every person."
      },
      {
        q: "Fill in: “Wichtig ist, ___ Sie ab Mitternacht nichts mehr essen.”",
        hint: "the conjunction “that”",
        why: "<b>dass</b>, with two s's: it is the conjunction that opens the subordinate clause, which is why the verb <i>essen</i> goes to the end."
      },
      {
        q: "Complete the sentence.",
        tr: "That means the doctor looks into your stomach with a small camera.",
        why: "<i>Das heißt, <b>dass</b> der Arzt ... in Ihren Magen <b>schaut</b></i> (<i>sieht</i> also works): after <i>dass</i> the conjugated verb goes to the end."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["the diagnosis", "the prognosis", "the informed-consent talk before a procedure", "the exam, the test"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["diagnosis", "technical term", "stomach", "exam, test", "conversation", "appointment"]
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Ich sage dem Arzt, dass Sie noch Fragen haben.",
          "Wichtig ist, dass Sie ab Mitternacht nichts mehr essen.",
          "Das heißt, dass der Arzt schaut in Ihren Magen.",
          "Ich verstehe, dass Sie Angst haben.",
          "Ich hoffe, dass Sie haben gut geschlafen."
        ],
        why: "After <i>dass</i> the conjugated verb goes to the end: <i>dass der Arzt in Ihren Magen <b>schaut</b></i>, <i>dass Sie gut geschlafen <b>haben</b></i>. With a compound tense the auxiliary comes after the participle."
      },
      {
        q: "Put the words in order.",
        tr: "I'll tell the doctor that you still have questions.",
        why: "<i>Ich sage dem Arzt, dass Sie noch Fragen haben.</i> In the main clause the verb <i>sage</i> is in second place; after the comma, <i>dass</i> sends <i>haben</i> to the end."
      },
      {
        q: "Translate for the patient, without medical jargon: “Tomorrow morning you're having an upper endoscopy.”",
        why: "<i>Morgen früh bekommen Sie eine Magenspiegelung.</i> To the patient you say <b>Magenspiegelung</b>, not <i>Gastroskopie</i>; “tomorrow morning” is <b>morgen früh</b>. <i>Sie haben morgen früh eine Magenspiegelung</i> also works."
      },
      {
        q: "The day before the exam.",
        setting: "Mr. Schulz is having an upper endoscopy tomorrow and he is worried. The doctor hasn't talked to him about any results yet.",
        lines: [
          { tr: "What do I have? Is it serious?" },
          { tr: "Say that you understand he's worried and that the doctor will go over that with him.", answerTr: "I understand that you're worried. The doctor will go over that with you." },
          { tr: "And what is a gastroscopy?" },
          { tr: "Explain it in plain words.", answerTr: "That means the doctor looks into your stomach with a small camera." },
          { tr: "Can I still eat something tonight?" },
          { tr: "Say yes, but it's important not to eat anything after midnight.", answerTr: "Yes, but it's important that you don't eat anything after midnight." }
        ]
      },
      {
        tr: "I understand that you're worried. The doctor will go over that with you.",
        why: "In <i>verstehe</i> the <b>st</b> at the start of the stem is [ʃt], like “sht”; in <i>bespricht</i> the <b>sp</b> is [ʃp] and the <b>ch</b> after <b>i</b> is [ç], a soft hiss with no English equivalent; in <i>Arzt</i> the <b>z</b> is [ts]."
      },
      {
        tr: "I'll tell the doctor that you still have questions.",
        why: "In <i>Ich</i> the <b>ch</b> after <b>i</b> is [ç]; in <i>noch</i> the <b>ch</b> after <b>o</b> is [x], from the back of the throat as in Scottish “loch”; in <i>Fragen</i> the <b>a</b> is long."
      }
    ]
  },
  "lesson:pfl-u07-l2": {
    theme: "Reassuring and encouraging",
    title: "Reassuring and encouraging",
    objectives: [
      "reassure a frightened patient without promising what isn't up to you",
      "use the particles doch, mal and ja to make a request warmer",
      "make polite requests and suggestions with the Konjunktiv II: könnten, wäre",
      "praise a small step forward"
    ],
    theory: [
      {
        h: "The particles doch, mal, ja",
        p: "<strong>Modalpartikeln</strong> are short, unstressed words that don't change what a sentence says, only how it sounds. <em>doch</em> in an invitation makes it encouraging, like “go ahead and”: <em>Setzen Sie sich <b>doch</b> erst mal hin.</em> <em>mal</em> makes a request light, like “just”: <em>Atmen Sie <b>mal</b> tief ein.</em> <em>ja</em> points to something you both know, and that is what makes it reassuring: <em>Ich bin <b>ja</b> direkt neben Ihnen.</em> They sit in the middle of the sentence, after the verb and the pronouns, and never in first place. They often combine: <em>doch mal</em>, <em>doch erst mal</em>."
      },
      {
        h: "The polite Konjunktiv II",
        p: "To ask or suggest politely you use the <strong>Konjunktiv II</strong>, much like English “could” and “would”: <em><b>Könnten</b> Sie mir sagen, wo es weh tut?</em> <em><b>Wäre</b> es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</em> <em>Es <b>wäre</b> gut, wenn Sie heute ein paar Schritte gehen.</em> You only need a few forms: <em>könnte, wäre, hätte, würde</em>. <em>Könnte</em> comes from the Präteritum <em>konnte</em> plus an umlaut. In a question the conjugated verb goes first, as in every yes/no question."
      },
      {
        contrast: "English has no class of words like <em>doch</em>, <em>mal</em> and <em>ja</em>. It does the same job with other tools: tone of voice, “just” (“just take a deep breath”), “why don't you...” (“why don't you sit down for a minute”), tag questions (“you're doing fine, aren't you?”) and “you know”. German leans much less on intonation for this and puts the warmth into the particle instead. That is why the particles are hard to hear and to use: without <em>doch</em>, <em>mal</em> or <em>ja</em> the sentence is still correct but sounds colder, more like an order (<em>Setzen Sie sich hin.</em>), and a friendly tone of voice alone doesn't fully make up for it. Don't translate a tag question either: <em>..., nicht wahr?</em> on every sentence sounds stilted. The Konjunktiv II will feel familiar, though: <em>Könnten Sie...?</em> is almost word for word “Could you...?” One caution: a <em>doch</em> said impatiently sounds like a reproach (“oh, just sit down already”)."
      },
      {
        trap: "<em>doch</em> here does not mean “but” or “however”, and <em>mal</em> has nothing to do with “times” in a multiplication sense: it is short for <em>einmal</em>, “once”. Watch <em>versprechen</em> and <em>sich versprechen</em> too: <em>Ich kann Ihnen nichts versprechen</em> means “I can't promise you anything”, but <em>Ich habe mich versprochen</em> means “I misspoke”. And the lines that sound comforting, <em>Alles wird gut</em> or <em>Sie fallen nicht</em>, are promises that aren't up to you: say what you will do instead, <em>Ich bleibe bei Ihnen.</em>"
      },
      {
        tip: "A sequence that works almost every time: name the fear (<em>Ich verstehe, dass Sie Angst haben</em>), say what you are doing (<em>Ich bin ja direkt neben Ihnen</em>), suggest one small step (<em>Setzen Sie sich doch erst mal an die Bettkante</em>) and praise what went well (<em>Das haben Sie gut gemacht</em>)."
      }
    ],
    grammar: {
      title: "Particles and polite requests",
      note: "<b>doch</b>, <b>mal</b>, <b>ja</b>: unstressed, in the middle of the sentence, never in first place. To ask politely: <b>könnten</b>, <b>wäre</b>, <b>würden</b>.",
      table: {
        head: ["form", "what it does", "example"],
        rows: [
          ["doch", "encouraging invitation, “go ahead and”", "Setzen Sie sich doch erst mal hin."],
          ["mal", "light request, “just”", "Atmen Sie mal tief ein."],
          ["ja", "something you both know", "Ich bin ja direkt neben Ihnen."],
          ["könnten", "polite question", "Könnten Sie mir kurz sagen, wo es weh tut?"],
          ["wäre", "polite suggestion", "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"]
        ]
      },
      examples: [
        { tr: "Go ahead and sit down first.", note: "doch erst mal: a gentle invitation, one step at a time" },
        { tr: "Just breathe in and out, nice and slow.", note: "mal: the request sounds lighter" },
        { tr: "You already know this from yesterday.", note: "ja: points to something known, reassures" },
        { tr: "Could you quickly tell me where it hurts?", note: "Konjunktiv II of können: könnten" },
        { tr: "Would it be all right with you if I stayed with you for a moment?", note: "Konjunktiv II of sein: wäre" },
        { tr: "It would be good if you walked a few steps today.", note: "Es wäre gut, wenn...: advice without an order" }
      ]
    },
    vocab: [
      "the fear",
      "the worry",
      "to calm, to reassure",
      "to encourage",
      "the encouragement",
      "nervous, worked up",
      "to comfort",
      "the progress, a step forward",
      "to promise",
      "honest",
      "confident, hopeful",
      "deep; deeply"
    ],
    dialogue: [
      "I'm so scared of getting up. Yesterday I got dizzy.",
      "I understand that you're scared. Go ahead and sit on the edge of the bed first.",
      "And what if I fall?",
      "I'm right here next to you. Just breathe in and out, nice and slow.",
      "All right. Could you give me your hand, please?",
      "Of course. Would it be all right with you if we walked to the window?",
      "I'll try. Phew, that was hard work.",
      "You did that well. Tomorrow we'll try again, one step at a time."
    ],
    culture: {
      title: "A German view: ask first, then touch",
      text: "<p>On German units every adult patient is addressed as <i>Sie</i> and by last name: <i>Frau Wagner</i>, not her first name, even when American-style first-name friendliness would feel natural to you. Touch is usually announced or asked for as well: <i>Darf ich Ihre Hand nehmen?</i> Many patients appreciate a hand on the shoulder, others don't, and asking leaves the choice to them.</p><p>Praise is more understated than in the US: <i>Das haben Sie gut gemacht</i> is already a warm compliment. “Awesome, great job!” for a small step can sound as if you were talking to a child.</p>"
    },
    exercises: [
      {
        q: "You want to invite the patient to sit down in a kind, encouraging way. Which sentence is correct?",
        opts: [
          "Setzen Sie sich doch erst mal hin.",
          "Sie setzen sich jetzt hin.",
          "Setzen Sie doch sich erst mal hin."
        ],
        why: "<b>doch erst mal</b> makes the invitation warm. The particle comes after the pronoun <i>sich</i>, not before it. <i>Sie setzen sich jetzt hin</i> is correct, but it sounds like an order."
      },
      {
        tr: "The Konjunktiv II of können, all persons.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: start from the Präteritum <i>konnte</i> and add the umlaut, <b>ö</b>."
      },
      {
        q: "Fill in: “Es ___ gut, wenn Sie heute ein paar Schritte gehen.”",
        hint: "Konjunktiv II of sein",
        why: "<b>wäre</b>: “would be”. With <i>Es wäre gut, wenn...</i> you give advice without giving an order."
      },
      {
        q: "Fill in the particles doch and ja.",
        tr: "Go ahead and sit down first. I'm right here next to you, you know.",
        why: "<i>Setzen Sie sich <b>doch</b> erst mal hin</i>: an encouraging invitation. <i>Ich bin <b>ja</b> direkt neben Ihnen</i>: points to something the patient can already see, and reassures her."
      },
      {
        q: "Which sentences reassure without promising too much?",
        opts: [
          "Ich bleibe bei Ihnen.",
          "Es wird ganz sicher alles gut.",
          "Wenn Sie etwas brauchen, drücken Sie die Klingel.",
          "Das schaffen Sie schon, Sie sind ja nicht krank.",
          "Ich verstehe, dass Sie Angst haben."
        ],
        why: "Reassure with what depends on you: staying, being reachable, taking the fear seriously. <i>Es wird ganz sicher alles gut</i> is a promise you can't make, and <i>Sie sind ja nicht krank</i> denies what the patient is feeling."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["fear", "progress", "encouragement", "window", "bed", "step"]
      },
      {
        q: "Match each sentence to its translation.",
        pairs: ["Go ahead and sit down.", "Just take a deep breath in.", "You already know this.", "Could you help me?"]
      },
      {
        q: "Put the words in order.",
        tr: "Would it be all right with you if I stayed with you for a moment?",
        why: "<i>Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</i> In the question the verb <i>wäre</i> goes first; after <i>wenn</i> the verb <i>bleibe</i> goes to the end."
      },
      {
        q: "Translate with the Konjunktiv II: “Could you tell me where it hurts?”",
        why: "<i>Könnten Sie mir sagen, wo es weh tut?</i> (also spelled <i>wehtut</i>). After <i>wo</i> the verb goes to the end."
      },
      {
        q: "Standing up for the first time.",
        setting: "Mrs. Wagner has to get up for the first time after her surgery, and she is scared.",
        lines: [
          { tr: "I'm so scared of getting up." },
          { tr: "Say you understand her fear and invite her to sit on the edge of the bed first.", answerTr: "I understand that you're scared. Go ahead and sit on the edge of the bed first." },
          { tr: "And what if I fall?" },
          { tr: "Reassure her: you're right next to her and you'll go slowly.", answerTr: "I'm right here next to you. We'll go very slowly." },
          { tr: "Phew, that was hard work." },
          { tr: "Praise her and say you'll try again tomorrow.", answerTr: "You did that well. Tomorrow we'll try again." }
        ]
      },
      {
        tr: "I'm right here next to you. Just breathe in and out, nice and slow.",
        why: "<i>ja</i> is said [jaː], with the <b>j</b> like the “y” in “yes”; in <i>ruhig</i> the final <b>g</b> is [ç]; in <i>ein</i> the diphthong <b>ei</b> is [aɪ], as in “eye”. The particle <i>ja</i> is unstressed here."
      },
      {
        tr: "Go ahead and sit down first.",
        why: "In <i>Setzen</i> the initial <b>s</b> is voiced [z], as in “zoo”, and <b>tz</b> is [ts]; in <i>doch</i> the <b>ch</b> after <b>o</b> is [x], in <i>sich</i> after <b>i</b> it is [ç]. <i>doch</i> and <i>mal</i> stay unstressed."
      }
    ]
  },
  "lesson:pfl-u07-l3": {
    theme: "Families and confidentiality",
    title: "Informing family members",
    objectives: [
      "give family members only the information the patient has agreed to share",
      "report what the patient said with the Konjunktiv I: er habe, sie sei",
      "refer questions about the diagnosis and test results to the doctor",
      "explain why you can't give information over the phone"
    ],
    theory: [
      {
        h: "What you can say, and to whom",
        p: "Nurses are also bound by <strong>Schweigepflicht</strong>, professional confidentiality, and it applies to family members too. Before you inform an <strong>Angehöriger</strong> you need the patient's <strong>Einverständnis</strong>: <em>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</em> Even then, you report how the patient is doing and what they say; the diagnosis, test results and prognosis come from the doctor: <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> On the phone you can't see who is calling, which is why many facilities don't give out information that way: <em>Am Telefon darf ich leider keine Auskunft geben.</em>"
      },
      {
        h: "The Konjunktiv I for reporting",
        p: "To report someone else's words German has the <strong>Konjunktiv I</strong>; in the third person singular it is verb stem + <em>-e</em>. <em>Ich habe gut geschlafen</em> becomes <em>Er sagt, er <b>habe</b> gut geschlafen.</em> <em>Sein</em> is irregular: <em>ich sei, er sei, wir seien, sie seien</em>. It is used mainly in the third person singular, because that's where it differs from the indicative. Where the Konjunktiv I looks the same as the indicative (<em>sie haben</em>), you take the Konjunktiv II: <em>Sie sagen, sie <b>hätten</b> Angst.</em> In speech many people simply use <em>dass</em> with the indicative: <em>Sie hat gesagt, dass sie gut geschlafen hat.</em> In nursing notes the Konjunktiv I is the typical form: <em>Patientin gibt an, sie <b>habe</b> keine Schmerzen.</em> It marks the statement as the patient's, not as a fact you checked."
      },
      {
        contrast: "English reports speech without any special verb form: “she says she slept well”, at most with a tense shift (“she said she had slept well”). Charting has its own tools, “patient reports...”, “pt denies pain”, but the verb itself stays ordinary. German has a dedicated form, the Konjunktiv I, rarely heard in speech but useful in documentation: <em>sie sei müde</em> keeps a distance between what the patient says and what you observed, much like “pt reports fatigue”. Family rules differ as well. Under HIPAA, a US nurse may share relevant information with family involved in the patient's care as long as the patient doesn't object. In Germany <em>Schweigepflicht</em> (a criminal-law duty) and <em>Datenschutz</em> (data protection under the GDPR) work the other way round: you need the patient's consent first, and a son or wife has no automatic right to information."
      },
      {
        trap: "<em>er habe</em> is not a mistake for <em>er hat</em>: it is the reported-speech form. Don't confuse it with the English subjunctive either: “if he were here” corresponds to the Konjunktiv II (<em>wenn er hier wäre</em>), not to the Konjunktiv I. <em>der Angehörige</em> is an adjective used as a noun and changes its ending: <em>der Angehörige</em>, but <em>ein Angehöriger</em>, plural <em>die Angehörigen</em>. <em>Auskunft geben</em> means “to give information on request”; don't mix it up with <em>Aufklärung</em>, the doctor's informed-consent talk."
      },
      {
        tip: "If a family member keeps pushing for the diagnosis, you don't need to just say no: offer the right route. <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> The family member gets an appointment, and you stay within what you are allowed to say."
      }
    ],
    grammar: {
      title: "Reporting with the Konjunktiv I",
      note: "Konjunktiv I, third person singular = stem + <b>-e</b>: er <b>habe</b>, sie <b>fühle</b>. <b>sein</b>: sei, seien. If it matches the indicative, use the Konjunktiv II: sie <b>hätten</b>.",
      table: {
        head: ["what the patient said", "reported"],
        rows: [
          ["Ich habe gut geschlafen.", "Er sagt, er habe gut geschlafen."],
          ["Ich bin müde.", "Sie gibt an, sie sei müde."],
          ["Ich fühle mich besser.", "Sie sagt, sie fühle sich besser."],
          ["Wir haben Angst.", "Sie sagen, sie hätten Angst."]
        ]
      },
      examples: [
        { tr: "Your mother said that she slept well.", note: "in speech: dass with the indicative" },
        { tr: "Your mother says she slept well.", note: "Konjunktiv I: sie habe" },
        { tr: "Patient reports feeling tired.", note: "nursing note: angeben + Konjunktiv I, sie sei" },
        { tr: "Patient denies pain.", note: "er habe: the patient's statement, not a measurement" },
        { tr: "Unfortunately I can't give out information over the phone.", note: "Auskunft geben: to inform on request" },
        { tr: "Your father has agreed that we can keep you informed.", note: "damit einverstanden, dass...: consent comes first" }
      ]
    },
    vocab: [
      "the family member, relative (ein Angehöriger, plural die Angehörigen)",
      "professional confidentiality",
      "the information (given on request)",
      "the consent",
      "in agreement, OK with",
      "the advance power of attorney (for when you can no longer decide)",
      "to state, to report",
      "confidential",
      "to pass on",
      "the talk with the doctor",
      "the visiting hours",
      "palliative care"
    ],
    dialogue: [
      "Hello, I'm Mr. Schulz's daughter. How is my father doing?",
      "Hello, Ms. Schulz. Your father has agreed that we can keep you informed. This morning he said he had slept well.",
      "And the test? What did they find?",
      "The doctor will go over that with you. I'd be happy to set up a talk with the doctor for you.",
      "Can I talk to the doctor today?",
      "He's in a meeting right now. I'll pass your question on to him.",
      "Thank you. My sister may call too.",
      "Unfortunately we can't give out information over the phone. The best thing would be for her to come with you to the talk with the doctor."
    ],
    culture: {
      title: "A German view: who decides when the patient can't",
      text: "<p>In Germany professional confidentiality is set out in the criminal code and applies to doctors and nurses alike. The patient can release staff from it toward specific people, and the facility records that.</p><p>When a patient can no longer decide for themselves, what counts is who holds a <i>Vorsorgevollmacht</i>, a power of attorney signed in advance, or a <i>Betreuer</i>, a legal guardian appointed by the court. Who these people are is usually in the chart: if a family member says they hold a power of attorney, you check there or ask the doctor; you don't settle it in the hallway. What may be said, and to whom, is set by the facility's rules together with the doctor.</p>"
    },
    exercises: [
      {
        q: "Report to the daughter what her father said: “Ich habe gut geschlafen.” Which sentence is correct?",
        opts: [
          "Er hat gesagt, er habe gut geschlafen.",
          "Er hat gesagt, er hätte gut schlafen.",
          "Er hat gesagt, ich habe gut geschlafen."
        ],
        why: "In reported speech the pronoun shifts to the third person (<i>er</i>) and the verb goes into the Konjunktiv I: <b>er habe</b> gut geschlafen. <i>hätte ... schlafen</i> is missing the participle, and <i>ich habe</i> makes it sound as if you were the one who slept."
      },
      {
        tr: "The Konjunktiv I of sein: ich, er/sie, wir, sie.",
        why: "<i>Sei, sei, seien, seien</i>: first and third person singular are the same and have no ending. It is the most common form in reported speech: <i>sie sei müde</i>."
      },
      {
        q: "Fill in (in the nursing note): “Die Patientin gibt an, sie ___ müde.”",
        hint: "Konjunktiv I of sein",
        why: "<b>sei</b>: in the note the Konjunktiv I shows this is the patient's statement. In spoken German you'll also hear <i>wäre</i>."
      },
      {
        q: "Fill in with the Konjunktiv I of haben.",
        tr: "Patient denies pain. He says he slept well.",
        why: "<i>er <b>habe</b> keine Schmerzen</i>, <i>er <b>habe</b> gut geschlafen</i>: stem <i>hab-</i> + <i>-e</i>, in the third person."
      },
      {
        q: "Which sentences respect professional confidentiality?",
        opts: [
          "Am Telefon darf ich leider keine Auskunft geben.",
          "Ihr Vater hat Krebs, aber sagen Sie es ihm nicht.",
          "Das bespricht der Arzt mit Ihnen.",
          "Der Patient im Nachbarbett hat das auch.",
          "Ich frage Ihren Vater, ob wir Sie informieren dürfen."
        ],
        why: "On this ward, no information over the phone, the doctor gives the diagnosis, and you ask the patient before informing a family member. The other two sentences disclose information that belongs neither to the family member nor to you."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["professional confidentiality", "information (given on request)", "consent", "talk with the doctor", "advance power of attorney", "telephone"]
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["professional confidentiality", "the information (given on request)", "the consent", "the advance power of attorney"]
      },
      {
        q: "Put the words in order.",
        tr: "Your father has agreed that we can keep you informed.",
        why: "<i>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</i> <i>damit</i> points ahead to the subordinate clause; after <i>dass</i> the verb <i>informieren</i> goes to the end."
      },
      {
        q: "Translate for the daughter: “Your mother says she feels better today.”",
        why: "<i>Ihre Mutter sagt, sie fühle sich heute besser</i>, with the Konjunktiv I; in speech <i>Ihre Mutter sagt, dass sie sich heute besser fühlt</i> also works. “Today” is <b>heute</b>."
      },
      {
        q: "The daughter on the unit.",
        setting: "Mr. Schulz's daughter is asking how he is. Her father has agreed that she may be informed; the doctor hasn't talked to her yet.",
        lines: [
          { tr: "How is my father doing?" },
          { tr: "Report that this morning he said he had slept well.", answerTr: "This morning he said he had slept well." },
          { tr: "What did the test show?" },
          { tr: "Refer her to the doctor and offer a talk.", answerTr: "The doctor will go over that with you. I'd be happy to set up a talk with the doctor for you." },
          { tr: "My sister is calling tonight. Can you tell her everything?" },
          { tr: "Explain that you can't give out information over the phone.", answerTr: "Unfortunately we can't give out information over the phone." }
        ]
      },
      {
        tr: "The doctor will go over that with you. I'd be happy to set up a talk with the doctor for you.",
        why: "In <i>Arztgespräch</i> the stress falls on <b>Arzt</b>, the <b>sp</b> is [ʃp] and the <b>ch</b> after <b>ä</b> is [ç]; in <i>vereinbaren</i> the stress falls on <b>ein</b>."
      },
      {
        tr: "Unfortunately I can't give out information over the phone.",
        why: "In <i>Telefon</i> the stress falls on the last syllable, <b>fon</b>, unlike English “telephone”; in <i>leider</i> the diphthong <b>ei</b> is [aɪ]; in <i>Auskunft</i> the stress falls on <b>Aus</b>."
      }
    ]
  },
  "lesson:pfl-u07-l4": {
    theme: "Dementia",
    title: "People living with dementia",
    objectives: [
      "speak to a person with dementia in short sentences with the verb in second place",
      "respond in the spirit of validation: acknowledge the feeling instead of correcting",
      "avoid the patronizing “we” and talking down",
      "recognize when sudden confusion has to be reported"
    ],
    theory: [
      {
        h: "Short sentences, verb in second place",
        p: "With a person living with dementia, each sentence carries <strong>one piece of information</strong>. Use short main clauses with the conjugated verb in <strong>second place</strong>; the first slot can hold the time, which helps orientation: <em><b>Jetzt</b> waschen Sie Ihr Gesicht.</em> <em><b>Nach dem Frühstück</b> kommt Ihre Tochter.</em> No subordinate clauses, no two instructions in one sentence. Introduce yourself every time, by name: <em>Ich bin Anna. Ich helfe Ihnen heute.</em> And hand over the object as you name it: <em>Hier ist Ihr Waschlappen.</em>"
      },
      {
        h: "Validation",
        p: "<strong>Validation</strong> starts from a simple idea: memories fade, feelings stay. If Mrs. Lehmann wants to go home because her children are getting out of school, correcting her (<em>Ihre Kinder sind doch erwachsen</em>) confronts her with a loss and doesn't calm her. Instead you name the feeling (<em>Sie machen sich Sorgen um Ihre Kinder</em>) and invite her to tell you more (<em>Erzählen Sie mir von Ihren Kindern</em>). Knowing her <strong>Biografie</strong> helps you understand what she is talking about. One thing has to be kept apart: if someone becomes <strong>confused suddenly</strong>, it may not be the dementia you know but a new cause, and it is a change to report to the doctor right away."
      },
      {
        contrast: "English has a name for the problem: elderspeak. “Honey”, “sweetie” and “How are we doing today?” are common in US long-term care and often meant kindly. In German that tone sounds even more childish, because German has a formal “you” that English lacks: with a person with dementia you still say <em>Sie</em> and <em>Frau Lehmann</em>, unless she asks for something else. The caregiver's “we” (<em>Haben wir heute schon gegessen?</em>) has an ironic name in German too, the <em>Pflege-Wir</em>: say <em>Sie</em> when she is the one doing it. Syntax works differently as well. An English sentence usually keeps subject and verb close together, in main and subordinate clauses alike. In a German subordinate clause the verb goes to the very end, after everything else, so the listener has to hold the whole sentence in mind to know who is doing what. Short main clauses take that effort away."
      },
      {
        trap: "<em>Demenz</em> and <em>Vergesslichkeit</em> are not synonyms: forgetfulness happens to everyone, dementia is a syndrome, caused by various diseases, that changes daily life. To patients and families you don't say <em>Sie ist halt dement</em>, just as you wouldn't say “she's demented” in English, but <em>Frau Lehmann lebt mit einer Demenz.</em> And <em>verwirrt</em> describes a state, not the person: a <em>plötzliche Verwirrtheit</em>, like acute confusion or delirium in English, can have a new physical cause, and it gets reported, not taken for granted."
      },
      {
        tip: "Before you speak, get in front of the person, at eye level, and wait until she looks at you. Then one sentence, a pause, the next sentence. If she doesn't respond, repeat it in exactly the same words: a reworded sentence is, for her, a new sentence to figure out."
      }
    ],
    grammar: {
      title: "Sentences that are easy to follow",
      note: "One piece of information per sentence, the conjugated verb in <b>second place</b>, the time first. Acknowledge the feeling, don't correct.",
      table: {
        head: ["instead of", "better"],
        rows: [
          ["Ihre Kinder sind doch längst erwachsen.", "Sie machen sich Sorgen um Ihre Kinder."],
          ["Haben wir heute schon gefrühstückt?", "Haben Sie schon gefrühstückt?"],
          ["Wenn Sie fertig sind und gefrühstückt haben, kommt Ihre Tochter.", "Nach dem Frühstück kommt Ihre Tochter."],
          ["Das habe ich Ihnen doch schon gesagt.", "Ich bin Anna. Ich helfe Ihnen heute."]
        ]
      },
      examples: [
        { tr: "I'm Anna. I'm helping you today.", note: "introduce yourself every time, two short sentences" },
        { tr: "Now you wash your face.", note: "jetzt in first place, the verb waschen in second" },
        { tr: "Here's your washcloth.", note: "name the object as you hand it over" },
        { tr: "You're worried about your children.", note: "validation: name the feeling" },
        { tr: "Tell me about your children.", note: "invite her to talk instead of correcting her" },
        { tr: "After breakfast your daughter is coming.", note: "time in first place, the verb kommt in second" }
      ]
    },
    vocab: [
      "the dementia",
      "the forgetfulness",
      "confused",
      "the confusion, the confused state",
      "the disorientation",
      "validation (the Validation method)",
      "the feeling, the emotion",
      "the memory (of something)",
      "the life story, the biography",
      "the daily routine, the structure of the day",
      "to contradict",
      "familiar"
    ],
    dialogue: [
      "Good morning, Mrs. Lehmann. I'm Anna. I'm helping you wash up today.",
      "I have to go home. My children are getting out of school any minute.",
      "You're worried about your children.",
      "Yes. They're hungry when they get home, you know.",
      "Your children are very important to you. Tell me about your children.",
      "Peter was always so cheeky. And Susanne sang so beautifully.",
      "That sounds lovely. Now you wash your face. Here's your washcloth.",
      "Oh, yes. I can do that myself."
    ],
    culture: {
      title: "A German view: validation and life-story work",
      text: "<p>The <i>Validation</i> method was developed in the United States by Naomi Feil; in Germany its variant <i>Integrative Validation</i>, developed by Nicole Richard, is widespread. In facilities for older people it comes up in training and team meetings, and many nurses know it by that name.</p><p>Teams also rely on <i>Biografiearbeit</i>, life-story work: at admission, family members describe the person's job, habits, important names and small rituals. Knowing that Mrs. Lehmann raised two children and got up early to make breakfast helps you understand what she is looking for when she says she has to go home.</p>"
    },
    exercises: [
      {
        q: "Mrs. Lehmann says: “Ich muss nach Hause, meine Kinder kommen aus der Schule.” Which answer follows validation?",
        opts: [
          "Ihre Kinder sind doch schon lange erwachsen.",
          "Sie machen sich Sorgen um Ihre Kinder.",
          "Sie können nicht nach Hause, Sie wohnen jetzt hier."
        ],
        why: "Validation acknowledges the feeling: <b>Sie machen sich Sorgen um Ihre Kinder.</b> Correcting the facts, as the other two answers do, doesn't calm her and confronts her with a loss."
      },
      {
        q: "Fill in: “Nach dem Frühstück ___ Ihre Tochter.”",
        hint: "kommen, in second place",
        why: "<b>kommt</b>: <i>Nach dem Frühstück</i> takes the first slot, so the conjugated verb comes right after it and the subject <i>Ihre Tochter</i> follows."
      },
      {
        q: "Complete the sentences.",
        tr: "Now you wash your face. Here's your washcloth.",
        why: "<i>Jetzt <b>waschen</b> Sie Ihr Gesicht</i> and <i>Hier <b>ist</b> Ihr Waschlappen</i>: in both sentences the conjugated verb is in second place, after <i>jetzt</i> and <i>hier</i>."
      },
      {
        q: "Which sentences suit a person with dementia?",
        opts: [
          "Jetzt waschen Sie Ihr Gesicht.",
          "Nachdem Sie sich gewaschen haben und bevor das Frühstück kommt, ziehen Sie sich an.",
          "Hier ist Ihr Waschlappen.",
          "Na, mein Schätzchen, haben wir heute gut gegessen?",
          "Erzählen Sie mir von Ihren Kindern."
        ],
        why: "Short sentences with one piece of information and <i>Sie</i> work. The second sentence has two subordinate clauses before the main verb; the fourth uses a pet name and the patronizing “we”."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["dementia", "feeling, emotion", "memory", "washcloth", "face", "breakfast"]
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["the dementia", "the forgetfulness", "the disorientation", "validation"]
      },
      {
        q: "Put the words in order.",
        tr: "After breakfast your daughter is coming.",
        why: "<i>Nach dem Frühstück kommt Ihre Tochter.</i> The time in first place orients her, and the verb <i>kommt</i> is in second place."
      },
      {
        q: "Translate with one short sentence: “Today is Tuesday.”",
        why: "<i>Heute ist Dienstag.</i> <i>Heute haben wir Dienstag</i> also works. “Today” is <b>heute</b>, and the verb is in second place."
      },
      {
        q: "A morning with Mrs. Lehmann.",
        setting: "Mrs. Lehmann lives with dementia. It's morning and you want to help her wash up.",
        lines: [
          { tr: "I have to go home. My children are waiting for me." },
          { tr: "Acknowledge her worry, without correcting her.", answerTr: "You're worried about your children." },
          { tr: "And who are you?" },
          { tr: "Introduce yourself calmly.", answerTr: "I'm Anna. I'm helping you today." },
          { tr: "I can't do this anymore." },
          { tr: "Encourage her and hand her the washcloth.", answerTr: "Yes, you can. Here's your washcloth." }
        ]
      },
      {
        tr: "Good morning, Mrs. Lehmann. I'm Anna. I'm helping you wash up today.",
        why: "In <i>Lehmann</i> the <b>h</b> is silent and lengthens the <b>e</b>; in <i>heute</i> the diphthong <b>eu</b> is [ɔʏ], as in “boy”; in <i>Waschen</i> the <b>W</b> is [v] and <b>sch</b> is [ʃ], as in “shoe”."
      },
      {
        tr: "Tell me about your children.",
        why: "In <i>Erzählen</i> the <b>z</b> is [ts] and the stress falls on <b>zäh</b>; in <i>von</i> the <b>v</b> is said [f]; in <i>Kindern</i> the stress falls on <b>Kin</b>."
      }
    ]
  },
  "lesson:pfl-u07-test": {
    theme: "Review",
    title: "Test: Talking with patients and families",
    objectives: [
      "check plain-language explanations, polite requests, reported speech, confidentiality and communication with people living with dementia"
    ],
    theory: [
      {
        p: "Eleven questions on the whole unit. You pass with 70%. The patients and situations are made up and are only examples: the rules on who may be informed and how an exam is prepared are set by the doctor and the facility."
      }
    ],
    exercises: [
      {
        q: "A patient's son asks: “Was hat mein Vater genau?” The doctor hasn't talked to him yet.",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Ich darf das eigentlich nicht sagen, aber es ist ernst.",
          "Das weiß ich nicht, fragen Sie jemand anderen."
        ],
        why: "The doctor gives the diagnosis: <b>Das bespricht der Arzt mit Ihnen.</b> The second answer hints at a diagnosis; the third doesn't point the question anywhere."
      },
      {
        q: "Fill in: “Ihre Mutter sagt, sie ___ keine Schmerzen.”",
        hint: "Konjunktiv I of haben",
        why: "<b>habe</b>: stem <i>hab-</i> + <i>-e</i>. It is the reported-speech form."
      },
      {
        q: "Fill in: “___ Sie mir kurz helfen?”",
        hint: "Konjunktiv II, polite request",
        why: "<b>Könnten</b> Sie mir kurz helfen? <b>Würden</b> also works. In the question the conjugated verb is in first place."
      },
      {
        tr: "The Konjunktiv II of werden, all persons.",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i>: from the Präteritum <i>wurde</i> plus the umlaut, <b>ü</b>."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["the gastroscopy (medical term)", "professional confidentiality", "validation", "the advance power of attorney"]
      },
      {
        q: "Which sentences would you use with a patient or a family member?",
        opts: [
          "Morgen früh bekommen Sie eine Magenspiegelung.",
          "Morgen erfolgt eine ÖGD.",
          "Ich verstehe, dass Sie Angst haben.",
          "Pat. gibt an, sie habe keine Schmerzen.",
          "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"
        ],
        why: "<i>ÖGD</i> is a clinical abbreviation, like EGD in English, and <i>Pat. gibt an...</i> is nursing-note style: both are fine among colleagues and in the chart, not with the patient."
      },
      {
        q: "Fill in with the Konjunktiv I and the Konjunktiv II.",
        tr: "Patient reports feeling tired. Would it be all right with you if I came back later?",
        why: "<i>sie <b>sei</b> müde</i>: Konjunktiv I of sein, for reporting. <i><b>Wäre</b> es Ihnen recht</i>: Konjunktiv II of sein, for asking politely."
      },
      {
        q: "Put the words in order.",
        tr: "I understand that you're worried.",
        why: "<i>Ich verstehe, dass Sie sich Sorgen machen.</i> After <i>dass</i> the verb <i>machen</i> goes to the end; the pronoun <i>sich</i> comes right after the subject <i>Sie</i>."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["diagnosis", "information (given on request)", "consent", "feeling, emotion", "progress", "talk with the doctor"]
      },
      {
        tr: "I understand that you're scared. Go ahead and sit on the edge of the bed first.",
        why: "In <i>Angst</i> the <b>ng</b> is [ŋ], as in “sing”, with no separate g; in <i>Bettkante</i> the stress falls on <b>Bett</b>; <i>doch</i> and <i>mal</i> stay unstressed."
      },
      {
        tr: "The doctor will go over that with you.",
        why: "In <i>bespricht</i> the stress falls on <b>spricht</b>, the <b>sp</b> is [ʃp] and the <b>ch</b> is [ç]; in <i>Ihnen</i> the <b>ih</b> is a long “ee”."
      }
    ]
  }
});
