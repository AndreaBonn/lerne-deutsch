/* ============================================================
   Learner-language text (en) for data/core/pfl-01.js, unit pfl-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:pfl-u01": {
    title: "Admission and medical history",
    grammarNote: "Sie with patients · the verb in second position · the dative with wehtun, helfen, fehlen and mir ist übel · the Perfekt for the medical history · compounds and Fachsprache / Laiensprache pairs"
  },
  "lesson:pfl-u01-l1": {
    theme: "On the unit",
    title: "Hello, I'm your nurse",
    objectives: [
      "introduce yourself to a patient with first name, last name and role",
      "check the patient's identity (name, date of birth, ID band)",
      "always use Sie with adult patients and family members",
      "keep the conjugated verb in second position even when the sentence starts with jetzt, gleich, heute"
    ],
    theory: [
      {
        h: "Introducing yourself on the unit",
        p: "On a German hospital unit you introduce yourself with your <strong>first and last name</strong> and your role: <em>Guten Tag, mein Name ist Elena Marin. Ich bin heute Ihre Pflegefachkraft.</em> The patient will call you <em>Frau Marin</em> or <em>Herr ...</em>. Right after that you check identity: <em>Wie heißen Sie, bitte? Wie ist Ihr Geburtsdatum?</em> and you check the ID band, <em>das Patientenarmband</em>. The question is open on purpose: you do not ask “Sie sind Herr Brandt, oder?”, because a confused patient says yes to everything."
      },
      {
        h: "The verb in second position",
        p: "In a main clause the conjugated verb is <strong>in second place</strong>. If you start with a time adverb, the subject moves <strong>after</strong> the verb: <em>Jetzt bringe ich Sie auf Ihr Zimmer. Gleich mache ich mit Ihnen das Aufnahmegespräch.</em> The same goes for questions with a question word (<em>Wie heißen Sie?</em>); in a yes/no question the verb comes first (<em>Haben Sie noch Fragen?</em>). With a modal, the modal is in second place and the infinitive goes at the end: <em>Ich möchte Ihnen kurz ein paar Fragen stellen.</em> In a yes/no question the modal moves to first place and the infinitive still goes at the end: <em>Darf ich Ihnen kurz ein paar Fragen stellen?</em>"
      },
      {
        contrast: "English has a single <em>you</em>, and in American hospitals first names are common: patients are often called by their first name, and your badge may say just “Elena, RN”. German splits <em>you</em> in two. With adult patients and family members you <strong>always use Sie</strong> and their last name (<em>Herr Brandt</em>, never just “Klaus”); <em>du</em> is for coworkers, if your unit uses it. Sie also changes the possessive and the dative: <em>Ihre Pflegefachkraft, Ihr Zimmer, Kann ich Ihnen helfen?</em>, all capitalized. The word order is the other trap for English speakers. English keeps subject before verb even after an adverb (“Now I'll take you to your room”), so “Jetzt ich bringe Sie” comes out naturally, and it is wrong. German puts the verb second: <em>Jetzt bringe ich Sie</em>."
      },
      {
        trap: "<em>Krankenschwester</em> is still used in everyday speech, but it is no longer the name of the profession: since 2020 the title is <em>Pflegefachfrau</em> / <em>Pflegefachmann</em>, and <em>Pflegefachkraft</em> is the gender-neutral term. To “admit” a patient is <em>stationär aufnehmen</em> (<em>Wir nehmen Sie heute stationär auf</em>), and <em>die Aufnahme</em> is both the admission and the admissions office. Two false friends: <em>die Station</em> is the hospital unit or ward (“auf Station”), not the nurses' station; and <em>die Ambulanz</em> is the hospital outpatient clinic, not an ambulance, which is <em>der Krankenwagen</em> or <em>der Rettungswagen</em>."
      },
      {
        tip: "Before you leave the room, always show the call button: <em>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel.</em> You will say this dozens of times a day: learning it by heart, with the verb at the end after <em>wenn</em>, frees your mind for everything else."
      }
    ],
    grammar: {
      title: "Where the verb goes",
      note: "In a main clause the conjugated verb is in <b>second position</b>, whatever comes first. In a yes/no question it is <b>first</b>. With patients always <b>Sie</b>, <b>Ihr</b>, <b>Ihnen</b>.",
      table: {
        head: ["sentence type", "example", "verb position"],
        rows: [
          ["W- question", "Wie heißen Sie, bitte?", "2nd, the subject follows"],
          ["yes/no question", "Haben Sie noch Fragen?", "1st"],
          ["adverb first", "Jetzt bringe ich Sie auf Ihr Zimmer.", "2nd, the subject after the verb"],
          ["with a modal", "Darf ich Ihnen kurz ein paar Fragen stellen?", "modal 1st or 2nd, infinitive at the end"]
        ]
      },
      examples: [
        { tr: "Hello, my name is Elena Marin. I'm your nurse today.", note: "first name, last name and role: the standard introduction" },
        { tr: "What is your name, please?", note: "open question to check identity" },
        { tr: "What is your date of birth?", note: "second identity check" },
        { tr: "Now I'll take you to your room.", note: "jetzt first: the subject ich goes after the verb" },
        { tr: "Do you have any more questions?", note: "yes/no question: verb in first position" },
        { tr: "May I ask you a few quick questions?", note: "modal dürfen, infinitive stellen at the end" }
      ]
    },
    vocab: [
      "the unit, the ward (auf Station: on the unit)",
      "the nurse (gender-neutral term)",
      "the nurse (job title, female)",
      "the nurse (job title, male)",
      "the patient (female: die Patientin)",
      "the admission, the admissions office",
      "the admission interview",
      "the room",
      "the call button, the call light",
      "the patient ID band",
      "to admit (stationär aufnehmen: to admit as an inpatient)",
      "to introduce oneself"
    ],
    dialogue: [
      "Hello, Mr. Brandt. My name is Elena Marin, I'm your nurse today.",
      "Hello, Ms. Marin.",
      "May I see your ID band for a moment? What is your date of birth, please?",
      "I was born on March 12, 1950.",
      "Thank you. Now I'll take you to your room. This is your bed, by the window.",
      "Good, thank you.",
      "If you need help, please press the call button. In a moment we'll do your admission interview together.",
      "All right."
    ],
    culture: {
      title: "A German view: what the nurse is called",
      text: "<p>Until 2003 the profession was called <i>Krankenschwester</i> or <i>Krankenpfleger</i>; from 2004 <i>Gesundheits- und Krankenpflegerin</i>. With the reform that took effect in 2020, training became generalist and the title is <i>Pflegefachfrau</i> or <i>Pflegefachmann</i>. All these names coexist on the units, and many older patients will still call you <i>Schwester</i>: it is not a mistake to correct, but introduce yourself with your last name.</p><p>There is no exact match for the American RN: German nursing training is usually a three-year vocational program rather than a college degree, although degree programs exist. Next to the nurse you will work with <i>Pflegehilfskraft</i> or <i>Pflegeassistenz</i>, with shorter training (roughly comparable to a nursing assistant), and in elder care with the <i>Altenpflegerin</i>. If you trained abroad, you get the German title only after recognition, the <i>Anerkennung</i>: until then job ads often say <i>Pflegefachkraft in Anerkennung</i>.</p>"
    },
    exercises: [
      {
        q: "You walk into a new patient's room. How do you introduce yourself?",
        opts: [
          "Hallo, ich bin Elena, deine Krankenschwester.",
          "Guten Tag, ich bin Frau Marin, Ihre Pflegefachkraft.",
          "Guten Tag, ich bin Elena, deine Pflegefachkraft."
        ],
        why: "With patients you use <b>Sie</b>, so <i>Ihre</i>, capitalized, and you introduce yourself with your last name. <i>Krankenschwester</i> is no longer the job title."
      },
      {
        q: "Which sentences have the verb in the right place?",
        opts: [
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Jetzt ich bringe Sie auf Ihr Zimmer.",
          "Haben Sie noch Fragen?",
          "Gleich mache ich mit Ihnen das Aufnahmegespräch.",
          "Gleich ich mache mit Ihnen das Aufnahmegespräch."
        ],
        why: "After <i>jetzt</i> and <i>gleich</i> at the start, the verb stays in second position and the subject <i>ich</i> moves after it: <i>bringe ich</i>, <i>mache ich</i>. In a yes/no question the verb opens the sentence."
      },
      {
        q: "Fill in: “Guten Tag, ich bin heute ___ Pflegefachkraft.”",
        hint: "possessive of Sie",
        why: "<b>Ihre</b>, capitalized: the possessive of formal Sie. <i>Pflegefachkraft</i> is feminine, so <i>Ihre</i>, not <i>Ihr</i>."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["unit, ward", "room", "call button", "admission interview", "patient ID band", "nurse (gender-neutral)"]
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["nurse (female)", "nurse (male)", "unit, ward", "call button"]
      },
      {
        q: "Put the words in order.",
        tr: "Now I'll take you to your room.",
        why: "<i>Jetzt bringe ich Sie auf Ihr Zimmer.</i> If you start with <i>jetzt</i>, the verb <i>bringe</i> comes right after it, then the subject <i>ich</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "If you need help, please press the call button.",
        why: "<i>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel</i>: after <i>wenn</i> the verb <i>brauchen</i> goes to the end, and the main clause starts with the verb <i>drücken</i>."
      },
      {
        q: "Translate: “May I ask you a few questions?”",
        why: "<i>Darf ich Ihnen ein paar Fragen stellen</i>: <i>Fragen stellen</i> is “to ask questions”, and the person you ask goes in the dative, <i>Ihnen</i>. <i>Darf ich</i> is more polite than <i>Kann ich</i>, but both are fine."
      },
      {
        q: "A patient arrives on the unit.",
        setting: "You are the nurse on duty and you are admitting Mr. Brandt.",
        lines: [
          { tr: "Hello. My name is Brandt, I'm here to be admitted." },
          { tr: "Answer: greet the patient and introduce yourself.", answerTr: "Hello, Mr. Brandt. I'm Ms. Marin, your nurse." },
          { tr: "Where is my room?" },
          { tr: "Answer that you'll take him to his room now.", answerTr: "Now I'll take you to your room." },
          { tr: "And what if I need help during the night?" },
          { tr: "Answer that then he should press the call button.", answerTr: "Then please press the call button." }
        ]
      },
      {
        tr: "Hello, my name is Elena Marin. I'm your nurse today, and now I'll take you to your room.",
        why: "In <i>Pflegefachkraft</i> both letters of <b>pf</b> are pronounced, and <b>ch</b> after <b>a</b> is [x], a sound English does not have; in <i>heute</i> the <b>eu</b> sounds like the “oy” in “boy”; in <i>Zimmer</i> the <b>z</b> is [ts], as in “cats”."
      },
      {
        tr: "May I ask you a few quick questions?",
        why: "In <i>Darf</i> the <b>r</b> after the vowel is usually vocalized and barely there; in <i>Ihnen</i> the <b>h</b> is silent and makes the <b>i</b> long; in <i>stellen</i> the initial <b>st</b> is [ʃt], like “sht”."
      }
    ]
  },
  "lesson:pfl-u01-l2": {
    theme: "Symptoms",
    title: "Where does it hurt?",
    objectives: [
      "ask where and since when the patient has pain",
      "use the dative with wehtun, helfen, fehlen and with mir ist übel, mir ist schwindelig",
      "recognize the most common symptoms said in everyday words",
      "respond to a patient who says they don't feel well"
    ],
    theory: [
      {
        h: "The person who feels sick goes in the dative",
        p: "In German many symptoms are expressed with the person in the <strong>dative</strong>: <em>Mir tut der Bauch weh</em> (my stomach hurts), <em>Mir ist übel</em> (I feel nauseous), <em>Mir ist schwindelig</em> (I feel dizzy). The grammatical subject of <em>wehtun</em> is the body part: <em>der Bauch tut weh</em>, <em>die Beine tun weh</em>. With a patient the question always uses the formal dative: <em>Wo tut es Ihnen weh? Ist Ihnen übel?</em>"
      },
      {
        h: "helfen and fehlen",
        p: "<strong>helfen</strong> (to help) and <strong>fehlen</strong> (to be missing) also take the dative: <em>Kann ich Ihnen helfen?</em>, <em>Was fehlt Ihnen?</em> The second is the classic way to ask “what seems to be the problem?”. The dative pronouns to know by heart: <em>mir, dir, ihm, ihr, uns, euch, ihnen</em> and formal <em>Ihnen</em>."
      },
      {
        contrast: "English puts the sick person in the subject slot: <em>I feel sick, I'm dizzy, my head hurts</em>. German moves that person into the dative: <em>Mir ist übel</em>, literally “to me is sick”. Translating word for word gives <em>Ich bin übel</em>, which does not mean “I am sick” at all; to a German ear it sounds like “I am nasty”. Likewise, say <em>Mir ist schwindelig</em>: <em>Ich bin schwindelig</em> is heard in casual speech, but it is not the standard form. English “Can I help you?” takes a direct object, but <em>helfen</em> takes the dative: <em>Kann ich Ihnen helfen?</em>, not “Kann ich Sie helfen?”. One more difference: English says <em>a headache</em>, singular; German patients almost always use the plural: <em>Ich habe Kopfschmerzen</em>."
      },
      {
        trap: "<em>Wo tut es Sie weh?</em> is wrong: with <em>wehtun</em> the person is in the dative, <em>Ihnen</em>. <em>Mir ist schlecht</em> can mean nausea, like <em>Mir ist übel</em>, but also feeling unwell in general, so ask what exactly the patient feels. If the patient says it, ask: <em>Ist Ihnen übel? Müssen Sie erbrechen?</em> And English <em>sick</em> is not one German word: “I'm sick” in the sense of “I'm ill” is <em>Ich bin krank</em>; “I feel sick to my stomach” is <em>Mir ist übel</em>. Last, <em>der Schwindel</em> is dizziness, but it also means “scam”; on the unit it is always the first meaning."
      },
      {
        tip: "Have the patient point to the spot: <em>Können Sie es mir zeigen?</em> It is faster and more precise than any description, and it works even when the patient uses different words from yours. Then ask since when: <em>Seit wann?</em>"
      }
    ],
    grammar: {
      title: "The dative of symptoms",
      note: "The person who feels sick goes in the <b>dative</b>: <b>mir</b> tut ... weh, <b>mir</b> ist übel. With a patient: <b>Ihnen</b>.",
      table: {
        head: ["person", "dative", "example"],
        rows: [
          ["ich", "mir", "Mir ist schwindelig."],
          ["er", "ihm", "Ihm tut der Rücken weh."],
          ["sie", "ihr", "Ihr ist übel."],
          ["wir", "uns", "Uns fehlt nichts."],
          ["Sie", "Ihnen", "Wo tut es Ihnen weh?"]
        ]
      },
      examples: [
        { tr: "Where does it hurt?", note: "wehtun: the person in the dative" },
        { tr: "My stomach hurts.", note: "der Bauch is the subject, mir the dative" },
        { tr: "I feel dizzy.", note: "sein + dative, not haben" },
        { tr: "He feels nauseous.", note: "ihm: dative of er" },
        { tr: "What seems to be the problem?", note: "fehlen + dative" },
        { tr: "Can I help you?", note: "helfen + dative" }
      ]
    },
    vocab: [
      "the pain (Schmerzen haben: to be in pain)",
      "to hurt (es tut mir weh: it hurts)",
      "the headache (usually plural in German)",
      "the stomach, the belly",
      "the nausea",
      "the dizziness",
      "the shortness of breath",
      "the diarrhea",
      "the constipation",
      "nauseous (mir ist übel: I feel nauseous)",
      "dizzy (mir ist schwindelig: I feel dizzy)",
      "to help (takes the dative)"
    ],
    dialogue: [
      "Mr. Brandt, what seems to be the problem? Why are you here today?",
      "My stomach has been hurting for three days.",
      "Where exactly does it hurt? Can you show me?",
      "Here, on the lower right.",
      "Do you also feel nauseous?",
      "Yes, I feel nauseous, and yesterday I had diarrhea.",
      "Are you also short of breath or dizzy?",
      "No, not that."
    ],
    exercises: [
      {
        q: "The patient wants to say “My head hurts.” Which sentence is correct?",
        opts: ["Ich tut der Kopf weh.", "Mich tut der Kopf weh.", "Mir tut der Kopf weh."],
        why: "With <i>wehtun</i> the person goes in the <b>dative</b>: <i>mir</i>. The subject is <i>der Kopf</i>, which is why the verb is <i>tut</i>."
      },
      {
        tr: "The present tense of helfen, all persons.",
        why: "<i>Helfe, hilfst, hilft, helfen, helft, helfen</i>: in the second and third person singular the <b>e</b> becomes <b>i</b>. And the person being helped goes in the dative: <i>Ich helfe Ihnen</i>."
      },
      {
        q: "Fill in: “Kann ich ___ helfen?” (to the patient)",
        hint: "Sie in the dative",
        why: "<b>Ihnen</b>: <i>helfen</i> takes the dative, and the formal dative is <i>Ihnen</i>, capitalized."
      },
      {
        q: "Fill in with the dative of er.",
        tr: "His back hurts and he feels nauseous.",
        why: "<i>Ihm tut der Rücken weh, und ihm ist übel</i>: both expressions take the dative, <i>ihm</i>."
      },
      {
        q: "Match each thing the patient says with its meaning.",
        pairs: ["I feel nauseous", "I feel dizzy", "I'm short of breath", "I have diarrhea"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["stomach, belly", "nausea", "dizziness", "shortness of breath", "diarrhea", "constipation"]
      },
      {
        q: "Put the words in order.",
        tr: "My head has been hurting since yesterday.",
        why: "<i>Seit gestern tut mir der Kopf weh.</i> <i>Seit gestern</i> first, the verb <i>tut</i> in second position, <i>weh</i> at the end. Note that German uses the present tense here, where English says “has been hurting”."
      },
      {
        q: "Translate (to the patient): “Do you feel dizzy?”",
        why: "<i>Ist Ihnen schwindelig?</i> With <i>sein</i> and the dative, not with <i>haben</i>, the standard form, rather than the colloquial “Sind Sie schwindelig”. It is also spelled <i>schwindlig</i>."
      },
      {
        q: "A patient presses the call button.",
        setting: "You walk into the room: the patient says she doesn't feel well.",
        lines: [
          { tr: "Hello. I don't feel well at all." },
          { tr: "Ask what seems to be the problem.", answerTr: "What seems to be the problem?" },
          { tr: "My stomach hurts." },
          { tr: "Ask where exactly it hurts.", answerTr: "Where exactly does it hurt?" },
          { tr: "Here, on the left. And I feel nauseous." },
          { tr: "Ask since when she has felt nauseous.", answerTr: "Since when have you felt nauseous?" }
        ]
      },
      {
        tr: "My stomach has been hurting for three days. I feel nauseous, and yesterday I had diarrhea.",
        why: "In <i>Bauch</i> the <b>au</b> is like “ow” in “now” and the final <b>ch</b> is [x]; in <i>übel</i> the <b>ü</b> is said with rounded lips, like “ee” with lips pushed forward; in <i>Durchfall</i> the <b>ch</b> after <b>r</b> is [ç]."
      },
      {
        tr: "Where exactly does it hurt?",
        why: "In <i>genau</i> the <b>g</b> is always hard, as in “go”; in <i>tut</i> the <b>u</b> is long; in <i>weh</i> the <b>w</b> sounds like English [v] and the <b>h</b> makes the <b>e</b> long."
      }
    ]
  },
  "lesson:pfl-u01-l3": {
    theme: "The medical history",
    title: "The medical history form",
    objectives: [
      "fill out the medical history form with the patient",
      "ask about previous illnesses, surgeries, allergies and medications",
      "use the Perfekt for what has already happened, with haben or with sein",
      "ask for the medication list and when the patient last took their medications"
    ],
    theory: [
      {
        h: "The questions on the form",
        p: "The <strong>Anamnesebogen</strong> is the form filled out on admission. The standard questions: <em>Haben Sie Vorerkrankungen?</em> (previous illnesses), <em>Hatten Sie schon einmal eine Operation?</em>, <em>Haben Sie Allergien?</em>, <em>Welche Medikamente nehmen Sie regelmäßig ein?</em>, <em>Sind Sie in letzter Zeit gestürzt?</em> For an allergy always ask about <strong>the reaction</strong> too (<em>Was ist dann passiert?</em>) and, if the patient does not remember the name of the drug, note who does: the family doctor, <em>der Hausarzt</em>."
      },
      {
        h: "The Perfekt of the medical history",
        p: "What has already happened is told in the <strong>Perfekt</strong>: auxiliary in second position, participle at the end. Most verbs use <strong>haben</strong>: <em>Haben Sie Ihre Tabletten genommen? Ich habe nichts gegessen. Ich habe das Antibiotikum nicht vertragen.</em> Intransitive verbs of movement from place to place or of change of state usually use <strong>sein</strong>: <em>Sind Sie gestürzt?</em> This is a tendency, not a law: the verb and its meaning decide (<em>Ich habe getanzt</em>), so learn the auxiliary together with the verb. In separable verbs <em>ge-</em> goes after the prefix: <em>einweisen</em> → <em>eingewiesen</em>, <em>einnehmen</em> → <em>eingenommen</em>; if the base verb already has an inseparable prefix, there is no <em>ge-</em>: <em>vorbereiten</em> → <em>vorbereitet</em>. With <em>sein</em> and <em>haben</em> themselves the Präteritum is more common: <em>Ich hatte eine Operation. Ich war im Krankenhaus.</em>"
      },
      {
        contrast: "American English asks about the past with the simple past: <em>Did you take your pills today? Did you fall recently?</em> German, in conversation, uses the <strong>Perfekt</strong> for the same questions: <em>Haben Sie heute schon Ihre Tabletten genommen? Sind Sie in letzter Zeit gestürzt?</em> It looks like the English present perfect, but it does not carry the English meaning of “up to now”: it is simply the spoken past. Two things are new for English speakers. First, in a main clause the participle goes <strong>to the very end</strong>, with everything else in between. Second, English always uses <em>have</em>, while German uses <em>sein</em> for intransitive verbs of movement and change of state: “I have fallen” is <em>ich bin gestürzt</em>, never “ich habe gestürzt” in the sense of falling. When in doubt: a transitive verb with a direct object takes <em>haben</em>."
      },
      {
        trap: "The classic false friend for English speakers: <em>bekommen</em> means “to get, to receive”, not “to become” (that is <em>werden</em>). <em>Sie bekommen eine Infusion</em> means “you are getting an IV”, given by the staff; to “take” a medication is <em>nehmen</em> or, more formally, <em>einnehmen</em>. <em>Die Allergie</em> looks like English, but the stress falls on the last syllable, <em>Aller-<b>gie</b></em>, and the <b>g</b> is hard, as in “go”, never as in “allergy”. <em>Vertragen</em> works like this: <em>Ich vertrage kein Penicillin</em>, “I can't tolerate penicillin”. Last, <em>die Einweisung</em> has two meanings: the doctor's referral for admission and, on the unit, training on a device (<em>Geräteeinweisung</em>)."
      },
      {
        tip: "Ask for the medication list instead of having the names dictated to you: <em>Haben Sie Ihren Medikationsplan dabei?</em> A drug name said by a patient and heard by a non-native speaker is the easiest source of error on the whole form. German brand names also often differ from American ones."
      }
    ],
    grammar: {
      title: "Perfekt with haben and with sein",
      note: "Auxiliary in <b>second position</b> (or first in a yes/no question), participle <b>at the end</b>. usually <b>sein</b> with intransitive verbs of movement and change of state, <b>haben</b> with almost all the others.",
      table: {
        head: ["infinitive", "sentence in the Perfekt", "note"],
        rows: [
          ["nehmen", "Haben Sie Ihre Tabletten genommen?", "haben, strong participle"],
          ["vertragen", "Ich habe das Antibiotikum nicht vertragen.", "ver- is inseparable: no ge-"],
          ["einweisen", "Der Hausarzt hat mich eingewiesen.", "separable: ge- after the prefix"],
          ["stürzen", "Sind Sie gestürzt?", "sein: motion"]
        ]
      },
      examples: [
        { tr: "Have you already taken your pills today?", note: "haben + genommen at the end" },
        { tr: "I haven't eaten anything this morning.", note: "a typical question before a fasting test" },
        { tr: "My family doctor referred me to the hospital.", note: "einweisen: referral for admission" },
        { tr: "Have you fallen recently?", note: "stürzen takes sein" },
        { tr: "I didn't tolerate the antibiotic.", note: "vertragen: no ge-" },
        { tr: "When did you last drink something?", note: "W- question: haben in second position" }
      ]
    },
    vocab: [
      "the medical history form",
      "the previous illness, the pre-existing condition",
      "the allergy",
      "the medication, the drug",
      "the medication list (the patient's list of current medications)",
      "the surgery, the operation",
      "the family doctor, the primary care physician",
      "the referral for admission",
      "the fall",
      "to take (a medication)",
      "to tolerate",
      "regularly"
    ],
    dialogue: [
      "Mr. Brandt, now we'll fill out the medical history form together. Do you have any previous illnesses?",
      "Yes, I have high blood pressure. And two years ago I had knee surgery.",
      "Do you have any allergies?",
      "Once I couldn't tolerate an antibiotic. I got a rash.",
      "Do you remember what the medication is called?",
      "No, unfortunately not. But my family doctor knows.",
      "All right, we'll ask there. What medications do you take regularly?",
      "Here's my medication list.",
      "Thank you. Have you already taken your pills today?",
      "Yes, this morning."
    ],
    culture: {
      title: "A German view: the Medikationsplan",
      text: "<p>In Germany anyone with statutory health insurance who takes at least three systemically acting prescription drugs at the same time for at least 28 days is entitled to a <i>Medikationsplan</i> on a single nationwide form, filled out by the family doctor, with a barcode that the pharmacy and the hospital can scan. Many patients carry it in their wallet, and many simply call it <i>Medikamentenplan</i> or <i>mein Zettel</i>.</p><p>On admission the plan does not replace your question: always ask whether the patient takes anything that is not on it, such as an over-the-counter product or an ointment. The answer goes on the medical history form, and the decision about what to continue belongs to the physician.</p>"
    },
    exercises: [
      {
        tr: "The Perfekt of nehmen, all persons.",
        why: "<i>Habe genommen, hast genommen, hat genommen, haben genommen, habt genommen, haben genommen</i>: auxiliary <i>haben</i> and the strong participle <i>genommen</i>."
      },
      {
        q: "You want to ask the patient “Have you fallen recently?” Which sentence is correct?",
        opts: [
          "Haben Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt worden?"
        ],
        why: "<b>stürzen</b> is a verb of motion and takes <b>sein</b>: <i>Sind Sie gestürzt?</i> The third one is a passive, which makes no sense here."
      },
      {
        q: "Fill in: “Haben Sie heute schon Ihre Tabletten ___?”",
        hint: "participle of nehmen",
        why: "<b>genommen</b>, at the end of the sentence: the participle of <i>nehmen</i> is strong and changes its vowel."
      },
      {
        q: "Which questions on the form are correct?",
        opts: [
          "Haben Sie Allergien?",
          "Welche Medikamente nehmen Sie regelmäßig ein?",
          "Welche Medikamente Sie nehmen regelmäßig ein?",
          "Hatten Sie schon einmal eine Operation?",
          "Haben Sie schon einmal eine Operation gehabt worden?"
        ],
        why: "In a W- question the verb comes right after the question phrase, which can be more than one word: <i>Welche Medikamente nehmen Sie</i>. The last one mixes Perfekt and passive: you say <i>Hatten Sie</i> or <i>Haben Sie ... gehabt</i>."
      },
      {
        q: "Complete the sentence in the Perfekt.",
        tr: "I didn't tolerate the antibiotic.",
        why: "<i>Ich habe das Antibiotikum nicht vertragen</i>: <i>vertragen</i> has the inseparable prefix <i>ver-</i>, so the participle takes no <i>ge-</i> and looks just like the infinitive."
      },
      {
        q: "Put the words in order.",
        tr: "When did you last eat something?",
        why: "<i>Wann haben Sie zuletzt etwas gegessen?</i> The question word, then the auxiliary <i>haben</i>, the subject, and the participle <i>gegessen</i> at the end. English uses the simple past here, German the Perfekt."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["medical history form", "previous illness", "medication", "fall", "surgery", "family doctor"]
      },
      {
        q: "Translate: “Have you eaten anything today?”",
        why: "<i>Haben Sie heute schon etwas gegessen?</i> Yes/no question: the auxiliary opens the sentence and the participle goes at the end. <i>Schon</i> means “already” and is very natural in this question."
      },
      {
        q: "You continue with the medical history form.",
        setting: "The patient has already said he has high blood pressure.",
        lines: [
          { tr: "What else would you like to know?" },
          { tr: "Ask whether he has ever had surgery.", answerTr: "Have you ever had surgery?" },
          { tr: "Yes, two years ago, on my knee." },
          { tr: "Ask whether he has any allergies.", answerTr: "And do you have any allergies?" },
          { tr: "No, I don't think so." },
          { tr: "Ask whether he has already taken his pills today.", answerTr: "All right. Have you already taken your pills today?" }
        ]
      },
      {
        tr: "I have high blood pressure. Two years ago I had knee surgery, and I couldn't tolerate an antibiotic.",
        why: "In <i>Knie</i> both the <b>k</b> and the <b>n</b> are pronounced, unlike English “knee”; in <i>Blutdruck</i> the <b>u</b> of <i>Blut</i> is long and the one in <i>Druck</i> short; in <i>vertragen</i> the <b>v</b> sounds like [f]."
      },
      {
        tr: "What medications do you take regularly?",
        why: "In <i>Medikamente</i> the stress falls on <b>men</b>; in <i>regelmäßig</i> the <b>ä</b> is long and the <b>ß</b> is a voiceless <b>s</b>; the final <b>g</b> is pronounced [ç]."
      }
    ]
  },
  "lesson:pfl-u01-l4": {
    theme: "Two registers",
    title: "Technical language and patient language",
    objectives: [
      "recognize the technical terms of Latin and Greek origin used in documentation and with physicians",
      "translate each technical term into the word the patient uses",
      "choose the right register depending on who is listening",
      "find the article of a compound from its last element"
    ],
    theory: [
      {
        h: "Two languages on the same unit",
        p: "Many clinical concepts have two names. <strong>Fachsprache</strong>, with Latin or Greek roots, is used with physicians, at shift handover and in documentation: <em>Hypertonie, Dyspnoe, Obstipation, Emesis</em>. <strong>Laiensprache</strong>, made of German words, is used with patients and family members: <em>Bluthochdruck, Atemnot, Verstopfung, Erbrechen</em>. A nurse switches between them dozens of times a day, sometimes in the same sentence: <em>Er hat eine Hypertonie</em> to the physician, <em>Sie haben Bluthochdruck</em> to the patient."
      },
      {
        h: "The patient's words are compounds",
        p: "Laiensprache builds nouns by joining simple words: <em>Blut + hoch + Druck</em> = <em>der Bluthochdruck</em>, <em>Zucker + Krankheit</em> = <em>die Zuckerkrankheit</em>, <em>Atem + Not</em> = <em>die Atemnot</em>. <strong>The last element decides the article</strong>: <em>der Druck</em>, so <em>der Bluthochdruck</em>; <em>die Krankheit</em>, so <em>die Zuckerkrankheit</em>; <em>das Gespräch</em>, so <em>das Aufnahmegespräch</em>. Patients often shorten it further: <em>Ich habe Zucker</em> means “I have diabetes”."
      },
      {
        contrast: "In American hospitals the Latin layer is mostly written, not spoken: a nurse charts “hypertension” but says “high blood pressure”, even to the physician, and “short of breath” rather than “dyspneic”. German works the other way around. At handover and on rounds the Latin terms are <strong>expected</strong>: <em>Der Patient hat eine bekannte Hypertonie</em> is normal spoken German between professionals, and the more precise choice there; plain words are not a mistake, but the Latin term is what colleagues usually use. So you need both columns, and the Latin one is less of a gift than it seems: <em>Zephalgie</em> (headache) or <em>Emesis</em> (vomiting) are rare in American speech. The other new thing is gender. English has none, but in German every term has its article, and the two registers often differ: <em>die Hypertonie</em> but <em>der Bluthochdruck</em>, <em>das Abdomen</em> but <em>der Bauch</em>. Learn each word with <em>der/die/das</em> from the start."
      },
      {
        trap: "<em>Hypertonie</em> is not English “hypertonia”: in English that word means increased muscle tone, while in German <em>Hypertonie</em> on a chart normally means high blood pressure (<em>arterielle Hypertonie</em>). German also uses the word for raised muscle tone, in neurology, so the context decides. One letter changes everything: <em>Hypotonie</em> is low blood pressure, and in a quick spoken handover the two are easy to confuse, so when in doubt ask for confirmation. <em>Obstipation</em> looks like a stranger to English speakers, but it is simply constipation; the patient says <em>Verstopfung</em>. And <em>Diarrhö</em> is also spelled <em>Diarrhoe</em>: both spellings are correct, the English “Diarrhea” is not."
      },
      {
        tip: "When you explain to a patient what the physician said, repeat the technical word once and then translate it: <em>Das ist eine Hypertonie, also Bluthochdruck.</em> The patient will find it again in the discharge letter and will know what it means."
      }
    ],
    grammar: {
      title: "Fachsprache and Laiensprache",
      note: "With physicians and in documentation the <b>Fachsprache</b> column; with patients and family members the <b>Laiensprache</b> column. The article of a compound is that of its <b>last element</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "English"],
        rows: [
          ["die Hypertonie", "der Bluthochdruck", "hypertension, high blood pressure"],
          ["der Diabetes mellitus", "die Zuckerkrankheit, “Zucker”", "diabetes"],
          ["die Dyspnoe", "die Atemnot", "dyspnea, shortness of breath"],
          ["die Zephalgie", "die Kopfschmerzen", "cephalalgia, headache"],
          ["die Nausea", "die Übelkeit", "nausea"],
          ["die Emesis", "das Erbrechen", "emesis, vomiting"],
          ["die Obstipation", "die Verstopfung", "constipation"],
          ["die Diarrhö", "der Durchfall", "diarrhea"],
          ["das Abdomen", "der Bauch", "abdomen, belly"]
        ]
      },
      examples: [
        { tr: "The patient has known hypertension.", note: "Fachsprache: to the physician or in documentation" },
        { tr: "Mr. Brandt, you have high blood pressure.", note: "Laiensprache: to the patient" },
        { tr: "The patient has dyspnea on exertion.", note: "a typical documentation phrase" },
        { tr: "Do you get short of breath when you climb stairs?", note: "the same question, for the patient" },
        { tr: "In technical language, diabetes is called Diabetes mellitus.", note: "Zucker + Krankheit: die, because of Krankheit" },
        { tr: "Many patients simply say: “I have sugar.”", note: "Zucker for diabetes: a very common colloquial form" }
      ]
    },
    vocab: [
      "the medical history (technical term)",
      "the history, the background (word for the patient)",
      "the hypertension (technical term)",
      "the high blood pressure (word for the patient)",
      "the diabetes mellitus (technical term)",
      "the diabetes (word for the patient)",
      "the dyspnea (technical term)",
      "the cephalalgia, headache (technical term)",
      "the emesis, vomiting (technical term)",
      "the vomiting (word for the patient)",
      "the constipation (technical term)",
      "the diarrhea (technical term)"
    ],
    dialogue: [
      "Dr. Weber, Mr. Brandt has known hypertension and has had abdominal pain for three days.",
      "Does he also have nausea or emesis?",
      "Nausea yes, no emesis. Also diarrhea since yesterday.",
      "Ms. Marin, what did the doctor say? I don't understand these words.",
      "Don't worry, Mr. Brandt. He just asked whether you feel nauseous and whether you have vomited.",
      "Oh, I see. And what is a “Hypertonie”?",
      "That's high blood pressure. You already know about that."
    ],
    exercises: [
      {
        q: "Match each technical term with the word the patient uses.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "die Kopfschmerzen", "das Erbrechen"]
      },
      {
        q: "You are talking with the patient. Which sentence is appropriate?",
        opts: [
          "Sie haben eine Hypertonie.",
          "Bei Ihnen besteht eine arterielle Hypertonie.",
          "Sie haben Bluthochdruck."
        ],
        why: "With patients you use Laiensprache: <b>Bluthochdruck</b>. The first two are correct, but they belong in documentation or between physicians."
      },
      {
        q: "Which words are right for the patient?",
        opts: ["die Verstopfung", "die Obstipation", "die Übelkeit", "die Nausea", "der Durchfall", "die Diarrhö"],
        why: "<i>Verstopfung</i>, <i>Übelkeit</i> and <i>Durchfall</i> are everyday German words. <i>Obstipation</i>, <i>Nausea</i> and <i>Diarrhö</i> are technical terms, for physicians and documentation."
      },
      {
        q: "The physician wrote “Hypertonie”. Complete the sentence for the patient: “Sie haben ___.”",
        hint: "compound word, Laiensprache",
        why: "<b>Bluthochdruck</b>: <i>Blut + hoch + Druck</i>. <i>hohen Blutdruck</i> is also fine."
      },
      {
        q: "Choose the article: in compounds the last element decides.",
        items: ["high blood pressure (Druck)", "diabetes (Krankheit)", "shortness of breath (Not)", "medical history form (Bogen)", "admission interview (Gespräch)", "history, background (Geschichte)"]
      },
      {
        q: "Fill in: the technical term in the first sentence, the patient's word in the second.",
        tr: "The patient has dyspnea on exertion. I ask him: do you get short of breath when you climb stairs?",
        why: "<i>Dyspnoe</i> is the term for documentation, <i>Atemnot</i> the word for the patient: same concept, two registers."
      },
      {
        q: "Put the words in order.",
        tr: "Do you get short of breath when you climb stairs?",
        why: "<i>Haben Sie Atemnot, wenn Sie Treppen steigen?</i> The yes/no question starts with the verb; after <i>wenn</i> the verb <i>steigen</i> goes to the end."
      },
      {
        q: "Translate, speaking to the patient: “Do you have high blood pressure?”",
        why: "<i>Haben Sie Bluthochdruck?</i> or <i>Haben Sie hohen Blutdruck?</i> You do not say <i>Hypertonie</i> to the patient."
      },
      {
        q: "The physician wrote “Diabetes mellitus”. Complete for the patient: “Seit wann haben Sie die ___?”",
        hint: "Zucker + Krankheit",
        why: "<b>Zuckerkrankheit</b>, feminine like <i>Krankheit</i>. Many patients also just say <i>Zucker</i>: <i>Ich habe Zucker</i>."
      },
      {
        tr: "The patient has known hypertension. To Mr. Brandt I simply say: you have high blood pressure.",
        why: "In <i>Hypertonie</i> the stress falls on the final <b>nie</b>, not on “per” as in English, and the <b>y</b> is pronounced like a <b>ü</b>; in <i>Bluthochdruck</i> the <b>ch</b> after <b>o</b> is [x]."
      },
      {
        tr: "Do you get short of breath when you climb stairs?",
        why: "In <i>Atemnot</i> the stress is on the first syllable, <b>A</b>; in <i>Treppen</i> the <b>e</b> is short; in <i>steigen</i> the initial <b>st</b> is [ʃt] and <b>ei</b> is like English “eye”."
      }
    ]
  },
  "lesson:pfl-u01-test": {
    theme: "Review",
    title: "Test: Admission and medical history",
    objectives: [
      "check the register with patients, the dative of symptoms, the Perfekt of the medical history and the Fachsprache / Laiensprache pairs"
    ],
    theory: [
      {
        p: "Eleven questions on the whole unit. You pass with 70%. The clinical content is for teaching only: on the unit, your facility's protocol always applies."
      }
    ],
    exercises: [
      {
        q: "You greet a 75-year-old patient you don't know. Which sentence is appropriate?",
        opts: ["Hallo, wie geht's dir?", "Guten Tag, wie geht es Ihnen?", "Guten Tag, wie geht es dir?"],
        why: "With patients you always use <b>Sie</b>: <i>Wie geht es Ihnen?</i>, with the formal dative."
      },
      {
        q: "Fill in: “Wo tut es ___ weh?” (to the patient)",
        hint: "Sie in the dative",
        why: "<b>Ihnen</b>: with <i>wehtun</i> the person goes in the dative."
      },
      {
        q: "The patient says “I feel nauseous.” Fill in: “___ ist übel.”",
        hint: "ich in the dative",
        why: "<b>Mir</b>: <i>Mir ist übel</i>, with <i>sein</i> and the dative. “Ich bin übel” does not mean feeling nauseous."
      },
      {
        tr: "The Perfekt of einnehmen, all persons.",
        why: "<i>Habe eingenommen, hast eingenommen, hat eingenommen, haben eingenommen, habt eingenommen, haben eingenommen</i>: a separable verb, <i>ge-</i> goes between <i>ein</i> and <i>nommen</i>."
      },
      {
        q: "Match each technical term with the word the patient uses.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "der Durchfall"]
      },
      {
        q: "Which sentences are correct with a patient?",
        opts: [
          "Kann ich Ihnen helfen?",
          "Kann ich Sie helfen?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Haben Sie in letzter Zeit gestürzt?"
        ],
        why: "<i>helfen</i> takes the dative (<i>Ihnen</i>), <i>stürzen</i> takes <i>sein</i> in the Perfekt, and after <i>jetzt</i> the verb stays in second position."
      },
      {
        q: "Complete the sentence in the Perfekt.",
        tr: "My family doctor referred me to the hospital.",
        why: "<i>Mein Hausarzt hat mich ins Krankenhaus eingewiesen</i>: <i>hat</i> in second position, the separable participle <i>eingewiesen</i> at the end."
      },
      {
        q: "Put the words in order.",
        tr: "What medications do you take regularly?",
        why: "<i>Welche Medikamente nehmen Sie regelmäßig ein?</i> The verb <i>nehmen</i> right after the question phrase, the prefix <i>ein</i> at the end."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["medical history", "high blood pressure", "medication", "admission interview", "diarrhea", "history, background"]
      },
      {
        tr: "Hello, I'm your nurse today. Now we'll fill out the medical history form together. Do you have any allergies?",
        why: "In <i>Anamnesebogen</i> the stress falls on <b>ne</b>; in <i>Allergien</i> the <b>g</b> is hard and the final <b>ie</b> is pronounced [iːən]; in <i>fülle</i> the <b>ü</b> is short and rounded."
      },
      {
        tr: "Since when has it been hurting?",
        why: "In <i>Seit</i> the initial <b>s</b> is voiced, like English [z], and <b>ei</b> is like “eye”; in <i>wann</i> the <b>w</b> sounds like [v]; in <i>weh</i> the <b>h</b> makes the <b>e</b> long."
      }
    ]
  }
});
