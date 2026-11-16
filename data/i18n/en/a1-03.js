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
  },
  "unit:a1-u09": {
    title: "Free time",
    grammarNote: "present tense and days · es regnet · gerade instead of the progressive · für, ohne, um, durch, gegen · und, aber, oder, denn"
  },
  "lesson:a1-u09-l1": {
    theme: "The weekend",
    title: "What are you doing this weekend?",
    objectives: [
      "ask and say what you do on the weekend",
      "choose between am Samstag and samstags",
      "talk about hobbies with spielen, schwimmen, wandern, kochen"
    ],
    theory: [
      {
        h: "The present tense for plans",
        p: "The German present covers what you usually do and what you will do soon: <em>Am Samstag spiele ich Fußball</em> (“On Saturday I play soccer”). The verb stays in <b>second position</b>: if you open the sentence with <em>am Samstag</em>, the subject moves after the verb."
      },
      {
        contrast: "English separates habit from a single occasion with the plural: “on Saturdays” versus “on Saturday”. German has a matching pair: <em>samstags</em> (with <em>-s</em>) says outright that it is a habit, while <em>am Samstag</em> depends on context. It can be one particular Saturday, but also a habit (<em>Am Samstag spiele ich immer Fußball</em>). And “on the weekend” is <em>am Wochenende</em>, with <em>am</em>: do not reach for <em>in</em> (<em>im Wochenende</em> is wrong). British speakers say “at the weekend”, which is closer to the German <em>am</em>."
      },
      {
        trap: "<em>Wochenende</em> is neuter (<em>das Wochenende</em>), but English has no grammatical gender to warn you, so learn the article with every noun. With sports you say <em>Fußball spielen</em>, with no article and no preposition: “to play soccer”, not “to play at soccer”. The same goes for instruments: <em>Gitarre spielen</em>, where the article is dropped as well."
      },
      {
        tip: "To say you like something, add <em>gern</em> after the verb: <em>Ich schwimme gern</em>. For activities, German commonly uses the verb plus <em>gern</em>: <em>Ich schwimme gern</em> means “I like to swim”. To ask about someone's plans, <em>Was machst du am Wochenende?</em> is the most natural question, and the English “What are you doing?” needs no special form in German."
      }
    ],
    grammar: {
      title: "When: am, samstags, im",
      note: "<b>am</b> for a specific day and for a part of the day, <b>-s</b> for an explicit habit (<b>am</b> can also be habitual, depending on context), <b>im</b> for seasons.",
      table: {
        head: ["when", "form", "example"],
        rows: [
          ["usually one particular Saturday (or a habit, depending on context)", "am Samstag", "Am Samstag spiele ich Fußball."],
          ["every Saturday, explicit habit", "samstags", "Samstags schwimme ich gern."],
          ["on the weekend", "am Wochenende", "Am Wochenende wandere ich."],
          ["in the evening", "am Abend", "Am Abend koche ich."],
          ["in a season", "im Winter", "Im Winter tanzen wir oft."]
        ]
      },
      examples: [
        { tr: "What are you doing on the weekend?", note: "am Wochenende, not im" },
        { tr: "On Saturday I play soccer.", note: "Fußball spielen with no preposition" },
        { tr: "On Saturdays I like to swim.", note: "samstags = every Saturday" },
        { tr: "On Sunday I go hiking with friends.", note: "wandern: walking in nature" },
        { tr: "In the evening I cook for my family." },
        { tr: "In winter we often dance.", note: "im + season" }
      ]
    },
    vocab: [
      "the weekend",
      "the hobby, the pastime",
      "the concert",
      "the movie",
      "the book",
      "the trip, the excursion",
      "to play (also: to play an instrument)",
      "to swim",
      "to hike",
      "to cook",
      "to dance",
      "on Saturdays, every Saturday"
    ],
    exercises: [
      {
        q: "How do you ask a friend what they are doing on the weekend?",
        opts: ["Was machst du am Wochenende?", "Was machst du im Wochenende?", "Was machst du an Wochenende?"],
        why: "With the weekend you use <b>am</b>: <i>am Wochenende</i>. <i>Im Wochenende</i> is the mistake of someone thinking “in the weekend”."
      },
      {
        q: "How do you say “every Saturday”?",
        opts: ["Im Samstag", "Der Samstag", "Samstags"],
        why: "<b>Samstags</b>, with the <i>-s</i>, explicitly marks a habit. <i>Am Samstag</i> depends on context: usually one particular Saturday, but it can be habitual too."
      },
      {
        q: "Complete: “Ich ___ gern Fußball.” (to play, I)",
        hint: "spielen, ich",
        why: "With <i>ich</i> a regular verb ends in <b>-e</b>: <i>ich spiele</i>."
      },
      {
        q: "Complete: “Ich besuche ___ Sonntag meine Großmutter.” (on Sunday)",
        hint: "preposition for a specific day",
        why: "A specific day takes <b>am</b>: <i>am Sonntag</i>."
      },
      {
        q: "Match each verb with its meaning.",
        pairs: ["to play", "to swim", "to hike", "to cook"]
      },
      {
        q: "Translate: “On Saturday I play soccer and on Sunday I go hiking.” (specific days, use wandern)",
        why: "<i>Am Samstag spiele ich Fußball ...</i>: after the time phrase the verb stays in second position and the subject follows it."
      },
      {
        q: "Complete the dialogue (use treffen).",
        tr: "What are you doing on the weekend? I'm meeting friends and we're going to the movies.",
        why: "With <i>du</i> you say <i>machst</i>; <i>ich treffe</i> is the first person of <i>treffen</i>; <i>ins</i> is <i>in das</i>."
      },
      {
        q: "A friend asks about your plans.",
        setting: "You are talking to a friend on the phone.",
        lines: [
          { tr: "Hi! What are you doing on the weekend?" },
          { tr: "Answer that on Saturday you play soccer.", answerTr: "On Saturday I play soccer." },
          { tr: "And on Sunday?" },
          { tr: "Answer that on Sunday you go hiking.", answerTr: "On Sunday I go hiking." }
        ]
      },
      {
        tr: "On Saturday I play soccer and on Sunday I cook for my family.",
        why: "In <i>Fußball</i> the <b>ß</b> is a voiceless <b>s</b> and the <b>u</b> is long."
      },
      {
        tr: "On Saturday I dance and on Sunday I go hiking.",
        why: "In <i>tanze</i> the <b>z</b> is pronounced [ts], as in “pizza”; in <i>wandere</i> the <b>w</b> sounds like English “v”."
      }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "The weather",
    title: "It's raining",
    objectives: [
      "talk about the weather with es regnet, es schneit, es ist kalt",
      "use es as the subject of weather sentences",
      "ask and say the temperature"
    ],
    theory: [
      {
        h: "Es: the empty subject",
        p: "To talk about the weather German needs a subject: <strong>es</strong>. <em>Es regnet</em> (“It's raining”), <em>Es schneit</em> (“It's snowing”), <em>Es ist kalt</em> (“It's cold”). Like English “it” here, <em>es</em> does not stand for a thing: it only holds the subject slot."
      },
      {
        contrast: "English has the same empty “it”, so this one is easy. The difference is the word order. When the sentence opens with another element, the verb comes second and <em>es</em> follows it: <em>Heute regnet es</em>, not <em>Heute es regnet</em> (English keeps “it” before the verb: “Today it rains”). And English tells “it's raining” from “it rains”, while German uses one form for both: <em>Es regnet</em>."
      },
      {
        trap: "Be careful with <em>die Sonne scheint</em>: here the subject is a real thing, <em>die Sonne</em>, and <em>es</em> is not needed. “It is sunny” is <em>Es ist sonnig</em>, with <em>sein</em>. Mind the word order when the sentence starts with the time: “It is cold today” is <em>Heute ist es kalt</em>, with the verb before <em>es</em>, unlike “Today it is cold”."
      },
      {
        tip: "For the temperature: <em>Wie viel Grad sind es?</em> and <em>Es sind zwanzig Grad.</em> After a number, to give a temperature, <em>Grad</em> stays unchanged, and the lexical plural is <em>Grade</em>. For the weather in general: <em>Wie ist das Wetter?</em>"
      }
    ],
    grammar: {
      title: "Es in weather sentences",
      note: "The subject <b>es</b> is not left out; with another element in first position it goes after the verb.",
      table: {
        head: ["English", "German", "example"],
        rows: [
          ["it's raining", "Es regnet.", "Heute regnet es nicht."],
          ["it's snowing", "Es schneit.", "Im Winter schneit es oft."],
          ["it's cold", "Es ist kalt.", "Heute ist es sehr kalt."],
          ["it's warm / hot", "Es ist warm / heiß.", "Im Sommer ist es warm."],
          ["what's the weather like?", "Wie ist das Wetter?", "Wie ist das Wetter in Wien?"]
        ]
      },
      examples: [
        { tr: "It's raining.", note: "es is not left out" },
        { tr: "In winter it often snows.", note: "es after the verb" },
        { tr: "It is very cold today.", note: "Heute ist es sehr kalt: the verb comes before es" },
        { tr: "It is not raining today." },
        { tr: "What's the weather like?", note: "das Wetter is neuter" },
        { tr: "It's twenty degrees.", note: "After a number, for temperature, Grad stays unchanged: zwanzig Grad; the lexical plural is Grade." }
      ]
    },
    vocab: [
      "the weather",
      "to rain",
      "to snow",
      "the sun",
      "the cloud",
      "the wind",
      "cold",
      "warm (pleasantly), mild",
      "hot, very warm",
      "sunny",
      "windy",
      "the degree"
    ],
    exercises: [
      {
        q: "How do you say “it's raining”?",
        opts: ["Es regnet.", "Regnet.", "Sie regnet."],
        why: "In German the subject <b>es</b> is not left out: <i>Es regnet</i>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Heute es regnet.", "Heute regnet es.", "Heute regnet."],
        why: "The verb is in second position and <i>es</i> stays, after the verb."
      },
      {
        q: "Complete: “Im Winter ___ es oft.” (to snow)",
        hint: "schneien, es",
        why: "<b>Schneit</b>: <i>schneien</i> in the third person, with <i>es</i>."
      },
      {
        q: "Complete: “Heute ist ___ sehr kalt.” (It is very cold today.)",
        hint: "the subject of weather sentences",
        why: "<b>Es</b> is the subject and in weather sentences it is not left out."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["cold", "hot", "sunny", "windy"]
      },
      {
        tr: "It is very cold today.",
        why: "<i>Heute ist es sehr kalt</i>: verb in second position. <i>Es ist heute sehr kalt</i> works too."
      },
      {
        q: "Translate: “Today it's raining and it's cold.”",
        why: "Two clauses, two <i>es</i>: <i>es regnet</i> and <i>es ist kalt</i>. After <i>und</i> a shared subject can be left out: <i>Heute regnet es und ist kalt</i>."
      },
      {
        q: "Complete the dialogue.",
        tr: "What's the weather like today? It's raining and it's cold.",
        why: "<i>Das Wetter</i> is neuter. With <i>regnet</i> and <i>ist kalt</i> the subject <i>es</i> is always there."
      },
      {
        tr: "It is sunny today, but it is not warm.",
        why: "In <i>scheint</i> the group <b>sch</b> is read [ʃ], as in “shoe”, and <b>ei</b> sounds like “eye”."
      },
      {
        tr: "In winter it often snows and it is very cold.",
        why: "In <i>schneit</i> the <b>sch</b> is [ʃ] followed by <b>n</b>, and <b>ei</b> sounds like “eye”."
      }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Right now",
    title: "I'm reading",
    objectives: [
      "say what you are doing right now with the present and gerade",
      "use im Moment as an alternative to gerade",
      "conjugate lesen and sehen (and fernsehen)"
    ],
    theory: [
      {
        h: "Gerade + present",
        p: "German has no form like “I am reading”. To say you are doing something right now, use the present and add <strong>gerade</strong> (right now) or <strong>im Moment</strong> (at the moment): <em>Ich lese gerade</em>. <em>Gerade</em> usually comes after the verb."
      },
      {
        contrast: "English has two present tenses: “I read” (habit) and “I am reading” (now). German standard has no such pair: <em>Ich bin lesend</em> is wrong, and neither “I read” nor “I am reading” maps onto a separate form. Both are <em>ich lese</em>, and only context or <em>gerade</em> tells you it is happening now. Some regions say <em>Ich bin am Lesen</em>, but you do not need it yet."
      },
      {
        h: "Lesen and sehen change vowel",
        p: "In the second and third person singular, <em>lesen</em> and <em>sehen</em> change <b>e → ie</b>: <em>du liest</em>, <em>er liest</em>, <em>du siehst</em>, <em>er sieht</em>. <em>Fernsehen</em> is separable: <em>Er sieht gerade fern</em>."
      },
      {
        trap: "<em>Ich lese</em> on its own can mean “I read” (usually) or “I am reading”. If you want it clear that it is happening now, add <em>gerade</em>. Use a single conjugated verb in the present: <em>ich lese gerade</em>. Do not add <em>bin</em>, as in “I am reading”, where the English “am” has no German counterpart."
      },
      {
        tip: "The question and the answer use the same pattern: <em>Was machst du gerade? Ich lese gerade.</em> Frequency adverbs (<em>immer, oft, manchmal, nie</em>) follow the conjugated verb and a pronoun subject: <em>Ich lese oft</em>, <em>Heute lese ich oft</em>."
      }
    ],
    grammar: {
      title: "Lesen and sehen in the present",
      note: "<b>e → ie</b> with <em>du</em> and <em>er/sie/es</em>. <b>Gerade</b> means “right now”.",
      table: {
        head: ["person", "lesen", "sehen"],
        rows: [
          ["ich", "lese", "sehe"],
          ["du", "liest", "siehst"],
          ["er / sie / es", "liest", "sieht"],
          ["wir", "lesen", "sehen"],
          ["ihr", "lest", "seht"],
          ["sie / Sie", "lesen", "sehen"]
        ]
      },
      examples: [
        { tr: "I am reading a book.", note: "present + gerade" },
        { tr: "What are you doing?", note: "gerade = at this moment" },
        { tr: "He is watching TV.", note: "fernsehen: fern at the end" },
        { tr: "At the moment I am writing a message.", note: "im Moment in first position: the verb follows" },
        { tr: "We are listening to a song." },
        { tr: "She is on the phone." }
      ]
    },
    vocab: [
      "right now, at the moment",
      "at the moment, right now",
      "to read",
      "to listen",
      "to write",
      "to phone, to call",
      "to watch TV",
      "to learn, to study",
      "the newspaper",
      "the cell phone",
      "the message",
      "the song"
    ],
    exercises: [
      {
        q: "How do you say “I am reading” (right now)?",
        opts: ["Ich lese gerade.", "Ich bin gerade lesend.", "Ich lesen gerade."],
        why: "You use the present with <b>gerade</b>: there is no “be + -ing” form."
      },
      {
        q: "What does “Was machst du gerade?” mean?",
        opts: ["What do you usually do?", "What are you doing right now?", "What did you do yesterday?"],
        why: "<i>Gerade</i> means “at this moment”."
      },
      {
        q: "Complete: “Du ___ gerade ein Buch.” (to read)",
        hint: "lesen, du",
        why: "<i>Lesen</i> changes <b>e → ie</b> with <i>du</i>: <b>liest</b>."
      },
      {
        q: "Complete: “Er ___ gerade fern.” (to watch TV, he)",
        hint: "fernsehen, er",
        why: "<i>Fernsehen</i> is separable and, like <i>sehen</i>, changes <b>e → ie</b>: <b>sieht</b>, with <i>fern</i> at the end."
      },
      {
        q: "Complete: “Wir ___ gerade ein Lied.” (to listen to)",
        hint: "hören, wir",
        why: "With <i>wir</i> the present of <i>hören</i> is <b>wir hören</b>: the form is the same as the infinitive."
      },
      {
        tr: "I am writing a message.",
        why: "<i>Ich schreibe gerade eine Nachricht</i>. <i>Gerade schreibe ich eine Nachricht</i> is also correct, but then the subject follows the verb."
      },
      {
        q: "Translate: “My brother is reading the newspaper.” (use gerade)",
        why: "<i>Mein Bruder liest gerade die Zeitung</i>: with <i>er</i> and <i>Bruder</i> the vowel changes, <i>liest</i>."
      },
      {
        q: "Complete the dialogue.",
        tr: "What are you doing right now? I am reading a book and my brother is watching TV.",
        why: "<i>Machst</i>, <i>lese</i>, <i>sieht ... fern</i>: no “be + -ing” form, just the present with <i>gerade</i>."
      },
      {
        tr: "I am reading, and my brother is watching television at the moment.",
        why: "In <i>sieht</i> the <b>ie</b> is a long <b>i</b> and the <b>h</b> is silent; in standard German the initial <b>s</b> is voiced, as in “zoo”."
      },
      {
        tr: "I am writing a message and listening to a song.",
        why: "In <i>höre</i> the <b>ö</b> is long, like French <i>eu</i> in “peu”. In <i>Nachricht</i> the first <b>ch</b> is hard [x], the second is soft [ç]."
      }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "An invitation",
    title: "Shall we go to the movies?",
    objectives: [
      "suggest, accept and decline an invitation",
      "use für, ohne, um, durch, gegen with the accusative",
      "link sentences with und, aber, oder, denn"
    ],
    theory: [
      {
        h: "Suggesting, accepting, declining",
        p: "To suggest: <em>Gehen wir ins Kino?</em> or <em>Hast du Lust?</em> To accept: <em>Ja, gern!</em>, <em>Gute Idee!</em> To decline politely: <em>Leider kann ich nicht</em> or <em>Tut mir leid</em>, then the reason with <em>denn</em>. <em>Ins</em> is <em>in das</em>: here it is a formula to learn as it stands."
      },
      {
        h: "Five prepositions with the accusative",
        p: "<strong>für</strong> (for), <strong>ohne</strong> (without), <strong>um</strong> (around; with clock times, at), <strong>durch</strong> (through), <strong>gegen</strong> (against) always take the <b>accusative</b>: only the masculine changes. <em>Die Karte ist für den Freund</em>, <em>Wir gehen durch den Park</em>. With pronouns: <em>für mich, für dich, ohne ihn, ohne sie</em>."
      },
      {
        contrast: "English shows case only on pronouns: “for him”, “without me”. German does the same with <em>ihn</em>, <em>mich</em>, but it also shows case on the masculine article of nouns, where English has nothing: <em>für den Freund</em>, <em>ohne meinen Bruder</em>. With feminine and neuter you see no difference: <em>für die Freundin</em>, <em>für das Kind</em>. “At eight” is <em>um acht Uhr</em>: English “at” does not give you <em>um</em>, so learn it with clock times."
      },
      {
        h: "Und, aber, oder, denn",
        p: "These four words link two clauses and <b>do not move the verb</b>: <em>Ich bin müde, aber ich gehe ins Kino</em>. After <em>und</em>, <em>oder</em> and <em>aber</em> a shared subject can be left out: <em>Ich gehe ins Kino und sehe einen Film</em>. After <em>denn</em> the subject is always repeated."
      },
      {
        trap: "English “because” is one word: “I'm not coming because I have to work.” In German, to give a reason, <em>denn</em> keeps the verb in second place: <em>Ich komme nicht, denn ich muss arbeiten</em>. These are wrong: <em>denn ich arbeiten muss</em> (verb at the end) and <em>denn muss ich arbeiten</em> (verb first); with another element up front the verb is still second: <em>denn morgen muss ich arbeiten</em>. The other word for “because”, <em>weil</em>, sends the verb to the end: it comes later. Also watch <em>gegen</em>: it means “against”, but with clock times also “around” (<em>gegen acht Uhr</em>, around eight)."
      },
      {
        tip: "To decline politely: <em>Leider</em> + a reason with <em>denn</em>. Before <em>aber</em> and <em>denn</em> the comma is required."
      }
    ],
    grammar: {
      title: "Prepositions with the accusative and connectors",
      note: "<b>für, ohne, um, durch, gegen</b> + accusative; <b>und, aber, oder, denn</b> do not move the verb.",
      table: {
        head: ["preposition", "meaning", "example"],
        rows: [
          ["für", "for", "Die Karte ist für dich."],
          ["ohne", "without", "Ich trinke Kaffee ohne Zucker."],
          ["um", "around; at (clock times)", "Der Film beginnt um acht Uhr."],
          ["durch", "through", "Wir gehen durch den Park."],
          ["gegen", "against", "Ich bin gegen den Plan."]
        ]
      },
      examples: [
        { tr: "Shall we go to the movies?", note: "ins = in das" },
        { tr: "The ticket is for you.", note: "für + accusative" },
        { tr: "I drink coffee without sugar.", note: "ohne + uncountable noun: here Zucker means the substance in general, so normally no article" },
        { tr: "The movie starts at eight.", note: "um with clock times" },
        { tr: "We are walking through the park, but it is raining.", note: "aber does not move the verb" },
        { tr: "I'm not coming, because I have to work.", note: "denn does not move the verb: it stays in second position" }
      ]
    },
    vocab: [
      "the movie theater, the cinema",
      "the ticket (also: the card, the postcard)",
      "the idea",
      "the suggestion",
      "the desire, the feeling like it",
      "unfortunately",
      "for",
      "without",
      "around; at (with clock times)",
      "through",
      "against",
      "because (gives the reason)"
    ],
    exercises: [
      {
        q: "How do you suggest going to the movies to a friend?",
        opts: ["Gehen wir ins Kino?", "Wir ins Kino gehen?", "Gehen wir an Kino?"],
        why: "A suggestion is a question with the verb first: <i>Gehen wir ...?</i> <i>Ins</i> is <i>in das</i>."
      },
      {
        q: "How do you decline and give the reason?",
        opts: ["Leider nicht, denn muss ich arbeiten.", "Leider nicht, denn ich arbeiten muss.", "Leider nicht, denn ich muss arbeiten."],
        why: "<b>Denn</b> does not take a position in the clause that follows: the conjugated verb stays in second position, as in <i>denn ich muss arbeiten</i> (but also <i>denn morgen muss ich arbeiten</i>). The other two options put the verb at the end or in first place."
      },
      {
        q: "Complete: “Die Karte ist ___ dich.” (for)",
        hint: "for + accusative",
        why: "<b>Für</b> takes the accusative: <i>für dich</i>."
      },
      {
        q: "Complete: “Ich trinke Kaffee ___ Zucker.” (without)",
        hint: "without",
        why: "<b>Ohne</b> + accusative; with an uncountable noun like <i>Zucker</i> the article is usually missing."
      },
      {
        q: "Match each preposition with its meaning.",
        pairs: ["for", "without", "through", "against"]
      },
      {
        tr: "We are going through the park.",
        why: "<i>Wir gehen durch den Park</i>: <i>durch</i> + accusative, <i>den</i>. <i>Durch den Park gehen wir</i> works too."
      },
      {
        q: "Translate: “I'm not coming, because I have to work.” (use denn)",
        why: "<i>Ich komme nicht, denn ich muss arbeiten</i>: after <i>denn</i> the conjugated verb stays in second position."
      },
      {
        q: "Complete the dialogue.",
        tr: "Shall we go to the movies? Unfortunately I can't, because I have to work. But I have time tomorrow.",
        why: "<i>Ins</i> is <i>in das</i>; <i>denn</i> gives the reason and does not move the verb; <i>ich habe Zeit</i> uses <i>haben</i>."
      },
      {
        tr: "Shall we go to the movies? Unfortunately I can't, because I have to work.",
        why: "In <i>leider</i> the <b>ei</b> sounds like “eye” and the <b>d</b> is voiced; in <i>Kino</i> the first <b>i</b> is long."
      },
      {
        tr: "Good idea! Shall we go to the movies at eight?",
        why: "In <i>Uhr</i> the <b>h</b> is silent and the <b>u</b> is long; in <i>Idee</i> the <b>ee</b> is a long <b>e</b>."
      }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Review",
    title: "Unit 9 review",
    objectives: ["check es, gerade, prepositions with the accusative and connectors"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Do not look back at the lessons while you answer: if you cannot remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: “Im Winter schneit ___ oft.” (In winter it often snows.)",
        hint: "the subject of weather sentences",
        why: "<b>Es</b> is the subject and is not left out."
      },
      {
        q: "Complete: “Die Karte ist ___ meinen Bruder.” (for)",
        hint: "for + accusative",
        why: "<b>Für</b> + accusative: <i>meinen Bruder</i>."
      },
      {
        q: "Complete: “Ich komme nicht, ___ ich muss arbeiten.” (because)",
        hint: "gives the reason, the verb stays in second position",
        why: "<b>Denn</b> does not move the verb."
      },
      {
        q: "Complete: “Wir gehen ___ den Park.” (through)",
        hint: "through",
        why: "<b>Durch</b> + accusative: <i>den Park</i>."
      },
      {
        q: "Which sentence says “I am reading right now”?",
        opts: ["Ich bin lesen.", "Ich lesen gerade.", "Ich lese gerade."],
        why: "Present with <b>gerade</b>: <i>ich lese gerade</i>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Er geht ohne ich ins Kino.", "Er geht ohne mich ins Kino.", "Er geht ohne mir ins Kino."],
        why: "<i>Ohne</i> takes the accusative: <b>mich</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Ich bleibe zu Hause, denn ich bin müde.", "Ich bleibe zu Hause, denn ich müde bin.", "Ich bleibe zu Hause, denn bin ich müde."],
        why: "<i>Denn</i> does not take a position: the conjugated verb stays in second position, as in <i>denn ich bin müde</i> (but also <i>denn heute bin ich müde</i>). The other two options put the verb at the end or in first place."
      },
      {
        tr: "On Saturday we are going to the movies.",
        why: "<i>Am Samstag gehen wir ins Kino</i>: verb in second position. <i>Wir gehen am Samstag ins Kino</i> works too."
      },
      {
        tr: "It's raining and it's cold, but I'm going to the movies.",
        why: "In <i>regnet</i> both the <b>g</b> and the <b>n</b> are pronounced; in <i>Kino</i> the first <b>i</b> is long."
      },
      {
        tr: "Unfortunately I can't, because I have to work at eight.",
        why: "In <i>muss</i> the <b>ss</b> is a voiceless <b>s</b> and the <b>u</b> is short; <i>arbeiten</i> is the infinitive at the end of the clause."
      }
    ]
  },
  "unit:a1-u10": {
    title: "My weekend",
    grammarNote: "Perfekt with haben and with sein · regular, strong and separable past participles · war and hatte as set phrases · A1 review"
  },
  "lesson:a1-u10-l1": {
    theme: "The spoken past",
    title: "I ate, I saw",
    objectives: [
      "form the Perfekt with haben and the past participle",
      "recognize the regular participle (ge- ... -t) and the strong one (ge- ... -en)",
      "say what you did yesterday or on the weekend"
    ],
    theory: [
      {
        h: "The Perfekt: the past of everyday speech",
        p: "When you talk about something that happened, out loud, you use the <strong>Perfekt</strong>: <strong>haben</strong> in second position and the <strong>past participle</strong> at the end of the clause. <em>Ich habe gegessen</em> (“I ate”), <em>Gestern habe ich einen Film gesehen</em> (“Yesterday I saw a movie”). The participle of regular verbs is <em>ge- + stem + -t</em> (<em>machen, gemacht</em>), that of strong verbs is <em>ge- + stem + -en</em> (<em>essen, gegessen</em>)."
      },
      {
        contrast: "The form looks like the English present perfect (“I have eaten”), but the use is different. In speech, German uses the Perfekt where English normally uses the simple past: <em>Gestern habe ich einen Film gesehen</em> is “Yesterday I saw a movie”, not “Yesterday I have seen a movie”. So when you want “I ate” or “I saw” in conversation, reach for the Perfekt. The participle never changes with the subject or the object, as in English: <em>Ich habe sie gesehen</em>, <em>Wir haben sie gesehen</em>."
      },
      {
        trap: "In English the participle sits right after “have” and the rest follows: “I have seen a movie”. In German the participle goes <strong>at the very end</strong>, after everything else: <em>Ich habe gestern einen Film <strong>gesehen</strong></em>, not “Ich habe gesehen gestern einen Film”. You cannot always guess a strong participle from the infinitive, the way English “drink, drank, drunk” cannot be guessed either: learn it with the infinitive (<em>trinken, getrunken</em>; <em>lesen, gelesen</em>)."
      },
      {
        tip: "Verbs with an inseparable prefix (<em>be-, ver-, er-, ent-</em>) and verbs ending in <em>-ieren</em> take no <em>ge-</em>: <em>besuchen, besucht</em>; <em>studieren, studiert</em>. Questions work the same way: <em>Hast du am Samstag gekocht?</em> The conjugated verb opens the question and the participle closes it. No do-support, no “did”."
      }
    ],
    grammar: {
      title: "Perfekt with haben",
      note: "<b>haben</b> in second position + <b>past participle</b> at the end. Regular: ge- ... -t; strong: ge- ... -en; no ge- after be-, ver-, er- and with -ieren.",
      table: {
        head: ["type", "infinitive", "past participle"],
        rows: [
          ["regular: ge- ... -t", "machen, kaufen, kochen", "gemacht, gekauft, gekocht"],
          ["strong: ge- ... -en", "essen, sehen, trinken", "gegessen, gesehen, getrunken"],
          ["strong: ge- ... -en", "lesen, schlafen, treffen", "gelesen, geschlafen, getroffen"],
          ["no ge-", "besuchen, studieren", "besucht, studiert"]
        ]
      },
      examples: [
        { tr: "Yesterday I saw a movie.", note: "participle at the end of the clause" },
        { tr: "I ate pizza.", note: "essen is strong: gegessen" },
        { tr: "We drank coffee.", note: "haben with wir: haben" },
        { tr: "He bought a book.", note: "kaufen is regular: gekauft" },
        { tr: "Did you cook on Saturday?", note: "question: haben comes first" },
        { tr: "On Sunday I visited my grandmother.", note: "besuchen: no ge-" }
      ]
    },
    vocab: [
      "yesterday",
      "the day before yesterday",
      "to see",
      "to do, to make (also: what did you do?)",
      "to buy",
      "to drink",
      "to eat",
      "to read",
      "to sleep",
      "to visit, to go and see",
      "to meet",
      "dinner"
    ],
    exercises: [
      {
        q: "How do you say “I ate”?",
        opts: ["Ich habe gegessen.", "Ich habe essen.", "Ich bin gegessen."],
        why: "<i>Essen</i> takes <b>haben</b> and the strong participle <b>gegessen</b> at the end of the clause."
      },
      {
        q: "Complete: “Gestern habe ich einen Film ___.” (to see)",
        hint: "past participle of sehen",
        why: "<i>Sehen</i> is a strong verb: <b>gesehen</b>. The <i>h</i> is silent."
      },
      {
        q: "Complete: “Wir ___ am Samstag Pizza gegessen.” (On Saturday we ate pizza.)",
        hint: "auxiliary, first person plural",
        why: "With <i>essen</i> the auxiliary is <b>haben</b>; with <i>wir</i> it has the same form as the infinitive."
      },
      {
        q: "Complete: “Er hat ein Buch ___.” (to buy)",
        hint: "kaufen, past participle",
        why: "<i>Kaufen</i> is regular: ge- + stem + -t, so <b>gekauft</b>."
      },
      {
        q: "Complete: “Hast du gestern Kaffee ___?” (to drink)",
        hint: "trinken, past participle",
        why: "<i>Trinken</i> is strong: <b>getrunken</b>."
      },
      {
        q: "Match each participle with its meaning.",
        pairs: ["seen", "eaten", "bought", "drunk"]
      },
      {
        q: "Translate: “Yesterday I saw a movie.”",
        why: "<i>Gestern habe ich einen Film gesehen</i>: after <i>gestern</i> the conjugated verb stays in second position and the subject follows it. <i>Ich habe gestern einen Film gesehen</i> is fine too."
      },
      {
        q: "Complete the sentence.",
        tr: "Yesterday I ate pizza and drank wine.",
        why: "<i>Habe</i> is in second position; the two participles, <i>gegessen</i> and <i>getrunken</i>, close the sentence. The auxiliary is not repeated."
      },
      {
        tr: "Yesterday I saw a movie and ate pizza.",
        why: "In <i>gesehen</i> the <b>h</b> is silent and makes the <b>e</b> long; in <i>gegessen</i> the <b>ss</b> is a voiceless <b>s</b> and <i>ge-</i> is unstressed."
      },
      {
        tr: "On Saturday I drank a coffee and read a book.",
        why: "In <i>Kaffee</i> the double <b>ff</b> tells you the <b>a</b> is short; in <i>Buch</i> the <b>ch</b> after <b>u</b> is [x], a rasp in the throat like Scottish “loch”."
      }
    ]
  },
  "lesson:a1-u10-l2": {
    theme: "Sein or haben",
    title: "I went, I got up",
    objectives: [
      "choose sein or haben as the Perfekt auxiliary",
      "form the participle of separable verbs",
      "talk about a short trip and about your day"
    ],
    theory: [
      {
        h: "The Perfekt with sein",
        p: "With intransitive verbs of <strong>change of place or state</strong> the auxiliary is <strong>sein</strong>: <em>fahren, gehen, kommen, fliegen, aufstehen</em>. The same goes for <em>sein, bleiben, werden, passieren</em>. <em>Ich bin nach Berlin gefahren. Wir sind früh aufgestanden. Sie ist zu Hause geblieben.</em> With most other verbs you use <em>haben</em>."
      },
      {
        p: "In separable verbs the participle is one word and <em>ge-</em> goes <strong>in the middle</strong>, between the prefix and the verb: <em>aufstehen → aufgestanden, ankommen → angekommen, einkaufen → eingekauft, anrufen → angerufen</em>. The prefix no longer splits off: <em>Ich bin um sieben Uhr aufgestanden</em>, whereas the present is <em>Ich stehe um sieben Uhr auf</em>."
      },
      {
        contrast: "English has only one auxiliary for the perfect, “have”, for every verb: “I have gone”, “I have stayed”, “I have eaten”. German splits the verbs in two groups, and the group with <em>sein</em> is the one you have to remember: <em>Ich bin gegangen</em>, not “Ich habe gegangen”. Think of verbs that say you moved or changed, and check each verb as you learn it: English gives you no hint, because it uses “have” for all of them."
      },
      {
        trap: "A verb of motion used with a direct object in the accusative usually takes <strong>haben</strong>: <em>Ich habe das Auto gefahren</em> (“I drove the car”). A prepositional phrase does not force haben: <em>Ich bin mit dem Bus gefahren</em>, <em>Ich bin nach Wien geflogen</em>. And watch the spelling: English “got up” is two words, but the German participle is one word, <em>aufgestanden</em>, with <em>ge-</em> inserted after <em>auf-</em>."
      },
      {
        tip: "If a verb has a separable prefix and a regular participle, the final <em>-t</em> stays: <em>aufräumen → aufgeräumt</em>, <em>einkaufen → eingekauft</em>. Verbs with an inseparable prefix or in <em>-ieren</em> take no <em>ge-</em>: <em>besucht, studiert</em>."
      }
    ],
    grammar: {
      title: "Perfekt with sein and the separable participle",
      note: "<b>sein</b> with change of place or state; in separable verbs ge- goes between the prefix and the verb: auf<b>ge</b>standen.",
      table: {
        head: ["verb", "auxiliary", "past participle"],
        rows: [
          ["fahren, gehen, kommen", "sein", "gefahren, gegangen, gekommen"],
          ["fliegen, reisen, bleiben", "sein", "geflogen, gereist, geblieben"],
          ["aufstehen, ankommen", "sein", "aufgestanden, angekommen"],
          ["einkaufen, anrufen", "haben", "eingekauft, angerufen"],
          ["aufräumen, fernsehen", "haben", "aufgeräumt, ferngesehen"]
        ]
      },
      examples: [
        { tr: "I went to Berlin.", note: "change of place: sein" },
        { tr: "We got up early.", note: "aufstehen: aufgestanden, no pronoun" },
        { tr: "She stayed at home.", note: "bleiben: sein" },
        { tr: "He arrived at eight.", note: "ankommen: angekommen" },
        { tr: "Yesterday I went shopping.", note: "einkaufen: haben, not a change of place" },
        { tr: "Did you call your mother?", note: "anrufen: angerufen with haben" }
      ]
    },
    vocab: [
      "to go by vehicle, to drive",
      "to go (on foot, in general)",
      "to come",
      "to fly, to go by plane",
      "to stay",
      "to travel",
      "to get up",
      "to arrive",
      "to go shopping",
      "to call, to phone",
      "to tidy up",
      "the trip"
    ],
    exercises: [
      {
        q: "How do you say “I went to Berlin by train”?",
        opts: [
          "Ich bin mit dem Zug nach Berlin gefahren.",
          "Ich habe mit dem Zug nach Berlin gefahren.",
          "Ich bin mit dem Zug nach Berlin fahren."
        ],
        why: "<i>Fahren</i> expresses a change of place: auxiliary <b>sein</b> and participle <b>gefahren</b> at the end of the clause."
      },
      {
        q: "How do you say “I stayed at home”?",
        opts: ["Ich habe zu Hause geblieben.", "Ich bin zu Hause geblieben.", "Ich bin zu Hause gebleibt."],
        why: "<i>Bleiben</i> takes <b>sein</b> and has the strong participle <b>geblieben</b>."
      },
      {
        q: "How do you say “Yesterday I went shopping”?",
        opts: ["Ich habe gestern eingekauft.", "Ich habe gestern geeinkauft.", "Ich bin gestern eingekauft."],
        why: "<i>Einkaufen</i> is separable: <b>ein-ge-kauft</b>, with <i>haben</i>, because shopping is not a change of place."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Sie ist um sieben Uhr aufgestanden.",
          "Ich habe gestern meine Mutter angerufen.",
          "Wir haben nach Wien geflogen.",
          "Er ist zu Hause geblieben.",
          "Ich habe um sieben aufgestehen."
        ],
        why: "Sentence 3 needs <i>sein</i> (<i>Wir sind nach Wien geflogen</i>); sentence 5 has two mistakes: the auxiliary and the participle. Correct: <i>Ich bin um sieben aufgestanden</i> (<i>sein</i> and <i>aufgestanden</i>, not “habe” and “aufgestehen”)."
      },
      {
        q: "Complete: “Ich ___ gestern früh aufgestanden.” (Yesterday I got up early.)",
        hint: "auxiliary, first person singular",
        why: "<i>Aufstehen</i> is a change of state: auxiliary <b>sein</b>, so <i>ich bin</i>."
      },
      {
        q: "Complete: “Wir sind um acht Uhr ___.” (to arrive, ankommen)",
        hint: "ankommen: ge- goes in the middle",
        why: "<b>angekommen</b>: <i>an</i> + <i>ge</i> + <i>kommen</i>."
      },
      {
        tr: "We went to Berlin.",
        why: "<i>Wir sind nach Berlin gefahren</i>: <i>sein</i> in second position, participle at the end. <i>Nach Berlin sind wir gefahren</i> is fine too."
      },
      {
        q: "Complete the sentence.",
        tr: "On Saturday we went to Vienna by train and on Sunday we stayed at home.",
        why: "With <i>fahren</i> and <i>bleiben</i> the auxiliary is <b>sein</b>; <i>gefahren</i> closes the first part, <i>geblieben</i> the second."
      },
      {
        tr: "I got up at seven and drank a coffee.",
        why: "In <i>aufgestanden</i> the stress falls on <b>auf</b>; in <i>Uhr</i> the <b>h</b> is silent and makes the <b>u</b> long."
      },
      {
        tr: "We arrived in Vienna in the evening.",
        why: "In <i>Wien</i> the <b>W</b> sounds like English “v” and <b>ie</b> is a long <b>i</b>; <i>angekommen</i> is stressed on <b>an</b>."
      }
    ]
  },
  "lesson:a1-u10-l3": {
    theme: "The weekend",
    title: "My weekend",
    objectives: [
      "tell about your weekend in order with zuerst, dann, danach, später",
      "keep the verb in second position after time connectors",
      "use war and hatte only as set phrases: Es war schön, Ich hatte Glück"
    ],
    theory: [
      {
        h: "Telling it in order",
        p: "To tell about your weekend, line up the actions with <strong>zuerst</strong> (first), <strong>dann</strong> (then), <strong>danach</strong> (afterwards) and <strong>später</strong> (later). Each action is a Perfekt: <em>Zuerst habe ich lange geschlafen. Dann habe ich gekocht. Danach sind wir ins Kino gegangen.</em> These adverbs open the sentence and take the first position."
      },
      {
        contrast: "In English “then” can sit in front of the subject without any change: “Then I cooked”. In German the conjugated verb stays in <strong>second position</strong> and the subject moves behind it: <em>Dann habe ich gekocht</em>, never “Dann ich habe gekocht”. This holds for every statement that opens with something other than the subject. And the subject cannot be dropped: <em>habe gekocht</em> on its own is not a sentence."
      },
      {
        trap: "For “was” and “had” in speech you will see <strong>war</strong> and <strong>hatte</strong>, which for now you learn as set phrases: <em>Es war schön. Wie war dein Wochenende? Ich hatte Glück.</em> You do not need to do the same with other verbs: for those, keep using the Perfekt. In English “How was your weekend?” and “I had a good time” are simple past, so these set phrases will feel natural."
      },
      {
        tip: "You can join two actions with <em>und</em> or <em>aber</em> without changing the structure: <em>Ich habe gekocht, und wir haben gegessen.</em> To say when, put <em>am Samstag</em> or <em>am Sonntag</em> in front: the verb stays second."
      }
    ],
    grammar: {
      title: "The story: connectors and the verb in second position",
      note: "After <b>zuerst, dann, danach, später</b> the conjugated verb stays in second position and the subject follows it; the participle closes the sentence.",
      table: {
        head: ["English", "German", "example"],
        rows: [
          ["first, first of all", "zuerst", "Zuerst habe ich geschlafen."],
          ["then", "dann", "Dann habe ich gekocht."],
          ["afterwards", "danach", "Danach sind wir ins Kino gegangen."],
          ["later", "später", "Später habe ich gelesen."],
          ["how was it?", "Wie war ...?", "Wie war dein Wochenende?"]
        ]
      },
      examples: [
        { tr: "How was your weekend?", note: "war: set phrase" },
        { tr: "First of all I slept for a long time.", note: "zuerst in first position, then habe and ich" },
        { tr: "Then I cooked for my friends.", note: "dann + verb + subject" },
        { tr: "Afterwards we went to the movies.", note: "gehen: sein" },
        { tr: "Later I went for a walk.", note: "einen Spaziergang machen" },
        { tr: "It was wonderful and I was lucky.", note: "war and hatte as set phrases" }
      ]
    },
    vocab: [
      "first, first of all",
      "then",
      "afterwards",
      "later",
      "the party",
      "the walk",
      "the museum",
      "the gift",
      "fantastic, wonderful",
      "It was nice.",
      "How was your weekend?",
      "I was lucky."
    ],
    exercises: [
      {
        q: "How do you ask a friend how the weekend was?",
        opts: ["Wie war dein Wochenende?", "Wie hat dein Wochenende?", "Wie bist dein Wochenende?"],
        why: "For “was” you use <b>war</b>: <i>Wie war dein Wochenende?</i> Learn it as a set phrase."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Dann ich habe einen Film gesehen.", "Dann habe ich einen Film gesehen.", "Dann habe einen Film gesehen ich."],
        why: "After <i>dann</i> the conjugated verb stays in second position and the subject follows it: <i>Dann habe ich ...</i>; the participle closes the sentence."
      },
      {
        q: "Complete: “Zuerst habe ich geschlafen, ___ habe ich gekocht.” (then, use dann)",
        hint: "use dann",
        why: "<b>Dann</b> opens the second sentence: verb and subject swap places, <i>habe ich</i>."
      },
      {
        q: "Complete: “Wie ___ dein Wochenende?” (How was your weekend?)",
        hint: "was: the set form",
        why: "<b>war</b> is the set phrase for “was”: <i>Wie war dein Wochenende?</i>"
      },
      {
        tr: "Afterwards I read a book.",
        why: "<i>Danach habe ich ein Buch gelesen</i>: after <i>danach</i> verb and subject swap places. <i>Ich habe danach ein Buch gelesen</i> is fine too."
      },
      {
        q: "Translate: “Then I cooked for my friends.” (use dann)",
        why: "<i>Dann habe ich für meine Freunde gekocht</i>: <i>für</i> takes the accusative. <i>Ich habe dann für meine Freunde gekocht</i> is fine too."
      },
      {
        q: "Complete the sentence.",
        tr: "On Saturday I slept for a long time. Then I went for a walk.",
        why: "Perfekt with <b>haben</b>: <i>habe geschlafen</i>, <i>habe ... gemacht</i>. After <i>danach</i> the subject follows the verb: <i>habe ich</i>."
      },
      {
        q: "Complete the dialogue.",
        setting: "You are talking with a friend about the weekend.",
        lines: [
          { tr: "Hi! How was your weekend?" },
          { tr: "Say it was nice and that you met friends.", answerTr: "It was nice! I met friends." },
          { tr: "And on Sunday, what did you do?" },
          { tr: "Say that you stayed at home.", answerTr: "I stayed at home." }
        ]
      },
      {
        tr: "On Saturday I met friends, then we went to the movies.",
        why: "In <i>getroffen</i> the double <b>ff</b> usually marks a short vowel; in <i>Kino</i> the first <b>i</b> is long."
      },
      {
        tr: "It was fantastic! I danced and met friends.",
        why: "In <i>getanzt</i> the <b>z</b> sounds like [ts], as in “pizza”; in <i>Freunde</i> the <b>eu</b> sounds like “oy” in “boy”."
      }
    ]
  },
  "lesson:a1-u10-l4": {
    theme: "Review",
    title: "A1 review",
    objectives: [
      "review the present tense, the accusative and prepositions with the dative",
      "use the present and the Perfekt together in a few sentences",
      "talk about a short trip to a hotel"
    ],
    theory: [
      {
        h: "Review: three things to get right",
        p: "<strong>1.</strong> The conjugated verb stays in second position, and some strong verbs change their vowel with <em>du</em> and <em>er/sie/es</em>: <em>ich esse, du isst, er isst</em> (but <em>kommen, gehen, trinken</em> do not change). <strong>2.</strong> In the accusative only the masculine changes: <em>der Koffer → den Koffer</em>, <em>ein Koffer → einen Koffer</em>. <strong>3.</strong> After <em>mit, zu, bei, aus, von</em> you use the dative: <em>mit dem Zug, zum Strand</em> (zu dem), <em>aus Italien</em>."
      },
      {
        contrast: "In English you travel “by train” and “by bus”, and German says it with <strong>mit</strong> and the dative: <em>mit dem Zug, mit dem Bus</em>. Another trap is English “at” and “to” with a person. <em>Bei</em> + dative means “at someone’s place” (<em>Ich bin bei meiner Tante</em>, “I’m at my aunt’s”), while going to someone takes <em>zu</em> + dative (<em>Ich gehe zu meiner Tante</em>, “I’m going to my aunt’s”). English “from” splits too: <em>aus</em> for origin (<em>Ich komme aus Italien</em>), <em>von</em> for a starting point."
      },
      {
        trap: "English nouns have no case, so the masculine <em>den</em> will not show up unless you look for it. In the feminine and the neuter the accusative looks the same as the nominative: <em>die Fahrkarte</em>, <em>das Zimmer</em>. So <em>Ich nehme den Koffer</em> but <em>Ich nehme die Fahrkarte</em>. If you get the gender of a noun wrong, the article is wrong too: always review the noun with its article."
      },
      {
        tip: "To remember the prepositions: <em>mit, zu, bei, aus, von</em> take the dative; <em>für, ohne, durch, um, gegen</em> take the accusative. Both lists are fixed, you do not have to choose each time."
      }
    ],
    grammar: {
      title: "Review: present, accusative, dative",
      note: "Verb in second position; accusative: only the masculine changes (<b>den</b>); after <b>mit, zu, bei, aus, von</b> the dative.",
      table: {
        head: ["what", "rule", "example"],
        rows: [
          ["present tense", "verb in second position", "Ich fahre mit dem Zug."],
          ["some strong verbs", "vowel changes with du and er/sie/es", "Du isst, er sieht."],
          ["accusative", "der → den, ein → einen", "Wir nehmen den Koffer."],
          ["dative with mit, zu, bei, aus, von", "dem, der, dem; zum, zur", "Wir gehen zum Hotel."],
          ["Perfekt", "haben or sein + participle at the end", "Gestern bin ich früh aufgestanden."]
        ]
      },
      examples: [
        { tr: "I go to the beach by train.", note: "mit dem Zug, zum Strand" },
        { tr: "We take the suitcase and the ticket.", note: "accusative: den Koffer, die Fahrkarte" },
        { tr: "I come from Italy and I am staying at my aunt’s.", note: "aus, bei + dative" },
        { tr: "He watches a movie and eats a pizza.", note: "sehen and essen change the vowel" },
        { tr: "In the evening we go to the hotel.", note: "zum = zu dem" },
        { tr: "Yesterday I got up early.", note: "Perfekt with sein" }
      ]
    },
    vocab: [
      "the trip",
      "the suitcase",
      "the (travel) ticket",
      "the hotel",
      "the room",
      "the vacation",
      "the sea",
      "the beach"
    ],
    exercises: [
      {
        tr: "The present of sein, all persons.",
        why: "<i>Bin, bist, ist, sind, seid, sind</i>: irregular forms to learn by heart. <i>Wir</i> and <i>sie/Sie</i> have the same form."
      },
      {
        tr: "The present of essen, all persons.",
        why: "<i>Essen</i> changes its vowel with <i>du</i> and <i>er</i>: <b>isst</b> for both. <i>Ich esse, wir essen, ihr esst, sie essen</i>."
      },
      {
        tr: "The present of fahren, all persons.",
        why: "<i>Fahren</i> takes an umlaut with <i>du</i> and <i>er</i>: <b>fährst</b>, <b>fährt</b>."
      },
      {
        q: "Complete: “Wir fahren ___ dem Zug nach Wien.” (by)",
        hint: "means of transport",
        why: "<b>Mit</b> + dative: <i>mit dem Zug</i>."
      },
      {
        q: "Complete: “Ich nehme ___ Koffer.” (definite article, accusative)",
        hint: "Koffer is masculine",
        why: "In the accusative the masculine changes: <b>den</b> Koffer."
      },
      {
        q: "Complete: “Ich gehe ___ Bahnhof.” (to, with the contracted article)",
        hint: "zu + dem",
        why: "<b>Zum</b> = <i>zu dem</i>."
      },
      {
        q: "Complete: “Er kommt ___ Italien.” (from)",
        hint: "origin",
        why: "For origin you use <b>aus</b> + dative."
      },
      {
        q: "Complete the sentence.",
        tr: "Yesterday I got up early and drank a coffee.",
        why: "<i>Aufstehen</i> takes <b>sein</b> (<i>ich bin aufgestanden</i>); <i>trinken</i> takes <b>haben</b> (<i>ich habe getrunken</i>)."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["suitcase", "trip", "hotel", "room", "beach", "ticket"]
      },
      {
        tr: "We go to the beach by train.",
        why: "<i>Wir fahren mit dem Zug zum Strand</i>: <i>mit</i> + dative, <i>zu dem</i> contracts to <i>zum</i>. Other positions of the phrase are possible, because the verb stays second."
      },
      {
        tr: "I go to the beach by train and take my suitcase.",
        why: "In <i>Strand</i> the initial <b>st</b> sounds like [ʃt], “sh” followed by a t; in <i>Koffer</i> the double <b>ff</b> usually marks a short vowel."
      },
      {
        tr: "We have a room in the hotel and tomorrow we are going to the sea.",
        why: "In <i>Zimmer</i> the <b>Z</b> sounds like [ts], as in “cats”; in <i>Meer</i> the <b>ee</b> is a long <b>e</b>."
      }
    ]
  },
  "lesson:a1-u10-test": {
    theme: "Test",
    title: "A1 final exam",
    objectives: ["check the present, the Perfekt with haben and with sein, the accusative, the dative and noun gender"],
    theory: [
      {
        p: "Twelve questions on the whole of A1. You pass with 70%. Do not look back at the lessons while you answer: if you do not remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: “Ich ___ gestern Fußball gespielt.” (Yesterday I played soccer.)",
        hint: "auxiliary, first person singular",
        why: "<i>Spielen</i> takes <b>haben</b>: <i>ich habe gespielt</i>."
      },
      {
        q: "Complete: “Am Samstag ___ wir nach Wien gefahren.” (On Saturday we went to Vienna.)",
        hint: "auxiliary, first person plural",
        why: "<i>Fahren</i> with a destination expresses a change of place: <b>sind</b>."
      },
      {
        q: "Complete: “Wir haben einen Film ___.” (to see)",
        hint: "past participle of sehen",
        why: "<i>Sehen</i> is strong: <b>gesehen</b>."
      },
      {
        q: "Complete: “Ich nehme ___ Kaffee.” (definite article, accusative)",
        hint: "Kaffee is masculine",
        why: "In the accusative the masculine changes: <b>den</b> Kaffee."
      },
      {
        q: "Complete: “Ich fahre ___ dem Bus.” (by)",
        hint: "means of transport",
        why: "<b>Mit</b> + dative."
      },
      {
        q: "Complete: “Sie ist früh ___.” (to get up, aufstehen)",
        hint: "ge- goes in the middle",
        why: "<b>aufgestanden</b>: <i>auf</i> + <i>ge</i> + <i>standen</i>, with <i>sein</i>."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Ich habe nach Berlin gefahren.", "Ich bin nach Berlin gefahren.", "Ich bin nach Berlin gefahrt."],
        why: "<i>Fahren</i> with a destination takes <b>sein</b> and has the strong participle <i>gefahren</i>."
      },
      {
        q: "What is the past participle of “besuchen”?",
        opts: ["gebesucht", "besucht", "besuchen"],
        why: "<i>Be-</i> is an inseparable prefix: no <i>ge-</i>. The participle is <b>besucht</b>."
      },
      {
        q: "Choose the right definite article for each noun.",
        items: ["movie", "weekend", "party", "walk", "museum", "ticket"]
      },
      {
        tr: "The Perfekt of gehen: auxiliary and participle.",
        why: "<i>Ich bin gegangen, du bist gegangen, er ist gegangen, wir sind gegangen</i>: <i>gehen</i> takes <b>sein</b>."
      },
      {
        q: "Complete the sentence (for the first part, use zuerst).",
        tr: "First I met friends. Then we went to the movies.",
        why: "<i>Zuerst</i> opens the sentence; <i>habe ich ... getroffen</i> with haben; <i>sind wir ... gegangen</i> with sein."
      },
      {
        tr: "On the weekend I went to Vienna and visited a museum.",
        why: "In <i>Museum</i> the stress falls on <b>se</b> and the <b>s</b> is voiced; in <i>besucht</i> the <b>ch</b> after <b>u</b> is [x]."
      }
    ]
  }
});
