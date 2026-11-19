/* ============================================================
   Learner-language text (en) for data/core/pfl-06.js, unit pfl-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:pfl-u06": {
    title: "Shift handoff and nursing notes",
    grammarNote: "the Präteritum in handoff and notes · the connectors deshalb, trotzdem, außerdem, weil · the nominal style of documentation · the passive in the Präteritum · purpose clauses with damit and um ... zu · unit abbreviations"
  },
  "lesson:pfl-u06-l1": {
    theme: "Verbal handoff",
    title: "The handoff",
    objectives: [
      "give and receive a verbal handoff between shifts",
      "tell how the night went with war, hatte, konnte, wollte",
      "link facts with deshalb, trotzdem, außerdem and weil",
      "ask your coworker whether there is anything else to report"
    ],
    theory: [
      {
        h: "What goes into a handoff",
        p: "In the <strong>Übergabe</strong> the nurse going off duty passes on to the oncoming nurse what the next shift needs: how the night or the afternoon went, what has changed, what was done and what is still open. You go room by room and patient by patient: <em>Fangen wir mit Zimmer zwölf an?</em> You report observations and facts, not impressions: <em>Sie war unruhig. Gegen drei Uhr hatte sie Bauchschmerzen.</em> And the oncoming nurse closes with a question: <em>Gibt es sonst noch Besonderheiten?</em>"
      },
      {
        h: "Präteritum and connectors",
        p: "Even when speaking, <em>sein</em>, <em>haben</em> and the modals are almost always in the <strong>Präteritum</strong>: <em>war, hatte, konnte, wollte, musste</em>. Other verbs usually go into the Perfekt when you speak: <em>Ich habe die Ärztin informiert.</em> The connectors <em>deshalb</em> (so, that's why), <em>trotzdem</em> (still, even so) and <em>außerdem</em> (also, in addition) take the first slot of the clause, so the conjugated verb comes right after them: <em>deshalb <b>habe</b> ich</em>, <em>trotzdem <b>fühlte</b> sie sich wohl</em>. <em>Weil</em> opens a subordinate clause instead, and the verb goes to the end: <em>weil er Schmerzen <b>hatte</b></em>."
      },
      {
        contrast: "If you trained in the US, you probably learned to give report with a structure like SBAR (Situation, Background, Assessment, Recommendation), often at the bedside and often with a printed handoff sheet. German units rarely name a framework: the <em>Übergabe</em> is shorter and goes room by room, but the logic is the same, so your habit of a fixed order will help you. The grammar is what differs. In English the whole report is in one past tense: “she was restless, she had abdominal pain, I called the doctor”. German mixes two. <em>War, hatte, konnte</em> in the Präteritum sound normal out loud, while <em>ist gewesen</em> or <em>hat gehabt</em> sound long-winded in a handoff; most other verbs stay in the Perfekt when spoken, and switch to the Präteritum in the written note (<em>Die Ärztin kam</em>). Watch the word order too: English “so I called her” keeps subject before verb, but German puts the verb straight after <em>deshalb</em>: <em>deshalb habe ich angerufen</em>, never <em>deshalb ich habe</em>."
      },
      {
        trap: "<em>übergeben</em> means “to hand over”, but <em>sich übergeben</em> means “to vomit”: <em>Ich übergebe dir Zimmer zwölf</em> is the handoff, <em>Die Patientin hat sich übergeben</em> is an observation to report. The prefix <em>über-</em> does not separate here: <em>ich übergebe</em>, Perfekt <em>ich habe übergeben</em>, with no <em>ge-</em> in front. And <em>stabil</em> describes steady values and conditions; it says nothing about the patient as a person. <em>Der Dienst</em> is the shift, not a “service” in the English sense."
      },
      {
        tip: "Prepare the handoff in the same order for every patient: how the shift went, any abnormal values, what you did, whom you notified, what is still open. A fixed pattern helps you find the words even when you are tired at the end of a night shift, and the listener knows where to look for each piece of information."
      }
    ],
    grammar: {
      title: "Connectors and verb position",
      note: "<b>deshalb, trotzdem, außerdem</b> take the first slot: the conjugated verb comes right after. <b>weil</b> opens a subordinate clause: the conjugated verb goes to the end.",
      table: {
        head: ["connector", "meaning", "example"],
        rows: [
          ["deshalb", "so, that's why", "Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert."],
          ["trotzdem", "still, even so", "Der Blutdruck war erhöht, trotzdem fühlte sie sich wohl."],
          ["außerdem", "also, in addition", "Außerdem wollte er nichts essen."],
          ["weil", "because", "Er konnte nicht schlafen, weil er Schmerzen hatte."]
        ]
      },
      examples: [
        { tr: "Mrs. Keller was restless during the night.", note: "sein in the Präteritum: war, normal even when speaking" },
        { tr: "Around three she had abdominal pain, so I notified the doctor.", note: "deshalb in first position, then the verb right away: habe" },
        { tr: "Mr. Brandt couldn't sleep because he was in pain.", note: "weil: the conjugated verb hatte goes to the end" },
        { tr: "Her blood pressure was elevated in the evening, but she still felt fine.", note: "trotzdem in first position, then fühlte" },
        { tr: "Also, he didn't want to eat anything.", note: "außerdem in first position, then wollte" },
        { tr: "The night was uneventful.", note: "verlaufen, Präteritum verlief: typical of written notes" }
      ]
    },
    vocab: [
      "the handoff, shift report",
      "the day shift, morning shift",
      "the evening shift, afternoon shift",
      "the night shift",
      "to hand over, to give report",
      "restless, agitated",
      "something to report, a notable finding",
      "the condition, the state",
      "stable",
      "so, that's why",
      "still, even so",
      "also, in addition"
    ],
    dialogue: [
      "Good morning. Shall we start with room twelve?",
      "Sure. How was Mrs. Keller's night?",
      "Mrs. Keller was restless. Around three she had abdominal pain, so I notified the doctor on call.",
      "And then?",
      "The doctor came and examined her. After that Mrs. Keller was able to sleep again.",
      "Anything else to report?",
      "She didn't drink much. Also, her blood pressure was elevated in the evening, but she still felt fine.",
      "OK, then I'll recheck her blood pressure right away."
    ],
    culture: {
      title: "A German view: handoff at the bedside",
      text: "<p>On many German units the <i>Dienstübergabe</i> takes place in the staff room; on others part of it happens at the bedside, the <i>Übergabe am Bett</i>. At the bedside the patient can correct or add something, but the roommate and visitors are there too: sensitive information is given outside, quietly, or in the staff room.</p><p>The shifts are usually called <i>Frühdienst</i>, <i>Spätdienst</i> and <i>Nachtdienst</i>, and the hours vary from one facility to another. German units mostly work three eight-hour shifts rather than twelve-hour ones. As a new hire you will find the hours in the <i>Dienstplan</i>, the staff schedule.</p>"
    },
    exercises: [
      {
        q: "You report in handoff that the patient was restless during the night. Which sentence is correct?",
        opts: [
          "Frau Keller hatte in der Nacht unruhig.",
          "Frau Keller war in der Nacht unruhig.",
          "Frau Keller ist in der Nacht unruhig gewesen sein."
        ],
        why: "With an adjective like <i>unruhig</i> you need <b>sein</b>, and in a handoff you use the Präteritum: <b>war</b>. <i>hatte unruhig</i> does not exist, and <i>ist gewesen sein</i> is an incorrect form."
      },
      {
        tr: "The Präteritum of schlafen, all persons.",
        why: "<i>Schlief, schliefst, schlief, schliefen, schlieft, schliefen</i>: a strong verb, the vowel becomes <b>ie</b>, and the first and third person singular have no ending."
      },
      {
        q: "Fill in: “Sie hatte Schmerzen, ___ habe ich die Ärztin informiert.”",
        hint: "connector: so, that's why",
        why: "<b>deshalb</b> (also <i>darum</i>, <i>daher</i>, <i>deswegen</i>): it expresses the consequence and takes the first slot, which is why the verb <i>habe</i> comes right after it."
      },
      {
        q: "Complete the sentence.",
        tr: "Her blood pressure was elevated in the evening, but she still felt fine.",
        why: "<i>Der Blutdruck <b>war</b> am Abend erhöht</i>: sein in the Präteritum. <i><b>trotzdem</b> fühlte sie sich wohl</i>: the connector takes the first slot and the verb follows immediately."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Er hatte Schmerzen, deshalb konnte er nicht schlafen.",
          "Er hatte Schmerzen, deshalb er konnte nicht schlafen.",
          "Er konnte nicht schlafen, weil er Schmerzen hatte.",
          "Außerdem wollte er nichts essen.",
          "Er konnte nicht schlafen, weil er hatte Schmerzen."
        ],
        why: "After <i>deshalb</i> and <i>außerdem</i> the conjugated verb comes right away: <i>deshalb konnte er</i>. After <i>weil</i> the conjugated verb goes to the end: <i>weil er Schmerzen hatte</i>."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["handoff", "day shift", "evening shift", "night shift", "something to report", "condition, state"]
      },
      {
        q: "Match each connector with its meaning.",
        pairs: ["so, that's why", "still, even so", "also, in addition", "because"]
      },
      {
        q: "Put the words in order.",
        tr: "She was in pain, so I notified the doctor.",
        why: "<i>Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert.</i> After the comma <i>deshalb</i> takes the first slot of the second clause, then the verb <i>habe</i>, then the subject <i>ich</i>; the participle <i>informiert</i> goes to the end, without <i>ge-</i>."
      },
      {
        q: "Translate (in handoff): “The night was uneventful.”",
        why: "<i>Die Nacht war ruhig</i> is the simplest form; in written notes you often read <i>Die Nacht verlief ruhig</i>. When speaking, <i>Die Nacht ist ruhig verlaufen</i> is fine too."
      },
      {
        q: "Morning handoff.",
        setting: "You worked the night shift and are giving report to a coworker.",
        lines: [
          { tr: "How was Mr. Brandt's night?" },
          { tr: "Say that he was restless because he was in pain.", answerTr: "He was restless because he was in pain." },
          { tr: "Did you notify the doctor?" },
          { tr: "Say yes: he was in a lot of pain, so you called her.", answerTr: "Yes, he was in a lot of pain, so I called her." },
          { tr: "Anything else to report?" },
          { tr: "Say that he also didn't drink much.", answerTr: "Also, he didn't drink much." }
        ]
      },
      {
        tr: "Around three she had abdominal pain, so I notified the doctor on call.",
        why: "In <i>Bauchschmerzen</i> the <b>ch</b> after <b>au</b> is [x], the sound in Scottish “loch”, never an English “ch”; in <i>deshalb</i> the <b>s</b> and the <b>h</b> are said separately, des-halb, not like English “sh”; in <i>diensthabende</i> the stress falls on <b>Dienst</b>."
      },
      {
        tr: "The night was quiet, there is nothing to report.",
        why: "In <i>Nacht</i> the <b>ch</b> after <b>a</b> is [x]; in <i>ruhig</i> the final <b>g</b> is read [ç], like the h in “huge”; in <i>Besonderheiten</i> the stress falls on <b>son</b>."
      }
    ]
  },
  "lesson:pfl-u06-l2": {
    theme: "Written documentation",
    title: "The nursing note",
    objectives: [
      "write an entry in the nursing notes in short form",
      "turn a verbal sentence into the nominal style",
      "use the passive in the Präteritum: wurde informiert, wurde gewechselt",
      "tell an observation from a judgment"
    ],
    theory: [
      {
        h: "What goes into the note",
        p: "The <strong>Pflegebericht</strong> records what has changed or matters to whoever comes next: the patient's condition, observations, interventions, who was notified. Each entry has a date, a time and the initials of the writer. You write <strong>observations</strong>, not judgments: not <em>Patientin war schwierig</em>, but what you saw and heard: <em>Patientin weinte und sprach wenig.</em> If an observation worries you, the note also records the next step: <em>Ärztin informiert.</em>"
      },
      {
        h: "Nominal style and passive",
        p: "German documentation prefers <strong>nouns</strong> to verbs: <em>Die Patientin verweigerte das Essen</em> becomes <em>Verweigerung der Nahrungsaufnahme</em>. A noun in <em>-ung</em> is always feminine. Here the phrase that follows it is in the genitive, with no preposition: <em>die Verweigerung <b>der</b> Nahrungsaufnahme</em>; other nouns take a preposition (<em>Rücksprache <b>mit</b></em>). When the action matters more than who did it, you use the <strong>passive</strong>, in the Präteritum: <em>Der Verband <b>wurde</b> gewechselt. Die Ärztin <b>wurde</b> informiert.</em> In short entries the auxiliary is often dropped: <em>Verband gewechselt. Ärztin informiert.</em>"
      },
      {
        contrast: "American charting is short too, but it stays verbal: “Pt refused lunch. MD notified. Dressing changed at 1000.” Part of that carries straight over: <em>Ärztin informiert. Verband gewechselt.</em> is exactly the same participle shorthand. The part that does not carry over is the noun chain. English rarely writes “refusal of food intake” in a note; German documentation does it all the time, turning the verb <em>verweigern</em> into <em>die Verweigerung</em>, putting the next phrase in the genitive (<em>der Nahrungsaufnahme</em>) and fusing words into a compound (<em>Nahrung</em> + <em>Aufnahme</em>). Full sentences in a German note mostly use the Präteritum, the same simple past you use in English: <em>Der Patient verweigerte das Mittagessen.</em> The Perfekt is more typical of speech, though it is not wrong in a note. One more habit to drop: English notes often abbreviate “patient” as “pt”; German notes write <em>Patient</em> or <em>Patientin</em>, or use <em>Pat.</em> only if your unit's list allows it."
      },
      {
        trap: "Verbs in <em>-ieren</em> take no <em>ge-</em> in the participle: <em>informiert</em>, <em>dokumentiert</em>, <em>mobilisiert</em>, never <em>geinformiert</em>. And watch the subject: <em>Die Ärztin wurde informiert</em> means someone notified the doctor; <em>Die Ärztin hat informiert</em> means the doctor notified someone else. The verb for a dressing is <em>wechseln</em>, not <em>ändern</em>, even though both translate as “change”: <em>Der Verband wurde gewechselt.</em>"
      },
      {
        tip: "Before you write, ask yourself: will a coworker reading this entry eight hours from now know what happened, when, and who was notified? If yes, the entry is complete. If you wrote an adjective like <em>schwierig</em> or <em>nervig</em>, replace it with what you saw or heard."
      }
    ],
    grammar: {
      title: "From verb to noun",
      note: "Verb → noun in <b>-ung</b> (always feminine), often + a phrase in the <b>genitive</b> (<i>der Nahrungsaufnahme</i>). For the action without the person who did it: <b>wurde</b> + participle.",
      table: {
        head: ["verbal style", "nominal or passive style"],
        rows: [
          ["Die Patientin verweigerte das Essen.", "Verweigerung der Nahrungsaufnahme."],
          ["Ich habe die Ärztin angerufen.", "Ärztin informiert. / Die Ärztin wurde informiert."],
          ["Ich habe den Verband gewechselt.", "Verbandswechsel. / Der Verband wurde gewechselt."],
          ["Er hat wenig getrunken.", "Geringe Flüssigkeitsaufnahme."]
        ]
      },
      examples: [
        { tr: "The patient refused her food at lunch today.", note: "verbal style: fine when speaking and in the note" },
        { tr: "Refusal of food at lunch.", note: "nominal style: Verweigerung + genitive der" },
        { tr: "The dressing was changed at ten.", note: "passive in the Präteritum: wurde + gewechselt" },
        { tr: "The doctor was notified.", note: "informiert: a verb in -ieren, no ge-" },
        { tr: "After consulting with the doctor, mobilization was postponed.", note: "nach Rücksprache mit: a fixed phrase in documentation" },
        { tr: "The bed was lowered for fall prevention.", note: "zur + noun: purpose in nominal style" }
      ]
    },
    vocab: [
      "the nursing note, nursing progress notes",
      "the documentation",
      "the entry (in the notes)",
      "the observation",
      "food intake (technical term)",
      "fluid intake (technical term)",
      "to refuse",
      "the refusal",
      "the consultation (with the doctor)",
      "the patient's well-being, how the patient feels",
      "unremarkable, within normal limits",
      "elimination, output (urine and stool)"
    ],
    dialogue: [
      "Can you take a quick look at my note? I wrote: Mrs. Keller refused her food at lunch today.",
      "That's correct. In the notes people often write it shorter: refusal of food at lunch.",
      "And do I have to write who called the doctor?",
      "Just write: doctor notified. Your initials are already next to the entry.",
      "Can I also write that she was in a bad mood?",
      "Better to write what you saw and heard: patient was crying and spoke little.",
      "Got it. Observations, not judgments."
    ],
    culture: {
      title: "A German view: what isn't written down",
      text: "<p>German nursing staff often quote the line <i>Was nicht dokumentiert ist, gilt als nicht gemacht</i>, the same idea as the American “if it wasn't charted, it wasn't done”. It is a saying, not a law, but it describes the weight of documentation well: it is the basis for continuity of care, for communication with physicians and, in a dispute, for reconstructing what happened.</p><p>For the same reason an entry is never erased or made illegible: if there is a mistake, you strike it through so it stays readable, or you add a correction with date and initials. Electronic systems follow the same rule and log it automatically.</p>"
    },
    exercises: [
      {
        q: "How do you write “Die Patientin verweigerte das Essen” in the nominal style?",
        opts: [
          "Verweigerung von der Nahrungsaufnahme essen.",
          "Verweigerung der Nahrungsaufnahme.",
          "Die Nahrungsaufnahme verweigernd."
        ],
        why: "The verb <i>verweigern</i> becomes the noun <b>die Verweigerung</b>, and the following phrase goes into the genitive: <b>der</b> Nahrungsaufnahme."
      },
      {
        tr: "The Präteritum of werden, all persons.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i>: this is the form that carries the passive in the note, <i>Die Ärztin wurde informiert</i>."
      },
      {
        q: "Fill in: “Die Ärztin ___ um 15 Uhr informiert.”",
        hint: "passive in the Präteritum",
        why: "<b>wurde</b>: the passive in the Präteritum is formed with <i>wurde</i> and the participle, here <i>informiert</i>, without <i>ge-</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "The dressing was changed at ten.",
        why: "<i>Der Verband <b>wurde</b> um zehn Uhr <b>gewechselt</b></i>: <i>wurde</i> in second position, the participle <i>gewechselt</i> at the end."
      },
      {
        q: "Match each documentation term with its meaning.",
        pairs: ["food intake", "fluid intake", "elimination, output (urine and stool)", "consultation with the doctor"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["nursing note", "well-being", "entry in the notes", "observation", "consultation with the doctor", "documentation"]
      },
      {
        q: "Which entries belong in a nursing note?",
        opts: [
          "Patientin weinte und sprach wenig.",
          "Patientin war wieder schwierig.",
          "Verweigerung der Nahrungsaufnahme am Mittag, Ärztin informiert.",
          "Verband um zehn Uhr gewechselt, Wunde unauffällig.",
          "Patient ist faul und will nicht laufen."
        ],
        why: "A note records observations and interventions: what you saw, what was done, who was notified. <i>schwierig</i> and <i>faul</i> are judgments about the person and tell the reader nothing."
      },
      {
        q: "Put the words in order.",
        tr: "After consulting with the doctor, mobilization was postponed.",
        why: "<i>Nach Rücksprache mit der Ärztin wurde die Mobilisation verschoben.</i> The phrase <i>nach Rücksprache mit</i> takes the first slot, then <i>wurde</i>, then the subject, and the participle <i>verschoben</i> at the end."
      },
      {
        q: "Translate (in the note): “The doctor was notified.”",
        why: "<i>Der Arzt wurde informiert</i> or <i>Die Ärztin wurde informiert</i>, depending on who was on duty; in short form <i>Arzt informiert</i>. When speaking, <i>ist informiert worden</i> is fine too."
      },
      {
        q: "An entry in the notes.",
        setting: "A new coworker asks you how to write the nursing note.",
        lines: [
          { tr: "Mrs. Keller refused her food at lunch today. How do I write that?" },
          { tr: "Give her the short form: refusal of food at lunch.", answerTr: "Refusal of food at lunch." },
          { tr: "And that I called the doctor?" },
          { tr: "Give her the short form: doctor notified.", answerTr: "Doctor notified." },
          { tr: "Can I write that she was in a bad mood?" },
          { tr: "Say it's better to write what she observed: she spoke little and was crying.", answerTr: "Better to write what you observed: she spoke little and was crying." }
        ]
      },
      {
        tr: "That's correct. In the notes people often write it shorter: refusal of food at lunch.",
        why: "In <i>Bericht</i> the <b>ch</b> after <b>i</b> is [ç], like the h in “huge”; in <i>Verweigerung</i> the <b>v</b> is [f] and the <b>w</b> is [v], with the stress on <b>wei</b>; in <i>Nahrungsaufnahme</i> the stress falls on <b>Nah</b>."
      },
      {
        tr: "The doctor was notified.",
        why: "In <i>Ärztin</i> the <b>ä</b> is open, like the e in “bed”, and the <b>z</b> is [ts]; in <i>wurde</i> the <b>w</b> is [v] and the <b>u</b> is short; in <i>informiert</i> the stress falls on <b>miert</b>, with a long <b>ie</b>."
      }
    ]
  },
  "lesson:pfl-u06-l3": {
    theme: "Care planning",
    title: "The care plan",
    objectives: [
      "read a care plan: problem, resource, goal, intervention",
      "state the purpose of an intervention with damit and um ... zu",
      "choose between damit and um ... zu depending on the subject",
      "write a goal that can be checked"
    ],
    theory: [
      {
        h: "The parts of the care plan",
        p: "The <strong>Pflegeplanung</strong> follows the same pattern in almost every facility. The <strong>Pflegeproblem</strong> says what is difficult for the patient (<em>Sie trinkt zu wenig</em>). The <strong>Ressource</strong> says what the patient can still do alone (<em>Sie kann den Becher selbst halten</em>). The <strong>Pflegeziel</strong> says what you want to achieve, in a way you can check (<em>Die Patientin trinkt ausreichend</em>). The <strong>Maßnahmen</strong> say what you do and why. At the <strong>Evaluation</strong> you check whether the goal was met. Amounts and intervals are set for each patient, with the physician and according to the facility's standards: the examples in this lesson are for teaching only."
      },
      {
        h: "damit or um ... zu?",
        p: "The purpose of an intervention is expressed with a purpose clause. If its subject is <strong>different</strong> from the subject of the main clause, you use <strong>damit</strong>, with the conjugated verb at the end: <em>Wir bieten ihr Tee an, damit <b>sie</b> mehr trinkt.</em> If the subject is <strong>the same</strong>, you can use <strong>um ... zu</strong> with the infinitive: <em>Wir führen ein Trinkprotokoll, um die Trinkmenge zu kontrollieren</em> (we keep the log and we check the amount). With separable verbs <em>zu</em> goes in the middle: <em>um aufzustehen</em>."
      },
      {
        contrast: "English draws the same line with “to” and “so (that)”: “we keep an intake log to monitor fluids”, “we offer her tea so she drinks more”. The difference is the verb position: after <em>damit</em> the conjugated verb goes to the very end (<em>damit sie mehr trinkt</em>), and <em>um ... zu</em> puts the infinitive last, while English keeps it right after “to”: <em>um die Trinkmenge zu kontrollieren</em>, “to monitor the amount”. The vocabulary is less transparent than it looks. A US care plan is built on nursing diagnoses (“Deficient fluid volume”, “Risk for impaired skin integrity”); the German <em>Pflegeproblem</em> is usually written as a plain sentence instead: <em>Sie trinkt zu wenig.</em> <em>Ressource</em> has no fixed place in most US care plans; the closest is “patient strengths”. <em>Maßnahme</em> is the intervention, and <em>Pflegeziel</em> the goal or expected outcome. None of these words are used with the patient: instead of <em>Ihre Ressource</em> you say <em>Das können Sie schon gut allein</em>."
      },
      {
        trap: "<em>damit</em> has two meanings. As a conjunction it introduces purpose and sends the verb to the end: <em>damit sie mehr trinkt</em>. As an adverb it means “with it, with that”: <em>Was machen wir damit?</em> “What do we do with it?”. <em>Die Maßnahme</em> is the intervention, not a “measure” in the sense of an amount: a measurement is <em>die Messung</em>. And <em>erhalten</em> here means “to preserve, to maintain” (<em>die Selbstständigkeit erhalten</em>), not only “to receive”."
      },
      {
        tip: "For each intervention in the care plan, try saying the reason out loud with <em>damit</em> or <em>um ... zu</em>. If no purpose clause comes to mind, the plan is often missing the purpose too, and an intervention without a purpose is hard to assess at the Evaluation."
      }
    ],
    grammar: {
      title: "Purpose: damit and um ... zu",
      note: "<b>Different</b> subject: <b>damit</b> + conjugated verb at the end. <b>Same</b> subject: <b>um ... zu</b> + infinitive at the end (or damit).",
      table: {
        head: ["main clause", "purpose clause", "subject"],
        rows: [
          ["Wir bieten ihr oft Tee an,", "damit sie mehr trinkt.", "different: damit"],
          ["Wir lagern ihn regelmäßig um,", "damit kein Dekubitus entsteht.", "different: damit"],
          ["Er geht täglich mit dem Rollator,", "um mobil zu bleiben.", "same: um ... zu"],
          ["Wir führen ein Trinkprotokoll,", "um die Trinkmenge zu kontrollieren.", "same: um ... zu"]
        ]
      },
      examples: [
        { tr: "We reposition Mrs. Keller regularly so that she doesn't develop a pressure injury.", note: "different subjects (wir / kein Dekubitus): damit" },
        { tr: "We often offer her tea so that she drinks more.", note: "different subjects (wir / sie): damit" },
        { tr: "Mr. Brandt walks with his rolling walker every day to stay mobile.", note: "same subject: um ... zu" },
        { tr: "We keep an intake log to monitor how much she drinks.", note: "same subject: um ... zu, infinitive at the end" },
        { tr: "Resource: the patient can hold the cup on her own.", note: "the resource says what the patient can still do alone" },
        { tr: "Goal: the patient drinks enough.", note: "the goal is written in the present, as a state to reach" }
      ]
    },
    vocab: [
      "the care plan, care planning",
      "the nursing problem",
      "the resource (what the patient can still do)",
      "the care goal, expected outcome",
      "the intervention",
      "the evaluation (of the care plan)",
      "the risk",
      "to avoid, to prevent",
      "to preserve, to maintain",
      "to promote, to support",
      "the amount of fluid taken in",
      "the fluid intake log"
    ],
    dialogue: [
      "Today we're updating Mrs. Keller's care plan. What is her nursing problem?",
      "She doesn't drink enough. There's a risk of dehydration.",
      "Right. And what resources does she have?",
      "She can hold the cup on her own, and she likes tea.",
      "Good. What interventions do we plan?",
      "We offer her tea regularly so that she drinks more. Also, we keep an intake log to monitor how much she drinks.",
      "Very good. And the goal?",
      "Mrs. Keller drinks enough. We'll set the exact amount with the doctor."
    ],
    culture: {
      title: "A German view: from the nursing process to the SIS",
      text: "<p>In German nursing education, planning is taught as the <i>Pflegeprozess</i>, a cycle of steps from gathering information to evaluation, much like the nursing process you know. In hospitals the care plan is often a module of the electronic record, with problems and interventions already worded, to pick and adapt.</p><p>In elder care, many German facilities use a leaner model, the <i>Strukturierte Informationssammlung</i> (SIS), created to reduce paperwork. The words in this lesson stay the same: you will find them on any form.</p>"
    },
    exercises: [
      {
        q: "You want to say why you reposition the patient. Which sentence is correct?",
        opts: [
          "Wir lagern ihn regelmäßig um, um kein Dekubitus entsteht.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus zu entstehen.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus entsteht."
        ],
        why: "The subjects are different (<i>wir</i> and <i>kein Dekubitus</i>), so you need <b>damit</b> with the conjugated verb at the end: <i>entsteht</i>. <i>um</i> cannot take a conjugated verb, and there is no <i>zu</i> after <i>damit</i>."
      },
      {
        q: "Fill in: “Wir führen ein Trinkprotokoll, ___ die Trinkmenge zu kontrollieren.”",
        hint: "same subject, infinitive with zu",
        why: "<b>um</b>: we keep the log and we do the checking, so <i>um ... zu</i> with the infinitive at the end."
      },
      {
        q: "Complete the sentence.",
        tr: "We often offer her tea so that she drinks more. He walks with his rolling walker every day to stay mobile.",
        why: "<i><b>damit</b> sie mehr trinkt</i>: the subjects are different. <i>um mobil zu <b>bleiben</b></i>: same subject, the infinitive goes at the end after <i>zu</i>."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Ich messe den Blutdruck, um Veränderungen früh zu erkennen.",
          "Ich messe den Blutdruck, damit Veränderungen früh zu erkennen.",
          "Wir mobilisieren ihn, damit er selbstständig bleibt.",
          "Wir mobilisieren ihn, um er selbstständig bleibt.",
          "Sie trinkt viel, um fit zu bleiben."
        ],
        why: "<i>um ... zu</i> needs the infinitive with <i>zu</i> and the same subject; <i>damit</i> needs a conjugated verb. <i>damit ... zu erkennen</i> and <i>um er ... bleibt</i> mix the two structures."
      },
      {
        q: "Match each part of the care plan with its meaning.",
        pairs: ["what is difficult for the patient", "what the patient can still do alone", "what we want to achieve", "what we do to achieve it"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["care plan", "nursing problem", "resource", "care goal", "risk", "fluid intake log"]
      },
      {
        q: "Put the words in order.",
        tr: "We often offer her tea so that she drinks more.",
        why: "<i>Wir bieten ihr oft Tee an, damit sie mehr trinkt.</i> The prefix <i>an</i> closes the main clause; after <i>damit</i> the conjugated verb <i>trinkt</i> goes to the end."
      },
      {
        q: "Translate (in the care plan): “We mobilize him so that he stays independent.”",
        why: "<i>Wir mobilisieren ihn, damit er selbstständig bleibt.</i> The subjects are different (<i>wir</i> and <i>er</i>), so <i>damit</i>. Both spellings are correct, <i>selbstständig</i> and <i>selbständig</i>."
      },
      {
        q: "Mr. Brandt's care plan.",
        setting: "Your preceptor asks you to present the care plan of a bed-bound patient.",
        lines: [
          { tr: "What is Mr. Brandt's nursing problem?" },
          { tr: "Say that he moves very little, so there is a risk of a pressure injury.", answerTr: "He moves very little, so there's a risk of a pressure injury." },
          { tr: "And what intervention do we plan?" },
          { tr: "Say that you reposition him regularly so that no pressure injury develops.", answerTr: "We reposition him regularly so that no pressure injury develops." },
          { tr: "What resource does he have?" },
          { tr: "Say that, holding on to the bed rail, he can turn himself.", answerTr: "Holding on to the bed rail, he can turn himself." }
        ]
      },
      {
        tr: "We offer her tea regularly so that she drinks more.",
        why: "In <i>regelmäßig</i> the <b>ß</b> is a voiceless [s] and the final <b>g</b> is read [ç]; in <i>damit</i> the stress falls on <b>mit</b>; in <i>trinkt</i> the <b>nk</b> is [ŋk], as in English “think”."
      },
      {
        tr: "We reposition Mrs. Keller regularly so that she doesn't develop a pressure injury.",
        why: "In <i>lagern</i> the final <b>-ern</b> sounds almost like [ɐn], with no American r; in <i>Dekubitus</i> the stress falls on <b>ku</b>, with a long <b>u</b>; in <i>entsteht</i> the <b>st</b> is read [ʃt], like “sht”, and the <b>h</b> is silent."
      }
    ]
  },
  "lesson:pfl-u06-l4": {
    theme: "Abbreviations",
    title: "Abbreviations on the unit",
    objectives: [
      "read and expand the most common abbreviations: AZ, EZ, VZ, BZ, RR, o.B., p.o., b.B.",
      "say them out loud with coworkers and put them into plain words for the patient",
      "know where to look up an abbreviation you don't know",
      "recognize that b.B. does not mean “at the nurse's discretion”"
    ],
    theory: [
      {
        h: "The most common abbreviations",
        p: "In the notes and on the <strong>Kurve</strong> (the vital signs and medication chart) abbreviations are everywhere: <em>AZ</em> Allgemeinzustand, general condition; <em>EZ</em> Ernährungszustand, nutritional status; <em>VZ</em> Vitalzeichen, vital signs; <em>BZ</em> Blutzucker, blood glucose; <em>RR</em> blood pressure; <em>o.B.</em> ohne Befund, no abnormal findings; <em>p.o.</em> per os, by mouth; <em>b.B.</em> bei Bedarf, as needed. Coworkers read them letter by letter (<em>A-Z, B-Z, o-B</em>, with German letter names: “ah-tset”, “bay-tset”) or expand them. Every facility has its own <strong>Abkürzungsverzeichnis</strong>: the approved abbreviations are the ones on your facility's list, and the same one can vary from unit to unit."
      },
      {
        h: "Two registers",
        p: "Abbreviations are written <strong>Fachsprache</strong>: they are for coworkers and documents. With the patient you go back to <strong>Laiensprache</strong>: not <em>Ihr AZ ist reduziert</em>, but <em>Sie sind im Moment etwas geschwächt</em>; not <em>VZ o.B.</em>, but <em>Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung.</em> And <em>b.B.</em> is not the nurse's decision: it means the physician has ordered a medication to be given when needed, under the conditions written in the order."
      },
      {
        contrast: "You already chart in abbreviations, just different ones. Most have a direct German counterpart: PRN is <em>b.B.</em>, PO is <em>p.o.</em> (same Latin, written lowercase with periods), BG or FSBG is <em>BZ</em>, WNL is roughly <em>o.B.</em> The one that surprises everyone is BP: Germans write <em>RR</em>, after Riva-Rocci, the Italian physician who invented the cuff blood pressure monitor, and they say <em>RR</em> out loud too. Others have no US equivalent: nobody charts “GC decreased” in English, while <em>AZ reduziert</em> is an everyday phrase on a German unit. Some of your habits do not travel at all: “pt”, “c/o”, “SOB” or “h/o” will not be understood, and SOB in particular should stay home. The idea behind the Joint Commission “Do Not Use” list exists here too: each facility decides which abbreviations are allowed."
      },
      {
        trap: "<em>ohne Befund</em> does not mean “not examined” or “not checked”: it means the check was done and showed nothing abnormal, much like “negative” or WNL. <em>Die Kurve</em> on the unit is not a curve on a graph: it is the chart where vital signs and medications are recorded, the closest thing to your flowsheet and MAR together. And <em>der Befund</em> alone is the report or the finding: <em>Der Befund ist da</em> means the result has come back, not that it is positive."
      },
      {
        tip: "If you don't know an abbreviation, ask: <em>Was heißt das?</em> Nobody on the unit expects you to know the facility's list by heart, and a misread abbreviation is an error that gets passed from shift to shift. When you are the one writing and you are unsure, spell it out: <em>Schreib die Abkürzung im Zweifel aus.</em>"
      }
    ],
    grammar: {
      title: "From abbreviation to sentence",
      note: "With coworkers: the abbreviation or the short form. With the patient: a full sentence in <b>Laiensprache</b>, no abbreviations.",
      table: {
        head: ["abbreviation", "spelled out", "to the patient"],
        rows: [
          ["AZ reduziert", "Allgemeinzustand reduziert", "Sie sind im Moment etwas geschwächt."],
          ["VZ o.B.", "Vitalzeichen ohne Befund", "Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung."],
          ["BZ", "Blutzucker", "Ich messe jetzt Ihren Blutzucker."],
          ["p.o.", "per os", "Bitte schlucken Sie die Tablette mit etwas Wasser."]
        ]
      },
      examples: [
        { tr: "General condition decreased, nutritional status good.", note: "AZ and EZ: read A-Z, E-Z" },
        { tr: "Vital signs within normal limits.", note: "o.B.: no abnormal findings, the check was done" },
        { tr: "BP and pulse checked, doctor notified.", note: "RR: from Riva-Rocci, blood pressure" },
        { tr: "Blood glucose checked before lunch.", note: "BZ: Blutzucker, the BG on your chart" },
        { tr: "Tablets taken by mouth.", note: "p.o.: per os, the PO you already know" },
        { tr: "Pain medication as needed per the physician's order.", note: "b.B.: PRN, only under the conditions the physician ordered" }
      ]
    },
    vocab: [
      "general condition (AZ)",
      "nutritional status (EZ)",
      "no abnormal findings, WNL (o.B.)",
      "by mouth, PO (p.o.)",
      "decreased, reduced",
      "PRN medication, as-needed medication",
      "the vital signs and medication chart",
      "the patient's chart, medical record",
      "the abbreviation",
      "the initials (of the writer)",
      "the list of approved abbreviations",
      "to spell out, to write in full"
    ],
    dialogue: [
      "The note says: AZ decreased, EZ good. What does that mean?",
      "AZ is the general condition, EZ the nutritional status. So she's weak, but well nourished.",
      "And VZ o.B.?",
      "The vital signs show no abnormal findings, so they're normal.",
      "It also says: pain medication b.B. Can I just give it to her?",
      "Only according to the physician's order on the chart. As needed means: when she's in pain, not automatically.",
      "And if I don't know an abbreviation?",
      "Then you ask. With the patient you talk without abbreviations anyway."
    ],
    culture: {
      title: "A German view: the list of abbreviations",
      text: "<p>Many hospitals and elder care facilities in Germany have an internal <i>Abkürzungsverzeichnis</i> that sets which abbreviations may be used in the documentation. The reason is safety: an abbreviation with two meanings, read by someone from another unit, can lead to an error.</p><p>That is why internal rules often require the most sensitive information, such as drug names and orders, to be written out in full. When you start at a new facility, ask where the list is: it is one of the first useful things to read.</p>"
    },
    exercises: [
      {
        q: "The note says “VZ o.B.”. What does it mean?",
        opts: [
          "The vital signs were not taken.",
          "The vital signs were checked and are within normal limits.",
          "The vital signs need to be rechecked."
        ],
        why: "<i>VZ</i> are the <i>Vitalzeichen</i>, and <b>o.B.</b> means <i>ohne Befund</i>: the check was done and showed nothing abnormal."
      },
      {
        q: "Fill in: “Tabletten werden ___ eingenommen, also über den Mund.”",
        hint: "the Latin abbreviation, with periods",
        why: "<b>p.o.</b>, that is <i>per os</i>: by mouth, the PO you already write."
      },
      {
        q: "Match each abbreviation with its meaning.",
        pairs: ["general condition", "nutritional status", "blood glucose", "vital signs"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["general condition", "nutritional status", "vital signs chart", "abbreviation", "writer's initials", "list of abbreviations"]
      },
      {
        q: "Which sentences can you say to a patient?",
        opts: [
          "Ihr Blutzucker ist in Ordnung.",
          "Ihr BZ ist o.B.",
          "Sagen Sie mir bitte Bescheid, wenn Sie Schmerzen haben.",
          "Ihr AZ ist reduziert.",
          "Ihre Werte sind unauffällig."
        ],
        why: "With the patient you speak without abbreviations and without documentation phrases. <i>BZ o.B.</i> and <i>AZ reduziert</i> are correct between coworkers, but the patient won't understand them."
      },
      {
        q: "Spell out the two abbreviations in “AZ reduziert, EZ gut”.",
        tr: "General condition decreased, nutritional status good.",
        why: "<i>AZ</i> stands for <b>Allgemeinzustand</b>, <i>EZ</i> for <b>Ernährungszustand</b>. Both are masculine: <i>der Zustand</i>."
      },
      {
        q: "Put the words in order.",
        tr: "The vital signs are within normal limits.",
        why: "<i>Die Vitalzeichen sind ohne Befund.</i> This is the spelled-out form of <i>VZ o.B.</i>; <i>Vitalzeichen</i> is plural here, so <i>sind</i>."
      },
      {
        q: "Translate (in the note): “The general condition is good.”",
        why: "<i>Der Allgemeinzustand ist gut</i>, or in short form <i>Allgemeinzustand gut</i> or <i>AZ gut</i>."
      },
      {
        q: "The patient reads the note.",
        setting: "Mrs. Keller has read some abbreviations in her records and asks you what they mean.",
        lines: [
          { tr: "My note says AZ decreased. What does that mean?" },
          { tr: "Answer without abbreviations: it means that right now she is a little weak.", answerTr: "It means that right now you're a little weak." },
          { tr: "And what does o.B. next to the vital signs mean?" },
          { tr: "Say that her blood pressure, pulse and temperature are fine.", answerTr: "Your blood pressure, your pulse and your temperature are fine." },
          { tr: "Will I get something for the pain if it hurts?" },
          { tr: "Say that she should let you know when she is in pain: the doctor has ordered a pain medication.", answerTr: "Yes, let me know when you're in pain. The doctor has ordered a pain medication." }
        ]
      },
      {
        tr: "The vital signs show no abnormal findings, so they're normal.",
        why: "In <i>Vitalzeichen</i> the <b>V</b> is [v], as in English, and the <b>z</b> is [ts], like “ts” in “cats”; in <i>Befund</i> the final <b>d</b> is read [t]; in <i>unauffällig</i> the stress falls on <b>un</b>."
      },
      {
        tr: "With the patient we talk without abbreviations.",
        why: "In <i>Patienten</i> the <b>ti</b> is read [tsi], not “sh” as in English “patient”; in <i>sprechen</i> the initial <b>sp</b> is [ʃp], like “shp”; in <i>Abkürzungen</i> the stress falls on <b>Ab</b> and the <b>ü</b> is short."
      }
    ]
  },
  "lesson:pfl-u06-test": {
    theme: "Test",
    title: "Test: Shift handoff and nursing notes",
    objectives: [
      "check the Präteritum in handoff, connectors, nominal style, the passive, purpose clauses and unit abbreviations"
    ],
    theory: [
      {
        p: "Eleven questions on the whole unit. The pass mark is 70%. The patients and situations are made up and are only examples: what gets documented and which abbreviations are used is set by your facility's rules."
      }
    ],
    exercises: [
      {
        q: "In handoff: “Herr Brandt ___ in der Nacht starke Schmerzen.”",
        opts: ["war", "hatte", "wurde"],
        why: "<i>Schmerzen haben</i>, in the Präteritum <b>hatte</b>: the form that is used even when speaking."
      },
      {
        q: "Fill in: “Der Verband ___ gestern gewechselt.”",
        hint: "passive in the Präteritum",
        why: "<b>wurde</b>: the passive in the Präteritum, with the participle <i>gewechselt</i> at the end."
      },
      {
        q: "Fill in: “Wir lagern ihn regelmäßig um, ___ kein Dekubitus entsteht.”",
        hint: "purpose clause, different subjects",
        why: "<b>damit</b>: the subjects are different (<i>wir</i> and <i>kein Dekubitus</i>) and the conjugated verb <i>entsteht</i> goes to the end."
      },
      {
        tr: "The Präteritum of haben, all persons.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i>: the <b>b</b> of <i>haben</i> drops out and the <b>t</b> is doubled."
      },
      {
        q: "Match each abbreviation with its meaning.",
        pairs: ["general condition", "nutritional status", "as needed (PRN)", "by mouth (PO)"]
      },
      {
        q: "Which entries are correct in a nursing note?",
        opts: [
          "Verweigerung der Nahrungsaufnahme am Abend.",
          "Ärztin geinformiert.",
          "VZ o.B., AZ stabil.",
          "Patientin war heute wieder nervig.",
          "Verband gewechselt, Wunde unauffällig."
        ],
        why: "<i>informiert</i> takes no <i>ge-</i>, because the verb ends in <i>-ieren</i>. <i>nervig</i> is a judgment, not an observation."
      },
      {
        q: "Complete the sentence.",
        tr: "She was restless, so I notified the doctor.",
        why: "<i>Sie <b>war</b> unruhig</i>: sein in the Präteritum. <i><b>deshalb</b> habe ich</i>: the verb comes right after the connector."
      },
      {
        q: "Put the words in order.",
        tr: "We mobilize him every day so that he stays independent.",
        why: "<i>Wir mobilisieren ihn täglich, damit er selbstständig bleibt.</i> After <i>damit</i> the conjugated verb <i>bleibt</i> goes to the end."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["handoff", "nursing note", "care goal", "well-being", "general condition", "intervention"]
      },
      {
        tr: "Mrs. Keller was restless during the night, so I notified the doctor.",
        why: "In <i>unruhig</i> the stress falls on <b>un</b> and the final <b>g</b> is read [ç]; in <i>deshalb</i> the <b>s</b> and the <b>h</b> are said separately; in <i>informiert</i> the stress falls on <b>miert</b>."
      },
      {
        tr: "We often offer her tea so that she drinks more.",
        why: "In <i>bieten</i> the <b>ie</b> is long, like “ee” in “see”; in <i>Tee</i> the double <b>e</b> is a long, closed e, close to “tay” but without the glide; in <i>trinkt</i> the <b>nk</b> is [ŋk]."
      }
    ]
  }
});
