/* ============================================================
   Learner-language text (en) for data/core/a1-01.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a1-u01": {
    title: "At the café",
    grammarNote: "present tense · gender and plural · articles · du and Sie"
  },
  "lesson:a1-u01-l1": {
    theme: "Daily life",
    title: "Greetings and a first order",
    objectives: [
      "greet people and say goodbye according to the time of day",
      "order a coffee with the formula “einen Kaffee, bitte”",
      "conjugate heißen in the present and put the verb in second position"
    ],
    theory: [
      {
        h: "The greeting depends on the time of day, and German has several",
        p: "English splits the day in three too: <em>good morning</em>, <em>good afternoon</em>, <em>good evening</em>. German is close, but the middle one works differently: <strong>Guten Morgen</strong> in the morning, <strong>Guten Tag</strong> from late morning through the afternoon (and often as an all-day hello), <strong>Guten Abend</strong> when evening falls. The boundaries are fuzzy and vary from person to person. <strong>Gute Nacht</strong> is not a greeting on arrival: like “good night”, you say it when leaving late in the evening or going to bed."
      },
      {
        h: "Hallo and Tschüss: two words for casual hello and goodbye",
        p: "Between people who say <em>du</em> to each other you say <strong>Hallo</strong> when you meet and <strong>Tschüss</strong> when you part, much like “hi” and “bye”. With strangers and in formal settings you say <strong>Guten Tag</strong> on arriving and <strong>Auf Wiedersehen</strong> on leaving. In southern Germany and Austria you also hear <em>Servus</em> and <em>Grüß Gott</em>, in Switzerland <em>Grüezi</em>: you will understand them quickly, but <em>Guten Tag</em> works everywhere to begin with. Say <em>Tschüss</em> with the <em>tsch</em> of “church”, then a German <em>ü</em> (see below)."
      },
      {
        contrast: "English gets by with <em>hello</em> and <em>hi</em> in almost every situation, and <em>good afternoon</em> sounds rather formal. German <em>Guten Tag</em> is different: it is the neutral, everyday greeting in shops, offices and cafés, not a stiff one, so do not hear it as an old-fashioned “good day”. <em>Hallo</em> is the casual one, and in many formal situations <em>Guten Tag</em> is the safer choice."
      },
      {
        h: "The verb comes second",
        p: "In a German statement the conjugated verb takes the <strong>second position</strong>, whatever comes first: <em>Ich trinke Tee</em>, but also <em>Heute trinke ich Tee</em>, where the subject moves behind the verb. The first position can hold a single word or a group of words, but not two separate elements."
      },
      {
        contrast: "An ordinary English statement keeps the subject before the verb even after <em>today</em>: <em>Today I drink tea</em>. German keeps the verb second instead: <em>Heute trinke ich Tee</em>. Three more differences. German has no <em>do</em> in questions: <em>Trinkst du Tee?</em>, not “Do you drink tea?”. The present is a single form: <em>Ich trinke Tee</em> means both “I drink tea” and “I am drinking tea”, since there is no progressive. And the verb endings do more work than in English: <em>ich heiße</em>, <em>du heißt</em>, <em>wir heißen</em>. As in English, a statement needs a subject, and it need not be a pronoun: <em>Der Kaffee ist heiß</em>, “The coffee is hot”."
      },
      {
        h: "Pronunciation: six habits to adjust",
        list: [
          "<b>z</b> is <em>ts</em>, as at the end of “cats”, but also at the start of a word: <em>Zucker</em>, <em>zwei</em>; it is never the <em>z</em> of “zoo”",
          "<b>ei</b> sounds like English “eye” (<em>heißen</em> is “HY-ssen”, with the voiceless <em>s</em> of “hiss”), while <b>ie</b> is a long <em>ee</em> (<em>Wie</em> is “vee”)",
          "<b>w</b> sounds like the English <em>v</em> (<em>Wasser</em> is “VAHS-er”), while a <b>v</b> in native German words is often an <em>f</em> (<em>Vater</em>); and a <b>th</b> in a German word is just a <em>t</em>, with no English <em>th</em> sound",
          "a single <b>s</b> at the start of a word or syllable before a vowel is voiced, like the <em>z</em> in “zoo” (<em>Saft</em>, <em>Rose</em>), so <em>Sie</em> sounds like “zee”; at the end of a word it is voiceless (<em>Eis</em>), and <b>ß</b> and <b>ss</b> are voiceless like the <em>ss</em> of “mass”: <em>heißen</em>, <em>Tschüss</em>",
          "<b>ü</b> is said with the tongue of <em>ee</em> and the lips of <em>oo</em>: English has no such vowel",
          "<b>ch</b> after <em>i</em> and <em>e</em> is a soft hiss, like the <em>h</em> in “huge”, not a <em>k</em> and not a <em>sh</em>: <em>ich</em>, <em>Rechnung</em>"
        ]
      },
      {
        trap: "In Germany <strong>Kaffee</strong> (the drink) is normally stressed on the first syllable, KA-ffee, with a clear <em>e</em> at the end rather than the English “-ee”, while <strong>Café</strong> (the place) is stressed on the last syllable, like “caf-AY”. In some regional varieties, for example in Austria, <em>Kaffee</em> can also be stressed on the last syllable. The spelling is similar but they are two different words."
      },
      {
        tip: "<em>Einen Kaffee, bitte</em> is a complete formula: learn <em>einen Kaffee</em>, <em>einen Tee</em>, <em>ein Wasser</em>, <em>eine Cola</em> by heart. Why <em>einen</em> and not <em>ein</em> is explained in another unit (it is the accusative case). English has no grammatical gender, so you cannot guess these forms from the English words: for now just repeat the formula, which uses <em>einen</em> with masculine nouns (<em>der Kaffee</em>, <em>der Tee</em>)."
      }
    ],
    grammar: {
      title: "Present tense of heißen (to be called)",
      note: "Watch the <b>ß</b>: it looks like a capital B, but <em>heißen</em> has the same sound as a double s. The form <em>heißt</em> is the same for <em>du</em>, <em>er/sie/es</em> and <em>ihr</em>, so the pronoun tells you who is speaking.",
      table: {
        head: ["person", "form", "example"],
        rows: [
          ["ich", "heiße", "Ich heiße Anna."],
          ["du", "heißt", "Wie heißt du?"],
          ["er / sie / es", "heißt", "Er heißt Tom."],
          ["wir", "heißen", "Wir heißen Weber."],
          ["ihr", "heißt", "Wie heißt ihr?"],
          ["sie / Sie", "heißen", "Wie heißen Sie?"]
        ]
      },
      examples: [
        {
          tr: "Good day, a coffee please.",
          note: "“einen Kaffee” is learned as a block, see the tip above"
        },
        { tr: "My name is Anna.", note: "literally “I am called Anna”" },
        { tr: "What is your name?", note: "informal, literally “how are you called?”" },
        { tr: "What is your name?", note: "formal, see lesson 4" },
        { tr: "Today I drink tea.", note: "the verb stays in second place, the subject moves behind it" },
        { tr: "The café is small." }
      ]
    },
    vocab: [
      "good morning",
      "good day, hello (neutral, from late morning on)",
      "good evening",
      "good night (when leaving late in the evening or going to bed)",
      "hi, hello (informal)",
      "bye (informal)",
      "goodbye (formal)",
      "please, here you are, you're welcome",
      "thank you, thanks",
      "excuse me, sorry",
      "the coffee",
      "the tea",
      "the water",
      "the café, the coffee shop"
    ],
    dialogue: [
      "Hello! What would you like?",
      "Hello. A coffee, please.",
      "Gladly. Anything else?",
      "No, thank you. That's all.",
      "Here you are. Have a nice day!"
    ],
    culture: {
      title: "A German view: Café, Kaffeehaus and afternoon coffee",
      text: "<p>In a traditional German café you sit down at a table, the waiter comes to take your order, and you ask for the check at the table with <i>Zahlen, bitte</i> or <i>Die Rechnung, bitte</i>. That is a different rhythm from the American habit of ordering at a counter and leaving with a paper cup. Many places also have counter service, but sitting down for a while is the usual picture. You normally round the amount up and leave a little extra: the tip is called <i>Trinkgeld</i>.</p><p>If you order <i>einen Kaffee</i>, you usually get a regular cup of coffee, closer to American drip coffee than to an espresso, though the cup is often smaller; an espresso has to be asked for by name, <i>einen Espresso</i>. Do not count on free refills. The traditional moment is the afternoon, <i>Kaffee und Kuchen</i>, coffee and cake: a break between lunch and dinner that is still a living tradition, especially on Sundays and with family.</p><p>In Austria the Viennese <i>Kaffeehaus</i> has its own logic: you can stay for a long time over a single coffee, usually served with a glass of water, and read the newspaper. In Switzerland a regular coffee is often called <i>Café crème</i>.</p>"
    },
    exercises: [
      {
        q: "You walk into a café at 9 in the morning. What do you say?",
        opts: ["Guten Abend", "Guten Morgen", "Gute Nacht"],
        why: "<i>Guten Morgen</i> is for the morning. <i>Gute Nacht</i> is a parting phrase for late evening or bedtime."
      },
      {
        q: "Which statement has the verb in the right place?",
        opts: ["Ich Anna heiße.", "Heiße ich Anna.", "Ich heiße Anna."],
        why: "The conjugated verb is in second position, after the subject <b>ich</b>. <i>Heiße ich Anna?</i> would be a yes/no question."
      },
      {
        tr: "The whole conjugation, no peeking.",
        why: "<i>Heißen</i> is regular: stem <i>heiß-</i> plus an ending. For <i>du</i>, <i>er</i> and <i>ihr</i> the form is the same: <b>heißt</b>."
      },
      {
        q: "Complete: “Wie ___ du?” (What is your name?)",
        hint: "second person singular of heißen",
        why: "With <b>du</b> the ending is <i>-t</i>: <i>du heißt</i>. The <i>s</i> of the ending <i>-st</i> merges with the <i>ß</i> of the stem."
      },
      {
        q: "Translate: “Hello, a coffee, please.”",
        why: "You say <i>Einen Kaffee, bitte</i>: in this formula <i>bitte</i> comes at the end (it can also come before <i>einen Kaffee</i>), and <i>Kaffee</i> is capitalized, like every German noun."
      },
      {
        tr: "Hello, my name is Anna.",
        why: "After the comma a new main clause begins: subject <i>ich</i>, then the verb <i>heiße</i> in second position."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["thank you", "please / here you are", "excuse me", "goodbye"]
      },
      {
        tr: "Good evening, a tea, please.",
        why: "Watch <i>Abend</i>: the <b>b</b> is voiced, and the final <b>d</b> sounds like a <i>t</i>."
      },
      {
        tr: "Hello, a coffee, please.",
        why: "In Germany <i>Kaffee</i> is normally stressed on the first syllable: KA-ffee."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Basic grammar",
    title: "Gender and plural of nouns",
    objectives: [
      "see that German has three genders: der, die, das",
      "learn each noun together with its article and its plural",
      "count from 1 to 20"
    ],
    theory: [
      {
        h: "Three genders, and English has none",
        p: "In English every noun takes the same article, <em>the</em>. German has three: <strong>der</strong> (masculine), <strong>die</strong> (feminine), <strong>das</strong> (neuter). Every noun belongs to one of them, objects included: <em>der Tisch</em> (the table), <em>die Tasse</em> (the cup), <em>das Buch</em> (the book). You see the difference as soon as you replace the noun with a pronoun: a table is <em>it</em> in English, but <em>der Tisch</em> becomes <em>er</em>, “he”."
      },
      {
        contrast: "English only shows gender on pronouns for people (<em>he</em>, <em>she</em>), so you are not used to attaching a gender to a noun. German gender does not follow meaning, so it cannot be guessed from the English word: <em>das Mädchen</em> (the girl) and <em>das Kind</em> (the child) are neuter, <em>die Frau</em> is feminine, <em>der Mann</em> is masculine, and objects can be any of the three. That is why every noun is learned with its article, never alone."
      },
      {
        h: "A few hints, no laws",
        list: [
          "nouns ending in <b>-ung</b> are feminine: <em>die Zeitung</em>, <em>die Rechnung</em>",
          "diminutives ending in <b>-chen</b> are neuter: <em>das Brötchen</em> (careful: <em>der Kuchen</em> is not a diminutive, and it is masculine)",
          "many nouns ending in <b>-e</b> are feminine: <em>die Tasse</em>, <em>die Torte</em>",
          "the hints have exceptions (<em>der Kaffee</em> ends in -e and is masculine): <b>learn the article together with the noun</b>"
        ]
      },
      {
        h: "The plural: one article, different endings",
        p: "In the nominative plural the definite article is always <strong>die</strong>, for all three genders (in the other cases, which come later, it changes). The noun, on the other hand, takes different endings, sometimes with an umlaut on the vowel: <em>die Tische</em>, <em>die Stühle</em>, <em>die Tassen</em>, <em>die Bücher</em>, <em>die Kinder</em>. Some nouns stay the same (<em>die Kuchen</em>, <em>die Brötchen</em>), and a few take <em>-s</em> (<em>die Cafés</em>, <em>die Kaffees</em>). English has the same kind of irregulars (<em>child, children</em>; <em>man, men</em>), but it is the exception there, and in German it is the rule."
      },
      {
        trap: "You cannot deduce the plural from the singular, and adding an <em>-s</em> as you would in English is rarely right: <em>der Tisch → die Tische</em>, but <em>das Buch → die Bücher</em>. Learn the whole set, for example <b>der Tisch, die Tische</b>: that is why the vocabulary of this course shows the plural next to every noun."
      },
      {
        tip: "All German nouns are written with a <b>capital letter</b>: <em>der Tisch</em>, not <em>der tisch</em>. English capitalizes only proper names, so this takes getting used to. And the umlaut counts: <em>Buch</em> and <em>Bücher</em> are spelled differently, and <em>Madchen</em> without the umlaut would be a spelling error, not a variant."
      },
      {
        h: "Counting from 1 to 20",
        list: [
          "<b>1-10</b>: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn",
          "<b>11-12</b>: elf, zwölf",
          "<b>13-19</b>: dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn",
          "<b>20</b>: zwanzig"
        ]
      },
      {
        trap: "Watch <em>sechzehn</em> and <em>siebzehn</em>: <em>sechs</em> loses its <em>-s</em> and <em>sieben</em> loses its <em>-en</em>. And the <b>z</b> is always <em>ts</em>: <em>zwei</em> sounds like “tsvai”, <em>zehn</em> like “tsehn”, with a pure long <em>e</em> that does not glide into the English “ay”. The teens work as in English: <em>dreizehn</em> is “three-ten”, like thirteen."
      }
    ],
    grammar: {
      title: "Gender and plural",
      note: "In the nominative plural the definite article is always <b>die</b>.",
      table: {
        head: ["gender", "singular", "plural", "English"],
        rows: [
          ["der (m)", "der Tisch", "die Tische", "table"],
          ["die (f)", "die Tasse", "die Tassen", "cup"],
          ["das (n)", "das Buch", "die Bücher", "book"],
          ["das (n)", "das Kind", "die Kinder", "child"],
          ["der (m)", "der Kuchen", "die Kuchen", "cake"],
          ["das (n)", "das Brötchen", "die Brötchen", "bread roll"]
        ]
      },
      examples: [
        { tr: "The table is small." },
        { tr: "The cups are big.", note: "in the plural the verb changes too: sind" },
        { tr: "The book is new." },
        { tr: "The child drinks milk." },
        { tr: "Three cups and two cakes, please.", note: "Kuchen does not change in the plural" },
        { tr: "The check, please.", note: "the bill; “the check” is the American word" }
      ]
    },
    vocab: [
      "the table",
      "the chair",
      "the book",
      "the house",
      "the cup",
      "the woman",
      "the man",
      "the child",
      "the newspaper",
      "the cake",
      "the milk",
      "the sugar",
      "the bread roll",
      "the check, the bill"
    ],
    exercises: [
      {
        q: "Which of these nouns is neuter?",
        opts: ["der Tisch", "das Buch", "die Tasse"],
        why: "<i>Das Buch</i>. In English “the book” has no gender, so the gender of a German noun cannot be read off a translation."
      },
      {
        q: "Plural of “die Tasse”: “die ___”.",
        hint: "add -n",
        why: "Many feminine nouns in <i>-e</i> form the plural with <i>-n</i>: <i>Tassen</i>."
      },
      {
        q: "Plural of “das Buch”: “die ___”.",
        hint: "the u takes an umlaut and -er is added",
        why: "<i>Bücher</i>: umlaut on the vowel and the ending <i>-er</i>. Without the umlaut it would be a misspelling."
      },
      {
        q: "Pick the right definite article.",
        why: "Gender and plural are learned together with the noun: <i>der Tisch</i>, <i>die Tasse</i>, <i>das Buch</i>.",
        items: ["table", "cup", "book", "house", "newspaper", "man"]
      },
      {
        q: "In the nominative plural the definite article is always…",
        opts: ["der", "die", "das"],
        why: "<b>die</b> for all genders in the nominative plural: <i>die Tische</i>, <i>die Tassen</i>, <i>die Bücher</i>."
      },
      {
        q: "Which of these nouns are feminine?",
        opts: ["die Zeitung", "der Stuhl", "die Milch", "das Kind", "die Rechnung"],
        why: "<i>Die Zeitung</i>, <i>die Milch</i>, <i>die Rechnung</i>: the article says so, and nouns ending in <b>-ung</b> are feminine."
      },
      {
        tr: "The child drinks milk.",
        why: "Subject, verb, object: the verb <i>trinkt</i> is in second position."
      },
      {
        tr: "Two cups and three bread rolls, please.",
        why: "<i>Zwei</i> begins with <b>ts</b>: “tsvai”, never an English <i>z</i>."
      },
      {
        tr: "The check, please.",
        why: "<i>Rechnung</i>: the <i>ch</i> after <i>e</i> is the soft hiss of <i>ich</i>, like the <i>h</i> of “huge”, not a <i>k</i>."
      }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Basic grammar",
    title: "Der or ein? Articles in the nominative",
    objectives: [
      "tell the definite article (der, die, das) from the indefinite (ein, eine)",
      "use kein to negate a noun",
      "choose the article by gender, not by sound"
    ],
    theory: [
      {
        h: "Definite and indefinite",
        p: "As in English, the <strong>definite</strong> article points to something known (<em>der Kaffee</em>, the coffee we are talking about) and the <strong>indefinite</strong> one to something new (<em>ein Kaffee</em>, any coffee). In the nominative, that is when the noun is the subject (<em>Der Kaffee ist heiß</em>) or the noun after <em>sein</em> (<em>Das ist eine Tasse</em>, <em>Das ist kein Tee</em>), the forms are: <b>der / ein</b> (masculine), <b>die / eine</b> (feminine), <b>das / ein</b> (neuter), <b>die</b> (plural)."
      },
      {
        contrast: "English has one <em>the</em>, and it chooses between <em>a</em> and <em>an</em> by the first <b>sound</b> of the next word: <em>a table</em>, <em>an apple</em>. German does neither. In the nominative singular, <em>der</em>, <em>die</em> and <em>das</em> depend only on gender, and <em>ein</em> never turns into anything like <em>an</em>: <em>ein Apfelkuchen</em>, <em>ein Saft</em>, <em>ein Eis</em>, whatever letter follows. It is simpler, but you have to know the gender."
      },
      {
        trap: "Like English, German has no indefinite article in the plural: <em>Tassen</em> alone means “cups” or “some cups”. English often adds <em>some</em> there; German normally leaves the noun bare: <em>Zwei Tassen, bitte</em>. Do not look for a plural of <em>ein</em>: there is none."
      },
      {
        h: "Kein: the negation of a noun",
        p: "To say “not a…” or “no…” you use <strong>kein</strong>, which follows the forms of <em>ein</em>: <em>kein</em> (masculine and neuter), <em>keine</em> (feminine and plural). <em>Das ist kein Tee</em> means “this is not a tea”. English needs two words (<em>not a</em>) or <em>no</em>; German uses the single word <em>kein</em>, and <em>nicht ein Tee</em> is not how you say it."
      },
      {
        tip: "When you <b>order</b>, a masculine noun takes <em>einen</em>: <em>Einen Kaffee, bitte</em>. <em>Ein</em> is the subject form; <em>einen</em> is a different form, used when the noun is the object of an action, and we will see it later. English still has this idea in its pronouns (<em>he</em> is the subject, <em>him</em> the object), but not on articles. For now remember: when ordering, you say <em>einen</em> (masculine), <em>eine</em> (feminine), <em>ein</em> (neuter)."
      },
      {
        h: "A typical sentence: Das ist …",
        p: "To identify an object: <em>Das ist ein Eis</em>, <em>Das ist eine Torte</em>. The opening <em>das</em> means “this” or “that” and does not change, whether the noun that follows is masculine or feminine."
      }
    ],
    grammar: {
      title: "Articles in the nominative",
      note: "The nominative answers the question <em>who / what is it?</em>. The plural takes <b>die</b> or <b>keine</b>, and has no indefinite article.",
      table: {
        head: ["", "masculine", "feminine", "neuter", "plural"],
        rows: [
          ["definite", "der Kaffee", "die Tasse", "das Brötchen", "die Tassen"],
          ["indefinite", "ein Kaffee", "eine Tasse", "ein Brötchen", "(no article) Tassen"],
          ["negation", "kein Kaffee", "keine Tasse", "kein Brötchen", "keine Tassen"]
        ]
      },
      examples: [
        { tr: "The coffee is hot." },
        { tr: "A coffee costs three euros." },
        { tr: "This is a cup." },
        { tr: "This is not a tea." },
        { tr: "The cake is fresh." },
        { tr: "Here is the menu." }
      ]
    },
    vocab: [
      "the juice",
      "the cola",
      "the hot chocolate",
      "the beer",
      "the wine",
      "the ice cream",
      "the apple cake",
      "the cake, the layer cake",
      "the bread",
      "the pretzel",
      "the menu",
      "the waiter"
    ],
    exercises: [
      {
        q: "Complete: “___ Tasse ist neu.” (a cup)",
        opts: ["Ein", "Eine", "Einen"],
        why: "<i>Tasse</i> is feminine, so <b>eine</b>."
      },
      {
        q: "Complete: “Das ist ___ Tee.” (this is not a tea)",
        opts: ["nicht", "kein", "keine"],
        why: "To negate a masculine noun you use <b>kein</b>, not <i>nicht ein</i>."
      },
      {
        q: "Pick the right indefinite article.",
        why: "<i>Ein</i> for masculine and neuter, <i>eine</i> for feminine.",
        items: ["juice", "cola", "cake", "bread", "menu", "waiter"]
      },
      {
        q: "Complete: “Das ist ___ Eis.” (an ice cream)",
        hint: "das Eis is neuter",
        why: "Neuter in the nominative: <b>ein</b>. There is no <i>a</i> and <i>an</i> to choose between."
      },
      {
        q: "Complete: “___ Speisekarte ist neu.” (the)",
        hint: "die Speisekarte is feminine",
        why: "Feminine singular: <b>die</b>."
      },
      {
        q: "“Tassen, bitte!” Why is there no article?",
        opts: [
          "It is a mistake",
          "There is no ein/eine in the plural: the noun stands alone",
          "Die is missing before Tassen"
        ],
        why: "The indefinite article has no plural. The English “some cups” corresponds to <i>Tassen</i> without an article."
      },
      {
        q: "Match each phrase with its meaning.",
        pairs: ["a coffee", "a cake", "a loaf of bread", "no cola"]
      },
      {
        tr: "Here is the menu and the water.",
        why: "With <i>Hier</i> in first position, the verb <i>ist</i> stays in second position and the subject follows it."
      },
      {
        tr: "This is a cake.",
        why: "<i>Torte</i>: the final <b>e</b> is pronounced as a short, unstressed vowel, like the last vowel of “sofa”: TOR-tuh."
      }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Daily life",
    title: "How are you? Du or Sie",
    objectives: [
      "ask how someone is, with du and with Sie",
      "conjugate sein in the present",
      "choose between du and Sie according to the situation"
    ],
    theory: [
      {
        h: "Du, ihr and Sie: three forms for one English “you”",
        p: "English has a single <em>you</em>, for one person or many, a friend or your boss. German has <strong>du</strong> (one person you are on familiar terms with), <strong>ihr</strong> (several people you are on familiar terms with) and <strong>Sie</strong>, the polite form, identical for one person or for many: <em>Sind Sie Frau Weber?</em>, <em>Wie heißen Sie?</em>"
      },
      {
        contrast: "English once had <em>thou</em> and <em>you</em>, but today it marks formality with names and tone, not with grammar. In German it is grammar: <em>you are</em> becomes <em>du bist</em>, <em>ihr seid</em> or <em>Sie sind</em>. <strong>Sie</strong> takes the verb in the third person <b>plural</b>, even for one person: <em>Sie sind</em>. It is always written with a <b>capital S</b>, because lowercase <em>sie</em> means “she” or “they” (at the start of a sentence both look alike, and the context tells you which)."
      },
      {
        h: "When to switch to du",
        p: "With people you do not know, with older adults, with customers, in offices and in official situations you use <em>Sie</em>, together with <em>Herr</em> or <em>Frau</em> and the surname: <em>Frau Weber</em>. <em>Du</em> is normal among friends, in the family, among people of the same age and in many informal workplaces. English speakers often move to first names quickly; in German-speaking countries <em>Sie</em> with a surname usually lasts longer, so when in doubt use <em>Sie</em> and wait for the other person to offer the <em>du</em>. The older person or the one with more responsibility often makes the offer: <em>Wollen wir uns duzen?</em>"
      },
      {
        h: "Wie geht's? No sein here",
        p: "English asks <em>How are you?</em> with the verb <em>to be</em>. German uses the verb <strong>gehen</strong> (to go): <em>Wie geht es dir?</em> or, shorter, <em>Wie geht's?</em> (literally “how goes it?”). The answer is <em>Mir geht es gut</em> (“it goes well for me”) or <em>Es geht</em> (“so-so”). <em>Dir</em>, <em>Ihnen</em> and <em>mir</em> are special pronoun forms that you will see later: for now learn the whole phrases."
      },
      {
        trap: "Do not translate “I'm good” or “I'm fine” word for word with <em>Ich bin gut</em>: that means “I am good at something” (skilled), not “I am well”. For health and mood you say <em>Mir geht es gut</em>."
      },
      {
        h: "Sein, the verb “to be”",
        p: "Like English <em>to be</em> (<em>am, are, is</em>), <strong>sein</strong> is irregular: the forms do not look like the infinitive (<em>bin, bist, ist, sind, seid, sind</em>) and have to be memorized. They say who you are and what something is: <em>Ich bin Anna</em>, <em>Das ist ein Kaffee</em>."
      },
      {
        h: "Questions: the word order changes",
        p: "In a question with a question word (<em>wie</em>, <em>was</em>) the verb stays in <strong>second</strong> position: <em>Wie geht es Ihnen?</em> In a yes/no question the verb moves to <strong>first</strong> position: <em>Sind Sie Frau Weber?</em>, <em>Bist du Anna?</em> With <em>to be</em> English does the same (<em>Are you Anna?</em>), but with other verbs it adds <em>do</em>: <em>Do you drink tea?</em>. German has no equivalent: <em>Trinkst du Tee?</em>"
      }
    ],
    grammar: {
      title: "Sein (to be) in the present",
      note: "With <b>Sie</b> (polite) the verb is <em>sind</em>, as with <em>wir</em> and with <em>sie</em> (they).",
      table: {
        head: ["person", "form", "example"],
        rows: [
          ["ich", "bin", "Ich bin Anna."],
          ["du", "bist", "Bist du Anna?"],
          ["er / sie / es", "ist", "Das Café ist klein."],
          ["wir", "sind", "Wir sind hier."],
          ["ihr", "seid", "Seid ihr hier?"],
          ["sie / Sie", "sind", "Sind Sie Frau Weber?"]
        ]
      },
      examples: [
        { tr: "Hi Julia, how's it going?", note: "informal" },
        { tr: "Good day, Ms. Weber, how are you?", note: "formal" },
        { tr: "I'm doing fine, thanks. And you?" },
        { tr: "So-so." },
        { tr: "Are you Ms. Weber?", note: "yes/no question: the verb goes in first position" },
        { tr: "Shall we use du with each other?", note: "often proposed by the older person" }
      ]
    },
    vocab: [
      "how's it going? (informal)",
      "how are you? (formal)",
      "I'm doing well",
      "so-so, it's OK",
      "not bad",
      "very good",
      "bad",
      "and you? (informal)",
      "and you? (formal)",
      "Mr. (before a surname)",
      "Ms., Mrs. (before a surname)",
      "see you later"
    ],
    dialogue: [
      "Hi Julia! How's it going?",
      "Hi! Good, and you?",
      "Not bad, thanks. See you later!",
      "Good day, Ms. Weber. How are you?",
      "Fine, thank you. And you?"
    ],
    exercises: [
      {
        q: "You are talking to Ms. Weber, whom you barely know. Which question is right?",
        opts: ["Wie geht es dir?", "Wie geht es Ihnen?", "Wie gehst du?"],
        why: "With a person you address formally you use <b>Ihnen</b>."
      },
      {
        q: "Which sentence does NOT mean “I'm doing well”?",
        opts: ["Mir geht es gut.", "Ich bin gut.", "Es geht mir gut."],
        why: "<i>Ich bin gut</i> means “I am good at something”. For health and mood you use <i>gehen</i>."
      },
      {
        tr: "All the persons of sein.",
        why: "<i>Sein</i> is irregular in every person, like “to be”. <i>Sind</i> is used for <i>wir</i>, <i>sie</i> and <i>Sie</i>."
      },
      {
        q: "Complete: “___ Sie Frau Weber?” (Are you Ms. Weber?)",
        hint: "yes/no question: the verb goes first",
        why: "<b>Sind</b>: the polite form uses the third person plural."
      },
      {
        q: "Translate using du: “I'm doing fine, thanks. And you?”",
        why: "<i>Mir geht es gut, danke. Und dir?</i> With <i>du</i> the question ends with <i>dir</i>."
      },
      {
        q: "At the café, the barista who has known you for years greets you first.",
        setting: "The neighborhood café, eight in the morning.",
        lines: [
          { tr: "Hi! How's it going today?" },
          { tr: "Answer that you are doing well and ask back.", answerTr: "I'm doing fine, and you?" },
          { tr: "Great! A coffee?" },
          { tr: "Say yes.", answerTr: "Yes, please!" }
        ]
      },
      {
        q: "Match each reply with its meaning.",
        pairs: ["so-so", "very good", "bad", "not bad"]
      },
      {
        tr: "Good day, Ms. Weber, how are you?",
        why: "<i>Ihnen</i> sounds like “EE-nen”: the <b>h</b> after the vowel is silent and only lengthens the <i>i</i>."
      },
      {
        tr: "Fine, thank you. And you? (formal)",
        why: "<i>Und Ihnen?</i> keeps the polite tone: the question closes with the form <i>Ihnen</i>."
      }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Check",
    title: "Unit 1 check",
    objectives: ["check greetings, the present of heißen and sein, gender, plural and articles"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Do not look back at the lessons while you answer: if you do not remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "It is 6:30 p.m. and you walk into a shop. What do you say?",
        opts: ["Guten Morgen", "Guten Abend", "Gute Nacht"],
        why: "Toward evening you say <i>Guten Abend</i>. <i>Gute Nacht</i> is only a parting phrase."
      },
      {
        q: "Complete: “Wir ___ hier.” (We are here.)",
        why: "<i>Sein</i>, form for <i>wir</i>: <b>sind</b>."
      },
      {
        q: "Complete: “Wie ___ Sie?” (What is your name?)",
        why: "<i>Heißen</i>: with <i>Sie</i> the verb is in the third person plural."
      },
      {
        q: "Pick the definite article.",
        items: ["table", "cup", "child", "cake"]
      },
      {
        q: "The plural of “das Kind” is:",
        opts: ["die Kinde", "die Kinder", "die Kinds"],
        why: "<i>Die Kinder</i>: ending <b>-er</b>."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Das ist ein Tasse.",
          "Das ist eine Tasse.",
          "Das ist kein Tee.",
          "Das ist ein Kaffee.",
          "Das ist keine Kaffee."
        ],
        why: "<i>Tasse</i> is feminine (<i>eine</i>); <i>Tee</i> and <i>Kaffee</i> are masculine (<i>kein</i>, <i>ein</i>)."
      },
      {
        q: "Translate: “Two teas, please.”",
        why: "<i>Zwei Tee, bitte</i>: when ordering, the noun often stays unchanged after the number. <i>Zwei Tees</i> is also correct."
      },
      {
        tr: "How are you, Ms. Weber?",
        why: "Question with <i>Wie</i>: the verb <i>geht</i> is in second position."
      },
      { tr: "Two coffees and a bread roll, please." },
      { tr: "Good day, how are you? (formal)" }
    ]
  },
  "unit:a1-u02": {
    title: "Who are you?",
    grammarNote: "personal pronouns · regular present · sein and haben · jobs · numbers to 100"
  },
  "lesson:a1-u02-l1": {
    theme: "Introducing yourself",
    title: "My name is ...",
    objectives: [
      "say your name and ask someone else's, with du and with Sie",
      "use the subject pronouns: ich, du, er, sie, es, wir, ihr, sie, Sie",
      "say where you are from with “Ich komme aus ...”"
    ],
    theory: [
      {
        h: "Subject pronouns: German says who is acting",
        p: "In a main clause that stands on its own, the conjugated verb needs a stated subject: a name (<em>Anna heißt Weber</em>) or a pronoun. In coordinated clauses with the same subject, as in <em>Ich wohne hier und arbeite in Bonn</em>, the second subject can be left out. English works the same way, so that part is easy. What is new is the number of pronouns: <strong>ich</strong> (I), <strong>du</strong> (you, one friend), <strong>er</strong> (he), <strong>sie</strong> (she), <strong>es</strong> (it), <strong>wir</strong> (we), <strong>ihr</strong> (you, several friends), <strong>sie</strong> (they) and <strong>Sie</strong>, the polite “you”. The verb endings alone do not tell you the person: <em>heißt</em> fits <em>du</em>, <em>er</em>, <em>sie</em>, <em>es</em> and <em>ihr</em>."
      },
      {
        contrast: "English has one <em>you</em> for everybody. German has three, and choosing is grammar, not just tone: <em>Wie heißt du?</em> to one friend, <em>Wie heißt ihr?</em> to several, <em>Wie heißen Sie?</em> to a stranger. Decide on the pronoun first, because the verb form follows it."
      },
      {
        h: "sie and Sie: the capital letter changes the meaning",
        p: "Spoken, <em>sie</em> and <em>Sie</em> sound the same; written, they do not. Lowercase <strong>sie</strong> means “she” or “they”: <em>sie heißt Lena</em> with a singular verb, <em>sie heißen Weber</em> with a plural verb. Capital <strong>Sie</strong> is the polite “you”, for one person or several, and takes the same verb as “they”: <em>Wie heißen Sie?</em> At the start of a sentence the capital is there anyway, so it does not help: <em>heißt</em> (singular) points to “she”, while with <em>heißen</em> the context has to tell “they” from the polite “you”.",
        list: [
          "<b>du</b>: one person you are on familiar terms with",
          "<b>ihr</b>: several people you are on familiar terms with (it is not the polite form)",
          "<b>Sie</b>: one or several people you address politely"
        ]
      },
      {
        trap: "Third-person pronouns follow the <b>grammatical gender</b> of the noun they replace, even for things: <em>Der Tisch ist neu. Er ist groß.</em> (er = the table), <em>Die Tasse ist neu. Sie ist groß.</em>, <em>Das Buch ist neu. Es ist groß.</em> English says “it” for all three; German says literally “he is big”, “she is big” or “it is big”, depending on the noun."
      },
      {
        h: "Name and origin",
        p: "To introduce yourself you have two formulas: <em>Ich heiße Paolo</em> or <em>Mein Name ist Paolo</em>. To ask where someone is from, use <strong>woher</strong> (“where from”, one word) and the verb <strong>kommen</strong>: <em>Woher kommst du?</em> You answer <em>Ich komme aus</em> plus the country or city, normally without an article: <em>Ich komme aus Italien</em>, <em>aus Berlin</em>. English says “I am from ...”; the German standard answer is “I come from ...”, though <em>Woher bist du?</em> is also common. As in all German questions, there is no <em>do</em>. For now learn the whole phrases: countries that take an article come later."
      },
      {
        tip: "To ask someone to repeat, <em>Wie bitte?</em> (“Pardon?”, literally “how, please?”) is the usual phrase and fits everyone. To answer an introduction you need <em>Freut mich</em> (“nice to meet you”, literally “pleases me”)."
      }
    ],
    grammar: {
      title: "Subject pronouns in the nominative",
      note: "German has nine pronouns (<em>ich, du, er, sie, es, wir, ihr, sie, Sie</em>) but a regular verb has only four endings: <em>-e, -st, -t, -en</em>. In the table <em>sie</em> and <em>Sie</em> share a row because they take the same verb form.",
      table: {
        head: ["person", "pronoun", "example"],
        rows: [
          ["1st singular", "ich", "Ich heiße Paolo."],
          ["2nd singular", "du", "Woher kommst du?"],
          ["3rd singular", "er / sie / es", "Er heißt Tom, sie heißt Lena."],
          ["1st plural", "wir", "Wir heißen Weber."],
          ["2nd plural", "ihr", "Wie heißt ihr?"],
          ["3rd plural / polite", "sie / Sie", "Wie heißen Sie?"]
        ]
      },
      examples: [
        { tr: "My name is Paolo." },
        { tr: "Where are you from?", note: "informal" },
        { tr: "He is called Tom, she is called Lena." },
        { tr: "We are called Weber." },
        { tr: "What are your names?", note: "to several friends" },
        { tr: "What is your name?", note: "polite" }
      ]
    },
    vocab: [
      "the name",
      "the first name",
      "the last name, the surname",
      "What is your name? (informal)",
      "My name is ...",
      "My name is ... (second formula)",
      "Nice to meet you.",
      "Where are you from? (informal)",
      "I am from ... (country or city)",
      "How old are you? (informal)",
      "I am ... years old.",
      "And you? (informal)",
      "Pardon? (I did not catch that)"
    ],
    culture: {
      title: "A German view: names, titles and the switch to du",
      text: "<p>In Germany people often introduce themselves with first and last name together: <i>Ich bin Anna Weber</i>. With someone you do not know, you normally use <i>Herr</i> or <i>Frau</i> and the surname, not the first name alone. If someone has a title such as <i>Doktor</i>, in formal settings the title is added: <i>Frau Doktor Weber</i>.</p><p>The old <i>Fräulein</i> for unmarried women is no longer used. Today <i>Frau</i> is used for every adult woman, married or not, much like “Ms.”.</p><p>The switch from <i>Sie</i> to <i>du</i> is a small social event: it is usually proposed by the older person or the one with more responsibility. In many companies and among students people say <i>du</i> right away, but when in doubt start with <i>Sie</i> and wait for the offer. English speakers tend to move to first names quickly, so expect <i>Sie</i> to last longer than you are used to.</p>"
    },
    exercises: [
      {
        q: "You are talking to a customer you do not know. Which question do you use to ask her name?",
        opts: ["Wie heißt du?", "Wie heißen Sie?", "Wie heißt ihr?"],
        why: "With a stranger you use the polite <b>Sie</b>, with the verb as for “they”: <i>heißen</i>. <i>Wie heißt du?</i> is for one friend, <i>Wie heißt ihr?</i> for several."
      },
      {
        q: "Lena is a woman. Which pronoun do you use to talk about her?",
        opts: ["er", "sie", "es"],
        why: "For a woman you use <b>sie</b>, lowercase in the middle of a sentence. <i>Er</i> is for a man, <i>es</i> for neuter nouns."
      },
      {
        q: "Complete: “___ heißt Lena.” (She is called Lena.)",
        hint: "third person singular feminine pronoun",
        why: "At the start of a sentence it is written <b>Sie</b> with a capital, because it is the first word; the verb <i>heißt</i> is third person singular."
      },
      {
        q: "Complete: “Ich ___ aus Italien.” (I come from Italy.)",
        hint: "first person singular of kommen",
        why: "<i>Ich komme</i>: the ending of the first person singular is <b>-e</b>."
      },
      {
        q: "Complete with the right pronouns.",
        tr: "Hi! My name is Paolo. And what is your name?",
        why: "In a main clause the pronoun is not left out: <i>Ich heiße Paolo</i>. To a friend you ask <i>Wie heißt du?</i>"
      },
      {
        q: "A new acquaintance greets you at the German class.",
        setting: "The first lesson, the first day.",
        lines: [
          { tr: "Hi! I am Lena. And what is your name?" },
          { tr: "Answer by saying your name.", answerTr: "My name is Paolo." },
          { tr: "Where are you from?" },
          { tr: "Answer that you are from Italy.", answerTr: "I come from Italy." }
        ]
      },
      {
        tr: "My name is Anna Weber.",
        why: "<i>Mein Name ist</i> is the alternative to <i>Ich heiße</i>. First and last names are written with a capital."
      },
      {
        tr: "Hello, my name is Lena and I come from Berlin.",
        why: "Listen to the <i>ei</i> in <i>heiße</i>: it sounds like English “eye”, not like “ay”."
      },
      {
        tr: "My name is Paolo. And what is your name?",
        why: "For <i>wie</i> remember: the <b>w</b> sounds like English <i>v</i>, and <i>ie</i> is a long “ee”: “vee”."
      }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Introducing yourself",
    title: "Sein, haben and numbers",
    objectives: [
      "conjugate sein and haben in the present",
      "say your age with “Ich bin ... Jahre alt”",
      "count to 100 and read out a phone number"
    ],
    theory: [
      {
        h: "Haben, the verb “to have”",
        p: "Like <em>sein</em> from unit 1, <strong>haben</strong> is irregular: the form for <em>du</em> is <em>hast</em>, the one for <em>er/sie/es</em> is <em>hat</em>, and the <em>b</em> drops out. It works like English “have” for what you own: <em>Ich habe eine Schwester</em>, “I have a sister”. German also uses it where English uses “to be”: <em>Ich habe Hunger</em>, literally “I have hunger”. With <em>haben</em> what you own is a direct object, so the masculine indefinite article <em>ein</em> becomes <em>einen</em>, as in the formula <em>einen Kaffee</em> (unit 3 explains why): <em>Ich habe einen Bruder</em>. English has no grammatical gender, so these forms cannot be guessed from the English words. With <em>Hunger haben</em> and similar expressions there is no article."
      },
      {
        h: "Sein with a noun: the nominative stays",
        p: "After <strong>sein</strong> the noun that describes the subject stays in the same case as the subject, the nominative: <em>Das ist ein Tisch</em>, <em>Das ist mein Lehrer</em>. A phrase with a preposition does not say who you are: <em>Ich bin in Berlin</em> says where you are, not who you are."
      },
      {
        contrast: "Age works as in English, with the verb <em>to be</em>: <em>Ich bin fünfundzwanzig Jahre alt</em> is “I am twenty-five years old”. German speakers also say just <em>Ich bin fünfundzwanzig</em>. Do not turn it into <em>have</em>: <em>Ich habe fünfundzwanzig Jahre</em> is wrong. The mismatch goes the other way for feelings. English “I am hungry” is <em>Ich habe Hunger</em> (“I have hunger”). And “I am cold” is <em>Mir ist kalt</em> (literally “to me it is cold”), not <em>Ich bin kalt</em>, which would not say that you feel cold. Questions never take <em>do</em>: <em>Hast du eine Schwester?</em>, not “Do you have a sister?” word for word."
      },
      {
        h: "Numbers from 20 to 100",
        p: "The tens are <strong>zwanzig</strong>, <strong>dreißig</strong>, <strong>vierzig</strong>, <strong>fünfzig</strong>, <strong>sechzig</strong>, <strong>siebzig</strong>, <strong>achtzig</strong>, <strong>neunzig</strong>, <strong>hundert</strong>. Note: <em>zwanzig</em> is not “zweizig”; <em>dreißig</em> is written with <b>ß</b>; <em>sechzig</em> loses the final <em>s</em> of <em>sechs</em>; <em>siebzig</em> loses the <em>-en</em> of <em>sieben</em>. Numbers from 21 to 99 are written as one word, without hyphens, and 1 becomes <em>ein</em> in them: <em>einundzwanzig</em>."
      },
      {
        trap: "In compound numbers the <b>units come first, then the tens</b>: 45 is <em>fünfundvierzig</em>, literally “five and forty”. English puts the tens first (“forty-five”); only the old rhyme “four and twenty blackbirds” has the German order. So 21 is <em>einundzwanzig</em>, “one and twenty”. Watch the pairs that are easy to confuse by ear: <em>sechzehn</em> (16) and <em>sechzig</em> (60), <em>siebzehn</em> (17) and <em>siebzig</em> (70), a bit like “sixteen” and “sixty” in English."
      },
      {
        h: "Phone numbers",
        p: "A phone number is usually read digit by digit or in small groups: 0151 is <em>null eins fünf eins</em>. German says <em>null</em> for zero, never “oh”. On the phone you sometimes hear <em>zwo</em> instead of <em>zwei</em>, so that it is not confused with <em>drei</em>. The grouping varies, so listen for the pauses. To ask: <em>Wie ist deine Telefonnummer?</em>"
      }
    ],
    grammar: {
      title: "Sein (to be) and haben (to have)",
      note: "Both verbs are irregular and have to be memorized. With <b>Sie</b> (polite) and with <em>sie</em> (they) you use <em>sind</em> and <em>haben</em>.",
      table: {
        head: ["person", "sein", "haben"],
        rows: [
          ["ich", "bin", "habe"],
          ["du", "bist", "hast"],
          ["er / sie / es", "ist", "hat"],
          ["wir", "sind", "haben"],
          ["ihr", "seid", "habt"],
          ["sie / Sie", "sind", "haben"]
        ]
      },
      examples: [
        { tr: "I am twenty years old." },
        { tr: "You have a sister." },
        { tr: "He is hungry.", note: "German says “he has hunger”" },
        { tr: "We are friends." },
        { tr: "Do you have a brother?", note: "to several friends; the verb goes first, no “do”" },
        { tr: "The number is zero three zero, twelve, thirty-four, fifty-six.", note: "number read in groups" }
      ]
    },
    vocab: [
      "the phone number",
      "the year",
      "old; for age: “... Jahre alt” = “... years old”",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
      "one hundred",
      "twenty-one"
    ],
    exercises: [
      {
        q: "How do you say “I am twenty-five years old”?",
        opts: ["Ich habe fünfundzwanzig Jahre.", "Ich bin fünfundzwanzig Jahre alt.", "Ich habe fünfundzwanzig alt."],
        why: "Age is said with <b>sein</b>: <i>Ich bin fünfundzwanzig Jahre alt</i>. With <i>haben</i> the sentence is not correct."
      },
      {
        q: "Which number is “45”?",
        opts: ["vierundfünfzig", "fünfundvierzig", "vierzigfünf"],
        why: "<i>Fünfundvierzig</i>: first the unit (<i>fünf</i>), then <i>und</i>, then the ten (<i>vierzig</i>). <i>Vierundfünfzig</i> is 54."
      },
      {
        tr: "The whole conjugation of haben.",
        why: "<i>Haben</i> is irregular: <i>du hast</i> and <i>er hat</i> lose the <i>b</i>."
      },
      {
        q: "Complete: “Du ___ eine Schwester.” (You have a sister.)",
        hint: "second person singular of haben",
        why: "<i>Du hast</i>: the <b>b</b> of the verb disappears in the <i>du</i> form."
      },
      {
        q: "Complete: “Ihr ___ hier.” (You, several friends, are here.)",
        hint: "second person plural of sein",
        why: "<i>Ihr seid</i>: do not mix it up with <i>sind</i>, which is for <i>wir</i> and <i>sie</i>."
      },
      {
        q: "Complete with bin and habe.",
        tr: "I am Paolo and I am twenty-five years old. I have a brother.",
        why: "Name and age are said with <i>sein</i> (<i>bin</i>), the brother with <i>haben</i> (<i>habe</i>), followed by <i>einen</i>."
      },
      {
        q: "Match each number with its digits.",
        pairs: ["30", "60", "45", "100"]
      },
      {
        q: "Translate using du: “Do you have a sister?”",
        why: "<i>Hast du eine Schwester?</i> In a yes/no question the verb goes in first position, and German has no <i>do</i>."
      },
      {
        tr: "My phone number is zero one five one, two three four, five six.",
        why: "Zero is <i>null</i>. Phone numbers are read digit by digit or in groups."
      },
      {
        tr: "I am twenty-five years old and I have a sister.",
        why: "<i>Fünfundzwanzig</i>: the <b>z</b> is always “ts”, as at the end of “cats”."
      }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Work",
    title: "What do you do for a living?",
    objectives: [
      "ask and say your job with “Was sind Sie von Beruf?”",
      "form the feminine of job titles with -in",
      "use job titles without an article"
    ],
    theory: [
      {
        h: "A job is named without an article",
        p: "To say what you do, German usually uses the bare noun, with no article: <em>Ich bin Lehrerin</em>, <em>Er ist Arzt</em>. English adds <em>a</em> (“I am a teacher”), so this is a habit to unlearn. The question is <strong>Was sind Sie von Beruf?</strong>, literally “what are you by profession?”, and to a friend <em>Was bist du von Beruf?</em> English more often asks “What do you do?”; in German <em>Was machen Sie beruflich?</em> is a common alternative."
      },
      {
        trap: "When an adjective comes with the job, the article usually returns: <em>Ich bin eine gute Lehrerin</em> (“I am a good teacher”). So “no article” holds for the bare job title, not for every sentence that contains one."
      },
      {
        h: "The feminine in -in",
        p: "In German the name of a job changes depending on whether a man or a woman does it: <em>der Lehrer / die Lehrerin</em>, <em>der Student / die Studentin</em>. Almost always you add <strong>-in</strong> to the masculine form, and the feminine article is always <strong>die</strong>. Some vowels take an umlaut: <em>der Arzt → die Ärztin</em>, <em>der Koch → die Köchin</em>."
      },
      {
        contrast: "English has a few feminine job words (<em>actress</em>, <em>waitress</em>), but most job titles are the same for everybody: <em>teacher</em>, <em>doctor</em>, <em>engineer</em>. The ending <em>-in</em> is new for you. In German it is the normal way to name a woman's job, and you hear the gender of the person in the noun: <em>Ich bin Lehrer</em> is said by a man, <em>Ich bin Lehrerin</em> by a woman."
      },
      {
        h: "The plural of the -in forms",
        p: "The plural of the feminine form takes <strong>-nen</strong>: <em>die Lehrerin → die Lehrerinnen</em>, with two <em>n</em>. The masculine plurals vary: <em>die Lehrer</em>, <em>die Ärzte</em>, <em>die Studenten</em>."
      },
      {
        tip: "When you learn a job title, learn both forms right away: <em>der Arzt, die Ärztin</em>. You need them to talk about yourself and about other people. Note that <em>Student</em> and <em>Studentin</em> mean someone studying at a university or college; a school pupil is a <em>Schüler</em> or <em>Schülerin</em>, so “student” alone is a false friend."
      }
    ],
    grammar: {
      title: "Jobs: masculine and feminine",
      note: "The feminine is usually formed with <b>-in</b>. With <em>Arzt</em> and <em>Koch</em> the vowel takes an umlaut.",
      table: {
        head: ["masculine", "feminine", "example"],
        rows: [
          ["der Lehrer", "die Lehrerin", "Ich bin Lehrerin."],
          ["der Arzt", "die Ärztin", "Er ist Arzt."],
          ["der Student", "die Studentin", "Wir sind Studenten."],
          ["der Koch", "die Köchin", "Sie ist Köchin."],
          ["der Ingenieur", "die Ingenieurin", "Ich bin Ingenieurin."],
          ["der Verkäufer", "die Verkäuferin", "Sie ist Verkäuferin."]
        ]
      },
      examples: [
        { tr: "What do you do for a living?", note: "polite" },
        { tr: "I am a teacher.", note: "a woman speaking; no article in German" },
        { tr: "He is a doctor." },
        { tr: "She is a cook." },
        { tr: "I am a good teacher.", note: "with an adjective the article returns" },
        { tr: "We are university students.", note: "a school pupil is a Schüler" }
      ]
    },
    vocab: [
      "the job, the profession",
      "the teacher (man)",
      "the teacher (woman)",
      "the doctor (man)",
      "the doctor (woman)",
      "the university student (man)",
      "the university student (woman)",
      "the cook (man)",
      "the cook (woman)",
      "the engineer",
      "the shop assistant (man)",
      "the shop assistant (woman)"
    ],
    exercises: [
      {
        q: "You are a woman and a doctor. Which sentence uses the feminine form?",
        opts: ["Ich bin Arzt.", "Ich bin Ärztin.", "Ich bin Arztin."],
        why: "The feminine of <i>Arzt</i> is <b>Ärztin</b>: you add <i>-in</i> and the <i>A</i> takes an umlaut."
      },
      {
        q: "What is the plural of “die Lehrerin”?",
        opts: ["die Lehrerins", "die Lehrerinnen", "die Lehrerine"],
        why: "The plural of the <i>-in</i> forms takes <b>-nen</b>: <i>die Lehrerinnen</i>."
      },
      {
        tr: "The verb studieren, all persons.",
        why: "Verbs in <i>-ieren</i> are conjugated regularly: <i>studier-</i> plus the endings."
      },
      {
        q: "Complete: “Sie ist ___.” (She is a cook.)",
        hint: "feminine form of Koch",
        why: "<i>Köchin</i>: the feminine adds <i>-in</i> and the <i>o</i> takes an umlaut. Without the umlaut the word is wrong."
      },
      {
        q: "Pick the definite article.",
        items: [
          "teacher (man)",
          "teacher (woman)",
          "job, profession",
          "university student (woman)",
          "doctor (woman)",
          "cook (man)"
        ]
      },
      {
        q: "Match each job with its meaning.",
        pairs: ["teacher (man)", "doctor (woman)", "cook (man)", "shop assistant (woman)"]
      },
      {
        tr: "What do you do for a living?",
        why: "A question with <i>was</i>: the verb <i>sind</i> is in second position, and with <i>Sie</i> you use the polite form."
      },
      {
        q: "Translate, as a woman: “I am a cook.”",
        why: "<i>Ich bin Köchin</i>: the job is named without an article, and the feminine form takes <i>-in</i>."
      },
      {
        tr: "What do you do for a living? I am a teacher.",
        why: "<i>Beruf</i> ends in a plain <b>f</b>, as in “off”, and the stress is on the second syllable: be-RUF."
      },
      {
        tr: "What do you do for a living? I am an engineer.",
        why: "<i>Ingenieurin</i> is the feminine of <i>Ingenieur</i>: you add <b>-in</b>. Note that there is no article, unlike English “an engineer”."
      }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Daily life",
    title: "Wohnen, arbeiten, kommen",
    objectives: [
      "conjugate regular verbs in the present",
      "say where you live, where you work and where you come from",
      "recognize countries and languages"
    ],
    theory: [
      {
        h: "The regular verb: stem plus ending",
        p: "You drop <em>-en</em> from the infinitive and add the ending of the person: <strong>-e, -st, -t, -en, -t, -en</strong>. From <em>wohnen</em> you get <em>ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie/Sie wohnen</em>. There are six forms but only four different endings, because <em>er</em> and <em>ihr</em> share a form, and so do <em>wir</em> and <em>sie/Sie</em>."
      },
      {
        contrast: "English changes the verb only in the third person singular (<em>I work, you work, he works</em>). German changes it in nearly every person, but regularly. Two things to keep in mind. German has one present: <em>Ich wohne in Berlin</em> means both “I live” and “I am living”, and questions never take <em>do</em>: <em>Wo wohnst du?</em>, not “Where do you live?” word for word. And <em>er arbeitet</em> and <em>ihr arbeitet</em> are identical, as are <em>wir arbeiten</em> and <em>sie arbeiten</em>, which is why in a main clause the pronoun cannot be left out."
      },
      {
        h: "Stems in -t and -d: an extra -e-",
        p: "If the stem ends in <em>-t</em> or <em>-d</em> (<em>arbeit-</em>, <em>find-</em>), an <strong>-e-</strong> goes in front of <em>-st</em> and <em>-t</em> so that the ending can be pronounced: <em>du arbeitest, er arbeitet, ihr arbeitet</em>. English does something similar in “wanted” or “needed”, where an extra vowel separates the ending. The <em>ich</em> form (<em>ich arbeite</em>) and the <em>-en</em> forms stay regular."
      },
      {
        h: "Wo and woher",
        p: "<strong>Wo</strong> asks where someone is: <em>Wo wohnst du?</em> → <em>Ich wohne in Berlin.</em> <strong>Woher</strong> asks where someone comes from: <em>Woher kommen Sie?</em> → <em>Ich komme aus Spanien.</em> English splits it in two (“where ... from”); German has it in one word. With cities and countries you normally use <em>in</em> for the place and <em>aus</em> for the origin. The verb stays in second position, and with <em>Sie</em> it is conjugated as for “they”. <em>Wohnen</em> is the everyday verb for where you live; <em>leben</em> is more general (to be alive, to live a life), so for an address start with <em>wohnen</em>."
      },
      {
        trap: "Language names are nouns and are written with a <b>capital letter</b>: <em>Deutsch, Italienisch, Englisch</em>. English does that for languages too, but German does it for every noun. After <em>sprechen</em> they have no article: <em>Ich spreche Deutsch</em>. Careful: <em>sprechen</em> changes its vowel with <em>du</em> and <em>er</em> (<em>du sprichst</em>), and that kind of verb comes in unit 3: for now use only <em>ich spreche</em> and <em>wir sprechen</em>."
      },
      {
        tip: "To say where you work: <em>Ich arbeite in Hamburg</em>. To add what you do: <em>Ich arbeite als Lehrerin</em> (“I work as a teacher”). After <em>als</em> there is usually no article, whereas English says “as a teacher”."
      }
    ],
    grammar: {
      title: "Regular present: wohnen, arbeiten, kommen",
      note: "With <em>arbeiten</em> the stem ends in <b>-t</b>, so an <b>-e-</b> appears with <em>du</em>, <em>er/sie/es</em> and <em>ihr</em>.",
      table: {
        head: ["person", "wohnen", "arbeiten", "kommen"],
        rows: [
          ["ich", "wohne", "arbeite", "komme"],
          ["du", "wohnst", "arbeitest", "kommst"],
          ["er / sie / es", "wohnt", "arbeitet", "kommt"],
          ["wir", "wohnen", "arbeiten", "kommen"],
          ["ihr", "wohnt", "arbeitet", "kommt"],
          ["sie / Sie", "wohnen", "arbeiten", "kommen"]
        ]
      },
      examples: [
        { tr: "Where do you live?", note: "no “do” in German" },
        { tr: "I live in Berlin." },
        { tr: "You work in Vienna." },
        { tr: "He comes from Spain." },
        { tr: "You work in Hamburg.", note: "to several friends" },
        { tr: "Where are you from?", note: "polite" }
      ]
    },
    vocab: [
      "Germany",
      "Italy",
      "Austria",
      "France",
      "Spain",
      "Poland",
      "German (language)",
      "Italian (language)",
      "English (language)",
      "Spanish (language)",
      "French (language)",
      "Polish (language)"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: ["Er arbeit in Berlin.", "Er arbeitet in Berlin.", "Er arbeitest in Berlin."],
        why: "The stem <i>arbeit-</i> ends in <i>-t</i>: with <i>er</i> you need the <b>-e-</b> before <i>-t</i>."
      },
      {
        q: "Which forms are correct with “ihr”?",
        opts: ["ihr arbeitet", "ihr kommt", "ihr wohnen", "ihr arbeitest", "ihr wohnt"],
        why: "With <i>ihr</i> the ending is <b>-t</b> (<i>-et</i> with stems in <i>-t</i>). <i>Wohnen</i> is for <i>wir</i> and <i>sie/Sie</i>; <i>-st</i> is for <i>du</i>."
      },
      {
        tr: "The verb arbeiten, all persons.",
        why: "The stem <i>arbeit-</i> ends in <i>-t</i>: with <i>du</i>, <i>er</i> and <i>ihr</i> the <b>-e-</b> appears."
      },
      {
        tr: "The verb kommen, some persons.",
        why: "<i>Kommen</i> is regular: <i>du kommst</i>, <i>er kommt</i>, <i>ihr kommt</i>. There is no vowel change."
      },
      {
        q: "Complete: “Du ___ in Wien.” (You work in Vienna.)",
        hint: "second person singular of arbeiten",
        why: "<i>Du arbeitest</i>: after a stem in <i>-t</i> an <b>-e-</b> goes before <i>-st</i>."
      },
      {
        q: "Complete: “Wo ___ ihr?” (Where do you live, several of you?)",
        hint: "second person plural of wohnen",
        why: "<i>Ihr wohnt</i>: the ending of <i>ihr</i> is <b>-t</b>."
      },
      {
        tr: "I live in Italy and work here.",
        why: "In the clause with <i>und</i> the second verb has the same subject, which can be left out: <i>und arbeite hier</i>. English does the same."
      },
      {
        q: "Translate using du: “Where are you from?”",
        why: "<i>Woher kommst du?</i> is the most common form; <i>Woher bist du?</i> is also correct."
      },
      {
        tr: "I live in Vienna and I come from Italy.",
        why: "<i>Wien</i> is pronounced “veen”: the <b>w</b> sounds like English <i>v</i> and <i>ie</i> is a long “ee”."
      },
      {
        tr: "I come from Italy and live in Berlin.",
        why: "With cities you use <i>in</i> for the place and <i>aus</i> for the origin."
      }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Check",
    title: "Unit 2 check",
    objectives: ["check pronouns, sein and haben, jobs, the regular present, numbers"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Do not look back at the lessons while you answer: if you do not remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "How do you say “I am thirty years old”?",
        opts: ["Ich habe dreißig Jahre.", "Ich bin dreißig Jahre alt.", "Ich sind dreißig Jahre alt."],
        why: "<i>Ich bin dreißig Jahre alt</i>: age is said with <b>sein</b> and <i>alt</i>."
      },
      {
        q: "Which number is “73”?",
        opts: ["siebenunddreißig", "dreiundsiebzig", "siebzigdrei"],
        why: "<i>Dreiundsiebzig</i>: first the unit (<i>drei</i>), then the ten (<i>siebzig</i>). <i>Siebenunddreißig</i> is 37."
      },
      {
        q: "Mrs. Weber is a doctor. Which sentence uses the feminine form of the job?",
        opts: ["Frau Weber ist Ärztin.", "Frau Weber ist Arzt.", "Frau Weber ist ein Ärztin."],
        why: "The feminine is <b>Ärztin</b>, and the job stands without an article."
      },
      {
        q: "Complete: “Wir ___ aus Polen.” (We come from Poland.)",
        why: "<i>Wir kommen</i>: with <i>wir</i> the ending is <b>-en</b>."
      },
      {
        q: "Complete: “Ihr ___ Hunger.” (You, several friends, are hungry.)",
        why: "<i>Ihr habt</i>: the form of <i>haben</i> with <i>ihr</i> is <b>habt</b>. German says “you have hunger”."
      },
      {
        tr: "The verb arbeiten: du, er, ihr.",
        why: "With stems in <i>-t</i> you need the <b>-e-</b>: <i>du arbeitest, er arbeitet, ihr arbeitet</i>."
      },
      {
        q: "Complete with ist, wohnt and kommt.",
        tr: "Anna is a teacher. She lives in Vienna and comes from Poland.",
        why: "All three verbs are in the third person singular: <i>ist</i>, <i>wohnt</i>, <i>kommt</i>."
      },
      {
        q: "Translate, addressing someone politely: “What do you do for a living?”",
        why: "<i>Was sind Sie von Beruf?</i> is the formula you learned; <i>Was machen Sie beruflich?</i> is a correct alternative."
      },
      {
        tr: "My name is Lena, I am thirty years old and I come from Vienna.",
        why: "<i>Dreißig</i> is written with <b>ß</b>: it is a voiceless <i>s</i>, as in “hiss”, never a “z”."
      },
      {
        tr: "My name is Paolo, I am an engineer and I live in Berlin.",
        why: "The sentence has three verbs: <i>heiße</i>, <i>bin</i>, <i>wohne</i>. Note that <i>Ingenieur</i> has no article."
      }
    ]
  },
  "unit:a1-u03": {
    title: "After work",
    grammarNote: "gern and mögen · vowel-change verbs · accusative · kein and nicht"
  },
  "lesson:a1-u03-l1": {
    theme: "Likes and habits",
    title: "Saying what you like",
    objectives: [
      "say you like doing something with gern",
      "say you like a thing with mögen",
      "keep the verb in second position even when the sentence starts with heute"
    ],
    theory: [
      {
        h: "Gern: “gladly” that means “I like to”",
        p: "To say you like doing something, German does not use a verb meaning “to like”: it adds the adverb <strong>gern</strong> (gladly, with pleasure) to the verb. <em>Ich trinke gern Tee</em> is “I drink tea gladly”, that is, “I like to drink tea”. <em>Gern</em> usually comes right after the verb, and after a pronoun subject: <em>Ich esse gern Pizza</em>, <em>Wir trinken gern Limonade</em>."
      },
      {
        contrast: "English builds the idea into a verb: <em>I like to drink tea</em>, two verbs in a row. In German the action stays the one main verb and <em>gern</em> colors it, so there is nothing extra to conjugate and no infinitive to add: <em>Ich trinke gern Tee</em> has a single verb. <em>Gern</em> never changes form, whoever is speaking: <em>ich esse gern</em>, <em>du isst gern</em>, <em>wir essen gern</em>."
      },
      {
        h: "Mögen: I like a thing",
        p: "When you like a thing and not an action, there is the verb <strong>mögen</strong>: <em>Ich mag Käse</em>, <em>Magst du Fisch?</em>, <em>Wir mögen Suppe</em>. It is irregular: the <em>ich</em> form and the <em>er/sie/es</em> form are the same and have no umlaut (<em>mag</em>), and <em>du</em> is <em>magst</em>. To say you like doing something, use <em>gern</em> after the verb for now."
      },
      {
        trap: "Do not carry English “like” over word for word: “I like to drink tea” is <em>Ich trinke gern Tee</em>, not “Ich mag trinken Tee”. As for articles, English and German agree here: when you talk about likes in general, the noun usually has <b>no article</b>: <em>Ich mag Käse</em> (“I like cheese”), <em>Ich mag Äpfel</em> (“I like apples”). With an article you would be talking about one particular cheese."
      },
      {
        h: "The verb stays in second place",
        p: "If the sentence starts with <em>heute</em> (today), the subject moves after the verb: <em>Heute trinke ich gern Saft</em>. English cannot do this (“Today drink I” is wrong), but in German it is the rule: the conjugated verb is always in second position. In a yes/no question the verb goes first: <em>Trinkst du gern Tee?</em>, <em>Magst du Fisch?</em>"
      },
      {
        tip: "Say three sentences of your own out loud with <em>gern</em>: <em>Ich esse gern ...</em>, <em>Ich trinke gern ...</em>, <em>Ich mag ...</em>. Three patterns cover all the vocabulary of this lesson."
      }
    ],
    grammar: {
      title: "Mögen in the present",
      note: "With <b>ich</b> and <b>er/sie/es</b> the form is the same: <em>mag</em>. The umlaut appears only in the infinitive and in the plural.",
      table: {
        head: ["person", "form", "example"],
        rows: [
          ["ich", "mag", "Ich mag Käse."],
          ["du", "magst", "Magst du Fisch?"],
          ["er / sie / es", "mag", "Er mag Suppe."],
          ["wir", "mögen", "Wir mögen Suppe."],
          ["ihr", "mögt", "Mögt ihr Pizza?"],
          ["sie / Sie", "mögen", "Sie mögen Nudeln."]
        ]
      },
      examples: [
        { tr: "I like to drink tea.", note: "gern usually comes after the verb, and after a pronoun subject: Ich trinke gern Tee, Heute trinke ich gern Tee" },
        { tr: "I like to eat pizza." },
        { tr: "I like cheese.", note: "no article, as in English" },
        { tr: "Do you like fish?", note: "yes/no question: the verb goes first" },
        { tr: "Today I like to drink juice.", note: "the subject moves after the verb" },
        { tr: "We like soup." }
      ]
    },
    vocab: [
      "gladly, with pleasure",
      "to drink",
      "to eat",
      "to like (with a noun)",
      "apple",
      "pizza",
      "salad",
      "soup",
      "noodles, pasta (usually plural; singular: die Nudel)",
      "fish",
      "meat",
      "fruit",
      "sweet fizzy soft drink (Limonade; not necessarily lemon, unlike American lemonade)",
      "cheese"
    ],
    exercises: [
      {
        q: "How do you say “I like to drink tea”?",
        opts: ["Ich gern trinke Tee.", "Ich trinke gern Tee.", "Gern ich trinke Tee."],
        why: "The conjugated verb stays in second position and <b>gern</b> follows it. (<i>Gern trinke ich Tee</i> is possible, with the subject after the verb, but not the version with <i>ich</i> before the verb.)"
      },
      {
        q: "Complete: “Ich ___ Käse.” (I like cheese.)",
        hint: "mögen, first person singular",
        why: "<i>Ich mag</i>: an irregular form, with no umlaut, identical to the <i>er/sie/es</i> form."
      },
      {
        q: "Complete: “Ich ___ gern Fisch.” (I like to eat fish.)",
        hint: "essen, first person singular",
        why: "With <i>ich</i> the verb is regular: <b>esse</b>. The vowel change affects only <i>du</i> and <i>er</i>, which you will see in lesson 2."
      },
      {
        q: "How do you say “I like pizza”?",
        opts: ["Ich mag Pizza.", "Ich Pizza mag.", "Mag ich Pizza."],
        why: "The verb is in second position and the noun has no article. With the verb first, <i>Mag ich Pizza?</i> would be a question."
      },
      {
        q: "Which sentence has the verb in the right place?",
        opts: ["Heute ich esse Salat.", "Heute esse ich Salat.", "Ich heute esse Salat."],
        why: "If the sentence starts with <i>heute</i>, the subject moves after the verb: <b>Heute esse ich Salat.</b>"
      },
      {
        q: "Translate: “Today I like to drink tea.”",
        why: "<i>Heute trinke ich gern Tee</i>: the verb in second position, then the subject, then <i>gern</i>. <i>Ich trinke heute gern Tee</i> is also correct."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["to drink", "to eat", "to like (with a noun)", "gladly"]
      },
      {
        q: "Complete the two sentences.",
        tr: "I like to drink tea. Do you like to drink tea too?",
        why: "The second sentence is a yes/no question, so the verb goes first: <i>Trinkst du ...?</i> At the start of a sentence it is written with a capital letter."
      },
      {
        tr: "I like to eat salad and I like to drink water.",
        why: "In <i>Salat</i> the initial <b>s</b> before a vowel is voiced, like the <i>z</i> in “zoo”. In <i>Wasser</i> the <b>w</b> sounds like English <i>v</i>."
      },
      {
        tr: "I like to drink tea and I like to eat bread.",
        why: "In <i>Tee</i> the <b>ee</b> is one long vowel, not two separate sounds."
      }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Likes and habits",
    title: "Vowel-change verbs",
    objectives: [
      "conjugate nehmen, essen and sprechen in the present",
      "see that the vowel changes only with du and er/sie/es",
      "order meals: nehmen and essen"
    ],
    theory: [
      {
        h: "Three verbs, one novelty",
        p: "<strong>Nehmen</strong> (to take), <strong>essen</strong> (to eat) and <strong>sprechen</strong> (to speak) have the same endings as other verbs, but with <strong>du</strong> and with <strong>er/sie/es</strong> the <em>e</em> of the stem becomes <em>i</em>: <em>essen → du isst, er isst</em>; <em>sprechen → du sprichst, er spricht</em>; <em>nehmen → du nimmst, er nimmt</em> (here the consonant changes too: <em>nehm-</em> becomes <em>nimm-</em>)."
      },
      {
        contrast: "English keeps vowel changes for the past tense (<em>eat, ate</em>; <em>speak, spoke</em>), and the present is almost uniform (<em>I eat, you eat, he eats</em>). German does the opposite for these verbs: the present changes its vowel, but only in two forms, the second and third person singular. With <em>ich</em>, <em>wir</em>, <em>ihr</em> and <em>sie/Sie</em> you use the stem of the infinitive: <em>ich esse</em>, <em>wir essen</em>, <em>ihr esst</em>."
      },
      {
        h: "Essen: du isst, without a doubled ending",
        p: "The stem of <em>essen</em> ends in <em>-s</em>, so the ending of <em>du</em> shrinks: <em>du isst</em>, not “du issst”. The form <em>isst</em> is the same for <em>du</em> and <em>er/sie/es</em>. <em>Ihr esst</em> keeps the original vowel: it is a different form."
      },
      {
        trap: "The vowel change does not apply to <em>ihr</em>: <em>ihr esst</em>, <em>ihr nehmt</em>, <em>ihr sprecht</em>. And it does not apply to every verb: <em>trinken</em> stays regular (<em>du trinkst</em>). Other verbs have other alternations, for example <em>sehen → du siehst</em>: you will meet them later. For now learn these three with their forms."
      },
      {
        h: "Nehmen for ordering, sprechen for languages",
        p: "<em>Ich nehme einen Kaffee</em> corresponds to “I'll have a coffee”: it is the typical way to say what you choose at a café or restaurant. <em>Sprechen</em> is used with languages, without an article: <em>Ich spreche Deutsch</em>, <em>Sprichst du Italienisch?</em>"
      },
      {
        tip: "Learn each verb as a block: <em>essen, du isst, er isst</em>; <em>nehmen, du nimmst, er nimmt</em>; <em>sprechen, du sprichst, er spricht</em>. If you are unsure about a form, ask yourself: is it <em>du</em> or <em>er/sie/es</em>? Only then does the vowel change."
      }
    ],
    grammar: {
      title: "Essen, nehmen, sprechen in the present",
      note: "The vowel changes (<b>e → i</b>) only with <b>du</b> and <b>er/sie/es</b>.",
      table: {
        head: ["person", "essen", "nehmen", "sprechen"],
        rows: [
          ["ich", "esse", "nehme", "spreche"],
          ["du", "isst", "nimmst", "sprichst"],
          ["er / sie / es", "isst", "nimmt", "spricht"],
          ["wir", "essen", "nehmen", "sprechen"],
          ["ihr", "esst", "nehmt", "sprecht"],
          ["sie / Sie", "essen", "nehmen", "sprechen"]
        ]
      },
      examples: [
        { tr: "I eat rice." },
        { tr: "You eat fish.", note: "du isst: the vowel changes" },
        { tr: "He's having a soup." },
        { tr: "We'll have coffee.", note: "with wir the stem does not change" },
        { tr: "Do you speak German?" },
        { tr: "You eat potatoes.", note: "ihr esst, to several friends: no vowel change" }
      ]
    },
    vocab: [
      "to take; to have (when ordering)",
      "to eat",
      "to speak",
      "sausage",
      "egg",
      "rice",
      "potato",
      "vegetables",
      "dinner, supper",
      "language",
      "slowly",
      "also, too (not the German word “also”, which means “so”)"
    ],
    exercises: [
      {
        tr: "The whole conjugation of nehmen, no peeking.",
        why: "With <i>du</i> and <i>er/sie/es</i> both the vowel and the consonant change: <b>nimmst, nimmt</b>. The other persons use the stem of the infinitive: <i>nehme, nehmen, nehmt, nehmen</i>."
      },
      {
        q: "How do you say “you eat”?",
        opts: ["du esst", "du isst", "du esse"],
        why: "<b>Du isst</b>: the vowel changes (e → i) and the ending <i>-st</i> shrinks because the stem ends in <i>s</i>. <i>Esst</i> is the <i>ihr</i> form."
      },
      {
        q: "Complete: “Er ___ einen Apfel.” (He takes an apple.)",
        hint: "nehmen, third person singular",
        why: "<b>Er nimmt</b>: both the vowel and the consonant change compared with <i>nehmen</i>."
      },
      {
        q: "Complete: “Du ___ sehr gut Deutsch.” (You speak German very well.)",
        hint: "sprechen, second person singular",
        why: "<b>Du sprichst</b>: e → i and the ending <i>-st</i>."
      },
      {
        q: "With which pronoun does the vowel NOT change?",
        opts: ["du", "er", "wir"],
        why: "With <b>wir</b> you use the stem of the infinitive: <i>wir essen, wir nehmen, wir sprechen</i>. The change affects only <i>du</i> and <i>er/sie/es</i>."
      },
      {
        q: "Which sentences are correct?",
        opts: ["Er isst Fisch.", "Du sprecht Deutsch.", "Ihr esst Reis.", "Ich nimme Tee.", "Sie nimmt eine Suppe."],
        why: "<i>Du sprichst</i> (not “sprecht”, which is the <i>ihr</i> form); <i>ich nehme</i> (the vowel does not change with <i>ich</i>). The other three are correct."
      },
      {
        tr: "Today Anna eats rice and vegetables.",
        why: "If the sentence starts with <i>heute</i>, the verb stays in second position: <i>Heute isst Anna ...</i>"
      },
      {
        q: "Translate: “You speak Italian and I speak German.”",
        why: "<i>Du sprichst</i> with the vowel change, <i>ich spreche</i> without it: the pronouns cannot be dropped."
      },
      {
        tr: "You eat rice and I'll have potatoes.",
        why: "<i>Du isst</i>: the <b>i</b> is short, as in “bit”, and the <b>ss</b> is voiceless, as in “hiss”."
      },
      {
        tr: "I eat rice and you eat potatoes.",
        why: "Remember the vowel change: <i>ich esse</i>, but <i>du isst</i>."
      }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "At the bar",
    title: "Ordering, offering, accepting, refusing",
    objectives: [
      "order a drink with einen, eine, ein",
      "offer with Möchten Sie ...? and answer with Ja, gern or Nein, danke",
      "see that in the accusative only the masculine singular changes"
    ],
    theory: [
      {
        h: "Offering, accepting, refusing",
        p: "To offer something to an acquaintance: <em>Möchtest du einen Kaffee?</em>; to someone you address as <em>Sie</em>: <em>Möchten Sie einen Kaffee?</em> To accept: <strong>Ja, gern</strong> or <strong>Ja, bitte</strong>. To refuse: <strong>Nein, danke</strong>. To ask for something: <em>Ich möchte einen Saft</em>, that is, “I'd like a juice”."
      },
      {
        trap: "In English, a bare “Thank you” after an offer can mean yes or no, depending on tone. In German, <em>danke</em> on its own is often heard as a refusal (“no, thank you”), while <em>bitte</em> sounds like acceptance. To avoid a misunderstanding, say <em>Ja, bitte</em> or <em>Ja, gern</em> if you accept, and <em>Nein, danke</em> if you refuse."
      },
      {
        h: "Möchte: a formula for now",
        p: "<em>Ich möchte ...</em> is the polite way to say what you want, equivalent to “I'd like”. The forms to learn now are <em>ich möchte</em>, <em>du möchtest</em> and <em>Sie möchten</em>. In these formulas the thing you want is the direct object and goes in the accusative: <em>Ich möchte einen Saft</em>."
      },
      {
        h: "The accusative: only the masculine changes",
        p: "The direct object (what you take, drink, order) stands in the <strong>accusative</strong>. Compared with the nominative, only the masculine singular changes: <strong>der → den</strong>, <strong>ein → einen</strong>, <strong>kein → keinen</strong>. The feminine, the neuter and the plural stay the same: <em>Die Cola ist kalt. Ich trinke die Cola.</em> (nominative and accusative: <em>die</em> in both), <em>Das ist ein Wasser. Ich nehme ein Wasser.</em> (<em>ein</em> in both)."
      },
      {
        contrast: "English articles never change with their job: <em>a coffee</em> is <em>a coffee</em> whether it is the subject or the object, and only pronouns keep a trace (<em>he, him</em>; <em>she, her</em>). German puts that marking on the article, but only for masculine nouns, a bit like <em>he → him</em>: <em>Der Kaffee ist heiß</em> (subject), but <em>Ich nehme den Kaffee</em> (object). That is why you say <em>Einen Kaffee, bitte</em> at the bar: behind it there is an “(ich nehme) einen Kaffee”."
      },
      {
        trap: "After <em>sein</em> (to be) the noun stays in the nominative, because there is no object: <em>Das ist ein Saft</em>, not “Das ist einen Saft”. <em>Einen</em> appears with verbs like <em>nehmen</em>, <em>trinken</em>, <em>essen</em>, <em>möchten</em>, <em>haben</em>."
      },
      {
        tip: "When you have to choose between <em>ein</em> and <em>einen</em>, check the gender of the noun: if it is masculine (<em>der Saft</em>, <em>der Kaffee</em>, <em>der Tee</em>) and it is the object, as when you order or say what you are having, use <em>einen</em>; as a subject it stays <em>ein</em>. English gives you no gender to rely on, which is why the course vocabulary always shows the article."
      }
    ],
    grammar: {
      title: "Nominative and accusative of the article",
      note: "<b>Only the masculine singular</b> changes. After <em>sein</em> you use the nominative.",
      table: {
        head: ["gender", "nominative", "accusative", "example"],
        rows: [
          ["masculine", "der / ein", "den / einen", "Ich nehme einen Saft."],
          ["feminine", "die / eine", "die / eine", "Ich möchte eine Cola."],
          ["neuter", "das / ein", "das / ein", "Ich nehme ein Wasser."],
          ["plural", "die / (none)", "die / (none)", "Ich möchte Pommes."]
        ]
      },
      examples: [
        { tr: "I'll have a juice.", note: "Saft is masculine: einen" },
        { tr: "I'd like a cola.", note: "feminine: no change" },
        { tr: "Would you like a glass of water?", note: "polite form" },
        { tr: "Yes, gladly." },
        { tr: "No, thank you." },
        { tr: "That is a juice.", note: "after sein: nominative" }
      ]
    },
    culture: {
      title: "A German look: Feierabend, Kneipe and Biergarten",
      text: "<p><i>Feierabend</i> is the end of the working day and, by extension, the free time that follows. People wish someone who is finishing work <i>Schönen Feierabend!</i> Many meet colleagues or friends in a <i>Kneipe</i>, an informal neighborhood pub where you usually find beer and soft drinks, and often something to eat. Compared with an American happy hour, it is usually not tied to special prices or a fixed time slot: <i>Feierabend</i> is the moment work ends, not a deal.</p><p>The <i>Biergarten</i> is a place with outdoor tables, typical of the warm season and of Bavarian tradition. In some traditional Biergärten you may bring your own food, but not everywhere: check the signs at the entrance. Often you order at the counter and carry your tray to the table, and in other places a waiter comes.</p><p>Ordering a water or a juice is perfectly normal: among the very common soft drinks is <i>Apfelschorle</i>, apple juice with sparkling water. Before drinking people say <i>Prost!</i> (cheers), and it is customary to look each other in the eye.</p>"
    },
    vocab: [
      "I'd like ... (polite formula)",
      "Would you like ...? (polite, Sie)",
      "Would you like ...? (informal, du)",
      "Yes, gladly.",
      "Yes, please.",
      "No, thank you.",
      "Cheers!",
      "orange juice",
      "apple juice",
      "mineral water",
      "glass",
      "bottle"
    ],
    exercises: [
      {
        tr: "All persons of trinken.",
        why: "<i>Trinken</i> is regular: stem <i>trink-</i> plus <i>-e, -st, -t, -en, -t, -en</i>."
      },
      {
        tr: "The verb bestellen (to order): ich, er, ihr.",
        why: "<i>Bestellen</i> is regular: stem <i>bestell-</i> plus the ending: <i>ich bestelle, er bestellt, ihr bestellt</i>."
      },
      {
        q: "Complete: “Ich möchte ___ Saft.” (I'd like a juice.)",
        hint: "der Saft is masculine; accusative",
        why: "<b>Einen</b>: after <i>möchte</i> comes the accusative, and for the masculine <i>ein</i> becomes <i>einen</i>."
      },
      {
        q: "Complete: “Ich nehme ___ Cola.” (I'll have a cola.)",
        hint: "die Cola is feminine",
        why: "<b>Eine</b>: the feminine does not change in the accusative."
      },
      {
        q: "Someone offers you: “Möchtest du ein Bier?” You do not want one. What do you answer?",
        opts: ["Ja, gern.", "Nein, danke.", "Prost!"],
        why: "<b>Nein, danke</b> is the clear refusal. <i>Ja, gern</i> accepts; <i>Prost!</i> is said before drinking."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Ich trinke einen Tee.",
          "Ich trinke ein Tee.",
          "Ich esse eine Suppe.",
          "Ich nehme ein Brot.",
          "Ich nehme eine Brot."
        ],
        why: "<i>Tee</i> is masculine (<i>einen</i>), <i>Suppe</i> is feminine (<i>eine</i>), <i>Brot</i> is neuter (<i>ein</i>)."
      },
      {
        tr: "I'd like an apple juice and a water.",
        why: "<i>Apfelsaft</i> is masculine: <i>einen</i>. <i>Wasser</i> is neuter: <i>ein</i>."
      },
      {
        q: "Translate: “An orange juice and a water, please.”",
        why: "<i>Einen Orangensaft</i> (masculine) and <i>ein Wasser</i> (neuter): the sentence is a shortened order, with an “(ich nehme/möchte) ...” behind it, so the accusative."
      },
      {
        tr: "I'd like an orange juice and a bottle of water, please.",
        why: "In <i>Orangensaft</i> the <b>g</b> sounds like the <i>s</i> in “measure” or the <i>g</i> in “beige” (/ʒ/), not a hard <i>g</i>, and <i>-saft</i> starts with a voiced <b>s</b>."
      },
      {
        tr: "An apple juice and a glass of water, please.",
        why: "<i>Glas</i> has a long <b>a</b>, as in “father”, and <i>Gläser</i> is the plural with an umlaut."
      }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Refusing politely",
    title: "Kein or nicht, and doch",
    objectives: [
      "negate a noun with kein",
      "negate a verb or an adjective with nicht",
      "answer a negative question with doch"
    ],
    theory: [
      {
        h: "Two negations, chosen by what you negate",
        p: "<strong>Kein</strong> negates a noun that has the indefinite article or no article: <em>Ich trinke kein Bier</em>, <em>Ich habe keinen Hunger</em>, <em>Wir haben keine Cola</em>. It takes the endings of <em>ein</em>: <em>kein</em> (masculine nominative and neuter), <em>keinen</em> (masculine accusative), <em>keine</em> (feminine and plural). <strong>Nicht</strong> negates everything else: a verb, an adjective, an adverb, or a noun with the definite article: <em>Ich komme nicht</em>, <em>Der Kaffee ist nicht heiß</em>, <em>Ich trinke den Tee nicht</em>."
      },
      {
        contrast: "English has “no” and “not any” in front of a noun (<em>I drink no beer</em>, <em>I don't drink any beer</em>): that is <em>kein</em>, as in <em>Ich trinke kein Bier</em>. English negates a verb with “do” plus “not” (<em>I don't come</em>, <em>I don't drink</em>); German has no “do” at all, and <em>nicht</em> simply goes into the sentence: <em>Ich komme nicht</em>, <em>Ich trinke nicht</em>. Word for word it is “I come not”, which is why it feels odd at first."
      },
      {
        h: "Where nicht goes",
        p: "Position: if <em>nicht</em> negates the whole sentence, it usually goes toward the <strong>end</strong>: <em>Ich komme heute nicht</em>. If it negates one particular word, it goes <strong>before</strong> that word: <em>Der Kaffee ist nicht heiß</em>, <em>Ich trinke nicht gern Bier</em>. This is a tendency, not a law: you will see it at work in the examples of the lesson."
      },
      {
        h: "Doch: contradicting a negative question",
        p: "If someone asks you a negative question (<em>Trinkst du kein Bier?</em>) and you want to say yes, the answer is <strong>doch</strong>: <em>Doch, ich trinke gern Bier</em>. If you want to confirm the negation, answer <em>Nein</em>: <em>Nein, ich trinke kein Bier</em>. English answers “Don't you drink beer?” with “Yes, I do” to contradict; that is where German uses <em>doch</em>."
      },
      {
        trap: "Do not turn “I don't drink beer” into <em>Ich trinke nicht Bier</em>: a noun with no article is negated with <em>kein</em>. Do not look for a German “do” either (there is no <em>Ich tue nicht trinken</em>). And do not stack two negations: after <em>kein</em> no other negation is needed, so “nicht kein” is wrong. With a yes answer to a negative question, <em>Ja</em> alone can be ambiguous, so use <em>doch</em>."
      },
      {
        tip: "A few formulas are enough to refuse politely: <em>Nein, danke</em>, <em>Heute nicht, danke</em>, <em>Kein Bier, bitte</em>. They are clear and kind, and they need no explanation."
      }
    ],
    grammar: {
      title: "Kein and nicht",
      note: "<b>Kein</b> negates nouns with the indefinite article or with no article; <b>nicht</b> negates the rest.",
      table: {
        head: ["gender", "nominative", "accusative", "example"],
        rows: [
          ["masculine", "kein", "keinen", "Ich trinke keinen Tee."],
          ["feminine", "keine", "keine", "Ich nehme keine Cola."],
          ["neuter", "kein", "kein", "Ich trinke kein Bier."],
          ["plural", "keine", "keine", "Wir haben keine Äpfel."]
        ]
      },
      examples: [
        { tr: "I don't drink beer.", note: "kein: a noun with no article" },
        { tr: "I'm not hungry.", note: "Hunger is masculine: keinen" },
        { tr: "The coffee is not hot.", note: "nicht: adjective" },
        { tr: "I'm not coming today.", note: "nicht: verb" },
        { tr: "Don't you drink beer? Yes I do, gladly.", note: "doch contradicts the negative question" },
        { tr: "I don't like to drink beer.", note: "nicht gern" }
      ]
    },
    vocab: [
      "neighborhood pub (Kneipe)",
      "beer garden (Biergarten)",
      "the end of the working day, free time after work",
      "hunger",
      "thirst",
      "alcohol",
      "non-alcoholic",
      "today",
      "yes I do, yes it is (answer to a negative question)",
      "not (verb, adjective, adverb)",
      "no, not a, not any (before a noun)",
      "to taste; to taste good",
      "still; another, more",
      "The check, please."
    ],
    exercises: [
      {
        q: "How do you say “I don't drink beer”?",
        opts: ["Ich trinke kein Bier.", "Ich trinke keinen Bier.", "Ich trinke keine Bier."],
        why: "<i>Bier</i> is neuter, so <b>kein</b>. To name what you do not drink (a noun with no article) you use <i>kein</i>."
      },
      {
        q: "Which negation is needed? “Ich komme heute ___.”",
        opts: ["kein", "nicht", "keine"],
        why: "Here a verb is negated, not a noun: <b>nicht</b>."
      },
      {
        q: "Complete: “Ich habe ___ Hunger.” (I'm not hungry.)",
        hint: "der Hunger is masculine; accusative",
        why: "<i>Haben</i> takes the accusative and <i>Hunger</i> is masculine: <b>keinen</b>."
      },
      {
        q: "Complete: “Der Kaffee ist ___ heiß.” (The coffee is not hot.)",
        hint: "negating an adjective",
        why: "An adjective is negated with <b>nicht</b>, placed in front of it."
      },
      {
        q: "Ich trinke ___ ... (object, with the definite article). Pick the right form for each noun.",
        why: "With the definite article, in the accusative only the masculine changes: <i>den Tee</i>, <i>den Saft</i>; <i>die Cola</i>, <i>die Limonade</i> and <i>das Bier</i>, <i>das Wasser</i> stay the same. A noun with the definite article is negated with <i>nicht</i>: <i>Ich trinke den Tee nicht</i>.",
        items: ["tea", "cola", "beer", "juice", "sweet fizzy soft drink", "water"]
      },
      {
        q: "Translate: “Today I don't drink beer.”",
        why: "<i>Heute trinke ich kein Bier</i>: with <i>heute</i> in first position, the subject moves after the verb."
      },
      {
        q: "Complete the answer.",
        tr: "Don't you drink beer? Yes I do, I drink beer gladly.",
        why: "<b>Doch</b> contradicts a negative question. <i>Ja</i> would be ambiguous."
      },
      {
        q: "A friend sees you without your usual glass.",
        setting: "After work, in a Kneipe.",
        lines: [
          { tr: "Don't you drink beer?" },
          { tr: "Answer that you do, but not today.", answerTr: "Yes I do, but not today." },
          { tr: "Then a juice?" },
          { tr: "Accept and order an apple juice.", answerTr: "Yes, gladly. An apple juice, please." }
        ]
      },
      {
        tr: "I'm hungry, but today I'm not eating fish.",
        why: "<i>Fisch</i> is masculine, hence <i>keinen Fisch</i>. The <b>sch</b> sounds like English “sh”, and in <i>Hunger</i> the <b>h</b> is pronounced as in “hat”."
      },
      {
        tr: "No, thank you. Today I don't drink alcohol.",
        why: "<i>Heute</i>: the group <b>eu</b> sounds like “oy” in “boy”."
      }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Check",
    title: "Unit 3 check",
    objectives: ["check the vowel change, the accusative, kein and nicht"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Do not look back at the lessons while you answer: if you do not remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: “Du ___ gern Fisch.” (You like to eat fish.)",
        hint: "essen, second person singular",
        why: "<b>Du isst</b>: the vowel changes and the ending shrinks."
      },
      {
        tr: "The verb sprechen: du, er, ihr.",
        why: "<i>du sprichst, er spricht, ihr sprecht</i>: the vowel changes only with <i>du</i> and <i>er</i>."
      },
      {
        tr: "The verb nehmen: ich, du, wir.",
        why: "<i>ich nehme, du nimmst, wir nehmen</i>: only the <i>du</i> form changes."
      },
      {
        q: "Complete: “Ich möchte ___ Apfelsaft.” (I'd like an apple juice.)",
        hint: "der Apfelsaft is masculine",
        why: "<b>Einen</b>: masculine accusative."
      },
      {
        q: "Complete: “Der Saft ist ___ kalt.” (The juice is not cold.)",
        hint: "negating an adjective",
        why: "An adjective is negated with <b>nicht</b>."
      },
      {
        q: "Pick the right indefinite article. “Ich nehme ___ ...”",
        items: ["coffee", "cola", "bread", "juice"]
      },
      {
        q: "How do you say “I don't eat meat”?",
        opts: ["Ich esse kein Fleisch.", "Ich esse keinen Fleisch.", "Ich esse keine Fleisch."],
        why: "<i>Fleisch</i> is neuter, so <b>kein</b>."
      },
      {
        q: "Translate: “Today I'm not drinking beer, I'll have a juice.”",
        why: "<i>Kein Bier</i> (a noun), <i>einen Saft</i> (masculine accusative)."
      },
      {
        tr: "You like to eat fish, but I don't eat fish.",
        why: "<i>Du isst</i> with the vowel change; <i>keinen Fisch</i> because <i>Fisch</i> is masculine."
      },
      {
        tr: "I'd like a juice, but not a beer, please.",
        why: "<i>Einen Saft</i> and <i>kein Bier</i>: the masculine changes, the neuter does not."
      }
    ]
  }
});
