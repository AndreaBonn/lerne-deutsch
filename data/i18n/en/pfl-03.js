/* ============================================================
   Learner-language text (en) for data/core/pfl-03.js, unit pfl-u03.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:pfl-u03": {
    title: "Basic care and mobilization",
    grammarNote: "reflexive verbs for washing and dressing · two-way prepositions with accusative or dative (wohin? / wo?) · modal verbs with patients · the infinitive with zu · Fachsprache / Laiensprache pairs"
  },
  "lesson:pfl-u03-l1": {
    theme: "Washing and dressing",
    title: "Getting washed and dressed",
    objectives: [
      "support a patient through morning hygiene, at the sink or in bed",
      "use reflexive verbs: sich waschen, sich anziehen, sich rasieren",
      "choose between mich and mir when the sentence has an object",
      "protect the patient's privacy with respectful words and actions"
    ],
    theory: [
      {
        h: "Morning hygiene",
        p: "<strong>Grundpflege</strong> covers hygiene, dressing, eating and drinking, elimination and mobility. The first question is not “shall I wash you?” but what the patient wants to do and can do alone: <em>Möchten Sie sich heute selbst waschen? Am Waschbecken oder lieber im Bett?</em> Then you split the work, out loud: <em>Das Gesicht waschen Sie sich selbst, den Rücken wasche ich Ihnen.</em> For perineal care you always offer first that the patient does it alone, and you say what you are doing to protect their privacy: <em>Ich ziehe den Vorhang zu. Ich warte so lange draußen.</em>"
      },
      {
        h: "Reflexive verbs",
        p: "Many hygiene verbs are reflexive: <em>sich waschen, sich anziehen, sich ausziehen, sich rasieren, sich kämmen</em>. In a main clause the pronoun follows the conjugated verb: <em>Ich wasche mich. Er zieht sich an.</em> With formal Sie the reflexive is <strong>sich</strong>, lowercase, not <em>Sie</em>: <em>Können Sie sich allein anziehen?</em> When the sentence also has an accusative object (a body part, a piece of clothing), the reflexive switches to the <strong>dative</strong>: <em>Ich wasche mich</em>, but <em>Ich wasche mir das Gesicht</em>. You only see the difference with <em>ich</em> and <em>du</em> (mich/mir, dich/dir): <em>sich</em>, <em>uns</em> and <em>euch</em> stay the same. In the Perfekt reflexive verbs take <em>haben</em>: <em>Er hat sich schon angezogen.</em>"
      },
      {
        contrast: "English mostly drops the reflexive: you say “I wash”, “he gets dressed”, “can you shave?”, and “I wash myself” sounds odd outside a care plan. German needs the pronoun every time: <em>Ich wasche mich</em>, <em>Er zieht sich an</em>, <em>Können Sie sich rasieren?</em> Without it the sentence is incomplete, and “Ich wasche” leaves the listener waiting for an object. English also says “I wash <strong>my</strong> hands” with a possessive; German uses the dative reflexive and the article instead: <em>Ich wasche mir die Hände</em>; “meine Hände” is not wrong, just less natural. In a US facility the bed bath and perineal care are often done by a CNA; in Germany basic care is part of the nurse's job too, done by the <em>Pflegefachkraft</em> or a <em>Pflegehelfer</em>. In documentation you will read <em>Intimpflege</em> and <em>Intimbereich</em>, the German equivalents of “peri care”. Many older patients do not use these words and say <em>untenherum</em>. There is no need to correct them: understand the word and answer calmly, without being more explicit than the patient chose to be."
      },
      {
        trap: "<em>baden</em> does not mean washing in general: it means taking a bath in a tub. Washing at the sink is <em>sich waschen</em>, a shower is <em>duschen</em>. <em>Das Bad</em> is both the bathroom and the bath itself. <em>Die Wäsche</em> is laundry or linen, but on the unit <em>die Ganzkörperwäsche</em> is a full-body wash, often a bed bath. And <em>das Hemd</em> is a shirt, while a nightgown is <em>das Nachthemd</em>. Note that <em>der Waschlappen</em> is a washcloth, often sewn as a mitt."
      },
      {
        tip: "Announce every action before you do it: <em>Ich wasche Ihnen jetzt den Rücken.</em> One short sentence before you touch the patient reassures more than any explanation, and with the dative reflexive it drills you on the pattern that matters most in this lesson."
      }
    ],
    grammar: {
      title: "mich or mir?",
      note: "Without another object the reflexive is <b>accusative</b> (<b>mich</b>). With a separate accusative object, a body part or a piece of clothing, it becomes <b>dative</b> (<b>mir</b>). With the patient: always <b>sich</b>.",
      table: {
        head: ["person", "no object (accusative)", "with an object (dative)"],
        rows: [
          ["ich", "Ich wasche mich.", "Ich wasche mir die Hände."],
          ["er / sie", "Er zieht sich an.", "Er zieht sich die Jacke an."],
          ["wir", "Wir waschen uns.", "Wir putzen uns die Zähne."],
          ["Sie", "Waschen Sie sich selbst?", "Waschen Sie sich das Gesicht selbst?"]
        ]
      },
      examples: [
        { tr: "Would you like to wash yourself today?", note: "with Sie the reflexive is sich" },
        { tr: "First I wash my face.", note: "there is an object (das Gesicht): mir, dative" },
        { tr: "Can you get dressed on your own?", note: "anziehen is separable: Ich ziehe mich an" },
        { tr: "You wash your private area yourself, and I'll wait outside.", note: "always offer independent perineal care first" },
        { tr: "Would you like to shave?", note: "sich rasieren: ask, don't assume" },
        { tr: "Mr. Brandt has already gotten dressed.", note: "Perfekt of reflexive verbs: always with haben" }
      ]
    },
    vocab: [
      "basic care (hygiene, dressing, eating, elimination, mobility)",
      "personal hygiene",
      "to wash (oneself)",
      "to get dressed",
      "to get undressed, to take off (a garment)",
      "to shave",
      "to comb one's hair",
      "the washcloth, wash mitt",
      "the towel",
      "the sink",
      "perineal care, peri care",
      "the denture, dentures"
    ],
    dialogue: [
      "Good morning, Mrs. Keller. Did you sleep well?",
      "Good morning. So-so.",
      "Would you like to wash at the sink today, or would you rather wash in bed?",
      "At the sink, if you help me.",
      "Of course. You wash your face and arms yourself, and I'll wash your back.",
      "And down there I'd rather do it myself.",
      "Of course. I'll give you a clean washcloth and wait outside. Ring when you're done.",
      "Thank you, I prefer it that way.",
      "Then you get dressed. Which blouse would you like to wear today?",
      "The blue one, please."
    ],
    culture: {
      title: "A German view: Grundpflege and Behandlungspflege",
      text: "<p>German nursing usually distinguishes two areas. <i>Grundpflege</i> covers the activities of daily living: hygiene, dressing, eating, elimination, mobility. <i>Behandlungspflege</i> covers tasks tied to a physician's order, such as wound dressings or giving medication. In home care the distinction also decides who pays for the service, so you will read the word often in paperwork.</p><p>In hospitals part of the Grundpflege is done by staff with shorter training, much like CNAs in the US, but assessing what the patient can do alone stays the nurse's responsibility.</p>"
    },
    exercises: [
      {
        q: "You want to ask the patient whether she would like to wash herself. Which sentence is correct?",
        opts: [
          "Möchten Sie Sie selbst waschen?",
          "Möchten Sie sich selbst waschen?",
          "Möchten Sie selbst waschen sich?"
        ],
        why: "With formal Sie the reflexive is <b>sich</b>, not <i>Sie</i>. The modal <i>möchten</i> opens the yes/no question and the infinitive <i>waschen</i> goes at the end."
      },
      {
        tr: "Present tense of sich waschen, all persons.",
        why: "<i>Wasche mich, wäschst dich, wäscht sich, waschen uns, wascht euch, waschen sich</i>: in the second and third person singular <b>a</b> becomes <b>ä</b>, and the reflexive pronoun changes with the person."
      },
      {
        q: "Fill in: “Können Sie ___ allein anziehen?”",
        hint: "reflexive for Sie",
        why: "<b>sich</b>, lowercase: the reflexive of formal Sie is the same as the third person."
      },
      {
        q: "Fill in mich or mir.",
        tr: "First I wash my face, then I get dressed.",
        why: "<i>Ich wasche mir zuerst das Gesicht</i>: there is an object, <i>das Gesicht</i>, so dative <i>mir</i>. <i>Dann ziehe ich mich an</i>: no object, so accusative <i>mich</i>."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Ich wasche mir die Hände.",
          "Ich wasche mich die Hände.",
          "Können Sie sich allein anziehen?",
          "Er hat sich schon rasiert.",
          "Er ist sich schon rasiert."
        ],
        why: "With an object (<i>die Hände</i>) the reflexive is dative, <i>mir</i>. In the Perfekt reflexive verbs take <i>haben</i>: <i>Er hat sich rasiert</i>."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["washcloth", "towel", "sink", "perineal care", "denture", "basic care"]
      },
      {
        q: "Match each verb with its meaning.",
        pairs: ["to wash (oneself)", "to get dressed", "to get undressed", "to shave"]
      },
      {
        q: "Put the words in order.",
        tr: "Can you get dressed on your own?",
        why: "<i>Können Sie sich allein anziehen?</i> The modal opens the yes/no question, the reflexive <i>sich</i> follows the subject and the infinitive <i>anziehen</i> goes at the end."
      },
      {
        q: "Translate (to the patient): “Would you like to shave?”",
        why: "<i>Möchten Sie sich rasieren?</i> With patients <i>möchten</i> is the most polite form; <i>Wollen Sie</i> is correct but sounds more blunt."
      },
      {
        q: "Morning hygiene.",
        setting: "You enter the room of a patient who wants to wash on her own.",
        lines: [
          { tr: "Good morning. I'd like to wash myself today." },
          { tr: "Say that you'll wash her back and she does the rest.", answerTr: "Of course. I'll wash your back, and you do the rest yourself." },
          { tr: "And down there? It makes me a bit uncomfortable." },
          { tr: "Say that you understand: she washes her private area herself and you wait outside.", answerTr: "I understand. You wash your private area yourself, and I'll wait outside." },
          { tr: "And afterwards?" },
          { tr: "Say that afterwards she gets dressed and you help her with the stockings.", answerTr: "Afterwards you get dressed, and I'll help you with the stockings." }
        ]
      },
      {
        tr: "You wash your face and arms yourself, and I'll wash your back.",
        why: "In <i>Gesicht</i> the <b>g</b> is hard and <b>ch</b> after <b>i</b> is [ç], a sound English does not have; in <i>Rücken</i> the <b>ü</b> is short; in <i>waschen</i> <b>sch</b> is [ʃ], like English “sh”."
      },
      {
        tr: "Would you like to wash yourself today?",
        why: "In <i>Möchten</i> the <b>ö</b> is short and <b>ch</b> is [ç]; in <i>sich</i> the initial <b>s</b> is voiced [z]; in <i>selbst</i> the <b>b</b> is pronounced [p]."
      }
    ]
  },
  "lesson:pfl-u03-l2": {
    theme: "Movement",
    title: "Mobilization and positioning",
    objectives: [
      "help a patient move from the bed to the edge of the bed and into a wheelchair",
      "tell wohin? (accusative) from wo? (dative) with an, auf, in, neben",
      "use the pairs setzen / sitzen, legen / liegen, stellen / stehen",
      "recognize Dekubitus and Kontraktur and say them in the patient's words"
    ],
    theory: [
      {
        h: "Announcing the movement",
        p: "Before you mobilize a patient you say what will happen and ask if it is all right: <em>Heute setzen wir Sie an die Bettkante. Ist das in Ordnung?</em> You go in small steps, one at a time, and you stop when the patient reports feeling unwell: <em>Mir ist schwindelig.</em> <em>Dann bleiben Sie erst einmal sitzen.</em> How a patient is mobilized and with which aids is decided by the nursing assessment and the facility's protocol: here you learn the words that go with the movement, not the technique."
      },
      {
        h: "Wohin? or wo?",
        p: "The prepositions <em>an, auf, in, neben, unter, über, vor, hinter, zwischen</em> take two cases. If there is movement toward a destination (<strong>wohin?</strong>) they take the <strong>accusative</strong>: <em>Ich setze Sie an die Bettkante.</em> If you describe a position (<strong>wo?</strong>) they take the <strong>dative</strong>: <em>Sie sitzen an der Bettkante.</em> The verbs come in pairs: <em>setzen, legen, stellen</em> describe the movement and take the accusative after the preposition that names the destination; <em>sitzen, liegen, stehen</em> describe the position and take the dative. Common contractions: <em>an das → ans</em>, <em>in das → ins</em>, <em>an dem → am</em>, <em>in dem → im</em>."
      },
      {
        contrast: "In American nursing, plain English wins even between colleagues: you chart and hand off a “pressure injury” or “bedsore”, you “turn and reposition” the patient, you get them up “to the chair”. In a German handover the Latin terms are spoken aloud: <em>Dekubitus</em>, <em>Kontraktur</em>, <em>Mobilisation</em>, <em>Lagerung</em>. They will feel more like a textbook than a ward to you, but they are what your colleagues say. The patient, on the other hand, says <em>Druckgeschwür</em> (literally “pressure ulcer”) or uses the verb <em>sich wundliegen</em>: <em>Ich habe mich wundgelegen.</em> For a contracture he says <em>Gelenkversteifung</em> or simply <em>Das Knie wird steif.</em> And patients rarely say <em>Mobilisation</em> or <em>Lagerung</em>: they say <em>aufstehen</em>, <em>sich hinsetzen</em>, <em>sich umdrehen</em>. English has one verb, “put”, for every direction; German makes you choose between <em>setzen</em>, <em>legen</em> and <em>stellen</em>, depending on whether the result is sitting, lying or standing."
      },
      {
        trap: "<em>Die Lagerung</em> on the unit is patient positioning, but in everyday German it means storing goods in a warehouse: do not use it with the patient, who would feel treated like a package. Say instead <em>Ich helfe Ihnen, sich auf die Seite zu drehen.</em> Do not mix up <em>setzen</em> and <em>sitzen</em>: <em>Ich sitze Sie</em> does not exist. And <em>der Rollstuhl</em> is the wheelchair, while <em>der Rollator</em> is a rolling walker, not a roller."
      },
      {
        tip: "To pick the case, ask yourself whether the patient is moving toward a place or is already there: <em>wohin?</em> or <em>wo?</em> In practice, almost every time you talk about what you are about to do you use <em>setzen, legen, stellen</em> with the accusative; when you describe how the patient is settled you use <em>sitzen, liegen, stehen</em> with the dative."
      }
    ],
    grammar: {
      title: "Movement and position",
      note: "<b>Wohin?</b> Destination of a movement + <b>accusative</b>. <b>Wo?</b> Position, or movement within a place, + <b>dative</b>. Same preposition, different case.",
      table: {
        head: ["wohin? (accusative)", "wo? (dative)"],
        rows: [
          ["Ich setze Sie an die Bettkante.", "Sie sitzen an der Bettkante."],
          ["Wir legen Sie auf die Seite.", "Sie liegen auf der Seite."],
          ["Ich stelle den Rollator neben das Bett.", "Der Rollator steht neben dem Bett."],
          ["Ich setze Sie in den Rollstuhl.", "Sie sitzen im Rollstuhl."]
        ]
      },
      examples: [
        { tr: "Now I'll sit you up on the edge of the bed.", note: "setzen + an die: movement, accusative" },
        { tr: "Now you're sitting on the edge of the bed.", note: "sitzen + an der: position, dative" },
        { tr: "We'll turn you onto your side.", note: "legen + auf die: accusative" },
        { tr: "Now you're lying comfortably on your side.", note: "liegen + auf der: dative" },
        { tr: "I'll put the walker next to the bed.", note: "stellen + neben das: accusative" },
        { tr: "The walker is next to the bed.", note: "stehen + neben dem: dative" }
      ]
    },
    vocab: [
      "mobilization (technical term)",
      "to mobilize, to get a patient up",
      "positioning of the patient (technical term)",
      "to reposition the patient",
      "the edge of the bed",
      "the wheelchair",
      "the rolling walker, rollator",
      "the pillow",
      "the pressure injury, decubitus ulcer (technical term)",
      "the bedsore, pressure ulcer (patient's word)",
      "the contracture (technical term)",
      "the joint stiffness (patient's word)"
    ],
    dialogue: [
      "Mr. Brandt, today we'll sit you up on the edge of the bed for the first time. Is that all right?",
      "Yes, but I'm a little scared.",
      "That's completely normal. My colleague will help me. First turn onto your side.",
      "Like this?",
      "Exactly. Now we put your feet on the floor, and you sit up slowly.",
      "I feel a bit dizzy.",
      "Then just stay sitting on the edge of the bed for now. We're right here with you.",
      "It's already better.",
      "Good. The wheelchair is next to the bed. Would you like to get into the wheelchair today too?"
    ],
    culture: {
      title: "A German view: the Rollator and Kinästhetik",
      text: "<p>On German streets the <i>Rollator</i>, a walker with wheels, brakes and a seat, is an everyday sight, and many older patients arrive at the hospital with their own. Always ask where they want it kept: for many it is what lets them get up on their own.</p><p>Many German nurses learn <i>Kinästhetik</i> in their training, an approach to movement that uses the patient's own abilities instead of lifting them as dead weight. You will hear about it on the unit: the core idea, letting the patient do everything they can, is the same as in lesson 4.</p>"
    },
    exercises: [
      {
        q: "You want to tell the patient: “Now I'll sit you up on the edge of the bed.” Which sentence is correct?",
        opts: [
          "Ich setze Sie jetzt an der Bettkante.",
          "Ich setze Sie jetzt an die Bettkante.",
          "Ich sitze Sie jetzt an die Bettkante."
        ],
        why: "<i>setzen</i> is movement toward a destination (<i>wohin?</i>), so <i>an</i> takes the accusative: <b>an die</b> Bettkante. <i>sitzen</i> takes no object."
      },
      {
        q: "Fill in: “Der Rollator steht neben ___ Bett.”",
        hint: "wo? das Bett in the dative",
        why: "<b>dem</b>: <i>stehen</i> describes a position (<i>wo?</i>), so <i>neben</i> takes the dative, and <i>das Bett</i> in the dative becomes <i>dem Bett</i>."
      },
      {
        q: "Fill in the right article.",
        tr: "We'll turn you onto your side. Now you're lying comfortably on your side.",
        why: "<i>Wir legen Sie auf die Seite</i>: movement, accusative. <i>Jetzt liegen Sie bequem auf der Seite</i>: position, dative."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Sie sitzen jetzt an der Bettkante.",
          "Ich stelle den Rollator neben dem Bett.",
          "Wir legen Sie auf die Seite.",
          "Der Rollstuhl steht neben dem Bett.",
          "Ich setze Sie in dem Rollstuhl."
        ],
        why: "<i>stellen</i> and <i>setzen</i> are movement and take the accusative: <i>neben das Bett</i>, <i>in den Rollstuhl</i>. <i>sitzen</i> and <i>stehen</i> are position and take the dative."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["edge of the bed", "wheelchair", "rolling walker", "pillow", "pressure ulcer", "positioning"]
      },
      {
        q: "Match the movement verb (wohin?) with the position verb (wo?).",
        pairs: ["sitzen", "liegen", "stehen"]
      },
      {
        q: "Put the words in order.",
        tr: "The wheelchair is next to the bed.",
        why: "<i>Der Rollstuhl steht neben dem Bett.</i> <i>stehen</i> describes the position: <i>neben</i> with the dative."
      },
      {
        q: "Translate: “I'll seat you in the wheelchair.”",
        why: "<i>Ich setze Sie in den Rollstuhl.</i> In German you sit “in” a wheelchair, with <i>in</i>, and there is movement: accusative, <i>in den</i>."
      },
      {
        q: "The doctor wrote “Dekubitus”. Complete for the patient: “Wir lagern Sie um, damit kein ___ entsteht.”",
        hint: "Druck + Geschwür",
        why: "<b>Druckgeschwür</b>, neuter like <i>das Geschwür</i>. Many patients also say <i>sich wundliegen</i>."
      },
      {
        q: "The patient wants to get up.",
        setting: "You help Mr. Brandt with his first mobilization.",
        lines: [
          { tr: "I'd like to get up today." },
          { tr: "Say that first you'll sit him up on the edge of the bed.", answerTr: "Good. First we'll sit you up on the edge of the bed." },
          { tr: "I feel a bit dizzy." },
          { tr: "Say that in that case he stays sitting on the edge of the bed for now.", answerTr: "Then stay sitting on the edge of the bed for now." },
          { tr: "Where is my walker?" },
          { tr: "Say that it's next to the bed.", answerTr: "It's next to the bed." }
        ]
      },
      {
        tr: "The wheelchair is next to the bed. Would you like to get into the wheelchair today too?",
        why: "In <i>Rollstuhl</i> the <b>st</b> at the start of <i>Stuhl</i> is [ʃt], like “sht”, even inside the compound; in <i>steht</i> the <b>h</b> lengthens the <b>e</b>; in <i>neben</i> the first <b>e</b> is long."
      },
      {
        tr: "Now I'll sit you up on the edge of the bed.",
        why: "In <i>setze</i> the initial <b>s</b> is voiced [z] and <b>tz</b> is [ts]; in <i>jetzt</i> the <b>j</b> is pronounced like English “y”; in <i>Bettkante</i> the stress falls on <b>Bett</b>."
      }
    ]
  },
  "lesson:pfl-u03-l3": {
    theme: "Meals and elimination",
    title: "Eating, drinking, elimination",
    objectives: [
      "offer help at mealtimes and ask whether the patient swallows well",
      "use modals with the patient: möchten, können, müssen, dürfen, sollen",
      "tell müssen nicht (not necessary) from dürfen nicht (not allowed)",
      "talk about urination, bowel movements and incontinence with respectful words"
    ],
    theory: [
      {
        h: "Questions that put the patient at ease",
        p: "Meals and elimination are moments when the patient depends on others, and words matter. You offer, you don't impose: <em>Möchten Sie etwas trinken? Soll ich Ihnen das Fleisch klein schneiden? Darf ich Ihnen helfen?</em> You ask simply and as one adult to another: <em>Müssen Sie zur Toilette? Konnten Sie Wasser lassen? Wann hatten Sie zuletzt Stuhlgang?</em> If the patient says they often choke on things (<em>Ich verschlucke mich oft</em>), thank them and report it to the physician: <em>Das gebe ich an die Ärztin weiter.</em>"
      },
      {
        h: "Modals with the patient",
        p: "Each modal has its own job. <strong>möchten</strong> offers (<em>Möchten Sie am Tisch essen?</em>); <strong>können</strong> asks about an ability (<em>Können Sie gut schlucken?</em>); <strong>müssen</strong> asks about a need (<em>Müssen Sie zur Toilette?</em>); <strong>dürfen</strong> asks permission (<em>Darf ich Ihnen helfen?</em>); <strong>sollen</strong> asks what the other person wants you to do (<em>Soll ich das Fenster öffnen?</em>). In a yes/no question the modal opens the sentence and the infinitive goes at the end. <em>wollen</em> is correct, but addressed to a patient it sounds abrupt: <em>möchten</em> is better."
      },
      {
        contrast: "On a US unit you would chart “dysphagia” but say “trouble swallowing” to anyone, colleagues included, and “void” or “BM” are the shorthand. In German the Latin and Greek terms are the professional register and you will hear them in every handover: <em>Dysphagie</em>, <em>Miktion</em>, <em>Defäkation</em>, <em>Inkontinenz</em>. With the patient you switch to <em>Schluckstörung</em> or <em>sich verschlucken</em>, <em>Wasser lassen</em>, <em>Stuhlgang</em>. For urinary incontinence many patients say <em>Blasenschwäche</em> (“bladder weakness”), which only covers the bladder: for stool there is no gentle equivalent, and you ask with a plain sentence. Keep the register adult: the German counterpart of “did you go potty?” sounds just as childish to a German patient as it does in English."
      },
      {
        trap: "The most dangerous false friend in this lesson: <em>Sie müssen nicht</em> looks like “you must not”, but it means “you don't have to”. “You must not” as a prohibition is <em>Sie dürfen nicht</em>. <em>Sie müssen sich nicht beeilen</em> reassures; <em>Sie dürfen sich nicht beeilen</em> sounds like an order. <em>Der Stuhl</em> is a chair, but on the unit it also means stool: <em>Stuhlgang</em>, <em>Stuhlprobe</em>. And <em>die Windel</em> is a baby's diaper: with an adult you say <em>Einlage</em> or <em>Inkontinenzeinlage</em>, the way you would say “brief” or “pad” rather than “diaper”."
      },
      {
        tip: "When you ask about elimination, lower your voice and check that nobody else is listening: <em>Darf ich Sie kurz etwas Persönliches fragen?</em> The question stays the same, but the patient answers more readily."
      }
    ],
    grammar: {
      title: "One modal for each intention",
      note: "The conjugated modal goes <b>first</b> in a yes/no question, the infinitive <b>at the end</b>. <b>müssen nicht</b> = not necessary; <b>dürfen nicht</b> = not allowed.",
      table: {
        head: ["modal", "with the patient", "what it is for"],
        rows: [
          ["möchten", "Möchten Sie etwas trinken?", "offering"],
          ["können", "Können Sie gut schlucken?", "asking about an ability"],
          ["müssen", "Müssen Sie zur Toilette?", "asking about a need"],
          ["dürfen", "Darf ich Ihnen beim Essen helfen?", "asking permission"],
          ["sollen", "Soll ich Ihnen das Fleisch klein schneiden?", "asking what the other person wants"],
          ["müssen nicht", "Sie müssen sich nicht beeilen.", "not necessary"]
        ]
      },
      examples: [
        { tr: "Would you like something to drink?", note: "möchten: the most polite way to offer" },
        { tr: "Can you swallow well?", note: "können: ability" },
        { tr: "Do you need to use the bathroom?", note: "müssen: a need; the movement verb can be left out" },
        { tr: "May I help you with your meal?", note: "dürfen: ask permission before stepping in" },
        { tr: "Shall I cut the meat into small pieces for you?", note: "sollen: “shall I...?”, i.e. “do you want me to...?”" },
        { tr: "There's no need to hurry.", note: "müssen nicht: not necessary, not a prohibition" }
      ]
    },
    vocab: [
      "the meal",
      "to swallow",
      "to choke on something, to have something go down the wrong way (ich verschlucke mich)",
      "dysphagia (technical term)",
      "trouble swallowing (patient's word)",
      "micturition, voiding (technical term)",
      "urinating (Wasser lassen: to pass water, patient's word)",
      "defecation (technical term)",
      "bowel movement, stool (patient's word)",
      "incontinence (technical term)",
      "urinary incontinence, weak bladder (patient's word)",
      "the incontinence pad, brief"
    ],
    dialogue: [
      "Mrs. Keller, lunch is here. Would you like to eat at the table or in bed?",
      "At the table, please.",
      "Shall I cut the meat into small pieces for you?",
      "Yes, that's kind of you. Lately things often go down the wrong way.",
      "Thank you for telling me. I'll let the doctor know. Would you like something to drink?",
      "A glass of water, please. And afterwards I need to use the bathroom.",
      "No problem. Ring the bell and I'll take you. There's no need to hurry."
    ],
    culture: {
      title: "A German view: meals on the unit",
      text: "<p>In many German hospitals and nursing homes dinner comes early, often between 5 and 6 p.m., and it is a cold meal: bread, cheese, cold cuts. It is called <i>Abendbrot</i>, literally “evening bread”. The hot meal is at lunchtime. Patients often choose the menu for the following days from a card, and those who have trouble swallowing can get modified textures when ordered.</p><p>For a patient from another culture the early hours and the cold evening meal can come as a surprise: asking what they like to eat is part of the admission history, not an extra courtesy.</p>"
    },
    exercises: [
      {
        q: "You want to ask the patient whether they need to use the bathroom. Which sentence is correct?",
        opts: ["Sie zur Toilette müssen?", "Müssen Sie zur Toilette?", "Müssen zur Toilette Sie?"],
        why: "In a yes/no question the modal <b>müssen</b> opens the sentence and the subject <i>Sie</i> follows right after it."
      },
      {
        tr: "Present tense of dürfen, all persons.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: in the singular the vowel is <b>a</b>, and the first and third person have no ending, as with the other modals."
      },
      {
        q: "Fill in: “___ Sie gut schlucken?”",
        hint: "modal of ability, Sie",
        why: "<b>Können</b>: you are asking about an ability. The modal opens the yes/no question and the infinitive <i>schlucken</i> goes at the end."
      },
      {
        q: "Fill in the modals.",
        tr: "May I help you with your meal? There's no need to hurry.",
        why: "In the first sentence <i>Darf</i>, <i>Kann</i> and <i>Soll ich</i> all work: each offers help. The second needs <i>müssen</i> with <i>nicht</i>: “not necessary”. <i>Sie dürfen sich nicht beeilen</i> would be a prohibition."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Möchten Sie etwas trinken?",
          "Können Sie gut schlucken?",
          "Müssen Sie zur Toilette gehen?",
          "Wollen Sie zu trinken etwas?",
          "Sie müssen nicht sich beeilen."
        ],
        why: "The conjugated modal opens the question and the infinitive goes at the end. In the last one the reflexive <i>sich</i> goes before <i>nicht</i>: <i>Sie müssen sich nicht beeilen</i>."
      },
      {
        q: "Match each technical term with the word the patient uses.",
        pairs: ["die Schluckstörung", "das Wasserlassen", "der Stuhlgang", "die Blasenschwäche"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["meal", "trouble swallowing", "urinating", "bowel movement", "weak bladder", "incontinence pad"]
      },
      {
        q: "Put the words in order.",
        tr: "Would you like to eat at the table?",
        why: "<i>Möchten Sie am Tisch essen?</i> The modal opens the question, the infinitive <i>essen</i> goes at the end; <i>am</i> is <i>an dem</i>, because it is a position."
      },
      {
        q: "Translate (to the patient): “Do you need to use the bathroom?”",
        why: "<i>Müssen Sie zur Toilette?</i> or <i>auf die Toilette</i>; you can add the verb <i>gehen</i> or leave it out."
      },
      {
        q: "During lunch.",
        setting: "You help Mrs. Keller with her meal.",
        lines: [
          { tr: "I'm thirsty." },
          { tr: "Ask whether she would like a glass of water.", answerTr: "Would you like a glass of water?" },
          { tr: "I also need to use the bathroom, but I'm so slow." },
          { tr: "Say that it's no problem and there's no need to hurry.", answerTr: "No problem, there's no need to hurry." },
          { tr: "When I drink, things often go down the wrong way." },
          { tr: "Thank her and say that you'll let the doctor know.", answerTr: "Thank you for telling me. I'll let the doctor know." }
        ]
      },
      {
        tr: "A glass of water, please. And afterwards I need to use the bathroom.",
        why: "In <i>Toilette</i>, a word of French origin, the stress falls on <b>let</b> and <b>oi</b> is pronounced [o̯a]; in <i>Wasser</i> the <b>w</b> sounds like English “v”; in <i>danach</i> <b>ch</b> after <b>a</b> is [x], a throaty sound English does not have."
      },
      {
        tr: "May I help you with your meal?",
        why: "In <i>Darf</i> the <b>r</b> after the vowel is barely heard; in <i>Ihnen</i> the <b>h</b> is silent and lengthens the <b>i</b>; in <i>helfen</i> the initial <b>h</b> is breathed, as in English."
      }
    ]
  },
  "lesson:pfl-u03-l4": {
    theme: "Independence",
    title: "On your own or with help?",
    objectives: [
      "ask about and describe what the patient can do alone",
      "use the infinitive with zu after versuchen, helfen, es ist wichtig, es fällt mir schwer",
      "remember that after modals the infinitive takes no zu",
      "recognize Thrombose and Prophylaxe and say them in the patient's words"
    ],
    theory: [
      {
        h: "Doing with the patient, not for them",
        p: "German nursing talks about <strong>aktivierende Pflege</strong>, activating care: the patient does everything they can, and the nurse helps where needed. That is why the key question is <em>Was schaffen Sie allein?</em> and the invitation is <em>Versuchen Sie bitte, das Hemd selbst anzuziehen.</em> If the patient asks you to go faster, you explain why: <em>Es ist wichtig, möglichst viel selbst zu machen. So bleiben Sie selbstständig.</em>"
      },
      {
        h: "The infinitive with zu",
        p: "After many verbs and expressions the infinitive takes <strong>zu</strong> and goes at the end, usually after a comma: <em>Versuchen Sie, allein aufzustehen. Es ist wichtig, sich zu bewegen. Es fällt mir schwer, die Strümpfe anzuziehen.</em> In separable verbs <em>zu</em> goes <strong>between</strong> the prefix and the verb: <em>aufstehen → aufzustehen</em>, <em>anziehen → anzuziehen</em>. After <strong>modals</strong>, on the other hand, the infinitive never takes <em>zu</em>: <em>Sie können allein aufstehen</em>. <em>brauchen</em> with a negation works like <em>müssen nicht</em>, but takes <em>zu</em>: <em>Sie brauchen sich nicht zu beeilen.</em>"
      },
      {
        contrast: "Here the two-register picture shifts: <em>Thrombose</em> is a word many German patients know and use, the way Americans say “blood clot” or “DVT”. The patient's word <em>Blutgerinnsel</em> means the clot itself, not the condition: they are not exact synonyms, and in a handover you say <em>Thrombose</em>. <em>Prophylaxe</em> is the everyday nursing word in German (<em>Thromboseprophylaxe</em>, <em>Dekubitusprophylaxe</em>), where an American nurse would just say “DVT prevention”; the patient says <em>Vorbeugung</em> or uses the verb <em>vorbeugen</em>. The stockings documented as <em>Kompressionsstrümpfe</em> (“compression stockings”, in the US often “TED hose”) many patients call <em>Thrombosestrümpfe</em>. The infinitive with <em>zu</em> often matches English “to”: “try to get dressed”, <em>versuchen Sie, sich anzuziehen</em>. After “can”, “must”, “may” English uses no “to”, exactly like German after modals. Watch out for “need to”, though: English says “you don't need to hurry”, and German <em>brauchen</em> also keeps its <em>zu</em>."
      },
      {
        trap: "<em>selbstständig</em> on the unit means “independent” with daily activities, but in the working world <em>selbstständig sein</em> means being self-employed. The verb <em>vorbeugen</em> has two meanings: <em>einer Thrombose vorbeugen</em> is preventing it, while <em>Beugen Sie sich bitte vor</em> means “please lean forward”. And <em>der Strumpf</em> is a stocking, while an ordinary sock is usually <em>die Socke</em>: the compression stocking is always <em>der Kompressionsstrumpf</em>."
      },
      {
        tip: "Before you help, always ask <em>Was schaffen Sie allein?</em> and give the patient time to try. The time you spend waiting today is independence the patient gains, and the sentence <em>Sie brauchen sich nicht zu beeilen</em> is often enough for them to find a movement again."
      }
    ],
    grammar: {
      title: "zu or nothing?",
      note: "After a <b>modal</b> the infinitive has <b>no zu</b>. After <b>versuchen</b>, <b>helfen</b>, <b>es ist wichtig</b>, <b>es fällt mir schwer</b> and <b>nicht brauchen</b> the infinitive takes <b>zu</b>, between prefix and verb in separable verbs.",
      table: {
        head: ["what governs the infinitive", "example", "zu?"],
        rows: [
          ["können, müssen, dürfen", "Sie können sich selbst waschen.", "no"],
          ["versuchen", "Versuchen Sie, sich selbst anzuziehen.", "yes"],
          ["es fällt mir schwer", "Es fällt mir schwer, allein aufzustehen.", "yes"],
          ["es ist wichtig", "Es ist wichtig, sich regelmäßig zu bewegen.", "yes"],
          ["nicht brauchen", "Sie brauchen sich nicht zu beeilen.", "yes"]
        ]
      },
      examples: [
        { tr: "Please try to get dressed on your own.", note: "anziehen is separable: anzuziehen" },
        { tr: "It's hard for me to get up on my own.", note: "es fällt mir schwer + zu" },
        { tr: "I'll help you put on the compression stockings.", note: "helfen + dative + zu" },
        { tr: "It's important to move regularly.", note: "the reflexive sich stays before zu" },
        { tr: "You can brush your teeth yourself.", note: "after the modal können: no zu" },
        { tr: "There's no need to hurry.", note: "nicht brauchen + zu = müssen nicht" }
      ]
    },
    vocab: [
      "independent, on one's own",
      "independence",
      "help",
      "support, assistance",
      "to try",
      "to manage, to make it",
      "to get up",
      "thrombosis (DVT is one kind)",
      "the blood clot (patient's word)",
      "prophylaxis (technical term)",
      "prevention (patient's word)",
      "the compression stocking"
    ],
    dialogue: [
      "Mr. Brandt, what can you already do on your own today?",
      "I can manage washing on my own. But putting on the stockings is hard for me.",
      "I'll gladly help you with those. Please try to put your shirt on yourself.",
      "Why don't you do it for me? It's faster.",
      "It's important to do as much as possible yourself. That way you stay independent.",
      "All right then. And do I have to walk again today?",
      "Yes, let's walk to the window together. Moving is good prevention against blood clots."
    ],
    culture: {
      title: "A German view: aktivierende Pflege",
      text: "<p>The idea that care should preserve and train the patient's abilities instead of replacing them is central to German nursing education, and it has a name: <i>aktivierende Pflege</i>. In practice it means leaving the patient the comb, the washcloth and the time to button their own shirt, even when doing it for them would be faster.</p><p>In the documentation you will often see the word <i>Ressourcen</i>: the abilities the patient still has and that the care plan aims to preserve. It comes back in the unit on handover and the nursing report.</p>"
    },
    exercises: [
      {
        q: "You want to tell the patient: “Try to get dressed on your own.” Which sentence is correct?",
        opts: [
          "Versuchen Sie, sich selbst anziehen.",
          "Versuchen Sie, sich selbst anzuziehen.",
          "Versuchen Sie, sich selbst zu anziehen."
        ],
        why: "After <i>versuchen</i> the infinitive takes <b>zu</b>, and in separable verbs <i>zu</i> goes between prefix and verb: <b>anzuziehen</b>, one word."
      },
      {
        q: "Fill in: “Es fällt mir schwer, allein ___.”",
        hint: "aufstehen with zu",
        why: "<b>aufzustehen</b>: <i>aufstehen</i> is separable, so <i>zu</i> goes between <i>auf</i> and <i>stehen</i>."
      },
      {
        q: "Fill in: the first sentence has a modal, the second does not.",
        tr: "You can wash yourself. Please also try to get dressed on your own.",
        why: "<i>Sie können sich selbst waschen</i>: after the modal <i>können</i> the infinitive has no <i>zu</i>. <i>Versuchen Sie bitte, sich auch selbst anzuziehen</i>: after <i>versuchen</i> you need <i>zu</i>."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Ich versuche, allein zu gehen.",
          "Ich kann allein zu gehen.",
          "Es ist wichtig, sich zu bewegen.",
          "Sie müssen nicht sofort aufzustehen.",
          "Ich helfe Ihnen, aufzustehen."
        ],
        why: "<i>versuchen</i>, <i>es ist wichtig</i> and <i>helfen</i> take the infinitive with <i>zu</i>. After the modals <i>können</i> and <i>müssen</i> the infinitive has no <i>zu</i>: <i>Ich kann allein gehen</i>, <i>Sie müssen nicht sofort aufstehen</i>."
      },
      {
        q: "Match each technical term with the word the patient uses.",
        pairs: ["der Gefäßverschluss durch ein Blutgerinnsel", "die Vorbeugung", "das Druckgeschwür", "die Gelenkversteifung"]
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["thrombosis", "blood clot", "prophylaxis", "prevention", "compression stocking", "independence"]
      },
      {
        q: "Put the words in order.",
        tr: "It's important to move regularly.",
        why: "<i>Es ist wichtig, sich regelmäßig zu bewegen.</i> After the comma the infinitive with <i>zu</i> goes at the end; <i>sich</i> and the adverb come before it."
      },
      {
        q: "Translate (the patient says it): “I can manage on my own.”",
        why: "<i>Das schaffe ich allein</i> or <i>Ich schaffe das allein</i>. <i>schaffen</i> is the typical verb for “to manage”; <i>alleine</i> is the spoken variant."
      },
      {
        tr: "Present tense of können, all persons.",
        why: "<i>Kann, kannst, kann, können, könnt, können</i>: in the singular the vowel is <b>a</b>, without umlaut, and the first and third person have no ending."
      },
      {
        q: "The patient wants to hurry.",
        setting: "Mr. Brandt would like you to dress him.",
        lines: [
          { tr: "Can't you just dress me? It's faster." },
          { tr: "Say that you're happy to help, but first he should try to put his shirt on himself.", answerTr: "I'm happy to help, but first try to put your shirt on yourself." },
          { tr: "But I can't manage the stockings." },
          { tr: "Say that it's no problem and you'll help him with those.", answerTr: "No problem, I'll help you with those." },
          { tr: "Do I have to walk again today?" },
          { tr: "Say yes: it's important to move every day.", answerTr: "Yes, it's important to move every day." }
        ]
      },
      {
        tr: "It's important to do as much as possible yourself. That way you stay independent.",
        why: "In <i>wichtig</i> both the <b>ch</b> and the final <b>g</b> are pronounced [ç]; in <i>möglichst</i> the <b>ö</b> is long; in <i>selbstständig</i> the <b>st</b> of <i>ständig</i> is [ʃt]."
      },
      {
        tr: "Please try to get dressed on your own.",
        why: "In <i>Versuchen</i> the <b>v</b> is pronounced [f] and the stress falls on <b>su</b>; in <i>anzuziehen</i> both <b>z</b> are [ts] and <b>ie</b> is long, with a silent <b>h</b>."
      }
    ]
  },
  "lesson:pfl-u03-test": {
    theme: "Review",
    title: "Test: Basic care and mobilization",
    objectives: [
      "check reflexive verbs for hygiene, wohin? and wo? with prepositions, modals with the patient and Fachsprache / Laiensprache pairs"
    ],
    theory: [
      {
        p: "Eleven questions on the whole unit. The pass mark is 70%. The clinical situations are teaching examples: how a patient is assisted, and with which aids, is decided by the nursing assessment and the facility's protocol."
      }
    ],
    exercises: [
      {
        q: "The patient is sitting on the edge of the bed. How do you describe it?",
        opts: ["Er sitzt an die Bettkante.", "Er sitzt an der Bettkante.", "Er setzt an der Bettkante."],
        why: "<i>sitzen</i> describes a position (<i>wo?</i>), so <i>an</i> takes the dative: <b>an der</b> Bettkante."
      },
      {
        q: "Fill in: “Ich wasche ___ die Hände.”",
        hint: "ich, with an object",
        why: "<b>mir</b>: there is an object, <i>die Hände</i>, so the reflexive switches to the dative."
      },
      {
        q: "Fill in: “Ich stelle den Rollator neben ___ Bett.”",
        hint: "wohin? das Bett in the accusative",
        why: "<b>das</b>: <i>stellen</i> is movement toward a destination, so <i>neben</i> takes the accusative."
      },
      {
        tr: "Present tense of sich anziehen, all persons.",
        why: "<i>Ziehe mich an, ziehst dich an, zieht sich an, ziehen uns an, zieht euch an, ziehen sich an</i>: the reflexive follows the verb and the prefix <i>an</i> goes at the end."
      },
      {
        q: "Match each technical term with the word the patient uses.",
        pairs: ["die Schluckstörung", "die Blasenschwäche", "das Druckgeschwür", "die Vorbeugung"]
      },
      {
        q: "Which sentences are correct with a patient?",
        opts: [
          "Sie müssen sich nicht beeilen.",
          "Wir legen Sie auf der Seite.",
          "Können Sie gut schlucken?",
          "Es fällt mir schwer, allein aufzustehen.",
          "Ich kann allein aufzustehen."
        ],
        why: "<i>legen</i> is movement and takes the accusative: <i>auf die Seite</i>. After the modal <i>können</i> the infinitive has no <i>zu</i>: <i>Ich kann allein aufstehen</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "Now we'll turn you onto your side. Are you comfortable?",
        why: "<i>Wir legen Sie jetzt auf die Seite</i>: movement, accusative. <i>Liegen Sie bequem?</i>: a yes/no question about the position, with the verb <i>liegen</i> first."
      },
      {
        q: "Put the words in order.",
        tr: "May I help you with your meal?",
        why: "<i>Darf ich Ihnen beim Essen helfen?</i> The modal opens the question, <i>helfen</i> goes at the end, and the person helped is in the dative, <i>Ihnen</i>."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["washcloth", "edge of the bed", "bowel movement", "pressure ulcer", "blood clot", "perineal care"]
      },
      {
        tr: "You wash your face and arms yourself. Afterwards we'll sit you up on the edge of the bed.",
        why: "In <i>Gesicht</i> <b>ch</b> is [ç]; in <i>Arme</i> the <b>r</b> is barely heard; in <i>Bettkante</i> the stress falls on <b>Bett</b>."
      },
      {
        tr: "Do you need to use the bathroom?",
        why: "In <i>Müssen</i> the <b>ü</b> is short and rounded, like “ee” with rounded lips; in <i>zur</i> the <b>z</b> is [ts]; in <i>Toilette</i> the stress falls on <b>let</b>."
      }
    ]
  }
});
