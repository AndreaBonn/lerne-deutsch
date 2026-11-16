/* ============================================================
   Learner-language text (en) for data/core/a1-03.js, unit a1-u08.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a1-u08": {
    title: "Family and friends",
    grammarNote: "possessives · predicate adjectives · comparison with als and so ... wie"
  },
  "lesson:a1-u08-l1": {
    theme: "Family",
    title: "My mother, my boss",
    objectives: [
      "say whose person someone is with mein, dein, sein, ihr, unser",
      "choose the right form: mein, meine, meinen",
      "name the owner with a first name: Annas Bruder"
    ],
    theory: [
      {
        h: "The possessive follows the owner and takes the endings of ein",
        p: "You pick the possessive by <b>who owns</b>: <em>mein</em> (I), <em>dein</em> (you), <em>sein</em> (he), <em>ihr</em> (she), <em>unser</em> (we). Then it takes the endings of <em>ein</em>, according to the <b>noun owned</b>: <em>mein Vater</em>, <em>meine Mutter</em>, <em>mein Kind</em>, <em>meine Eltern</em>. In the masculine accusative it becomes <em>meinen</em>: <em>Ich mag meinen Bruder</em>."
      },
      {
        contrast: "English picks the possessive by the owner too (<em>his</em> for a man, <em>her</em> for a woman), and German does the same with <em>sein</em> and <em>ihr</em>. What English does not do is change the word for the thing owned: <em>my</em> stays <em>my</em> in <em>my father</em>, <em>my mother</em>, <em>my brother</em>. German adds an ending that depends on the gender, number and case of the owned noun: <em>mein Vater</em>, <em>meine Mutter</em>, <em>meinen Bruder</em> (as object). As in English, there is no article: <em>mein Chef</em>, never “der mein Chef”."
      },
      {
        trap: "The ending follows the thing owned, not the owner. <em>His mother</em> is <em>seine Mutter</em> (<em>sein</em> for the male owner, <em>-e</em> because <em>Mutter</em> is feminine), but <em>her brother</em> is <em>ihr Bruder</em>, with no ending, because <em>Bruder</em> is masculine and in the nominative. Do not add <em>-e</em> to <em>ihr</em> or <em>sein</em> just because the owner is a woman or a man."
      },
      {
        h: "First names: Annas Bruder",
        p: "To say “Anna's brother”, add <b>-s</b> to the name, with no apostrophe, and put it before the person: <em>Annas Bruder</em>, <em>Peters Schwester</em>. The order is the same as in English, but without the apostrophe. As with the possessive, there is no article. If the name ends in <em>-s</em>, <em>-x</em> or <em>-z</em>, you add only an apostrophe: <em>Hans' Mutter</em>."
      },
      {
        tip: "Always learn family members with the possessive: <em>meine Mutter</em>, <em>mein Vater</em>, <em>meine Eltern</em>. That way gender and plural come in together with the noun."
      }
    ],
    grammar: {
      title: "Mein in the nominative and accusative",
      note: "Endings of <b>ein</b>: only the masculine changes in the accusative (<em>meinen</em>). The same pattern works for <em>dein, sein, ihr, unser</em>.",
      table: {
        head: ["gender", "nominative", "accusative", "example"],
        rows: [
          ["masculine", "mein", "meinen", "Ich mag meinen Bruder."],
          ["feminine", "meine", "meine", "Ich mag meine Schwester."],
          ["neuter", "mein", "mein", "Ich mag mein Auto."],
          ["plural", "meine", "meine", "Ich mag meine Eltern."]
        ]
      },
      examples: [
        { tr: "My mother is called Anna." },
        { tr: "My boss is nice." },
        { tr: "This is our family.", note: "Familie is feminine: unsere" },
        { tr: "I like my brother.", note: "Bruder is masculine in the accusative: meinen" },
        { tr: "Where does your sister live?" },
        { tr: "Anna's brother is called Paul.", note: "first name + -s, no article and no apostrophe" }
      ]
    },
    vocab: [
      "the family",
      "the mother",
      "the father",
      "the parents (plural only)",
      "the brother",
      "the sister",
      "the grandmother",
      "the grandfather",
      "the uncle",
      "the aunt",
      "the boss",
      "the (female) friend, girlfriend"
    ],
    exercises: [
      {
        q: "How do you say “my mother”?",
        opts: ["mein Mutter", "meine Mutter", "meinen Mutter"],
        why: "<i>Mutter</i> is feminine, so <b>meine</b>, like <i>eine</i>."
      },
      {
        q: "Complete: “Das ist ___ Schwester.” (This is my sister.)",
        hint: "mein + feminine ending",
        why: "<b>Meine Schwester</b>: feminine, nominative."
      },
      {
        q: "Complete: “Ich mag ___ Chef.” (I like my boss.)",
        hint: "mein + masculine accusative",
        why: "<b>Meinen Chef</b>: after <i>mögen</i> comes the accusative, and the masculine changes, like <i>einen</i>."
      },
      {
        q: "How do you say “his mother” (the mother of a man)?",
        opts: ["seine Mutter", "ihre Mutter", "sein Mutter"],
        why: "The owner is male, so <b>sein</b>, and <i>Mutter</i> is feminine: <b>seine Mutter</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Ich mag mein Vater.", "Ich mag meinen Vater.", "Ich mag meine Vater."],
        why: "<i>Vater</i> is masculine and in the accusative: <b>meinen Vater</b>."
      },
      {
        q: "Pick ein or eine: the possessive takes the same endings.",
        why: "The possessive takes the same endings as <i>ein</i>: <i>ein Bruder → mein Bruder</i>, <i>eine Tante → meine Tante</i>.",
        items: ["brother", "sister", "uncle", "aunt", "boss", "(female) friend"]
      },
      {
        q: "Translate: “My sister is called Lena and my brother is called Paul.”",
        why: "No article before the possessive: <i>meine Schwester</i>, <i>mein Bruder</i>."
      },
      {
        q: "Complete: “These are my parents. My father is called Jan.”",
        tr: "These are my parents. My father is called Jan.",
        why: "<i>Eltern</i> is plural: <b>meine</b>. <i>Vater</i> is masculine nominative: <b>Mein</b>, capitalized at the start of the sentence."
      },
      {
        tr: "My mother is called Eva and my father is called Jan.",
        why: "In <i>heißen</i> the <b>ß</b> is a voiceless <b>s</b>, as in “hiss”."
      },
      {
        tr: "This is my family: my father, my mother and my brother.",
        why: "<i>Familie</i> is pronounced /faˈmiːli̯ə/: the first <b>i</b> is long and stressed; the ending <b>-ie</b> is said /i̯ə/, not a long <b>i</b>."
      }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "Appearance",
    title: "What does he look like?",
    objectives: [
      "ask and say what a person looks like with Wie sieht ... aus?",
      "use the adjective after sein without changing it",
      "describe hair, eyes and accessories with haben"
    ],
    theory: [
      {
        h: "Wie sieht er aus?",
        p: "To ask about <b>appearance</b> you use <em>Wie sieht er aus?</em> (“What does he look like?”). For now, learn the whole formula without taking the verb apart: <em>Wie sieht Paul aus?</em>, <em>Wie sieht deine Schwester aus?</em> You answer with <em>sein</em> and an adjective: <em>Er ist groß und schlank</em>. Or with <em>haben</em>: <em>Er hat einen Bart</em>, <em>Sie hat eine Brille</em>."
      },
      {
        contrast: "In English adjectives do not change for gender or number (<em>he is tall</em>, <em>she is tall</em>, <em>they are tall</em>), and in German they do not change after <em>sein</em> either: <em>Er ist groß</em>, <em>Sie ist groß</em>, <em>Sie sind groß</em>. So that part is easy. The surprises are elsewhere: English <em>hair</em> is singular, but <em>die Haare</em> is plural in German (<em>Seine Haare sind kurz</em>), and English <em>glasses</em> is plural, but <em>die Brille</em> is singular (<em>Sie hat eine Brille</em>)."
      },
      {
        h: "Hair and eyes are plural",
        p: "<em>Die Haare</em> and <em>die Augen</em> are plurals, and the verb follows: <em>Seine Haare sind kurz</em>, <em>Ihre Augen sind grün</em>. You can also say <em>Er hat kurze Haare</em>, but that form, with the adjective before the noun, comes later: for now the adjective stands after <em>sein</em>."
      },
      {
        trap: "English uses <em>short</em> both for a person's height and for hair. German has two words: for height it uses <em>klein</em> (“small”), and <em>kurz</em> is for length: <em>Meine Schwester ist klein</em>, <em>Seine Haare sind kurz</em>. Do not say “Meine Schwester ist kurz”, and do not say “Seine Haare sind klein”. With a plural subject the verb is <em>sind</em>: not “Die Eltern ist groß”, but <em>Die Eltern sind groß</em>."
      },
      {
        tip: "Describe someone in three sentences: <em>Er ist ...</em>, <em>Er hat ...</em>, <em>Seine Haare sind ...</em>. With <em>sein</em> and <em>haben</em> you can describe almost anyone."
      }
    ],
    grammar: {
      title: "The adjective after sein does not change",
      note: "Same form for masculine, feminine, neuter and plural. Only the verb changes (<em>ist, sind</em>).",
      table: {
        head: ["subject", "verb", "adjective", "example"],
        rows: [
          ["masculine", "ist", "groß", "Mein Bruder ist groß."],
          ["feminine", "ist", "groß", "Meine Schwester ist groß."],
          ["neuter", "ist", "groß", "Das Kind ist groß."],
          ["plural", "sind", "groß", "Meine Eltern sind groß."]
        ]
      },
      examples: [
        { tr: "What does Paul look like?", note: "formula: Wie sieht ... aus?" },
        { tr: "He is tall and slim." },
        { tr: "His eyes are brown.", note: "Augen is plural: sind" },
        { tr: "My sister is short and blond.", note: "klein for height" },
        { tr: "He has a beard.", note: "haben + accusative: einen Bart" },
        { tr: "Her hair is long.", note: "Haare is plural: sind" }
      ]
    },
    vocab: [
      "tall, big",
      "small; short (in height)",
      "young",
      "old, elderly",
      "thin, slim",
      "blond",
      "long",
      "short (hair, length)",
      "the hair (plural in German)",
      "the eyes (plural)",
      "the glasses (singular in German)",
      "the beard"
    ],
    exercises: [
      {
        q: "How do you ask “What does he look like?”",
        opts: ["Wie ist er aus?", "Wie sieht er aus?", "Was sieht er aus?"],
        why: "The formula is <b>Wie sieht er aus?</b> and you do not take it apart."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Die Schuhe sind rote.", "Meine Schwester ist kleine.", "Meine Schwester ist klein."],
        why: "After <i>sein</i> the adjective stays unchanged: <b>klein</b>."
      },
      {
        q: "Complete: “Seine Augen ___ braun.” (His eyes are brown.)",
        hint: "sein, plural subject",
        why: "<i>Augen</i> is plural: <b>sind</b>."
      },
      {
        q: "Complete: “Sie ___ eine Brille.” (She has glasses.)",
        hint: "haben, third person singular",
        why: "<b>Sie hat</b>: <i>haben</i> with <i>er/sie/es</i> is <i>hat</i>. German uses <i>haben</i> with a singular <i>eine Brille</i>, while English <i>glasses</i> is plural. (<i>Sie trägt eine Brille</i> would mean “she wears glasses”.)"
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["tall", "thin", "blond", "short (hair)"]
      },
      {
        tr: "My sister is short and blond.",
        why: "The order is subject, verb, adjectives: <i>Meine Schwester ist klein und blond</i>. Height is <i>klein</i>, not <i>kurz</i>."
      },
      {
        q: "Translate: “My brother is tall and has a beard.”",
        why: "<i>Er ist groß und hat einen Bart</i>: <i>Bart</i> is masculine in the accusative, so <i>einen</i>."
      },
      {
        q: "Complete the text.",
        tr: "Anna is short and slim. She has glasses and her hair is long.",
        why: "<i>Ist</i> and <i>hat</i> with <i>Anna/sie</i>; <i>Haare</i> is plural, so <i>sind</i>, even though English says “her hair is”."
      },
      {
        tr: "My sister is tall and slim, and her hair is blond.",
        why: "In <i>blond</i> the <b>o</b> is short; in <i>Haare</i> the <b>aa</b> is one long <b>a</b>, as in “father”."
      },
      {
        tr: "My father is tall, has a beard and glasses.",
        why: "In <i>Brille</i> the <b>r</b> is usually made at the back of the throat, and a tapped <b>r</b> is also standard; neither is the English “r”. The <b>ll</b> only marks the short <b>i</b> before it; it is not a longer sound."
      }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "Character",
    title: "Nice or unfriendly?",
    objectives: [
      "ask and say what a person is like with Wie ist ...?",
      "use character adjectives after sein",
      "negate an adjective with nicht"
    ],
    theory: [
      {
        h: "Wie ist er? Character",
        p: "<em>Wie sieht er aus?</em> asks about appearance, <em>Wie ist er?</em> asks about <b>character</b>: <em>Wie ist dein Chef?</em> - <em>Er ist sehr nett.</em> Here too the adjective comes after <em>sein</em> and does not change: <em>Meine Freundin ist lustig</em>, <em>Meine Eltern sind intelligent</em>."
      },
      {
        contrast: "<em>Wie ist dein Chef?</em> means “What is your boss like?”, not “How is your boss?” (that would be a question about health or mood). English uses “like” for both appearance and character, while German has two questions: <em>Wie sieht er aus?</em> and <em>Wie ist er?</em>. Watch out for <em>sympathisch</em>: it is not “sympathetic”, it means “likeable, pleasant”. <em>Freundlich</em> is “friendly”, <em>nett</em> can mean nice or kind depending on context, and the opposite of <em>freundlich</em> is made with <em>un-</em>, as in English: <em>unfreundlich</em>, “unfriendly”."
      },
      {
        h: "Negating an adjective: nicht",
        p: "As you saw in unit 3, an adjective is negated with <strong>nicht</strong>, which stands before it: <em>Er ist nicht unfreundlich</em>, <em>Sie ist nicht faul, sie ist sehr fleißig</em>. With <em>aber</em> you contrast: <em>Mein Chef ist nett, aber zu ernst</em>."
      },
      {
        trap: "<em>Zu</em> before an adjective means “too”, not “to”: <em>zu ernst</em> is “too serious”. And <em>nicht</em> does not turn into <em>kein</em> before an adjective: “Er ist kein nett” is wrong; to negate an adjective after <em>sein</em> you use <em>nicht</em>, <em>Er ist nicht nett</em>."
      },
      {
        tip: "To describe a person, make two moves: appearance (<em>Wie sieht sie aus?</em>) and character (<em>Wie ist sie?</em>). Two different questions, two different answers."
      }
    ],
    grammar: {
      title: "Wie ist er? Wie sieht er aus?",
      note: "<b>Wie ist ...?</b> asks about character, <b>Wie sieht ... aus?</b> about appearance. In both cases the adjective does not change.",
      table: {
        head: ["question", "answer", "example"],
        rows: [
          ["Wie ist dein Chef?", "sein + adjective", "Er ist nett."],
          ["Wie sieht dein Chef aus?", "sein + adjective; haben + noun in the accusative", "Er ist groß. Er hat einen Bart."],
          ["negating an adjective", "nicht + adjective", "Er ist nicht unfreundlich."],
          ["too", "zu + adjective", "Er ist zu ernst."]
        ]
      },
      examples: [
        { tr: "What is your boss like?", note: "Wie ist ...? asks about character" },
        { tr: "He is very nice." },
        { tr: "My friend is funny." },
        { tr: "She is not lazy, she is hard-working.", note: "nicht before the adjective" },
        { tr: "My boss is nice, but too serious." },
        { tr: "Paul is not unfriendly.", note: "nicht unfreundlich: negating an adjective" }
      ]
    },
    vocab: [
      "nice, kind",
      "friendly, polite",
      "unfriendly, unwelcoming",
      "funny, fun to be with",
      "serious",
      "calm, quiet",
      "likeable, pleasant (not “sympathetic”)",
      "intelligent",
      "hard-working",
      "lazy",
      "shy",
      "the friend (male), boyfriend"
    ],
    exercises: [
      {
        q: "How do you ask what his character is like?",
        opts: ["Wie sieht er aus?", "Wie ist er?", "Wie hat er?"],
        why: "<b>Wie ist er?</b> asks about character; <i>Wie sieht er aus?</i> about appearance."
      },
      {
        q: "What is the opposite of <i>freundlich</i>?",
        opts: ["unfreundlich", "fleißig", "ruhig"],
        why: "The prefix <b>un-</b> negates the adjective: <i>unfreundlich</i>."
      },
      {
        q: "Paul works a lot. What is he like?",
        opts: ["Er ist faul.", "Er ist schüchtern.", "Er ist fleißig."],
        why: "<i>Fleißig</i> describes someone who works hard; <i>faul</i> is the opposite."
      },
      {
        q: "Complete: “Anna ist ___ unfreundlich, sie ist sehr nett.”",
        hint: "negating an adjective",
        why: "An adjective is negated with <b>nicht</b>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["funny", "serious", "lazy", "shy"]
      },
      {
        tr: "My boss is very nice and calm.",
        why: "Subject, verb, adjectives: <i>Mein Chef ist sehr nett und ruhig</i>."
      },
      {
        q: "Translate: “My sister is not shy, she is very likeable.”",
        why: "<i>Nicht schüchtern</i>: <i>nicht</i> stands before the adjective. Then a second sentence with <i>sie ist ...</i>."
      },
      {
        q: "Complete: “What is your boss like? He is nice, but too serious.”",
        tr: "What is your boss like? He is nice, but too serious.",
        why: "<i>Wie ist ...?</i> and <i>ist</i> in the answers; <i>zu</i> before an adjective means “too”."
      },
      {
        tr: "My friend is very funny, but his sister is serious and calm.",
        why: "In <i>lustig</i> the <b>u</b> is short and the ending <b>-ig</b> is said with the soft <b>ch</b> of <i>ich</i>, not like English “g”."
      },
      {
        tr: "My friend is not lazy, she is very hard-working and nice.",
        why: "In <i>fleißig</i> the <b>ß</b> is a voiceless <b>s</b> and the <b>ei</b> sounds like “eye”."
      }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "Comparison",
    title: "Taller than you",
    objectives: [
      "compare two people with the comparative and als",
      "say that two things are equal with so ... wie",
      "use the irregular forms besser, mehr, lieber"
    ],
    theory: [
      {
        h: "The comparative: -er and als",
        p: "To say that someone is “more ...”, add <strong>-er</strong> to the adjective, and introduce the second item with <strong>als</strong>: <em>Er ist größer als du</em>. Many short adjectives take an umlaut: <em>alt → älter</em>, <em>jung → jünger</em>, <em>groß → größer</em>. The comparative, like the adjective, stays unchanged after <em>sein</em>."
      },
      {
        contrast: "English also adds <em>-er</em> to short adjectives (<em>taller than</em>), but uses <em>more</em> for long ones (<em>more beautiful</em>). German always adds <em>-er</em>, whatever the length: <em>schöner</em>, <em>interessanter</em>, never “mehr schön”. German also adds umlauts that English does not have: <em>old, older</em> but <em>alt, älter</em>. And in these examples the pronoun after <em>als</em> is nominative because it is the subject of the implied clause: <em>Er ist größer als ich</em> (<em>als ich es bin</em>), even where casual English says “taller than me”. Compare <em>Ich mag ihn lieber als dich</em>, with the accusative."
      },
      {
        h: "Equal: so ... wie",
        p: "To say that two things are equal, use <strong>so ... wie</strong> with the basic adjective, without <em>-er</em>: <em>Sie ist so groß wie ich</em>. To negate: <em>Anna ist nicht so alt wie Paul</em>."
      },
      {
        trap: "<em>Als</em> does not mean “as”: it means “than”. <em>Wie</em> is the word for “as” and “like”. So “as tall as” is <em>so groß wie</em>, and “taller than” is <em>größer als</em>. Do not mix them: “größer wie du” and “so groß als du” are common mistakes. Some forms are irregular, and they parallel English: <em>gut → besser</em> (good, better), <em>viel → mehr</em> (much, more), <em>gern → lieber</em> (like, prefer): <em>Ich trinke lieber Tee als Kaffee</em>, “I prefer tea to coffee”."
      },
      {
        tip: "When you compare, ask yourself: equal or different? Equal: <em>so ... wie</em>. Different: <em>-er ... als</em>."
      }
    ],
    grammar: {
      title: "Comparative and equality",
      note: "Comparative adjective + <b>als</b> for “...-er/more ... than”; <b>so</b> + adjective + <b>wie</b> for “as ... as”. The irregular forms have to be learned.",
      table: {
        head: ["adjective", "comparative", "example"],
        rows: [
          ["klein", "kleiner", "Ich bin kleiner als du."],
          ["alt", "älter", "Er ist älter als ich."],
          ["jung", "jünger", "Sie ist jünger als ich."],
          ["groß", "größer", "Er ist größer als du."],
          ["gut", "besser", "Du sprichst besser Deutsch."],
          ["gern", "lieber", "Ich trinke lieber Tee."]
        ]
      },
      examples: [
        { tr: "He is taller than you.", note: "größer als: -er + als" },
        { tr: "She is as tall as me.", note: "so groß wie: basic adjective + wie" },
        { tr: "My brother is older than my sister." },
        { tr: "I prefer tea to coffee.", note: "gern → lieber" },
        { tr: "You speak German better than me.", note: "gut → besser" },
        { tr: "Anna is not as old as Paul.", note: "nicht so ... wie" }
      ]
    },
    vocab: [
      "than (in comparisons)",
      "as ... as",
      "older, elder",
      "younger",
      "taller, bigger",
      "smaller",
      "better",
      "more",
      "rather, preferably",
      "the twin",
      "the difference",
      "the same, equal (age or size)"
    ],
    exercises: [
      {
        q: "How do you say “taller than you”?",
        opts: ["größer wie du", "größer als du", "groß als du"],
        why: "The comparative has <b>-er</b> and the second item is introduced with <b>als</b>."
      },
      {
        q: "How do you say “as tall as you”?",
        opts: ["so groß wie du", "so groß als du", "größer wie du"],
        why: "Equality is expressed with <b>so ... wie</b> and the adjective without <i>-er</i>."
      },
      {
        q: "What is the comparative of <i>alt</i>?",
        opts: ["alter", "älter", "alterer"],
        why: "<b>Älter</b>: the <i>a</i> takes an umlaut."
      },
      {
        q: "Complete: “Paul ist ___ als ich.” (Paul is taller than me.)",
        hint: "groß, comparative",
        why: "<b>Größer</b>: <i>groß</i> + <i>-er</i>."
      },
      {
        q: "Complete: “Anna ist so alt ___ ich.” (Anna is as old as me.)",
        hint: "equality",
        why: "With <i>so ... wie</i> the word is <b>wie</b>."
      },
      {
        tr: "My brother is older than my sister.",
        why: "<i>Älter als</i>: the order is subject, verb, comparative, <i>als</i>, second item."
      },
      {
        q: "Translate: “You speak German better than me.”",
        why: "<i>Besser</i> and <i>als ich</i>: <i>ich</i> is in the nominative because it is the subject of the implied clause: <i>als ich Deutsch spreche</i>."
      },
      {
        q: "Complete the sentence. Use jung in the first gap and alt in the second.",
        tr: "I am younger than you, but you are older than me.",
        why: "<i>Jünger als du</i>, <i>älter als ich</i>: the umlauts of <i>jung</i> and <i>alt</i>."
      },
      {
        tr: "My brother is older than me, but I am taller than him.",
        why: "In <i>älter</i> the <b>ä</b> is like the “e” of “bed”; in <i>größer</i> the <b>ö</b> is long /øː/: say a long German e /eː/ while rounding your lips."
      },
      {
        tr: "My sister is as tall as me, but she is younger.",
        why: "In <i>jünger</i> the <b>j</b> sounds like English “y”, and the <b>ü</b> is a short vowel, /ˈjʏŋɐ/: start from the short vowel of English “sit” and round your lips."
      }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Test",
    title: "Unit 8 test",
    objectives: ["check possessives, adjectives after sein and the comparative"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Do not look back at the lessons while you answer: if you do not remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: “Das ist ___ Tante.” (This is my aunt.)",
        hint: "mein + feminine ending",
        why: "<b>Meine Tante</b>: feminine, nominative."
      },
      {
        q: "Complete: “Ich mag ___ Onkel.” (I like my uncle.)",
        hint: "mein + masculine accusative",
        why: "<b>Meinen Onkel</b>: masculine accusative."
      },
      {
        q: "Complete: “Du bist älter ___ ich.” (You are older than me.)",
        hint: "second item of the comparison",
        why: "After the comparative you use <b>als</b>."
      },
      {
        q: "Complete: “Sie ist so groß ___ ich.” (She is as tall as me.)",
        hint: "equality",
        why: "With <i>so ... wie</i> the word is <b>wie</b>."
      },
      {
        q: "How do you say “her sister” (the sister of a woman)?",
        opts: ["seine Schwester", "ihre Schwester", "ihr Schwester"],
        why: "The owner is female, so <b>ihr-</b>, and <i>Schwester</i> is feminine: <b>ihre Schwester</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Meine Schwester ist kleine.", "Meine Schwester ist klein.", "Meine Schwester sind klein."],
        why: "After <i>sein</i> the adjective is invariable, and with a singular subject the verb is <i>ist</i>."
      },
      {
        q: "What is the opposite of <i>fleißig</i>?",
        opts: ["faul", "ernst", "freundlich"],
        why: "<b>Faul</b> (lazy) describes someone who does not work hard."
      },
      {
        q: "How do you say “better than”?",
        opts: ["gut als", "besser als", "guter als"],
        why: "<i>Gut</i> has the irregular comparative <b>besser</b>."
      },
      {
        tr: "My uncle is older than my father, but he is not as serious.",
        why: "<i>Älter als</i> and <i>nicht so ... wie</i>: two different constructions."
      },
      {
        tr: "My sister is taller than me and very likeable.",
        why: "<i>Größer als ich</i>, then <i>sehr sympathisch</i>: in <i>sympathisch</i> the ending <b>sch</b> [ʃ] is pronounced like “sh” in “shoe”."
      }
    ]
  }
});
