/* ============================================================
   Learner-language text (en) for data/core/a1-02.js, units a1-u04 and a1-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a1-u04": {
    title: "Buying clothes",
    grammarNote: "predicate adjectives · dieser and welcher · ihn, sie, es · sehr, zu, viel"
  },
  "lesson:a1-u04-l1": {
    theme: "Clothes and colors",
    title: "Describing an item: color and an adjective that stays the same",
    objectives: [
      "name the most common items of clothing with their article",
      "say what color something is with sein + adjective",
      "remember that an adjective after sein takes no ending"
    ],
    theory: [
      {
        h: "Color after “ist”: the adjective does not change",
        p: "To say what something is like, use <strong>sein</strong> and then the adjective: <em>Der Pullover ist rot</em>, <em>Die Jacke ist blau</em>, <em>Das Hemd ist weiß</em>. An adjective used with <em>sein</em> to describe the subject is <em>predicative</em> and takes no ending, whatever the gender of the noun. Only the verb changes, and in the plural it becomes <em>sind</em>: <em>Die Schuhe sind schwarz</em>."
      },
      {
        contrast: "English adjectives never change either (<em>the sweater is red</em>, <em>the shoes are red</em>), so this part will feel familiar. The difference is what the noun does around it: it has a gender, which you need for the article (<em>der, die, das</em>), and the word for “pants” is singular in German: <em>die Hose ist schwarz</em>, not “sind”. Later you will meet adjectives that do take endings when they stand <em>before</em> a noun, but not here."
      },
      {
        h: "Clothes with their article",
        p: "Learn each noun with its article, as you already know: <em>der Pullover</em>, <em>die Jacke</em>, <em>das Hemd</em>, <em>der Rock</em>, <em>das Kleid</em>. The article cannot be guessed from the item: <em>die Hose</em> is singular and means one pair of pants, while <em>die Schuhe</em> is the plural of <em>der Schuh</em> (usually you talk about a pair)."
      },
      {
        trap: "Do not write “Die Jacke ist rote” or “Der Pullover ist roter”: after <em>ist</em> the adjective is left as it is. Endings only appear when the adjective stands <em>before</em> the noun (<em>der rote Pullover</em>). You will see that later, and you do not need it now."
      },
      {
        tip: "Try describing three items of clothing you have at home out loud: <em>Die Hose ist blau</em>, <em>Der Pullover ist grün</em>, <em>Das Hemd ist weiß</em>. Three items, three colors, three sentences."
      }
    ],
    grammar: {
      title: "The adjective after sein",
      note: "The predicate adjective is <b>invariable</b>: only the form of <em>sein</em> changes (<em>ist</em> / <em>sind</em>).",
      table: {
        head: ["gender", "sentence"],
        rows: [
          ["masculine", "Der Pullover ist rot."],
          ["feminine", "Die Jacke ist blau."],
          ["neuter", "Das Hemd ist weiß."],
          ["plural", "Die Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "The sweater is red.", note: "der Pullover: masculine" },
        { tr: "The jacket is blue.", note: "die Jacke: feminine, no ending" },
        { tr: "The shirt is white.", note: "das Hemd: neuter" },
        { tr: "The shoes are black.", note: "plural: sind, but schwarz stays the same" },
        { tr: "The skirt is green." },
        { tr: "The dress is yellow." }
      ]
    },
    vocab: [
      "the sweater, pullover",
      "the jacket",
      "the shirt",
      "pants, a pair of pants (singular in German: die Hose)",
      "the shoe",
      "the T-shirt",
      "the skirt",
      "the dress",
      "red",
      "blue",
      "black",
      "white",
      "green",
      "yellow"
    ],
    exercises: [
      {
        q: "How do you say “The jacket is blue”?",
        opts: ["Die Jacke ist blaue.", "Die Jacke ist blau.", "Die Jacke blau ist."],
        why: "After <i>ist</i> the adjective stays unchanged and the verb is in second position: <b>Die Jacke ist blau.</b>"
      },
      {
        q: "Which sentence is correct?",
        opts: ["Die Schuhe ist schwarz.", "Die Schuhe sind schwarze.", "Die Schuhe sind schwarz."],
        why: "The subject is plural, so <b>sind</b>; the predicate adjective stays <i>schwarz</i>."
      },
      {
        q: "What color is “weiß”?",
        opts: ["white", "black", "yellow"],
        why: "<i>Weiß</i> means “white”. It is spelled with <b>ß</b> and pronounced /vaɪs/, rhyming with “ice”: the <b>ß</b> is a voiceless s, not a double consonant."
      },
      {
        q: "Complete: “Das Hemd ___ weiß.”",
        hint: "sein, third person singular",
        why: "<i>Das Hemd</i> is singular: <b>ist</b>."
      },
      {
        q: "Complete: “Die Schuhe ___ schwarz.”",
        hint: "sein, third person plural",
        why: "<i>Die Schuhe</i> is plural: <b>sind</b>."
      },
      {
        tr: "The sweater is blue and the pants are black.",
        why: "Each clause has its own conjugated verb: <i>Der Pullover ist blau und die Hose ist schwarz</i>. In both, the subject comes before <i>ist</i>. Note that <i>die Hose</i> is singular in German, so <i>ist</i>, even though English says “the pants are”."
      },
      {
        q: "Match each color with its meaning.",
        pairs: ["red", "blue", "green", "yellow"]
      },
      {
        q: "Complete the two sentences.",
        tr: "The dress is yellow and the shoes are black.",
        why: "A singular subject takes <i>ist</i>, a plural one <i>sind</i>. The adjectives do not change."
      },
      {
        tr: "The jacket is red and the pants are blue.",
        why: "<i>Jacke</i>: the <b>J</b> sounds like the English “y” in “yes”; <i>rot</i> has a long <b>o</b>."
      },
      {
        tr: "The sweater is green and the shirt is white.",
        why: "In <i>grün</i> the <b>ü</b> is said with the lips rounded as for “oo” and the tongue placed as for “ee”. <i>Weiß</i>: the <b>ei</b> sounds like the English word “eye”."
      }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "In the store",
    title: "Choosing between two items: dieser, welcher, der da",
    objectives: [
      "point out an item with dieser / diese / dieses",
      "ask “which?” with welcher / welche / welches",
      "use der da / die da / das da to point at something nearby or farther away"
    ],
    theory: [
      {
        h: "Dieser, diese, dieses: “this”",
        p: "<strong>Dieser</strong> works like an article: its form depends on the gender of the noun. <em>Dieser Pullover</em> (masculine), <em>diese Jacke</em> (feminine), <em>dieses Hemd</em> (neuter), <em>diese Schuhe</em> (plural). In the nominative the endings are added to <em>dies-</em>: <em>dies-er</em> (masculine), <em>dies-e</em> (feminine and plural), <em>dies-es</em> (neuter). Do not form <em>diesas</em>."
      },
      {
        h: "Welcher, welche, welches: “which?”",
        p: "To choose between two items, ask with <strong>welcher</strong>: <em>Welcher Mantel ist schön?</em>, <em>Welche Tasche ist blau?</em>, <em>Welches Kleid ist rot?</em> It follows the same pattern as <em>dieser</em>. You answer with <em>dieser</em> or, in speech, with <strong>der da</strong>, <strong>die da</strong>, <strong>das da</strong>: <em>Welcher Mantel ist billig? Der da.</em>"
      },
      {
        contrast: "English has one form for “this” (and “these” in the plural) and one for “which”, whatever the noun: <em>this coat</em>, <em>this jacket</em>, <em>which coat</em>, <em>which dress</em>. German makes you choose by gender: <em>dieser Mantel</em>, <em>diese Jacke</em>, <em>dieses Kleid</em>, and <em>welcher</em>, <em>welche</em>, <em>welches</em> the same way. Here you only study the nominative. For “that one over there” you will often hear the article with <em>da</em> (<em>der da</em>, “that one there”), and German does not need a separate “that” as English does."
      },
      {
        trap: "Do not say “Welche Mantel” or “Dieser Jacke”: the last letter has to follow the gender of the noun. <em>Mantel</em> is masculine (<em>welcher</em>), <em>Jacke</em> is feminine (<em>welche</em>), <em>Hemd</em> is neuter (<em>welches</em>). English “which” never changes, so this is easy to forget."
      },
      {
        tip: "In a store you can point and say just the word without the noun, as long as it matches the thing you point at: <em>Welcher? Dieser hier?</em> for <em>der Mantel</em>, <em>Welche? Diese hier?</em> for <em>die Jacke</em> or a plural, <em>Welches? Dieses hier?</em> for <em>das Hemd</em>. Spoken German cuts a lot, and <em>der</em> on its own, as in <em>Der ist schön</em>, is colloquial. <em>Dieser</em> and <em>welcher</em> can stand in for the noun in writing too."
      }
    ],
    grammar: {
      title: "dieser and welcher in the nominative",
      note: "The endings of <b>dieser</b> and <b>welcher</b> follow the gender of the noun: -er (masculine), -e (feminine), -es (neuter), -e (plural).",
      table: {
        head: ["gender", "dieser", "welcher", "example"],
        rows: [
          ["masculine", "dieser", "welcher", "Dieser Mantel ist schön."],
          ["feminine", "diese", "welche", "Diese Jacke ist teuer."],
          ["neuter", "dieses", "welches", "Dieses Hemd ist billig."],
          ["plural", "diese", "welche", "Diese Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "This sweater is nice." },
        { tr: "This jacket is expensive." },
        { tr: "This shirt is cheap.", note: "billig: inexpensive" },
        { tr: "Which coat is nice?", note: "masculine: welcher" },
        { tr: "Which bag is blue?", note: "feminine: welche" },
        { tr: "Which dress is red?", note: "neuter: welches" }
      ]
    },
    vocab: [
      "this (masculine / feminine / neuter)",
      "which (masculine / feminine / neuter)",
      "there: that one there (in speech: der da, die da, das da)",
      "expensive",
      "cheap, inexpensive",
      "beautiful, nice",
      "the coat",
      "the cap, hat",
      "the scarf",
      "the sock",
      "the bag, handbag",
      "the belt"
    ],
    dialogue: [
      "Good morning! What are you looking for?",
      "Good morning. I'm looking for a coat.",
      "This coat is nice, but expensive.",
      "And which coat is cheap?",
      "That one is cheap."
    ],
    exercises: [
      {
        q: "How do you say “This jacket is expensive”?",
        opts: ["Dieser Jacke ist teuer.", "Diese Jacke ist teuer.", "Dieses Jacke ist teuer."],
        why: "<i>Jacke</i> is feminine, so <b>diese</b>."
      },
      {
        q: "You want to ask which shirt is nice. Which sentence is correct?",
        opts: ["Welches Hemd ist schön?", "Welcher Hemd ist schön?", "Welche Hemd ist schön?"],
        why: "<i>Das Hemd</i> is neuter, so <b>welches</b>."
      },
      {
        q: "Complete: “Der Rock ist schön, aber ___ Hose ist teuer.” (this)",
        hint: "die Hose is feminine",
        why: "<i>Hose</i> is feminine: <b>diese</b>."
      },
      {
        q: "Complete: “___ Schal ist billig?” (which scarf)",
        hint: "der Schal is masculine; question",
        why: "<i>Schal</i> is masculine: <b>welcher</b>."
      },
      {
        q: "Pick the right article: the same gender then decides whether you say <i>dieser</i>, <i>diese</i> or <i>dieses</i>.",
        why: "<i>Mantel</i> and <i>Schal</i> are masculine (der, dieser), <i>Jacke</i> and <i>Tasche</i> feminine (die, diese), <i>Kleid</i> and <i>Hemd</i> neuter (das, dieses).",
        items: ["coat", "jacket", "dress", "scarf", "bag", "shirt"]
      },
      {
        tr: "This coat is nice, but expensive.",
        why: "The comma before <i>aber</i> is required. In <i>schön</i> the <b>ö</b> is a long vowel: say “e” as in “day”, but hold it steady and round your lips, /ʃøːn/."
      },
      {
        q: "Translate: “This jacket is nice, but that one over there is expensive.”",
        why: "<i>Diese Jacke ... die da ...</i>: <i>die da</i> refers to the second jacket without repeating the noun. <i>Diese da</i> is fine too."
      },
      {
        q: "You are in a store.",
        setting: "A salesperson comes up to you.",
        lines: [
          { tr: "Good morning! What are you looking for?" },
          { tr: "Say that you are looking for a jacket.", answerTr: "I'm looking for a jacket." },
          { tr: "This jacket is red. This other one is blue." },
          { tr: "Ask which jacket is cheap.", answerTr: "Which jacket is cheap?" }
        ]
      },
      {
        tr: "This coat is nice, but that one over there is expensive.",
        why: "In <i>Mantel</i> the <b>t</b> is crisp, and <i>teuer</i> starts with <b>t</b> followed by “oy”: the <b>eu</b> sounds like the “oy” in “boy”."
      },
      {
        tr: "Which jacket is cheap? That one.",
        why: "<i>Welche</i> starts with a <b>w</b> that sounds like the English “v”; in <i>Jacke</i> the <b>J</b> sounds like “y”."
      }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Prices and purchases",
    title: "Prices and accusative pronouns: ihn, sie, es",
    objectives: [
      "ask the price with Was kostet ...? and Wie viel kostet ...?",
      "say how much an item costs in euros or francs",
      "replace a noun you already mentioned with ihn, sie, es"
    ],
    theory: [
      {
        h: "Asking and giving the price",
        p: "To ask the price: <em>Was kostet der Pullover?</em> or <em>Wie viel kostet der Pullover?</em> You answer with the verb <em>kosten</em> and the number: <em>Der Pullover kostet vierzig Euro</em>. In Switzerland the currency is the franc, <em>der Franken</em>: <em>Das Hemd kostet fünfzig Franken</em>. In the plural, the verb agrees with the subject: <em>Die Schuhe kosten achtzig Euro</em>. At the register you hear <em>Das macht fünfundvierzig Euro</em>."
      },
      {
        h: "Ihn, sie, es: do not repeat the noun",
        p: "Once you have named an item, you do not repeat it: you use a pronoun. As the object of <em>nehmen</em> or <em>kaufen</em> (accusative) the pronoun follows the <strong>gender of the noun</strong>: <em>der Pullover</em> becomes <strong>ihn</strong>, <em>die Jacke</em> becomes <strong>sie</strong>, <em>das Hemd</em> becomes <strong>es</strong>, <em>die Schuhe</em> becomes <strong>sie</strong>. Example: <em>Der Pullover ist schön. Ich nehme ihn.</em>"
      },
      {
        contrast: "In English a thing is simply <em>it</em> (and <em>them</em> in the plural): <em>I'll take it</em>, whether it is a sweater, a jacket or a shirt. German picks the pronoun from the gender of the German noun: <em>ihn</em> for <em>der Pullover</em>, <em>sie</em> for <em>die Jacke</em>, <em>es</em> for <em>das Hemd</em>. This is why you learn the article with every noun. The word order is the same as in English, with the pronoun after the verb: <em>Ich nehme ihn</em>, “I take it”. Remember that <em>die Hose</em> is singular, so you say <em>Ich nehme sie</em> even though English says “them”."
      },
      {
        trap: "For things, use the pronoun that matches the grammatical gender, not <em>es</em> for everything as you would use “it”: <em>Die Jacke ist schön. Ich nehme sie</em>, not “Ich nehme es”. <em>Es</em> is right for a neuter noun (<em>das Hemd</em>, <em>das Kleid</em>). Only the masculine changes form between the nominative (<em>er</em>) and the accusative (<em>ihn</em>)."
      },
      {
        tip: "To accept a purchase, three words are enough: <em>Ich nehme ihn</em> / <em>sie</em> / <em>es</em>. To refuse, add <em>nicht</em> at the end: <em>Ich nehme ihn nicht</em>."
      }
    ],
    grammar: {
      title: "From noun to pronoun in the accusative",
      note: "The pronoun follows the gender of the noun. Only the masculine changes: <b>er → ihn</b>.",
      table: {
        head: ["noun", "nominative", "accusative", "example"],
        rows: [
          ["der Pullover", "er", "ihn", "Ich nehme ihn."],
          ["die Jacke", "sie", "sie", "Ich nehme sie."],
          ["das Hemd", "es", "es", "Ich nehme es."],
          ["die Schuhe", "sie", "sie", "Ich nehme sie."]
        ]
      },
      examples: [
        { tr: "How much is the sweater?" },
        { tr: "The sweater costs forty euros. I'll take it.", note: "ihn: masculine" },
        { tr: "The jacket costs sixty euros. I'll take it.", note: "sie: feminine" },
        { tr: "The shirt costs twenty-five euros. I'll take it.", note: "es: neuter" },
        { tr: "The shoes are expensive. I won't take them.", note: "nicht at the end" },
        { tr: "How much is the coat? I'm not buying it.", note: "ihn: masculine" }
      ]
    },
    vocab: [
      "to cost",
      "how much, how much does it cost (wie viel)",
      "the price",
      "the euro",
      "the Swiss franc",
      "to buy",
      "the checkout, the register",
      "the salesman, shop assistant",
      "the saleswoman, shop assistant",
      "only, just",
      "him / her / it / them (object: ihn, sie, es)",
      "That comes to ... euros"
    ],
    exercises: [
      {
        q: "“Der Pullover ist schön. Ich nehme ___.” Which pronoun?",
        opts: ["er", "ihn", "es"],
        why: "<i>Der Pullover</i> is masculine and here it is the object of <i>nehmen</i>: <b>ihn</b>."
      },
      {
        q: "“Die Jacke ist teuer. Ich kaufe ___ nicht.” Which pronoun?",
        opts: ["sie", "ihn", "es"],
        why: "<i>Die Jacke</i> is feminine: <b>sie</b> (for the feminine, nominative and accusative are the same)."
      },
      {
        q: "“Das Kleid ist schön. Ich nehme ___.” Which pronoun?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> is neuter: <b>es</b>."
      },
      {
        q: "Complete: “Der Rock ist billig. Ich kaufe ___.” (I'll buy it.)",
        hint: "der Rock is masculine; accusative",
        why: "Masculine accusative: <b>ihn</b>."
      },
      {
        q: "Complete: “Was ___ die Schuhe?” (How much are the shoes?)",
        hint: "kosten, plural",
        why: "The subject <i>die Schuhe</i> is plural: <b>kosten</b>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["to cost", "the price", "the checkout", "to buy"]
      },
      {
        q: "Complete the two sentences.",
        tr: "The pants cost thirty euros. I'll take them. The belt costs fifteen euros. I'll take it.",
        why: "<i>Die Hose</i> is feminine singular, so <b>sie</b>, even though English says “them”. <i>Der Gürtel</i> is masculine: <b>ihn</b>."
      },
      {
        q: "Translate: “The jacket costs sixty euros, I'll take it.”",
        why: "<i>Die Jacke</i> is feminine, so <i>sie</i>. The number can be written in words (<i>sechzig</i>) or digits (60)."
      },
      {
        tr: "How much is the coat? It costs ninety euros.",
        why: "In <i>neunzig</i> the <b>eu</b> sounds like “oy” and the <b>z</b> like “ts”; the final <b>-ig</b> is pronounced like the <b>ch</b> of <i>ich</i>: /ˈnɔʏntsɪç/. <i>Euro</i> starts with “oy”."
      },
      {
        tr: "The shirt costs only twenty euros. I'll take it.",
        why: "<i>Nur</i> has a long <b>u</b>, like “oo” in “boot”. <i>Zwanzig</i>: the <b>zw</b> is read “tsv”."
      }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Sizes and opinions",
    title: "How much? Sehr, zu, viel, wenig",
    objectives: [
      "say that an item is very nice (sehr) or too expensive (zu)",
      "use viel and wenig after kosten (kostet viel, kostet wenig)",
      "describe size: groß, klein, lang, kurz, eng, weit"
    ],
    theory: [
      {
        h: "Sehr and zu: before the adjective",
        p: "<strong>Sehr</strong> (very) and <strong>zu</strong> (too) stand <em>before</em> the adjective, with no ending: <em>Der Pullover ist sehr schön</em>, <em>Die Hose ist zu klein</em>, <em>Das Kleid ist zu teuer</em>. You can add <em>ein bisschen</em> (a little): <em>Die Jacke ist ein bisschen zu groß</em>. To describe size: <em>groß</em>, <em>klein</em>, <em>lang</em>, <em>kurz</em>, <em>eng</em> (tight), <em>weit</em> (loose)."
      },
      {
        h: "Viel and wenig: after kosten",
        p: "With <em>kosten</em> and with an adjective in the basic form, position tells the words apart: <strong>viel</strong> (a lot) and <strong>wenig</strong> (little) stand <em>after</em> the verb <em>kosten</em>, while <strong>sehr</strong> stands before the adjective. This is not a rule for every verb (<em>Das gefällt mir sehr</em>) or for comparatives (<em>viel schöner</em>). <em>Der Mantel kostet viel</em>, <em>Das Hemd kostet wenig</em>. With <em>zu</em> you can say <em>zu viel</em> (too much): <em>Der Mantel ist sehr schön, aber er kostet zu viel</em>."
      },
      {
        contrast: "English makes the same split: <em>very nice</em> but <em>costs a lot</em>, never “costs very”. German works the same way, so you can trust your ear: <em>sehr schön</em> (very nice) and <em>kostet viel</em> (costs a lot). The words that differ are <em>zu</em>, which means “too” before an adjective (<em>zu teuer</em>) and not “to”, and <em>zu viel</em> for “too much”. Do not confuse <em>zu</em> with the preposition “to”; here it is just “too”. With other verbs you may need <em>sehr</em> (<em>Das gefällt mir sehr</em>)."
      },
      {
        trap: "Do not say “Der Pullover ist viel schön”: before an adjective in the basic form you need <em>sehr</em> (<em>viel</em> goes before a comparative instead: <em>viel schöner</em>, “much nicer”). And with <em>kosten</em> do not say “Der Mantel kostet sehr”: you use <em>viel</em> (or <em>sehr viel</em>)."
      },
      {
        tip: "In a store you will often need two sentences: <em>Der Mantel ist zu teuer</em> and <em>Die Hose ist zu eng</em>. After <em>zu</em> before an adjective, nothing changes."
      }
    ],
    grammar: {
      title: "sehr, zu, viel, wenig",
      note: "<b>Sehr</b> and <b>zu</b> stand before the adjective in the basic form; with <b>kosten</b>, <b>viel</b> and <b>wenig</b> stand after the verb.",
      table: {
        head: ["adverb", "meaning", "position", "example"],
        rows: [
          ["sehr", "very", "before the adjective", "Der Pullover ist sehr schön."],
          ["zu", "too", "before the adjective", "Die Hose ist zu klein."],
          ["viel", "a lot, much", "after kosten", "Der Mantel kostet viel."],
          ["wenig", "little", "after kosten", "Das Hemd kostet wenig."]
        ]
      },
      examples: [
        { tr: "The sweater is very nice." },
        { tr: "The pants are too small.", note: "zu before the adjective" },
        { tr: "The dress is too expensive." },
        { tr: "The coat costs a lot.", note: "viel after kosten" },
        { tr: "The shirt costs little.", note: "wenig after kosten" },
        { tr: "The jacket is a little too big." }
      ]
    },
    vocab: [
      "very (before an adjective)",
      "too (before an adjective)",
      "a lot, much (after kosten)",
      "little (after kosten)",
      "a little",
      "big, tall",
      "small, short (in height)",
      "long",
      "short",
      "tight, narrow",
      "loose, wide",
      "the size"
    ],
    exercises: [
      {
        q: "How do you say “The pants are too small”?",
        opts: ["Die Hose ist zu klein.", "Die Hose ist sehr klein.", "Die Hose ist viel klein."],
        why: "<b>Zu</b> means “too” and stands before the adjective. <i>Sehr klein</i> would be “very small”, without the idea of excess."
      },
      {
        q: "How do you say “The coat is very nice”?",
        opts: ["Der Mantel ist zu schön.", "Der Mantel ist sehr schön.", "Der Mantel ist wenig schön."],
        why: "<b>Sehr</b> before the adjective. <i>Sehr schön</i> means “very nice”; <i>zu schön</i> means “too nice/beautiful” and expresses excess relative to a context or limit."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Die Hose ist zu eng.",
          "Der Pullover ist viel schön.",
          "Das Hemd kostet wenig.",
          "Der Mantel ist sehr groß.",
          "Die Jacke kostet sehr."
        ],
        why: "<i>Viel schön</i> is wrong: before an adjective you need <i>sehr</i>. With <i>kosten</i>, <i>kostet sehr</i> on its own does not work: you say <i>kostet viel</i> or <i>kostet sehr viel</i>."
      },
      {
        q: "Complete: “Der Mantel ist ___ teuer. Ich nehme ihn nicht.” (too)",
        hint: "before the adjective",
        why: "<b>Zu</b>: “too” before an adjective."
      },
      {
        q: "Complete: “Das Kleid ist ___ schön.” (very)",
        hint: "before the adjective",
        why: "<b>Sehr</b>: “very” before an adjective."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["big", "small", "long", "short"]
      },
      {
        q: "Complete: “The sweater is very nice, but it costs a lot.”",
        tr: "The sweater is very nice, but it costs a lot.",
        why: "<i>Sehr</i> before the adjective, <i>viel</i> after <i>kosten</i>."
      },
      {
        q: "Translate: “The coat is very nice, but it costs too much.”",
        why: "<i>Sehr schön</i> (before the adjective) and <i>zu viel</i> (after <i>kosten</i>): <i>er kostet zu viel</i>."
      },
      {
        tr: "The pants are too small, but the jacket is very nice.",
        why: "<i>Klein</i> has the <b>ei</b> that sounds like “eye”. <i>Schön</i>: the <b>sch</b> is like the “sh” in “shoe”."
      },
      {
        tr: "The dress is very nice, but too expensive.",
        why: "<i>Kleid</i>: the <b>ei</b> sounds like “eye” and the final <b>d</b> sounds like a <b>t</b>."
      }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Test",
    title: "Unit 4 test",
    objectives: ["check predicate adjectives, dieser and welcher, accusative pronouns and sehr, zu, viel"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Do not look back at the lessons while you answer: if you do not remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: “Die Schuhe ___ schwarz.” (The shoes are black.)",
        hint: "sein, third person plural",
        why: "Plural subject: <b>sind</b>."
      },
      {
        q: "Complete: “Der Pullover kostet fünfzig Euro. Ich nehme ___.” (I'll take it.)",
        hint: "der Pullover is masculine; accusative",
        why: "Masculine accusative: <b>ihn</b>."
      },
      {
        q: "Complete: “Die Hose ist ___ eng, ich nehme sie nicht.” (too)",
        hint: "before the adjective",
        why: "<b>Zu</b>: “too” before an adjective."
      },
      {
        q: "Pick the right definite article for each noun.",
        items: ["sweater", "pants", "dress", "skirt"]
      },
      {
        q: "How do you ask which sweater is cheap?",
        opts: ["Welcher Pullover ist billig?", "Welche Pullover ist billig?", "Welches Pullover ist billig?"],
        why: "<i>Pullover</i> is masculine: <b>welcher</b>."
      },
      {
        q: "“Das Kleid ist schön. Ich nehme ___.” Which pronoun?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> is neuter: <b>es</b>."
      },
      {
        tr: "The shirt is very nice, but too expensive.",
        why: "<i>Sehr schön, aber zu teuer</i>: two adverbs before the adjective."
      },
      {
        q: "Translate: “The jacket is nice, but too expensive. I won't take it.”",
        why: "<i>Zu</i> stands before the adjective <i>teuer</i>; <i>sie</i> picks up <i>die Jacke</i> and <i>nicht</i>, at the end, negates the purchase."
      },
      {
        tr: "Which sweater is red and which is blue?",
        why: "<i>Welcher Pullover</i>: masculine. The question in the nominative does not change the verb, which stays in second position."
      },
      {
        tr: "The coat is very nice. I'll take it.",
        why: "<i>Mantel</i> is masculine: <i>ihn</i>."
      }
    ]
  },
  "unit:a1-u05": {
    title: "My day",
    grammarNote: "separable verbs · um, am, im, von ... bis · können, wollen, müssen · adverbs of frequency"
  },
  "lesson:a1-u05-l1": {
    theme: "Morning routine",
    title: "Separable verbs: the prefix goes to the end",
    objectives: [
      "describe a routine with aufstehen, frühstücken, duschen, einkaufen, fernsehen",
      "put the prefix of a separable verb at the end of the sentence",
      "say when something happens with um + time"
    ],
    theory: [
      {
        h: "The prefix splits off and goes to the end",
        p: "Many German verbs have a stressed prefix that, in a main clause, <strong>splits off</strong> and goes <strong>to the end of the sentence</strong>. In the infinitive the verb stays whole: <em>aufstehen</em>. In the sentence the conjugated part sits in second position and the prefix closes the clause: <em>Ich stehe um sieben Uhr <strong>auf</strong></em>. <em>aufwachen</em> (<em>Ich wache um sechs Uhr auf</em>), <em>einkaufen</em> (<em>Wir kaufen am Samstag ein</em>), <em>fernsehen</em> (<em>Am Abend sehe ich fern</em>), <em>anfangen</em> (<em>Der Film fängt um acht Uhr an</em>) and <em>einschlafen</em> work the same way."
      },
      {
        contrast: "English has a similar family, phrasal verbs like <em>get up</em>, <em>wake up</em>, <em>turn on</em>, and that helps: the little word carries part of the meaning. The difference is where it lands. In English the particle usually stays right next to the verb (<em>I get up at seven</em>), while in German it travels to the very end of the clause, after the time expression and everything else: <em>Ich stehe um sieben Uhr auf</em>. Two more points. <em>Aufstehen</em> and <em>aufwachen</em> are not reflexive in these examples, just like <em>get up</em> and <em>wake up</em>, but a subject is still expressed: <em>Ich stehe auf</em>. And some English multi-word expressions are a single plain verb in German, with nothing to split: <em>have breakfast</em> is <em>frühstücken</em> and <em>take a shower</em> is <em>duschen</em> (<em>Ich dusche am Morgen</em>)."
      },
      {
        h: "Parts of the day: learn the article with the noun",
        p: "Learn these nouns with their article: <em>der Morgen</em>, <em>der Tag</em>, <em>der Abend</em>, <em>die Nacht</em>. English nouns have no gender, so there is nothing to carry over: <em>morning</em> and <em>evening</em> are masculine in German, <em>night</em> is feminine (<em>die Nacht</em>, plural <em>die Nächte</em>). Watch the spelling: <em>der Morgen</em> (the morning) is a noun with a capital letter, while <em>morgen</em> in lower case is the adverb “tomorrow”."
      },
      {
        trap: "Don't say “Ich aufstehe um sieben”: the prefix does not stay attached to the conjugated verb. And don't forget it at the end: “Ich stehe um sieben Uhr” without <em>auf</em> is a different sentence and does not mean “I get up”. Also watch for prefixes that typically do <strong>not</strong> split: <em>be-</em>, <em>ver-</em>, <em>er-</em> (<em>besuchen</em> → <em>Ich besuche dich</em>, <em>verstehen</em> → <em>Ich verstehe das</em>). A separable prefix is the stressed one (<em>AUFstehen</em>), an inseparable one is not (<em>beSUchen</em>). <em>Duschen</em> and <em>frühstücken</em> have no prefix to split, while <em>fernsehen</em> and <em>einschlafen</em> are separable."
      },
      {
        tip: "Write five sentences with different separable verbs and check that the prefix is always the last word: <em>Ich wache auf. Ich stehe auf. Ich kaufe ein. Ich sehe fern. Ich schlafe ein.</em> Then add <em>um</em> + a time to two of them."
      }
    ],
    grammar: {
      title: "Separable verbs in the main clause",
      note: "In the main clause the conjugated part is in <b>second position</b> and the <b>prefix goes to the end</b>. In the infinitive the verb is whole.",
      table: {
        head: ["infinitive", "present", "example"],
        rows: [
          ["aufstehen", "ich stehe ... auf", "Ich stehe um sieben Uhr auf."],
          ["aufwachen", "ich wache ... auf", "Du wachst um sechs Uhr auf."],
          ["einkaufen", "wir kaufen ... ein", "Am Samstag kaufen wir ein."],
          ["fernsehen", "er sieht ... fern", "Am Abend sieht er fern."],
          ["anfangen", "er fängt ... an", "Der Film fängt um acht Uhr an."]
        ]
      },
      examples: [
        { tr: "I get up at seven.", note: "auf goes at the end; no reflexive pronoun is needed" },
        { tr: "You wake up at six." },
        { tr: "On Saturday we go shopping.", note: "einkaufen: ein at the end" },
        { tr: "In the evening he watches TV.", note: "fernsehen: with er, sehen changes to sieht" },
        { tr: "The movie starts at eight.", note: "anfangen: er fängt an, with the vowel change" },
        { tr: "I have breakfast at seven thirty.", note: "frühstücken is not separable: no prefix at the end" }
      ]
    },
    vocab: [
      "to get up",
      "to wake up",
      "to have breakfast",
      "to take a shower",
      "to shop, to go shopping",
      "to watch TV",
      "to begin, to start",
      "to fall asleep",
      "the morning",
      "the day",
      "the evening",
      "the night"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: ["Ich aufstehe um sieben Uhr.", "Ich stehe um sieben Uhr auf.", "Ich stehe um auf sieben Uhr."],
        why: "The conjugated verb is in second position and the prefix <b>auf</b> closes the sentence: <b>Ich stehe um sieben Uhr auf.</b>"
      },
      {
        q: "Which question is correct?",
        opts: ["Kommst du mit?", "Mitkommst du?", "Kommst mit du?"],
        why: "<i>Mitkommen</i> is separable: <i>Kommst du mit?</i> The prefix <b>mit</b> closes the question."
      },
      {
        tr: "The full conjugation of aufstehen, with the prefix.",
        why: "Always write the conjugated form and then the prefix: <i>stehe auf</i>, <i>stehst auf</i>, <i>steht auf</i>, <i>stehen auf</i>, <i>steht auf</i>, <i>stehen auf</i>. <i>Er/sie/es</i> and <i>ihr</i> have the same form: <b>steht auf</b>."
      },
      {
        q: "Complete: “We get up at seven.” → “Wir ___ um sieben auf.”",
        hint: "aufstehen, first person plural",
        why: "With <b>wir</b> the conjugated part is <i>stehen</i>, and the prefix <i>auf</i> splits off and goes to the end: <i>Wir stehen um sieben auf</i>."
      },
      {
        q: "Complete: “I get up at seven.” → “Ich stehe um sieben ___.”",
        hint: "the prefix of aufstehen",
        why: "The separable prefix goes to the end: <b>auf</b>."
      },
      {
        tr: "I get up at seven.",
        why: "The order is: subject, conjugated verb, time, prefix. In <i>stehe</i> the <b>st</b> at the start of a syllable is read “sht”: /ˈʃteːə/."
      },
      {
        q: "Fill in the two missing words.",
        tr: "On Saturday we go shopping.",
        why: "<i>Einkaufen</i> splits into <i>kaufen</i> and <i>ein</i>. With <i>am Samstag</i> in first position the subject <i>wir</i> follows the verb."
      },
      {
        tr: "At seven I get up.",
        why: "<i>Ich stehe um sieben Uhr auf</i> is also correct and, with inversion, so is <i>Um sieben (Uhr) stehe ich auf</i>. The time can come first because the verb stays in second position and the prefix still closes the clause."
      },
      {
        tr: "I get up at seven and have breakfast at eight.",
        why: "<i>Auf</i> has the diphthong /aʊ̯/, spelled “au”: a glide from “ah” to a short “oo”, much like the “ow” of English “now”. <i>Frühstücke</i> has two different ü sounds, /ˈfʁyːʃtʏkə/: the first <b>ü</b> (in <i>früh</i>) is long /yː/, the second (in <i>-stücke</i>) is short /ʏ/ (lips rounded, tongue forward); <b>st</b> is read [ʃt], as in <i>Stück</i>."
      },
      {
        tr: "On Saturday we go shopping.",
        why: "<i>Samstag</i>: the <b>s</b> before a vowel is voiced, like the “z” of “zoo”; <i>ein</i> begins with the diphthong <b>ei</b> (like English “eye”)."
      }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "Time and days",
    title: "Telling and asking the time: um, am, von ... bis",
    objectives: [
      "ask the time with Wie spät ist es? and answer",
      "say full hours, and Viertel nach, Viertel vor, halb",
      "use um with the time, am with days and von ... bis"
    ],
    theory: [
      {
        h: "Asking and telling the time",
        p: "To ask the time: <em>Wie spät ist es?</em> or <em>Wie viel Uhr ist es?</em> You answer with <em>Es ist</em> + time: <em>Es ist sieben Uhr</em>. For quarters and minutes: <em>Es ist Viertel nach sieben</em> (7:15), <em>Es ist Viertel vor acht</em> (7:45), <em>Es ist zehn nach sieben</em> (7:10), <em>Es ist zehn vor acht</em> (7:50). For one o'clock: <em>Es ist ein Uhr</em>. In official contexts (trains, TV listings, timetables) the 24-hour clock is also used: <em>neunzehn Uhr dreißig</em>."
      },
      {
        contrast: "<em>Es ist sieben Uhr</em> is built just like “It is seven o'clock”, with <em>es</em> as the subject. <em>Uhr</em> makes the time explicit and clear, but it can be omitted when the context makes the time obvious (<em>Es ist sieben</em>). Watch out for <strong>halb</strong>: <em>halb acht</em> means <strong>seven thirty</strong>, not eight thirty, because German counts toward the hour that is coming. English “half past seven” counts from the hour that has just passed, so for an English speaker <em>Es ist halb acht</em> sounds like 8:30 when it is 7:30. Quarters are easier: <em>Viertel nach</em> and <em>Viertel vor</em> match “quarter past” and “quarter to”. Finally, English “hour” covers a duration, while the time on the clock is not an “hour” in German: use <em>Uhr</em> for the time of day (<em>die Uhr</em> is also the clock or watch) and <em>die Stunde</em> for duration: <em>Es ist drei Uhr</em> (it's three o'clock), <em>Der Film dauert drei Stunden</em> (the movie lasts three hours)."
      },
      {
        h: "um, am, von ... bis",
        p: "With an exact time use <strong>um</strong>: <em>Der Film beginnt um acht Uhr</em> (at eight). With days and parts of the day use <strong>am</strong>: <em>am Montag</em>, <em>am Samstag</em>, <em>am Morgen</em>, <em>am Nachmittag</em>, <em>am Abend</em>; the exception is <em>in der Nacht</em>. With months and seasons use <strong>im</strong>: <em>im Mai</em>, <em>im Sommer</em>. For a range, <strong>von ... bis</strong>: <em>von Montag bis Freitag</em>, <em>von acht bis vier</em>. The days: <em>Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</em>."
      },
      {
        trap: "English uses “at” for times (and for “at night”), “on” for days and “in” for mornings, evenings and months, so the English prepositions don't line up with the German ones. Take them one by one: <em>um</em> for the clock time, <em>am</em> for the day and for <em>Morgen</em>, <em>Nachmittag</em>, <em>Abend</em>, <em>in der Nacht</em> for the night, <em>im</em> for months. So not “in dem Morgen” for “in the morning”: it is <em>am Morgen</em>. And don't say “um Montag”: Monday is a day, so <em>am Montag</em>. German days are all masculine (<em>der Montag</em>) and, like English ones, capitalized."
      },
      {
        tip: "Learn the three half hours as a set: <em>halb acht</em> (7:30), <em>halb neun</em> (8:30), <em>halb zehn</em> (9:30). To check yourself, add the hour that follows: if I say <em>halb neun</em>, I am half an hour short of nine."
      }
    ],
    grammar: {
      title: "Telling time and time prepositions",
      note: "<b>um</b> + time, <b>am</b> + day or part of the day (<em>am Morgen, am Nachmittag, am Abend</em>; exception: <em>in der Nacht</em>), <b>im</b> + month or season. <b>Halb acht</b> = 7:30.",
      table: {
        head: ["time", "you say"],
        rows: [
          ["7:00", "Es ist sieben Uhr."],
          ["7:05", "Es ist fünf nach sieben."],
          ["7:15", "Es ist Viertel nach sieben."],
          ["7:30", "Es ist halb acht."],
          ["7:45", "Es ist Viertel vor acht."],
          ["7:50", "Es ist zehn vor acht."]
        ]
      },
      examples: [
        { tr: "What time is it?", note: "also: Wie viel Uhr ist es?" },
        { tr: "It's seven o'clock.", note: "es ist, singular" },
        { tr: "It's a quarter past seven." },
        { tr: "It's half past seven.", note: "halb acht: counted toward eight" },
        { tr: "It's a quarter to eight." },
        { tr: "The movie starts on Saturday at eight thirty.", note: "am Samstag, um halb neun" }
      ]
    },
    vocab: [
      "clock, watch; o'clock when telling the time (die Uhr)",
      "the hour (duration)",
      "the minute",
      "the quarter",
      "half (halb acht = half past seven)",
      "to, before (before the coming hour: Viertel vor acht)",
      "past, after (Viertel nach sieben)",
      "late",
      "early",
      "Monday",
      "Saturday",
      "the weekend"
    ],
    exercises: [
      {
        q: "“Es ist halb acht.” What time is it?",
        opts: ["seven thirty", "eight thirty", "eight o'clock"],
        why: "<i>Halb acht</i> is seven thirty: you count toward the next hour, half an hour before eight."
      },
      {
        q: "How do you say “from Monday to Friday”?",
        opts: ["von Montag nach Freitag", "ab Montag zu Freitag", "von Montag bis Freitag"],
        why: "For a range you use <b>von ... bis</b>: <i>von Montag bis Freitag</i>."
      },
      {
        q: "Complete: “Der Film beginnt ___ acht Uhr.” (at eight)",
        hint: "with an exact time",
        why: "With a time you use <b>um</b>: <i>um acht Uhr</i>."
      },
      {
        q: "Complete: “Das Konzert ist ___ Samstag.” (on Saturday)",
        hint: "with a day of the week",
        why: "With days you use <b>am</b>: <i>am Samstag</i>."
      },
      {
        tr: "It's a quarter past seven.",
        why: "<i>Viertel nach sieben</i>: the <b>V</b> of <i>Viertel</i> is read like “f”. In <i>sieben</i> the <b>ie</b> is a long “ee” and the <b>s</b> is voiced, like a “z”."
      },
      {
        q: "Match each day of the week with its meaning.",
        pairs: ["Monday", "Wednesday", "Friday", "Sunday"]
      },
      {
        q: "Complete the two sentences.",
        tr: "7:10: it's ten past seven. 7:50: it's ten to eight.",
        why: "<i>Zehn nach sieben</i> is 7:10, <i>zehn vor acht</i> is 7:50."
      },
      {
        tr: "What time is it? It's half past eight.",
        why: "Half past eight is <i>halb neun</i>. The more formal alternative is <i>acht Uhr dreißig</i>. <i>Wie spät ist es?</i> and <i>Wie viel Uhr ist es?</i> are equivalent."
      },
      {
        tr: "What time is it? It's a quarter to eight.",
        why: "<i>Viertel vor acht</i>: 7:45. In <i>vor</i> the <b>v</b> sounds like “f” and the <b>o</b> is long."
      },
      {
        tr: "The movie starts at eight thirty.",
        why: "In <i>halb neun</i> the initial <b>h</b> is breathed out, and the final <b>b</b> sounds like “p”. <i>Beginnt</i>: the <b>g</b> is a hard “g”."
      }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Ability, will, obligation",
    title: "Modal verbs: können, wollen, müssen",
    objectives: [
      "say what you can, want and must do with können, wollen, müssen",
      "conjugate the three modals in the present",
      "put the infinitive at the end of the sentence"
    ],
    theory: [
      {
        h: "Three verbs, one structure",
        p: "<strong>können</strong> (can, to be able to), <strong>wollen</strong> (to want) and <strong>müssen</strong> (must, to have to) are used together with another verb in the infinitive. The modal is conjugated and sits in second position, while the <strong>infinitive goes to the end of the sentence</strong>: <em>Ich kann heute nicht kommen</em>, <em>Wir wollen morgen schwimmen</em>, <em>Du musst heute lernen</em>. Modal and infinitive frame the rest of the sentence like brackets."
      },
      {
        h: "The conjugation",
        p: "These three verbs have their own pattern: the first and third person singular are the same and <strong>have no ending</strong>. <em>Ich kann</em>, <em>er kann</em>. <em>Ich will</em>, <em>er will</em>. <em>Ich muss</em>, <em>er muss</em>. With <em>wir</em>, <em>sie</em> and <em>Sie</em> the form is the same as the infinitive: <em>wir können</em>, <em>sie wollen</em>, <em>Sie müssen</em>. With <em>ihr</em> you get <em>könnt, wollt, müsst</em>, with <em>du</em> <em>kannst, willst, musst</em>."
      },
      {
        contrast: "English modals behave much like the German ones, which is good news: they are followed by a bare infinitive (<em>I can come</em>, <em>I must go</em>) and <em>he can</em> has no <em>-s</em>, just like <em>er kann</em>. Two differences. First, the German infinitive does not follow the modal directly but goes to the end: <em>Ich kann heute Abend mit dir ins Kino gehen</em>. Second, <strong>wollen</strong> is a false friend: <em>ich will</em> means “I want”, not “I will”. The English future “will” is not expressed this way. Also, <em>können</em> covers both “can” and “know how to”: <em>Ich kann schwimmen</em> is “I can swim”."
      },
      {
        trap: "With <em>nicht</em>, <em>müssen</em> does not mean “must not” as a prohibition. <em>Du musst nicht kommen</em> means “you don't have to come”: it is not a ban. English has the same trap in reverse, since “you must not” and “you don't have to” differ a lot. For a prohibition you will need another verb, <em>dürfen</em>, which comes later. One more trap: <em>wollen</em> is direct. <em>Ich will einen Kaffee</em> can sound abrupt as a request. To ask politely use <em>ich möchte</em>, which you will see later; it is a polite form that comes from <em>mögen</em>. After a modal there is no <em>zu</em> before the infinitive, unlike English “I want to go”."
      },
      {
        tip: "Build three sentences about yourself, one per modal, and say them aloud: <em>Ich kann gut kochen</em>, <em>Ich will morgen schlafen</em>, <em>Ich muss heute lernen</em>. Check that the infinitive is always the last word."
      }
    ],
    grammar: {
      title: "können, wollen, müssen in the present",
      note: "The 1st and 3rd person singular are <b>the same and have no ending</b>. The infinitive goes to the end of the sentence.",
      table: {
        head: ["person", "können", "wollen", "müssen"],
        rows: [
          ["ich", "kann", "will", "muss"],
          ["du", "kannst", "willst", "musst"],
          ["er / sie / es", "kann", "will", "muss"],
          ["wir", "können", "wollen", "müssen"],
          ["ihr", "könnt", "wollt", "müsst"],
          ["sie / Sie", "können", "wollen", "müssen"]
        ]
      },
      examples: [
        { tr: "I can cook well.", note: "können for ability" },
        { tr: "You can't come today.", note: "nicht before the infinitive" },
        { tr: "Tomorrow we want to swim." },
        { tr: "He doesn't want to work today.", note: "er will: no ending" },
        { tr: "Today I have to study.", note: "ich muss: no ending" },
        { tr: "They have to do their homework.", note: "sie müssen: same form as the infinitive" }
      ]
    },
    vocab: [
      "can, to be able to (ability)",
      "to want",
      "must, to have to",
      "to study, to learn",
      "to cook",
      "to swim",
      "to sleep",
      "to dance",
      "the work",
      "the homework",
      "today",
      "tomorrow"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: ["Ich kann heute gehe.", "Ich kann heute gehen.", "Ich gehen kann heute."],
        why: "The modal is in second position, the infinitive at the end: <b>Ich kann heute gehen.</b>"
      },
      {
        q: "Complete: “Er ___ heute lernen.” (Today he has to study.)",
        opts: ["müsst", "muss", "müssen"],
        why: "With <i>er</i> the modal takes no ending: <b>er muss</b>."
      },
      {
        tr: "The full conjugation of können.",
        why: "<i>Ich kann</i> and <i>er kann</i> are the same. With <i>du</i> the form is <i>kannst</i>, with <i>ihr</i> <i>könnt</i>."
      },
      {
        tr: "The full conjugation of wollen.",
        why: "<i>Ich will</i> and <i>er will</i> are the same. With <i>du</i> the form is <i>willst</i>, with <i>ihr</i> <i>wollt</i>."
      },
      {
        tr: "The full conjugation of müssen.",
        why: "<i>Ich muss</i> and <i>er muss</i> are the same. With <i>du</i> the form is <i>musst</i>, with <i>ihr</i> <i>müsst</i>."
      },
      {
        q: "Complete: “Wir ___ morgen schwimmen.” (Tomorrow we want to swim.)",
        hint: "to want, first person plural",
        why: "With <b>wir</b> the modal has the same form as the infinitive: <b>wollen</b>."
      },
      {
        q: "Complete the two sentences.",
        tr: "I can't sleep. I have to work.",
        why: "<i>Ich kann nicht schlafen</i>: <i>können</i> for possibility. <i>Ich muss arbeiten</i>: <i>müssen</i> for obligation."
      },
      {
        tr: "I have to work, but I want to sleep.",
        why: "Two clauses, each with its own modal, joined by <i>aber</i> with a comma before it: <i>muss</i> for obligation, <i>will</i> for wanting."
      },
      {
        tr: "I can't come today, I have to work.",
        why: "<i>Kann</i> has a short <b>a</b>. In <i>kommen</i> the <b>o</b> is short. <i>Heute</i>: the <b>eu</b> is read like “oy” in “boy”."
      },
      {
        tr: "Today I have to study, but I want to swim.",
        why: "In <i>schwimmen</i> the <b>sch</b> is read like English “sh” and the <b>w</b> like an English “v”."
      }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Habits and frequency",
    title: "How often? immer, oft, manchmal, nie",
    objectives: [
      "say how often you do something with immer, oft, manchmal, selten, nie",
      "put the frequency adverb in the right place",
      "start a sentence with a time expression and invert verb and subject"
    ],
    theory: [
      {
        h: "Adverbs of frequency",
        p: "Five words are enough to describe habits: <em>immer</em> (always), <em>oft</em> (often), <em>manchmal</em> (sometimes), <em>selten</em> (rarely), <em>nie</em> (never). They usually come <strong>after the conjugated verb</strong>: <em>Ich trinke immer Kaffee</em>, <em>Ich lese oft die Zeitung</em>, <em>Ich esse selten Brot</em>. To say that something happens every morning or every evening there are <em>morgens</em> (in the mornings) and <em>abends</em> (in the evenings); <em>jeden Tag</em> means every day and does not name a part of the day."
      },
      {
        h: "If the sentence starts with the time, the subject follows the verb",
        p: "The conjugated verb is always in <strong>second position</strong>. If a time expression comes first, the subject moves after the verb (<strong>inversion</strong>): <em>Morgens trinke ich immer Kaffee</em>, <em>Abends sehe ich manchmal fern</em>, <em>Jeden Tag frühstücke ich um acht</em>. The meaning is the same as <em>Ich trinke morgens immer Kaffee</em>: only the element that opens the sentence changes."
      },
      {
        contrast: "In English the frequency adverb usually goes <em>before</em> the main verb (<em>I always drink coffee</em>); in German it goes after the conjugated verb (<em>Ich trinke immer Kaffee</em>). And English can say <em>In the morning I always drink coffee</em>, with the subject before the verb; German cannot: after <em>Morgens</em> the verb comes straight away, <em>Morgens trinke ich</em>, and “Morgens ich trinke” is an error. <em>Nie</em> already contains the negation, just like English “never”: <em>Ich trinke nie Bier</em>, “I never drink beer”, with no <em>nicht</em> (standard English does not say “I don't never drink” either). Finally, <em>morgens</em> typically marks a habit (“in the mornings”), while <em>am Morgen</em> can be a specific morning or a habitual one depending on context (<em>Ich dusche immer am Morgen</em>)."
      },
      {
        trap: "“I never drink beer” is <em>Ich trinke nie Bier</em>: <em>nie</em> already carries the negation, so no <em>nicht</em>. And don't put the adverb before the conjugated verb as in English: “Ich immer trinke Kaffee” is an error. After the subject comes the verb, then the adverb."
      },
      {
        tip: "Describe your day with one sentence per adverb: <em>Ich trinke immer Kaffee. Ich lese oft die Zeitung. Abends sehe ich manchmal fern. Ich esse selten Brot. Ich trinke nie Bier.</em> Then try putting <em>Morgens</em> or <em>Abends</em> first and check the verb."
      }
    ],
    grammar: {
      title: "Adverbs of frequency and inversion",
      note: "The adverb usually comes <b>after the conjugated verb</b>. If the sentence starts with a time expression, <b>the verb stays in second position</b> and the subject follows it.",
      table: {
        head: ["adverb", "meaning", "example"],
        rows: [
          ["immer", "always", "Ich trinke immer Kaffee."],
          ["oft", "often", "Ich lese oft die Zeitung."],
          ["manchmal", "sometimes", "Abends sehe ich manchmal fern."],
          ["selten", "rarely", "Ich esse selten Brot."],
          ["nie", "never", "Ich trinke nie Bier."]
        ]
      },
      examples: [
        { tr: "I always drink coffee." },
        { tr: "In the morning I always drink coffee.", note: "morgens first: trinke ich" },
        { tr: "I often read the newspaper." },
        { tr: "In the evening I sometimes watch TV.", note: "fernsehen: fern at the end" },
        { tr: "I rarely eat bread." },
        { tr: "I never drink beer.", note: "nie, without nicht" }
      ]
    },
    vocab: [
      "always",
      "often",
      "sometimes",
      "rarely",
      "never",
      "in the morning, every morning",
      "in the evening, every evening",
      "every day",
      "the bread",
      "the breakfast",
      "the newspaper",
      "the lunch"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: ["Morgens ich trinke Kaffee.", "Morgens trinke ich Kaffee.", "Ich morgens trinke Kaffee."],
        why: "After <i>morgens</i> the conjugated verb comes straight away (second position), then the subject: <b>Morgens trinke ich Kaffee.</b>"
      },
      {
        q: "What does “Ich trinke nie Kaffee” mean?",
        opts: ["I never drink coffee.", "I always drink coffee.", "I'm not drinking coffee today."],
        why: "<i>Nie</i> means “never” and already contains the negation: you don't need <i>nicht</i>."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Morgens trinke ich immer Kaffee.",
          "Manchmal ich lese die Zeitung.",
          "Ich lese oft die Zeitung.",
          "Ich nie trinke Kaffee.",
          "Jeden Tag frühstücke ich um acht."
        ],
        why: "Sentence 2 has the subject before the verb after <i>manchmal</i>; sentence 4 puts <i>nie</i> before the conjugated verb, which must come second."
      },
      {
        q: "Complete: “Abends ___ ich oft fern.” (In the evening I often watch TV.)",
        hint: "fernsehen, first person singular",
        why: "The verb <i>fernsehen</i> splits: <b>sehe</b> in second position, <i>fern</i> at the end."
      },
      {
        q: "Match each adverb with its meaning.",
        pairs: ["always", "often", "sometimes", "never"]
      },
      {
        tr: "In the evening I sometimes watch TV.",
        why: "With <i>Abends</i> first, the verb follows straight away: <i>sehe ich</i>, then the adverb, then <i>fern</i> at the end."
      },
      {
        q: "Fill in the two missing words.",
        tr: "In the morning I always drink coffee.",
        why: "With <i>morgens</i> first, the verb is in second position: <i>trinke ich</i>. The adverb <i>immer</i> follows the subject."
      },
      {
        tr: "In the evening I often watch TV.",
        why: "<i>Ich sehe abends oft fern</i> and <i>Oft sehe ich abends fern</i> are also correct: the adverb can move, the verb stays second."
      },
      {
        tr: "In the morning I always drink coffee, in the evening sometimes tea.",
        why: "In <i>Kaffee</i> the double <b>ff</b> shows that the <b>a</b> is short; <i>immer</i> has a short <b>i</b>. In <i>manchmal</i> the <b>ch</b> is the same sound as in <i>ich</i>."
      },
      {
        tr: "In the morning I always drink coffee and read the newspaper.",
        why: "<i>Zeitung</i>: the <b>z</b> is read “ts” and the <b>ei</b> like “eye”. <i>Lese</i> has a voiced <b>s</b>."
      }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Test",
    title: "Unit 5 test",
    objectives: ["check separable verbs, time and time prepositions, modals and adverbs of frequency"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it is better to go and review."
      }
    ],
    exercises: [
      {
        tr: "Present of aufstehen: ich, er/sie/es, wir.",
        why: "The prefix goes to the end: <i>stehe auf</i>, <i>steht auf</i>, <i>stehen auf</i>."
      },
      {
        tr: "Present of müssen: ich, du, er/sie/es, wir.",
        why: "<i>Muss</i>, <i>musst</i>, <i>muss</i>, <i>müssen</i>: the 1st and 3rd person singular are the same."
      },
      {
        q: "Complete: “Der Film beginnt ___ acht Uhr.” (at eight)",
        hint: "with an exact time",
        why: "With a time you use <b>um</b>."
      },
      {
        q: "Complete: “Ich kann nicht kommen, ich ___ arbeiten.” (I have to)",
        hint: "must, first person singular",
        why: "<i>Ich muss</i>, with no ending."
      },
      {
        q: "Complete: “Morgens ___ ich immer Kaffee.” (I drink)",
        hint: "trinken, first person singular",
        why: "After <i>morgens</i> the verb follows straight away: <b>trinke</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Ich aufstehe um sieben.", "Ich stehe um sieben auf.", "Ich auf stehe um sieben."],
        why: "The prefix <i>auf</i> goes to the end of the sentence: <b>Ich stehe um sieben auf.</b>"
      },
      {
        q: "“Es ist halb zehn.” What time is it?",
        opts: ["nine thirty", "ten thirty", "ten o'clock"],
        why: "<i>Halb zehn</i> is nine thirty, half an hour before ten."
      },
      {
        tr: "I can't come today.",
        why: "The modal is in second position, <i>nicht</i> and the infinitive at the end."
      },
      {
        tr: "I have to get up at seven thirty.",
        why: "In this sentence the modal is <i>muss</i> and the infinitive <i>aufstehen</i> goes at the end, whole. For “seven thirty” you say <i>halb acht</i>."
      },
      {
        tr: "In the evening I sometimes watch TV.",
        why: "After <i>Abends</i> the verb comes straight away; <i>fern</i> closes the sentence."
      }
    ]
  }
});
