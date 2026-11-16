/* ============================================================
   Learner-language text (en) for data/core/a1-02.js, unit a1-u04.
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
  }
});
