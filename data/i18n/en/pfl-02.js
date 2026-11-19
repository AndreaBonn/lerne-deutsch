/* ============================================================
   Learner-language text (en) for data/core/pfl-02.js, unit pfl-u02.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:pfl-u02": {
    title: "Vital signs and readings",
    grammarNote: "the imperative with Sie · separable verbs during a measurement · the comparative for comparing readings · Greek prefixes and the patient's compounds · the passive with werden for reporting and charting"
  },
  "lesson:pfl-u02-l1": {
    theme: "Taking a reading",
    title: "Please roll up your sleeve",
    objectives: [
      "guide the patient through a blood pressure check with the polite imperative",
      "use the separable verbs of measuring: anlegen, ablesen, einatmen, freimachen",
      "tell the patient what you are about to do before you touch them",
      "name the equipment: cuff, blood pressure monitor, thermometer"
    ],
    theory: [
      {
        h: "The polite imperative",
        p: "To give a patient an instruction you use the <strong>imperative with Sie</strong>: the infinitive first, then <em>Sie</em> right after it. <em>Machen Sie bitte den Oberarm frei. Legen Sie den Arm auf den Tisch.</em> The form is the same as a yes/no question; what tells them apart is the falling intonation and the word <em>bitte</em>, which you will almost never leave out on the unit. <em>Bitte</em> can come after <em>Sie</em> or at the start: <em>Bitte sprechen Sie während der Messung nicht.</em> With a reflexive verb there are two pronouns: <em>Setzen Sie sich bitte hin.</em>"
      },
      {
        h: "The separable verbs of measuring",
        p: "Almost everything you say while taking a reading uses a separable verb: <em>anlegen</em> (put the cuff on), <em>ablesen</em> (read the value), <em>einatmen</em> and <em>ausatmen</em> (breathe in, breathe out), <em>freimachen</em> (uncover, roll up the sleeve), <em>sich hinsetzen</em>, <em>sich hinlegen</em>, <em>aufstehen</em>. In the imperative and the present tense the prefix goes <strong>to the end</strong>: <em>Atmen Sie tief ein. Ich lege Ihnen die Manschette an. Ich lese den Wert ab.</em> After a modal the verb stays in one piece, at the end: <em>Muss ich aufstehen?</em>"
      },
      {
        contrast: "English gives instructions with no pronoun at all: “Sit down, please”, “Breathe in”. German always says <em>Sie</em>, after the verb, and a reflexive verb adds <em>sich</em> on top: <em>Setzen Sie sich hin</em>, literally “seat yourself down”. Typical mistakes from English speakers are <em>Setzen Sie hin</em> (no <em>sich</em>) and <em>Sie setzen sich hin</em>, which is a statement, not a request. The good news: English phrasal verbs are a real model for separable verbs. You already say “put the cuff on” and “breathe in”, with the particle at the end. German just makes it compulsory and pushes it to the very end of the clause, however long it is: <em>Ich lege Ihnen jetzt die Manschette an</em>. Drop the <em>an</em> and the sentence is left hanging: <em>Ich lege Ihnen die Manschette</em> only means “I'm laying the cuff down for you”."
      },
      {
        trap: "<em>Der Puls</em> is only the pulse as a heartbeat; the wrist is <em>das Handgelenk</em>: <em>Ich messe den Puls am Handgelenk.</em> Blood pressure, “BP” on a US floor, is <em>der Blutdruck</em>, and you say <em>den Blutdruck messen</em>, not “nehmen”. <em>Die Manschette</em> is the BP cuff, and also a shirt cuff. <em>Den Arm freimachen</em> does not mean “free the arm”: it means uncover it, roll up the sleeve. And <em>die Kurve</em> on the unit is not a curve: it is the patient's vitals chart, the flowsheet."
      },
      {
        tip: "Before you touch the patient, say what you are doing and what they will feel: <em>Ich lege Ihnen jetzt die Manschette an. Sie drückt kurz ein bisschen.</em> A patient who knows what is coming tenses up less, and the reading is more reliable."
      }
    ],
    grammar: {
      title: "Imperative with Sie and separable prefixes",
      note: "Polite imperative: <b>verb + Sie</b>, with <b>bitte</b>. The separable prefix goes <b>to the end</b>. With reflexive verbs: <b>Setzen Sie sich</b>.",
      table: {
        head: ["infinitive", "sentence", "note"],
        rows: [
          ["freimachen", "Machen Sie bitte den Oberarm frei.", "frei at the end"],
          ["sich hinsetzen", "Setzen Sie sich bitte hin.", "reflexive: Sie and sich"],
          ["einatmen", "Atmen Sie tief ein.", "ein at the end"],
          ["anlegen", "Ich lege Ihnen die Manschette an.", "present tense: an at the end"],
          ["sprechen", "Bitte sprechen Sie nicht.", "not separable, nicht at the end"]
        ]
      },
      examples: [
        { tr: "Please roll up your sleeve.", note: "freimachen: frei goes to the end" },
        { tr: "Please sit down and rest your arm on the table.", note: "two imperatives, the first one reflexive" },
        { tr: "I'm putting the cuff on you now.", note: "anlegen in the present: an at the end" },
        { tr: "Please don't talk during the measurement.", note: "bitte first, then the verb" },
        { tr: "Breathe in and out calmly.", note: "einatmen and ausatmen share atmen: say the verb once, then ein und aus" },
        { tr: "I'll read the value right away.", note: "ablesen: ab at the end" }
      ]
    },
    vocab: [
      "the measurement, the reading",
      "to measure, to take (a reading)",
      "blood pressure",
      "the cuff (of a blood pressure monitor)",
      "the blood pressure monitor",
      "the upper arm",
      "the sleeve",
      "the thermometer (for fever)",
      "to put on, to apply (the cuff)",
      "to read (a value on a device)",
      "to breathe in, to inhale",
      "to sit down"
    ],
    dialogue: [
      "Good morning, Mrs. Keller. I'm going to take your blood pressure and your pulse now.",
      "Good morning. Do I need to stand up?",
      "No, please stay seated. Please roll up your left sleeve.",
      "There, is that okay?",
      "Yes, thank you. I'm putting the cuff on you now. It'll squeeze a little for a moment.",
      "No problem.",
      "Please don't talk during the measurement, and keep your arm still.",
      "So, what's the reading?",
      "I'll read it right away and enter it in your chart."
    ],
    culture: {
      title: "A German view: the Kurve",
      text: "<p>On German units, vital signs go into the <i>Kurve</i>, also called the <i>Fieberkurve</i>: the chart where, day by day, you can see the patient's blood pressure, pulse, temperature and other readings. In many hospitals it is electronic now, but the name stuck, and at handover you will often hear <i>Steht in der Kurve</i>, “it's in the chart”.</p><p>How often vitals are taken, and with which device, is set by the physician or by the unit's standard. The values in this unit are round numbers for teaching, not reference ranges: on the unit, your facility's thresholds apply.</p>"
    },
    exercises: [
      {
        q: "You want to ask the patient to roll up her sleeve. Which sentence is correct?",
        opts: [
          "Mach bitte den Oberarm frei.",
          "Machen Sie bitte den Oberarm frei.",
          "Freimachen Sie bitte den Oberarm."
        ],
        why: "With a patient the imperative is <b>verb + Sie</b>: <i>Machen Sie</i>. The prefix <i>frei</i> splits off and goes to the end. The first sentence uses <i>du</i>, which you do not use with an adult patient."
      },
      {
        q: "Complete: “Ich lege Ihnen jetzt die Manschette ___.”",
        hint: "separable prefix of anlegen",
        why: "<b>an</b>: <i>anlegen</i> is separable, so in the present tense the prefix goes to the end of the sentence."
      },
      {
        tr: "The present tense of ablesen, all persons.",
        why: "<i>Lese ab, liest ab, liest ab, lesen ab, lest ab, lesen ab</i>: in the second and third person singular the <b>e</b> becomes <b>ie</b>, and the prefix <i>ab</i> always goes to the end."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["measurement", "cuff", "upper arm", "sleeve", "blood pressure monitor", "blood pressure"]
      },
      {
        q: "Match each verb to its meaning.",
        pairs: ["to breathe in", "to breathe out", "to sit down", "to lie down"]
      },
      {
        q: "Put the words in order.",
        tr: "Please roll up your left sleeve.",
        why: "<i>Machen Sie bitte den linken Oberarm frei.</i> The imperative opens the sentence, then <i>Sie</i>; the prefix <i>frei</i> closes it. <i>Bitte</i> can also go right before <i>frei</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "Please sit down and rest your arm on the table.",
        why: "<i>Setzen Sie sich bitte hin</i>: reflexive imperative with <i>Sie</i> and <i>sich</i>, and the prefix <i>hin</i> at the end."
      },
      {
        q: "Translate: “I'm putting the cuff on you now.”",
        why: "<i>Jetzt lege ich Ihnen die Manschette an</i> or <i>Ich lege Ihnen jetzt die Manschette an</i>. <i>Ihnen</i> is dative (on you), <i>an</i> goes to the end, and <i>jetzt</i> cannot be left out."
      },
      {
        q: "You take a patient's blood pressure.",
        setting: "You walk into Mrs. Keller's room with the blood pressure monitor.",
        lines: [
          { tr: "Good morning. What are you doing with me today?" },
          { tr: "Say that you are going to take her blood pressure now.", answerTr: "I'm going to take your blood pressure now." },
          { tr: "Do I need to lie down?" },
          { tr: "Say no: she should sit down.", answerTr: "No, please sit down." },
          { tr: "Should I take off my sweater?" },
          { tr: "Say no: rolling up the sleeve is enough.", answerTr: "No, just roll up your sleeve." }
        ]
      },
      {
        tr: "I'm going to take your blood pressure now. Please roll up your left sleeve and keep your arm still.",
        why: "In <i>Oberarm</i> the stress is on the first syllable, <b>O</b>; in <i>frei</i> the <b>ei</b> is [aɪ], as in English “eye”; in <i>ruhig</i> the <b>h</b> is silent and the final <b>g</b> is pronounced [ç]."
      },
      {
        tr: "Please don't talk during the measurement.",
        why: "In <i>sprechen</i> the initial <b>sp</b> is [ʃp], “shp”; in <i>während</i> the <b>ä</b> is long, the <b>h</b> is silent and the final <b>d</b> sounds like [t]; in <i>Messung</i> the <b>ss</b> is voiceless."
      }
    ]
  },
  "lesson:pfl-u02-l2": {
    theme: "Numbers on the unit",
    title: "Readings and units",
    objectives: [
      "say blood pressure, pulse, temperature and oxygen saturation out loud with their units",
      "compare two readings with the comparative and als",
      "say that one reading is the same as another with genauso ... wie",
      "report a reading to a coworker together with the comparison to the day before"
    ],
    theory: [
      {
        h: "How to say the readings",
        p: "Blood pressure is written <em>120/80 mmHg</em> and said <em>hundertzwanzig zu achtzig</em>: the slash is read <strong>zu</strong>. The unit, <em>Millimeter Quecksilbersäule</em>, is hardly ever said out loud. Pulse: <em>80 pro Minute</em> or <em>80 Schläge pro Minute</em>. Temperature is in degrees Celsius and uses a decimal comma: <em>37,5 Grad</em> is read <em>siebenunddreißig Komma fünf</em>. Oxygen saturation is a percentage: <em>95 Prozent</em>. To place a reading you often use <em>liegen bei</em>: <em>Der Blutdruck liegt bei 120 zu 80.</em> The numbers in this lesson are round teaching values, not reference ranges."
      },
      {
        h: "The comparative for comparing",
        p: "The comparative is formed with <strong>-er</strong>, and the second term is introduced with <strong>als</strong>: <em>schneller als gestern</em>, <em>niedriger als heute Morgen</em>. Many short adjectives take an umlaut: <em>hoch → höher</em> (and the <b>c</b> drops out), <em>lang → länger</em>, <em>warm → wärmer</em>; <em>langsam</em> does not: <em>langsamer</em>. The superlative after a verb: <em>am höchsten</em>, <em>am niedrigsten</em>. Equality: <em>genauso hoch wie gestern</em>."
      },
      {
        contrast: "The numbers themselves change. A US chart says 98.6 °F, a German <em>Kurve</em> says 37 °C, and 38 °C is about 100.4 °F (rounded, for orientation only); weight is in kilograms, never pounds, and you will not hear “point”: <em>37,5</em> is <em>siebenunddreißig Komma fünf</em>, with a comma where you would write a period. “120 over 80” becomes <em>120 zu 80</em>, and the two numbers are <em>der obere und der untere Wert</em>. The comparative is easier than it looks: like “higher” and “faster”, it is one word with <em>-er</em>. The difference is that German uses <em>-er</em> even on long adjectives, so there is no “more” version: <em>langsamer</em>, <em>niedriger</em>, never <em>mehr langsam</em>. And “than” is <strong>als</strong>, not <em>dann</em> or <em>wie</em>; “as high as” is <em>genauso hoch wie</em>."
      },
      {
        trap: "<em>Schneller wie gestern</em> is heard in casual speech, but in standard German and in the chart the comparison takes <em>als</em>. <em>Am höchsten</em> has the umlaut like <em>höher</em>, while the plain adjective does not: <em>hoch</em>. <em>Erhöht</em> means “elevated, raised” (<em>leicht erhöhte Temperatur</em>, slightly elevated temperature); it is not a verb to conjugate. And for low blood pressure Germans say <em>niedriger Blutdruck</em>; <em>tiefer Blutdruck</em> is mostly Swiss."
      },
      {
        tip: "When you report a reading to a coworker, always add the comparison: <em>130 zu 80, höher als gestern</em>. A number on its own says little; the comparison says whether something is changing."
      }
    ],
    grammar: {
      title: "Comparative and superlative",
      note: "Comparative: <b>-er + als</b>. Short adjectives often take an <b>umlaut</b>. Superlative after a verb: <b>am ...-sten</b>. Equality: <b>genauso ... wie</b>.",
      table: {
        head: ["adjective", "comparative", "superlative"],
        rows: [
          ["hoch", "höher", "am höchsten"],
          ["niedrig", "niedriger", "am niedrigsten"],
          ["schnell", "schneller", "am schnellsten"],
          ["langsam", "langsamer", "am langsamsten"],
          ["gut", "besser", "am besten"]
        ]
      },
      examples: [
        { tr: "Blood pressure is 120 over 80.", note: "liegen bei: the usual way to state a reading" },
        { tr: "The pulse is faster today than yesterday.", note: "schneller als: comparative + als" },
        { tr: "In the evening the temperature is higher than in the morning.", note: "hoch → höher, without the c" },
        { tr: "The second reading is lower than the first.", note: "niedriger als der erste" },
        { tr: "Blood pressure was highest this morning.", note: "superlative after a verb: am höchsten" },
        { tr: "The temperature is just as high as yesterday.", note: "equality: genauso ... wie" }
      ]
    },
    vocab: [
      "the value, the reading",
      "the measured value, the reading",
      "the unit (of measurement)",
      "the pulse, the heart rate",
      "the temperature",
      "the degree (37 Grad: 37 degrees Celsius)",
      "the vitals chart, the flowsheet",
      "high (höher: higher)",
      "low (niedriger: lower)",
      "fast",
      "slow",
      "elevated, raised"
    ],
    dialogue: [
      "I took Mrs. Keller's blood pressure: 130 over 80.",
      "And yesterday?",
      "Yesterday it was lower, 120 over 80. Her pulse is a bit faster today than yesterday, 80 a minute.",
      "And her temperature?",
      "37 degrees, same as yesterday.",
      "Good. Please enter all the readings in the chart.",
      "I'll do it right away."
    ],
    culture: {
      title: "A German view: RR, an Italian name",
      text: "<p>In German charting, blood pressure is often written <i>RR</i>: <i>RR 120/80</i>. The two letters stand for <i>Riva-Rocci</i>, the Italian physician Scipione Riva-Rocci, who introduced the cuff sphygmomanometer at the end of the 19th century. Where a US chart says <i>BP</i>, a German one says <i>RR</i>, and at handover you will hear <i>Wie war der RR?</i> Nobody says “BP” out loud on a German unit.</p><p>A practical tip: abbreviations vary from unit to unit. When you find a new one in the <i>Kurve</i>, ask what it means instead of guessing.</p>"
    },
    exercises: [
      {
        q: "You want to say “The pulse is faster today than yesterday”. Which sentence is correct?",
        opts: [
          "Der Puls ist heute schnell als gestern.",
          "Der Puls ist heute schneller als gestern.",
          "Der Puls ist heute mehr schnell als gestern."
        ],
        why: "The comparative is a single word, <b>schneller</b>, and the second term is introduced with <b>als</b>."
      },
      {
        tr: "The present tense of messen, all persons.",
        why: "<i>Messe, misst, misst, messen, messt, messen</i>: in the second and third person singular the <b>e</b> becomes <b>i</b>, and in <i>du misst</i> the ending <i>-st</i> merges with the <b>ss</b> of the stem: no “missst”."
      },
      {
        q: "Complete: “Am Abend ist die Temperatur ___ als am Morgen.”",
        hint: "comparative of hoch",
        why: "<b>höher</b>: <i>hoch</i> takes an umlaut and loses the <b>c</b>."
      },
      {
        q: "Complete with the comparative and the superlative.",
        tr: "The second reading is lower than the first, but blood pressure was highest this morning.",
        why: "<i>niedriger als der erste</i>: comparative + <i>als</i>. <i>am höchsten</i>: superlative after the verb <i>sein</i>."
      },
      {
        q: "Match each comparative to its meaning.",
        pairs: ["higher", "lower", "faster", "slower"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["value", "reading", "unit", "pulse", "temperature", "vitals chart"]
      },
      {
        q: "Put the words in order.",
        tr: "The pulse is faster today than yesterday.",
        why: "<i>Der Puls ist heute schneller als gestern.</i> The verb <i>ist</i> in second position, the comparison with <i>als</i> at the end."
      },
      {
        q: "Translate: “Today the temperature is higher than yesterday.”",
        why: "<i>Heute ist die Temperatur höher als gestern</i> or <i>Die Temperatur ist heute höher als gestern</i>. If you start with <i>heute</i>, the verb stays in second position and the subject follows it."
      },
      {
        q: "A coworker asks you for Mrs. Keller's readings.",
        setting: "You have just taken her blood pressure, pulse and temperature.",
        lines: [
          { tr: "What was her blood pressure this morning?" },
          { tr: "Answer: 130 over 80, higher than yesterday.", answerTr: "It was 130 over 80, higher than yesterday." },
          { tr: "And her pulse?" },
          { tr: "Answer: a bit faster than yesterday, 80 a minute.", answerTr: "A bit faster than yesterday, 80 a minute." },
          { tr: "And her temperature?" },
          { tr: "Answer: same as yesterday, 37 degrees.", answerTr: "Same as yesterday, 37 degrees." }
        ]
      },
      {
        tr: "Yesterday blood pressure was lower. Today the pulse is a bit faster, and the temperature is just as high as yesterday.",
        why: "In <i>niedriger</i> the <b>ie</b> is a long <b>i</b>, as in “need”; in <i>schneller</i> the <b>sch</b> is [ʃ]; in <i>genauso</i> the stress falls on <b>nau</b>."
      },
      {
        tr: "The pulse is faster today than yesterday.",
        why: "In <i>Puls</i> the <b>u</b> is short; in <i>heute</i> the <b>eu</b> is [ɔʏ], close to “oy”; in <i>gestern</i> the <b>st</b> in the middle of the word is [st], not [ʃt]."
      }
    ]
  },
  "lesson:pfl-u02-l3": {
    theme: "Two registers",
    title: "Fever, pulse and blood sugar",
    objectives: [
      "recognize the clinical terms for vital signs with the Greek prefixes hyper-, hypo-, tachy-, brady-",
      "turn each clinical term into the word the patient uses",
      "understand how the patient's compounds are built: Blutzucker, Unterzuckerung, Herzrasen",
      "report to the physician that a reading is lower or higher than the previous one"
    ],
    theory: [
      {
        h: "The Greek prefixes of vital signs",
        p: "The Fachsprache of vital signs is built from a few Greek pieces: <em>Hyper-</em> (above) and <em>Hypo-</em> (below), <em>Tachy-</em> (fast) and <em>Brady-</em> (slow), plus the part that says what it is about: <em>-kardie</em> the heart, <em>-tonie</em> the blood pressure, <em>-glykämie</em> sugar in the blood. So <em>Tachykardie</em>, <em>Bradykardie</em>, <em>Hypotonie</em>, <em>Hypoglykämie</em>, <em>Hyperglykämie</em>. German spells them with <b>k</b> and <b>ä</b> where English has <b>c</b> and <b>e</b>: <em>Tachykardie</em>, not “Tachycardia”; <em>Hypoglykämie</em>, not “Hypoglycemia”."
      },
      {
        h: "The patient's words",
        p: "The Laiensprache uses compounds and derived words. <em>Blut + Zucker</em> = <em>der Blutzucker</em>; <em>Sauerstoff + Sättigung</em> = <em>die Sauerstoffsättigung</em>; <em>unter + Zucker + -ung</em> = <em>die Unterzuckerung</em>, feminine because of <em>-ung</em>. <em>Das Herzrasen</em> is an infinitive used as a noun (<em>rasen</em>, to race), and that is why it is neuter. Some patient words are not compounds but adjective + noun: <em>der langsame Puls</em>, <em>der niedrige Blutdruck</em>, <em>der hohe Blutzucker</em>. And with readings the comparative comes back: <em>niedriger als heute Morgen</em>."
      },
      {
        contrast: "In a US hospital you write “tachycardic” or “hypotensive” in the chart, but out loud you often say “her heart rate's high”, “his pressure's low”, even to the physician. On a German unit the Latin and Greek terms are <strong>spoken</strong>: at handover you will hear <em>Er war heute Nacht tachykard</em> and <em>Sie ist hypoton</em>, said in full, with German stress on the last syllable: <em>Tachykar<b>die</b></em>, <em>Hypoto<b>nie</b></em>. US shorthand like “tachy”, “brady”, “hypo” does not carry over. The patient's side is closer to English than you might expect: <em>Blutzucker</em> is literally “blood sugar”, <em>Unterzuckerung</em> is what a US patient calls “low blood sugar” or “a low”, and <em>Herzrasen</em> is a “racing heart”. What you have to learn is to switch: <em>Tachykardie</em> to the physician, <em>Herzrasen</em> to the patient."
      },
      {
        trap: "<em>Hypotonie</em> on the unit is low blood pressure, that is <b>hypotension</b>, not hypotonia, the low muscle tone of English: German uses <em>-tonie</em> where English uses “-tension”, and the same goes for <em>Hypertonie</em>, which is hypertension. <em>Hyperthermie</em> is not a fancy word for fever: in German medical language it means the body overheating, for example after heatstroke, while fever is <em>Fieber</em> even in charting (<em>febril</em>, “febrile”). And <em>Herzrasen</em> is not <em>Herzklopfen</em>: the first is a racing heart, the second a pounding heart you can feel, palpitations."
      },
      {
        tip: "If the patient says <em>Ich habe Unterzucker</em> or <em>Mir ist so zittrig</em>, check and report right away: <em>Ich messe kurz Ihren Blutzucker</em>, then give the physician the reading with the comparison. What happens next is decided by the physician or by the unit's written standard."
      }
    ],
    grammar: {
      title: "Vital signs: Fachsprache and Laiensprache",
      note: "With physicians and in charting, the <b>Fachsprache</b> column; with patients and family, the <b>Laiensprache</b> column. Compounds take the article of their <b>last element</b>; an infinitive used as a noun is <b>neuter</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "English"],
        rows: [
          ["die Tachykardie", "das Herzrasen", "tachycardia"],
          ["die Bradykardie", "der langsame Puls", "bradycardia"],
          ["die Hypotonie", "der niedrige Blutdruck", "hypotension"],
          ["die Hyperthermie; das Fieber", "das Fieber", "hyperthermia; fever"],
          ["die Hypoglykämie", "die Unterzuckerung", "hypoglycemia"],
          ["die Hyperglykämie", "der hohe Blutzucker", "hyperglycemia"],
          ["die Sauerstoffsättigung", "der Sauerstoffwert", "oxygen saturation"]
        ]
      },
      examples: [
        { tr: "The patient has tachycardia.", note: "Fachsprache: to the physician or in charting" },
        { tr: "Do you sometimes feel your heart racing?", note: "the same thing said to the patient" },
        { tr: "The patient had a hypoglycemic episode during the night.", note: "a handover phrase" },
        { tr: "When you have low blood sugar, your blood sugar is too low.", note: "unter + Zucker + -ung: feminine" },
        { tr: "Oxygen saturation is lower than this morning.", note: "comparative to report a change" },
        { tr: "From 38 degrees up, people usually speak of fever.", note: "teaching threshold: your facility's standard decides" }
      ]
    },
    vocab: [
      "vital signs",
      "fever",
      "hyperthermia (clinical term, not fever)",
      "tachycardia (clinical term)",
      "a racing heart (the patient's word)",
      "bradycardia (clinical term)",
      "hypotension (clinical term)",
      "blood sugar, blood glucose",
      "hypoglycemia (clinical term)",
      "low blood sugar (the patient's word)",
      "hyperglycemia (clinical term)",
      "oxygen saturation"
    ],
    dialogue: [
      "Mr. Lang, I'm just going to check your blood sugar. It's a little prick in your finger.",
      "I'm a bit shaky, and I'm sweating.",
      "The reading is lower than this morning. I'll let the doctor know right away.",
      "Dr. Weber, Mr. Lang is shaky and sweating. His blood sugar is at 60, I suspect hypoglycemia.",
      "Thanks. I'm coming right now.",
      "Nurse, what's a “Hypoglykämie”?",
      "It means your sugar is too low. Your blood sugar is too low. The doctor will be here in a moment."
    ],
    culture: {
      title: "A German view: mg/dl or mmol/l",
      text: "<p>In Germany blood sugar is measured in two units: <i>mg/dl</i> (milligrams per deciliter), the same unit as the mg/dL you know from US charts, and <i>mmol/l</i> (millimoles per liter), which is common in Europe. Which one you see depends on the facility and the glucose meter; 1 mmol/l is about 18 mg/dl. So a 60 and a 3,3 can mean the same reading, and that is why you always say the unit at handover and on the phone.</p><p>The 60 in the dialogue is in mg/dl and is a round number for teaching. What counts as too low or too high, and what happens next, is set by the physician and the unit's written standard; the nurse measures, reports and documents.</p>"
    },
    exercises: [
      {
        q: "Match each clinical term to the word the patient uses.",
        pairs: ["das Herzrasen", "der langsame Puls", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "You are talking to the patient and want to know if they have tachycardia. Which sentence fits?",
        opts: [
          "Haben Sie eine Tachykardie?",
          "Haben Sie Herzrasen?",
          "Besteht bei Ihnen eine Tachykardie?"
        ],
        why: "With the patient you use the Laiensprache: <b>Herzrasen</b>. The other two are correct, but they are sentences for a physician or for the chart."
      },
      {
        q: "Which words are suitable for the patient?",
        opts: ["die Unterzuckerung", "die Hypoglykämie", "das Herzrasen", "die Tachykardie", "der niedrige Blutdruck", "die Hypotonie"],
        why: "<i>Unterzuckerung</i>, <i>Herzrasen</i> and <i>niedriger Blutdruck</i> are everyday German words. <i>Hypoglykämie</i>, <i>Tachykardie</i> and <i>Hypotonie</i> are clinical terms."
      },
      {
        q: "The physician wrote “Hypoglykämie”. Complete for the patient: “Sie hatten eine ___.”",
        hint: "unter + Zucker + -ung",
        why: "<b>Unterzuckerung</b>, feminine because of the suffix <i>-ung</i>: that is why it is <i>eine</i>."
      },
      {
        q: "Choose the article: in compounds the last element decides.",
        items: ["fever", "racing heart (Rasen)", "blood sugar (Zucker)", "low blood sugar (-ung)", "oxygen saturation (Sättigung)", "tachycardia (clinical term)"]
      },
      {
        q: "Complete: to the physician, the comparison first, then the clinical term.",
        tr: "Blood sugar is lower than this morning, I suspect hypoglycemia.",
        why: "<i>niedriger als heute Morgen</i>: comparative + <i>als</i>. To the physician the clinical term, <i>Hypoglykämie</i>; to the patient you would say <i>Unterzuckerung</i>."
      },
      {
        q: "Put the words in order.",
        tr: "From 38 degrees up, people usually speak of fever.",
        why: "<i>Ab 38 Grad spricht man meistens von Fieber.</i> <i>Ab 38 Grad</i> first, the verb <i>spricht</i> in second position. The 38 is a teaching threshold: on the unit your facility's standard applies."
      },
      {
        q: "Translate for the patient, with the everyday German word: “Do you have tachycardia?”",
        why: "<i>Haben Sie Herzrasen?</i> No article, like <i>Haben Sie Fieber?</i> You do not say <i>Tachykardie</i> to the patient."
      },
      {
        q: "The physician wrote “Hypotonie”. Complete for the patient: “Ihr Blutdruck ist zu ___.”",
        hint: "the opposite of hoch",
        why: "<b>niedrig</b>: <i>Hypotonie</i> is low blood pressure, hypotension. Careful: it is not muscle hypotonia."
      },
      {
        tr: "The patient has tachycardia. To her I just say: you have a racing heart.",
        why: "In <i>Tachykardie</i> the stress falls on the final <b>die</b>, the <b>ch</b> is [x] and the <b>y</b> sounds like <b>ü</b>; in <i>Herzrasen</i> the <b>z</b> is [ts] and the <b>s</b> between two vowels is voiced [z]."
      },
      {
        tr: "I'm just going to check your blood sugar.",
        why: "In <i>Blutzucker</i> the <b>u</b> in <i>Blut</i> is long and the one in <i>Zucker</i> short, and the <b>z</b> is [ts], never the English “z”; in <i>kurz</i> the <b>r</b> is barely heard."
      }
    ]
  },
  "lesson:pfl-u02-l4": {
    theme: "Reporting",
    title: "Reporting an abnormal reading",
    objectives: [
      "use the passive with werden to describe unit procedures",
      "form the past participle of -ieren verbs and of verbs with an inseparable prefix without ge-",
      "report an abnormal reading by phone to the physician or the nurse manager, with the comparison and the patient's condition",
      "read back and document what the physician orders, without deciding on your own"
    ],
    theory: [
      {
        h: "The passive of procedures",
        p: "When what matters is what gets done and not who does it, you use the <strong>passive with werden</strong>: conjugated <em>werden</em> in second position, the participle at the end. <em>Der Blutdruck wird zweimal am Tag gemessen. Alle Werte werden in der Kurve dokumentiert. Ein auffälliger Wert wird sofort gemeldet.</em> The object of the active sentence becomes the subject: <em>Ich melde den Wert</em> → <em>Der Wert wird gemeldet</em>. Who does it is added only if needed, with <em>von</em> + dative."
      },
      {
        h: "Participles without ge-",
        p: "Many unit verbs <strong>do not take ge-</strong>. Verbs in <em>-ieren</em>: <em>dokumentiert</em>, <em>kontrolliert</em>, <em>informiert</em>. Verbs with an inseparable prefix (<em>be-, ver-</em>, inseparable <em>über-</em>): <em>überwacht</em>, <em>überprüft</em>, <em>benachrichtigt</em>. Separable verbs put <em>ge-</em> in the middle: <em>nachmessen</em> → <em>nachgemessen</em>, <em>eintragen</em> → <em>eingetragen</em>. <em>Gedokumentiert</em> and <em>geüberwacht</em> do not exist."
      },
      {
        contrast: "English builds the passive with “be”: “the value is reported”. German has two passives, and the one you need is the one with <em>werden</em>: <em>der Wert wird gemeldet</em>. If you translate “is” word for word you get <em>der Wert ist gemeldet</em>, which describes a state: “has already been reported”. For a procedure you need <em>wird</em>; think of the English “gets reported”. Charting vocabulary, on the other hand, will feel familiar: <em>Die Patientin ist hypoton und tachykard</em> is exactly “hypotensive and tachycardic”. These adjectives are fine with the physician and in the <em>Kurve</em>; with the patient you switch back to the Laiensprache. The order of a phone report will remind you of SBAR, and that habit carries over well."
      },
      {
        trap: "<em>Melden</em> means to report, to notify whoever needs to know; <em>sich melden</em> is “to get in touch” or “to answer” (<em>Ich melde mich später</em>, I'll get back to you). <em>Kontrollieren</em> is a false friend: it means to check, to recheck a reading, not to control; keeping a patient under observation over time is <em>überwachen</em>, to monitor. Watch the cases: <em>Ich informiere den Arzt</em> takes the accusative, but <em>Ich sage dem Arzt Bescheid</em> takes the dative. And <em>die Stationsleitung</em> is the nurse manager of the unit, not “station management”."
      },
      {
        tip: "On the phone, always follow the same order: who you are and which unit, which patient and which room, the reading with the comparison, how the patient is doing, what you have already done (<em>Ich habe zweimal gemessen</em>). Then read back what the physician orders and write it in the <em>Kurve</em>. Which readings must be reported is set by your facility's standard; the nurse's job is to report them, not to correct them on her own."
      }
    ],
    grammar: {
      title: "The passive with werden",
      note: "Conjugated <b>werden</b> in second position, <b>participle at the end</b>. No <b>ge-</b> on <b>-ieren</b> verbs and verbs with an inseparable prefix.",
      table: {
        head: ["active", "passive", "note"],
        rows: [
          ["Wir messen den Blutdruck.", "Der Blutdruck wird gemessen.", "messen → gemessen"],
          ["Ich dokumentiere die Werte.", "Die Werte werden dokumentiert.", "-ieren: no ge-"],
          ["Wir überwachen den Patienten.", "Der Patient wird überwacht.", "inseparable über-: no ge-"],
          ["Ich melde den Wert.", "Der Wert wird gemeldet.", "the object becomes the subject"]
        ]
      },
      examples: [
        { tr: "Blood pressure is taken twice a day.", note: "wird + participle at the end" },
        { tr: "All readings are documented in the chart.", note: "plural: werden; dokumentiert without ge-" },
        { tr: "An abnormal reading is reported right away.", note: "the unit rule, in the passive" },
        { tr: "The physician is informed.", note: "informiert: an -ieren verb" },
        { tr: "After ten minutes the reading is rechecked.", note: "noch einmal: “again”" },
        { tr: "The patient is closely monitored.", note: "überwacht: inseparable prefix" }
      ]
    },
    vocab: [
      "abnormal, conspicuous, standing out",
      "to report, to notify",
      "to document, to chart",
      "to check, to recheck",
      "to inform (takes the accusative)",
      "to monitor, to keep under observation",
      "the nurse manager of the unit",
      "the unit physician, the attending on the unit",
      "the respiratory rate",
      "the normal range",
      "the threshold, the cutoff value",
      "the deviation"
    ],
    dialogue: [
      "Dr. Weber, this is Elena Marin on Unit 3. I'm calling about Mrs. Keller, Room 12.",
      "Yes, what's going on?",
      "Her blood pressure is 90 over 60. This morning it was 130 over 80. Her pulse is 110.",
      "How is she doing?",
      "She's dizzy, otherwise she's awake and oriented. I took it twice.",
      "Okay, I'll be right there. Please check her blood pressure every fifteen minutes.",
      "Will do. The readings are being documented in the chart."
    ],
    culture: {
      title: "A German view: who decides and who reports",
      text: "<p>On a German unit, treatment starts from an <i>ärztliche Anordnung</i>, the physician's order, or from a written standard approved by the facility. When a reading falls outside the set limits, the nurse reports it to the unit physician or, at night, to the physician on call, and informs the <i>Stationsleitung</i> or whoever is in charge of the shift.</p><p>Some hospitals use early warning scores, which add up several vital signs and tell you from what point to call the physician. The thresholds vary from facility to facility: the numbers in this unit are round and only serve to practice the language.</p>"
    },
    exercises: [
      {
        q: "You want to write “Every reading is documented”. Which sentence is correct?",
        opts: [
          "Jeder Wert wird dokumentiert.",
          "Jeder Wert ist dokumentiert worden wird.",
          "Jeder Wert wird gedokumentiert."
        ],
        why: "Passive with <b>wird</b> + participle at the end. Verbs in <b>-ieren</b> do not take <i>ge-</i>: <i>dokumentiert</i>."
      },
      {
        q: "Which passive sentences are correct?",
        opts: [
          "Der Blutdruck wird zweimal am Tag gemessen.",
          "Der Blutdruck wird zweimal am Tag gemesst.",
          "Die Ärztin wird sofort informiert.",
          "Die Ärztin wird sofort geinformiert.",
          "Ein auffälliger Wert wird gemeldet."
        ],
        why: "<i>messen</i> has the strong participle <i>gemessen</i>; <i>informieren</i> ends in <i>-ieren</i> and takes no <i>ge-</i>; <i>melden</i> gives <i>gemeldet</i>."
      },
      {
        q: "Complete: “Ein auffälliger Wert wird sofort ___.”",
        hint: "participle of melden",
        why: "<b>gemeldet</b>: a regular verb, <i>ge-</i> + stem + <i>-et</i>, at the end of the sentence."
      },
      {
        q: "Complete the passive sentence.",
        tr: "The respiratory rate is checked every hour.",
        why: "<i>Die Atemfrequenz wird jede Stunde kontrolliert</i>: <i>wird</i> in second position, the participle at the end. <i>überprüft</i> is also fine: <i>über-</i> is inseparable here, so no <i>ge-</i>."
      },
      {
        q: "Put the words in order.",
        tr: "The nurse manager is informed right away.",
        why: "<i>Die Stationsleitung wird sofort informiert.</i> <i>Wird</i> in second position, the participle <i>informiert</i>, without <i>ge-</i>, at the end."
      },
      {
        q: "Translate: “After ten minutes the reading is rechecked.”",
        why: "<i>Der Wert wird nach zehn Minuten noch einmal kontrolliert</i>. The “re-” of “rechecked” becomes <i>noch einmal</i> or <i>erneut</i>, and must not get lost; <i>noch einmal gemessen</i> and the order with <i>Nach zehn Minuten</i> first are also fine."
      },
      {
        q: "Match each charting adjective to its meaning.",
        pairs: ["with a fast pulse (tachycardic)", "with a slow pulse (bradycardic)", "with low blood pressure (hypotensive)", "with a fever (febrile)"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["nurse manager", "unit physician", "respiratory rate", "normal range", "threshold", "deviation"]
      },
      {
        q: "You call the physician about an abnormal reading.",
        setting: "You have taken Mrs. Keller's blood pressure twice: it is much lower than this morning.",
        lines: [
          { tr: "Weber, internal medicine. What's going on?" },
          { tr: "Say who you are and which patient you are calling about.", answerTr: "This is Elena Marin on Unit 3. I'm calling about Mrs. Keller." },
          { tr: "What's happening?" },
          { tr: "Report that her blood pressure is lower than this morning: 90 over 60.", answerTr: "Her blood pressure is lower than this morning: 90 over 60." },
          { tr: "Okay, I'm coming. Please check her blood pressure every fifteen minutes." },
          { tr: "Confirm and say that the readings are being documented in the chart.", answerTr: "Will do. The readings are being documented in the chart." }
        ]
      },
      {
        tr: "Mrs. Keller's blood pressure is lower than this morning. The reading is reported right away to the unit physician.",
        why: "In <i>Stationsarzt</i> the initial <b>st</b> is [ʃt] and the <b>ti</b> in <i>Station</i> is read [tsi]; in <i>gemeldet</i> the final <b>d</b> sounds like [t]."
      },
      {
        tr: "An abnormal reading is reported right away.",
        why: "In <i>auffälliger</i> the <b>au</b> is [aʊ], as in “how”, and the <b>ä</b> is short; in <i>sofort</i> the stress falls on the second syllable, <b>fort</b>; in <i>wird</i> the <b>w</b> is read [v]."
      }
    ]
  },
  "lesson:pfl-u02-test": {
    theme: "Review",
    title: "Test: Vital signs and readings",
    objectives: [
      "check the imperative with Sie and separable verbs, the comparative of readings, the passive with werden and the Fachsprache / Laiensprache pairs"
    ],
    theory: [
      {
        p: "Eleven questions on the whole unit. You pass with 70%. The readings are round numbers for teaching: on the unit, your facility's thresholds and protocol apply, and an abnormal reading is always reported to the physician."
      }
    ],
    exercises: [
      {
        q: "You want to ask the patient to lie down. Which sentence is correct?",
        opts: ["Legen Sie sich bitte hin.", "Hinlegen Sie sich bitte.", "Legen Sie bitte hin."],
        why: "Imperative with <b>Sie</b>, the reflexive <b>sich</b> and the prefix <b>hin</b> at the end. The third sentence drops <i>sich</i>."
      },
      {
        q: "Complete: “Atmen Sie bitte tief ___.”",
        hint: "prefix of einatmen",
        why: "<b>ein</b>: <i>einatmen</i> is separable, so in the imperative the prefix goes to the end."
      },
      {
        q: "Complete: “Heute ist der Puls ___ als gestern.”",
        hint: "comparative of langsam",
        why: "<b>langsamer</b>: <i>langsam</i> takes no umlaut, just <i>-er</i>."
      },
      {
        tr: "The present tense of anlegen, all persons.",
        why: "<i>Lege an, legst an, legt an, legen an, legt an, legen an</i>: a regular, separable verb, with <i>an</i> always at the end."
      },
      {
        q: "Match each clinical term to the word the patient uses.",
        pairs: ["das Herzrasen", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "Which passive sentences are correct?",
        opts: [
          "Der Wert wird dokumentiert.",
          "Der Wert wird gedokumentiert.",
          "Die Ärztin wird informiert.",
          "Der Puls wird gemesst.",
          "Die Sättigung wird am Finger gemessen."
        ],
        why: "<i>dokumentiert</i> and <i>informiert</i> are <i>-ieren</i> verbs, without <i>ge-</i>; the participle of <i>messen</i> is <i>gemessen</i>."
      },
      {
        q: "Complete with the comparative and the passive.",
        tr: "Blood sugar is lower than this morning. The reading is reported right away.",
        why: "<i>niedriger als heute Morgen</i>, then the passive: <i>Der Wert wird sofort gemeldet</i>."
      },
      {
        q: "Put the words in order.",
        tr: "Please roll up your sleeve.",
        why: "<i>Machen Sie bitte den Oberarm frei.</i> Imperative first, <i>Sie</i> right after, the prefix <i>frei</i> at the end."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["cuff", "pulse", "fever", "low blood sugar (the patient's word)", "respiratory rate", "threshold"]
      },
      {
        tr: "I'm going to take your blood pressure now. Please don't talk during the measurement.",
        why: "In <i>Blutdruck</i> the <b>u</b> in <i>Blut</i> is long and the one in <i>Druck</i> short; in <i>jetzt</i> the <b>j</b> is [j], like the English “y”; in <i>während</i> the <b>h</b> is silent."
      },
      {
        tr: "Blood pressure is lower than this morning.",
        why: "In <i>niedriger</i> the <b>ie</b> is a long <b>i</b>; in <i>Morgen</i> the <b>r</b> after the vowel is barely heard; in <i>heute</i> the <b>eu</b> is [ɔʏ]."
      }
    ]
  }
});
