/* ============================================================
   Learner-language text (en) for data/core/c1-01.js.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c1-u01": {
    title: "The faces of werden",
    grammarNote: "The five functions of werden (become, future, supposition, passive, würde) · geworden and worden · the Futur II of supposition · adjectives and participles used as nouns (der Bekannte, ein Bekannter) · etwas Neues, alles Gute · höchst, äußerst, überaus and the superlative with am"
  },
  "lesson:c1-u01-l1": {
    theme: "Changes and forecasts",
    title: "One word, five functions",
    objectives: [
      "recognize the five functions of werden in a text",
      "make suppositions about the past with the Futur II",
      "tell geworden from worden in the Perfekt",
      "not mistake a present passive for a future"
    ],
    theory: [
      {
        h: "What comes with werden",
        p: "To understand what <strong>werden</strong> does in a sentence, look at what comes with it. With a noun or an adjective it is a full verb, “to become”: <em>Sie wird Ärztin. Es wird dunkel.</em> With an infinitive it forms the <strong>future</strong> (<em>Wir werden Sie informieren</em>) or, often with <em>wohl</em>, a <strong>supposition</strong> (<em>Er wird wohl im Büro sein</em>). With a past participle it forms the <strong>passive</strong>: <em>Der Antrag wird bearbeitet.</em> The form <strong>würde</strong> + infinitive is the Konjunktiv II: <em>Ich würde das nicht tun.</em> For a supposition about the past German uses the <strong>Futur II</strong>, <em>werden</em> + past participle + <em>haben</em> or <em>sein</em>: <em>Er wird den Termin wohl vergessen haben. Sie wird schon losgefahren sein.</em>"
      },
      {
        h: "geworden or worden",
        p: "In the Perfekt the full verb uses <strong>geworden</strong>: <em>Sie ist Ärztin geworden. Es ist dunkel geworden.</em> The passive uses <strong>worden</strong>, without <em>ge-</em>: <em>Das Haus ist 1950 gebaut worden.</em> Both take <em>sein</em> as their auxiliary."
      },
      {
        contrast: "English spreads these functions over different words: <em>become</em> or <em>get</em>, <em>will</em> for the future, <em>must</em> or <em>will</em> for suppositions (<em>he must have forgotten</em>, <em>she'll have left already</em>), <em>be</em> in the passive, <em>would</em>. German always has <em>werden</em>, and the function only shows from the rest of the sentence."
      },
      {
        trap: "<em>Der Antrag wird bearbeitet</em> is not a future: it is a present passive, “the application is being processed”. And German <em>bekommen</em> never means “to become”: it means “to get, to receive”. <em>Ich bekomme einen Brief</em> is “I'm getting a letter”."
      },
      {
        tip: "Faced with a difficult <em>werden</em>, look at the end of the clause: a past participle (<em>bearbeitet</em>) signals the passive, an infinitive (<em>informieren, sein</em>) the future or a supposition, a participle + <em>haben/sein</em> the Futur II."
      }
    ],
    grammar: {
      title: "The functions of werden",
      note: "<b>Noun or adjective</b>: to become. <b>Infinitive</b>: future or, often with <i>wohl</i>, supposition. <b>Past participle</b>: passive. <b>würde + infinitive</b>: Konjunktiv II. Perfekt: <i>geworden</i> (become), <i>worden</i> (passive).",
      table: {
        head: ["function", "what comes with it", "example"],
        rows: [
          ["to become", "a noun or an adjective", "Sie wird Ärztin."],
          ["future", "an infinitive", "Wir werden Sie informieren."],
          ["supposition", "an infinitive, often with wohl", "Er wird wohl im Büro sein."],
          ["passive", "a past participle", "Der Antrag wird bearbeitet."],
          ["Konjunktiv II", "würde + infinitive", "Ich würde das nicht tun."]
        ]
      },
      examples: [
        { tr: "She is becoming a doctor.", note: "full verb, with a noun" },
        { tr: "It's slowly getting dark.", note: "full verb, with an adjective" },
        { tr: "We will inform you in good time.", note: "future: werden + infinitive" },
        { tr: "The application is being processed right now.", note: "present passive, not a future" },
        { tr: "If I were you, I wouldn't do that.", note: "Konjunktiv II with würde" },
        { tr: "He'll probably still be at the office.", note: "supposition: werden + wohl + infinitive" }
      ]
    },
    vocab: [
      "the change",
      "the development, the trend",
      "the state, the condition",
      "the assumption, the guess",
      "the forecast",
      "the application (official)",
      "to change",
      "to arise, to come into being",
      "to suppose, to assume",
      "to process, to deal with (a case)",
      "gradually",
      "presumably, probably"
    ],
    exercises: [
      {
        q: "In a message from the hospital: «Ihr Vater wird morgen früh operiert.» What does werden do here?",
        opts: [
          "it forms a present passive, with a future meaning because of morgen",
          "it forms an active future: the father will operate",
          "it expresses a supposition: he may be operated on"
        ],
        why: "With the past participle <i>operiert</i> it is a <b>passive</b>; the present has a future meaning thanks to <i>morgen früh</i>, as often in German. There is no <i>wohl</i> and no infinitive: it is not a supposition."
      },
      {
        q: "A colleague is worried about a figure in a report. You answer: «Das wird schon stimmen.» What are you saying?",
        opts: [
          "a reassuring supposition: “it'll be right, I'm sure”",
          "a prediction: “it will become right”",
          "a passive: “it is being corrected”"
        ],
        why: "<i>werden</i> + infinitive with <i>schon</i> expresses a reassuring <b>supposition</b>; <i>stimmen</i> is an infinitive, not a participle, so it isn't a passive."
      },
      {
        q: "Fill in: «Er ist Arzt ___.»",
        opts: [
          "geworden",
          "worden",
          "werden"
        ],
        why: "<i>werden</i> as a full verb (“to become”) has the participle <b>geworden</b>. <i>worden</i> belongs to the passive only."
      },
      {
        q: "Fill in, in the passive: «Das Haus ist 1950 gebaut ___.»",
        hint: "participle of werden in the passive",
        why: "<b>worden</b>: in the Perfekt passive the participle of <i>werden</i> loses <i>ge-</i>."
      },
      {
        q: "Your friend didn't show up for the appointment. Make a guess: «Er wird den Termin wohl vergessen ___.»",
        hint: "Futur II: werden + participle + auxiliary",
        why: "<b>haben</b>: a supposition about the past with the Futur II, <i>wird ... vergessen haben</i>, “he must have forgotten the appointment”."
      },
      {
        q: "Complete the sentence.",
        tr: "If I were you, I wouldn't do that.",
        why: "<i>An deiner Stelle würde ich das nicht tun</i> (or <i>machen</i>): Konjunktiv II with <i>würde</i> and the infinitive at the end."
      },
      {
        q: "In which sentences does werden form the passive?",
        opts: [
          "Der Brief wird morgen geschickt.",
          "Die Tür wurde geöffnet.",
          "Er wird morgen kommen.",
          "Sie wird Lehrerin."
        ],
        why: "The first two have a past participle (<i>geschickt, geöffnet</i>): passive. In the third <i>werden</i> + infinitive is a future, in the fourth with a noun it means “to become”."
      },
      {
        q: "Rewrite with the Futur II of supposition: “He has probably forgotten the appointment.” (der Termin)",
        why: "<i>Er wird den Termin wohl vergessen haben</i>: <i>werden</i> + participle + <i>haben</i>, with <i>wohl</i> or <i>vermutlich</i> for “probably” (<i>sicher</i> would sound more certain)."
      },
      {
        tr: "The city keeps getting bigger. In ten years it will probably have twice as many inhabitants, and many old houses will be torn down.",
        why: "In <i>Einwohner</i> the stress falls on <b>Ein</b>; in <i>doppelt</i> the <b>o</b> is short; in <i>abgerissen</i> the <b>b</b> before <i>g</i> sounds like [p]."
      },
      {
        tr: "If I had more time, I would become a doctor.",
        why: "In <i>hätte</i> the <b>ä</b> is short; in <i>Ärztin</i> the <b>ä</b> is long and the <b>z</b> is [ts]; in <i>werden</i> the <b>e</b> is long."
      }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "People and judgments",
    title: "der Bekannte, etwas Neues",
    objectives: [
      "decline adjectives and participles used as nouns",
      "choose the ending by the article (der Bekannte, ein Bekannter)",
      "use etwas, nichts and alles with a nominalized adjective",
      "pass judgment on a result"
    ],
    theory: [
      {
        h: "The adjective that becomes a noun",
        p: "Many people are named with an adjective or participle used as a noun: <em>der Bekannte</em> (the acquaintance), <em>der Angestellte</em> (the employee), <em>der Erwachsene</em>, <em>der Verletzte</em>. They are capitalized but declined like adjectives: the ending depends on the article. <em>der Bekannte, die Bekannten</em>, but <em>ein Bekannter, Bekannte</em> (plural with no article). With <em>kein</em>, the singular follows <em>ein</em> (<em>kein Bekannter</em>) and the plural follows the possessives (<em>keine Bekannten</em>)."
      },
      {
        h: "etwas Neues, nichts Besseres, alles Gute",
        p: "After <strong>etwas, nichts, viel, wenig</strong> the nominalized adjective is neuter, capitalized, with the ending <em>-es</em> in the nominative and accusative: <em>etwas Neues, nichts Besseres, viel Interessantes</em>. After <strong>alles</strong> it takes <em>-e</em>: <em>alles Gute, alles Wichtige</em>."
      },
      {
        contrast: "English turns adjectives into nouns only in a few fixed cases (<em>the rich, the injured</em>) and otherwise needs a noun (<em>an acquaintance, an employee</em>). German does it freely, and the ending follows the article: <em>der Bekannte</em> but <em>ein Bekannter</em>. And <em>something new</em> is <em>etwas Neues</em>, with a capital and <em>-es</em>."
      },
      {
        trap: "Don't treat these words as weak masculine nouns: <em>der Bekannte</em> behaves like an adjective, so <em>mit einem Bekannten</em>, but <em>ein Bekannter</em> in the nominative, not <em>ein Bekannte</em>. And in the plural with no article: <em>Wir haben Verwandte in Wien</em>, not <em>Verwandten</em>."
      },
      {
        tip: "If you're unsure of the ending, imagine a noun after the adjective: <em>ein bekannter (Mann)</em> → <em>ein Bekannter</em>; <em>dem bekannten (Mann)</em> → <em>dem Bekannten</em>."
      }
    ],
    grammar: {
      title: "Adjectives and participles used as nouns",
      note: "Declined like adjectives: <b>der Bekannte</b>, <b>ein Bekannter</b>, <b>die Bekannten</b>, <b>Bekannte</b>. After <i>etwas, nichts, viel, wenig</i>: <b>-es</b> (etwas Neues). After <i>alles</i>: <b>-e</b> (alles Gute).",
      table: {
        head: ["", "with der, die, das", "with ein or no article"],
        rows: [
          ["masculine", "der Bekannte", "ein Bekannter"],
          ["feminine", "die Bekannte", "eine Bekannte"],
          ["plural", "die Bekannten", "Bekannte"],
          ["masculine dative", "dem Bekannten", "einem Bekannten"]
        ]
      },
      examples: [
        { tr: "An acquaintance recommended the apartment to me.", note: "ein Bekannter: -er after ein" },
        { tr: "The employees are working longer today.", note: "die Angestellten: -en after die" },
        { tr: "The injured man was taken to the hospital.", note: "der Verletzte: a participle used as a noun" },
        { tr: "I learned something new.", note: "etwas Neues: capital and -es" },
        { tr: "There's nothing better than fresh bread.", note: "nichts Besseres: a comparative used as a noun" },
        { tr: "Happy birthday!", note: "alles Gute: -e after alles" }
      ]
    },
    vocab: [
      "the acquaintance",
      "the employee",
      "the adult",
      "the relative",
      "the young person, the teenager",
      "the member of parliament",
      "excellent",
      "mediocre",
      "successful, well done",
      "failed, unsuccessful",
      "convincing",
      "unique"
    ],
    exercises: [
      {
        q: "In business news: «Die Zahl der ___ ist im Herbst gestiegen.»",
        opts: [
          "Arbeitslosen",
          "Arbeitslose",
          "Arbeitsloser"
        ],
        why: "Genitive plural after <i>der</i>: the nominalized adjective takes <b>-en</b>, <i>die Zahl der Arbeitslosen</i>. <i>Arbeitslose</i> is the nominative or accusative plural with no article; <i>Arbeitsloser</i> is the singular after <i>ein</i> or the genitive plural with no article (<i>die Zahl Arbeitsloser</i>)."
      },
      {
        q: "Fill in: «Ich habe mit dem ___ gesprochen.»",
        opts: [
          "Angestellten",
          "Angestellter",
          "Angestellte"
        ],
        why: "After <i>dem</i> (dative) the nominalized adjective takes <b>-en</b>: <i>dem Angestellten</i>."
      },
      {
        q: "Fill in: «Ich wünsche dir alles ___!»",
        opts: [
          "Gute",
          "Gutes",
          "Guten"
        ],
        why: "After <i>alles</i> the nominalized adjective takes <b>-e</b>: <i>alles Gute</i>."
      },
      {
        q: "Fill in: «Es gibt nichts ___ als frisches Brot.»",
        opts: [
          "Besseres",
          "Bessere",
          "Besser"
        ],
        why: "After <i>nichts</i> the nominalized adjective is neuter with <b>-es</b>: <i>nichts Besseres</i>, comparatives included."
      },
      {
        q: "Complete the sentence: “teenagers” in the first gap, “adults” in the second.",
        tr: "Admission is free for teenagers; adults pay ten euros.",
        why: "<i>Jugendliche</i> and <i>Erwachsene</i>: plural with no article, so <i>-e</i>, not <i>-en</i>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "the acquaintance",
          "the employee",
          "the relative",
          "the member of parliament"
        ]
      },
      {
        q: "Put the words in order.",
        tr: "The injured man was taken to the hospital.",
        why: "<i>Der Verletzte wurde ins Krankenhaus gebracht.</i> <i>der Verletzte</i> is a participle used as a noun; <i>wurde ... gebracht</i> is a passive in the Präteritum."
      },
      {
        q: "Translate: “I talked to an acquaintance of the injured man.”",
        why: "<i>Ich habe mit einem Bekannten des Verletzten gesprochen</i>: two nominalized adjectives, dative after <i>mit einem</i> (<i>Bekannten</i>) and genitive after <i>des</i> (<i>Verletzten</i>), both in <i>-en</i>."
      },
      {
        tr: "Yesterday I ran into an old acquaintance. He told me something interesting: his company is looking for new employees.",
        why: "In <i>Bekannten</i> the stress falls on <b>kann</b>; in <i>Interessantes</i> on <b>sant</b>; in <i>Angestellte</i> on <b>An</b>."
      },
      {
        tr: "For adults, admission costs twelve euros.",
        why: "In <i>Erwachsene</i> the stress falls on <b>wach</b> and <b>chs</b> is [ks]; in <i>Eintritt</i> on <b>Ein</b>; in <i>zwölf</i> the <b>ö</b> is short."
      }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Judging quality",
    title: "höchst, äußerst, am besten",
    objectives: [
      "express a very high degree without comparison",
      "tell äußerst schwierig from am schwierigsten",
      "use höchst, äußerst, überaus, ziemlich",
      "choose an intensifier that fits the register"
    ],
    theory: [
      {
        h: "A very high degree without comparison",
        p: "To say that something has a quality to a very high degree, without comparing it to anything, German puts an adverb before the adjective: <em>sehr</em> and, in writing, <strong>höchst</strong>, <strong>äußerst</strong>, <strong>überaus</strong>, <strong>besonders</strong>. <em>Das ist ein höchst interessanter Vorschlag. Die Lage ist äußerst schwierig.</em> To tone it down: <strong>ziemlich</strong> (rather), <em>relativ</em>, <em>einigermaßen</em>."
      },
      {
        h: "The superlative stays a comparison",
        p: "As a rule <em>am</em> + superlative (<em>am kürzesten, am besten</em>) compares one thing with others; there are also uses without a real comparison, such as <em>Das weißt du am besten selbst</em>. The ordinary value, the one in this lesson, is the comparison: <em>Von den drei Wegen ist dieser am kürzesten.</em> Formal writing also has <em>aufs</em> + superlative, capitalized or not, for a very high degree: <em>Sie hat uns aufs Herzlichste begrüßt.</em>"
      },
      {
        contrast: "English uses <em>most</em> both ways: <em>the most difficult</em> (a comparison) and <em>a most interesting proposal</em> (a very high degree). German keeps them apart: <em>am schwierigsten</em> compares, <em>äußerst schwierig</em> just intensifies. English <em>extremely</em> and <em>highly</em> map well onto <em>äußerst</em> and <em>höchst</em>."
      },
      {
        trap: "<em>höchst</em> before an adjective is an adverb and doesn't change: <em>ein höchst interessanter Vorschlag</em>, not <em>ein höchster interessanter Vorschlag</em>. Only the following adjective takes an ending."
      },
      {
        tip: "In speech you'll also hear <em>total, echt, super</em> (<em>echt gut, total spannend</em>); in a formal letter or a report stick to <em>äußerst, höchst, überaus</em>."
      }
    ],
    grammar: {
      title: "Very high degree and superlative",
      note: "<b>höchst, äußerst, überaus, besonders</b> + adjective: very high degree, no comparison. <b>am</b> + superlative: comparison. <b>aufs</b> + superlative: very high degree, formal writing.",
      table: {
        head: ["form", "meaning", "example"],
        rows: [
          ["sehr, äußerst, höchst + adjective", "very high degree", "Die Lage ist äußerst schwierig."],
          ["ziemlich + adjective", "fairly high degree", "Der Film war ziemlich langweilig."],
          ["am + superlative", "comparison", "Dieser Weg ist am kürzesten."],
          ["aufs + superlative", "very high degree, formal", "Sie hat uns aufs Herzlichste begrüßt."]
        ]
      },
      examples: [
        { tr: "That is a highly interesting proposal.", note: "höchst: an adverb, not declined" },
        { tr: "The situation is extremely difficult.", note: "äußerst: no comparison" },
        { tr: "The project was exceptionally successful.", note: "überaus: formal writing" },
        { tr: "This route is the shortest.", note: "am kürzesten: comparison" },
        { tr: "She welcomed us most warmly.", note: "aufs Herzlichste: formal" },
        { tr: "The movie was rather boring.", note: "ziemlich: tones it down" }
      ]
    },
    vocab: [
      "the quality",
      "the impression",
      "the rating, the review",
      "the judgment, the verdict",
      "the standard, the yardstick",
      "the performance, the achievement",
      "highly, most",
      "extremely",
      "exceedingly",
      "rather, fairly",
      "impressive",
      "remarkable"
    ],
    exercises: [
      {
        q: "How do you say “extremely difficult”, without comparison?",
        opts: [
          "äußerst schwierig",
          "am schwierigsten",
          "schwierigst"
        ],
        why: "No comparison: adverb + adjective, <b>äußerst schwierig</b>. <i>am schwierigsten</i> is “the most difficult” in a comparison."
      },
      {
        q: "Of the three routes, this is the shortest: «Von den drei Wegen ist dieser ___.»",
        opts: [
          "am kürzesten",
          "äußerst kurz",
          "höchst kurz"
        ],
        why: "There is a comparison among three routes: <b>am kürzesten</b>. <i>äußerst kurz</i> would only say it is very short."
      },
      {
        q: "You're replying by letter to a business offer. Which sentence expresses very strong interest, without comparison and in the right register?",
        opts: [
          "Ihr Angebot ist für uns äußerst interessant.",
          "Ihr Angebot ist für uns echt super.",
          "Ihr Angebot ist für uns am interessantesten."
        ],
        why: "In a formal letter you use <b>äußerst</b> (or <i>höchst</i>); <i>echt super</i> is informal speech. <i>am interessantesten</i> is a comparison, and here there is nothing to compare with."
      },
      {
        q: "Fill in with the superlative of kurz: «Dieser Weg ist am ___.»",
        hint: "superlative of kurz, with ü",
        why: "<b>kürzesten</b>: <i>kurz</i> takes an umlaut and <i>-esten</i> after <i>z</i>."
      },
      {
        q: "Fill in: «Die Aussicht ist ___ beeindruckend.»",
        hint: "“extremely”, starts with ä",
        why: "<b>äußerst</b>: a very high degree without comparison, typical of writing."
      },
      {
        q: "Complete the sentence.",
        tr: "She welcomed us most warmly.",
        why: "<i>Sie hat uns aufs Herzlichste begrüßt</i> (also spelled <i>aufs herzlichste</i>): <i>aufs</i> + superlative, a formula of formal writing."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "the rating, the review",
          "the judgment",
          "the standard, the yardstick",
          "the impression"
        ]
      },
      {
        q: "Write in formal register: “The result is extremely remarkable, even though the costs were rather high.”",
        why: "<i>Das Ergebnis ist äußerst bemerkenswert, auch wenn die Kosten ziemlich hoch waren</i>: <i>äußerst</i> (or <i>höchst, überaus</i>) for the high degree, <i>ziemlich</i> to tone down; <i>obwohl</i> and the Perfekt <i>gewesen sind</i> work too."
      },
      {
        tr: "The new exhibition is really worth seeing. The paintings are highly unusual, and the visitors were exceedingly impressed.",
        why: "In <i>Ausstellung</i> the stress falls on <b>Aus</b>; in <i>sehenswert</i> the <b>h</b> is silent; in <i>ungewöhnlich</i> the stress falls on <b>un</b>."
      },
      {
        tr: "That is a highly remarkable result.",
        why: "In <i>bemerkenswertes</i> the stress falls on <b>mer</b>; in <i>Ergebnis</i> on <b>geb</b>; in <i>höchst</i> the <b>ch</b> is [ç]."
      }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Check",
    title: "Test: The faces of werden",
    objectives: [
      "check the functions of werden, nominalized adjectives and the very high degree"
    ],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Fill in: «Sie ist Ärztin ___.»",
        hint: "participle of werden “to become”",
        why: "<b>geworden</b>: with the meaning “to become” the participle has <i>ge-</i>."
      },
      {
        q: "Fill in: «Ich habe gestern mit einem ___ von dir gesprochen.»",
        hint: "from bekannt, masculine, dative after einem",
        why: "<b>Bekannten</b>: after <i>einem</i> (dative) the nominalized adjective takes <i>-en</i>."
      },
      {
        q: "Fill in: «Wir wohnen zurzeit in der Wohnung eines ___.»",
        hint: "from verwandt, masculine, genitive after eines",
        why: "<b>Verwandten</b>: after <i>eines</i> (genitive) the nominalized adjective takes <i>-en</i>."
      },
      {
        q: "Your colleague isn't answering the phone. What does «Sie wird den Zug verpasst haben» mean?",
        opts: [
          "a supposition about the past: “she'll have missed the train”",
          "a future: “she will miss the train”",
          "a passive: “the train has been missed”"
        ],
        why: "<i>werden</i> + participle + <i>haben</i> is the <b>Futur II</b>: here a supposition about something that has already happened."
      },
      {
        q: "What does «Er wird wohl krank sein» express?",
        opts: [
          "a supposition",
          "a passive",
          "an order"
        ],
        why: "<i>werden</i> + infinitive with <i>wohl</i>: a <b>supposition</b>, “he's probably ill”."
      },
      {
        q: "A guest is late. Which sentence expresses the weakest supposition?",
        opts: [
          "Er wird vielleicht noch kommen.",
          "Er wird sicher noch kommen.",
          "Er kommt bestimmt noch."
        ],
        why: "<b>vielleicht</b> leaves the possibility open; <i>sicher</i> and <i>bestimmt</i> express a very strong supposition."
      },
      {
        q: "Of all the candidates, she is the best: «Von allen Kandidaten ist sie ___.»",
        opts: [
          "am besten",
          "äußerst gut",
          "höchst gut"
        ],
        why: "There is a comparison with the other candidates: <b>am besten</b>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "the adult",
          "the young person",
          "the relative",
          "the employee"
        ]
      },
      {
        tr: "The project will probably not be completed until next year. The costs are extremely high, and many employees will probably have to work longer.",
        why: "In <i>vermutlich</i> the stress falls on <b>mut</b>; in <i>abgeschlossen</i> the <b>b</b> sounds like [p]; in <i>äußerst</i> the <b>äu</b> is [ɔʏ]."
      },
      {
        tr: "An acquaintance of mine has become a member of parliament.",
        why: "In <i>Abgeordneter</i> the stress falls on <b>Ab</b>; in <i>geworden</i> the <b>o</b> is short; in <i>Bekannter</i> the stress falls on <b>kann</b>."
      }
    ]
  },
  "unit:c1-u02": {
    title: "Getting things done",
    grammarNote: "Noun-verb collocations (zur Verfügung stellen, in Frage kommen, eine Entscheidung treffen) · passive substitutes: sich lassen, sein + zu, adjectives in -bar · separable and inseparable prefixes with different meanings (umfahren) · idioms"
  },
  "lesson:c1-u02-l1": {
    theme: "Work and projects",
    title: "Noun-verb collocations",
    objectives: [
      "understand and use the noun-verb collocations of formal texts",
      "choose the right verb for the noun (eine Entscheidung treffen)",
      "place the prepositional group near the end of the clause",
      "read a short notice or set of minutes"
    ],
    theory: [
      {
        h: "The noun carries the meaning",
        p: "In formal texts many actions are expressed with a <strong>noun</strong> that carries the meaning and an almost empty <strong>verb</strong>: <em>eine Entscheidung treffen</em> (to decide), <em>zur Verfügung stellen</em> (to make available), <em>in Kraft treten</em> (to come into force), <em>in Frage kommen</em> (to be an option), <em>zum Ausdruck bringen</em> (to express), <em>Rücksicht nehmen auf</em> (to show consideration for). In groups with a preposition you don't choose the preposition or the article (<em>zur Verfügung</em>); in groups with a noun object the article can vary (<em>eine Entscheidung treffen, die Entscheidung treffen</em>)."
      },
      {
        h: "Position in the clause",
        p: "Groups with a preposition (<em>zur Verfügung stellen, in Kraft treten, in Frage kommen</em>) behave like a separable particle: the verb is conjugated in its usual place and the group moves toward the end. <em>Die Firma <strong>stellt</strong> uns die Räume <strong>zur Verfügung</strong>.</em> In the Perfekt and with a modal the group comes before the participle or the infinitive: <em>Die Firma hat uns die Räume zur Verfügung gestellt. Das Gesetz soll im Januar in Kraft treten.</em> Groups with a direct object (<em>eine Entscheidung treffen</em>) follow normal word order: <em>Wir treffen heute eine Entscheidung über den Antrag. Wir müssen bis Freitag eine Entscheidung treffen.</em> Negation usually comes before the group: <em>Das kommt nicht in Frage.</em>"
      },
      {
        contrast: "English has similar collocations (<em>make a decision</em>, <em>come into force</em>, <em>take into account</em>), and the verbs often don't match: <em>make a decision</em> is <em>eine Entscheidung treffen</em>, not <em>machen</em>; <em>ask a question</em> is <em>eine Frage stellen</em>; <em>take into account</em> is <em>in Betracht ziehen</em> or <em>berücksichtigen</em>."
      },
      {
        trap: "<em>in Frage kommen</em> has nothing to do with asking questions: it means “to be an option, to be considered”. <em>Das kommt nicht in Frage</em> is a flat refusal, “that's out of the question”."
      },
      {
        tip: "Learn these groups as whole blocks, with preposition and article: <em>zur Verfügung</em>, <em>in Kraft</em>, <em>zum Ausdruck</em>. If you only remember the noun, the wrong verb comes straight away."
      }
    ],
    grammar: {
      title: "Noun-verb collocations",
      note: "Noun + almost empty verb, a fixed group. With a preposition the group behaves like a separable particle: <i>Die Firma stellt uns die Räume zur Verfügung.</i> With a direct object, normal word order: <i>Wir treffen heute eine Entscheidung.</i>",
      table: {
        head: ["collocation", "meaning", "simple verb"],
        rows: [
          ["eine Entscheidung treffen", "to make a decision", "entscheiden"],
          ["zur Verfügung stellen", "to make available", "bereitstellen"],
          ["in Kraft treten", "to come into force", "gültig werden"],
          ["in Frage kommen", "to be an option", "möglich sein"],
          ["zum Ausdruck bringen", "to express", "ausdrücken"],
          ["Rücksicht nehmen auf", "to show consideration for", "berücksichtigen"]
        ]
      },
      examples: [
        { tr: "The company is making the rooms available to us.", note: "the group goes to the end: zur Verfügung" },
        { tr: "We have to make a decision by Friday.", note: "treffen, not machen or nehmen" },
        { tr: "The new law comes into force in January.", note: "in Kraft treten" },
        { tr: "Only two applicants are being considered for this position.", note: "in Frage kommen: to be an option" },
        { tr: "She clearly expressed her disappointment.", note: "zum Ausdruck bringen, formal register" },
        { tr: "Please be considerate of the neighbors.", note: "Rücksicht nehmen auf + accusative" }
      ]
    },
    vocab: [
      "the project, the plan",
      "the measure",
      "the permit, the approval",
      "the order, the contract",
      "the deadline",
      "the influence",
      "to come into force",
      "to make available",
      "to be an option, to be considered",
      "to make a decision",
      "to be considerate, to take into account",
      "to express"
    ],
    exercises: [
      {
        q: "Read the notice: «Ab dem 1. März tritt die neue Hausordnung in Kraft. Die Verwaltung bittet alle Mieter, Rücksicht auf die Nachbarn zu nehmen.» What happens on March 1?",
        opts: [
          "the new house rules come into force",
          "the management makes a decision about the neighbors",
          "the new tenants move into the apartments"
        ],
        why: "<i>in Kraft treten</i> means “to come into force”: from March 1 the new house rules (<i>Hausordnung</i>) apply."
      },
      {
        q: "In a meeting a colleague says: «Diese Lösung kommt für uns nicht in Frage.» What does he mean?",
        opts: [
          "that the solution is ruled out",
          "that he wants to ask a question about the solution",
          "that the solution is still under discussion"
        ],
        why: "<i>nicht in Frage kommen</i> is a flat refusal: the solution is <b>not an option</b>. It has nothing to do with asking questions."
      },
      {
        q: "Fill in: «Wir müssen bis Freitag eine Entscheidung ___.»",
        hint: "the collocation verb of die Entscheidung",
        why: "<b>treffen</b> (in formal style also <i>fällen</i>): <i>eine Entscheidung treffen</i>, “to make a decision”; not <i>machen</i>."
      },
      {
        q: "Fill in: «Die Firma stellt den Mitarbeitern Laptops zur ___.»",
        hint: "zur ... stellen: to make available",
        why: "<b>Verfügung</b>: <i>zur Verfügung stellen</i>, a fixed group with <i>zur</i>."
      },
      {
        q: "Fill in: «Sie hat ihre Kritik deutlich zum ___ gebracht.»",
        hint: "zum ... bringen: to express",
        why: "<b>Ausdruck</b>: <i>zum Ausdruck bringen</i>, “to express”, typical of formal writing."
      },
      {
        q: "Complete the minutes.",
        tr: "Yesterday the city council made an important decision: the new rule comes into force in January. The city is making additional funds available for its implementation.",
        why: "<i>getroffen</i> (Perfekt of <i>treffen</i>), <i>tritt</i> (with <i>in Kraft</i>), <i>stellt</i> (with <i>zur Verfügung</i>): each verb goes with its noun."
      },
      {
        q: "Match each group with its meaning.",
        pairs: [
          "to come into force",
          "to be an option",
          "to be considerate",
          "to make available"
        ]
      },
      {
        q: "Translate for the minutes: “Management made a room available for the meeting.” (die Leitung, der Raum, die Besprechung)",
        why: "<i>Die Leitung hat einen Raum für die Besprechung zur Verfügung gestellt</i>: the group <i>zur Verfügung</i> comes before the participle; the Präteritum <i>stellte ... zur Verfügung</i> works too."
      },
      {
        tr: "Starting next month, a new rule comes into force at the office. The company is providing laptops to all employees; private devices will then no longer be allowed.",
        why: "In <i>Regelung</i> the stress falls on <b>Re</b>; in <i>Verfügung</i> on <b>fü</b>; in <i>Geräte</i> the <b>ä</b> is long."
      },
      {
        tr: "We have to make a decision today.",
        why: "In <i>Entscheidung</i> the stress falls on <b>schei</b> and the <b>ei</b> is [aɪ]; in <i>treffen</i> the <b>e</b> is short."
      }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Forms and notices",
    title: "It can be done, it is to be done",
    objectives: [
      "use sich lassen + infinitive for “can be done”",
      "understand sein + zu + infinitive in notices and regulations",
      "recognize and form adjectives in -bar",
      "rewrite a passive with a modal"
    ],
    theory: [
      {
        h: "Three ways of saying “can be” or “must be”",
        p: "Besides the passive with a modal (<em>Das Problem kann gelöst werden</em>), German has more compact forms. <strong>sich lassen</strong> + infinitive means “can be done”: <em>Das Problem lässt sich leicht lösen.</em> <strong>sein + zu</strong> + infinitive means “can be” or “must be”, and in notices it is usually an obligation: <em>Der Antrag ist bis Freitag abzugeben.</em> Adjectives in <strong>-bar</strong> say that something can be done: <em>lösbar, machbar, trinkbar</em>."
      },
      {
        h: "zu with separable verbs",
        p: "With a separable verb <em>zu</em> goes between the particle and the verb, written as one word: <em>abgeben → abzugeben, einreichen → einzureichen, ausfüllen → auszufüllen</em>. <em>Das Formular ist vollständig auszufüllen.</em>"
      },
      {
        contrast: "English <em>to be</em> + <em>to</em>-infinitive is a close match: <em>the form is to be handed in by Friday</em> = <em>ist bis Freitag abzugeben</em>. The suffix <em>-bar</em> works like <em>-able</em> (<em>machbar</em> “doable”, <em>trinkbar</em> “drinkable”). <em>sich lassen</em> doesn't translate word for word: <em>Das lässt sich machen</em> is “that can be done”, not “that lets itself do”."
      },
      {
        trap: "The <em>zu</em> changes everything: <em>Die Rechnung ist zu bezahlen</em> expresses an obligation, “the bill must be paid”; <em>Die Rechnung ist bezahlt</em> describes the resulting state (state passive), “the bill is paid”; the Perfekt of the process passive is <em>Die Rechnung ist bezahlt worden</em>."
      },
      {
        tip: "To understand a <em>sein + zu</em> in a regulation, try replacing it with <em>muss ... werden</em>: <em>ist abzugeben</em> = <em>muss abgegeben werden</em>. If the meaning holds, it is an obligation."
      }
    ],
    grammar: {
      title: "Passive substitutes with a modal meaning",
      note: "<b>sich lassen</b> + infinitive: can be done. <b>sein + zu</b> + infinitive: can or must be done (in notices, usually must). <b>-bar</b>: -able. With separable verbs: <i>abzugeben</i>.",
      table: {
        head: ["form", "equivalent", "example"],
        rows: [
          ["sich lassen + infinitive", "kann ... werden", "Das Problem lässt sich lösen."],
          ["sein + zu + infinitive", "muss / kann ... werden", "Der Antrag ist abzugeben."],
          ["adjective in -bar", "kann ... werden", "Das Problem ist lösbar."],
          ["man + active verb", "impersonal", "Das macht man so."]
        ]
      },
      examples: [
        { tr: "The problem can easily be solved.", note: "sich lassen + infinitive" },
        { tr: "The application is to be submitted by Friday.", note: "sein + zu: obligation" },
        { tr: "The invoice is to be paid within 14 days.", note: "sein + zu in notices" },
        { tr: "This task can hardly be solved.", note: "-bar like -able" },
        { tr: "The water is not drinkable.", note: "trinkbar" },
        { tr: "Smoking is not allowed here.", note: "passive with a modal, for comparison" }
      ]
    },
    vocab: [
      "the regulation, the rule",
      "the fee",
      "the certificate",
      "the proof, the evidence",
      "the invoice, the bill",
      "the document; in the plural, the paperwork",
      "to take care of, to deal with",
      "to submit",
      "to fill out",
      "solvable",
      "doable, feasible",
      "permissible, allowed"
    ],
    exercises: [
      {
        q: "Read the notice: «Die Unterlagen sind bis zum 15. Mai beim Amt einzureichen.» What does it mean?",
        opts: [
          "the documents must be submitted to the office by May 15",
          "the documents can be submitted after May 15",
          "the office will send the documents by May 15"
        ],
        why: "<i>sind ... einzureichen</i> is <i>sein + zu</i>: in a notice it expresses an <b>obligation</b>, “are to be submitted”."
      },
      {
        q: "A client asks you to bring a delivery forward. You answer: «Das lässt sich machen.» What are you telling him?",
        opts: [
          "that it can be done",
          "that you won't do it",
          "that someone lets you do it"
        ],
        why: "<i>Das lässt sich machen</i> = <i>Das kann gemacht werden</i>: you agree, “that can be done”."
      },
      {
        q: "Which sentence means the same as «Das Problem kann leicht gelöst werden»?",
        opts: [
          "Das Problem lässt sich leicht lösen.",
          "Das Problem lässt leicht lösen.",
          "Das Problem ist leicht gelöst worden."
        ],
        why: "<b>sich lassen</b> + infinitive is equivalent to <i>kann ... werden</i>; without <i>sich</i> the sentence doesn't work, and the third is a Perfekt passive with a different meaning."
      },
      {
        q: "Complete the notice: «Die Rechnung ist innerhalb von 14 Tagen zu ___.»",
        hint: "to pay",
        why: "<b>bezahlen</b> (or <i>zahlen</i>): <i>ist zu bezahlen</i>, “is to be paid”."
      },
      {
        q: "Fill in: «Das Wasser ist nicht ___.»",
        hint: "that can be drunk, adjective in -bar",
        why: "<b>trinkbar</b>: “drinkable”; the suffix <i>-bar</i> says that something can be done."
      },
      {
        q: "Complete the notice to the tenants.",
        tr: "Dear tenants, unfortunately the heating can only be repaired next week. Until then the windows are to be kept closed. The damage can be fixed, though: the technician is coming on Monday.",
        why: "<i>lässt sich ... reparieren</i> (can be), <i>sind ... zu halten</i> (are to be kept), <i>behebbar</i>, <i>reparierbar</i> or <i>reparabel</i> (fixable)."
      },
      {
        q: "Put the words in order.",
        tr: "The application is to be submitted to the office by Friday.",
        why: "<i>Der Antrag ist bis Freitag beim Amt abzugeben.</i> <i>abzugeben</i> closes the sentence; <i>bis Freitag</i> and <i>beim Amt</i> can swap places."
      },
      {
        q: "Translate: “This problem can't be solved in one day.”",
        why: "<i>Dieses Problem lässt sich nicht an einem Tag lösen</i>; <i>ist nicht ... zu lösen</i>, <i>kann nicht ... gelöst werden</i> and <i>kann man nicht ... lösen</i> work too."
      },
      {
        tr: "Dear Sir or Madam, the form is to be filled out completely and submitted by the end of the month. Missing documents can also be handed in later.",
        why: "In <i>vollständig</i> the <b>v</b> sounds like [f]; in <i>auszufüllen</i> the stress falls on <b>aus</b>; in <i>nachreichen</i> on <b>nach</b>."
      },
      {
        tr: "That can surely be taken care of by tomorrow.",
        why: "In <i>lässt</i> the <b>ä</b> is short; in <i>bestimmt</i> the stress falls on <b>stimmt</b>; in <i>erledigen</i> on <b>le</b>."
      }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Traffic and idioms",
    title: "umfahren or umfahren? Idioms",
    objectives: [
      "tell separable from inseparable prefixes on the same verb",
      "understand a traffic report",
      "recognize and use some frequent idioms",
      "notice when an idiom can't be translated literally"
    ],
    theory: [
      {
        h: "One verb, two verbs",
        p: "With <strong>durch-, über-, um-, unter-, wieder-</strong> the same verb can be separable or inseparable, with different meanings. <em>Er hat das Schild <strong>umgefahren</strong></em>: he knocked it over with his car (separable, stress on <em>um</em>). <em>Wir haben den Stau <strong>umfahren</strong></em>: we drove around it (inseparable, stress on <em>fah</em>). In finite forms the separable one splits off (<em>Die Fähre setzt uns über</em>), the inseparable one doesn't (<em>Sie übersetzt den Text</em>)."
      },
      {
        h: "Idioms",
        p: "Idioms (<em>Redewendungen</em>) have a figurative meaning you can't work out from the words: <em>Das geht mir gegen den Strich</em> (it rubs me the wrong way), <em>den Nagel auf den Kopf treffen</em> (to hit the nail on the head), <em>jemandem auf die Nerven gehen</em> (to get on someone's nerves), <em>etwas auf die lange Bank schieben</em> (to put something off). They are common in speech and journalism; in very formal texts the direct expression is preferred."
      },
      {
        contrast: "Some German idioms match English closely (<em>den Nagel auf den Kopf treffen</em> = to hit the nail on the head, <em>auf die Nerven gehen</em> = to get on someone's nerves), others change the image: <em>auf die lange Bank schieben</em> is literally “to push onto the long bench”, meaning to put off. English phrasal verbs help with the prefixes: the particle can move away from the verb (<em>knock the sign over</em>), like a separable prefix."
      },
      {
        trap: "With separable and inseparable verbs the participle decides: <em>umgefahren</em> (knocked over) or <em>umfahren</em> (driven around). <em>Wir haben den Stau umgefahren</em> means you knocked the traffic jam over, not that you avoided it."
      },
      {
        tip: "When you meet a new idiom, note it with a full sentence and a situation: <em>Er schiebt die Steuererklärung auf die lange Bank.</em> On its own it fades, inside a scene it sticks."
      }
    ],
    grammar: {
      title: "Separable or inseparable prefixes, and idioms",
      note: "<b>Separable</b>: stress on the prefix, prefix splits off, participle with <i>-ge-</i> if the base verb has it (<i>umgefahren</i>). <b>Inseparable</b>: stress on the verb after the prefix (<i>wiederholen</i> with stress on <i>ho</i>), prefix stays attached, participle without <i>ge-</i> (<i>umfahren</i>).",
      table: {
        head: ["separable", "meaning", "inseparable", "meaning"],
        rows: [
          ["Er hat das Schild umgefahren.", "to knock over with a car", "Wir haben den Stau umfahren.", "to drive around"],
          ["Die Fähre setzt uns über.", "to ferry across", "Sie hat den Text übersetzt.", "to translate"],
          ["Wir sind durchgefahren.", "to drive without stopping", "Wir haben die Schweiz durchfahren.", "to drive through, to cross"]
        ]
      },
      examples: [
        { tr: "He knocked over the road sign with his car.", note: "separable: umgefahren" },
        { tr: "We drove around the traffic jam.", note: "inseparable: umfahren" },
        { tr: "She translated the letter into English.", note: "inseparable: übersetzt" },
        { tr: "The ferry takes us across to the other bank.", note: "separable: setzt ... über" },
        { tr: "That really rubs me the wrong way.", note: "idiom: gegen den Strich gehen" },
        { tr: "You've hit the nail on the head.", note: "idiom: den Nagel auf den Kopf treffen" }
      ]
    },
    vocab: [
      "the idiom",
      "the proverb",
      "the detour, the roundabout way",
      "the bank (of a river), the shore",
      "the diversion (of traffic)",
      "the traffic jam",
      "to drive around (inseparable); to knock over with a car (separable)",
      "to translate (inseparable); to ferry across (separable)",
      "to drive without stopping (separable); to drive through (inseparable)",
      "to talk, to chat",
      "to repeat",
      "to deal with (separable); to avoid, to get around (inseparable)"
    ],
    exercises: [
      {
        q: "Traffic report: «Wegen eines Unfalls ist die A8 gesperrt. Autofahrer sollten den Bereich weiträumig umfahren.» What is recommended?",
        opts: [
          "driving around the area with a wide berth",
          "driving through the area slowly",
          "knocking over the obstacles on the road"
        ],
        why: "Here <i>umfahren</i> is inseparable (stress on <i>fah</i>): “to drive around”. <i>weiträumig</i> means “giving it a wide berth”."
      },
      {
        q: "Fill in: «Der Fahrer hat das Schild ___.» (he knocked it over with the car)",
        opts: [
          "umgefahren",
          "umfahren",
          "umgefährt"
        ],
        why: "Meaning “to knock over”, <i>umfahren</i> is separable, so the participle has <i>-ge-</i>: <b>umgefahren</b>."
      },
      {
        q: "In a meeting a colleague tells you: «Da hast du den Nagel auf den Kopf getroffen.» What does she mean?",
        opts: [
          "that you've hit the nail on the head",
          "that you've made a serious mistake",
          "that you've been too blunt"
        ],
        why: "<i>den Nagel auf den Kopf treffen</i> = “to hit the nail on the head”: it's a compliment."
      },
      {
        q: "Fill in: «Die Fähre ___ uns ans andere Ufer über.»",
        hint: "separable übersetzen, third person singular",
        why: "<b>setzt</b>: meaning “to ferry across”, <i>übersetzen</i> is separable, and <i>über</i> goes to the end."
      },
      {
        q: "Complete the story.",
        tr: "The city center was closed to traffic because of the construction site, so we had to drive around it. After that we drove all night without stopping and only arrived in the morning.",
        why: "<i>umfahren</i> (inseparable, infinitive after <i>mussten</i>) and <i>durchgefahren</i> (separable, participle with <i>-ge-</i>)."
      },
      {
        q: "Match each idiom with its meaning.",
        pairs: [
          "to go against one's principles or tastes",
          "to hit the nail on the head",
          "to get on someone's nerves",
          "to put off"
        ]
      },
      {
        q: "In which sentences is the prefix inseparable?",
        opts: [
          "Wir haben den Stau umfahren.",
          "Sie hat den Text übersetzt.",
          "Er hat das Schild umgefahren.",
          "Die Fähre setzt uns über."
        ],
        why: "The first two: participle without <i>ge-</i> (<i>umfahren, übersetzt</i>). In the third the participle has <i>-ge-</i>, in the fourth the prefix splits off: those are separable."
      },
      {
        q: "Translate: “This idiom can't be translated word for word.” (die Redewendung)",
        why: "<i>Diese Redewendung lässt sich nicht wörtlich übersetzen</i>; <i>ist nicht wörtlich zu übersetzen</i>, <i>kann man nicht ...</i>, <i>kann nicht ... übersetzt werden</i> and <i>Wort für Wort</i> work too."
      },
      {
        tr: "Because of an accident on the A8 there's a diversion. Your best option is to drive around the area on the federal highway; expect a twenty-minute detour.",
        why: "In <i>umfahren</i> here the stress falls on <b>fah</b>; in <i>Umleitung</i> on <b>Um</b>; in <i>Bundesstraße</i> the <b>ß</b> is [s]."
      },
      {
        tr: "This idiom can hardly be translated.",
        why: "In <i>Redewendung</i> the stress falls on <b>Re</b>; in <i>kaum</i> the <b>au</b> is [aʊ]; in <i>übersetzen</i> the stress falls on <b>set</b>."
      }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Check",
    title: "Test: Getting things done",
    objectives: [
      "check noun-verb collocations, passive substitutes and separable and inseparable prefixes"
    ],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Fill in: «Wann ___ das neue Gesetz in Kraft?»",
        hint: "treten, third person singular",
        why: "<b>tritt</b>: <i>in Kraft treten</i>, with the vowel change in the present."
      },
      {
        q: "Fill in: «Das Problem ___ sich leicht lösen.» (the problem can easily be solved)",
        hint: "a verb, third person singular",
        why: "<b>lässt</b>: <i>lässt sich lösen</i> = <i>kann gelöst werden</i>."
      },
      {
        q: "Complete the notice: «Der Bericht ist bis Montag ___.»",
        hint: "the report is to be handed in by Monday (abgeben)",
        why: "<b>abzugeben</b>: <i>sein + zu</i>, with <i>zu</i> between particle and verb."
      },
      {
        q: "Fill in: «Wir haben die Baustelle ___.» (we drove around it)",
        hint: "inseparable umfahren, participle",
        why: "<b>umfahren</b>: meaning “to drive around”, the verb is inseparable and the participle has no <i>ge-</i>."
      },
      {
        q: "Read the job ad: «Für die Stelle kommen nur Bewerber mit Erfahrung in Frage.» Who can be chosen?",
        opts: [
          "only applicants with experience",
          "all applicants who ask questions",
          "no applicant for now"
        ],
        why: "<i>in Frage kommen</i> = “to be an option”: <b>only experienced applicants</b> are considered."
      },
      {
        q: "In university regulations: which sentence expresses an obligation, not just a possibility?",
        opts: [
          "Die Hausarbeit ist bis zum 30. Juni abzugeben.",
          "Die Hausarbeit lässt sich bis zum 30. Juni abgeben.",
          "Die Hausarbeit kann bis zum 30. Juni abgegeben werden."
        ],
        why: "In regulations <b>sein + zu</b> usually expresses an obligation (“must be handed in”). The other two are correct but only say that it is possible."
      },
      {
        q: "A colleague says about the Friday evening meeting: «Das geht mir gegen den Strich.» How does she feel?",
        opts: [
          "annoyed",
          "pleased",
          "tired"
        ],
        why: "<i>gegen den Strich gehen</i> = “to rub the wrong way, to annoy”."
      },
      {
        q: "Match each group with its meaning.",
        pairs: [
          "to make available",
          "to make a decision",
          "to be an option",
          "to express"
        ]
      },
      {
        tr: "From January a new regulation comes into force: all applications are to be submitted online. For this purpose the city is making computers available in every library.",
        why: "In <i>Vorschrift</i> the stress falls on <b>Vor</b>; in <i>einzureichen</i> on <b>ein</b>; in <i>Bibliothek</i> on <b>thek</b>."
      },
      {
        tr: "The documents are to be submitted by the end of the month.",
        why: "In <i>Monats</i> the <b>o</b> is long; in <i>einzureichen</i> the <b>ei</b> is [aɪ]; in <i>Ende</i> the first <b>e</b> is short."
      }
    ]
  },
  "unit:c1-u03": {
    title: "Register and text structure",
    grammarNote: "Nominal style and official language (Amtsdeutsch) · particles and ellipsis in speech · correlates (darauf, dass; es, dass) and connectors for a cohesive text · review of units 1-3"
  },
  "lesson:c1-u03-l1": {
    theme: "Offices and public notices",
    title: "Official German",
    objectives: [
      "understand a notice written in Amtsdeutsch",
      "rewrite nominal style as verbal style and back",
      "recognize the typical verbs of officialdom (erfolgen, erheben, gewähren)",
      "choose the register that suits the reader"
    ],
    theory: [
      {
        h: "What Amtsdeutsch is",
        p: "The language of offices relies on <strong>nominal style</strong>: verbs turned into nouns (<em>die Antragstellung, die Nichtbeachtung, das Betreten</em>), subordinate clauses replaced by prepositional phrases (<em>nach Abschluss, bei Nichtbeachtung, zur Vermeidung</em>), and colorless verbs such as <em>erfolgen</em> (to take place), <em>erheben</em> (to levy), <em>gewähren</em> (to grant). <em>Die Antragstellung erfolgt online</em> simply means “you apply online”."
      },
      {
        h: "From nominal to verbal style",
        p: "To understand a notice, turn the noun phrase into a clause: <em>Nach Abschluss der Arbeiten</em> → <em>Nachdem die Arbeiten abgeschlossen sind</em>; <em>Bei Nichtbeachtung</em> → <em>Wenn man die Vorschriften nicht beachtet</em>; <em>Zur Vermeidung von Wartezeiten</em> → <em>Um Wartezeiten zu vermeiden</em>. The genitive that depends on the noun (<em>der Arbeiten</em>) becomes the subject or object of the clause."
      },
      {
        contrast: "Formal English nominalizes too (<em>upon completion of the work</em>, <em>in case of non-compliance</em>), so the pattern is familiar. German goes further and uses it more often, the object of the verb becomes a genitive with no preposition (<em>die Beachtung der Regeln</em>), and notices combine it with <em>sein + zu</em> (<em>ist ein Helm aufzusetzen</em>, “a helmet is to be put on”)."
      },
      {
        trap: "Nominal style suits notices and official letters, not a message to a friend: <em>Nach Abschluss der Arbeiten erfolgt unser Treffen</em> in a private message sounds absurd. There you write <em>Wir sehen uns, sobald die Arbeiten fertig sind</em>."
      },
      {
        tip: "Faced with a noun in <em>-ung</em> or a nominalized infinitive (<em>das Betreten</em>), ask which verb is behind it (<em>betreten</em>) and who acts: often “anyone”, that is <em>man</em>."
      }
    ],
    grammar: {
      title: "Nominal style and verbal style",
      note: "<b>Nominal</b>: preposition + noun, often with a genitive depending on the noun (<i>nach Abschluss der Arbeiten</i>). <b>Verbal</b>: a construction with a verb, that is a clause (<i>nachdem die Arbeiten abgeschlossen sind</i>) or an infinitive with <i>zu</i> (<i>um Wartezeiten zu vermeiden</i>). Typical verbs: <i>erfolgen, erheben, gewähren</i>.",
      table: {
        head: ["nominal style", "verbal style"],
        rows: [
          ["Nach Abschluss der Arbeiten ...", "Nachdem die Arbeiten abgeschlossen sind, ..."],
          ["Bei Nichtbeachtung ...", "Wenn man die Vorschriften nicht beachtet, ..."],
          ["Zur Vermeidung von Wartezeiten ...", "Um Wartezeiten zu vermeiden, ..."],
          ["Vor Betreten der Baustelle ...", "Bevor man die Baustelle betritt, ..."],
          ["Die Antragstellung erfolgt online.", "Man stellt den Antrag online."]
        ]
      },
      examples: [
        { tr: "Once the work is completed, the road will be reopened.", note: "nach takes the dative (Abschluss); der Arbeiten is the genitive depending on Abschluss" },
        { tr: "In case of non-compliance, a fine will be imposed.", note: "bei Nichtbeachtung = wenn man die Vorschriften nicht beachtet" },
        { tr: "To avoid waiting times, please book an appointment.", note: "zur Vermeidung = um ... zu vermeiden" },
        { tr: "Because of the heavy rain, the concert was canceled.", note: "wegen + genitive instead of weil" },
        { tr: "Applications are made online.", note: "erfolgen: to take place, typical of offices" },
        { tr: "A helmet must be put on before entering the construction site.", note: "vor Betreten + sein zu" }
      ]
    },
    vocab: [
      "the official notice, the decision",
      "the fine",
      "the authority, the public office",
      "the responsibility (of an office)",
      "the regulation, the ordinance",
      "non-compliance",
      "to take place, to be made",
      "to levy (a fee); to raise",
      "to grant",
      "to apply for",
      "responsible, in charge",
      "in accordance with, according to"
    ],
    exercises: [
      {
        q: "Read: «Bei Nichtbeachtung der Parkregeln wird ein Bußgeld erhoben.» How would you explain it to a friend?",
        opts: [
          "Wenn man sich nicht an die Parkregeln hält, muss man eine Strafe zahlen.",
          "Wer die Parkregeln nicht kennt, bekommt Geld zurück.",
          "Die Stadt beachtet die Parkregeln nicht."
        ],
        why: "<i>bei Nichtbeachtung</i> = “if you don't comply”; <i>ein Bußgeld erheben</i> = “to impose a fine”. The first sentence says the same in verbal style."
      },
      {
        q: "Which noun phrase corresponds to «Weil es stark regnete, ...»?",
        opts: [
          "Wegen des starken Regens ...",
          "Trotz des starken Regens ...",
          "Während des starken Regens ..."
        ],
        why: "<i>weil</i> gives a reason: <b>wegen</b> + genitive. <i>trotz</i> is concessive, <i>während</i> temporal."
      },
      {
        q: "You're texting a friend about the work on your house. Which sentence fits the register?",
        opts: [
          "Wir sehen uns, sobald die Arbeiten fertig sind.",
          "Nach Abschluss der Arbeiten erfolgt unser Wiedersehen.",
          "Bei Fertigstellung der Arbeiten wird ein Treffen durchgeführt."
        ],
        why: "Between friends you use verbal style. The other two are correct but in Amtsdeutsch, out of place in a private message."
      },
      {
        q: "Complete the notice: «Die Antragstellung ___ ausschließlich online.»",
        hint: "official verb: “takes place”",
        why: "<b>erfolgt</b>: <i>erfolgen</i> is the typical office verb for “to take place, to be done”."
      },
      {
        q: "Complete the town's notice.",
        tr: "Dear citizens, once the construction work is completed, the road will be reopened. To avoid waiting times, we ask you to book an appointment.",
        why: "<i>Nach Abschluss der Bauarbeiten</i>: <i>nach</i> + dative, with the genitive <i>der Bauarbeiten</i> depending on <i>Abschluss</i>. <i>Zur Vermeidung von Wartezeiten</i>: <i>zu</i> + dative, with <i>von</i> + dative instead of a genitive. Both replace a clause; after the comma of the greeting, <i>nach</i> is lowercase."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "the official notice",
          "the authority",
          "the fine",
          "the regulation"
        ]
      },
      {
        q: "Put the words of the sign in order.",
        tr: "A helmet must be put on before entering the construction site.",
        why: "<i>Vor Betreten der Baustelle ist ein Helm aufzusetzen.</i> The noun phrase first, then <i>ist</i>, and <i>aufzusetzen</i> at the end."
      },
      {
        q: "Rewrite in verbal style, with a clause: «Nach Abschluss der Arbeiten wird die Straße freigegeben.»",
        why: "<i>Nachdem die Arbeiten abgeschlossen sind, wird die Straße freigegeben</i>: the genitive <i>der Arbeiten</i> becomes the subject; <i>sobald</i> or <i>wenn</i> and <i>abgeschlossen worden sind</i> work too."
      },
      {
        tr: "Dear Sir or Madam, under the new regulation, applications will be made exclusively online from May. If you have questions, please contact the responsible authority.",
        why: "In <i>Verordnung</i> the stress falls on <b>ord</b>; in <i>ausschließlich</i> on <b>aus</b>; in <i>zuständige</i> on <b>zu</b>."
      },
      {
        tr: "Payment is made by bank transfer.",
        why: "In <i>Zahlung</i> the <b>a</b> is long and the <b>h</b> is silent; in <i>erfolgt</i> the stress falls on <b>folgt</b>; in <i>Überweisung</i> on <b>wei</b>."
      }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Spontaneous conversation",
    title: "How people really talk",
    objectives: [
      "understand the modal particles of speech (doch, ja, mal, halt, eben)",
      "recognize typical ellipsis in speech (Weiß ich nicht, Passt schon)",
      "answer naturally in an informal conversation",
      "tell speech apart from formal writing"
    ],
    theory: [
      {
        h: "Particles change the tone",
        p: "In speech, modal particles show what the speaker thinks. <strong>doch</strong> encourages or reminds (<em>Komm doch mit!</em>), <strong>ja</strong> presents something as known or surprising (<em>Das hast du ja schon gesagt. Das ist ja toll!</em>), <strong>mal</strong> softens a request (<em>Hast du mal kurz Zeit?</em>), <strong>halt</strong> and <strong>eben</strong> express resignation (<em>Das ist halt so</em>). Without the particle the sentence is still correct, but it loses that nuance: a request can sound blunter, an exclamation loses its surprise or its appeal to what both speakers know."
      },
      {
        h: "Ellipsis and set phrases",
        p: "Speech drops what is clear from the context, often the subject or an initial <em>das</em>: <em>Weiß ich nicht</em> (= <em>Das weiß ich nicht</em>), <em>Kann sein</em>, <em>Passt schon</em>, <em>Mal sehen</em>. They are normal among friends and colleagues; in a letter or a written exam you use full sentences."
      },
      {
        contrast: "English carries these nuances with intonation, tags or words like <em>come on</em>, <em>just</em>, <em>after all</em>: <em>Komm doch mit!</em> is close to “come on, come along!”, <em>Das ist halt so</em> to “that's just the way it is”. There is no word-for-word equivalent: you learn the function."
      },
      {
        trap: "With this meaning the particles don't take first position: <em>Komm doch mit</em>, not <em>Doch komm mit</em>. And <em>doch</em> as an answer to a negative question (<em>Kommst du nicht? – Doch!</em>) is something else: it means “yes, I am”."
      },
      {
        tip: "When you listen, notice where the particles fall: usually right after the verb and the pronouns, before the new information. <em>Ich bin eigentlich ziemlich müde.</em>"
      }
    ],
    grammar: {
      title: "Particles and ellipsis in speech",
      note: "<b>doch</b>: encourages, reminds. <b>ja</b>: known fact, surprise. <b>mal</b>: softens. <b>halt / eben</b>: resignation. Ellipsis: <i>Weiß ich nicht, Kann sein, Passt schon</i>.",
      table: {
        head: ["particle or form", "effect", "example"],
        rows: [
          ["doch", "encourages, reminds", "Komm doch mit!"],
          ["ja", "known fact, surprise", "Das ist ja unglaublich!"],
          ["mal", "softens a request", "Hast du mal kurz Zeit?"],
          ["halt, eben", "resignation", "Das ist halt so."],
          ["ellipsis", "what is clear is left out", "Weiß ich nicht. Passt schon."]
        ]
      },
      examples: [
        { tr: "Come on, just come along!", note: "doch + einfach: invitation" },
        { tr: "That's unbelievable!", note: "ja: surprise" },
        { tr: "Do you have a minute?", note: "mal: a softer request" },
        { tr: "Well, could be.", note: "ellipsis: Kann sein" },
        { tr: "Don't know.", note: "ellipsis: das is missing" },
        { tr: "It's fine, don't worry.", note: "a set phrase of speech" }
      ]
    },
    vocab: [
      "the excuse",
      "the hint, the allusion",
      "the tone (of voice)",
      "the stock phrase, the empty formula",
      "the misunderstanding",
      "colloquial language",
      "to chat (colloquial)",
      "to arrange to meet",
      "to ask again, to follow up",
      "actually, really",
      "anyway, in any case",
      "that's just how it is (presents a fact as unavoidable)"
    ],
    exercises: [
      {
        q: "At a bar a friend says: «Komm doch mit!» What does doch add?",
        opts: [
          "an encouraging invitation",
          "a reproach",
          "a doubt"
        ],
        why: "In a request or invitation <b>doch</b> encourages: “come on, come along”."
      },
      {
        q: "A colleague says: «Das hast du ja schon gestern gesagt.» What does ja signal?",
        opts: [
          "that both already know this",
          "that he doesn't believe it",
          "that he is asking a question"
        ],
        why: "Here <b>ja</b> presents the information as already known: “you said that yesterday, we know”."
      },
      {
        q: "A friend asks: «Kommst du heute Abend?» Which answer is most natural in speech?",
        opts: [
          "Weiß ich noch nicht.",
          "Das Wissen darüber besitze ich noch nicht.",
          "Eine Entscheidung darüber ist noch nicht erfolgt."
        ],
        why: "In speech <i>das</i> is dropped: <b>Weiß ich noch nicht</b>. The other two are bureaucratic, out of place between friends."
      },
      {
        q: "Fill in: «Hast du ___ kurz Zeit?»",
        hint: "particle that makes the request polite",
        why: "<b>mal</b> (regionally also <i>eben</i>): it softens the request, like “a sec”."
      },
      {
        q: "Fill in: «Das ist ___ so, da kann man nichts machen.»",
        hint: "particle of resignation",
        why: "<b>halt</b> (or <i>eben</i>): “that's just the way it is”."
      },
      {
        q: "Complete the dialogue with eigentlich, doch and echt.",
        tr: "“Coming to the movies tonight?” “I don't know, I'm actually pretty tired.” “Oh, come on, the movie is really great!”",
        why: "<i>eigentlich</i> (actually), <i>doch</i> (encourages), <i>echt</i> or <i>wirklich</i> (really): three typical words of speech."
      },
      {
        q: "Which sentences are typical of informal speech?",
        opts: [
          "Weiß ich nicht.",
          "Passt schon.",
          "Bei Nichtbeachtung erfolgt eine Mahnung.",
          "Gemäß der Verordnung ist dies untersagt."
        ],
        why: "The first two are ellipsis of speech. The other two are Amtsdeutsch."
      },
      {
        q: "Translate, informally: “Come on, come along, you're going into town anyway!” (mitkommen, sowieso, in die Stadt gehen)",
        why: "<i>Komm doch mit, du gehst sowieso in die Stadt</i>: <i>doch</i> for the invitation, <i>sowieso</i> for “anyway”; you can add <i>ja</i> or <i>doch</i> before <i>sowieso</i>."
      },
      {
        tr: "“So, how was it yesterday?” “Oh, pretty good, actually. The movie was just a bit long, but otherwise really great.”",
        why: "In <i>eigentlich</i> the stress falls on <b>ei</b>; in <i>bisschen</i> the <b>ss</b> is [s]; in <i>sonst</i> the <b>o</b> is short."
      },
      {
        tr: "Come on, just come along, it'll definitely be fun!",
        why: "In <i>einfach</i> the stress falls on <b>ein</b>; in <i>bestimmt</i> on <b>stimmt</b>; in <i>lustig</i> the final <b>g</b> is [ç]."
      }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Reports and presentations",
    title: "Cohesion: darauf, dass ...",
    objectives: [
      "use the correlates darauf, daran, darüber before a clause",
      "use es as an anticipatory placeholder",
      "organize a text with connectors (zunächst, darüber hinaus, schließlich)",
      "link the sentences of a paragraph with references (dadurch, deshalb)"
    ],
    theory: [
      {
        h: "Announcing a clause",
        p: "When a verb takes a preposition (<em>sich freuen auf, bestehen auf, sich einigen auf, hinweisen auf</em>) and its complement is a clause, the main clause can contain a pronominal adverb that announces it; with some verbs it is required (<em>bestehen auf</em>), with others it is optional or shifts the nuance (<em>Ich freue mich, dass du kommst</em> expresses joy about the fact, <em>Ich freue mich darauf, dass du kommst</em> looking forward to a future event): <em>Er besteht <strong>darauf</strong>, dass wir bleiben. Wir haben uns <strong>darauf</strong> geeinigt, den Termin zu verschieben.</em> Without a preposition, the placeholder can be <strong>es</strong>: <em>Es ist wichtig, dass alle pünktlich sind.</em> If the clause moves to first position, the subject <em>es</em> disappears: <em>Dass alle pünktlich sind, ist wichtig.</em>"
      },
      {
        h: "Holding a text together",
        p: "A cohesive text guides the reader. For order: <em>zunächst, zuerst, dann, anschließend, schließlich</em>. To add: <em>darüber hinaus, außerdem</em>. To refer back: <em>dadurch, deshalb, dabei, darauf</em>: <em>Die Mieten steigen. Dadurch wird Wohnen für viele unbezahlbar.</em>"
      },
      {
        contrast: "English uses <em>it</em> as a placeholder too (<em>It's important that everyone is on time</em>), so <em>es</em> is easy. Pronominal adverbs are the harder part: English says <em>he insists that we stay</em> or <em>we agreed to postpone</em> with no extra word, while German often announces the clause with <em>darauf, daran, darüber</em>. With some verbs that word is required (<em>Er besteht darauf, dass wir bleiben</em>); with others it is optional (<em>Wir haben uns (darauf) geeinigt, den Termin zu verschieben</em>), and careful writing usually includes it."
      },
      {
        trap: "The pronominal adverb takes the verb's own preposition: <em>bestehen auf → darauf</em>, <em>denken an → daran</em>, <em>sich ärgern über → darüber</em>. <em>Er besteht daran, dass ...</em> is wrong."
      },
      {
        tip: "Learn each verb together with its preposition and its adverb: <em>sich einigen auf / darauf</em>, <em>hinweisen auf / darauf</em>, <em>eingehen auf / darauf</em>. They come up constantly in presentations."
      }
    ],
    grammar: {
      title: "Correlates and text connectors",
      note: "Verb + preposition + clause: <b>da(r)- + preposition</b> in the main clause (<i>darauf, dass ...</i>), required with some verbs, optional with others. Without a preposition: <b>es</b> (<i>Es ist wichtig, dass ...</i>). Order: <i>zunächst, dann, schließlich</i>; adding: <i>darüber hinaus</i>.",
      table: {
        head: ["verb", "correlate", "example"],
        rows: [
          ["bestehen auf", "darauf", "Er besteht darauf, dass wir bleiben."],
          ["sich einigen auf", "darauf", "Wir haben uns darauf geeinigt, den Termin zu verschieben."],
          ["hinweisen auf", "darauf", "Ich weise darauf hin, dass die Frist endet."],
          ["denken an", "daran", "Denk daran, das Licht auszumachen."],
          ["wichtig sein", "es", "Es ist wichtig, dass alle pünktlich sind."]
        ]
      },
      examples: [
        { tr: "I'm looking forward to you coming.", note: "sich freuen auf → darauf" },
        { tr: "It is important that everyone is on time.", note: "es anticipates the clause" },
        { tr: "We agreed to postpone the appointment.", note: "sich einigen auf → darauf + infinitive" },
        { tr: "He insists that we stay.", note: "bestehen auf → darauf" },
        { tr: "This point is crucial, so I'd like to go into it in more detail.", note: "eingehen auf → darauf" },
        { tr: "In addition, there are further problems.", note: "darüber hinaus: adds" }
      ]
    },
    vocab: [
      "the connection, the context",
      "the introduction",
      "the conclusion, the end",
      "the paragraph",
      "the reference",
      "the outline, the structure (of a text)",
      "to agree (auf: on)",
      "to insist (auf: on)",
      "to go into, to address (auf: a topic)",
      "to point out (auf: something)",
      "in addition, furthermore",
      "finally, in the end"
    ],
    exercises: [
      {
        q: "Fill in: «Er besteht ___, dass wir bleiben.»",
        opts: [
          "darauf",
          "daran",
          "dafür"
        ],
        why: "<i>bestehen auf</i>: the correlate takes the same preposition, <b>darauf</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Dass alle pünktlich sind, ist wichtig.",
          "Dass alle pünktlich sind, ist es wichtig.",
          "Es, dass alle pünktlich sind, ist wichtig."
        ],
        why: "When the clause takes first position, the anticipatory subject <i>es</i> disappears."
      },
      {
        q: "In an essay: «Die Mieten steigen. ___ wird Wohnen für viele Familien unbezahlbar.» Which connector creates the right link?",
        opts: [
          "Dadurch",
          "Trotzdem",
          "Stattdessen"
        ],
        why: "The second sentence is a consequence of the first: <b>dadurch</b>, “as a result”."
      },
      {
        q: "Fill in: «Wir haben uns ___ geeinigt, den Termin zu verschieben.»",
        hint: "sich einigen auf + clause",
        why: "<b>darauf</b>: it announces the infinitive with <i>zu</i>."
      },
      {
        q: "Fill in: «Auf diese Frage gehe ich später ___.»",
        hint: "particle of eingehen",
        why: "<b>ein</b>: <i>eingehen auf</i> is separable, “to go into, to address”."
      },
      {
        q: "Complete the outline of the presentation.",
        tr: "First I'd like to describe the problem. Then I'll name possible solutions, and finally I'll draw a conclusion.",
        why: "<i>Zuerst/Zunächst</i>, <i>Danach/Dann/Anschließend</i>, <i>schließlich/abschließend/zuletzt</i>: the connectors guide the listener."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "the introduction",
          "the paragraph",
          "the connection, the context",
          "the outline (of a text)"
        ]
      },
      {
        q: "Translate: “He insists that everyone attend the meeting.” (bestehen auf, die Besprechung)",
        why: "<i>Er besteht darauf, dass alle an der Besprechung teilnehmen</i>: <i>darauf</i> announces the clause; German uses the indicative where English can use <i>attend</i> without <i>-s</i>."
      },
      {
        tr: "In my talk I'll first go into the causes. In addition, I'd like to point out that there are already initial solutions. Finally, I'll briefly sum everything up.",
        why: "In <i>Vortrag</i> the stress falls on <b>Vor</b>; in <i>Ursachen</i> on <b>Ur</b>; in <i>zusammen</i> on <b>sam</b>."
      },
      {
        tr: "I'd like to point out that the deadline is tomorrow.",
        why: "In <i>hinweisen</i> the stress falls on <b>hin</b>; in <i>Frist</i> the <b>i</b> is short; in <i>endet</i> the first <b>e</b> is short."
      }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Check",
    title: "Test: Register and text structure",
    objectives: [
      "check the unit and review werden, noun-verb collocations and nominal style from units 1-3"
    ],
    theory: [
      {
        p: "Twelve questions on the unit and on units 1-3. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Fill in: «Er ist Lehrer ___.»",
        hint: "participle of werden “to become”",
        why: "<b>geworden</b>: full verb, with <i>ge-</i>."
      },
      {
        q: "Fill in: «Das neue Gesetz tritt im Mai in ___.»",
        hint: "to come into force",
        why: "<b>Kraft</b>: <i>in Kraft treten</i>."
      },
      {
        q: "Complete the notice: «Die Zahlung ___ per Überweisung.»",
        hint: "is made, takes place",
        why: "<b>erfolgt</b>: a typical verb of Amtsdeutsch."
      },
      {
        q: "Fill in: «Wir müssen noch eine Entscheidung ___.»",
        hint: "to make (a decision)",
        why: "<b>treffen</b>: <i>eine Entscheidung treffen</i> (in formal style also <i>fällen</i>), not <i>machen</i>."
      },
      {
        q: "Fill in: «Sie besteht ___, dass wir pünktlich sind.»",
        hint: "correlate of bestehen auf",
        why: "<b>darauf</b>: it announces the clause."
      },
      {
        q: "Fill in: «___ Abschluss der Arbeiten wird die Straße freigegeben.»",
        hint: "preposition: “after”",
        why: "<b>Nach</b>: <i>nach</i> + dative (<i>Abschluss</i>) instead of <i>nachdem</i>; <i>der Arbeiten</i> is the genitive depending on the noun."
      },
      {
        q: "Your colleague hasn't arrived yet. What does «Er wird den Zug wohl verpasst haben» express?",
        opts: [
          "a supposition about the past",
          "a future",
          "a passive"
        ],
        why: "Futur II as a <b>supposition</b>: “he'll have missed the train”, “he must have missed the train”."
      },
      {
        q: "Which noun phrase corresponds to «Um die Kosten zu senken, ...»?",
        opts: [
          "Zur Senkung der Kosten ...",
          "Bei Senkung der Kosten ...",
          "Trotz Senkung der Kosten ..."
        ],
        why: "Purpose (<i>um ... zu</i>) becomes <b>zu</b> + noun: <i>zur Senkung der Kosten</i>."
      },
      {
        q: "On the phone a colleague says: «Das ist halt so.» What attitude does she express?",
        opts: [
          "resignation",
          "enthusiasm",
          "reproach"
        ],
        why: "<i>halt</i> signals that the thing can't be changed: <b>resignation</b>."
      },
      {
        q: "In a regulation, which sentence expresses an obligation?",
        opts: [
          "Der Ausweis ist stets mitzuführen.",
          "Der Ausweis lässt sich mitführen.",
          "Der Ausweis ist mitgeführt."
        ],
        why: "<b>sein + zu</b> in a regulation expresses an obligation: “ID must be carried at all times”."
      },
      {
        q: "Rewrite in nominal style: «Weil es stark regnete, wurde das Konzert abgesagt.»",
        why: "<i>Wegen des starken Regens wurde das Konzert abgesagt</i>: <i>wegen</i> (or <i>aufgrund</i>) + genitive instead of <i>weil</i>."
      },
      {
        tr: "Once the work is completed, the road will be reopened.",
        why: "In <i>Abschluss</i> the stress falls on <b>Ab</b>; in <i>Arbeiten</i> on <b>Ar</b>; in <i>freigegeben</i> on <b>frei</b>."
      }
    ]
  }
});
