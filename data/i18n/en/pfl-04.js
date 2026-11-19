/* ============================================================
   Learner-language text (en) for data/core/pfl-04.js, unit pfl-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:pfl-u04": {
    title: "Pain and emergencies",
    grammarNote: "adjective endings to describe pain · time clauses with als, wenn, bis, während, sobald · the imperative to call for help · Perfekt and Präteritum to report a fall"
  },
  "lesson:pfl-u04-l1": {
    theme: "Pain",
    title: "How bad is the pain?",
    objectives: [
      "ask the patient to rate pain on a scale from 0 to 10",
      "describe the kind of pain: sharp, burning, dull, pressing, pulling",
      "put the right ending on an adjective in front of a noun",
      "report pain to the doctor without promising the patient a medication"
    ],
    theory: [
      {
        h: "Measuring pain with a question",
        p: "Pain is not measured with a device: the patient tells you. That is why many units use a numeric scale from 0 to 10: <em>Wie stark sind die Schmerzen von null bis zehn? Null heißt keine Schmerzen, zehn heißt die stärksten Schmerzen, die Sie sich vorstellen können.</em> Then you ask what the pain feels like (<em>Wie fühlt sich der Schmerz an?</em>), whether it spreads (<em>Strahlt der Schmerz aus?</em>) and since when (<em>Seit wann?</em>). The number is charted together with the time, so the next shift can compare."
      },
      {
        h: "An adjective in front of a noun takes an ending",
        p: "When an adjective comes <strong>before</strong> a noun, it takes an ending that depends on the article, the gender and the case: <em>ein drückend<b>er</b> Schmerz</em> (nominative, indefinite article), <em>einen stechend<b>en</b> Schmerz</em> (accusative), <em>der dumpf<b>e</b> Schmerz</em> (after the definite article). In the plural with no article the ending is <b>-e</b>: <em>starke Schmerzen</em>; after <em>die</em> or <em>diese</em> it is <b>-en</b>: <em>diese starken Schmerzen</em>. When the adjective comes <strong>after</strong> <em>sein</em>, it takes no ending at all: <em>Der Schmerz ist dumpf.</em>"
      },
      {
        contrast: "English adjectives never change: “a sharp pain”, “sharp pains”, “the pain is sharp”. German adds an ending whenever the adjective stands before the noun, so “einen stechend Schmerz” sounds broken to a German ear, even though every word is right. The pain words themselves map only roughly. <em>Stechend</em> is your “sharp” or “stabbing”; <em>drückend</em> is “pressing”, “pressure-like”, the pain a patient describes as “like something heavy on my chest”; <em>ziehend</em> is “pulling” or “dragging”, and many patients use it where an American patient would say “aching” or “it pulls down my leg”. <em>Dumpf</em> is “dull”. On register, English already has two levels: you chart “analgesic”, the patient asks for “pain meds” or “something for the pain”. German works the same way: <em>das Analgetikum</em> in the chart, <em>das Schmerzmittel</em> at the bedside."
      },
      {
        trap: "German patients almost always talk about pain in the plural: <em>Ich habe Schmerzen</em>, <em>Haben Sie Schmerzen?</em> The singular <em>der Schmerz</em> is for describing one specific pain: <em>Der Schmerz ist stechend.</em> Watch <em>stark</em>: before a plural noun with no article it is <em>starke</em>, not “starken” (<em>Haben Sie starke Schmerzen?</em>). And “I have a pain” is not <em>Ich habe einen Schmerz</em> in everyday speech; patients say <em>Ich habe Schmerzen</em> or <em>Mir tut ... weh</em>."
      },
      {
        tip: "If the patient asks for something for the pain, do not promise a medication: <em>Ich sage es sofort der Ärztin, sie entscheidet über ein Schmerzmittel.</em> Which drug and when is decided by the physician's order. Afterwards, ask for the number on the scale again and chart it: that is how you see whether the pain has gone down."
      }
    ],
    grammar: {
      title: "Adjectives that describe pain",
      note: "Before a noun the adjective takes an <b>ending</b>; after <b>sein</b> it takes none. Plural with no article: <b>-e</b>; after <i>die</i>, <i>diese</i>: <b>-en</b>.",
      table: {
        head: ["case", "example", "ending"],
        rows: [
          ["nominative, ein", "Es ist ein drückender Schmerz.", "-er"],
          ["accusative, einen", "Ich habe einen stechenden Schmerz.", "-en"],
          ["plural, no article", "Haben Sie starke Schmerzen?", "-e"],
          ["plural with diese", "Seit wann haben Sie diese starken Schmerzen?", "-en"],
          ["dative plural, no article", "Auch bei leichten Schmerzen dürfen Sie klingeln.", "-en"],
          ["after sein", "Der Schmerz ist dumpf.", "none"]
        ]
      },
      examples: [
        { tr: "Are you in a lot of pain?", note: "plural, no article: starke" },
        { tr: "I have a sharp pain in my side.", note: "masculine accusative after einen: stechenden" },
        { tr: "It's a pressing pain.", note: "masculine nominative after ein: drückender" },
        { tr: "The pain is dull.", note: "after sein the adjective takes no ending" },
        { tr: "How long have you had this bad pain?", note: "after diese in the plural: starken" },
        { tr: "Even if the pain is mild, you can press the call button.", note: "bei takes the dative: leichten" }
      ]
    },
    vocab: [
      "the pain scale",
      "the pain intensity",
      "sharp, stabbing",
      "burning",
      "dull (of pain)",
      "pressing, pressure-like",
      "pulling, dragging",
      "to radiate (der Schmerz strahlt aus: the pain radiates)",
      "the painkiller, pain medication (word for the patient)",
      "the analgesic (technical term)",
      "pain relief (word for the patient)",
      "analgesia (technical term)"
    ],
    dialogue: [
      "Ms. Keller, are you in pain?",
      "Yes, I have bad pain in my back.",
      "How bad is the pain from zero to ten? Zero means no pain, ten means the worst pain you can imagine.",
      "I'd say seven.",
      "What does the pain feel like? Is it sharp, burning or dull?",
      "More dull. And it goes down into my right leg.",
      "Thank you. I'll tell the doctor right away; she decides about pain medication.",
      "Thank you, Ms. Marin."
    ],
    culture: {
      title: "A German view: pain is asked about and charted",
      text: "<p>For the care of people in pain, Germany has a national nursing <i>Expertenstandard</i>, published by the DNQP: it describes how to assess pain systematically, document it and reassess it. In practice many units ask about pain with a numeric scale from 0 to 10, the <i>Numerische Rating-Skala</i> (NRS), and chart it alongside the vital signs.</p><p>With people who cannot give a number, for example in advanced dementia, behavioral observation scales are used: the face, the breathing, restlessness. Which scale to use is up to the facility; the principle stays the same: pain is what the patient reports, not what it looks like from the outside.</p>"
    },
    exercises: [
      {
        q: "The patient wants to say “I have a sharp pain in my side”. Which sentence is correct?",
        opts: [
          "Ich habe einen stechender Schmerz in der Seite.",
          "Ich habe einen stechenden Schmerz in der Seite.",
          "Ich habe ein stechenden Schmerz in der Seite."
        ],
        why: "<i>Der Schmerz</i> is masculine and here it is the direct object, so accusative: <b>einen stechenden Schmerz</b>. After <i>einen</i> the adjective takes <b>-en</b>."
      },
      {
        q: "Fill in: “Haben Sie ___ Schmerzen?” (stark)",
        hint: "plural, no article",
        why: "<b>starke</b>: in the plural with no article the adjective takes <b>-e</b>, standing in for the missing article <i>die</i>."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["pain scale", "painkiller", "analgesic", "pain relief", "analgesia", "back"]
      },
      {
        q: "Match each adjective with the kind of pain.",
        pairs: ["sharp, stabbing", "burning", "dull", "pulling, dragging"]
      },
      {
        q: "Put the words in order.",
        tr: "Does the pain radiate into your arm?",
        why: "<i>Strahlt der Schmerz in den Arm aus?</i> Yes/no question: the conjugated verb <i>strahlt</i> comes first and the separable prefix <i>aus</i> goes to the end."
      },
      {
        q: "Complete the sentence.",
        tr: "I have a dull pain in my back, and it's very bad.",
        why: "<i>einen dumpfen Schmerz</i>: before the noun, masculine accusative, ending <b>-en</b>. <i>er ist sehr stark</i>: after <i>sein</i> the adjective has no ending."
      },
      {
        q: "Translate, speaking to the patient: “Are you in a lot of pain?”",
        why: "<i>Haben Sie starke Schmerzen?</i> In speech you also hear <i>große Schmerzen</i>. Pain is said in the plural, and an adjective before a plural noun with no article takes <b>-e</b>."
      },
      {
        q: "Which sentences have the right ending?",
        opts: [
          "Haben Sie starke Schmerzen?",
          "Es ist ein drückender Schmerz.",
          "Ich habe einen dumpfe Schmerz.",
          "Seit wann haben Sie diese starken Schmerzen?",
          "Der Schmerz ist stechender."
        ],
        why: "After <i>einen</i> you need <i>dumpfen</i>. After <i>ist</i> the adjective takes no ending: <i>Der Schmerz ist stechend</i>."
      },
      {
        q: "A patient presses the call button.",
        setting: "You walk into the room: the patient says his belly hurts.",
        lines: [
          { tr: "My belly hurts." },
          { tr: "Ask how bad the pain is from zero to ten.", answerTr: "How bad is the pain from zero to ten?" },
          { tr: "About six." },
          { tr: "Ask whether it is a sharp or a dull pain.", answerTr: "Is it a sharp pain or a dull pain?" },
          { tr: "More sharp. Will you give me something for the pain now?" },
          { tr: "Answer that you will tell the doctor right away and that she decides.", answerTr: "I'll tell the doctor right away. She decides about pain medication." }
        ]
      },
      {
        tr: "I have bad pain in my back. The pain is dull and goes down into my right leg.",
        why: "In <i>Schmerzen</i> the <b>sch</b> is [ʃ] and the <b>z</b> is [ts]; in <i>Rücken</i> the <b>ü</b> is short; in <i>strahlt</i> the initial <b>st</b> is [ʃt] and the <b>h</b> lengthens the <b>a</b>."
      },
      {
        tr: "How bad is the pain from zero to ten?",
        why: "In <i>stark</i> the initial <b>st</b> is [ʃt]; in <i>null</i> the <b>u</b> is short; in <i>zehn</i> the <b>z</b> is [ts] and the <b>h</b> lengthens the <b>e</b>."
      }
    ]
  },
  "lesson:pfl-u04-l2": {
    theme: "Recognizing an emergency",
    title: "An emergency",
    objectives: [
      "recognize the signs of an emergency and say what you observed",
      "understand and use the Fachsprache / Laiensprache pairs for emergencies",
      "choose between als and wenn and put the verb at the end of a time clause",
      "ask and chart when the symptoms started"
    ],
    theory: [
      {
        h: "What you observe",
        p: "First you recognize, then you call for help. The phrases in this lesson describe what you see and hear: the patient <em>reagiert nicht</em>, <em>ist nicht ansprechbar</em> (does not respond when spoken to), <em>ist plötzlich ganz blass</em>, <em>spricht so komisch</em>, one arm stays down, one corner of the mouth droops. The key word is <em>plötzlich</em>, suddenly: a sudden change gets reported right away, even if you don't know yet what it is. The diagnosis belongs to the physician; your job is to see, call and stay."
      },
      {
        h: "The time clause",
        p: "Time conjunctions open a subordinate clause with the conjugated verb <strong>at the end</strong>: <em>bis das Team kommt</em>, <em>während ich mit ihr sprach</em>, <em>sobald das Team da ist</em>. If the subordinate clause comes first, the main clause starts with the verb: <em>Als ich ins Zimmer kam, <b>war</b> sie nicht ansprechbar.</em> Two conjunctions translate “when”: <strong>als</strong> for a <b>single event in the past</b> (<em>Als ich ins Zimmer kam</em>), <strong>wenn</strong> for the present, the future and anything that repeats (<em>Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe</em>). <em>Wann</em> is the question word: <em>Wann hat das angefangen?</em>"
      },
      {
        contrast: "For an American nurse the Latin-Greek terms here are only half familiar. <em>Myokardinfarkt</em> is your “MI”, <em>Synkope</em> is “syncope” from the chart; but <em>Apoplex</em> sounds like the old-fashioned “apoplexy”, and <em>somnolent</em> is a word few English speakers use. The patient's words are easier for you than for a Romance speaker: <em>der Schlaganfall</em> is built like “stroke” (<em>Schlag</em> is a blow, a stroke), <em>der Herzinfarkt</em> is “heart attack”, <em>die Ohnmacht</em> is “fainting”, <em>schläfrig</em> is “sleepy”. English uses one word for “when”; German has three (<em>als, wenn, wann</em>), and <em>wenn</em> also means “if”: <em>Wenn ein Patient nicht reagiert</em> is both “when” and “if a patient doesn't respond”. Mixing up <em>als</em> and <em>wenn</em> is the most common mistake when telling what happened."
      },
      {
        trap: "<em>Ansprechbar</em> does not mean “able to speak”: it means the patient <b>responds</b> when spoken to. A patient can be <em>wach</em> (awake) and not <em>ansprechbar</em>. <em>Die Ohnmacht</em> is fainting, but in everyday language it also means powerlessness (<em>Ohnmacht und Wut</em>); on the unit it is the first meaning. And <em>somnolent</em> is not just “tired”: it is a state in which the patient sleeps a lot but wakes up when called, to be charted and reported."
      },
      {
        tip: "Always ask, and chart, when it started: <em>Wann hat das angefangen?</em> If it could be a stroke, the time of onset is one of the first things the physician will want to know. If the patient doesn't know, ask whoever was there: <em>Wann haben Sie ihn zuletzt normal gesehen?</em>, your “last known well”."
      }
    ],
    grammar: {
      title: "als, wenn, bis, während, sobald",
      note: "In a time clause the conjugated verb goes <b>to the end</b>. <b>als</b>: a single event in the past. <b>wenn</b>: present, future, repetition. <b>wann</b>: the question.",
      table: {
        head: ["conjunction", "example", "use"],
        rows: [
          ["als", "Als ich ins Zimmer kam, war sie nicht ansprechbar.", "once, in the past"],
          ["wenn", "Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe.", "every time, a rule"],
          ["bis", "Ich bleibe bei der Patientin, bis das Team kommt.", "until"],
          ["während", "Während ich mit ihr sprach, wurde sie blass.", "at the same time"],
          ["sobald", "Sobald das Team da ist, berichte ich kurz.", "as soon as"]
        ]
      },
      examples: [
        { tr: "When I came into the room, Ms. Keller was not responding.", note: "als: a single event in the past" },
        { tr: "If a patient doesn't respond, I call for help right away.", note: "wenn: a rule that always applies" },
        { tr: "I'll stay with the patient until the team arrives.", note: "bis: the verb kommt at the end" },
        { tr: "While I was talking to her, she suddenly turned very pale.", note: "während: two things at the same time" },
        { tr: "When she stood up, everything went black.", note: "jemandem wird schwarz vor Augen: a common expression" },
        { tr: "As soon as the team is here, I'll briefly report what happened.", note: "sobald: right after" }
      ]
    },
    vocab: [
      "the emergency",
      "syncope (technical term)",
      "fainting (word for the patient)",
      "stroke, apoplexy (technical term)",
      "the stroke (word for the patient)",
      "myocardial infarction, MI (technical term)",
      "the heart attack (word for the patient)",
      "unconscious",
      "responsive when spoken to (nicht ansprechbar: not responding)",
      "somnolent (technical term)",
      "sleepy, drowsy (word for the patient)",
      "pale"
    ],
    dialogue: [
      "Ms. Marin, please come quickly! My father is talking so strangely.",
      "I'm coming right away. Mr. Brandt, can you hear me?",
      "When I gave him the water, the glass fell out of his hand.",
      "When did this start?",
      "About ten minutes ago, while he was eating.",
      "Mr. Brandt, can you raise both arms, please?",
      "His right arm stays down. And his mouth is drooping on one side.",
      "This could be a stroke. I'm pressing the emergency button now, and I'll stay with him until the team is here."
    ],
    culture: {
      title: "A German view: time in a stroke",
      text: "<p>Many German hospitals have a <i>Stroke Unit</i>, and the name is English in German too. Courses for staff and for the public often teach the <i>FAST</i> test you may know from home: <i>Face</i> (is the face uneven?), <i>Arms</i> (does one arm drift down?), <i>Speech</i> (is speech slurred?), <i>Time</i> (time matters: call right away and note the time). These are questions to recognize, not to treat.</p><p>In the dialogue the nurse has the patient raise both arms, asks when it started and calls the team: recognize, call, stay. What happens next is decided by the physician according to the facility's protocol.</p>"
    },
    exercises: [
      {
        q: "Match each technical term with the word the patient uses.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Herzinfarkt", "schläfrig"]
      },
      {
        q: "Fill in: “___ ich ins Zimmer kam, war sie nicht ansprechbar.”",
        opts: ["Als", "Wenn", "Wann"],
        why: "<b>Als</b>: a single event in the past. <i>Wenn</i> is for what repeats, or for the present and future; <i>wann</i> is the question."
      },
      {
        q: "Fill in: “Ich bleibe bei ihm, ___ das Team kommt.”",
        hint: "“until”",
        why: "<b>bis</b>: “until”. The verb of the subordinate clause, <i>kommt</i>, goes to the end."
      },
      {
        tr: "The Präteritum of kommen, all persons.",
        why: "<i>Kam, kamst, kam, kamen, kamt, kamen</i>: a strong verb, the vowel changes to <b>a</b>, like English “come, came”. The first and third person singular have no ending: <i>ich kam, sie kam</i>. This is the form used after <i>als</i> when telling a story."
      },
      {
        q: "Complete the sentence.",
        tr: "If a patient doesn't respond, I call for help right away.",
        why: "After <i>wenn</i> the verb <i>reagiert</i> goes to the end of the subordinate clause; the main clause starts with the verb: <i>rufe ich</i>."
      },
      {
        q: "Put the words in order.",
        tr: "When I came into the room, she wasn't responding.",
        why: "<i>Als ich ins Zimmer kam, war sie nicht ansprechbar.</i> In the subordinate clause <i>kam</i> goes to the end; after the comma the main clause starts with the verb <i>war</i>."
      },
      {
        q: "Which observations are signs to report right away?",
        opts: [
          "Der Patient reagiert nicht, wenn ich ihn anspreche.",
          "Die Patientin ist plötzlich ganz blass und schwitzt.",
          "Der Patient schläft nach dem Mittagessen ein bisschen.",
          "Ein Mundwinkel hängt plötzlich nach unten.",
          "Die Patientin liest im Bett die Zeitung."
        ],
        why: "A patient who doesn't respond and a <b>sudden</b> (<i>plötzlich</i>) change in color or in the face get reported right away. A nap after lunch and reading the paper do not."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["emergency", "fainting", "stroke", "syncope", "consciousness", "heart attack"]
      },
      {
        q: "Translate: “I'll stay with him until the team arrives.”",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt</i>: <i>bei</i> takes the dative, <i>ihm</i>; after <i>bis</i> the verb goes to the end. <i>bis das Team da ist</i> is fine too."
      },
      {
        tr: "When I came into the room, Ms. Keller was not responding. I called for help right away.",
        why: "In <i>ansprechbar</i> the <b>sp</b> is [ʃp] and the <b>ch</b> after <b>e</b> is [ç]; in <i>Zimmer</i> the <b>z</b> is [ts]; in <i>sofort</i> the initial <b>s</b> before a vowel is voiced [z]."
      },
      {
        tr: "When did this start?",
        why: "In <i>Wann</i> the <b>w</b> sounds like English [v]; in <i>angefangen</i> the prefix <b>an</b> and the <b>ge</b> are pronounced separately, and the final <b>-ngen</b> is [ŋən], as in “singing”, with no hard <b>g</b>."
      }
    ]
  },
  "lesson:pfl-u04-l3": {
    theme: "Calling for help",
    title: "Getting help",
    objectives: [
      "call for help on the unit with the alarm and in a home setting with 112",
      "answer the dispatcher's questions: where, what happened",
      "give short instructions with the imperative, Sie with patients and family, du with coworkers",
      "tell Reanimation (CPR) apart from Intensivstation (the ICU)"
    ],
    theory: [
      {
        h: "Whom to call, and how",
        p: "In the hospital you call for help from inside: the <em>Notrufknopf</em> in the room and the bathroom, the unit alarm, the facility's internal emergency number. Outside the hospital, at a patient's home or in a nursing home with no physician on site, you dial <strong>112</strong>: in Germany it is the number for EMS and the fire department (<em>Rettungsdienst und Feuerwehr</em>), free from any phone. <strong>110</strong> is the police. The call is answered by the <em>Leitstelle</em>, the dispatch center, which asks its questions in the order it needs: let the dispatcher lead."
      },
      {
        h: "The imperative",
        p: "With <strong>Sie</strong> the imperative is the infinitive followed by <em>Sie</em>: <em>Rufen Sie bitte die 112 an! Bleiben Sie bitte bei Ihrem Mann!</em> With <strong>du</strong>, which many units use among coworkers, it is the verb stem, often without <b>-e</b>: <em>Hol bitte schnell Hilfe! Lös bitte den Alarm aus!</em> Verbs that change <b>e</b> to <b>i</b> in the present do so here too: <em>du gibst</em> → <em>Gib mir bitte das Telefon!</em> The separable prefix goes to the end: <em>Rufen Sie ... an</em>, <em>Lös ... aus</em>. <em>Bitte</em> softens it, but in an emergency the sentence stays short."
      },
      {
        contrast: "In the US one number, 911, covers police, fire and ambulance. Germany splits them: <strong>112</strong> for EMS and fire, <strong>110</strong> for the police. Dialing 911 in Germany does not reach anyone. English imperatives have no subject: “Call 911!”, “Stay with him!”. The polite German imperative needs <em>Sie</em> right after the verb, every time: <em>Rufen Sie die 112 an</em>, not “Rufen die 112 an”. On the unit, the American “call a code” or “code blue” has no single German equivalent: you <em>den Alarm auslösen</em> or call the <em>Reanimationsteam</em>. <em>Die Reanimation</em> is CPR, the action, and the patient's word is <em>die Wiederbelebung</em>; the ICU is the <em>Intensivstation</em>."
      },
      {
        trap: "<em>Die Notaufnahme</em> is the ER, <em>der Rettungswagen</em> is the ambulance, and <em>der Notarzt</em> is an emergency physician who comes out to the scene with EMS, something most American nurses have never seen. None of these is <em>die Ambulanz</em>, which is the outpatient clinic. Floors are counted differently too: the ground floor is <em>das Erdgeschoss</em>, so <em>im zweiten Stock</em> is what Americans call the third floor. And don't hang up on the dispatcher: <em>Bleiben Sie am Telefon</em> means stay on the line until the <em>Leitstelle</em> ends the call."
      },
      {
        tip: "On your first day on a new unit, ask two things: where the emergency button is and what the facility's internal emergency number is. They change from hospital to hospital, and in an emergency there is no time to look for them."
      }
    ],
    grammar: {
      title: "The imperative to call for help",
      note: "With <b>Sie</b>: infinitive + Sie. With <b>du</b>: the verb stem, often without -e; <b>e</b> becomes <b>i</b> where it also changes in the present. The separable prefix goes <b>to the end</b>.",
      table: {
        head: ["to whom", "example", "form"],
        rows: [
          ["patient, family member", "Rufen Sie bitte die 112 an!", "rufen + Sie, an at the end"],
          ["patient, family member", "Bleiben Sie bitte bei Ihrem Mann!", "bleiben + Sie"],
          ["coworker", "Hol bitte schnell Hilfe!", "holen → hol"],
          ["coworker", "Lös bitte den Alarm aus!", "auslösen → lös ... aus"],
          ["coworker", "Gib mir bitte das Telefon!", "du gibst → gib"]
        ]
      },
      examples: [
        { tr: "Please call 112!", note: "separable: an at the end" },
        { tr: "Go get help, quick!", note: "to a coworker, with du" },
        { tr: "Please stay with your husband!", note: "to a family member, with Sie" },
        { tr: "Set off the alarm, please!", note: "auslösen: aus at the end" },
        { tr: "Give me the phone, please!", note: "geben: e becomes i" },
        { tr: "Stay on the line and don't hang up!", note: "what the dispatcher often says" }
      ]
    },
    vocab: [
      "the emergency call (also: the emergency number)",
      "the emergency number",
      "the emergency button, the call button",
      "the alarm",
      "to set off, to trigger (an alarm)",
      "the emergency dispatch center",
      "the emergency medical services, EMS",
      "the ambulance",
      "the resuscitation team, the code team",
      "cardiopulmonary resuscitation, CPR (technical term)",
      "resuscitation (word for the patient)",
      "to get, to fetch (Hilfe holen: to get help)"
    ],
    dialogue: [
      "Ms. Wolf, I'm calling 112 now. Please stay with your husband.",
      "Emergency, fire and EMS. Where is the emergency?",
      "Lindenstraße 12, on the third floor. I'm a nurse with the home care service.",
      "What happened?",
      "A patient, 78 years old, has suddenly stopped responding.",
      "Please stay on the line. The ambulance is on its way.",
      "OK. Ms. Wolf, please open the front door for the paramedics.",
      "Yes, I'm going right now."
    ],
    culture: {
      title: "A German view: the dispatcher's questions",
      text: "<p>First aid courses in Germany often teach the “W” questions of an emergency call: <i>Wo</i> (where), <i>Was</i> (what happened), <i>Wie viele</i> (how many people), <i>Welche Verletzungen</i> (which injuries or symptoms) and <i>Warten auf Rückfragen</i> (wait for questions). The last one matters most: the dispatcher asks the questions and ends the call.</p><p>In home care there is no unit team a few steps away, so it pays to know your opening line by heart: <i>Ich bin Pflegefachkraft vom ambulanten Pflegedienst</i>, and to keep the patient's exact address at hand.</p>"
    },
    exercises: [
      {
        tr: "The imperative of rufen.",
        why: "With <i>du</i>: <i>ruf</i>; with <i>ihr</i>: <i>ruft</i>; with <i>Sie</i>: <i>rufen Sie</i>; and the form <i>rufen wir</i>, “let's call”. The imperative has no first person singular."
      },
      {
        q: "To a coworker, with du: “Go get help, quick!”",
        opts: ["Holst bitte schnell Hilfe!", "Hol bitte schnell Hilfe!", "Holen bitte schnell Hilfe!"],
        why: "The <i>du</i> imperative uses the stem: <b>Hol</b>. <i>Holst</i> is the present tense, and <i>Holen</i> without <i>Sie</i> is not a polite imperative."
      },
      {
        q: "Fill in, to the patient's wife: “___ Sie bitte bei Ihrem Mann!”",
        hint: "bleiben, imperative with Sie",
        why: "<b>Bleiben</b>: the polite imperative is the infinitive followed by <i>Sie</i>."
      },
      {
        q: "Put the words in order.",
        tr: "Please call 112!",
        why: "<i>Rufen Sie bitte die 112 an!</i> The verb opens the sentence, then <i>Sie</i>, and the separable prefix <i>an</i> goes to the end. The number is read <i>eins-eins-zwei</i>."
      },
      {
        q: "Complete, to a coworker with du.",
        tr: "Set off the alarm, quick!",
        why: "<i>Lös bitte schnell den Alarm aus!</i> <i>Auslösen</i> is separable: the stem <i>lös</i> (or <i>löse</i>) first, <i>aus</i> at the end."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["EMS and fire department", "police", "CPR (Wiederbelebung)", "the dispatch center"]
      },
      {
        q: "Which imperatives are correct?",
        opts: [
          "Rufen Sie bitte den Arzt!",
          "Ruf bitte den Arzt!",
          "Rufe Sie bitte den Arzt!",
          "Gib mir bitte das Telefon!",
          "Gibst mir bitte das Telefon!"
        ],
        why: "With <i>Sie</i> you need the infinitive: <i>Rufen Sie</i>, not <i>Rufe Sie</i>. With <i>du</i> you use the stem without <i>-st</i>: <i>Ruf</i>, <i>Gib</i>."
      },
      {
        q: "Translate what the dispatcher says: “Stay on the line!”",
        why: "<i>Bleiben Sie am Telefon!</i> Infinitive plus <i>Sie</i>; <i>am</i> is <i>an dem</i>. It is fine with <i>bitte</i> too."
      },
      {
        q: "You call 112 from a patient's home.",
        setting: "You are the home care nurse; the dispatch center answers.",
        lines: [
          { tr: "Emergency, fire and EMS. Where is the emergency?" },
          { tr: "Answer with the address: Lindenstraße 12, zweiter Stock.", answerTr: "Lindenstraße 12, on the third floor." },
          { tr: "What happened?" },
          { tr: "Answer that a patient has suddenly stopped responding.", answerTr: "A patient has suddenly stopped responding." },
          { tr: "Please stay on the line." },
          { tr: "Answer that you'll stay on the line.", answerTr: "Yes, I'll stay on the line." }
        ]
      },
      {
        tr: "Ms. Wolf, I'm calling 112 now. Please stay with your husband, and then open the front door.",
        why: "112 is read <i>eins-eins-zwei</i>, digit by digit; in <i>Haustür</i> the <b>au</b> is [aʊ], as in “house”, and the <b>ü</b> is long; in <i>öffnen</i> the <b>ö</b> is short and rounded."
      },
      {
        tr: "Go get help, quick!",
        why: "In <i>Hol</i> the <b>o</b> is long; in <i>schnell</i> the <b>sch</b> is [ʃ] and the <b>e</b> is short; in <i>Hilfe</i> the initial <b>h</b> is pronounced, as in English."
      }
    ]
  },
  "lesson:pfl-u04-l4": {
    theme: "The fall",
    title: "The fall",
    objectives: [
      "talk to a patient who has fallen and call for help without leaving them alone",
      "report a fall to the physician with the Perfekt and the Präteritum",
      "tell Fachsprache from Laiensprache for fracture and hematoma",
      "document the fall in the fall report, keeping what you saw apart from what the patient says"
    ],
    theory: [
      {
        h: "After a fall",
        p: "A fall is always handled the same way: you talk to the patient, call for help, report and document. <em>Was ist passiert? Bleiben Sie bitte liegen, ich hole Hilfe.</em> Then you ask what the patient can tell you (<em>Haben Sie sich den Kopf angeschlagen? Wo tut es weh?</em>) and notify the physician. Every fall, even without visible injury, goes into the <em>Sturzprotokoll</em>, according to the facility's protocol."
      },
      {
        h: "Perfekt and Präteritum when telling what happened",
        p: "When you tell something out loud you mostly use the <strong>Perfekt</strong>: <em>Frau Keller ist im Bad gestürzt. Ich habe sie auf dem Boden gefunden.</em> With <em>sein</em>, <em>haben</em> and the modals you usually use the <strong>Präteritum</strong>, even in speech: <em>Sie war wach und hatte Schmerzen. Ich wollte allein zur Toilette gehen.</em> The auxiliary: intransitive verbs of movement and change of state usually take <em>sein</em> (<em>ist gestürzt, ist ausgerutscht, ist gefallen</em>), the others <em>haben</em>; it is a tendency, so learn the auxiliary with the verb. Verbs in <em>-ieren</em> take no <em>ge-</em>: <em>informiert</em>, <em>dokumentiert</em>; separable verbs put it after the prefix: <em>ausgerutscht</em>."
      },
      {
        contrast: "English tells a fall in the simple past: “She fell in the bathroom. I found her on the floor.” Spoken German uses the <strong>Perfekt</strong> for the same report: <em>Sie ist im Bad gestürzt. Ich habe sie auf dem Boden gefunden.</em> It looks like the English present perfect, but it is just the everyday past. And the auxiliary is the trap: English always says “has”, German says <em>ist gestürzt</em>, <em>ist gefallen</em>, <em>ist ausgerutscht</em>, because falling is movement. “Sie hat gestürzt” is wrong. <em>Fraktur</em> and <em>Hämatom</em> are close to your chart words “fracture” and “hematoma”; with the patient you say <em>der Knochenbruch</em> (or simply <em>Ist das Bein gebrochen?</em>, “is the leg broken?”) and <em>der Bluterguss</em>, the bruise."
      },
      {
        trap: "English “fall” is close to German <em>fallen</em>, and that is the trap: <em>fallen</em> on its own is mostly for objects (<em>Das Glas ist gefallen</em>). For a person, the unit and the chart say <em>stürzen</em> (<em>der Sturz</em>, the fall), and everyday speech says <em>hinfallen</em> (<em>Ich bin hingefallen</em>). Watch <em>gefallen</em>: it is also the verb “to please”, with <em>haben</em> (<em>Es hat mir gefallen</em>, “I liked it”). <em>Sie ist gefallen</em> and <em>Es hat ihr gefallen</em> are two different sentences. Last, <em>die Platzwunde</em> is a laceration from a blow, from <em>platzen</em>, to burst."
      },
      {
        tip: "In the report, keep what you saw apart from what the patient told you: <em>Patientin um 3:00 Uhr auf dem Boden im Bad aufgefunden</em> is an observation; <em>laut Patientin ausgerutscht</em> is her account. Whoever reads it later has to be able to tell the two apart."
      }
    ],
    grammar: {
      title: "Reporting a fall",
      note: "When speaking, mostly <b>Perfekt</b>; with <b>sein</b>, <b>haben</b> and the modals usually <b>Präteritum</b>. Verbs in <b>-ieren</b> take no <b>ge-</b>.",
      table: {
        head: ["verb", "example", "note"],
        rows: [
          ["stürzen", "Sie ist im Bad gestürzt.", "Perfekt with sein"],
          ["finden", "Ich habe sie auf dem Boden gefunden.", "Perfekt with haben, strong participle"],
          ["ausrutschen", "Ich bin ausgerutscht.", "separable: ge- after aus"],
          ["informieren", "Wir haben die Ärztin informiert.", "-ieren: no ge-"],
          ["sein, haben", "Sie war wach und hatte Schmerzen.", "Präteritum in speech too"],
          ["wollen", "Ich wollte allein zur Toilette gehen.", "modal in the Präteritum"]
        ]
      },
      examples: [
        { tr: "Ms. Keller fell in the bathroom last night.", note: "stürzen: Perfekt with sein" },
        { tr: "I found her on the floor at three.", note: "finden: Perfekt with haben" },
        { tr: "She was awake and had pain in her left hip.", note: "sein and haben in the Präteritum" },
        { tr: "I wanted to go to the bathroom by myself.", note: "modal in the Präteritum" },
        { tr: "I slipped on the wet floor.", note: "ausrutschen: separable, with sein" },
        { tr: "We notified the doctor right away.", note: "informieren: no ge-" }
      ]
    },
    vocab: [
      "the fall report",
      "to fall (word used on the unit)",
      "to slip",
      "to fall down (everyday word)",
      "the fracture (technical term)",
      "the broken bone (word for the patient)",
      "the hematoma (technical term)",
      "the bruise (word for the patient)",
      "the hip",
      "the laceration",
      "the fall risk",
      "to report"
    ],
    dialogue: [
      "Ms. Keller! What happened? Please stay lying down, I'm getting help.",
      "I wanted to go to the bathroom by myself. Then I slipped.",
      "Did you hit your head?",
      "No, but my hip hurts.",
      "Dr. Weber, Ms. Keller fell in the bathroom at three. I found her on the floor.",
      "Was she awake and responsive?",
      "Yes, she was awake and oriented. She has pain in her left hip and a small hematoma on her elbow.",
      "OK, I'm coming. Please document the fall in the fall report."
    ],
    culture: {
      title: "A German view: preventing and documenting falls",
      text: "<p>Germany also has a DNQP <i>Expertenstandard</i> for falls, focused on prevention (<i>Sturzprophylaxe</i>): it asks staff to identify who is at risk, adapt the environment and analyze every fall that happens. That is why many facilities use a dedicated form, called <i>Sturzprotokoll</i> or <i>Sturzereignisprotokoll</i>: time, place, what was found, what the patient said, who was notified.</p><p>The form is not there to find someone to blame: it is there to understand why the person fell and to prevent the next fall. The exact form is up to the facility.</p>"
    },
    exercises: [
      {
        tr: "The Perfekt of fallen, all persons.",
        why: "<i>Bin gefallen, bist gefallen, ist gefallen, sind gefallen, seid gefallen, sind gefallen</i>: a verb of movement, auxiliary <i>sein</i>. For a person on the unit you more often say <i>gestürzt</i> or <i>hingefallen</i>."
      },
      {
        q: "To the patient, in everyday words: “You have a bruise on your arm.”",
        opts: [
          "Sie haben ein Hämatom am Arm.",
          "Sie haben einen Bluterguss am Arm.",
          "Sie haben einen Hämatom am Arm."
        ],
        why: "With the patient you use the Laiensprache: <b>einen Bluterguss</b>, masculine. The first sentence is correct but belongs in the chart; in the third the article is wrong, because <i>Hämatom</i> is neuter."
      },
      {
        q: "Fill in: “Ich bin auf dem nassen Boden ___.”",
        hint: "participle of ausrutschen",
        why: "<b>ausgerutscht</b>: a separable verb, the <i>ge-</i> goes after the prefix <i>aus</i>. Auxiliary <i>sein</i>, like <i>stürzen</i>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["the fracture", "the hematoma", "the laceration", "the fall risk"]
      },
      {
        q: "Complete the sentence in the Präteritum.",
        tr: "She was awake and had pain in her hip.",
        why: "<i>Sie war wach und hatte Schmerzen in der Hüfte</i>: with <i>sein</i> and <i>haben</i> the Präteritum is the normal form, even in speech."
      },
      {
        q: "Put the words in order.",
        tr: "I found her on the floor at three.",
        why: "<i>Ich habe sie um drei Uhr auf dem Boden gefunden.</i> <i>Habe</i> in second position, the participle <i>gefunden</i> at the end; time (<i>um drei Uhr</i>) before place, the reverse of English “on the floor at three”."
      },
      {
        q: "Which Perfekt sentences are correct?",
        opts: [
          "Sie ist im Bad gestürzt.",
          "Sie hat im Bad gestürzt.",
          "Ich habe die Ärztin informiert.",
          "Ich habe die Ärztin geinformiert.",
          "Er ist auf dem Boden ausgerutscht."
        ],
        why: "<i>stürzen</i> and <i>ausrutschen</i> take <i>sein</i> here. <i>informieren</i> ends in <i>-ieren</i> and takes no <i>ge-</i>: <i>informiert</i>."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["fall report", "fracture", "broken bone", "hematoma", "bruise", "hip"]
      },
      {
        q: "Translate, to the patient who fell: “Did you hit your head?”",
        why: "<i>Haben Sie sich den Kopf angeschlagen?</i> The reflexive <i>sich</i> is dative, the head is the object: literally “did you knock yourself the head”. <i>gestoßen</i> is fine too."
      },
      {
        tr: "Ms. Keller fell in the bathroom at three. She was awake and had pain in her left hip.",
        why: "In <i>gestürzt</i> the <b>ü</b> is short and the whole <b>rzt</b> cluster is pronounced; in <i>Hüfte</i> the <b>ü</b> is short; in <i>linken</i> the <b>n</b> before <b>k</b> is [ŋ], as in “link”."
      },
      {
        tr: "Did you hit your head?",
        why: "In <i>Kopf</i> you hear both the <b>p</b> and the <b>f</b>; in <i>angeschlagen</i> the <b>sch</b> is [ʃ] and the <b>a</b> in <i>schla</i> is long."
      }
    ]
  },
  "lesson:pfl-u04-test": {
    theme: "Review",
    title: "Test: Pain and emergencies",
    objectives: [
      "check adjective endings, time clauses, the Perfekt when telling what happened and the Fachsprache / Laiensprache pairs for pain and emergencies"
    ],
    theory: [
      {
        p: "Eleven questions on the whole unit. You pass with 70%. The clinical content is for teaching only: on the unit, the facility's protocol and the physician's orders always apply."
      }
    ],
    exercises: [
      {
        q: "Fill in: “Es ist ein ___ Schmerz.”",
        opts: ["stechende", "stechender", "stechenden"],
        why: "Masculine nominative after <i>ein</i>: <b>stechender</b>. The article <i>ein</i> doesn't show the gender, so the adjective shows it with <b>-er</b>."
      },
      {
        q: "Fill in: “Ich bleibe bei Ihnen, ___ die Ärztin kommt.”",
        hint: "“until”",
        why: "<b>bis</b>: “until”. The verb <i>kommt</i> goes to the end of the subordinate clause."
      },
      {
        q: "Fill in: “Frau Keller ist heute Nacht im Bad ___.”",
        hint: "participle of stürzen",
        why: "<b>gestürzt</b>, with the auxiliary <i>ist</i>: <i>stürzen</i> is a verb of movement."
      },
      {
        tr: "The Perfekt of anrufen, all persons.",
        why: "<i>Habe angerufen, hast angerufen, hat angerufen, haben angerufen, habt angerufen, haben angerufen</i>: separable, the <i>ge-</i> goes between <i>an</i> and <i>rufen</i>; auxiliary <i>haben</i>."
      },
      {
        q: "Match each technical term with the word the patient uses.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Knochenbruch", "das Schmerzmittel"]
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Als ich ins Zimmer kam, lag sie auf dem Boden.",
          "Als ich ins Zimmer kam, sie lag auf dem Boden.",
          "Haben Sie starke Schmerzen?",
          "Ich habe die Ärztin sofort informiert.",
          "Wenn ich gestern ins Zimmer kam, war sie wach."
        ],
        why: "After the subordinate clause the main clause starts with the verb: <i>lag sie</i>, unlike English “she was lying”. For a single event in the past you use <i>als</i>, not <i>wenn</i>. <i>informiert</i> takes no <i>ge-</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "When I came into the room, Ms. Keller was lying on the floor.",
        why: "<i>Als ich ins Zimmer kam, lag Frau Keller auf dem Boden.</i> <i>Als</i> for a single event in the past; <i>lag</i>, the Präteritum of <i>liegen</i>, opens the main clause."
      },
      {
        q: "Put the words in order.",
        tr: "I'll stay with him until the team arrives.",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt.</i> After <i>bis</i> the verb <i>kommt</i> goes to the end."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["emergency", "pain scale", "fall report", "stroke", "dispatch center", "hematoma"]
      },
      {
        tr: "When I came into the room, Ms. Keller was not responding. I set off the alarm right away and stayed with her until the team arrived.",
        why: "In <i>ausgelöst</i> the <b>ö</b> is long; in <i>geblieben</i> the <b>ie</b> is a long <b>i</b>; <i>Team</i> is said as in English, [tiːm]."
      },
      {
        tr: "I'm documenting the fall in the fall report.",
        why: "In <i>dokumentiere</i> the stress falls on <b>tie</b>, with a long <b>ie</b>; in <i>Sturzprotokoll</i> the main stress is on <b>Sturz</b>, and in <i>Protokoll</i> it falls on the last syllable, unlike English “protocol”."
      }
    ]
  }
});
