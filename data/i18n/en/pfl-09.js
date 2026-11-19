/* ============================================================
   Learner-language text (en) for data/core/pfl-09.js, unit pfl-u09.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:pfl-u09": {
    title: "Hygiene, wounds and discharge",
    grammarNote: "the polite imperative for hygiene measures · the passive in the present and the Präteritum · adjective endings when describing a wound · the Futur I to explain what happens after discharge · modal verbs for tasks, permissions and obligations"
  },
  "lesson:pfl-u09-l1": {
    theme: "Hygiene and isolation",
    title: "Hygiene and isolation",
    objectives: [
      "explain hygiene measures to a patient and family with the polite imperative",
      "say what gets done with the passive: werden desinfiziert, wurde gefunden",
      "explain isolation in plain words, without causing alarm",
      "tell apart Infektion and Ansteckung, Keim and Erreger"
    ],
    theory: [
      {
        h: "Explaining a hygiene measure",
        p: "With patients and visitors, hygiene measures are explained with the <strong>polite imperative</strong>, always with <em>bitte</em>: <em>Desinfizieren Sie sich bitte die Hände. Ziehen Sie bitte einen Schutzkittel an.</em> The verb comes first, <em>Sie</em> right after it; a separable prefix goes to the end (<em>ziehen ... an</em>). When what gets done matters more than who does it, use the <strong>passive</strong>: <em>Die Hände <b>werden</b> desinfiziert. Das Zimmer <b>wird</b> jeden Tag gereinigt.</em> For something that has already happened, the passive in the Präteritum: <em>Bei Herrn Brandt <b>wurde</b> ein Keim gefunden.</em>"
      },
      {
        h: "Isolation: what to tell the patient",
        p: "A patient in isolation is often scared or feels treated as dangerous. Explain the reason in plain words and put the protection of others at the center: <em>Wir wollen verhindern, dass sich andere Patienten anstecken.</em> What the germ means for the patient's own health is for the physician to explain: <em>Die Ärztin bespricht mit Ihnen, was das für Sie bedeutet.</em> The concrete measures (gown, gloves, visitors, leaving the room) are set by your facility's hygiene plan; the examples in this lesson are only there for the language."
      },
      {
        contrast: "In English “infection” works with everyone, and the everyday question is “Is it contagious?” or “Can I catch it?”. German has the same split, but with two nouns: <em>die Infektion</em> is understood by patients too, while the everyday word for passing it on is <em>die Ansteckung</em>, with the verb <em>sich anstecken</em> (“to catch it”) and the adjective <em>ansteckend</em> (“contagious”): <em>Ist das ansteckend?</em> is the question you will hear most. Do not translate “to catch” word for word with <em>fangen</em>: you catch a ball, not a germ. <em>MRSA</em> is the same abbreviation as in English, but it is spelled out with German letter names, <em>em-er-es-a</em>, and many facilities use the broader <em>MRE</em>, <em>multiresistente Erreger</em>. Patients often say <em>Krankenhauskeim</em> (“hospital germ”): not a precise term, but it is their word, and you should understand it."
      },
      {
        trap: "<em>desinfizieren</em> ends in <em>-ieren</em>, so its participle has no <em>ge-</em>: <em>Die Hände werden desinfiziert</em>, never <em>gedesinfiziert</em>. English says “disinfect <b>your</b> hands”; with body parts German uses a reflexive pronoun in the dative instead of the possessive: <em>Desinfizieren Sie <b>sich</b> die Hände</em>. And the protective gown is <em>der Schutzkittel</em>: <em>der Mantel</em> is a coat, and <em>das Kleid</em> is a dress."
      },
      {
        tip: "While you explain a measure, show it: point to the dispenser, hold up a gown. The word sticks better when the patient links it to an object, and you do not have to hunt for a synonym if they do not understand."
      }
    ],
    grammar: {
      title: "Polite imperative and passive",
      note: "Imperative: <b>verb + Sie</b> (+ bitte), separable prefix at the end. Present passive: <b>wird / werden</b> + participle; Präteritum passive: <b>wurde / wurden</b> + participle.",
      table: {
        head: ["form", "structure", "example"],
        rows: [
          ["polite imperative", "verb + Sie + bitte", "Desinfizieren Sie sich bitte die Hände."],
          ["imperative, separable verb", "verb + Sie ... prefix", "Ziehen Sie bitte einen Schutzkittel an."],
          ["present passive", "wird / werden + participle", "Die Hände werden desinfiziert."],
          ["Präteritum passive", "wurde / wurden + participle", "Ein Erreger wurde gefunden."]
        ]
      },
      examples: [
        { tr: "Please disinfect your hands.", note: "polite imperative, reflexive with body parts: sich die Hände" },
        { tr: "Please put on a protective gown before you go in.", note: "anziehen is separable: an goes to the end" },
        { tr: "Please check in at the nurses' station before your visit.", note: "sich melden is reflexive, in the imperative too" },
        { tr: "Hands are disinfected before and after every patient contact.", note: "present passive, plural: werden + desinfiziert, no ge-" },
        { tr: "A multidrug-resistant pathogen was found in Mr. Brandt.", note: "Präteritum passive: wurde + gefunden" },
        { tr: "The room is cleaned every day.", note: "present passive: wird + gereinigt" }
      ]
    },
    vocab: [
      "hygiene",
      "the infection (also the technical term)",
      "the contagion, catching it (everyday word)",
      "hand disinfection, hand hygiene",
      "to disinfect",
      "isolation",
      "to isolate",
      "the germ",
      "the pathogen",
      "the protective gown",
      "the glove",
      "to transmit"
    ],
    dialogue: [
      "Good morning, Mr. Brandt. I need to explain something to you. You have a germ that many antibiotics don't work against.",
      "Is it dangerous?",
      "The doctor will talk with you about what it means for you. Above all, we want to keep other patients from catching it.",
      "Is that why I'm in a private room?",
      "Exactly. You'll be in isolation for a while. Anyone who comes in to see you puts on a protective gown and gloves.",
      "And my wife? She wants to visit me tomorrow.",
      "Please have her check in at the nurses' station first. We'll explain everything to her there.",
      "And what do I need to do myself?",
      "Please disinfect your hands, and let us know before you leave the room."
    ],
    culture: {
      title: "A German angle: the hygiene plan",
      text: "<p>In Germany every hospital and care facility has a <i>Hygieneplan</i>, a hygiene plan that sets out what is done, when and with what. The national recommendations come from KRINKO, the commission for hospital hygiene at the <i>Robert Koch-Institut</i>, which plays a role roughly comparable to the CDC's infection control guidance. Larger facilities have a <i>Hygienefachkraft</i>, a nurse with specific training in infection prevention, close to an infection preventionist: the person to ask when a rule is not clear.</p><p>If you trained elsewhere, many measures will look familiar, but names and details change from facility to facility: your unit's hygiene plan outweighs whatever you learned before.</p>"
    },
    exercises: [
      {
        q: "You politely ask a visitor to disinfect their hands. Which sentence is correct?",
        opts: [
          "Desinfizieren Sie sich bitte die Hände.",
          "Sie desinfizieren bitte sich die Hände.",
          "Desinfiziert Sie sich bitte die Hände."
        ],
        why: "In the polite imperative the verb comes first and looks like the infinitive: <b>Desinfizieren Sie</b>. <i>Desinfiziert</i> is the <i>ihr</i> form and does not go with <i>Sie</i>; <i>Sie desinfizieren bitte</i> is a statement with the wrong word order."
      },
      {
        tr: "The present of desinfizieren, all persons.",
        why: "<i>Desinfiziere, desinfizierst, desinfiziert, desinfizieren, desinfiziert, desinfizieren</i>: a regular <i>-ieren</i> verb, and the stress always stays on <b>zie</b>."
      },
      {
        q: "Complete: “Die Hände ___ vor jedem Patientenkontakt desinfiziert.”",
        hint: "present passive, plural",
        why: "<b>werden</b>: the subject <i>die Hände</i> is plural, so <i>werden</i> + the participle <i>desinfiziert</i> at the end."
      },
      {
        q: "Complete the sentence.",
        tr: "A multidrug-resistant pathogen was found in Mr. Brandt.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Erreger <b>gefunden</b></i>: Präteritum passive, <i>wurde</i> in second position and the participle at the end. Lab reports also say <i>nachgewiesen</i>, “detected”."
      },
      {
        q: "Which sentences can you say to a visitor?",
        opts: [
          "Ziehen Sie bitte einen Schutzkittel an.",
          "Ziehen Sie bitte an einen Schutzkittel.",
          "Desinfizieren Sie sich bitte die Hände.",
          "Melden Sie sich bitte vorher im Stationszimmer.",
          "Desinfizierst du Sie bitte die Hände."
        ],
        why: "<i>anziehen</i> is separable: the prefix <i>an</i> goes to the end, not in front of the object. <i>Desinfizierst du Sie</i> mixes informal <i>du</i> and formal <i>Sie</i>: with a visitor you say <i>Desinfizieren Sie sich</i>."
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["hygiene", "infection", "isolation", "germ", "pathogen", "protective gown"]
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["hand disinfection", "the protective gown", "the glove", "the germ"]
      },
      {
        q: "Put the words in order.",
        tr: "Germs are often transmitted by the hands.",
        why: "<i>Keime werden oft über die Hände übertragen.</i> Present passive: <i>werden</i> in second position, the participle <i>übertragen</i> at the end. <i>übertragen</i> does not separate and takes no <i>ge-</i>."
      },
      {
        q: "Translate (to a visitor): “Please disinfect your hands.”",
        why: "<i>Desinfizieren Sie sich bitte die Hände</i>: verb first, <i>Sie</i>, the reflexive <i>sich</i> and <i>bitte</i>. <i>Bitte desinfizieren Sie sich die Hände</i> or <i>Desinfizieren Sie bitte Ihre Hände</i> also work."
      },
      {
        q: "Explaining isolation.",
        setting: "Mr. Brandt has been moved to a private room and asks you some questions.",
        lines: [
          { tr: "Why am I in a room by myself?" },
          { tr: "Say that a germ was found and that is why he is in isolation.", answerTr: "A germ was found, so you're being isolated." },
          { tr: "My daughter wants to visit me today." },
          { tr: "Say that she should check in at the nurses' station first.", answerTr: "Please have her check in at the nurses' station first." },
          { tr: "What does she have to wear in the room?" },
          { tr: "Answer: a protective gown and gloves.", answerTr: "A protective gown and gloves." }
        ]
      },
      {
        tr: "Anyone who comes in to see you puts on a protective gown and gloves.",
        why: "In <i>zieht</i> the <b>z</b> is [ts] and the <b>h</b> is silent; in <i>Schutzkittel</i> the stress falls on <b>Schutz</b> and <b>tz</b> is [ts]; in <i>Handschuhe</i> the <b>d</b> of <i>Hand</i> sounds like [t] and the stress falls on <b>Hand</b>."
      },
      {
        tr: "Please disinfect your hands.",
        why: "In <i>Desinfizieren</i> the stress falls on <b>zie</b>; in <i>Sie</i> and <i>sich</i> the initial <b>s</b> is voiced, like English “z”; in <i>Hände</i> the <b>ä</b> sounds like the “e” in “bed”."
      }
    ]
  },
  "lesson:pfl-u09-l2": {
    theme: "Describing a wound",
    title: "Wounds and dressing changes",
    objectives: [
      "describe a wound by color, shape, edges and drainage",
      "decline the adjective in front of a noun: eine gerötete Wunde, der alte Verband",
      "tell the adjective after sein, with no ending, from the one in front of a noun",
      "talk about the wound with the patient without diagnosing"
    ],
    theory: [
      {
        h: "Describe, do not assess",
        p: "When describing a wound, what counts is what you see, feel and measure: where it is (<em>am Unterschenkel</em>), what the edge looks like (<em>der Wundrand ist leicht gerötet</em>), whether there is drainage (<em>etwas Wundsekret</em>), what the surrounding skin is like (<em>warm, geschwollen</em>). If something changes, you describe it and report it: <em>Die Rötung ist größer geworden. Ich informiere die Ärztin.</em> How the wound is treated is decided by the physician and the facility's standard; this lesson only teaches the words to describe it."
      },
      {
        h: "The adjective: with or without an ending",
        p: "After <em>sein</em> the adjective does not change: <em>Die Wunde <b>ist</b> gerötet. Der Verband <b>war</b> feucht.</em> In front of a noun it takes an ending, something English adjectives never do. After <em>der, die, das</em> in the nominative singular the ending is <b>-e</b>: <em>der alt<b>e</b> Verband, die klein<b>e</b> Wunde</em>. After <em>ein, eine</em> the ending shows the gender: <em>ein geschwollen<b>er</b> Knöchel, eine gerötet<b>e</b> Wunde, ein klein<b>es</b> Hämatom</em>. Participles used as adjectives (<em>gerötet, geschwollen</em>) follow the same rules."
      },
      {
        contrast: "In US charting you may be used to the Latin-based terms: “erythema”, “edema”, “purulent drainage”, “inflammation”. German has them too (<em>Erythem, Ödem</em>, <em>die Inflammation</em>), but on the unit, even among colleagues, people almost always use the plain German words: <em>die Entzündung</em> (adjective <em>entzündet</em>), <em>die Rötung</em>, <em>die Schwellung</em>, <em>die Überwärmung</em> (“warmth to the touch”). <em>Inflammation</em> sounds like a textbook; <em>Die Wunde ist entzündet</em> is what you say and write. The Latin register survives in words ending in <em>-itis</em> (<em>Bronchitis, Arthritis</em>), which patients often know. Watch also “infected” and “inflamed”: <em>infiziert</em> and <em>entzündet</em> are not interchangeable, and whether a wound is infected is a medical call, not part of your description."
      },
      {
        trap: "<em>die Bandage</em> is not a wound dressing: it is a supportive wrap or brace, for a knee or an ankle. The dressing on a wound is <em>der Verband</em>, and the dressing change is <em>der Verbandswechsel</em>. And watch the verb: English “change” covers both, but a dressing is changed with <em>wechseln</em> (<em>Der Verband wird gewechselt</em>), not with <em>ändern</em>, which means “to alter”."
      },
      {
        tip: "Always describe a wound in the same order: location, size, wound bed, edge, drainage, surrounding skin. With a fixed pattern you forget nothing, and whoever reads your description the next day can compare it with theirs."
      }
    ],
    grammar: {
      title: "The adjective in a description",
      note: "After <b>sein</b>: no ending (<i>Die Wunde ist gerötet</i>). In front of a noun, nominative: after <b>der/die/das</b> → <b>-e</b>; after <b>ein/eine</b> → <b>-er</b> (masculine), <b>-e</b> (feminine), <b>-es</b> (neuter).",
      table: {
        head: ["position", "masculine", "feminine", "neuter"],
        rows: [
          ["after sein", "Der Verband ist feucht.", "Die Wunde ist gerötet.", "Das Bein ist geschwollen."],
          ["after der / die / das", "der feuchte Verband", "die gerötete Wunde", "das geschwollene Bein"],
          ["after ein / eine", "ein feuchter Verband", "eine gerötete Wunde", "ein geschwollenes Bein"]
        ]
      },
      examples: [
        { tr: "The wound is red and swollen.", note: "after ist: gerötet and geschwollen with no ending" },
        { tr: "There is a small, reddened wound on the lower leg.", note: "eine + feminine: kleine, gerötete" },
        { tr: "The wound edge is slightly reddened.", note: "no ending after ist; leicht modifies gerötet" },
        { tr: "The old dressing was damp.", note: "der + nominative: alte; after war: feucht with no ending" },
        { tr: "The new dressing is holding well.", note: "der + nominative: neue" },
        { tr: "The wound shows no signs of inflammation.", note: "einer Entzündung: feminine genitive" }
      ]
    },
    vocab: [
      "the wound",
      "the inflammation",
      "the inflammation (technical term)",
      "the redness",
      "the swelling",
      "reddened",
      "swollen",
      "the wound edge",
      "the wound drainage, the exudate",
      "the dressing, the bandage",
      "the dressing change",
      "the wound documentation"
    ],
    dialogue: [
      "Can you help me with Mr. Brandt's dressing change?",
      "Sure. What did the wound look like yesterday?",
      "The edge was slightly red, but dry.",
      "And today? The old dressing is pretty damp.",
      "Yes, there's some drainage. The redness has spread, and the skin feels warm.",
      "That could be a sign of inflammation.",
      "Exactly. I'll document the wound with a photo and let the doctor know.",
      "Good. Then we'll talk after rounds about how to proceed."
    ],
    culture: {
      title: "A German angle: wound documentation",
      text: "<p>In many German hospitals and home care services the wound is documented on a dedicated form, the <i>Wunddokumentationsbogen</i>, often with a photo and a paper ruler next to the wound. In many facilities chronic wounds are followed by staff with specific training, for example <i>Wundexperten</i> trained in courses of the ICW (<i>Initiative Chronische Wunden</i>), roughly comparable to a wound care nurse.</p><p>Wound photos are health data: they are taken with the facility's devices, not your personal phone. The exact rules are in your unit's guidelines.</p>"
    },
    exercises: [
      {
        q: "Describe the wound: the edge is slightly reddened. Which sentence is correct?",
        opts: [
          "Der Wundrand ist leicht geröteter.",
          "Der Wundrand hat leicht gerötet.",
          "Der Wundrand ist leicht gerötet."
        ],
        why: "After <i>sein</i> the adjective has no ending: <b>ist gerötet</b>. <i>hat gerötet</i> would be an active Perfekt (“has reddened”) and does not describe a state."
      },
      {
        q: "Complete: “Am Unterschenkel ist eine ___ Wunde.”",
        hint: "small",
        why: "<b>kleine</b>: after <i>eine</i>, in the feminine nominative, the adjective takes <b>-e</b>."
      },
      {
        q: "Complete the sentence.",
        tr: "The old dressing was damp, the new one is holding well.",
        why: "<i>der <b>alte</b> Verband</i>, <i>der <b>neue</b> Verband</i>: after the definite article, in the masculine nominative, the ending is <b>-e</b>."
      },
      {
        q: "Which descriptions are correct?",
        opts: [
          "Die Wunde ist gerötet und geschwollen.",
          "Eine gerötete Wunde am Unterschenkel.",
          "Ein geschwollener Knöchel.",
          "Der Wundrand ist gerötete.",
          "Eine kleiner Wunde am Fuß."
        ],
        why: "After <i>ist</i> the adjective takes no ending: <i>ist gerötet</i>, not <i>gerötete</i>. After <i>eine</i> the feminine needs <b>-e</b>: <i>eine kleine Wunde</i>."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["the redness", "the swelling", "the wound drainage", "the wound edge"]
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["wound", "inflammation", "dressing", "dressing change", "wound drainage", "wound edge"]
      },
      {
        q: "Put the words in order.",
        tr: "The wound shows no signs of inflammation.",
        why: "<i>Die Wunde zeigt keine Zeichen einer Entzündung.</i> <i>einer Entzündung</i> is a feminine genitive: “of an inflammation”."
      },
      {
        q: "Translate (in the chart): “The wound is dry and clean.”",
        why: "<i>Die Wunde ist trocken und sauber</i>: after <i>ist</i> the adjectives take no ending. In the chart the short form is also common: <i>Wunde trocken und sauber</i>."
      },
      {
        q: "The patient asks about his wound.",
        setting: "During the dressing change Mr. Brandt is worried and asks you some questions.",
        lines: [
          { tr: "Is my wound inflamed?" },
          { tr: "Say that it is a little red and that the doctor will look at it today.", answerTr: "The wound is a little red. The doctor will look at it today." },
          { tr: "Why is the dressing so wet?" },
          { tr: "Say that it is drainage, fluid coming out of the wound, and that you are writing it down.", answerTr: "That's drainage, fluid from the wound. I'm writing it down." },
          { tr: "Does the dressing change hurt?" },
          { tr: "Say that you are working very carefully and that he should tell you right away if it hurts.", answerTr: "I'm being very careful. Tell me right away if it hurts." }
        ]
      },
      {
        tr: "Yes, there's some drainage. The redness has spread, and the skin feels warm.",
        why: "In <i>Rötung</i> and <i>größer</i> the <b>ö</b> is long, with rounded lips; in <i>größer</i> the <b>ß</b> is a voiceless [s]; in <i>warm</i> the <b>w</b> is [v]; in <i>Wundsekret</i> the stress falls on <b>Wund</b>."
      },
      {
        tr: "The wound edge is slightly reddened.",
        why: "In <i>Wundrand</i> both <b>d</b> at the end of a syllable sound like [t]; in <i>leicht</i> the <b>ch</b> after <b>i</b> is [ç], a soft hiss with no English equivalent; in <i>gerötet</i> the stress falls on <b>rö</b>, with a long <b>ö</b>."
      }
    ]
  },
  "lesson:pfl-u09-l3": {
    theme: "Preparing for discharge",
    title: "Discharge",
    objectives: [
      "explain to the patient what will happen after discharge with the Futur I",
      "tell the Futur I (wird kontrollieren) from the passive (wird entlassen)",
      "name aids, home care services and the care level",
      "answer without promising what another institution decides"
    ],
    theory: [
      {
        h: "What to tell the patient",
        p: "At discharge the patient wants to know who will help, what they need and whom to contact. To announce who will do what, use the <strong>Futur I</strong>: <em>Ein Pflegedienst <b>wird</b> Sie morgens <b>unterstützen</b>. Ihr Hausarzt <b>wird</b> die Wunde <b>kontrollieren</b>.</em> The Futur I sounds more committed and clearer than the present, which is also possible (<em>Ein Pflegedienst kommt morgens</em>). Whatever others decide, for example the long-term care insurer, you do not promise: <em>Das entscheidet die Pflegekasse.</em>"
      },
      {
        h: "Futur I or passive?",
        p: "Both use <em>werden</em>, but with different verb forms. The <strong>Futur I</strong> takes <em>werden</em> + <b>infinitive</b>: <em>Der Hausarzt wird die Wunde <b>kontrollieren</b></em> (“will check”). The <strong>passive</strong> takes <em>werden</em> + <b>participle</b>: <em>Sie werden am Freitag <b>entlassen</b></em> (“you are being discharged”). With <em>entlassen</em> the two are easy to mix up because the infinitive and the participle are identical: <em>Sie werden am Freitag entlassen</em> is a present passive with a future meaning, not a Futur I. English “will” always points to the future; German <em>werden</em> does not."
      },
      {
        contrast: "In the US you may know this as “discharge planning”, often run by a case manager or social worker. In Germany it is called <em>das Entlassmanagement</em>, and hospitals are required by law to provide it (§ 39 SGB V). <em>Die Überleitung</em> is the handoff to whoever takes over afterwards: the home care service, the nursing home, the family doctor; the form that goes with the patient is the <em>Überleitungsbogen</em>, close to a transfer or continuity-of-care form. <em>Der Pflegegrad</em> has no US equivalent: it is a level from 1 to 5 that measures how independent a person is in daily life and that entitles them to benefits from the <em>Pflegekasse</em>, the statutory long-term care insurance. Do not map it onto Medicare or Medicaid eligibility or onto a nursing home level of care: it is set by the insurer after an assessment, usually by the <em>Medizinischer Dienst</em>, not by the hospital."
      },
      {
        trap: "<em>entlassen</em> means to discharge a patient, but also to fire an employee: <em>Er wurde entlassen</em> without context can be either, much like English “discharged”. Patients themselves often say <em>Ich darf nach Hause</em> or <em>Ich komme raus</em>. <em>Der Arztbrief</em> is not just any letter: it is the physician's report that goes with the patient at discharge, close to a “discharge summary”. And <em>der Rollator</em> is a rolling walker with wheels and a seat; a frame walker without wheels is <em>der Gehbock</em>."
      },
      {
        tip: "Before you talk to the patient, write three lines: who comes to the home, which aids arrive, who checks what and when. Then explain them in that order, with the Futur I. At the end ask <em>Haben Sie noch Fragen?</em>, and if a family member is there, include them."
      }
    ],
    grammar: {
      title: "Futur I and passive with werden",
      note: "Futur I: conjugated <b>werden</b> + <b>infinitive</b> at the end. Passive: conjugated <b>werden</b> + <b>participle</b> at the end. With <i>entlassen</i> infinitive and participle are the same: the meaning decides.",
      table: {
        head: ["form", "structure", "example"],
        rows: [
          ["Futur I", "werden + infinitive", "Ein Pflegedienst wird Sie morgens unterstützen."],
          ["Futur I, question", "werden first + infinitive", "Werden Sie zu Hause allein zurechtkommen?"],
          ["present passive", "werden + participle", "Sie werden am Freitag entlassen."],
          ["present passive", "werden + participle", "Der Rollator wird geliefert."]
        ]
      },
      examples: [
        { tr: "A home care service will help you in the mornings.", note: "wird + infinitive unterstützen at the end: Futur I" },
        { tr: "Your daughter will pick up the medications from the pharmacy.", note: "Futur I: wird ... holen" },
        { tr: "Your family doctor will check the wound next week.", note: "Futur I: wird ... kontrollieren" },
        { tr: "We'll order the walker in time.", note: "Futur I, first person plural: werden ... bestellen" },
        { tr: "Will you manage on your own at home?", note: "question: werden first, zurechtkommen at the end" },
        { tr: "You're being discharged on Friday.", note: "present passive with a future meaning: werden + participle entlassen" }
      ]
    },
    vocab: [
      "the discharge",
      "to discharge (a patient)",
      "discharge planning, discharge management",
      "the handoff, the transition of care",
      "the transfer form, the continuity-of-care form",
      "the aid, the assistive device",
      "the (home) care service",
      "the care level (degree of need for long-term care)",
      "the long-term care insurer",
      "the physician's discharge summary",
      "to manage, to cope",
      "to organize, to arrange"
    ],
    dialogue: [
      "Mrs. Keller, the doctor said you're being discharged on Friday.",
      "Finally! But how am I going to manage at home?",
      "That's what we'll talk about now. A colleague from discharge planning will come and see you tomorrow.",
      "And who'll help me wash?",
      "A home care service will help you in the mornings. We'll talk about it with your daughter too.",
      "Do I need a walker?",
      "Yes. We'll order the walker in time, so it's here by Friday.",
      "And do I still have to see a doctor afterwards?",
      "Your family doctor will check the wound next week. He'll get the discharge summary too."
    ],
    culture: {
      title: "A German angle: long-term care insurance",
      text: "<p>Since 1995 Germany has had compulsory insurance for long-term care, the <i>Pflegeversicherung</i>, run by the <i>Pflegekassen</i> attached to the health insurance funds. It is something the US does not have in this form. A person who needs care files an application; someone from the <i>Medizinischer Dienst</i> (or another commissioned service) assesses their independence, usually at home, and the insurer assigns a <i>Pflegegrad</i> from 1 to 5. The benefits depend on the level: money for family caregivers, home care services, contributions toward a nursing home.</p><p>In the hospital the nurse does not decide the level, but is often the first to notice that help will be needed at home, and passes that on to <i>Entlassmanagement</i>.</p>"
    },
    exercises: [
      {
        q: "You tell the patient that a home care service will help her at home. Which sentence is correct?",
        opts: [
          "Ein Pflegedienst wird Sie zu Hause unterstützt.",
          "Ein Pflegedienst wird Sie zu Hause unterstützen.",
          "Ein Pflegedienst werden Sie zu Hause unterstützen."
        ],
        why: "Futur I: <i>wird</i> + <b>infinitive</b> at the end, <b>unterstützen</b>. With the participle <i>unterstützt</i> the sentence would turn into a passive that makes no sense; <i>werden</i> does not agree with the singular subject <i>ein Pflegedienst</i>."
      },
      {
        tr: "The present of werden, all persons.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i>: in the second and third person singular the <b>e</b> becomes <b>i</b>, and the <b>d</b> stays only in the third, <i>wird</i>."
      },
      {
        q: "Complete: “Ihr Hausarzt ___ die Wunde nächste Woche kontrollieren.”",
        hint: "Futur I, third person singular",
        why: "<b>wird</b>: the Futur I uses conjugated <i>werden</i> in second position and the infinitive <i>kontrollieren</i> at the end."
      },
      {
        q: "Complete the sentence.",
        tr: "We'll order the walker in time.",
        why: "<i>Wir <b>werden</b> den Rollator rechtzeitig <b>bestellen</b></i>: Futur I in the first person plural, with the infinitive at the end."
      },
      {
        q: "Which sentences are in the Futur I?",
        opts: [
          "Der Pflegedienst wird morgens kommen.",
          "Sie werden am Freitag entlassen.",
          "Ihre Tochter wird die Medikamente holen.",
          "Der Arztbrief wurde geschrieben.",
          "Wir werden den Überleitungsbogen ausfüllen."
        ],
        why: "The Futur I is <i>werden</i> + infinitive: <i>wird kommen</i>, <i>wird holen</i>, <i>werden ausfüllen</i>. <i>werden entlassen</i> here is a present passive (participle), <i>wurde geschrieben</i> a Präteritum passive."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["discharge planning", "the aid, the assistive device", "the care level", "the home care service"]
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["discharge", "discharge planning", "handoff, transition of care", "aid, assistive device", "care service", "care level"]
      },
      {
        q: "Put the words in order.",
        tr: "A care service will help you in the mornings.",
        why: "<i>Ein Pflegedienst wird Sie morgens unterstützen.</i> <i>wird</i> in second position, the infinitive <i>unterstützen</i> at the end."
      },
      {
        q: "Translate: “The family doctor will check the wound next week.”",
        why: "<i>Der Hausarzt wird die Wunde nächste Woche kontrollieren</i>: Futur I, infinitive at the end. <i>nächste Woche</i> (or <i>in der nächsten Woche</i>) can also go first: <i>Nächste Woche wird der Hausarzt ...</i> “Family doctor” is <i>Hausarzt</i> or <i>Hausärztin</i>, roughly a primary care physician."
      },
      {
        q: "Questions about discharge.",
        setting: "Mrs. Keller knows she is going home soon and asks you some questions.",
        lines: [
          { tr: "When can I go home?" },
          { tr: "Say that she will probably be discharged on Friday.", answerTr: "You'll probably be discharged on Friday." },
          { tr: "Who'll help me wash at home?" },
          { tr: "Say that a care service will come to her in the mornings.", answerTr: "A care service will come to you in the mornings." },
          { tr: "Will I get a care level?" },
          { tr: "Say that the long-term care insurer decides that and that you will help her with the application.", answerTr: "The long-term care insurer decides that. We'll help you with the application." }
        ]
      },
      {
        tr: "A home care service will help you in the mornings. We'll talk about it with your daughter too.",
        why: "In <i>Pflegedienst</i> you pronounce both the <b>p</b> and the <b>f</b>; in <i>ambulanter</i> the stress falls on <b>lan</b>; in <i>unterstützen</i> the stress falls on <b>stüt</b>, and <b>st</b> is [ʃt], like “sht”."
      },
      {
        tr: "Your family doctor will check the wound next week.",
        why: "In <i>Hausarzt</i> the stress falls on <b>Haus</b> and the end sounds like [tst]; in <i>nächste</i> the <b>ch</b> after <b>ä</b> is [ç]; in <i>kontrollieren</i> the stress falls on <b>lie</b>."
      }
    ]
  },
  "lesson:pfl-u09-l4": {
    theme: "Tasks and responsibility",
    title: "What may I do, what must I do?",
    objectives: [
      "ask what you are allowed to do during your orientation",
      "tell apart dürfen, müssen, sollen and sollten",
      "understand the difference between du darfst nicht and du musst nicht",
      "politely turn down a request that is not yours to handle"
    ],
    theory: [
      {
        h: "Permission, obligation, instruction",
        p: "<em>dürfen</em> expresses permission: <em>Was <b>darf</b> ich schon allein machen?</em> <em>müssen</em> expresses obligation: <em>Wenn du unsicher bist, <b>musst</b> du nachfragen.</em> <em>sollen</em> passes on an instruction from someone else: <em>Die Ärztin sagt, du <b>sollst</b> den Blutzucker messen.</em> <em>sollten</em> is advice: <em>Das <b>sollten</b> wir mit der Stationsleitung klären.</em> The conjugated modal goes in second position and the infinitive at the end; in a subordinate clause the modal goes to the very end, after the infinitive."
      },
      {
        h: "Delegation and responsibility: carefully",
        p: "In Germany some medical tasks can be delegated to nursing staff (<em>Delegation</em>); whoever accepts a task is responsible for carrying it out properly. What can be delegated, to whom and under what conditions depends on the law, the facility and your status, for example while your credentials are being recognized. This lesson teaches the words to ask and to say no, not the legal rules: for concrete cases the right person is the <em>Stationsleitung</em>, the nurse manager."
      },
      {
        contrast: "This is the classic trap for English speakers. “You must not do that” is a prohibition, and <em>Du musst das nicht machen</em> looks like its word-for-word translation, but it means the opposite: “you don't have to do that”, there is no obligation. The prohibition is said with <em>dürfen</em>: <em>Das <b>darfst</b> du nicht allein machen</em>, “you're not allowed to do that alone”. So: “must not” = <em>nicht dürfen</em>; “don't have to” = <em>nicht müssen</em>. Getting it backwards turns a ban into a permission, which on a unit is the dangerous direction. “May I?” and “Can I?” split the same way as in careful English: <em>Darf ich?</em> asks permission, <em>Kann ich?</em> asks whether it is possible or whether you are able to."
      },
      {
        trap: "<em>die Haftung</em> is liability, the legal duty to answer for damage; it is not responsibility in general. Professional and moral responsibility is <em>die Verantwortung</em>: <em>Ich trage die Verantwortung für meine Patienten.</em> And <em>die Krankenschwester</em> (“nurse”), which patients still use a lot, is no longer the professional title: the title is <em>Pflegefachfrau</em> or <em>Pflegefachmann</em>, roughly a registered nurse."
      },
      {
        tip: "If a family member or a patient asks you for something that is not yours to decide, do not just say no: say who decides it and what you are doing now. <em>Das darf ich nicht allein entscheiden. Ich spreche mit der Ärztin.</em> That way the request does not go unanswered."
      }
    ],
    grammar: {
      title: "Modal verbs on the unit",
      note: "The conjugated modal in <b>second position</b>, the infinitive <b>at the end</b>. Prohibition: <b>nicht dürfen</b>. No obligation: <b>nicht müssen</b>.",
      table: {
        head: ["modal", "meaning", "example"],
        rows: [
          ["dürfen", "be allowed to", "Das darfst du erst nach der Einarbeitung."],
          ["nicht dürfen", "must not, prohibition", "Das darfst du noch nicht allein machen."],
          ["müssen", "have to, obligation", "Wenn du unsicher bist, musst du nachfragen."],
          ["nicht müssen", "don't have to, no obligation", "Das musst du nicht allein machen."],
          ["sollen", "instruction from someone else", "Die Ärztin sagt, du sollst den Blutzucker messen."],
          ["sollten", "advice, should", "Das sollten wir mit der Stationsleitung klären."]
        ]
      },
      examples: [
        { tr: "What am I already allowed to do on my own as a new colleague?", note: "dürfen asks for permission, not ability" },
        { tr: "You can only take on this task once you've finished your orientation.", note: "darfst in second position, übernehmen at the end; erst = only then, not before" },
        { tr: "Certain medical tasks can be delegated to nursing staff.", note: "modal + passive: können + delegiert werden" },
        { tr: "If you're not sure, you have to ask.", note: "the wenn clause takes first position, so musst comes right after" },
        { tr: "You don't have to do it on your own.", note: "nicht müssen: no obligation, not a prohibition" },
        { tr: "We should clear that up with the nurse manager.", note: "sollten: advice" }
      ]
    },
    vocab: [
      "may, to be allowed to",
      "must, to have to",
      "to be supposed to (on someone's instruction)",
      "the delegation",
      "to delegate",
      "the responsibility",
      "the liability",
      "the orientation (of new staff)",
      "oriented, trained for the unit",
      "the task",
      "to take on, to take over",
      "to decline, to turn down"
    ],
    dialogue: [
      "I've been here for a week. What am I already allowed to do on my own?",
      "You already do basic care and vital signs on your own. We'll still do the dressing changes together this week.",
      "And drawing blood? I did that every day back home.",
      "I believe you. But here you can only do it once your orientation is done and the doctor has delegated it to you.",
      "Do I have to take on every task they give me?",
      "No. If you don't feel confident with a task, you have to say so. Then someone will show you how it's done.",
      "And who's liable if something goes wrong?",
      "That's a question for the nurse manager. The rules aren't the same everywhere, so we should clear it up with her."
    ],
    culture: {
      title: "A German angle: recognition of your qualification",
      text: "<p>If you trained as a nurse abroad, in Germany you usually need to have your qualification recognized (<i>Anerkennung</i>), a process that plays the role licensure plays in the US. Depending on the country and the training, you may need an adaptation course (<i>Anpassungslehrgang</i>) or an exam (<i>Kenntnisprüfung</i>). Until recognition, many work in a different role, for example as a <i>Pflegefachkraft in Anerkennung</i>, and some tasks are not yet allowed.</p><p>The rules differ from one <i>Land</i> to another and change over time: up-to-date information comes from the responsible office in your Land and the official portal <i>Anerkennung in Deutschland</i>.</p>"
    },
    exercises: [
      {
        q: "You want to tell a colleague that they don't have to do it on their own. Which sentence do you use?",
        opts: [
          "Das darfst du nicht allein machen.",
          "Das musst du nicht allein machen.",
          "Das sollst du nicht allein machen."
        ],
        why: "<b>nicht müssen</b> means “don't have to”. <i>nicht dürfen</i> is a prohibition, “must not”; <i>nicht sollen</i> passes on someone else's instruction not to do it."
      },
      {
        tr: "The present of dürfen, all persons.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: in the singular <b>ü</b> becomes <b>a</b>, and the first and third person singular have no ending."
      },
      {
        q: "Complete: “Wenn du unsicher bist, ___ du nachfragen.”",
        hint: "obligation: müssen",
        why: "<b>musst</b>: the <i>wenn</i> clause takes first position, so the modal comes right after it, then the subject <i>du</i>, and the infinitive at the end."
      },
      {
        q: "Complete the sentence.",
        tr: "You're only allowed to do that once your orientation is finished.",
        why: "<i>Das <b>darfst</b> du erst machen</i>: permission, so <i>dürfen</i>. <i>wenn die Einarbeitung abgeschlossen <b>ist</b></i>: in the subordinate clause the conjugated verb goes to the end."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Du musst nachfragen, wenn du unsicher bist.",
          "Du musst nachfragen, wenn du bist unsicher.",
          "Diese Aufgabe darfst du erst nach der Einarbeitung übernehmen.",
          "Die Ärztin kann bestimmte Aufgaben an die Pflege delegieren.",
          "Ich darf heute Zimmer zwölf übernommen."
        ],
        why: "After <i>wenn</i> the conjugated verb goes to the end: <i>wenn du unsicher bist</i>. With a modal the second verb is an infinitive, not a participle: <i>darf ... übernehmen</i>."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["the delegation", "the liability", "the orientation", "the task"]
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["task", "liability", "dressing change", "blood sugar", "country", "consent"]
      },
      {
        q: "Put the words in order.",
        tr: "If you're not sure, you have to ask.",
        why: "<i>Wenn du unsicher bist, musst du nachfragen.</i> The subordinate clause takes first position, so the modal <i>musst</i> comes right after, then <i>du</i> and the infinitive <i>nachfragen</i> at the end."
      },
      {
        q: "Translate (to a new colleague): “You're not allowed to do that on your own yet.”",
        why: "<i>Das darfst du noch nicht allein machen</i>: a prohibition, so <i>nicht dürfen</i>, never <i>nicht müssen</i>. <i>Du darfst das noch nicht allein machen</i> also works."
      },
      {
        q: "A request that is not yours to handle.",
        setting: "A patient's son asks you to give his father a sleeping pill.",
        lines: [
          { tr: "My father sleeps so badly. Just give him a sleeping pill!" },
          { tr: "Say that you can't decide that on your own and that you will talk to the doctor.", answerTr: "I'm not allowed to decide that on my own. I'll talk to the doctor." },
          { tr: "But you're a nurse!" },
          { tr: "Say yes, but medications are only given on a physician's order.", answerTr: "Yes, but medications are only given on a physician's order." },
          { tr: "And when will I hear something?" },
          { tr: "Say that you will call the doctor now and then let him know.", answerTr: "I'll call the doctor now and then let you know." }
        ]
      },
      {
        tr: "No. If you don't feel confident with a task, you have to say so. Then someone will show you how it's done.",
        why: "In <i>sicher</i> the initial <b>s</b> is voiced, like English “z”, and the <b>ch</b> is [ç]; in <i>fühlst</i> the <b>ü</b> is long, an “ee” with rounded lips; in <i>musst</i> the <b>u</b> is short."
      },
      {
        tr: "If you're not sure, you have to ask.",
        why: "In <i>unsicher</i> the stress falls on <b>un</b>; in <i>nachfragen</i> the stress falls on <b>nach</b> and the <b>ch</b> after <b>a</b> is [x], the throaty sound in Scottish “loch”."
      }
    ]
  },
  "lesson:pfl-u09-test": {
    theme: "Final test",
    title: "Final test: German for nursing",
    objectives: [
      "check this unit's passive, adjective endings and Futur I",
      "review the vocabulary of the whole track: admission, vital signs, basic care, pain, medications, handoff, discharge"
    ],
    theory: [
      {
        p: "Twelve questions, the last test of the track: besides this unit, they bring back words and situations from all nine units. The pass mark is 70%. The patients and situations are made up and are only examples: hygiene rules, wound care and how discharge is organized are set by your facility and the physician."
      }
    ],
    exercises: [
      {
        q: "You explain to a patient that they have high blood pressure. Which sentence do you use?",
        opts: ["Sie haben eine Hypertonie.", "Sie haben Bluthochdruck.", "Ihr RR ist erhöht."],
        why: "With the patient you use the everyday word: <b>Bluthochdruck</b>. <i>Hypertonie</i> and the abbreviation <i>RR</i> are fine among colleagues and in the chart."
      },
      {
        q: "Complete: “Ich habe einen ___ Schmerz in der Brust.”",
        hint: "drückend, adjective in front of the noun",
        why: "<b>drückenden</b>: after <i>einen</i>, in the masculine accusative, the adjective takes <b>-en</b>."
      },
      {
        tr: "The Futur I of kontrollieren, all persons.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i> + <b>kontrollieren</b>: only <i>werden</i> is conjugated, the infinitive stays the same and goes to the end of the sentence."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["the infection", "the inflammation", "the pressure ulcer, the bedsore", "the fainting spell"]
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Die Wunde ist leicht gerötet.",
          "Bei Frau Keller wurde ein erhöhter Blutzucker gemessen.",
          "Der Patient hat einen starken Schmerz.",
          "Die Ärztin wurde geinformiert.",
          "Er hat eine geschwollener Knöchel."
        ],
        why: "<i>informiert</i> takes no <i>ge-</i>, because the verb ends in <i>-ieren</i>. <i>Knöchel</i> is masculine: <i>einen geschwollenen Knöchel</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "A multidrug-resistant germ was found in Mr. Brandt, so he is being isolated.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Keim gefunden</i>: Präteritum passive. <i>deshalb <b>wird</b> er isoliert</i>: present passive, and after <i>deshalb</i> the verb comes right away."
      },
      {
        q: "Put the words in order.",
        tr: "The tablets are taken before breakfast.",
        why: "<i>Die Tabletten werden vor dem Frühstück eingenommen.</i> Present passive: <i>werden</i> in second position and the participle <i>eingenommen</i> at the end."
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["patient history", "blood pressure", "medication", "emergency", "care level", "aid, assistive device"]
      },
      {
        q: "Translate (in the chart): “The wound is red and swollen.”",
        why: "<i>Die Wunde ist gerötet und geschwollen</i>: after <i>ist</i> the adjectives take no ending. Short form: <i>Wunde gerötet und geschwollen</i>."
      },
      {
        q: "The discharge conversation.",
        setting: "Mr. Brandt is going home tomorrow and asks you his last questions.",
        lines: [
          { tr: "Which pills do I take at home?" },
          { tr: "Say that it is in his medication plan and that you will explain it to him right away.", answerTr: "It's in your medication plan. I'll explain it to you right away." },
          { tr: "And who'll look at my wound?" },
          { tr: "Say that his family doctor will check it next week.", answerTr: "Your family doctor will check it next week." },
          { tr: "How will I know that something is wrong?" },
          { tr: "Say that if the wound gets red, warm or swollen, he should call his family doctor.", answerTr: "If the wound gets red, warm or swollen, please call your family doctor." }
        ]
      },
      {
        tr: "The wound shows no signs of inflammation.",
        why: "In <i>zeigt</i> the <b>z</b> is [ts] and the final <b>g</b> sounds like [k]; in <i>Zeichen</i> the <b>ch</b> after <b>ei</b> is [ç]; in <i>Entzündung</i> the stress falls on <b>zün</b>."
      },
      {
        tr: "Hands are disinfected before and after every patient contact.",
        why: "In <i>vor</i> the <b>v</b> sounds like [f]; in <i>Patientenkontakt</i> the <b>ti</b> sounds like [tsi]; in <i>desinfiziert</i> the stress falls on <b>ziert</b>."
      }
    ]
  }
});
