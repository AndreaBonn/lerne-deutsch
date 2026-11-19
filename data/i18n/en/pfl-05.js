/* ============================================================
   Learner-language text (en) for data/core/pfl-05.js, unit pfl-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:pfl-u05": {
    title: "Medications and package inserts",
    grammarNote: "compounds and routes of administration · vor, nach, mit, seit, zu with the dative · clauses with wenn and falls · the passive with werden and with a modal"
  },
  "lesson:pfl-u05-l1": {
    theme: "Forms and routes",
    title: "Tablets, drops, injections",
    objectives: [
      "name the most common dosage forms with their article",
      "state the route of administration in Fachsprache and in words a patient understands",
      "build compounds like Schmerztablette and Augentropfen",
      "tell the patient what they are getting, without going into the treatment"
    ],
    theory: [
      {
        h: "Dosage forms",
        p: "On the unit you name only a handful of forms every day: <em>die Tablette</em> (tablet, pill), <em>die Kapsel</em> (capsule), <em>der Tropfen</em> (drop, almost always plural, <em>die Tropfen</em>), <em>der Saft</em> (syrup, liquid), <em>die Salbe</em> (ointment), <em>das Zäpfchen</em> (suppository), <em>die Spritze</em> and <em>die Infusion</em>. German builds compounds from them freely, and <strong>the last element decides the article</strong>: <em>der Schmerz + die Tablette</em> = <em>die Schmerztablette</em>; <em>das Auge + die Tropfen</em> = <em>die Augentropfen</em>; <em>der Husten + der Saft</em> = <em>der Hustensaft</em>."
      },
      {
        h: "Routes of administration",
        p: "In the chart and with the physician you say <em>oral</em>, <em>subkutan</em> (short <em>s.c.</em>) and <em>intravenös</em> (<em>i.v.</em>). To the patient you say where the medication goes: <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. The prepositions take the accusative because they show direction: the medication goes <em>unter die Haut</em>, it does not sit <em>unter der Haut</em>. The technical noun is <em>die Applikation</em>; on the unit people more often say <em>die Gabe</em>: <em>Die nächste Gabe ist um acht Uhr.</em>"
      },
      {
        contrast: "In the US you chart and say <em>PO</em>, <em>subQ</em> and <em>IV</em>, and you say them out loud even at the bedside: “I'm starting your IV”, “this one goes subQ”. Patients know “IV” as an everyday word. German has no such spoken abbreviations for patients: <em>i.v.</em> and <em>s.c.</em> live in the chart, and nobody says “PO” at all (German charts write <em>p.o.</em> or <em>oral</em>). Latin-based <em>oral</em>, <em>subkutan</em> and <em>intravenös</em> are as opaque to many German patients as “subcutaneous” is to many Americans. So with the patient, always switch to the phrase with a preposition: <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. The same goes for <em>die Injektion</em>: that is the technical word, the patient's word is <em>die Spritze</em>, roughly like “shot”. With the physician and at handoff the technical register is normal: <em>Die Applikation ist subkutan.</em>"
      },
      {
        trap: "<em>Die Spritze</em> means both the syringe and the shot. <em>Die Tablette</em> is feminine, <em>der Tropfen</em> masculine, <em>das Zäpfchen</em> neuter: English gives you no clue, so learn each noun with its article. <em>Das Zäpfchen</em> is the suppository, but also the uvula: context decides. An IV drip is <em>die Infusion</em>; many patients say <em>der Tropf</em> (<em>Ich hänge am Tropf</em>, “I'm on a drip”), which is not the drop. Watch the linking letter in compounds: <em>Augentropfen</em>, not “Augetropfen”. And <em>der Saft</em> is juice in a café but syrup or oral liquid on the medication cart."
      },
      {
        tip: "When you bring a medication, always say how to take it in one simple sentence: <em>Die schlucken Sie bitte mit etwas Wasser.</em> If the patient asks something you are not sure of (can I chew it? can I dissolve it?), do not improvise: <em>Das weiß ich nicht genau. Ich frage in der Apotheke nach.</em> All drug names in this unit, like <em>Dolorex</em> and <em>Cardiomin</em>, are made up."
      }
    ],
    grammar: {
      title: "Forms, compounds and routes",
      note: "In compounds the article comes from the <b>last element</b>. For the route: <b>Fachsprache</b> in the chart, the phrase with a <b>preposition</b> for the patient.",
      table: {
        head: ["Fachsprache", "for the patient", "English"],
        rows: [
          ["oral", "über den Mund", "by mouth, PO"],
          ["subkutan (s.c.)", "unter die Haut", "subcutaneous, subQ"],
          ["intravenös (i.v.)", "in die Vene", "intravenous, IV"],
          ["die Injektion", "die Spritze", "the injection, the shot"],
          ["die Applikation", "die Gabe", "the administration, the dose given"]
        ]
      },
      examples: [
        { tr: "This is a pain pill.", note: "Schmerz + Tablette: die, because of Tablette" },
        { tr: "Dolorex comes as tablets and as drops.", note: "Dolorex is a made-up name; es gibt + accusative" },
        { tr: "You get the shot under the skin.", note: "unter die Haut: direction, so accusative" },
        { tr: "The IV goes into the vein.", note: "in die Vene: the phrase for the patient" },
        { tr: "The route is oral, that is, by mouth.", note: "first the technical term, then the explanation" },
        { tr: "The eye drops are in the fridge.", note: "Auge + n + Tropfen: linking letter" }
      ]
    },
    vocab: [
      "the tablet, the pill",
      "the capsule",
      "the drop (usually plural: die Tropfen)",
      "the syringe, the shot",
      "the infusion, the IV drip",
      "the ointment",
      "the suppository",
      "oral, by mouth (technical term)",
      "subcutaneous (technical term)",
      "intravenous (technical term)",
      "the administration (technical term)",
      "the administration, the dose given (unit word)"
    ],
    dialogue: [
      "Good morning, Mrs. Kühn. I'm bringing you your medications.",
      "What is all this?",
      "This is Cardiomin, a tablet. Please swallow it with a little water.",
      "And the little bottle?",
      "Those are eye drops. They go in your eye, not in your mouth.",
      "Am I getting a shot today too?",
      "Yes, this evening you'll get a shot under the skin.",
      "Does it hurt?",
      "Just a little pinch."
    ],
    exercises: [
      {
        q: "The physician wrote “subkutan”. How do you say it to the patient?",
        opts: ["in die Vene", "unter die Haut", "über den Mund"],
        why: "<i>Subkutan</i> means “under the skin”: to the patient you say <b>unter die Haut</b>, with the accusative because the medication goes there."
      },
      {
        q: "Match each technical term with the phrase for the patient.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Spritze"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["tablet", "capsule", "drop", "shot, syringe", "suppository", "ointment"]
      },
      {
        q: "Fill in a compound word: “Eine Tablette gegen Schmerzen ist eine ___.”",
        hint: "Schmerz + Tablette",
        why: "<b>Schmerztablette</b>, feminine like <i>Tablette</i>, the last element of the compound."
      },
      {
        q: "Which forms are taken by mouth?",
        opts: ["die Tablette", "die Kapsel", "das Zäpfchen", "die Infusion", "der Saft"],
        why: "Tablet, capsule and syrup go <i>über den Mund</i>. The suppository does not, and the infusion goes <i>in die Vene</i>."
      },
      {
        q: "Fill in: first the technical term, then the word for the patient.",
        tr: "The infusion is intravenous, that is, it goes into the vein.",
        why: "<i>Die Infusion läuft intravenös, also in die Vene</i>: <i>also</i> introduces the explanation for the patient."
      },
      {
        q: "Put the words in order.",
        tr: "You get the shot under the skin.",
        why: "<i>Die Spritze bekommen Sie unter die Haut.</i> The object comes first, the verb <i>bekommen</i> is in second position, then the subject <i>Sie</i>."
      },
      {
        q: "Translate: “The drops are for the eyes.”",
        why: "<i>Die Tropfen sind für die Augen.</i> <i>Für</i> takes the accusative, and the plural <i>die Augen</i> stays the same."
      },
      {
        q: "A patient asks about her medications.",
        setting: "You are bringing Mrs. Kühn her morning medications.",
        lines: [
          { tr: "Ms. Marin, how do I get the shot?" },
          { tr: "Answer that she gets it under the skin.", answerTr: "You get the shot under the skin." },
          { tr: "And what's in the little bottle?" },
          { tr: "Answer that they are eye drops.", answerTr: "Those are eye drops." },
          { tr: "Can I chew the tablet?" },
          { tr: "Answer that you are not sure and that you will ask the pharmacy.", answerTr: "I'm not sure. I'll ask the pharmacy." }
        ]
      },
      {
        tr: "This is Cardiomin, a tablet. You'll get the shot under the skin this evening.",
        why: "In <i>Spritze</i> the initial <b>sp</b> is [ʃp] and <b>tz</b> is [ts]; in <i>Haut</i> the <b>h</b> is breathed and <b>au</b> is [aʊ]; in <i>Abend</i> the final <b>d</b> sounds like [t]."
      },
      {
        tr: "You get the shot under the skin.",
        why: "In <i>bekommen</i> the stress falls on <b>kom</b>; in <i>unter</i> the final <b>r</b> is barely there, more like a short “uh”; in <i>Sie</i> the initial <b>s</b> is voiced [z], like the z in “zoo”."
      }
    ]
  },
  "lesson:pfl-u05-l2": {
    theme: "Times",
    title: "Before or after meals?",
    objectives: [
      "explain when a medication is taken: morning, evening, at bedtime, as needed",
      "use vor, nach, mit, seit, zu and bei with the dative",
      "tell the patient to stay NPO",
      "answer a patient who missed a dose by referring to the physician"
    ],
    theory: [
      {
        h: "When to take it",
        p: "Times of intake are given with adverbs and with prepositions. Adverbs: <em>morgens</em>, <em>mittags</em>, <em>abends</em>, <em>täglich</em>, <em>einmal täglich</em>, <em>dreimal täglich</em>. Fixed phrases: <em>zur Nacht</em> (at bedtime), <em>bei Bedarf</em> (as needed), <em>nüchtern</em> (fasting). The times on the medication plan are decided by the physician: you read them and pass them on, you do not choose them."
      },
      {
        h: "Prepositions with the dative",
        p: "<em>Vor</em>, <em>nach</em>, <em>mit</em>, <em>seit</em>, <em>zu</em> and <em>bei</em> take the <strong>dative</strong> in all these phrases: <em>vor dem Frühstück</em>, <em>nach dem Essen</em>, <em>mit einem Glas Wasser</em>, <em>seit einer Woche</em>, <em>zu den Mahlzeiten</em>, <em>bei Bedarf</em>. You see the dative on the article: <em>das Essen</em> becomes <em>dem Essen</em>, <em>die Woche</em> becomes <em>einer Woche</em>, <em>die Mahlzeiten</em> becomes <em>den Mahlzeiten</em>. With <em>seit</em> the verb stays in the present: <em>Seit einer Woche nehme ich Dolorex.</em>"
      },
      {
        contrast: "American charts are full of Latin abbreviations: <em>AC</em> (before meals), <em>PC</em> (after meals), <em>HS</em> (at bedtime), <em>PRN</em> (as needed), <em>NPO</em> (nothing by mouth), and you say “PRN” and “NPO” out loud to coworkers. German charts use German: <em>vor dem Essen</em>, <em>nach dem Essen</em>, <em>zur Nacht</em>, <em>bei Bedarf</em> (written <em>b.B.</em>), <em>nüchtern</em>. If you say “PRN” or “NPO” to a German coworker, you will get a blank look. English also does not mark case: “before breakfast”, “with a glass of water”. In German each preposition in this lesson triggers the dative, and <em>vor das Frühstück</em> sounds wrong right away. One more pair: patients say <em>der Blutverdünner</em>, just like “blood thinner” in English, while <em>das Antikoagulans</em> stays a word for the physician and the chart."
      },
      {
        trap: "<em>Nüchtern</em> on the unit means “fasting, NPO”, but in everyday German it also means “sober, not drunk” and even “matter-of-fact, plain”. If you tell a patient <em>Bleiben Sie bitte nüchtern</em>, add what it means for that test: <em>Bitte nichts essen.</em> and, depending on the order, <em>Wasser dürfen Sie trinken</em> or <em>Bitte auch nichts trinken.</em> Do not mix up <em>nach dem Essen</em> (preposition + noun) with <em>nachdem</em>, which is a conjunction and sends the verb to the end. <em>Zur Nacht</em> is “at bedtime”, <em>in der Nacht</em> is “during the night”: on a medication plan they are not the same thing. And <em>morgens</em> means “in the morning, every morning”, not “tomorrow”, which is <em>morgen</em>."
      },
      {
        tip: "If a patient says they missed a tablet, never decide yourself what to do: <em>Dann sagen Sie es mir bitte. Ich frage den Arzt.</em> Making up a dose or skipping it is the physician's decision, and the right answer changes from drug to drug."
      }
    ],
    grammar: {
      title: "Times and prepositions with the dative",
      note: "<b>vor</b> (time)<b>, nach, mit, seit, zu, bei</b> + <b>dative</b>. Time adverbs (<b>morgens, abends, täglich</b>) take no article.",
      table: {
        head: ["phrase", "dative of", "English"],
        rows: [
          ["vor dem Frühstück", "das Frühstück", "before breakfast"],
          ["nach dem Essen", "das Essen", "after meals"],
          ["mit einem Glas Wasser", "ein Glas", "with a glass of water"],
          ["seit einer Woche", "eine Woche", "for a week (now)"],
          ["zu den Mahlzeiten", "die Mahlzeiten", "with meals"],
          ["bei Bedarf", "der Bedarf", "as needed, PRN"]
        ]
      },
      examples: [
        { tr: "Please take the tablet before breakfast.", note: "vor dem: dative of das Frühstück" },
        { tr: "Always take the antibiotic after meals.", note: "nach dem Essen" },
        { tr: "For the blood draw you need to stay NPO tomorrow.", note: "nüchtern bleiben: no food; what may be drunk depends on the test's instructions" },
        { tr: "You get the blood thinner in the evening.", note: "Blutverdünner: the patient's word" },
        { tr: "As needed, you get a pain pill.", note: "bei Bedarf, often b.B. in the chart" },
        { tr: "I've been taking Dolorex for a week.", note: "seit + dative, verb in the present" }
      ]
    },
    vocab: [
      "the intake (of a medication)",
      "the meal",
      "fasting, NPO (also: sober)",
      "daily (einmal täglich: once a day)",
      "in the morning, every morning",
      "in the evening, every evening",
      "as needed, PRN",
      "the antibiotic",
      "the anticoagulant (technical term)",
      "the blood thinner (word for the patient)",
      "to swallow",
      "to forget"
    ],
    dialogue: [
      "Ms. Marin, when should I take this tablet?",
      "You take Cardiomin in the morning, before breakfast.",
      "With coffee?",
      "With a glass of water, please. That's what your plan says too.",
      "And the antibiotic?",
      "You get that three times a day, always after meals.",
      "And what if I forget a tablet?",
      "Then please tell me. I'll ask the physician what you should do.",
      "OK. And tomorrow morning?",
      "Tomorrow morning please don't eat or drink anything, because of the blood draw."
    ],
    exercises: [
      {
        q: "The physician says that tomorrow morning, before the blood draw, the patient has to be “nüchtern”. What does that mean?",
        opts: ["fasting, NPO", "in bed, without getting up", "without medications"],
        why: "On the unit <b>nüchtern</b> means “fasting”: no food; whether water is allowed depends on the test. In everyday German it also means “sober”."
      },
      {
        tr: "The present tense of einnehmen, all persons.",
        why: "<i>Nehme ein, nimmst ein, nimmt ein, nehmen ein, nehmt ein, nehmen ein</i>: a separable verb, the prefix <i>ein</i> goes to the end, and in the second and third person singular <b>e</b> becomes <b>i</b>."
      },
      {
        q: "Fill in: “Nehmen Sie die Tablette bitte nach ___ Essen ein.”",
        hint: "nach + dative, das Essen",
        why: "<b>dem</b>: <i>nach</i> takes the dative, and the dative of <i>das Essen</i> is <i>dem Essen</i>."
      },
      {
        q: "Fill in the right preposition.",
        tr: "Take the drops before breakfast and the antibiotic after meals.",
        why: "<i>Vor dem Frühstück</i> and <i>nach dem Essen</i>: two different prepositions, the same dative."
      },
      {
        q: "Match each phrase with its meaning.",
        pairs: ["in the morning", "in the evening", "at bedtime", "as needed, PRN"]
      },
      {
        q: "Which phrases are correct?",
        opts: ["nach dem Essen", "vor das Frühstück", "mit einem Glas Wasser", "seit eine Woche", "zu den Mahlzeiten"],
        why: "<i>Vor</i> and <i>seit</i> take the dative here: <i>vor dem Frühstück</i>, <i>seit einer Woche</i>. So the two options with <i>vor</i> and <i>seit</i> are wrong; <i>nach dem Essen</i>, <i>mit einem Glas Wasser</i> and <i>zu den Mahlzeiten</i> are correct."
      },
      {
        q: "Put the words in order.",
        tr: "Always take the antibiotic after meals.",
        why: "<i>Das Antibiotikum nehmen Sie immer nach dem Essen.</i> The object comes first, the verb <i>nehmen</i> is in second position, the subject <i>Sie</i> right after it."
      },
      {
        q: "Translate: “Take the tablet in the morning before breakfast.”",
        why: "<i>Nehmen Sie die Tablette morgens vor dem Frühstück (ein).</i> The polite imperative starts with the verb; <i>morgens</i> and <i>vor dem Frühstück</i> render the two time references."
      },
      {
        q: "A patient asks when to take a medication.",
        setting: "Mr. Brandt is holding a new tablet.",
        lines: [
          { tr: "When should I take the tablet?" },
          { tr: "Answer: in the morning, before breakfast.", answerTr: "In the morning, before breakfast." },
          { tr: "With coffee?" },
          { tr: "Answer: with a glass of water, please.", answerTr: "With a glass of water, please." },
          { tr: "And what if I forget the tablet?" },
          { tr: "Answer that he should tell you and that you will ask the physician.", answerTr: "Then please tell me. I'll ask the physician." }
        ]
      },
      {
        tr: "You take Cardiomin in the morning before breakfast, and the antibiotic always after meals.",
        why: "In <i>Frühstück</i> the <b>ü</b> is long in <i>früh</i> and short in <i>Stück</i>: round your lips as for “oo” and say “ee”; in <i>morgens</i> the <b>g</b> is hard and the final <b>s</b> voiceless; in <i>Essen</i> the <b>ss</b> is voiceless."
      },
      {
        tr: "Please take the tablet after meals.",
        why: "In <i>nehmen</i> the <b>h</b> is silent and lengthens the <b>e</b>; in <i>Tablette</i> the stress falls on <b>let</b>; in <i>nach</i> the <b>ch</b> after <b>a</b> is [x], a sound from the back of the throat that English does not have."
      }
    ]
  },
  "lesson:pfl-u05-l3": {
    theme: "Reading",
    title: "The package insert",
    objectives: [
      "find your way through the sections of a German package insert",
      "understand conditional clauses with wenn and falls",
      "recognize contraindications, side effects and interactions",
      "refer every doubt to the physician or the pharmacy"
    ],
    theory: [
      {
        h: "How the insert is built",
        p: "The German insert is called <em>der Beipackzettel</em> in everyday speech and <em>die Packungsbeilage</em> or <em>Gebrauchsinformation</em> on paper. The sections are always the same: <em>Was ist ... und wofür wird es angewendet?</em>, <em>Was sollten Sie vor der Einnahme beachten?</em>, <em>Wie ist ... einzunehmen?</em>, <em>Welche Nebenwirkungen sind möglich?</em>, <em>Wie ist ... aufzubewahren?</em> The text in this lesson, the one for <em>Dolorex</em>, is made up from top to bottom: it is there to practice reading the language, not to use a drug."
      },
      {
        h: "Wenn and falls",
        p: "The insert is full of conditional clauses. After <strong>wenn</strong> or <strong>falls</strong> the conjugated verb goes <strong>to the end</strong>: <em>Wenn Sie schwanger sind, ...</em>, <em>Falls Sie eine Einnahme vergessen haben, ...</em> If the conditional clause comes first, the main clause starts with the <strong>verb</strong>, because the conditional clause fills first position on its own: <em>Wenn Sie Fragen haben, <b>rufen</b> Sie die Apotheke an.</em> <em>Falls</em> is only conditional, “if, in case”; <em>wenn</em> also means “when”."
      },
      {
        contrast: "In the US, the leaflet in the box is a “package insert” written for prescribers, and patients mostly get a separate pharmacy printout or a Medication Guide. In Germany every box contains a <em>Beipackzettel</em> written for the patient, and everybody reads it. Its vocabulary is plain German, not Latin: <em>Gegenanzeigen</em> instead of <em>Kontraindikationen</em>, <em>Nebenwirkungen</em> instead of “adverse effects”, <em>Wechselwirkungen</em> instead of “drug interactions”. <em>Die Kontraindikation</em> is the physician's word. The syntax is the other trap. English keeps the same word order in both halves: “If you have questions, you call the pharmacy”. In German <em>haben</em> moves to the end of the conditional clause and <em>rufen</em> opens the main clause. “Wenn Sie Fragen haben, Sie rufen ...” is the typical mistake of someone thinking in English."
      },
      {
        trap: "In the insert, <em>häufig</em> is not an impression but a number: by European convention <em>sehr häufig</em> means 1 in 10 people or more, <em>häufig</em> 1 in 100 to 1 in 10, <em>selten</em> 1 in 10,000 to 1 in 1,000. <em>Das Rezept</em> is the prescription (in the kitchen it is also a recipe), and it is not the insert. <em>Die Drogerie</em> is not a drugstore in the American sense: it sells cosmetics and household goods but almost no medications. Medications are bought in <em>der Apotheke</em>, and there is no German equivalent of picking up pills at the supermarket pharmacy counter. Also note: <em>bekommen</em> means “to get”, never “to become”: <em>Wenn Sie Atemnot bekommen</em> is “if you get short of breath”."
      },
      {
        tip: "When a patient asks you “can I take it together with ...?”, do not answer by reading the insert: <em>Das klären wir mit dem Arzt oder der Apotheke.</em> The insert helps you understand what to ask, not decide."
      }
    ],
    grammar: {
      title: "Wenn and falls",
      note: "In the conditional clause the verb goes <b>to the end</b>. If the conditional clause comes first, the main clause starts with the <b>verb</b>.",
      table: {
        head: ["conditional clause", "main clause", "note"],
        rows: [
          ["Wenn Sie schwanger sind,", "fragen Sie Ihren Arzt.", "sind at the end, fragen first"],
          ["Falls Sie eine Einnahme vergessen haben,", "fragen Sie Ihren Arzt oder Apotheker.", "Perfekt: haben after the participle"],
          ["Wenn Sie Atemnot bekommen,", "gehen Sie sofort zum Arzt.", "bekommen: to “get” a symptom"],
          ["(main clause first)", "Dolorex darf nicht eingenommen werden, wenn ...", "the conditional clause can also follow"]
        ]
      },
      examples: [
        { tr: "If you are pregnant, ask your physician before taking it.", note: "wenn: the verb sind at the end" },
        { tr: "If you have missed a dose, ask your physician or pharmacist.", note: "falls: in case" },
        { tr: "If you get short of breath, go to a physician right away.", note: "the main clause starts with gehen" },
        { tr: "If you take other medications, tell the physician.", note: "possible interactions: Wechselwirkungen" },
        { tr: "Dolorex must not be taken if you are allergic to it.", note: "Dolorex is made up; passive with dürfen" },
        { tr: "If you have questions, call the pharmacy.", note: "anrufen is separable: an at the end" }
      ]
    },
    vocab: [
      "the package insert (everyday word)",
      "the package insert (official term)",
      "the side effect",
      "the (drug) interaction",
      "the contraindication (technical term)",
      "the contraindication (word in the insert)",
      "the pharmacy",
      "the pharmacist",
      "pregnant",
      "allergic",
      "to store, to keep",
      "in case, if"
    ],
    dialogue: [
      "Dolorex is a made-up pain reliever. It exists only in this course.",
      "Dolorex must not be taken if you are allergic to it.",
      "If you are pregnant or breastfeeding, ask your physician or pharmacist before taking it.",
      "If you take other medications, tell your physician. There may be interactions.",
      "Always take Dolorex exactly as your physician told you.",
      "If you have missed a dose, ask your physician or pharmacist.",
      "If you get a skin rash or become short of breath, stop taking Dolorex and go to a physician right away.",
      "Keep the medication out of the reach of children."
    ],
    culture: {
      title: "A German view: Apotheke and Beipackzettel",
      text: "<p>In Germany almost all medications are sold only in pharmacies (<i>apothekenpflichtig</i>), and some only with a prescription (<i>verschreibungspflichtig</i>). Only a few products are <i>freiverkäuflich</i> and can also be found in a <i>Drogerie</i> or a supermarket: no aisle of pain relievers next to the cereal. Pharmacies are easy to spot by the big red Gothic-style <b>A</b>, and at night and on holidays there is always a <i>Notdienstapotheke</i> on duty.</p><p>The <i>Beipackzettel</i> is such a part of daily life that its mandatory line in TV ads has become a set phrase: <i>Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren Arzt oder Apotheker.</i> For physicians there is a different, more technical document, the <i>Fachinformation</i>, which is closer to the American prescribing information.</p>"
    },
    exercises: [
      {
        q: "Read the Dolorex insert. “Someone allergic to Dolorex can take it anyway.”",
        opts: ["True", "False"],
        why: "False: <i>Dolorex darf nicht eingenommen werden, wenn Sie allergisch dagegen sind.</i> An allergy to the drug is a contraindication, a <i>Gegenanzeige</i>."
      },
      {
        q: "Read the Dolorex insert. “During pregnancy you have to ask the physician or pharmacist before taking it.”",
        opts: ["True", "False"],
        why: "True: <i>Wenn Sie schwanger sind oder stillen, fragen Sie vor der Einnahme Ihren Arzt oder Apotheker.</i>"
      },
      {
        q: "According to the insert, what do you do if a skin rash appears?",
        opts: ["Put on an ointment and keep taking it.", "Keep taking it and wait.", "Stop taking it and go to a physician right away."],
        why: "<i>Wenn Sie Hautausschlag oder Atemnot bekommen, nehmen Sie Dolorex nicht weiter ein und gehen Sie sofort zum Arzt.</i> <i>Nicht weiter einnehmen</i> means “stop taking”."
      },
      {
        q: "Fill in: “___ Sie schwanger sind, fragen Sie vor der Einnahme Ihren Arzt.”",
        hint: "conditional conjunction",
        why: "<b>Wenn</b> or <b>Falls</b>: both send the verb <i>sind</i> to the end, and the main clause starts with <i>fragen</i>."
      },
      {
        q: "Complete the sentence from the insert.",
        tr: "If you get short of breath, go to a physician right away.",
        why: "<i>Wenn Sie Atemnot bekommen, gehen Sie sofort zum Arzt</i>: <i>bekommen</i> at the end of the conditional clause, <i>zum Arzt</i> for going to a person."
      },
      {
        q: "Put the words in order.",
        tr: "If you have questions, call the pharmacy.",
        why: "<i>Wenn Sie Fragen haben, rufen Sie die Apotheke an.</i> <i>Haben</i> at the end of the conditional clause, <i>rufen</i> opens the main clause, the prefix <i>an</i> closes the sentence."
      },
      {
        q: "Match each word from the insert with its meaning.",
        pairs: ["the contraindication", "the side effect", "the interaction", "the package insert", "the pharmacist"]
      },
      {
        q: "Which sentences are built correctly?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Ihnen übel wird, sagen Sie es mir.",
          "Wenn Sie Fragen haben, Sie fragen den Arzt.",
          "Wenn Sie eine Tablette vergessen haben, fragen Sie den Arzt."
        ],
        why: "In the conditional clause the verb goes to the end (<i>haben</i>, <i>wird</i>), and the main clause starts with the verb (<i>klingeln</i>, <i>sagen</i>, <i>fragen</i>). The second and the fourth get exactly this wrong."
      },
      {
        q: "Translate: “If you have questions, ask the physician or the pharmacist.”",
        why: "<i>Wenn Sie Fragen haben, fragen Sie Ihren Arzt oder Apotheker.</i> <i>Falls</i> works too, and so does <i>den Arzt</i> instead of <i>Ihren Arzt</i>: <i>fragen</i> takes the accusative."
      },
      {
        tr: "If you get a skin rash or become short of breath, stop taking Dolorex and go to a physician right away.",
        why: "In <i>Hautausschlag</i> the stress falls on the first syllable, <b>Haut</b>; in <i>Atemnot</i> on the <b>A</b>; in <i>sofort</i> on the second syllable, <b>fort</b>."
      },
      {
        tr: "If you have questions, please ask your physician.",
        why: "In <i>Wenn</i> the <b>w</b> sounds like English [v]; in <i>Fragen</i> the <b>a</b> is long; in <i>Ihren</i> the <b>h</b> is silent and lengthens the <b>i</b>; in <i>Arzt</i> both the <b>z</b> and the final <b>t</b> are pronounced."
      }
    ]
  },
  "lesson:pfl-u05-l4": {
    theme: "Safety",
    title: "Preparing medications",
    objectives: [
      "describe preparing medications with the passive",
      "use müssen, dürfen and sollen with the passive infinitive",
      "name the six R's of safe administration",
      "ask the pharmacy or the physician instead of deciding alone"
    ],
    theory: [
      {
        h: "The passive on the unit",
        p: "When the action matters and not who does it, German uses the <strong>passive</strong>: conjugated <em>werden</em> in second position and the participle at the end. <em>Die Medikamente werden im Stationszimmer gerichtet. Jede Gabe wird dokumentiert.</em> With a modal, the modal is in second position and the passive infinitive goes at the end, participle + <em>werden</em>: <em>Vor der Gabe muss der Name kontrolliert werden.</em> In a yes/no question the modal comes first: <em>Darf die Tablette geteilt werden?</em>"
      },
      {
        h: "Die 6-R-Regel",
        p: "Before every administration you check six “R's”, from <em>richtig</em>: <em>die richtige Person</em>, <em>das richtige Medikament</em>, <em>die richtige Dosierung</em>, <em>die richtige Applikationsart</em>, <em>der richtige Zeitpunkt</em>, <em>die richtige Dokumentation</em>. Here the rule is a language topic: notice how <em>richtig</em> changes its ending with the article (<em>der richtige</em>, <em>die richtige</em>, <em>das richtige</em>). Some facilities count more than six; your facility's standard always applies."
      },
      {
        contrast: "In nursing school in the US you learned the “five rights”: right patient, right drug, right dose, right route, right time, often with a sixth, right documentation, and sometimes more. German uses the same idea, and conveniently the German word also starts with R: <em>richtig</em>. The difference is grammar: “right” never changes in English, while <em>richtig</em> takes a different ending after <em>der</em>, <em>die</em> and <em>das</em>. The passive also looks close to English: “the medications are prepared” is <em>die Medikamente werden gerichtet</em>. But for the action German uses <em>werden</em> (<em>sein</em> + participle describes the resulting state: <em>die Medikamente sind gerichtet</em>), and puts the participle at the end; with a modal both the participle and <em>werden</em> go to the end, while English keeps “must be checked” together in the middle. Where English says “we document everything” or “you document everything”, German often says <em>Alles wird dokumentiert</em> or <em>Man dokumentiert alles</em>."
      },
      {
        trap: "<em>Richten</em> here means “to prepare medications” (many units also say <em>stellen</em>), not “to direct” or “to judge”. <em>Verabreichen</em> is to give the medication; <em>verschreiben</em> is to prescribe it, and that is the physician's job. <em>Die Dosierung</em> is the regimen (how much and when), <em>die Dosis</em> is a single amount. And a classic false friend: <em>Die Medikamente werden gerichtet</em> is a passive, not a future “will”: <em>werden</em> + participle is “are being prepared”, <em>werden</em> + infinitive is the future. Watch the form too: the participle of <em>dokumentieren</em> is <em>dokumentiert</em>, without <em>ge-</em>, like all verbs in <em>-ieren</em>; the participle of <em>verabreichen</em> is <em>verabreicht</em>, without <em>ge-</em> because of the inseparable prefix <em>ver-</em>."
      },
      {
        tip: "The most important sentence in this lesson is the one that passes the doubt on: <em>Da müssen wir in der Apotheke nachfragen</em> or <em>Das klären wir mit dem Arzt.</em> Splitting a tablet, crushing it or changing the time are decisions you do not make from memory."
      }
    ],
    grammar: {
      title: "Passive and modals",
      note: "Passive: <b>werden</b> in second position, participle <b>at the end</b>. With a modal: the modal in second position (first in a yes/no question), and at the end <b>participle + werden</b>.",
      table: {
        head: ["structure", "example", "note"],
        rows: [
          ["present passive", "Die Medikamente werden gerichtet.", "werden + participle"],
          ["passive, singular", "Jede Gabe wird dokumentiert.", "-ieren: no ge-"],
          ["modal + passive", "Der Name muss kontrolliert werden.", "participle + werden at the end"],
          ["yes/no question", "Darf die Tablette geteilt werden?", "the modal opens the sentence"]
        ]
      },
      examples: [
        { tr: "The medications are prepared in the nurses' station.", note: "werden in the plural" },
        { tr: "Every administration is documented right away.", note: "dokumentiert: no ge-" },
        { tr: "Before the administration the name must be checked.", note: "müssen + passive infinitive" },
        { tr: "Can the tablet be split?", note: "yes/no question: dürfen in first place" },
        { tr: "We have to ask the pharmacy about that.", note: "nachfragen: separable, stays together in the infinitive" },
        { tr: "If anything is unclear, the physician is asked.", note: "passive: the action matters, not who does it" }
      ]
    },
    vocab: [
      "to prepare (medications)",
      "the pill organizer, the dispenser",
      "the compartment",
      "the order, the physician's order",
      "the dosage, the regimen",
      "the administration",
      "to administer",
      "to check",
      "to document, to chart",
      "to split, to divide",
      "the time, the point in time",
      "the mix-up (of medications or patients)"
    ],
    dialogue: [
      "Elena, can you help me? The medications for the night still have to be prepared.",
      "Sure. Let's check everything with the six R's.",
      "The right person: Mrs. Kühn, room four. The right medication: Cardiomin.",
      "The right dosage and the right route: as written in the order. By mouth.",
      "Can the tablet be split? Mrs. Kühn has trouble swallowing.",
      "I don't know. We have to ask the pharmacy.",
      "OK. The right time is at bedtime.",
      "Exactly. And after it's given, everything is documented. That's the sixth R."
    ],
    exercises: [
      {
        q: "“The medications are prepared in the nurses' station.” Which sentence is correct?",
        opts: [
          "Die Medikamente werden im Stationszimmer gerichtet.",
          "Die Medikamente sind im Stationszimmer richten.",
          "Die Medikamente werden im Stationszimmer richten."
        ],
        why: "The passive is <b>werden</b> + <b>participle</b>: <i>werden ... gerichtet</i>. With the infinitive <i>richten</i> the sentence would become a future, which makes no sense here."
      },
      {
        tr: "The present tense of dürfen, all persons.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: in the singular <b>ü</b> becomes <b>a</b>, and the first and third person singular are the same, with no ending."
      },
      {
        q: "Fill in: “Jede Gabe ___ sofort dokumentiert.”",
        hint: "werden, third person singular",
        why: "<b>wird</b>: the subject <i>jede Gabe</i> is singular, and the passive is formed with <i>werden</i>."
      },
      {
        q: "Fill in the modal and the passive infinitive.",
        tr: "Before the administration the name must be checked.",
        why: "<i>Vor der Gabe muss der Name kontrolliert werden</i>: <i>muss</i> in second position, at the end the participle <i>kontrolliert</i> and then <i>werden</i>."
      },
      {
        q: "Put the words in order.",
        tr: "Can the tablet be split?",
        why: "<i>Darf die Tablette geteilt werden?</i> A yes/no question: the modal <i>darf</i> opens the sentence, <i>geteilt werden</i> closes it."
      },
      {
        q: "Match each R with its meaning.",
        pairs: ["the right person", "the right medication", "the right dosage", "the right route", "the right time", "the right documentation"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["pill organizer", "compartment", "physician's order", "dosage", "time", "mix-up"]
      },
      {
        q: "Which sentences are built correctly?",
        opts: [
          "Die Tablette darf nicht geteilt werden.",
          "Die Tablette darf nicht geteilt wird.",
          "Der Name muss kontrolliert werden.",
          "Der Name muss werden kontrolliert.",
          "Die Gabe soll dokumentiert werden."
        ],
        why: "With a modal, the participle and then <i>werden</i> in the infinitive go to the end of the sentence: <i>geteilt werden</i>, <i>kontrolliert werden</i>, <i>dokumentiert werden</i>."
      },
      {
        q: "Translate: “Every administration is documented.”",
        why: "<i>Jede Gabe wird dokumentiert.</i> <i>Verabreichung</i> or <i>Applikation</i> also work. Passive: <i>wird</i> + a participle without <i>ge-</i>."
      },
      {
        q: "A coworker asks you about the night medications.",
        setting: "You are in the nurses' station with your coworker Jonas.",
        lines: [
          { tr: "Are the medications for the night ready yet?" },
          { tr: "Answer that they are being prepared right now.", answerTr: "No, they're being prepared right now." },
          { tr: "Can Mrs. Kühn's tablet be split?" },
          { tr: "Answer that you don't know and that you have to ask the pharmacy.", answerTr: "I don't know. We have to ask the pharmacy." },
          { tr: "And after it's given?" },
          { tr: "Answer that after it's given everything is documented.", answerTr: "After it's given, everything is documented." }
        ]
      },
      {
        tr: "The medications are prepared according to the six R's. After it's given, everything is documented.",
        why: "In <i>gerichtet</i> the <b>ch</b> after <b>i</b> is [ç], like the h in “huge” said with more friction; in <i>dokumentiert</i> the stress falls on <b>tiert</b>, as in all verbs in <i>-ieren</i>; in <i>Regel</i> the first <b>e</b> is long."
      },
      {
        tr: "Can the tablet be split?",
        why: "In <i>Darf</i> the <b>r</b> after the vowel is barely there; in <i>geteilt</i> <b>ei</b> is [aɪ], like English “eye”; in <i>werden</i> the <b>e</b> is long."
      }
    ]
  },
  "lesson:pfl-u05-test": {
    theme: "Test",
    title: "Test: Medications and package inserts",
    objectives: [
      "check routes of administration and their patient phrases, times with the dative, clauses with wenn and falls, and the passive for preparing medications"
    ],
    theory: [
      {
        p: "Eleven questions on the whole unit. You pass with 70%. The drugs named are made up and the clinical content consists of teaching examples: on the unit, the physician's order and your facility's protocol apply."
      }
    ],
    exercises: [
      {
        q: "The physician wrote “intravenös”. How do you say it to the patient?",
        opts: ["unter die Haut", "über den Mund", "in die Vene"],
        why: "<i>Intravenös</i> means “into the vein”: to the patient you say <b>in die Vene</b>."
      },
      {
        q: "Fill in: “Nehmen Sie die Tropfen vor ___ Frühstück.”",
        hint: "vor + dative, das Frühstück",
        why: "<b>dem</b>: in this phrase <i>vor</i> takes the dative."
      },
      {
        q: "Fill in: “Die Medikamente ___ im Stationszimmer gerichtet.”",
        hint: "passive, plural",
        why: "<b>werden</b>: plural subject, passive with <i>werden</i> and the participle <i>gerichtet</i> at the end."
      },
      {
        q: "Match each technical term with the word for the patient or from the insert.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Gegenanzeige"]
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Sie Fragen haben, Sie rufen die Apotheke an.",
          "Vor der Gabe wird der Name kontrolliert.",
          "Nehmen Sie die Tablette nach dem Essen ein."
        ],
        why: "After <i>wenn</i> and <i>falls</i> the verb goes to the end and the main clause starts with the verb. <i>Vor der Gabe wird ... kontrolliert</i> is a correct passive, <i>nach dem Essen</i> a correct dative."
      },
      {
        q: "Complete the sentence.",
        tr: "In case you have missed a dose, please ask your physician.",
        why: "<i>Falls Sie eine Einnahme vergessen haben, fragen Sie bitte Ihren Arzt</i>: the participle <i>vergessen</i> before <i>haben</i>, and the main clause starts with <i>fragen</i>."
      },
      {
        q: "Put the words in order.",
        tr: "After it's given, everything is documented.",
        why: "<i>Nach der Gabe wird alles dokumentiert.</i> <i>Nach der Gabe</i> first, <i>wird</i> in second position, the participle at the end."
      },
      {
        q: "“Packungsbeilage” and “Beipackzettel” mean the same leaflet.",
        opts: ["True", "False"],
        why: "True: <i>Packungsbeilage</i> is the official name, <i>Beipackzettel</i> the everyday one."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["tablet", "suppository", "package insert", "side effect", "pill organizer", "antibiotic"]
      },
      {
        tr: "If you have questions about your medications, please ask the physician or the pharmacy.",
        why: "In <i>Medikamenten</i> the stress falls on <b>men</b>; in <i>Apotheke</i> the stress is on <b>the</b> and <b>th</b> is a plain [t], never the English “th”; in <i>Fragen</i> the <b>a</b> is long."
      },
      {
        tr: "Tomorrow morning please don't eat or drink anything.",
        why: "In <i>nüchtern</i> the <b>ü</b> is short and <b>ch</b> is [ç]; in <i>früh</i> the <b>ü</b> is long and the <b>h</b> is silent; in <i>bleiben</i> <b>ei</b> is [aɪ], like English “eye”."
      }
    ]
  }
});
