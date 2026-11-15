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
  "unit:a1-u02": { title: "Who are you", grammarNote: "avere · numbers · jobs and nationalities" },
  "lesson:a1-u02-l1": {
    theme: "Meeting people",
    title: "Introducing yourself",
    objectives: [
      "give your name, where you're from and where you live",
      "use the verb chiamarsi",
      "ask other people the same things"
    ],
    theory: [
      {
        h: "\"My name is\" is a reflexive verb",
        p: "<strong>Chiamarsi</strong> literally means \"to call oneself\". Hence <em>mi chiamo</em> — \"I call myself\". The reflexive pronoun (<em>mi, ti, si…</em>) sits <b>before</b> the verb, which is the opposite of the English \"myself\" that trails after it."
      },
      {
        h: "Where you're from: essere di or venire da",
        p: "For a city you say <em>sono di Chicago</em> (\"I'm from Chicago\"); for a country, <em>vengo dagli Stati Uniti</em> or <em>sono americano/a</em>. Country names take an article (<em>l'Italia, gli Stati Uniti</em>), city names don't."
      },
      {
        trap: "Nationalities are written in <b>lowercase</b> in Italian: <em>sono americana</em>, <em>un ragazzo italiano</em>. English capitalizes them without exception, so this one takes real effort to unlearn — and it shows up in every written exercise."
      },
      {
        h: "Abitare — to live somewhere",
        p: "<em>Abitare a Roma</em> (a city), <em>abitare in Italia</em> (a country). The same a/in split comes back later with travel, so it's worth memorizing right now as a pair: <b>a + city, in + country</b>."
      }
    ],
    grammar: {
      title: "Chiamarsi (to be called) and asking about someone",
      table: {
        head: ["person", "chiamarsi", "example"],
        rows: [
          ["io", "mi chiamo", "Mi chiamo Anna."],
          ["tu", "ti chiami", "Come ti chiami?"],
          ["lui / lei / Lei", "si chiama", "Come si chiama, scusi?"],
          ["noi", "ci chiamiamo", "Ci chiamiamo Rossi."],
          ["voi", "vi chiamate", "Come vi chiamate?"],
          ["loro", "si chiamano", "Si chiamano Marco e Luca."]
        ]
      },
      examples: [
        { tr: "What's your name? — My name is Eva." },
        { tr: "Where are you from? — I'm from Boston." },
        { tr: "I'm American, but I live in Milan.", note: "nationality in lowercase" },
        { tr: "How old are you? — I'm twenty-eight.", note: "age always goes through avere" },
        { tr: "Nice to meet you, Marco. — The pleasure's mine." }
      ]
    },
    vocab: [
      "to be",
      "my name is…",
      "what's your name?",
      "where are you from?",
      "I'm from… (city)",
      "I live in… (city)",
      "American (m. / f.)",
      "Italian (m. / f.)",
      "first name",
      "last name",
      "nice to meet you",
      "me too",
      "really?"
    ],
    exercises: [
      {
        q: "How do you ask someone's name informally?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "The tu form: <i>ti chiami</i>. The Lei version is <i>come si chiama?</i>"
      },
      {
        q: "Which sentence is written correctly?",
        opts: ["Sono Americana.", "Sono americana.", "Sono la americana."],
        why: "Nationalities are lowercase, and take no article after essere."
      },
      { q: "Fill in: \"___ chiamo Marta.\"", why: "First person reflexive pronoun: mi chiamo." },
      {
        q: "Fill in: \"Abito ___ Roma.\" (I live in Rome.)",
        why: "Cities take <b>a</b>, countries take <b>in</b>: abito a Roma / abito in Italia."
      },
      {
        q: "Complete the introduction.",
        tr: "Hi! My name's Kate, I'm from Seattle and I live in Bologna.",
        why: "The three verbs that turn up in every first sentence about yourself."
      },
      { tr: "Nice to meet you, my name is Luca." },
      {
        q: "You're meeting someone at a language school.",
        setting: "First day at a language school in Florence.",
        lines: [
          { tr: "Hi! I'm Giulia. And you, what's your name?" },
          { tr: "Introduce yourself by name.", answerTr: "My name is Eva." },
          { tr: "Nice to meet you, Eva! Where are you from?" },
          { tr: "Say you're from Poland — that's the recorded model answer.", answerTr: "I'm from Poland." }
        ]
      },
      { tr: "My name is Elena and I live in Naples." },
      { tr: "Nice to meet you!" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Core grammar",
    title: "To have, and numbers 0-100",
    objectives: [
      "conjugate avere",
      "use expressions like ho fame, ho freddo, ho ventotto anni",
      "count to a hundred and give a price"
    ],
    theory: [
      {
        h: "Avere does more work than English \"have\"",
        p: "Italian uses <strong>avere</strong> where English uses \"to be\". <em>Ho fame</em> is literally \"I have hunger\", not \"I am hungry\". The same logic covers thirst, cold, heat, fear, sleepiness and age — so \"I am cold\" comes out as <em>ho freddo</em>, and <em>sono freddo</em> would mean you're a cold person."
      },
      {
        h: "Age: always avere",
        p: "<em>Ho trent'anni</em> — literally \"I have thirty years\". <em>Sono trenta</em> means nothing at all. Note the apostrophe: <em>trent'anni</em>, <em>vent'anni</em> — the final vowel of the ten drops before <em>anni</em>."
      },
      {
        h: "The h you never hear",
        p: "The forms <em>ho, hai, ha, hanno</em> start with a silent <b>h</b>. It isn't pronounced at all — it exists purely to keep them apart from other words: <em>ho</em> (I have) versus <em>o</em> (or), <em>ha</em> (has) versus <em>a</em> (to)."
      },
      {
        h: "Numbers: tens plus units",
        p: "From 20 up, numbers are written as one word: <em>ventidue</em>, <em>trentasei</em>. Before <em>uno</em> and <em>otto</em> the ten drops its final vowel: <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>."
      }
    ],
    grammar: {
      title: "Avere (to have) and numbers",
      table: {
        head: ["person", "avere", "expression"],
        rows: [
          ["io", "ho", "Ho fame. (I'm hungry.)"],
          ["tu", "hai", "Hai freddo? (Are you cold?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (He's right.)"],
          ["noi", "abbiamo", "Abbiamo sete. (We're thirsty.)"],
          ["voi", "avete", "Avete tempo? (Do you have time?)"],
          ["loro", "hanno", "Hanno paura. (They're afraid.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "before uno and otto the ten loses its vowel" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "I'm twenty-eight years old." }
      ]
    },
    vocab: [
      "to have",
      "I'm hungry",
      "I'm thirsty",
      "I'm cold / hot",
      "I'm sleepy",
      "I'm afraid",
      "I'm right",
      "I need…",
      "how old are you?",
      "how much is it?",
      "euro",
      "number",
      "phone number"
    ],
    exercises: [
      { why: "Four forms start with a silent h: ho, hai, ha, hanno." },
      {
        q: "How do you say \"I'm hungry\"?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Physical states go through avere: ho fame, ho sete, ho freddo."
      },
      { q: "What number is \"settantasei\"?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Write it in digits: \"novantatré\"", why: "novanta (90) + tre (3)." },
      {
        q: "Fill in: \"Ho vent___ anni.\" (I'm twenty.)",
        hint: "something disappears before \"anni\"",
        why: "Vent'anni — the ten loses its final vowel before anni."
      },
      { q: "\"How old are you?\"", why: "Literally: \"how many years do you have\"." },
      {
        q: "Match the avere expression with its meaning.",
        pairs: ["I'm thirsty", "I'm sleepy", "I'm afraid", "I'm right"]
      },
      {
        q: "Complete the exchange at the register.",
        tr: "— How much is it? — Thirty-two euros. — I only have twenty, sorry."
      },
      { tr: "I'm thirty-five and I live in Turin." },
      { tr: "How much is a cappuccino?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Work and people",
    title: "Jobs and work",
    objectives: [
      "say what you do for a living",
      "use fare il / essere un",
      "form the feminine of job titles"
    ],
    theory: [
      {
        h: "Two constructions, two shades",
        p: "\"I'm an architect\" has two Italian versions. <strong>Faccio l'architetto</strong> (literally \"I do the architect\") is about the job you practice and is the commonest in conversation. <strong>Sono architetto</strong> stresses identity or qualification. After <em>fare</em> comes the definite article; after <em>essere</em>, usually none at all — so the English \"an\" disappears."
      },
      {
        h: "Feminine forms",
        list: [
          "-o → -a: <em>l'impiegato → l'impiegata</em>",
          "-e → -essa: <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice: <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em>",
          "no change: <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Job titles in flux",
        p: "Forms like <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> are now standard in the press and in official documents, though twenty years ago they caused arguments. In speech you'll still hear the older <em>l'avvocato</em> used of a woman. You'll meet both."
      },
      {
        contrast: "English \"I work as…\" translates literally as <em>lavoro come…</em>, and it's correct — but Italians far more often just say <em>faccio il/la…</em> Reaching for \"lavoro come\" every time is a small tell."
      }
    ],
    grammar: {
      title: "Fare (to do, to make) — present tense",
      note: "Irregular, and at the same time one of the three most frequent Italian verbs.",
      table: {
        head: ["person", "fare", "example"],
        rows: [
          ["io", "faccio", "Faccio l'insegnante."],
          ["tu", "fai", "Che lavoro fai?"],
          ["lui / lei / Lei", "fa", "Fa il medico."],
          ["noi", "facciamo", "Facciamo colazione."],
          ["voi", "fate", "Che cosa fate?"],
          ["loro", "fanno", "Fanno gli avvocati."]
        ]
      },
      examples: [
        { tr: "What do you do?" },
        { tr: "I'm a journalist." },
        { tr: "I'm an engineer.", note: "after essere, usually no article" },
        { tr: "I work at an agency." },
        { tr: "I'm not working at the moment." },
        { tr: "I'm still studying, I'm in my final year." }
      ]
    },
    vocab: [
      "work, job",
      "teacher",
      "doctor",
      "engineer",
      "lawyer",
      "journalist",
      "office worker",
      "cook",
      "sales assistant",
      "manual worker",
      "self-employed person",
      "I'm looking for work"
    ],
    exercises: [
      { why: "Mind the double c in faccio and facciamo." },
      {
        q: "Which sentence means \"I'm a teacher\" and sounds most natural?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + definite article is the commonest way to name your job in speech."
      },
      {
        q: "What's the feminine of \"il professore\"?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "The -e → -essa pattern, like studente → studentessa."
      },
      {
        q: "Fill in: \"Mia sorella fa ___ dottoressa.\"",
        why: "After fare comes the definite article, matched to the gender: la dottoressa."
      },
      { q: "Choose the article.", items: ["cook (f.)", "engineer", "student (f.)", "worker"] },
      { q: "\"What do you do?\" (informal)", why: "Che lavoro fai? — literally \"what work do you do\"." },
      {
        q: "Match the masculine form with the feminine.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "I work at a bank in Milan." },
      { tr: "I'm an architect, I work with my brother." },
      { tr: "What do you do? I'm a journalist." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Core grammar",
    title: "The first conjugation",
    objectives: [
      "conjugate any regular -are verb",
      "handle the spelling shifts in cercare, pagare, mangiare",
      "build a negative and a question"
    ],
    theory: [
      {
        h: "The biggest and most predictable group",
        p: "About 70% of Italian verbs end in <strong>-are</strong>, and nearly all of them behave identically. Cut the infinitive ending and add six of your own: <em>-o, -i, -a, -iamo, -ate, -ano</em>. Learn one pattern and you can handle hundreds of words."
      },
      {
        h: "Stress where you can't see it",
        p: "In the <em>loro</em> form the stress falls on the third syllable from the end: <b>par</b>-la-no, <b>la</b>-vo-ra-no. Not \"parla-NO\". The difference is audible and Italians catch it."
      },
      {
        h: "Spelling that rescues the pronunciation",
        list: [
          "<b>-care / -gare</b> add an <b>h</b> before -i and -e: <em>cercare → cerchi, cerchiamo</em>; <em>pagare → paghi, paghiamo</em>",
          "<b>-ciare / -giare</b> drop the <b>i</b> before -i: <em>mangiare → mangi</em> (not \"mangii\"), <em>cominciare → cominci</em>",
          "unstressed <b>-iare</b> also drops one i: <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Negatives and questions need no rebuilding",
        p: "The negative is one word, <strong>non</strong>, before the verb: <em>non parlo italiano</em>. A question needs no restructuring at all — intonation is enough: <em>Parli italiano?</em> There is no Italian equivalent of the English auxiliary \"do\", and inventing one (\"fai parlare?\") is a classic beginner reflex."
      }
    ],
    grammar: {
      title: "Parlare (to speak) — the -ARE pattern",
      table: {
        head: ["person", "ending", "parlare", "lavorare"],
        rows: [
          ["io", "-o", "parlo", "lavoro"],
          ["tu", "-i", "parli", "lavori"],
          ["lui / lei / Lei", "-a", "parla", "lavora"],
          ["noi", "-iamo", "parliamo", "lavoriamo"],
          ["voi", "-ate", "parlate", "lavorate"],
          ["loro", "-ano", "parlano", "lavorano"]
        ]
      },
      examples: [
        { tr: "I speak a little Italian." },
        { tr: "I don't speak well, but I understand." },
        { tr: "Do you study at the university?", note: "a question by intonation alone" },
        { tr: "We eat at eight." },
        { tr: "Are you looking for work in Milan?", note: "cercare → cerchi, with an h" },
        { tr: "They live near the center.", note: "stress: A-bi-ta-no" }
      ]
    },
    vocab: [
      "to speak, to talk",
      "to work",
      "to study",
      "to live (somewhere)",
      "to eat",
      "to buy",
      "to look for",
      "to pay",
      "to listen",
      "to watch, to look at",
      "to wait",
      "to start"
    ],
    exercises: [
      { why: "The pattern that covers most Italian verbs." },
      {
        tr: "tu, noi — watch the spelling",
        why: "Cerchi and cerchiamo take an <b>h</b> to keep the hard k sound."
      },
      {
        q: "Which form is right for \"you eat\"?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Verbs in -giare drop the i before the -i ending: mangi."
      },
      {
        q: "Fill in: \"Loro ___ a Bologna.\" (They live in Bologna.)",
        why: "abitare, the loro form: -ano."
      },
      {
        q: "Make it negative: \"Parlo italiano.\" → \"___ parlo italiano.\"",
        why: "One word, non, before the verb — that's the whole negation."
      },
      { q: "\"We're looking for an apartment in Rome.\"", why: "cercare → cerchiamo (with h), a + city." },
      {
        q: "Which forms belong to \"studiare\"?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "\"Studii\" doesn't exist — the double i reduces to one."
      },
      { tr: "I don't work on Saturdays.", why: "\"Il sabato\" with the article means \"on Saturdays\", regularly." },
      { tr: "I've been studying Italian for three months." },
      { tr: "I don't speak well, but I understand almost everything." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Test",
    title: "Unit 2 test",
    objectives: ["check avere, fare, chiamarsi, numbers and the first conjugation"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"___ chiamo Peter.\"" },
      { q: "\"Quanti anni ___?\" (How old are you?)" },
      { q: "What number is \"ottantaquattro\"?", opts: ["48", "84", "94"] },
      { q: "\"I'm hungry\" in Italian:", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "Which form is right for \"you pay\"?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare adds an h before -i."
      },
      { q: "Fill it in.", tr: "I'm American, I live in Verona and I'm a teacher." },
      { q: "\"I don't speak Italian.\"" },
      { tr: "I'm twenty-seven and I'm looking for work." },
      { tr: "My name is Anna and I'm a journalist." }
    ]
  },
  "unit:a1-u03": {
    title: "Aperitivo and food",
    grammarNote: "piacere · partitive article · -ere and -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Food",
    title: "The verb piacere",
    objectives: [
      "say what you like and don't like",
      "choose between piace and piacciono",
      "ask what other people like"
    ],
    theory: [
      {
        h: "The sentence stands on its head",
        p: "<strong>Piacere</strong> doesn't mean \"to like\", it means \"to be pleasing\". <em>Mi piace la pizza</em> is literally \"pizza is pleasing to me\". The grammatical subject is <b>the thing</b>, and the person doing the liking shows up as an indirect object (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "Which is why the verb has two forms",
        p: "Since the thing is the subject, the thing decides the number: <em>mi piace <b>il</b> caffè</em> (one thing) versus <em>mi piacciono <b>gli</b> spaghetti</em> (several). Before an infinitive it's always singular: <em>mi piace viaggiare</em>."
      },
      {
        contrast: "English \"I like pizza\" puts you in the subject slot, which is exactly backwards, and it's why beginners produce <em>io piaccio la pizza</em> (\"I am pleasing to the pizza\"). Don't build the sentence from \"like\". Build it from \"it appeals to me\": the thing comes first, you come second. Once you hear <em>mi piace</em> as \"to me it appeals\", the agreement stops being mysterious."
      },
      {
        h: "Who's doing the liking: mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — to me",
          "<b>ti</b> piace — to you",
          "<b>gli</b> piace — to him; <b>le</b> piace — to her",
          "<b>ci</b> piace — to us · <b>vi</b> piace — to you (pl.) · <b>gli</b> piace — to them"
        ]
      },
      {
        trap: "The negative goes before the pronoun, not before the verb: <b>non</b> mi piace. Never \"mi non piace\"."
      }
    ],
    grammar: {
      title: "Piacere — the sentence pattern",
      note: "[pronoun] + piace/piacciono + [thing, with its article]",
      table: {
        head: ["what we like", "form", "example"],
        rows: [
          ["one thing", "piace", "Mi piace il vino rosso."],
          ["several things", "piacciono", "Mi piacciono i dolci."],
          ["an activity", "piace", "Mi piace cucinare."],
          ["negative", "non … piace", "Non mi piace il pesce crudo."],
          ["question", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "I like coffee a lot." },
        { tr: "Do you like spritz?" },
        { tr: "We don't like warm beer." },
        { tr: "She likes dancing." },
        { tr: "Marco likes fish.", note: "with a name you add \"a\" in front" },
        { tr: "I'd love to try it.", note: "a conditional form — learn it as a set phrase" }
      ]
    },
    vocab: [
      "aperitivo (drink plus snacks)",
      "spritz",
      "red / white wine",
      "beer",
      "olives",
      "chips / fries",
      "savory snacks",
      "cured ham",
      "cheese",
      "sweets, desserts",
      "fish",
      "meat",
      "to cook",
      "to taste, to try"
    ],
    culture: {
      title: "Through Italian eyes: aperitivo is not dinner",
      text: "<p><b>Aperitivo</b> starts around 6:30 p.m. and runs to about 8:30. You pay for the drink (7-12 euros depending on the city) and the food at the bar comes with it. In Milan it has grown into a buffet called <i>apericena</i> — halfway to dinner.</p><p>The rule nobody states out loud: <b>take a reasonable amount</b>. A plate stacked into a tower gives away a foreigner faster than an accent does.</p><p>The classics: <i>spritz</i> (Aperol or Campari), <i>negroni</i>, a glass of wine. Beer passes too, though purists will wrinkle their noses.</p>"
    },
    exercises: [
      {
        q: "\"___ piacciono le olive.\" Why piacciono and not piace?",
        opts: ["Because it's about several people", "Because \"le olive\" is plural", "Because it's a past tense"],
        why: "The verb agrees with the thing being liked — and that thing is plural."
      },
      { q: "Fill in: \"Mi ___ il vino rosso.\"", why: "One singular thing → piace." },
      { q: "Fill in: \"Non mi ___ i film horror.\"", why: "\"I film\" is plural → piacciono." },
      {
        q: "Which sentence is correct?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non goes in front of the whole pronoun + verb group."
      },
      {
        q: "How do you say \"Marco likes fish\"?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "The person doing the liking takes the preposition <b>a</b> in front of their name."
      },
      { q: "\"I like cooking.\"", why: "Before an infinitive it's always the singular piace." },
      { q: "Match the pronoun with the person.", pairs: ["to me", "to you", "to her", "to us"] },
      {
        q: "Complete the conversation over an aperitivo.",
        tr: "— Do you like spritz? — Yes, a lot! But I don't like olives."
      },
      { tr: "I really like Italian cheeses." },
      { tr: "I like aperitivo, but I don't like olives." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Core grammar",
    title: "The second conjugation and c'è / ci sono",
    objectives: [
      "conjugate regular -ere verbs",
      "use c'è and ci sono",
      "describe what there is in a place"
    ],
    theory: [
      {
        h: "Almost like -are, but not quite",
        p: "The <strong>-ere</strong> group differs from the first in only three endings: <em>-e</em> instead of <em>-a</em>, <em>-ete</em> instead of <em>-ate</em>, <em>-ono</em> instead of <em>-ano</em>. The <em>noi</em> form (<em>-iamo</em>) is shared by all three conjugations — the easiest ending in the language."
      },
      {
        h: "This is where most irregulars hide",
        p: "A lot of very common -ere verbs have odd forms — <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Their irregularity shows up mainly in the past tense and the participle, which we'll get to at A2."
      },
      {
        h: "C'è and ci sono",
        p: "<strong>C'è</strong> (\"there is\") and <strong>ci sono</strong> (\"there are\") say that something exists in a place. The choice depends on the number of things, not on the person: <em>c'è un problema</em>, <em>ci sono due problemi</em>. This one maps neatly onto English, which is a relief."
      },
      {
        trap: "Don't confuse <b>c'è</b> (there is) with <b>è</b> (it is). <em>Il ristorante è chiuso</em> — the restaurant is closed. <em>C'è un ristorante qui vicino</em> — there's a restaurant nearby."
      }
    ],
    grammar: {
      title: "Leggere (to read) — the -ERE pattern",
      table: {
        head: ["person", "ending", "leggere", "prendere"],
        rows: [
          ["io", "-o", "leggo", "prendo"],
          ["tu", "-i", "leggi", "prendi"],
          ["lui / lei / Lei", "-e", "legge", "prende"],
          ["noi", "-iamo", "leggiamo", "prendiamo"],
          ["voi", "-ete", "leggete", "prendete"],
          ["loro", "-ono", "leggono", "prendono"]
        ]
      },
      examples: [
        { tr: "I'll have a coffee.", note: "\"prendere\" is the standard verb for ordering" },
        { tr: "Are you reading the menu?" },
        { tr: "I can't see the waiter." },
        { tr: "Is there a free table?" },
        { tr: "There are two seats at the bar." },
        { tr: "We're writing the name down for the reservation." }
      ]
    },
    vocab: [
      "to take, to order",
      "to read",
      "to write",
      "to see",
      "to ask",
      "to answer",
      "to put",
      "to close",
      "there is / there are",
      "seat, place",
      "free / taken",
      "nearby"
    ],
    exercises: [
      { why: "Note -e, -ete, -ono — that's the whole difference from the -are group." },
      {
        q: "Which ending is shared by all three conjugations?",
        opts: ["-o in the io form", "-iamo in the noi form", "-ono in the loro form"],
        why: "The noi form is always -iamo, whatever the group."
      },
      { q: "Fill in: \"___ un tavolo libero?\" (Is there a free table?)", why: "One table → c'è." },
      {
        q: "Fill in: \"___ tre persone in fila.\" (There are three people in line.)",
        why: "Plural → ci sono."
      },
      {
        q: "\"Il bar è chiuso\" versus \"C'è un bar qui vicino\" — what's the difference?",
        opts: [
          "Nothing, they're synonyms",
          "The first describes the bar, the second says one exists nearby",
          "The second is in the past tense"
        ],
        why: "è describes, c'è states that something is present in a place."
      },
      { q: "\"I'll have a beer, and you?\"", why: "Prendere is the default ordering verb in Italy." },
      {
        q: "Which verbs belong to the -ere group?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "I can't see the waiter." },
      { tr: "Is there a table for two?" },
      { tr: "We'll have two spritzes." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Core grammar",
    title: "The third conjugation and the -isc- pattern",
    objectives: [
      "conjugate verbs like dormire and verbs like capire",
      "recognize which -ire verbs need the -isc- insert",
      "use preferire to express a preference"
    ],
    theory: [
      {
        h: "One ending, two behaviors",
        p: "Verbs in <strong>-ire</strong> split into two subgroups. The first (<em>dormire, partire, sentire, aprire, offrire</em>) conjugates straightforwardly. The second (<em>capire, finire, preferire, pulire, spedire</em>) inserts <b>-isc-</b> in four forms: <em>io, tu, lui/lei, loro</em>. The <em>noi</em> and <em>voi</em> forms go without it."
      },
      {
        h: "How you know which group it is",
        p: "There is no rule — you memorize it. It helps that the <em>-isc-</em> group is the larger one and takes in nearly all newer verbs (<em>gestire, inserire, garantire</em>). Dictionaries mark it with <i>(-isc-)</i> next to the entry."
      },
      {
        tip: "The -isc- pattern has the shape of a bracket: four forms with the insert on the outside, two without it in the middle. Learn the rhythm: <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      },
      {
        h: "Preferire — a very useful verb",
        p: "<em>Preferisco il vino bianco</em> (\"I prefer white wine\") is a phrase you'll use in every restaurant and shop. It works with a noun or with an infinitive: <em>preferisco restare a casa</em>."
      }
    ],
    grammar: {
      title: "Dormire (no -isc-) versus capire (with -isc-)",
      table: {
        head: ["person", "dormire", "capire", "in English"],
        rows: [
          ["io", "dormo", "capisco", "I sleep / I understand"],
          ["tu", "dormi", "capisci", "you sleep / you understand"],
          ["lui / lei", "dorme", "capisce", "he sleeps / he understands"],
          ["noi", "dormiamo", "capiamo", "we sleep / we understand"],
          ["voi", "dormite", "capite", "you sleep / you understand"],
          ["loro", "dormono", "capiscono", "they sleep / they understand"]
        ]
      },
      examples: [
        { tr: "I don't understand, could you say that again?" },
        { tr: "I'd prefer a table outside." },
        { tr: "What time do you finish work?" },
        { tr: "The shop opens at nine.", note: "aprire — no -isc-" },
        { tr: "We're leaving tomorrow morning." },
        { tr: "They understand everything." }
      ]
    },
    vocab: [
      "to understand",
      "to finish",
      "to prefer",
      "to clean",
      "to send",
      "to sleep",
      "to leave, to depart",
      "to open",
      "to offer, to buy (a round)",
      "to hear, to feel",
      "to follow",
      "could you repeat that?"
    ],
    exercises: [
      { why: "The bracket: -isc- in io, tu, lui/lei and loro; absent in noi and voi." },
      { why: "Dormire goes straight through, with no insert." },
      {
        q: "Which verb needs the -isc- insert?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Fill in: \"Noi non ___ bene.\" (We don't understand well.)",
        hint: "the noi form has no insert",
        why: "Capiamo — in the noi and voi forms the -isc- disappears."
      },
      { q: "Fill in: \"Loro ___ alle sette.\" (They finish at seven.)", why: "finire with -isc- in the loro form." },
      { q: "\"I'd prefer a table outside.\"" },
      { q: "Which forms contain -isc-?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "I don't understand, could you repeat that?" },
      { tr: "I'd rather leave early tomorrow morning." },
      { tr: "Sorry, I don't understand. Could you say that again?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Food",
    title: "The partitive article and quantities",
    objectives: [
      "express an unspecified quantity with del, della, dei…",
      "use un po' di and un chilo di",
      "ask for groceries in a shop"
    ],
    theory: [
      {
        h: "Some of something — without a word for \"some\"",
        p: "Italian expresses an unspecified quantity with the <strong>partitive article</strong>: the preposition <em>di</em> fused with the definite article. <em>Vorrei del pane</em> — \"I'd like some bread\". In the plural it covers English \"some\" as well: <em>dei pomodori</em> — \"some tomatoes\"."
      },
      {
        h: "The forms",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "The alternatives",
        p: "Instead of the partitive you can use <strong>un po' di</strong> (\"a bit of\") or a measure: <em>un chilo di, un etto di, mezzo litro di</em>. Under negation the partitive usually vanishes: <em>non ho pane</em>, not \"non ho del pane\"."
      },
      {
        contrast: "English \"some\" is the closest anchor: where you'd say \"some bread\" rather than \"a bread\" or \"the bread\", Italian says <em>del pane</em>. The difference is that English can drop it entirely — \"I bought bread\" is fine — while Italian normally wants the partitive there."
      },
      {
        tip: "<b>Un etto</b> is 100 grams and it's the working unit at the deli counter: <em>due etti di prosciutto</em> = about half a pound of ham."
      }
    ],
    grammar: {
      title: "The partitive article and quantity expressions",
      table: {
        head: ["context", "form", "example"],
        rows: [
          ["m. + consonant", "del", "del pane"],
          ["m. + s+cons., z", "dello", "dello zucchero"],
          ["+ vowel", "dell'", "dell'acqua, dell'olio"],
          ["f. + consonant", "della", "della carne"],
          ["m. plural", "dei / degli", "dei pomodori, degli spinaci"],
          ["f. plural", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "I'd like some bread." },
        { tr: "I'm buying some apples and some grapes." },
        { tr: "A bit of salt, not too much." },
        { tr: "Two hundred grams of prosciutto crudo." },
        { tr: "Half a liter of milk." },
        { tr: "I don't have any sugar at home.", note: "no partitive under negation" }
      ]
    },
    vocab: [
      "bread",
      "milk",
      "water",
      "sugar",
      "salt",
      "oil, olive oil",
      "tomatoes",
      "apples",
      "a hundred grams",
      "a kilo",
      "a bit",
      "half a liter",
      "that's enough, thanks",
      "how much would you like?"
    ],
    exercises: [
      {
        q: "How do you ask for some bread?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "The partitive <b>del</b> expresses an unspecified quantity."
      },
      {
        q: "Fill in: \"Compro ___ acqua.\" (I'm buying water.)",
        why: "di + l' = dell', because acqua starts with a vowel."
      },
      {
        q: "Fill in: \"Vorrei ___ mele.\" (I'd like some apples.)",
        why: "di + le = delle, feminine plural."
      },
      {
        q: "Choose the partitive article.",
        items: ["bread", "sugar", "meat", "oil", "tomatoes", "spinach"]
      },
      {
        q: "How much is \"due etti\"?",
        opts: ["20 grams", "200 grams", "2 kilos"],
        why: "Un etto is 100 g, so due etti = 200 g."
      },
      { q: "\"Half a liter of milk, please.\"" },
      {
        q: "You're at the counter in a grocery store.",
        setting: "A neighborhood alimentari, at the deli counter.",
        lines: [
          { tr: "Good morning! What can I get you?" },
          { tr: "Ask for 200 g of ham.", answerTr: "Two hundred grams of ham, please." },
          { tr: "Here you are. Anything else?" },
          { tr: "Ask for some bread as well.", answerTr: "Some bread too, thanks." }
        ]
      },
      { q: "Complete the shopping list.", tr: "I'm buying bread, water and tomatoes." },
      { tr: "A kilo of tomatoes and some basil, please." },
      { tr: "Two hundred grams of cheese, please. That's all." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Test",
    title: "Unit 3 test",
    objectives: ["check piacere, the -ere and -ire conjugations, the partitive"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"Mi ___ gli spaghetti.\" (I like spaghetti.)" },
      { q: "\"Non mi ___ il pesce crudo.\"" },
      {
        q: "\"Marco likes wine\" is:",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "\"___ due posti liberi.\" (There are two free seats.)" },
      { q: "The partitive article:", items: [, , , ] },
      { q: "\"I prefer white wine.\"" },
      { tr: "There are olives and cheese." },
      { tr: "I really like the Italian aperitivo." }
    ]
  }
});
