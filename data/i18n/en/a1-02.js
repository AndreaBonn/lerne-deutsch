/* ============================================================
   Learner-language text (en) for data/core/a1-02.js, units a1-u04 to a1-u07.
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
  },
  "unit:a1-u06": {
    title: "In town",
    grammarNote: "mit, zu, bei, aus, von · dative · wo? with in, an, neben · polite imperative · es gibt"
  },
  "lesson:a1-u06-l1": {
    theme: "Means of transport",
    title: "Transport and destinations: mit dem Bus, zum Bahnhof",
    objectives: [
      "say how you travel with mit + dative",
      "say where you are going with zu + dative: zum Bahnhof, zur Schule",
      "use the article in the dative: dem, der, dem, den"
    ],
    theory: [
      {
        h: "Mit and zu take the dative",
        p: "The prepositions <strong>mit</strong> (with, by means of transport) and <strong>zu</strong> (towards a place or a person) take the <strong>dative</strong>. The article changes for every gender: masculine and neuter <strong>dem</strong>, feminine <strong>der</strong>, plural <strong>den</strong>. Examples: <em>Ich fahre mit dem Bus</em> (masculine), <em>mit der Straßenbahn</em> (feminine), <em>mit dem Auto</em> (neuter). In the plural the noun usually takes an extra <strong>-n</strong>: <em>mit den Bussen</em>, <em>mit den Zügen</em>, <em>mit den Fahrrädern</em>. It does not take it if the plural already ends in <strong>-n</strong> or <strong>-s</strong>: <em>mit den Autos</em>, <em>mit den Straßenbahnen</em>."
      },
      {
        h: "zu dem becomes zum, zu der becomes zur",
        p: "With <em>zu</em> the article merges: <strong>zu dem → zum</strong>, <strong>zu der → zur</strong>. You say <em>Ich gehe zum Bahnhof</em> and <em>Sie geht zur Schule</em>. To say you walk there is a fixed phrase, <strong>zu Fuß</strong>: <em>Wir gehen zu Fuß zur Haltestelle</em>."
      },
      {
        contrast: "English names the vehicle with <em>by</em> and no article (<em>by bus</em>, <em>by train</em>, <em>by car</em>, <em>by bike</em>) and the destination with <em>to</em> (<em>to the station</em>, <em>to school</em>). German says <strong>mit</strong> plus the dative article (<em>mit dem Bus</em>, <em>mit dem Zug</em>), so the article is there where English has none. Do not carry over “with the bus” as a literal idea of company: <em>mit</em> here just means “by means of”. And the destination takes <strong>zu</strong> in these examples (other places may need <em>nach</em> or <em>in</em>, as you will see). The dative is the new part: English <em>the</em> never changes, but German <em>der Bus</em> becomes <em>dem Bus</em> after <em>mit</em>. <em>Im Bus fahren</em> exists, but it stresses that you are on board. Gender also has to be learned noun by noun, because English does not mark it: <em>der Bahnhof</em> (masculine), <em>die Straßenbahn</em> (feminine), <em>das Auto</em> and <em>das Fahrrad</em> (neuter)."
      },
      {
        trap: "The usual way to say “go by bus” is <em>mit dem Bus fahren</em>; <em>im Bus fahren</em> puts the focus on being on board. Do not use the nominative form: “mit der Bus” and “mit die Straßenbahn” are wrong. After <em>mit</em> and <em>zu</em> the article is in the dative: <em>mit dem Bus</em>, <em>mit der Straßenbahn</em>, <em>zum Bahnhof</em>, <em>zur Schule</em>."
      },
      {
        tip: "Learn each means of transport as a full phrase: <em>mit dem Bus</em>, <em>mit der U-Bahn</em>, <em>mit dem Zug</em>, <em>mit dem Fahrrad</em>. That way the right article arrives together with the noun."
      }
    ],
    grammar: {
      title: "mit and zu with the dative",
      note: "After <b>mit</b> and <b>zu</b> the article is in the dative: <b>dem</b> (m. and n.), <b>der</b> (f.), <b>den</b> + -n (plural). <b>zu dem → zum</b>, <b>zu der → zur</b>.",
      table: {
        head: ["gender", "mit + dative", "zu + dative"],
        rows: [
          ["masculine", "mit dem Bus", "zum Bahnhof"],
          ["feminine", "mit der Straßenbahn", "zur Schule"],
          ["neuter", "mit dem Auto", "zum Kino"],
          ["plural", "mit den Bussen", "zu den Haltestellen"]
        ]
      },
      examples: [
        { tr: "I go by bus.", note: "mit dem Bus: masculine" },
        { tr: "You go by tram.", note: "mit der Straßenbahn: feminine; fährst, with the vowel change" },
        { tr: "We go by car.", note: "mit dem Auto: neuter" },
        { tr: "I am going to the station.", note: "zum = zu dem" },
        { tr: "She goes to school.", note: "zur = zu der" },
        { tr: "We walk to the stop.", note: "zu Fuß: fixed phrase" }
      ]
    },
    vocab: [
      "with, by means of",
      "to, towards (a place or a person)",
      "on foot",
      "the bus",
      "the tram",
      "the subway, the underground",
      "the train",
      "the car",
      "the bicycle",
      "the station",
      "the stop",
      "the school"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: ["Ich fahre mit der Bus.", "Ich fahre mit dem Bus.", "Ich fahre mit den Bus."],
        why: "<i>Der Bus</i> is masculine: after <i>mit</i> the article is <b>dem</b>."
      },
      {
        q: "Complete: «Wir fahren mit ___ Auto.»",
        hint: "das Auto, definite article in the dative",
        why: "<i>Das Auto</i> is neuter: after <i>mit</i> you say <b>dem</b>."
      },
      {
        q: "Complete: «Ich fahre mit ___ U-Bahn.»",
        hint: "die U-Bahn, definite article in the dative",
        why: "<i>Die U-Bahn</i> is feminine: in the dative it is <b>der</b>."
      },
      {
        q: "Complete: «Ich gehe ___ Bahnhof.»",
        hint: "zu + dem, in the contracted form",
        why: "<i>Zu dem</i> merges into <b>zum</b>. <i>Zu dem Bahnhof</i> is also correct, but <i>zum</i> is what people almost always say."
      },
      {
        q: "Choose the right article for each noun.",
        why: "<i>Bahnhof</i> and <i>Zug</i> are masculine, <i>Haltestelle</i> and <i>Schule</i> feminine, <i>Auto</i> and <i>Fahrrad</i> neuter. English has no grammatical gender, so learn the article together with each noun.",
        items: ["station", "stop", "car", "train", "school", "bicycle"]
      },
      {
        tr: "We go by train.",
        why: "Both positions are correct: <i>Wir fahren mit dem Zug</i> and, with inversion, <i>Mit dem Zug fahren wir</i>. The verb stays in second position."
      },
      {
        q: "Complete the two missing words.",
        tr: "He goes to school by bus.",
        why: "The vehicle takes <i>mit</i> + dative (<i>dem Bus</i>), the destination <i>zu</i> + dative (<i>zu der → zur Schule</i>)."
      },
      {
        tr: "I go to the station by bus.",
        why: "The other positions are correct too: <i>Ich fahre zum Bahnhof mit dem Bus</i>, <i>Mit dem Bus fahre ich zum Bahnhof</i> and <i>Zum Bahnhof fahre ich mit dem Bus</i>. With a vehicle you use <i>fahren</i>, not <i>gehen</i>."
      },
      {
        tr: "I go to school by bus.",
        why: "<i>Schule</i>: <b>sch</b> sounds like English “sh” (/ʃ/) and the <b>u</b> is long, like the vowel in “food”. In <i>fahre</i> the <b>h</b> is silent and lengthens the <b>a</b>."
      },
      {
        tr: "We go to the station by tram.",
        why: "<i>Straßenbahn</i>: <b>ß</b> is a voiceless “s” as in “miss”, and the initial <b>str</b> sounds like “shtr”. In <i>Bahnhof</i> the <b>h</b> after the <b>a</b> lengthens the vowel; the <b>h</b> of <i>hof</i> is lightly aspirated."
      }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "Getting around and origin",
    title: "gehen, fahren, kommen: aus, von, bei",
    objectives: [
      "tell gehen (on foot) from fahren (with a vehicle)",
      "say where you come from with aus and von, and where you are with bei",
      "say which city you are going to with nach"
    ],
    theory: [
      {
        h: "Gehen, fahren, kommen",
        p: "<strong>Gehen</strong> usually means moving on foot, <strong>fahren</strong> moving with a vehicle (bus, train, bike, car). With <em>fahren</em> the vowel changes in the 2nd and 3rd person singular: <em>ich fahre</em>, <em>du f<strong>ä</strong>hrst</em>, <em>er f<strong>ä</strong>hrt</em>. <em>Gehen</em> and <em>kommen</em> are regular: <em>ich gehe</em>, <em>du gehst</em>, <em>wir kommen</em>. The separable verbs <em>einsteigen</em> and <em>aussteigen</em> put the prefix at the end: <em>Ich steige am Bahnhof aus.</em>"
      },
      {
        h: "Aus, von and bei: from where?",
        p: "<strong>Aus</strong> marks origin from a place or a country (<em>Ich komme aus Italien</em>, <em>Sie kommt aus dem Supermarkt</em>). <strong>Von</strong> marks the starting point (<em>Er kommt vom Bahnhof</em>, <em>vom Arzt</em>). <strong>Bei</strong> says where you are, at a place or at someone's (<em>Anna ist beim Arzt</em>). <em>von dem → vom</em> and <em>bei dem → beim</em> merge as well."
      },
      {
        h: "Nach for cities, in for where you live",
        p: "To say where you are going, with the name of a city or country <strong>without an article</strong> you use <strong>nach</strong>: <em>Ich fahre nach Berlin</em>, <em>Wir fahren nach Italien</em>. To say where you live or are, you use <strong>in</strong>: <em>Ich wohne in Berlin</em>. Countries that take an article, like <em>die Schweiz</em>, come later."
      },
      {
        contrast: "English <em>from</em> splits into several German words: <em>aus</em> (<em>I come from Rome</em>: <em>Ich komme aus Rom</em>) and <em>von</em> (<em>I come from the station</em>: <em>Ich komme vom Bahnhof</em>). English <em>to</em> and <em>at</em> also divide: <em>to the doctor's</em> is <em>zum Arzt</em> and <em>at the doctor's</em> is <em>beim Arzt</em>. English <em>go</em> covers both <em>gehen</em> and <em>fahren</em>, so in German the vehicle matters: <em>I go by train</em> is <em>Ich fahre mit dem Zug</em>. And “I have lived here for a year” uses the present perfect in English, but German uses the present with <em>seit</em>: <em>Ich wohne seit einem Jahr hier</em>."
      },
      {
        trap: "For “I come from Italy” you do not say “Ich komme von Italien”: for origin from a country or a city you use <strong>aus</strong>. And “Ich gehe mit dem Zug” is wrong: with a vehicle you use <em>fahren</em>, so <em>Ich fahre mit dem Zug</em>."
      }
    ],
    grammar: {
      title: "aus, von, bei, zu: origin and place",
      note: "<b>aus</b> = origin from a place or a country, <b>von</b> = starting point, <b>bei</b> = at, <b>zu</b> = towards. All take the dative.",
      table: {
        head: ["preposition", "meaning", "example"],
        rows: [
          ["aus", "from (origin)", "Ich komme aus Italien."],
          ["von", "from (starting point)", "Er kommt vom Bahnhof."],
          ["bei", "at (someone's place)", "Anna ist beim Arzt."],
          ["zu", "towards", "Wir gehen zum Arzt."]
        ]
      },
      examples: [
        { tr: "I come from Italy.", note: "aus + country without an article" },
        { tr: "I come from the supermarket.", note: "aus dem: out of the supermarket" },
        { tr: "He comes from the station.", note: "vom = von dem" },
        { tr: "We are going to the doctor's.", note: "zum = zu dem" },
        { tr: "You go to the park.", note: "fährst: vowel change" },
        { tr: "Anna is at the doctor's.", note: "beim = bei dem" }
      ]
    },
    vocab: [
      "to go (on foot)",
      "to go (by vehicle), to drive",
      "to come",
      "from (origin), out of",
      "from (starting point), of",
      "at (someone's place)",
      "to get on (a vehicle)",
      "to get off (a vehicle)",
      "the doctor",
      "the park",
      "the supermarket",
      "the city"
    ],
    exercises: [
      {
        tr: "Present tense of gehen: ich, er/sie/es, wir.",
        why: "<i>Gehen</i> is regular: <i>gehe</i>, <i>geht</i>, <i>gehen</i>."
      },
      {
        tr: "Present tense of fahren: ich, du, er/sie/es, wir.",
        why: "In the 2nd and 3rd person singular the <b>a</b> becomes <b>ä</b>: <i>fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i>."
      },
      {
        q: "Complete: «Ich ___ aus Italien.»",
        hint: "kommen, first person singular",
        why: "<i>Ich komme</i>: the ending of the 1st person is <b>-e</b>."
      },
      {
        q: "Complete: «Er ___ mit dem Zug.»",
        hint: "fahren, third person singular",
        why: "With <i>er</i> the verb changes its vowel: <b>fährt</b>."
      },
      {
        q: "Complete: «Wir kommen ___ der Stadt.»",
        hint: "out of a place, origin",
        why: "For origin from a place you use <b>aus</b>: <i>aus der Stadt</i>."
      },
      {
        q: "How do you say “I come from the doctor's”?",
        opts: ["Ich komme aus dem Arzt.", "Ich komme vom Arzt.", "Ich komme zum Arzt."],
        why: "For the starting point you use <b>von</b> (<i>von dem → vom</i>). <i>Aus</i> goes with a place, not with a person, and <i>zum</i> marks the direction towards, not where you come from."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Ich fahre mit dem Zug.",
          "Ich gehe mit dem Zug.",
          "Wir gehen zu Fuß zum Park.",
          "Du kommst aus Italien.",
          "Er fahrt zum Bahnhof."
        ],
        why: "Sentence 2 is wrong because with a vehicle you use <i>fahren</i>; sentence 5 has the wrong form of <i>fahren</i>: <i>fährt</i>."
      },
      {
        tr: "He comes from the station.",
        why: "The inversion <i>Vom Bahnhof kommt er</i> is also correct. The verb stays in second position."
      },
      {
        tr: "I come from Italy and I go to Berlin by train.",
        why: "<i>Italien</i>: the stress falls on the second syllable and the <b>a</b> is long; <i>Berlin</i> can be said with a uvular or a tapped <b>r</b>, both are standard. <i>Zug</i> starts with <b>z</b> “ts”."
      },
      {
        tr: "We walk to the park.",
        why: "<i>Fuß</i>: <b>ß</b> is a voiceless “s” as in “miss” and the <b>u</b> is long. In <i>Park</i> the final <b>k</b> is crisp."
      }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "Asking the way",
    title: "Wo ist der Bahnhof? Gehen Sie geradeaus",
    objectives: [
      "ask where a place is with Entschuldigung, wo ist ...?",
      "give directions with the polite imperative (Gehen Sie ..., Biegen Sie ... ab)",
      "say where something is with neben, hinter, vor + dative"
    ],
    theory: [
      {
        h: "The polite imperative: infinitive + Sie",
        p: "With <strong>Sie</strong> the imperative has the form <strong>infinitive + Sie</strong>, with the verb in <strong>first position</strong>: <em>Gehen Sie geradeaus!</em>, <em>Nehmen Sie die erste Straße rechts!</em> Separable verbs send the prefix to the end: <em>Biegen Sie links <strong>ab</strong>.</em> <em>Sein</em> is the exception: <strong>Seien Sie</strong> (<em>Seien Sie bitte pünktlich!</em>)."
      },
      {
        h: "Where is it? wo? with the dative",
        p: "To ask where a place is: <em>Entschuldigung, wo ist der Bahnhof?</em> To answer you need prepositions of place. With <strong>wo?</strong>, in, an, auf, vor, hinter, neben take the <strong>dative</strong>: <em>Der Bahnhof ist neben dem Rathaus</em>, <em>Die Apotheke ist hinter der Kreuzung</em>, <em>Der Bus hält vor dem Rathaus</em>, <em>Wir sind am Bahnhof</em> (<em>an dem → am</em>) and <em>Das Café ist in der Stadt</em>."
      },
      {
        contrast: "In English a polite request to a stranger is usually a question or a softened command (<em>Could you go straight ahead?</em>), and the plain imperative is just the bare verb (<em>Go straight</em>, <em>Turn left</em>), the same for one person or many. German adds <em>Sie</em> after the verb for the polite form, and the verb comes first, which looks just like a yes/no question. <em>Excuse me</em> is <em>Entschuldigung</em> (or <em>Entschuldigen Sie</em>), <em>straight ahead</em> is <em>geradeaus</em>, <em>to the right</em> is <em>rechts</em> and <em>to the left</em> is <em>links</em>, with no preposition. The prepositions of place also behave differently: English <em>next to the town hall</em> never changes the noun, while German <em>neben dem Rathaus</em> puts the article in the dative. Gender is new information for each noun: <em>das Rathaus</em> (neuter), <em>die Apotheke</em> and <em>die Kreuzung</em> (feminine)."
      },
      {
        trap: "The imperative with <em>Sie</em> has the same shape as a yes/no question: <em>Gehen Sie geradeaus!</em> or <em>Gehen Sie geradeaus?</em> Context, intonation and punctuation tell them apart. It is not <em>Sie gehen geradeaus</em> (subject before the verb), which is a statement. And after <em>neben</em>, <em>hinter</em> and <em>vor</em> with <em>wo?</em> you do not use the accusative: “neben den Bahnhof” is wrong, you say <em>neben dem Bahnhof</em>."
      },
      {
        tip: "To remember the three sentences you need on the street: <em>Entschuldigung, wo ist ...?</em>, <em>Gehen Sie geradeaus</em>, <em>Biegen Sie links / rechts ab</em>. With these three you can find your way in any German-speaking city."
      }
    ],
    grammar: {
      title: "Polite imperative and wo? with the dative",
      note: "<b>Imperative with Sie:</b> infinitive + <b>Sie</b>, verb in first position. <b>Wo?</b> with in, an, vor, hinter, neben: dative.",
      table: {
        head: ["infinitive", "imperative", "meaning"],
        rows: [
          ["gehen", "Gehen Sie geradeaus.", "go straight ahead"],
          ["abbiegen", "Biegen Sie links ab.", "turn left"],
          ["nehmen", "Nehmen Sie die erste Straße rechts.", "take the first street on the right"],
          ["sein", "Seien Sie bitte pünktlich.", "please be on time"]
        ]
      },
      examples: [
        { tr: "Go straight ahead.", note: "Gehen Sie: verb, then Sie" },
        { tr: "Turn left.", note: "abbiegen: ab at the end" },
        { tr: "Take the first street on the right.", note: "nehmen: the first street, die erste Straße" },
        { tr: "Excuse me, where is the station?" },
        { tr: "The station is next to the town hall.", note: "neben dem: dative neuter" },
        { tr: "The pharmacy is behind the intersection.", note: "hinter der: dative feminine" }
      ]
    },
    vocab: [
      "straight ahead",
      "to the left",
      "to the right",
      "to turn",
      "excuse me",
      "next to",
      "behind",
      "in front of",
      "the street",
      "the intersection",
      "the town hall",
      "the pharmacy"
    ],
    exercises: [
      {
        q: "How do you politely tell someone to turn left?",
        opts: ["Sie biegen links ab.", "Biegen Sie links ab.", "Biegen links Sie ab."],
        why: "Verb in first position, then <i>Sie</i>, and the prefix <b>ab</b> at the end: <b>Biegen Sie links ab.</b> The first option is a statement."
      },
      {
        q: "How do you ask where the station is?",
        opts: ["Wo ist der Bahnhof?", "Wo der Bahnhof ist?", "Wo ist den Bahnhof?"],
        why: "In a question with <i>wo</i> the verb is in second position: <b>Wo ist der Bahnhof?</b> With <i>sein</i> the noun stays in the nominative."
      },
      {
        q: "Complete: «___ Sie geradeaus.» (Go)",
        hint: "gehen, polite imperative, with a capital initial",
        why: "The polite imperative starts with the infinitive: <b>Gehen</b> Sie geradeaus."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["straight ahead", "to the left", "to the right", "behind"]
      },
      {
        q: "Complete the two missing words.",
        tr: "The pharmacy is behind the town hall and the station is next to the pharmacy.",
        why: "<i>Hinter dem Rathaus</i> (dative neuter) and <i>neben der Apotheke</i> (dative feminine): with <i>wo?</i> these prepositions take the dative."
      },
      {
        tr: "Go straight ahead and turn left.",
        why: "The two imperatives each have their own <i>Sie</i>. The prefix <i>ab</i> of <i>abbiegen</i> closes the sentence."
      },
      {
        q: "Someone asks you for directions. Answer their questions.",
        setting: "Downtown, you are helping someone find the station and the pharmacy.",
        lines: [
          { tr: "Excuse me, where is the station?" },
          { tr: "Give directions: straight ahead, then left.", answerTr: "Go straight ahead and then left." },
          { tr: "Thanks! And where is the pharmacy?" },
          { tr: "Answer that the pharmacy is next to the town hall.", answerTr: "It is next to the town hall." }
        ]
      },
      {
        tr: "Excuse me, where is the pharmacy?",
        why: "Both <i>Entschuldigung</i> and <i>Entschuldigen Sie</i> (more formal) are correct. The question has the verb in second position: <i>wo ist</i>."
      },
      {
        tr: "Go straight ahead and turn right.",
        why: "In <i>geradeaus</i> the <b>g</b> is hard and <b>au</b> is a diphthong /aʊ̯/, like “ow” in “cow”. In <i>biegen</i> the <b>ie</b> is a long “ee”."
      },
      {
        tr: "Excuse me, where is the pharmacy?",
        why: "<i>Entschuldigung</i>: <b>sch</b> sounds like English “sh” (/ʃ/). In <i>Apotheke</i> the <b>th</b> is just a plain “t”."
      }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "The neighborhood",
    title: "Es gibt, es gibt keinen",
    objectives: [
      "say what there is in town with es gibt + accusative",
      "say that something is missing with es gibt keinen / keine / kein",
      "ask Gibt es hier ...?"
    ],
    theory: [
      {
        h: "Es gibt: “there is” and “there are”",
        p: "To say that something exists you use <strong>es gibt</strong>. The form is <strong>always the same</strong>, in the singular and in the plural: <em>Es gibt einen Park</em>, <em>Es gibt zwei Kinos</em>. After <em>es gibt</em> the noun is in the <strong>accusative</strong>, so only the masculine changes: <em>einen Park</em> (m.), <em>eine Bäckerei</em> (f.), <em>ein Café</em> (n.). To ask: <em>Gibt es hier ein Hotel?</em>"
      },
      {
        h: "Saying that something is not there",
        p: "To negate you use <strong>kein</strong>, which follows the same pattern as <em>ein</em>: <em>Es gibt keinen Supermarkt</em> (m.), <em>keine Bank</em> (f.), <em>kein Museum</em> (n.). In the examples covered here, the negation with <em>es gibt</em> is <em>kein</em>, not <em>nicht</em> (<em>nicht</em> appears in other uses, such as <em>Das gibt es nicht</em>)."
      },
      {
        contrast: "English “there is” and “there are” change with the number (<em>there is a park</em>, <em>there are two cinemas</em>). German <em>es gibt</em> never changes: <em>Es gibt einen Park</em>, <em>Es gibt zwei Kinos</em>. English also says “is there a hotel here?” by moving the verb, and German does the same with <em>Gibt es hier ein Hotel?</em>. Where English says “there is no supermarket” or “there isn't a bank”, German uses <em>kein</em> (<em>keinen Supermarkt</em>, <em>keine Bank</em>), which is the one that has to agree with the noun. Gender has to be learned noun by noun, since English does not mark it: <em>das Café</em> and <em>das Kino</em> are neuter, <em>die Bäckerei</em> and <em>die Kirche</em> are feminine, <em>der Park</em> is masculine."
      },
      {
        trap: "<em>Es gibt</em> usually introduces something new: <em>Es gibt ein Café neben dem Rathaus</em>. To say where something already known is, use <em>sein</em> instead: <em>Wo ist das Café? Es ist neben dem Rathaus.</em> Do not say “Es gibt ein Bäckerei”: <em>Bäckerei</em> is feminine, so <em>eine Bäckerei</em>. And do not say “Es gibt ein Park”: the masculine in the accusative takes <em>einen</em>."
      },
      {
        tip: "To find out what is in a new neighborhood, ask: <em>Gibt es hier ein Café / einen Supermarkt / eine Bank in der Nähe?</em> Remember <em>-en</em> only for the masculine."
      }
    ],
    grammar: {
      title: "es gibt with the accusative",
      note: "<b>Es gibt</b> + accusative: <b>einen</b> (m.), <b>eine</b> (f.), <b>ein</b> (n.). The negation is <b>keinen</b>, <b>keine</b>, <b>kein</b>. The form <i>es gibt</i> does not change in the plural.",
      table: {
        head: ["gender", "positive", "negative"],
        rows: [
          ["masculine", "Es gibt einen Park.", "Es gibt keinen Supermarkt."],
          ["feminine", "Es gibt eine Bäckerei.", "Es gibt keine Bank."],
          ["neuter", "Es gibt ein Café.", "Es gibt kein Museum."]
        ]
      },
      examples: [
        { tr: "There is a park nearby.", note: "einen: masculine accusative" },
        { tr: "There is a bakery here.", note: "eine: feminine" },
        { tr: "There is a café next to the town hall.", note: "ein: neuter" },
        { tr: "Is there a hotel here?", note: "question: verb in first position" },
        { tr: "There is no supermarket here.", note: "keinen: negation of the masculine" },
        { tr: "There is no bank nearby.", note: "keine: negation of the feminine" }
      ]
    },
    vocab: [
      "there is, there are",
      "here",
      "nearby, close by",
      "the café",
      "the cinema",
      "the bakery",
      "the restaurant",
      "the bank",
      "the museum",
      "the hotel",
      "the library",
      "the church"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: ["Es gibt ein Park hier.", "Es gibt einen Park hier.", "Es gibt eine Park hier."],
        why: "<i>Der Park</i> is masculine and after <i>es gibt</i> you need the accusative: <b>einen Park</b>."
      },
      {
        q: "Complete: «Es gibt ___ Supermarkt in der Nähe.»",
        hint: "der Supermarkt, indefinite article in the accusative",
        why: "<i>Der Supermarkt</i> is masculine, accusative: <b>einen</b>."
      },
      {
        q: "Complete: «Es gibt ___ Bank hier.» (no)",
        hint: "die Bank, negation",
        why: "<i>Die Bank</i> is feminine: the negation is <b>keine</b>."
      },
      {
        q: "Complete: «___ es hier ein Café?»",
        hint: "question: is there ...?",
        why: "In a yes/no question the verb comes first: <b>Gibt</b> es hier ein Café?"
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["the café", "the bakery", "the cinema", "the church"]
      },
      {
        tr: "There is no supermarket here.",
        why: "<i>Es gibt keinen Supermarkt hier</i> and, with inversion, <i>Hier gibt es keinen Supermarkt</i> are also correct. The verb <i>gibt</i> stays in second position."
      },
      {
        q: "Complete the two missing words.",
        tr: "There is a bakery and a park here.",
        why: "<i>Bäckerei</i> is feminine (<b>eine</b>), <i>Park</i> masculine (<b>einen</b>): only the masculine changes in the accusative."
      },
      {
        q: "Translate: «There is a cinema in town, but there is no museum.»",
        why: "After <i>es gibt</i>: <i>ein Kino</i> is neuter (<i>ein</i>), and the negation of <i>Museum</i> (neuter) is <i>kein</i>. The other positions with the same structure are correct too."
      },
      {
        tr: "There is a bakery and a park nearby.",
        why: "<i>Bäckerei</i>: the <b>ä</b> sounds like the “e” in “bed” and <b>ck</b> like “k”. In <i>Nähe</i> the <b>h</b> is silent and lengthens the vowel; the <b>ä</b> is long."
      },
      {
        tr: "Is there a hotel here?",
        why: "<i>Hotel</i> is stressed on the second syllable: /hoˈtɛl/. In <i>gibt</i> the <b>g</b> is hard."
      }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Check",
    title: "Unit 6 check",
    objectives: ["check means of transport, the dative, directions, wo? and es gibt"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        tr: "Present tense of fahren: ich, du, er/sie/es, wir.",
        why: "<i>Fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i>: the <b>a</b> becomes <b>ä</b> in the 2nd and 3rd person singular."
      },
      {
        q: "Complete: «Ich fahre mit ___ Bus.»",
        hint: "der Bus, definite article in the dative",
        why: "<i>Der Bus</i> is masculine: after <i>mit</i> you say <b>dem</b>."
      },
      {
        q: "Complete: «Wir gehen ___ Schule.»",
        hint: "zu + der, in the contracted form",
        why: "<i>Zu der</i> merges into <b>zur</b>."
      },
      {
        q: "Complete: «Ich komme ___ Italien.»",
        hint: "origin from a country",
        why: "For origin from a country you use <b>aus</b>."
      },
      {
        q: "Complete: «Die Apotheke ist ___ dem Rathaus.» (next to)",
        hint: "next to",
        why: "<b>Neben</b> + dative: <i>neben dem Rathaus</i>."
      },
      {
        q: "Complete: «___ Sie die erste Straße links.» (Take)",
        hint: "nehmen, polite imperative, with a capital initial",
        why: "The polite imperative starts with the infinitive: <b>Nehmen</b> Sie die erste Straße links."
      },
      {
        q: "Choose the right article for each noun.",
        why: "<i>Rathaus</i> is neuter, <i>Kreuzung</i> and <i>Apotheke</i> are feminine, <i>Bahnhof</i> is masculine.",
        items: ["town hall", "intersection", "station", "pharmacy"]
      },
      {
        q: "How do you say “There is no supermarket”?",
        opts: ["Es gibt kein Supermarkt.", "Es gibt keinen Supermarkt.", "Es gibt nicht Supermarkt."],
        why: "<i>Der Supermarkt</i> is masculine in the accusative: <b>keinen</b>."
      },
      {
        tr: "Excuse me, where is the station?",
        why: "<i>Entschuldigung</i>: <b>sch</b> sounds like English “sh” (/ʃ/); in <i>Bahnhof</i> the <b>h</b> after the <b>a</b> lengthens the vowel."
      },
      {
        tr: "Go straight ahead and then left.",
        why: "<i>Geradeaus</i>: the <b>g</b> is hard and <b>au</b> is a diphthong /aʊ̯/, like “ow” in “cow”. In <i>links</i> the <b>i</b> is short."
      }
    ]
  },
  "unit:a1-u07": {
    title: "At the restaurant",
    grammarNote: "accusative with haben and brauchen · möchte and hätte gern · einer, eins, welche · the check"
  },
  "lesson:a1-u07-l1": {
    theme: "Booking a table",
    title: "A table for two: Ein Tisch für zwei",
    objectives: [
      "ask for a table with Haben Sie einen Tisch für zwei?",
      "use the accusative with haben, brauchen and reservieren: einen Tisch, eine Speisekarte",
      "say where to sit (drinnen, draußen) and whether a seat is free (frei)"
    ],
    theory: [
      {
        h: "Haben, brauchen, reservieren: the accusative",
        p: "After <strong>haben</strong>, <strong>brauchen</strong>, <strong>suchen</strong> and <strong>reservieren</strong>, the thing you ask for is the direct object, so it takes the <strong>accusative</strong> (you met it in unit 3). Only the masculine changes: <strong>der → den</strong>, <strong>ein → einen</strong>. Feminine, neuter and plural look the same as in the nominative: <em>Wir brauchen einen Tisch</em> (<em>der Tisch</em>), <em>Wir brauchen eine Speisekarte</em> (<em>die Speisekarte</em>), <em>Wir brauchen ein Messer</em> (<em>das Messer</em>). The subject stays in the nominative: <em>Der Tisch ist frei.</em> (<em>der Tisch</em> is the subject here)."
      },
      {
        h: "The verb stays in second place, and comes first in questions",
        p: "As always, the conjugated verb takes <strong>second place</strong> in a statement: <em>Heute Abend reserviere ich einen Tisch.</em> (if you start with <em>Heute Abend</em>, the subject moves after the verb). In yes/no questions the verb comes first: <em>Haben Sie einen Tisch für zwei?</em> There is no “do” here: German does not use a helper verb, it simply puts <em>haben</em> first. With restaurant staff you use <strong>Sie</strong>, a single polite form that covers both one person and several."
      },
      {
        contrast: "English “a table” and “the table” never change, whatever job the noun does. In German the masculine changes when it is the direct object (<em>Der Tisch ist frei</em>, but <em>Wir brauchen einen Tisch</em>), the same way English <em>he</em> becomes <em>him</em>, only here it happens to articles and not just to pronouns. English nouns have no gender, so <em>der Tisch</em>, <em>die Speisekarte</em> and <em>das Messer</em> have to be learned together with their article. Watch the word <em>Menü</em>: <em>das Menü</em> usually means a fixed-price meal with several courses, while the list of dishes, what you would call the menu, is <em>die Speisekarte</em>. Finally, <em>der Kellner</em> is a waiter and <em>die Kellnerin</em> a waitress: German adds <em>-in</em> to make the feminine."
      },
      {
        trap: "After <em>haben</em> and <em>brauchen</em> don't leave the masculine in the nominative: “Haben Sie ein Tisch?” is wrong, you say <em>Haben Sie einen Tisch?</em>. And don't spread the change to nouns that aren't masculine: with <em>die Speisekarte</em> the article stays, so <em>eine Speisekarte</em>, not “einen Speisekarte”. Also, <em>für zwei</em> is enough for “for two”, with no extra noun."
      },
      {
        tip: "Learn the whole sentence: <em>Haben Sie einen Tisch für zwei?</em>. Swap the number (<em>für drei</em>, <em>für vier</em>) and the place (<em>drinnen</em>, <em>draußen</em>) and you have almost everything you need to be welcomed in a restaurant."
      }
    ],
    grammar: {
      title: "The accusative with haben, brauchen and reservieren",
      note: "Only the masculine changes in the accusative: <b>der → den</b>, <b>ein → einen</b>. Feminine, neuter and plural stay the same. The verb is in second place; in yes/no questions it is first.",
      table: {
        head: ["gender", "nominative", "accusative"],
        rows: [
          ["masculine", "der Tisch / ein Tisch", "den Tisch / einen Tisch"],
          ["feminine", "die Speisekarte / eine Speisekarte", "die Speisekarte / eine Speisekarte"],
          ["neuter", "das Restaurant / ein Restaurant", "das Restaurant / ein Restaurant"],
          ["plural", "die Tische", "die Tische"]
        ]
      },
      examples: [
        { tr: "Do you have a table for two?", note: "Haben Sie: a question, verb in first position; einen: masculine accusative" },
        { tr: "We need a table for four people.", note: "brauchen + accusative" },
        { tr: "We need a menu.", note: "feminine: eine does not change" },
        { tr: "Tonight I'm booking a table.", note: "Heute Abend opens the sentence: the verb stays second" },
        { tr: "The table is free.", note: "the subject is in the nominative: der Tisch ist frei" },
        { tr: "Do you have a free table outside?", note: "draußen: outdoors; frei at the end" }
      ]
    },
    vocab: [
      "the table",
      "the chair",
      "the seat, the place",
      "the restaurant",
      "the person",
      "the waitress",
      "the reservation",
      "to reserve, to book",
      "to need",
      "outside, outdoors",
      "inside, indoors",
      "free, available"
    ],
    dialogue: [
      "Good evening. Do you have a table for two?",
      "Yes, gladly. Inside or outside?",
      "Outside, please.",
      "Here is a table. Here is the menu.",
      "Thank you very much!"
    ],
    exercises: [
      {
        q: "You want to ask whether a table is free. Which sentence is correct?",
        opts: ["Haben Sie ein Tisch frei?", "Haben Sie einen Tisch frei?", "Haben Sie eine Tisch frei?"],
        why: "<i>Der Tisch</i> is masculine and, after <i>haben</i>, a direct object: <b>einen Tisch</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Wir brauchen eine Speisekarte.", "Wir brauchen einen Speisekarte.", "Wir brauchen ein Speisekarte."],
        why: "<i>Die Speisekarte</i> is feminine: in the accusative the article does not change, so <b>eine</b>."
      },
      {
        q: "Complete with the indefinite article: “Ich brauche ___ Tisch für zwei.” (I need a table for two.)",
        hint: "ein-, masculine, accusative",
        why: "<i>Tisch</i> is masculine and <i>brauchen</i> takes the accusative: <b>einen</b>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["the waiter", "the chair", "outside, outdoors", "to reserve, to book"]
      },
      {
        tr: "We need a table for four.",
        why: "Several orders are correct, for example <i>Wir brauchen einen Tisch für vier</i>, with the object in front <i>Einen Tisch für vier brauchen wir</i>, and with the phrase in front <i>Für vier brauchen wir einen Tisch</i>. The verb stays in second place."
      },
      {
        q: "You are at a restaurant and the waiter greets you.",
        setting: "At the entrance of the restaurant.",
        lines: [
          { tr: "Good evening! What do you need?" },
          { tr: "Ask for a table for two.", answerTr: "We need a table for two." },
          { tr: "Gladly. Here is the table." },
          { tr: "Say thank you and ask for the menu.", answerTr: "Thank you. The menu, please." }
        ]
      },
      {
        tr: "Do you have a table for two?",
        why: "The polite “you” becomes <i>Haben Sie</i>: <i>Sie</i> is a single form that works for one person or several, and the verb is in the third person plural. <i>Tisch</i> is masculine, so <b>einen Tisch</b>."
      },
      {
        tr: "Do you have a free table inside for three people?",
        why: "It is a yes/no question, so <i>haben</i> opens the sentence. <i>Personen</i> has a voiced <b>s</b>, like the “z” in “zoo”; in <i>drinnen</i> the <b>i</b> is short and <b>nn</b> is a single /n/, the doubled letter just tells you the vowel is short."
      },
      {
        tr: "Do you have a free table outside?",
        why: "<i>Draußen</i>: <b>au</b> is a diphthong /aʊ̯/, like “ow” in “cow”, and <b>ß</b> is a voiceless “s”. In <i>frei</i>, <b>ei</b> is /aɪ̯/, like the English word “eye”."
      }
    ]
  },
  "lesson:a1-u07-l2": {
    theme: "Ordering",
    title: "Ordering: Ich hätte gern das Schnitzel",
    objectives: [
      "order with the phrases ich möchte and ich hätte gern",
      "conjugate möchte: ich möchte, du möchtest, wir möchten",
      "put the dish you order in the accusative: den Fisch, die Suppe, das Schnitzel"
    ],
    theory: [
      {
        h: "Two phrases for ordering",
        p: "In a restaurant you order with <strong>ich möchte</strong> + accusative (<em>Ich möchte das Schnitzel</em>) or with <strong>ich hätte gern</strong> + accusative (<em>Ich hätte gern das Schnitzel</em>). Both are polite. <em>möchte</em> started out as a Konjunktiv II form of <em>mögen</em>, and <em>hätte</em> is the Konjunktiv II of <em>haben</em>: at this level you learn them as fixed phrases, without building other forms of that mood. <em>gern</em> means “gladly”, so <em>ich hätte gern</em> corresponds to “I'd like”, not to a literal “I would have gladly”, which nobody says when ordering."
      },
      {
        h: "möchte is a modal, with an -e",
        p: "Like the other modals, <em>möchte</em> sends the infinitive to the end (<em>Ich möchte das Schnitzel essen</em>), and the infinitive is often dropped when the meaning is clear (<em>Ich möchte das Schnitzel</em>). Unlike <em>kann</em>, <em>will</em> and <em>muss</em>, it has an <strong>-e</strong> in the 1st and 3rd person singular: <em>ich möchte</em>, <em>er möchte</em>. The other persons: <em>du möchtest</em>, <em>wir möchten</em>, <em>ihr möchtet</em>, <em>sie/Sie möchten</em>. The dish you order is a direct object, so it is in the accusative: <em>den Fisch</em>, <em>die Suppe</em>, <em>das Schnitzel</em>."
      },
      {
        contrast: "English “I'd like” and German <em>ich möchte</em> do the same job, and both are softened forms: “I'd” is short for “I would”, and <em>möchte</em> comes from <em>mögen</em>, “to like”. You can map <em>ich möchte</em> straight onto “I'd like”. <em>Ich hätte gern</em> is a second phrase with the same use. English “I want the schnitzel” is blunt, and German <em>Ich will das Schnitzel</em> is blunt in the same way. Another difference: <em>möchte</em> has the verb ending <em>-e</em> for <em>ich</em> and <em>er</em>, while English “would like” never changes. Remember the gender too, since English has none: <em>das Schnitzel</em>, <em>das Hähnchen</em> (chicken) and <em>das Eis</em> (ice cream) are neuter, <em>der Fisch</em> and <em>der Salat</em> are masculine, <em>die Suppe</em> is feminine. A <em>Schnitzel</em> is a thin cutlet; the version in breadcrumbs is called <em>paniertes Schnitzel</em>, so it is not necessarily breaded."
      },
      {
        trap: "<em>Ich will das Schnitzel</em> is a correct sentence, but in a restaurant it sounds abrupt, like saying “I want the cutlet” to the waiter: to order, choose <em>ich möchte</em> or <em>ich hätte gern</em>. And don't lose the <strong>-e</strong>: “ich möchten” is wrong, you say <em>ich möchte</em>, and in the 3rd person <em>er möchte</em> (not “er möchtet”)."
      },
      {
        tip: "Two patterns are enough to order: <em>Ich möchte + accusative</em> and <em>Ich hätte gern + accusative</em>. For several people: <em>Wir möchten ...</em> and <em>Wir hätten gern ...</em>."
      }
    ],
    grammar: {
      title: "möchte and hätte gern",
      note: "<b>Ich möchte</b> + accusative and <b>ich hätte gern</b> + accusative are polite phrases for ordering. <b>möchte</b> has an -e in the 1st and 3rd person singular.",
      table: {
        head: ["person", "möchten", "hätte gern"],
        rows: [
          ["ich", "möchte", "hätte gern"],
          ["du", "möchtest", "hättest gern"],
          ["er/sie/es", "möchte", "hätte gern"],
          ["wir", "möchten", "hätten gern"],
          ["ihr", "möchtet", "hättet gern"],
          ["sie/Sie", "möchten", "hätten gern"]
        ]
      },
      examples: [
        { tr: "I'd like the schnitzel.", note: "möchte: polite phrase; das Schnitzel, neuter" },
        { tr: "I'd like the cheese.", note: "hätte gern + accusative: den Käse" },
        { tr: "I'd like the fish.", note: "den Fisch: masculine in the accusative" },
        { tr: "What would you like to drink?", note: "Was in first position, möchten in second, trinken at the end" },
        { tr: "Would you like a starter?", note: "yes/no question: möchten in first position" },
        { tr: "We'd like two soups.", note: "wir hätten gern: plural" }
      ]
    },
    vocab: [
      "I'd like (polite phrase)",
      "I'd like (the hätte gern version)",
      "the cutlet, the thin slice of meat (paniertes Schnitzel: breaded)",
      "the sausage",
      "the potato",
      "the rice",
      "the chicken",
      "the cheese",
      "the starter",
      "the main course",
      "the dessert",
      "the ice cream"
    ],
    exercises: [
      {
        q: "You order the fish politely. Which sentence is correct?",
        opts: ["Ich möchte den Fisch.", "Ich möchten den Fisch.", "Ich möchte der Fisch."],
        why: "<b>Ich möchte</b> has the -e, and <i>der Fisch</i> in the accusative is <b>den Fisch</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Er möchtet eine Suppe.", "Er möchte eine Suppe.", "Er möchten eine Suppe."],
        why: "In the 3rd person singular <i>möchte</i> has an <b>-e</b> and no other ending: <b>er möchte</b>."
      },
      {
        q: "Complete: “Ich möchte ___ Salat.” (I'd like the salad.)",
        hint: "der Salat, definite article in the accusative",
        why: "<i>Salat</i> is masculine: in the accusative <b>den</b>."
      },
      {
        q: "Match each dish with its meaning.",
        pairs: ["the cutlet or thin slice of meat", "the soup", "the fish", "the dessert"]
      },
      {
        q: "Complete with the verb möchten.",
        tr: "I'd like the fish and you'd like the soup.",
        why: "<i>Ich möchte</i> (1st person, with the -e) and <i>du möchtest</i> (2nd person, with -st)."
      },
      {
        tr: "I'd like the schnitzel.",
        why: "Several orders are correct, for example <i>Ich hätte gern das Schnitzel</i>, <i>Ich hätte das Schnitzel gern</i>, with the object in front <i>Das Schnitzel hätte ich gern</i>, and with <i>gern</i> in front <i>Gern hätte ich das Schnitzel</i>. The verb stays in second place."
      },
      {
        q: "You order at the restaurant.",
        setting: "The waiter takes the order.",
        lines: [
          { tr: "What would you like?" },
          { tr: "Order the fish with the polite phrase.", answerTr: "I'd like the fish." },
          { tr: "And would you also like a soup?" },
          { tr: "Say yes and order the soup.", answerTr: "Yes, gladly. I'd like a soup." }
        ]
      },
      {
        tr: "I'd like the soup.",
        why: "Both <i>ich möchte</i> and <i>ich hätte gern</i> work; <i>gern</i> can also go with <i>möchte</i> or after the object, and the object can open the sentence (<i>Die Suppe möchte ich</i>). <i>Suppe</i> is feminine: in the accusative it stays <i>die</i>: “the soup” is one already known, so the definite article."
      },
      {
        tr: "I'd like the soup and the schnitzel.",
        why: "<i>möchte</i>: the <b>ö</b> is short, and <b>ch</b> after <b>ö</b> is the sound of <i>ich</i>, a light palatal fricative, like the “h” in “huge”: it is not a “k” and not “sh”. In <i>Schnitzel</i>, <b>sch</b> is /ʃ/ (as in “shop”) and <b>tz</b> is /ts/."
      },
      {
        tr: "I'd like the fish and the salad.",
        why: "<i>hätte</i>: the <b>ä</b> is short, close to the “e” in “bed”, and <b>tt</b> is a single /t/. In <i>gern</i> the <b>g</b> is hard, and the <b>r</b> is not the American “r”: it can be uvular or tapped, both are standard."
      }
    ]
  },
  "lesson:a1-u07-l3": {
    theme: "One, some, none",
    title: "One, some, none: Ich nehme zwei. Haben Sie welche?",
    objectives: [
      "say “one” without repeating the noun with einer, eine, eins",
      "say “I have some” and “I'll take two” without repeating the noun",
      "use welche for some and keine for none"
    ],
    theory: [
      {
        h: "Don't repeat a noun you already said: einer, eine, eins",
        p: "To avoid repeating a noun, German uses the forms of <em>ein</em> without the noun. They agree with the gender of the noun you leave out: masculine <strong>einer</strong> (accusative <strong>einen</strong>), feminine <strong>eine</strong>, neuter <strong>eins</strong>. <em>Möchten Sie einen Apfel? Ja, ich nehme einen.</em> (<em>der Apfel</em>) <em>Möchten Sie eine Tomate? Ja, ich nehme eine.</em> (<em>die Tomate</em>) <em>Möchten Sie ein Brötchen? Ja, ich nehme eins.</em> (<em>das Brötchen</em>). With a number nothing else is needed: <em>Ich nehme zwei.</em>"
      },
      {
        h: "welche for “some”, keine for “none”",
        p: "When there is no number and you don't say how many, you use <strong>welche</strong> in place of the noun: with a plural (<em>Haben Sie Brötchen? Ja, wir haben welche.</em>) and with a feminine mass noun (<em>Haben Sie Milch? Ja, wir haben welche.</em>). With a neuter mass noun the form is <strong>welches</strong> (<em>Haben Sie Wasser? Ja, wir haben welches.</em>), and with a masculine mass noun in the accusative <strong>welchen</strong> (<em>Haben Sie Saft? Ja, wir haben welchen.</em>). To say there is none, you use <strong>keiner / keine / keins</strong> (masculine accusative <em>keinen</em>): <em>Wir haben leider keine.</em>"
      },
      {
        contrast: "English does this with “one”, “some”, “any” and “none”: “I'll take two”, “Do you have any?”, “We have some”, “We don't have any”. The ideas are the same, but English “one” and “some” never change, while the German forms agree with the German noun: <em>der Apfel → einen</em>, <em>die Tomate → eine</em>, <em>das Ei → eins</em>. English does not even mark gender, so there is no shortcut: you have to remember the article of each noun. With a number both languages simply drop the noun: <em>Ich nehme zwei</em>, “I'll take two”."
      },
      {
        trap: "<em>welche</em> is not always the question word “which” of <em>Welche Suppe möchten Sie?</em>: in <em>Haben Sie welche?</em> it means “do you have any?”. Context tells them apart: the question use asks you to choose or identify (<em>Welche möchten Sie?</em> works even without a noun), the other one picks up an unspecified quantity. And don't use <em>ein</em> alone: “Ich nehme ein” is wrong, because without the noun you need the pronoun forms, <em>einen</em>, <em>eine</em> or <em>eins</em>."
      },
      {
        tip: "To choose the form, think of the German noun: <em>der Apfel → einen</em>, <em>die Tomate → eine</em>, <em>das Ei → eins</em>. If you have a number, say the number and stop."
      }
    ],
    grammar: {
      title: "einer, eins, welche: the noun is not repeated",
      note: "Without the noun: masculine <b>einer / einen</b>, feminine <b>eine</b>, neuter <b>eins</b>. With a number the number is enough (<b>Ich nehme zwei</b>). For “I have some” without a number: <b>welche</b> (plural, feminine mass noun), <b>welches</b> (neuter mass noun), <b>welchen</b> (masculine mass noun, accusative).",
      table: {
        head: ["gender", "with the noun", "without the noun"],
        rows: [
          ["masculine", "Ich nehme einen Apfel.", "Ich nehme einen."],
          ["feminine", "Ich nehme eine Tomate.", "Ich nehme eine."],
          ["neuter", "Ich nehme ein Brötchen.", "Ich nehme eins."],
          ["plural", "Haben Sie Brötchen?", "Haben Sie welche?"]
        ]
      },
      examples: [
        { tr: "I'll take two.", note: "the number alone is enough" },
        { tr: "Would you like a roll? Yes, I'll take one.", note: "das Brötchen is neuter: eins" },
        { tr: "Do you have an apple? Yes, I have one.", note: "der Apfel is masculine: einen" },
        { tr: "Would you like a tomato? Yes, I'll take one.", note: "die Tomate is feminine: eine" },
        { tr: "Do you have any rolls? Yes, we have some.", note: "plural without a number: welche" },
        { tr: "Do you have any water? Yes, we have some.", note: "das Wasser is a neuter mass noun: welches" }
      ]
    },
    vocab: [
      "some, any (without a number)",
      "one (without the noun)",
      "none, not any (without the noun)",
      "the egg",
      "the tomato",
      "the cucumber",
      "the glass",
      "the bottle",
      "the portion",
      "the fork",
      "the spoon",
      "the knife"
    ],
    exercises: [
      {
        q: "“Haben Sie Brötchen?” The waiter has some. How does he answer?",
        opts: ["Ja, wir haben welche.", "Ja, wir haben welches.", "Ja, wir haben einen."],
        why: "<i>Brötchen</i> here is plural and without a number: the pronoun is <b>welche</b>. <i>Welches</i> is for a neuter singular mass noun, <i>einen</i> for a masculine singular."
      },
      {
        q: "“Möchten Sie ein Brötchen?” Answer: “Yes, I'll take one.”",
        opts: ["Ja, ich nehme ein.", "Ja, ich nehme eins.", "Ja, ich nehme einen."],
        why: "<i>Das Brötchen</i> is neuter: without the noun you say <b>eins</b>. “Ich nehme ein” is wrong, and <i>einen</i> is masculine."
      },
      {
        q: "Complete: “Haben Sie Wasser? Ja, wir haben ___.” (Do you have any water? Yes, we have some.)",
        hint: "das Wasser, neuter mass noun, no number",
        why: "<i>Das Wasser</i> is neuter and a mass noun: the pronoun is <b>welches</b>."
      },
      {
        q: "Complete: “Möchten Sie eine Tomate? Ja, ich nehme ___.” (Would you like a tomato? Yes, I'll take one.)",
        hint: "die Tomate is feminine",
        why: "<i>Die Tomate</i> is feminine, so “one” is <b>eine</b>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["the roll", "the milk", "the egg", "the bottle"]
      },
      {
        q: "Complete the two missing words: “Do you have an apple? Yes, we have one.”",
        tr: "Do you have an apple? Yes, we have one.",
        why: "<i>Der Apfel</i> is masculine: after <i>haben</i> it is <b>einen Apfel</b>, and the pronoun without the noun is <b>einen</b> again."
      },
      {
        tr: "Unfortunately we don't have any.",
        why: "Both are correct: <i>Wir haben leider keine</i> and, with <i>leider</i> in front, <i>Leider haben wir keine</i>. The verb stays in second place."
      },
      {
        tr: "Do you (informal, du) have any rolls? Yes, I have some.",
        why: "With <i>du</i> the verb is <i>hast</i>. <i>Brötchen</i> is plural and without a number, so the answer uses <b>welche</b>: the answer needs a pronoun that agrees with the noun, not just a bare “some”."
      },
      {
        tr: "We have rolls and apples, but no tomatoes.",
        why: "In <i>Äpfel</i> the <b>ä</b> is like the “e” in “bed” and <b>pf</b> is pronounced with both consonants: the <b>p</b> is followed at once by an <b>f</b>. In <i>keine</i> the <b>ei</b> is /aɪ̯/, like the English word “eye”."
      },
      {
        tr: "I'll take two rolls and an apple.",
        why: "<i>Apfel</i> is masculine, so <b>einen Apfel</b>. In <i>zwei</i> the <b>z</b> is /ts/, not the English “z”, and the <b>ei</b> is /aɪ̯/."
      }
    ]
  },
  "lesson:a1-u07-l4": {
    theme: "The check",
    title: "The check: Zahlen, bitte!",
    objectives: [
      "ask for the check with Zahlen, bitte! and Können wir bitte zahlen?",
      "answer Zusammen oder getrennt?",
      "say the amount and leave a tip: Das macht ..., stimmt so"
    ],
    theory: [
      {
        h: "Asking for the check",
        p: "In a German restaurant you usually pay at the table, when the waiter comes by, not at a register. To ask for the check you say <strong>Zahlen, bitte!</strong> (short form), <strong>Die Rechnung, bitte.</strong> or, more fully, <strong>Wir möchten zahlen.</strong> or <strong>Können wir bitte zahlen?</strong> With the waiter you use <em>Sie</em>; in young, informal places you may be addressed with <em>du</em>, but if you are not sure, stay with <em>Sie</em>."
      },
      {
        h: "Zusammen oder getrennt? The total and the tip",
        p: "The waiter asks <em>Zusammen oder getrennt?</em>: <strong>zusammen</strong> is one check, <strong>getrennt</strong> is a separate check for each person. You answer <em>Zusammen, bitte.</em> or <em>Getrennt, bitte.</em> Then comes the total: <em>Das macht zweiunddreißig Euro.</em> To leave a tip (<em>das Trinkgeld</em>) you say the amount you want to pay, already rounded up: <em>Vierunddreißig Euro, stimmt so.</em> (<em>stimmt so</em> = keep the change). In Germany and Austria you pay in <em>Euro</em>, in Switzerland in <em>Franken</em> (Swiss francs). Some places take cash only: you can ask <em>Kann ich mit Karte zahlen?</em>"
      },
      {
        contrast: "In the US the check usually arrives with the tip still to be added on top, often 15 to 20 percent, and you write it in or leave it on the table. In Germany the tip is normally not added to the bill: you round up the total yourself as you pay and say the final amount, with <em>stimmt so</em>. Service is generally already included in the prices, so a tip is a small extra, usually a few percent or a round-up. Another difference is the word <em>Rechnung</em>: English says “check” (American) or “bill”, and <em>die Rechnung</em> is feminine. <em>Getrennt</em> corresponds to “separate checks”, and <em>zusammen</em> to “together”."
      },
      {
        trap: "<em>Zahlen, bitte!</em> does not contain <em>Sie</em>: it is the short form of “Wir möchten zahlen, bitte”, much like English “Check, please!”. If the verb is followed by <em>Sie</em>, the same form can be a question or an invitation: <em>Zahlen Sie bar oder mit Karte?</em> (the waiter's question) and <em>Zahlen Sie bitte an der Kasse.</em> (an invitation, polite imperative). Context, intonation and punctuation tell them apart. And with <em>zahlen</em> don't look for a separate polite “you”: German uses <em>Sie</em>, with the verb in the plural form."
      },
      {
        tip: "Keep the sequence in mind: <em>Zahlen, bitte!</em>, then <em>Zusammen, bitte.</em> or <em>Getrennt, bitte.</em>, finally the amount with <em>stimmt so</em>."
      }
    ],
    grammar: {
      title: "Asking for the check and paying",
      note: "With the waiter you use <b>Sie</b>. Useful phrases: <b>Zahlen, bitte!</b>, <b>Die Rechnung, bitte.</b>, <b>Können wir bitte zahlen?</b>. Answers: <b>Zusammen, bitte.</b> / <b>Getrennt, bitte.</b>. <b>stimmt so</b>: keep the change.",
      table: {
        head: ["the waiter says", "you answer"],
        rows: [
          ["Zusammen oder getrennt?", "Zusammen, bitte. / Getrennt, bitte."],
          ["Bar oder mit Karte?", "Bar, bitte. / Mit Karte, bitte."],
          ["Das macht zwölf Euro.", "Dreizehn Euro, stimmt so."]
        ]
      },
      examples: [
        { tr: "The check, please!", note: "Zahlen, bitte!: short form, without Sie" },
        { tr: "The check, please.", note: "die Rechnung: feminine" },
        { tr: "Can we pay, please?", note: "können: modal in first position, zahlen at the end" },
        { tr: "Together or separate?", note: "zusammen: one check; getrennt: one each" },
        { tr: "That's twelve euros.", note: "das macht + amount" },
        { tr: "Thirteen euros, keep the change.", note: "stimmt so: keep the change" }
      ]
    },
    vocab: [
      "to pay",
      "the check, the bill",
      "together",
      "separately (one check each)",
      "in cash",
      "the (credit) card",
      "the tip",
      "the euro",
      "the Swiss franc",
      "the guest, the customer",
      "keep the change, that's fine",
      "the amount, the sum"
    ],
    exercises: [
      {
        q: "Which way of asking for the check is the most polite?",
        opts: ["Ich will die Rechnung.", "Die Rechnung, bitte.", "Gib mir die Rechnung."],
        why: "<b>Die Rechnung, bitte.</b> is short and polite. <i>Ich will ...</i> is correct but sounds abrupt, and <i>Gib mir ...</i> is an imperative with <i>du</i>, out of place with a waiter."
      },
      {
        q: "The waiter asks “Zusammen oder getrennt?”. You want one check each. What do you answer?",
        opts: ["Zusammen, bitte.", "Getrennt, bitte.", "Bar, bitte."],
        why: "<b>Getrennt</b> means one check for each person. <i>Zusammen</i> is a single check, and <i>bar</i> answers a different question (cash)."
      },
      {
        q: "Complete with the verb machen: “Das ___ zwölf Euro.” (That's twelve euros.)",
        hint: "machen, 3rd person singular",
        why: "<i>Das macht ...</i> is the phrase for stating the total: <b>macht</b>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["the check", "the tip", "in cash", "separately (one check each)"]
      },
      {
        q: "Complete with the right form of the verb zahlen.",
        tr: "I pay in cash and he pays by card.",
        why: "<i>Ich zahle</i> (1st person) and <i>er zahlt</i> (3rd person singular)."
      },
      {
        tr: "Can we pay, please?",
        why: "<i>Können wir bitte zahlen?</i>: the modal is in first position (yes/no question) and the infinitive <i>zahlen</i> is at the end. You can also say <i>Können wir zahlen, bitte?</i> or <i>Bitte, können wir zahlen?</i>."
      },
      {
        q: "You have finished eating.",
        setting: "The waiter comes to the table.",
        lines: [
          { tr: "Would you like anything else?" },
          { tr: "Decline and ask for the check.", answerTr: "No, thank you. We'd like to pay, please." },
          { tr: "Gladly. Together or separate?" },
          { tr: "Answer: together.", answerTr: "Together, please." },
          { tr: "That's thirty-two euros." },
          { tr: "Give thirty-four euros and let him keep the change.", answerTr: "Thirty-four euros, keep the change." }
        ]
      },
      {
        tr: "The check, please. We'll pay together.",
        why: "You ask for the check with <i>Die Rechnung, bitte</i>. In <i>Wir zahlen zusammen</i> the adverb <i>zusammen</i> comes after the verb."
      },
      {
        tr: "Excuse me, can we pay, please?",
        why: "<i>Entschuldigung</i>: <b>sch</b> is /ʃ/, as in “shop”. In <i>zahlen</i> the <b>z</b> is /ts/ and <b>ah</b> is a long <b>a</b>: the <b>h</b> is not pronounced."
      },
      {
        tr: "We'll pay separately, please.",
        why: "<i>Getrennt</i>: the <b>g</b> is hard and the <b>r</b> can be uvular or tapped (both are standard), not the American “r”. In <i>zusammen</i> the <b>z</b> is /ts/ and the <b>s</b> between two vowels is voiced, like “z” in “zoo”."
      }
    ]
  },
  "lesson:a1-u07-test": {
    theme: "Test",
    title: "Unit 7 test",
    objectives: ["check the accusative at the restaurant, möchte and hätte gern, einer, eins and welche, the check"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: “Haben Sie ___ Tisch für zwei?” (Do you have a table for two?)",
        hint: "ein-, masculine, accusative",
        why: "<i>Tisch</i> is masculine and after <i>haben</i> it is a direct object: <b>einen</b>."
      },
      {
        q: "Complete: “Ich ___ gern das Schnitzel.” (I'd like the schnitzel.)",
        hint: "haben, polite form used with gern",
        why: "The phrase is <b>ich hätte gern</b>: <i>hätte</i> is the polite form of <i>haben</i>."
      },
      {
        q: "Complete: “Haben Sie Brötchen? Ja, wir haben ___.” (Do you have any rolls? Yes, we have some.)",
        hint: "plural without a number",
        why: "<i>Brötchen</i> is plural and without a number: the pronoun is <b>welche</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Ich möchte der Fisch.", "Ich möchte den Fisch.", "Ich möchte die Fisch."],
        why: "<i>Der Fisch</i> is masculine and after <i>möchte</i> it is in the accusative: <b>den Fisch</b>."
      },
      {
        q: "“Möchten Sie ein Brötchen?” Answer: “Yes, I'll take one.”",
        opts: ["Ja, ich nehme eins.", "Ja, ich nehme ein.", "Ja, ich nehme einen."],
        why: "<i>Das Brötchen</i> is neuter: without the noun you say <b>eins</b>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["to pay", "the check", "the tip", "the menu (the list of dishes)"]
      },
      {
        tr: "I'd like the fish.",
        why: "Several orders are correct, for example <i>Ich hätte gern den Fisch</i>, <i>Ich hätte den Fisch gern</i>, <i>Den Fisch hätte ich gern</i> and <i>Gern hätte ich den Fisch</i>. <i>Fisch</i> is masculine: <b>den</b>."
      },
      {
        tr: "I'd like a table for two.",
        why: "Both <i>ich möchte</i> and <i>ich hätte gern</i> work with <i>einen Tisch für zwei</i>; <i>gern</i> can also go with <i>möchte</i> and the object can open the sentence. <i>Tisch</i> is masculine: <b>einen</b>."
      },
      {
        tr: "We'd like two soups and a salad.",
        why: "<i>hätten</i>: the <b>ä</b> is short, close to the “e” in “bed”, and <b>tt</b> is a single /t/. In <i>zwei</i> the <b>z</b> is /ts/ and the <b>ei</b> is /aɪ̯/."
      },
      {
        tr: "Can we pay, please?",
        why: "<i>Können</i>: the <b>ö</b> is short. In <i>zahlen</i> the <b>z</b> is /ts/ and the <b>a</b> is long."
      }
    ]
  }
});
