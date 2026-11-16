/* ============================================================
   Learner-language text (en) for data/core/a2-02.js, unit a2-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a2-u05": {
    title: "Home and neighborhood",
    grammarNote: "adjective after ein, kein and possessives · stellen/stehen, legen/liegen · gender of compounds · Könnten Sie ...?"
  },
  "lesson:a2-u05-l1": {
    theme: "Looking for a home",
    title: "I'm looking for a bright apartment",
    objectives: [
      "read a rental ad with adjectives before the noun",
      "choose the adjective ending after ein, kein and possessives",
      "describe a home with hell, ruhig, günstig, möbliert"
    ],
    theory: [
      {
        h: "The adjective before the noun",
        p: "Before a noun the adjective takes an <strong>ending</strong> that shows gender, number and case. After <em>ein, kein</em> and the possessives (<em>mein, dein, sein ...</em>) one practical rule covers most of it: where <em>ein</em> has <strong>no ending</strong> (masculine nominative, neuter nominative and accusative) the adjective carries it, <strong>-er</strong> or <strong>-es</strong>. In the feminine nominative and accusative the adjective takes <strong>-e</strong>; in all other cases, the dative included, <strong>-en</strong>. <em>Ich suche eine helle Wohnung. Die Wohnung hat einen großen Balkon. Das ist ein altes Haus.</em>"
      },
      {
        contrast: "English adjectives never change: “a bright apartment”, “a new balcony”, “new neighbors”. German adjectives before a noun change with the gender, number and case of that noun: <em>eine helle Wohnung</em>, <em>einen großen Balkon</em> (masculine accusative). After <em>sein</em> they stay unchanged, just as in English: <em>Die Wohnung ist hell</em>, with no ending. Since English nouns have no gender, “a bright apartment” gives you no clue about the ending, so learn each noun with its article: <em>die Wohnung</em> is feminine, so <em>eine helle Wohnung</em>, and <em>das Haus</em> is neuter, so <em>ein altes Haus</em>."
      },
      {
        trap: "The most common mistake is mixing up <strong>-en</strong> and <strong>-er</strong>. <em>-er</em> shows up in the masculine nominative (<em>ein neuer Balkon</em>); already in the accusative it becomes <em>-en</em> (<em>einen neuen Balkon</em>). Also, <em>Wohnung</em> and <em>Haus</em> are not interchangeable: <em>die Wohnung</em> is the apartment (flat) where you live, whether you rent it or own it, and <em>das Haus</em> is the whole building or house."
      },
      {
        tip: "<em>dunkel</em> drops its <em>e</em> before an ending: <em>eine dunkle Küche, ein dunkles Zimmer</em>. Possessives follow the same rule as <em>ein</em>: <em>mein neuer Nachbar, meine neue Wohnung</em>. In the plural after <em>kein</em> and the possessives the adjective takes <em>-en</em>: <em>keine neuen Möbel</em> (note that <em>Möbel</em> is plural in German, while “furniture” is singular in English)."
      }
    ],
    grammar: {
      title: "Adjective after ein, kein and possessives",
      note: "Where <b>ein</b> has no ending the adjective carries it (<b>-er, -es</b>); feminine nominative and accusative <b>-e</b>; in the other cases <b>-en</b>.",
      table: {
        head: ["case", "masculine", "feminine", "neuter"],
        rows: [
          ["nominative", "ein neuer Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["accusative", "einen neuen Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["dative", "einem neuen Balkon", "einer neuen Küche", "einem neuen Zimmer"]
        ]
      },
      examples: [
        { tr: "I'm looking for a bright apartment.", note: "Wohnung is feminine: eine helle" },
        { tr: "The apartment has a large balcony.", note: "masculine accusative: einen großen" },
        { tr: "It's an old house.", note: "neuter nominative: ein altes" },
        { tr: "We don't have a new kitchen.", note: "kein + feminine: keine neue" },
        { tr: "This is my new neighbor.", note: "possessive like ein: mein neuer" },
        { tr: "She lives in a small apartment.", note: "dative feminine: einer kleinen" }
      ]
    },
    vocab: [
      "apartment, flat",
      "rent (the monthly payment)",
      "balcony",
      "neighbor",
      "ad, listing",
      "bright, light",
      "dark",
      "quiet",
      "inexpensive, affordable",
      "furnished",
      "to look for",
      "to rent (as a tenant)"
    ],
    exercises: [
      {
        q: "How do you say “I'm looking for a bright apartment”?",
        opts: ["Ich suche eine helle Wohnung.", "Ich suche ein helle Wohnung.", "Ich suche eine heller Wohnung."],
        why: "<i>Wohnung</i> is feminine: after <i>eine</i> the adjective takes <b>-e</b>, so <i>helle</i>."
      },
      {
        q: "Complete with the right ending: “Das ist ein ___ Haus.” (alt)",
        opts: ["alter", "altes", "alten"],
        why: "<i>Haus</i> is neuter and in the nominative <i>ein</i> has no ending, so the adjective carries it: <b>-es</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Wir wohnen in einer ruhige Straße.",
          "Wir wohnen in einer ruhigen Straße.",
          "Wir wohnen in einer ruhiger Straße."
        ],
        why: "After <i>in</i> answering <i>wo?</i> the case is the dative, and the dative takes <b>-en</b>: <i>in einer ruhigen Straße</i>."
      },
      {
        q: "Complete: “Das ist meine ___ Wohnung.” (neu, with the ending)",
        hint: "possessive + feminine nominative",
        why: "After <i>meine</i> the feminine nominative takes <b>-e</b>: <i>neue</i>."
      },
      {
        q: "Match each adjective to its meaning.",
        pairs: ["bright", "dark", "quiet", "inexpensive"]
      },
      {
        tr: "I'm looking for a quiet and inexpensive apartment.",
        why: "<i>Ich suche eine ruhige und günstige Wohnung</i>: two adjectives joined by <i>und</i> take the same ending, <b>-e</b>. The reverse order works too."
      },
      {
        q: "Complete the sentence.",
        tr: "The apartment has a large balcony and a new kitchen.",
        why: "<i>Balkon</i> is masculine in the accusative: <b>einen großen</b> Balkon. <i>Küche</i> is feminine: <b>eine neue</b> Küche."
      },
      {
        tr: "We're looking for an inexpensive apartment.",
        why: "The finite verb is in second position: <i>Wir suchen eine günstige Wohnung</i>. The adjective <i>günstige</i> takes <b>-e</b> because <i>Wohnung</i> is feminine."
      },
      {
        tr: "The apartment has a large balcony and a new kitchen.",
        why: "In <i>großen</i> the <b>ß</b> is a voiceless <b>s</b> and the <b>o</b> is long; in <i>Küche</i> the <b>ü</b> is short and open [ʏ] and the <b>ch</b> is [ç], a softer sound than [x], like the <b>h</b> in “huge”: <i>Küche</i> [ˈkʏçə]."
      },
      {
        tr: "I'm looking for a bright and quiet apartment.",
        why: "In <i>Wohnung</i> the <b>h</b> is silent and lengthens the <b>o</b>; in <i>helle</i> the initial <b>h</b> is a light breath, as in “hello”, and the <b>ll</b> marks a short <b>e</b>."
      }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Furnishing",
    title: "Where do I put the sofa?",
    objectives: [
      "use wohin? with the accusative and wo? with the dative",
      "choose between stellen/stehen and legen/liegen",
      "say where to put furniture and where it is"
    ],
    theory: [
      {
        h: "wohin? or wo?",
        p: "The prepositions <em>in, an, auf, vor, hinter, neben, über, unter, zwischen</em> take two cases. If the sentence shows a <strong>destination</strong> (<strong>wohin?</strong>, where to?) the case is the <strong>accusative</strong>; if it shows a <strong>location</strong> (<strong>wo?</strong>, where?) it is the <strong>dative</strong>, even when there is movement inside that place (<em>Ich laufe im Garten</em>). <em>Ich stelle das Sofa an die Wand</em> (wohin?), <em>Das Sofa steht an der Wand</em> (wo?). Contractions: <em>in das → ins, an das → ans, auf das → aufs, in dem → im, an dem → am</em>."
      },
      {
        p: "German picks the verb according to the position of the object. <strong>stellen / stehen</strong> for things that stand upright (<em>die Lampe, der Schrank, das Regal</em>), <strong>legen / liegen</strong> for things that lie flat (<em>das Buch, der Teppich</em>). <em>stellen</em> and <em>legen</em> show a destination and answer <em>wohin?</em>; <em>stehen</em> and <em>liegen</em> show a location and answer <em>wo?</em>. The case applies to the spatial phrase introduced by a two-way preposition (<em>auf, in, an, unter</em>...): accusative for <em>wohin?</em>, dative for <em>wo?</em>."
      },
      {
        contrast: "English uses the same preposition and the same noun form for both: “I put the book on the table” and “the book is on the table”, and “where” asks both questions (“Where did you put it?”, “Where is it?”). English has no cases on nouns, so nothing changes in the noun at all. German marks the difference twice: with the <strong>verb</strong> (<em>legen</em> or <em>stellen</em>, <em>liegen</em> or <em>stehen</em>) and with the <strong>case</strong> (accusative or dative), and it has two question words, <em>wohin?</em> and <em>wo?</em>. English has a similar pair, “lay” and “lie”, but everyday English prefers the all-purpose “put” and “be”: <em>Ich lege das Buch auf den Tisch. Das Buch liegt auf dem Tisch.</em>"
      },
      {
        trap: "Do not translate “put” with one verb. <em>Ich stelle das Buch auf den Tisch</em> is said if the book stands upright, <em>Ich lege das Buch auf den Tisch</em> if it lies flat: it depends on the object and its position, not on the English word. With <em>stehen</em> and <em>liegen</em>, which show a location (<em>wo?</em>), the phrase with a two-way preposition goes in the dative: <em>Die Lampe steht auf dem Tisch</em>, never “auf den Tisch”."
      }
    ],
    grammar: {
      title: "wohin? + accusative, wo? + dative",
      note: "With a two-way preposition: <b>wohin?</b> (destination, with stellen, legen) = accusative; <b>wo?</b> (location, with stehen, liegen) = dative.",
      table: {
        head: ["question", "verb", "example"],
        rows: [
          ["wohin? (accusative)", "stellen", "Ich stelle die Lampe in die Ecke."],
          ["wo? (dative)", "stehen", "Die Lampe steht in der Ecke."],
          ["wohin? (accusative)", "legen", "Ich lege den Teppich unter den Tisch."],
          ["wo? (dative)", "liegen", "Der Teppich liegt unter dem Tisch."]
        ]
      },
      examples: [
        { tr: "I'm putting the sofa against the wall.", note: "wohin?: an die Wand is accusative" },
        { tr: "The sofa is against the wall.", note: "stehen + dative: an der Wand" },
        { tr: "I'm putting the rug under the table.", note: "wohin?: unter den Tisch is accusative" },
        { tr: "The rug is under the table.", note: "liegen + dative: unter dem Tisch" },
        { tr: "Where are you putting the lamp? In the corner.", note: "wohin? is answered with the accusative: in die Ecke" },
        { tr: "The lamp is in the corner.", note: "wo? is answered with the dative: in der Ecke" }
      ]
    },
    vocab: [
      "to put, to set (upright)",
      "to stand, to be (upright)",
      "to put, to lay (flat)",
      "to lie, to be (flat)",
      "sofa, couch",
      "cupboard, closet, cabinet",
      "shelf, bookcase",
      "lamp",
      "rug, carpet",
      "picture",
      "wall",
      "corner"
    ],
    exercises: [
      {
        q: "How do you say “I'm putting the sofa against the wall”?",
        opts: ["Ich stelle das Sofa an der Wand.", "Ich stelle das Sofa an die Wand.", "Ich stehe das Sofa an die Wand."],
        why: "There is a destination (<i>wohin?</i>): <i>stellen</i> and the accusative, <b>an die Wand</b>."
      },
      {
        q: "Choose the verb: “Der Schrank ___ in der Ecke.”",
        opts: ["steht", "stellt", "legt"],
        why: "The cupboard stands upright and the sentence says where it is (<i>in der Ecke</i>, dative): <b>steht</b>."
      },
      {
        q: "Complete: “Ich lege das Buch auf ___ Tisch.”",
        opts: ["dem", "den", "der"],
        why: "<i>Legen</i> shows a destination (<i>wohin?</i>), so the accusative: <i>Tisch</i> is masculine, <b>den</b> Tisch."
      },
      {
        q: "Which sentences are correct, if stellen and legen must say where the object ends up (wohin?)?",
        opts: [
          "Ich stelle die Lampe in die Ecke.",
          "Die Lampe steht in der Ecke.",
          "Ich lege das Buch auf dem Tisch.",
          "Der Teppich liegt unter dem Tisch.",
          "Ich stelle das Regal an der Wand."
        ],
        why: "Sentence 3 needs the accusative (<i>auf den Tisch</i>), and so does sentence 5 (<i>an die Wand</i>): <i>legen</i> and <i>stellen</i> answer <i>wohin?</i>."
      },
      {
        q: "Complete: “Ich stelle das Sofa an ___ Wand.” (definite article)",
        hint: "wohin? feminine accusative",
        why: "<i>Stellen</i> + <i>wohin?</i> takes the accusative, and <i>Wand</i> is feminine: <b>die</b>."
      },
      {
        q: "Complete: “Der Teppich ___ unter dem Tisch.” (liegen, third person singular)",
        hint: "location, position verb",
        why: "<i>Liegen</i> in the third person singular: <b>liegt</b>. <i>Unter dem Tisch</i> is dative and answers <i>wo?</i>."
      },
      {
        tr: "I'm putting the lamp in the corner.",
        why: "<i>Ich stelle die Lampe in die Ecke</i>: the lamp stands upright, so <i>stellen</i>, and <i>in die Ecke</i> is accusative."
      },
      {
        q: "Complete the sentence.",
        tr: "I'm putting the shelf against the wall. Now it's standing there.",
        why: "<i>Stelle</i> shows the destination, <i>steht</i> the location: the first verb answers <i>wohin?</i> (accusative), the second <i>wo?</i> (dative)."
      },
      {
        tr: "I'm putting the sofa against the wall and the rug under the table.",
        why: "In <i>Teppich</i> the <b>pp</b> marks a short <b>e</b> and the <b>ch</b> after <b>i</b> is [ç]; in <i>unter</i> the <b>u</b> is short and the <b>t</b> is clear."
      },
      {
        tr: "The shelf is against the wall and the rug is under the table.",
        why: "In <i>Regal</i> the stress falls on <b>gal</b>; <i>Wand</i> begins with <b>W</b>, which sounds like English “v”."
      }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "The rooms",
    title: "das Wohnzimmer, die Küche",
    objectives: [
      "form and read compound nouns",
      "work out the gender from the last element of the compound",
      "name the rooms and parts of a home"
    ],
    theory: [
      {
        h: "The gender follows the last element",
        p: "German glues two nouns (or a verb and a noun) into one word, and the gender comes from the <strong>last element</strong>: <em>wohnen + das Zimmer = das Wohnzimmer</em>, <em>die Küche + der Tisch = der Küchentisch</em>, <em>das Haus + die Tür = die Haustür</em>. The first element specifies the meaning but does not change the article. Sometimes a linking letter appears: nouns in <em>-ung</em> usually take an <em>-s</em>, <em>die Wohnung + die Tür = die Wohnungstür</em>."
      },
      {
        contrast: "English makes compounds too, and the logic is the same: the last word is the head (a “kitchen table” is a table). But English usually writes them as two words (“living room”, “front door”) or hyphenates them, while German writes one word, with a capital letter only at the start: <em>das Wohnzimmer</em>, <em>die Haustür</em>. English nouns have no gender, so the compound gives no article at all; in German you read the article off the last element: <em>das Zimmer</em>, so <em>das Wohnzimmer</em> and <em>das Schlafzimmer</em> (“bedroom”) and <em>das Badezimmer</em> (“bathroom”). The linking <em>-s-</em> has no equivalent in English: <em>die Wohnungstür</em> (“apartment door”)."
      },
      {
        trap: "The first element does not decide the gender: <em>die Haustür</em> is feminine although <em>das Haus</em> is neuter, and <em>der Küchentisch</em> is masculine although <em>die Küche</em> is feminine. To know the article always look at the <strong>end</strong> of the word. When you meet a long compound, break it up from right to left. And do not write a compound as two words, as English often does: <em>Wohn Zimmer</em> is wrong."
      },
      {
        tip: "To understand a new compound, read it from the end: <em>der Kühlschrank</em> is a <em>Schrank</em> (cupboard) that cools (<em>kühlen</em>). For every room learn the whole name with its article: <em>das Wohnzimmer, das Schlafzimmer, das Badezimmer, die Küche</em>."
      }
    ],
    grammar: {
      title: "Compound nouns and their gender",
      note: "The gender is that of the <b>last</b> element: <b>das</b> Zimmer, so <b>das</b> Wohnzimmer. After -ung an <b>-s</b> often appears: Wohnung<b>s</b>tür.",
      table: {
        head: ["compound", "formation", "meaning"],
        rows: [
          ["das Wohnzimmer", "wohnen + das Zimmer", "living room"],
          ["das Schlafzimmer", "schlafen + das Zimmer", "bedroom"],
          ["die Haustür", "das Haus + die Tür", "front door"],
          ["der Küchentisch", "die Küche + der Tisch", "kitchen table"],
          ["die Wohnungstür", "die Wohnung + s + die Tür", "apartment door"]
        ]
      },
      examples: [
        { tr: "The living room is big and bright.", note: "das Zimmer: neuter, so das Wohnzimmer" },
        { tr: "The front door is new.", note: "die Tür: feminine, so die Haustür" },
        { tr: "The key is on the kitchen table.", note: "dative with wo?: auf dem Küchentisch" },
        { tr: "The refrigerator is in the kitchen.", note: "der Kühlschrank: like der Schrank" },
        { tr: "We have a small bathroom.", note: "ein kleines Badezimmer: neuter, -es" },
        { tr: "The washing machine is in the basement.", note: "im Keller: contracted dative" }
      ]
    },
    vocab: [
      "living room",
      "bedroom",
      "bathroom",
      "kitchen",
      "hallway, entrance hall",
      "basement, cellar",
      "garden, yard",
      "front door (of a house)",
      "apartment door",
      "refrigerator, fridge",
      "washing machine",
      "key"
    ],
    exercises: [
      {
        q: "Choose the right definite article for each noun.",
        items: ["living room", "kitchen", "front door", "refrigerator", "bedroom", "washing machine"]
      },
      {
        q: "Match each compound to its meaning.",
        pairs: ["living room", "bedroom", "bathroom", "front door"]
      },
      {
        q: "Why is “Schlafzimmer” neuter?",
        opts: [
          "Because Zimmer is neuter and the gender follows the last element.",
          "Because schlafen is a verb.",
          "Because it ends in -er."
        ],
        why: "The gender of a compound is that of the last element: <i>das Zimmer</i>, so <b>das</b> Schlafzimmer."
      },
      {
        q: "Complete: “Die Küche + der Schrank = ___ Küchenschrank” (definite article)",
        hint: "look at the last element",
        why: "The last element is <i>der Schrank</i>: the compound is masculine, <b>der</b> Küchenschrank."
      },
      {
        q: "Complete the compound with the linking letter: “Wohnung + Tür = Wohnung___tür”",
        hint: "one letter only",
        why: "After <i>-ung</i> an <b>-s</b> usually appears: <i>die Wohnungstür</i>."
      },
      {
        tr: "The living room is big and bright.",
        why: "<i>Das Wohnzimmer ist groß und hell</i>: after <i>sein</i> the adjectives take no ending. The reverse order works too."
      },
      {
        q: "Complete the sentence.",
        tr: "The washing machine is in the basement and the refrigerator is in the kitchen.",
        why: "<i>Waschmaschine</i> is feminine (<i>die</i>), <i>Keller</i> takes <i>im</i> (contracted dative), <i>Küche</i> needs <i>in der</i>."
      },
      {
        tr: "The key is on the kitchen table.",
        why: "<i>Der Schlüssel liegt auf dem Küchentisch</i>: the key lies flat (<i>liegen</i>), a location takes the dative, <i>auf dem</i>."
      },
      {
        tr: "The refrigerator is in the kitchen and the washing machine is in the basement.",
        why: "In <i>Küche</i> the <b>ü</b> is short and open [ʏ] and the <b>ch</b> is [ç] ([ˈkʏçə]); in <i>Keller</i> the <b>e</b> is short."
      },
      {
        tr: "The bedroom and the bathroom are small, but the living room is big.",
        why: "In <i>Schlafzimmer</i> the <b>sch</b> is [ʃ] and the stress falls on <b>Schlaf</b>; in <i>Badezimmer</i> the <b>a</b> is long."
      }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "A problem at home",
    title: "The heating is broken",
    objectives: [
      "report a fault to the property management or the caretaker",
      "make a polite request with Könnten Sie ...?",
      "keep the infinitive at the end of the sentence"
    ],
    theory: [
      {
        h: "Könnten Sie ...?",
        p: "To ask something of someone you don't know, a caretaker or a property management office, you use the polite form <strong>Könnten Sie ...?</strong> (the <em>Konjunktiv II</em> of <em>können</em>) with the <strong>infinitive at the end</strong>: <em>Könnten Sie bitte morgen vorbeikommen? Könnten Sie die Heizung reparieren?</em> An equally polite alternative is <strong>Würden Sie ...?</strong> with the infinitive at the end. To report the problem, simple sentences are enough: <em>Die Heizung ist kaputt. Der Wasserhahn tropft. Die Heizung funktioniert nicht.</em>"
      },
      {
        contrast: "<em>Könnten Sie</em> corresponds closely to “Could you”: in both languages the past-looking form of the modal softens the request. The differences are two. First, German has a formal <em>Sie</em> (with the form of the third person <strong>plural</strong>: <em>Könnten Sie</em>, <em>Sie sind</em>) next to the informal <em>du</em> (<em>Könntest du ...?</em>), where English has only “you”. Second, the infinitive does not follow the modal right away as in English (“Could you repair the heating?”): it goes to the end, after all the other parts: <em>Könnten Sie die Heizung reparieren?</em> Also, “doesn't work” has no “do” in German: <em>Die Heizung funktioniert nicht</em>."
      },
      {
        trap: "Do not put the infinitive right after <em>Könnten</em>: <em>Könnten Sie die Heizung reparieren?</em>, not “Könnten Sie reparieren die Heizung?”. On the phone the usual formula is <em>Guten Tag, hier ist Weber</em>, like “Hello, this is Weber”; <em>Ich bin Weber</em> is not wrong, but it is not the typical formula. Also, <em>kaputt</em> has no ending after <em>sein</em> (<em>Die Heizung ist kaputt, Die Fenster sind kaputt</em>), while English “broken” is a participle; before a noun, though, <em>kaputt</em> takes endings like any adjective: <em>die kaputte Heizung</em>. Being polite means staying with <em>Sie</em>, even if the other person is younger."
      },
      {
        tip: "If the request is urgent add <em>dringend</em> or <em>so schnell wie möglich</em> without losing the politeness: <em>Könnten Sie bitte so schnell wie möglich vorbeikommen?</em> <em>Bitte</em> usually comes after the pronoun."
      }
    ],
    grammar: {
      title: "Könnten Sie ...? and the fault",
      note: "<b>Könnten Sie</b> + other parts + <b>infinitive</b> at the end. A fault: <b>... ist kaputt</b> or <b>... funktioniert nicht</b>.",
      table: {
        head: ["situation", "sentence", "function"],
        rows: [
          ["introducing yourself", "Guten Tag, hier ist Weber.", "on the phone"],
          ["reporting", "Die Heizung ist kaputt.", "the fault"],
          ["reporting", "Der Wasserhahn tropft.", "the fault"],
          ["asking", "Könnten Sie bitte morgen vorbeikommen?", "polite request"],
          ["asking", "Würden Sie das bitte reparieren?", "polite request"]
        ]
      },
      examples: [
        { tr: "Hello, this is Weber, from Hauptstraße 5.", note: "on the phone: hier ist ..." },
        { tr: "The heating is broken.", note: "after sein, kaputt takes no ending" },
        { tr: "The kitchen faucet is dripping.", note: "tropfen: third person singular" },
        { tr: "Could you come by tomorrow, please?", note: "infinitive at the end: vorbeikommen" },
        { tr: "Could you repair the heating?", note: "Könnten Sie ... reparieren" },
        { tr: "Would you repair it as soon as possible?", note: "Würden Sie ... reparieren" }
      ]
    },
    vocab: [
      "heating",
      "broken, out of order",
      "to work, to function",
      "to repair",
      "property management company",
      "caretaker, building superintendent",
      "repair",
      "faucet",
      "window",
      "to drip",
      "to come by, to stop by",
      "urgent"
    ],
    exercises: [
      {
        q: "How do you politely ask someone to repair the heating?",
        opts: [
          "Könnten Sie reparieren die Heizung?",
          "Könnten Sie die Heizung reparieren?",
          "Könnten Sie die Heizung repariert?"
        ],
        why: "With <i>Könnten</i> the infinitive goes <b>to the end</b> of the sentence: <i>Könnten Sie die Heizung reparieren?</i>."
      },
      {
        q: "Which sentence is the polite request?",
        opts: ["Kommen Sie morgen!", "Sie kommen morgen.", "Könnten Sie morgen vorbeikommen?"],
        why: "<b>Könnten Sie ...?</b> is the polite formula. The other two are a command and a statement."
      },
      {
        q: "Complete: “Die Heizung ist ___.” (broken)",
        hint: "after sein, no ending",
        why: "<b>kaputt</b>, stressed on the last syllable, takes no ending after <b>sein</b>."
      },
      {
        q: "Complete: “___ Sie bitte morgen vorbeikommen?” (polite form of können)",
        hint: "Konjunktiv II, with Sie",
        why: "<b>Könnten</b>: <i>ich könnte</i>, <i>Sie könnten</i>. With <i>Sie</i> the plural form is used."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["heating", "faucet", "caretaker", "property management company"]
      },
      {
        tr: "Could you repair the heating, please?",
        why: "<i>Könnten Sie bitte die Heizung reparieren</i>: the infinitive closes the sentence. <i>Könnten Sie die Heizung bitte reparieren</i> works too."
      },
      {
        tr: "The faucet in the kitchen is dripping.",
        why: "<i>Der Wasserhahn in der Küche tropft</i>: <i>in der Küche</i> is dative (<i>wo?</i>). <i>Der Wasserhahn tropft in der Küche</i> works too."
      },
      {
        q: "Complete the sentence.",
        tr: "Hello, this is Weber. The heating is broken. Could you come by today?",
        why: "On the phone the usual formula is <i>hier ist Weber</i> (<i>ich bin Weber</i> is also correct). For the polite request <i>Könnten</i> and <i>Würden</i> both work; <i>Können</i> is also correct but less polite."
      },
      {
        tr: "Hello, this is Weber. The heating is broken. Could you come by today?",
        why: "In <i>Heizung</i> the <b>ei</b> is [aɪ] as in “eye” and the <b>z</b> is [ts]; in <i>kaputt</i> the stress falls on the last syllable."
      },
      {
        tr: "Could you please repair the kitchen faucet?",
        why: "In <i>Wasserhahn</i> the first <b>h</b> of <i>Hahn</i> is a light breath and the second is silent and lengthens the <b>a</b>; in <i>Küche</i> the <b>ch</b> is [ç]."
      }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Review",
    title: "Test: Home and neighborhood",
    objectives: ["check the adjective after ein, wohin and wo with prepositions, compound nouns and polite requests"],
    theory: [
      {
        p: "Ten questions on the unit. You pass with 70%. Don't look back at the lessons while you answer: if you don't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: “Ich suche eine ___ Wohnung.” (hell, with the ending)",
        hint: "feminine accusative after eine",
        why: "After <i>eine</i> the feminine takes <b>-e</b>: <i>helle</i>."
      },
      {
        q: "Complete: “Das ist ein ___ Haus.” (alt, with the ending)",
        hint: "neuter nominative after ein",
        why: "<i>Ein</i> has no ending in the neuter nominative, so the adjective carries it: <b>altes</b>."
      },
      {
        q: "Complete: “Ich stelle die Lampe in ___ Ecke.” (definite article)",
        hint: "wohin?",
        why: "<i>Stellen</i> answers <i>wohin?</i>: feminine accusative, <b>die</b> Ecke."
      },
      {
        q: "Complete: “Der Teppich ___ unter dem Tisch.” (liegen)",
        hint: "third person singular",
        why: "Location and dative: <b>liegt</b>."
      },
      {
        q: "Complete: “Die Küche + der Schrank = ___ Küchenschrank” (definite article)",
        hint: "look at the last element",
        why: "The gender follows the last element: <b>der</b> Schrank, so <b>der</b> Küchenschrank."
      },
      {
        q: "Which sentence says where the book ends up (wohin?)?",
        opts: [
          "Ich lege das Buch auf dem Tisch.",
          "Ich lege das Buch auf den Tisch.",
          "Ich liege das Buch auf den Tisch."
        ],
        why: "<i>Legen</i> shows the destination (<i>wohin?</i>) and takes the accusative: <b>auf den Tisch</b>. <i>Liegen</i> has no object."
      },
      {
        q: "Which sentence is the polite request?",
        opts: ["Sie reparieren die Heizung jetzt.", "Könnten Sie die Heizung reparieren?", "Die Heizung reparieren Sie."],
        why: "<b>Könnten Sie ...?</b> with the infinitive at the end is the polite formula."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["heating", "caretaker", "balcony", "key"]
      },
      {
        tr: "The refrigerator is in the kitchen and the sofa is in the living room.",
        why: "In <i>Kühlschrank</i> the <b>ü</b> is long [yː] and <b>sch</b> is [ʃ] ([ˈkyːlʃʁaŋk]); in <i>Sofa</i> the stress falls on the <b>o</b>, which is long."
      },
      {
        tr: "I'm looking for a bright apartment with a large balcony.",
        why: "In <i>großen</i> the <b>ß</b> is a voiceless <b>s</b>; <i>einem großen Balkon</i> is dative after <i>mit</i>, so <b>-en</b>."
      }
    ]
  }
});
