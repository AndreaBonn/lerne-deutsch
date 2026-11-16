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
  },
  "unit:a2-u06": {
    title: "At the office",
    grammarNote: "Könnten Sie ...? · indirect questions with ob and question words · formal letter · man · zuerst, dann, danach, außerdem"
  },
  "lesson:a2-u06-l1": {
    theme: "On the phone",
    title: "Could you call me back?",
    objectives: [
      "make a phone call and leave a message with Könnten Sie ...?",
      "ask an indirect question with ob or a question word",
      "send the verb to the end in a clause introduced by ob, wann, wo and dass"
    ],
    theory: [
      {
        h: "Asking for a call back and leaving a message",
        p: "On the phone with someone you don't know, use the polite form: <em>Guten Tag, hier ist Weber. Könnten Sie mich bitte zurückrufen?</em> To leave a message: <em>Könnten Sie Frau Keller etwas ausrichten?</em> The person who answers will often say <em>Ich verbinde Sie</em> (I'll put you through) or <em>Frau Keller ist gerade nicht am Platz</em> (she is not at her desk). <em>Zurückrufen</em> and <em>ausrichten</em> are separable verbs: as an infinitive after <em>Könnten Sie ...</em> they stay in one piece and go to the end."
      },
      {
        h: "Indirect questions: ob and question words",
        p: "A question can sit inside another sentence. If the direct question is <strong>yes/no</strong> (<em>Ist Herr Weber im Büro?</em>), the indirect version starts with <strong>ob</strong>; if it has a <strong>question word</strong> (<em>wann, wo, wer, wie, warum</em>), that word stays and opens the subordinate clause. In both cases the conjugated verb goes <strong>to the end</strong>, and a comma comes before: <em>Ich möchte wissen, ob Herr Weber heute im Büro ist. Ich weiß nicht, wann die Besprechung beginnt. Könnten Sie mir sagen, wo Frau Keller ist?</em> With a separable verb the prefix joins the verb again: <em>Ich weiß nicht, wann er anruft.</em> The same goes for <strong>dass</strong>: <em>Könnten Sie ihr sagen, dass ich morgen wieder anrufe?</em>"
      },
      {
        contrast: "English also changes the order in an indirect question: “Where is Ms. Keller?” becomes “Could you tell me where Ms. Keller is?”, not “where is Ms. Keller”, so the idea is familiar. The German difference is how far the verb travels. English keeps the verb right after the subject (“when the meeting starts today”), while German sends the conjugated verb to the very end, after everything else: <em>wann die Besprechung heute beginnt</em>. English also has no comma there, and German always has one. One more point: “if” does two jobs in English. “I don't know if he is coming” is <em>ob</em>, while “if he comes, ...” is <em>wenn</em>. German keeps them apart."
      },
      {
        trap: "After a yes/no question use <em>ob</em>, not <em>wenn</em>: <em>Ich weiß nicht, ob er kommt</em>. Don't leave the verb in second position as in a direct question: <em>Könnten Sie mir sagen, wo Frau Keller ist?</em>, not “wo ist Frau Keller”. And the comma before <em>ob</em>, <em>dass</em> and the question word is part of the spelling."
      },
      {
        tip: "More useful phrases: <em>Die Leitung ist besetzt</em> (the line is busy), <em>Ich erreiche ihn nicht</em> (I can't reach him), <em>Wie ist Ihre Telefonnummer?</em>. With the polite form you stay with <em>Sie</em> from the beginning to the end of the call."
      }
    ],
    grammar: {
      title: "Könnten Sie ...? and indirect questions",
      note: "<b>Könnten Sie</b> + infinitive at the end. Indirect question: <b>ob</b> or a question word, and the conjugated verb <b>at the end</b>. With <b>dass</b> (a statement, not a question) the verb also goes to the end: <i>Ich rufe morgen wieder an</i> becomes <i>..., dass ich morgen wieder anrufe.</i>",
      table: {
        head: ["direct question", "indirect question", "introduced by"],
        rows: [
          ["Ist Herr Weber im Büro?", "..., ob Herr Weber im Büro ist.", "ob (yes/no)"],
          ["Wann beginnt die Besprechung?", "..., wann die Besprechung beginnt.", "wann"],
          ["Wo ist Frau Keller?", "..., wo Frau Keller ist.", "wo"]
        ]
      },
      examples: [
        { tr: "Could you call me back, please?", note: "zurückrufen stays in one piece, at the end" },
        { tr: "Could you pass something on to Ms. Keller?", note: "ausrichten, at the end" },
        { tr: "I'd like to know whether Mr. Weber is in the office today.", note: "ob: the verb ist goes to the end" },
        { tr: "I don't know when the meeting starts.", note: "wann: the verb beginnt goes to the end" },
        { tr: "Could you tell me where Ms. Keller is?", note: "wo: the verb ist goes to the end" },
        { tr: "Could you tell her that I'll call again tomorrow?", note: "dass: anrufe joins back together" }
      ]
    },
    vocab: [
      "to call, to phone",
      "to call back",
      "message",
      "to pass on (a message)",
      "extension (phone)",
      "to put through, to connect",
      "answering machine",
      "to reach, to get hold of",
      "busy (line)",
      "phone number",
      "appointment, date",
      "line"
    ],
    exercises: [
      {
        q: "How do you politely ask to be called back?",
        opts: [
          "Könnten Sie mich bitte zurückrufen?",
          "Könnten Sie zurückrufen mich bitte?",
          "Könnten Sie mich bitte zurückrufe?"
        ],
        why: "<i>Könnten Sie</i> + objects + the <b>whole</b> infinitive at the end: <i>zurückrufen</i>."
      },
      {
        tr: "The full conjugation of können in the Konjunktiv II.",
        why: "<i>könnte, könntest, könnte, könnten, könntet, könnten</i>: the <b>ö</b> with the umlaut and the <b>-e-</b> of the Konjunktiv II. <i>Ich</i> and <i>er/sie/es</i> have the same form, and with <i>Sie</i> you use <b>könnten</b>."
      },
      {
        q: "Complete: “Ich weiß nicht, ___ Herr Weber heute im Büro ist.” (if, whether)",
        hint: "yes/no question",
        why: "A yes/no question becomes indirect with <b>ob</b>, and the verb <i>ist</i> goes to the end."
      },
      {
        q: "Complete: “Ich möchte wissen, ___ die Besprechung beginnt.” (when)",
        hint: "question word",
        why: "<b>wann</b> is the question word and it stays: <i>..., wann die Besprechung beginnt</i>."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["to call", "message", "extension", "busy"]
      },
      {
        tr: "Could you call me back, please?",
        why: "<i>Könnten Sie mich bitte zurückrufen</i>: the whole infinitive closes the sentence. <i>Könnten Sie mich zurückrufen, bitte</i> works too."
      },
      {
        q: "Complete the sentence.",
        tr: "Could you pass something on to Mr. Weber? I'd like to know whether he is in the office.",
        why: "<i>Etwas ausrichten</i>: the infinitive stays in one piece, at the end. <i>Wissen, ob ...</i>: a yes/no question becomes indirect with <b>ob</b>."
      },
      {
        q: "You are on the phone with a company.",
        setting: "You call to speak to Ms. Keller.",
        lines: [
          { tr: "Brandt company, good morning." },
          {
            tr: "Introduce yourself and ask to be put through to Ms. Keller.",
            answerTr: "Good morning, this is Weber. Could you put me through to Ms. Keller?"
          },
          { tr: "Ms. Keller is not at her desk. Shall I pass something on to her?" },
          {
            tr: "Say yes and ask them to tell her that you'll call back tomorrow.",
            answerTr: "Yes, please. Could you tell her that I'll call again tomorrow?"
          }
        ]
      },
      {
        tr: "Good morning, this is Weber. Could you call me back, please? I'd like to know whether the appointment is on Monday.",
        why: "In <i>zurückrufen</i> the stress falls on <b>rück</b> (short <b>ü</b> [ʏ]); in <i>Könnten</i> the <b>ö</b> is short and open [œ]; <i>Weber</i> starts with <b>w</b> = [v], not the English [w]."
      },
      {
        tr: "Could you tell Ms. Keller that I'll call again tomorrow?",
        why: "In <i>wieder</i> the <b>ie</b> is a long <b>i</b> [iː] and the initial <b>w</b> is read [v]; in <i>anrufe</i> the stress falls on <b>an</b> and the verb stands at the end after <i>dass</i>."
      }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Writing an email",
    title: "Dear Ms. Keller",
    objectives: [
      "open and close a formal email with Sehr geehrte Frau ... and Mit freundlichen Grüßen",
      "write the polite forms Sie, Ihr, Ihnen with a capital letter",
      "ask for a confirmation with Könnten Sie ...?"
    ],
    theory: [
      {
        h: "Opening and closing a formal email",
        p: "A formal email has a fixed formula. At the start: <strong>Sehr geehrte Frau Keller,</strong> to a woman, <strong>Sehr geehrter Herr Weber,</strong> to a man, <strong>Sehr geehrte Damen und Herren,</strong> to several people or an unknown recipient. You write <em>Frau</em> or <em>Herr</em> plus the surname, without the first name. At the end: <strong>Mit freundlichen Grüßen</strong> and the name below, with no comma after the closing. The body is short: <em>Vielen Dank für Ihre E-Mail. Im Anhang finden Sie die Datei. Könnten Sie mir den Termin bitte bestätigen?</em>"
      },
      {
        contrast: "English opens with “Dear Ms. Keller,” (or “Dear Mr. Weber:”) and closes with “Sincerely,” or “Best regards,”, with a comma after the closing. German <em>Sehr geehrte</em> (literally “very honored”) is an adjective without an article, which is why it takes <strong>-e</strong> with <em>Frau</em> and <strong>-er</strong> with <em>Herr</em>. “Ms.” does not say whether a woman is married, and <em>Frau</em> works the same way for any adult woman; <em>Fräulein</em> is considered outdated. After the comma of the salutation the next line usually starts with a lowercase letter (<em>..., vielen Dank für ...</em>), unless the first word is a noun. With <em>du</em> you open with <em>Liebe Anna,</em> or <em>Lieber Tim,</em> and close with <em>Viele Grüße</em>."
      },
      {
        trap: "English “you” never changes and is written in lowercase. In a formal German email <em>Sie</em>, <em>Ihr</em>, <em>Ihre</em> and <em>Ihnen</em> are capitalized, which also separates “you, your” from <em>sie</em> and <em>ihre</em> (she, they; her, their). <em>Mit freundlichen Grüßen</em> is plural and dative after <em>mit</em>: not “Mit freundliche Gruß”."
      },
      {
        tip: "Other formulas: <em>Vielen Dank für Ihre schnelle Antwort</em>, <em>Im Anhang finden Sie ...</em>, <em>Könnten Sie ...?</em> The subject line (<em>Betreff</em>) needs only a few words, for example <em>Termin am Montag</em>."
      }
    ],
    grammar: {
      title: "Formal register: the email",
      note: "Opening <b>Sehr geehrte Frau</b> / <b>Sehr geehrter Herr</b> + surname; closing <b>Mit freundlichen Grüßen</b>. <b>Sie, Ihre, Ihnen</b> with a capital letter.",
      table: {
        head: ["part of the email", "formula", "meaning"],
        rows: [
          ["opening (woman)", "Sehr geehrte Frau Keller,", "Dear Ms. Keller"],
          ["opening (man)", "Sehr geehrter Herr Weber,", "Dear Mr. Weber"],
          ["opening (several people)", "Sehr geehrte Damen und Herren,", "Dear Ladies and Gentlemen"],
          ["body", "Vielen Dank für Ihre E-Mail.", "Thank you for your email"],
          ["closing", "Mit freundlichen Grüßen", "Kind regards"]
        ]
      },
      examples: [
        { tr: "Dear Ms. Keller,", note: "Frau: geehrt + e" },
        { tr: "Dear Mr. Weber,", note: "Herr: geehrt + er" },
        { tr: "Thank you for your email.", note: "Ihre with a capital letter" },
        { tr: "You will find the file attached.", note: "verb in second position: finden Sie" },
        { tr: "Could you confirm the appointment for me, please?", note: "Könnten Sie ... bestätigen" },
        { tr: "Kind regards", note: "Grüßen, plural and dative" }
      ]
    },
    vocab: [
      "email",
      "subject (of an email)",
      "salutation",
      "greeting, closing",
      "attachment",
      "file",
      "sender",
      "to send",
      "to attach",
      "to confirm",
      "friendly, kind",
      "formal"
    ],
    exercises: [
      {
        q: "Which opening is correct for an email to a woman?",
        opts: ["Sehr geehrter Frau Keller,", "Sehr geehrte Frau Keller,", "Sehr geehrt Frau Keller,"],
        why: "<i>Frau</i> is feminine, so the adjective takes <b>-e</b>: <i>Sehr geehrte Frau Keller,</i>. With <i>Herr</i> it would be <i>geehrter</i>."
      },
      {
        q: "Which closing is correct?",
        opts: ["Mit freundlichen Grüßen", "Mit freundliche Grüße", "Mit freundlichem Grüßen"],
        why: "<i>Mit</i> takes the dative and <i>Grüße</i> is plural: <b>Mit freundlichen Grüßen</b>."
      },
      {
        q: "Complete: “Sehr ___ Herr Weber,” (geehrt, with the ending)",
        hint: "masculine, no article",
        why: "With <i>Herr</i> the adjective without an article takes <b>-er</b>: <i>Sehr geehrter Herr Weber,</i>."
      },
      {
        q: "Complete: “Vielen Dank für ___ E-Mail.” (your, formal, with a capital letter)",
        hint: "polite form",
        why: "<b>Ihre</b> with a capital letter is the polite possessive: your. <i>Ihre</i>, <i>Ihr</i> and <i>Ihnen</i> are written this way in formal emails."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["subject line", "attachment", "sender", "file"]
      },
      {
        tr: "You will find the file attached.",
        why: "<i>Im Anhang finden Sie die Datei</i>: the verb is in second position. <i>Sie finden im Anhang die Datei</i>, <i>Sie finden die Datei im Anhang</i> and <i>Die Datei finden Sie im Anhang</i> work too."
      },
      {
        tr: "Dear Ms. Keller, thank you for your email.",
        why: "<i>Sehr geehrte Frau Keller, vielen Dank für Ihre E-Mail</i>. <i>Herzlichen Dank</i> or <i>danke</i> work too; <i>Ihre</i> is written with a capital letter."
      },
      {
        q: "Complete the sentence.",
        tr: "Dear Ms. Keller, thank you for your email. Kind regards",
        why: "<i>Sehr geehrte</i> (feminine), <i>Ihre</i> (your, with a capital letter) and <i>Mit freundlichen Grüßen</i> (dative plural)."
      },
      {
        tr: "Dear Ms. Keller, thank you for your email. You will find the file attached. Kind regards",
        why: "In <i>Grüßen</i> the <b>ü</b> is long [yː] and the <b>ß</b> is a voiceless <b>s</b>; in <i>geehrte</i> the syllable <b>ge</b> is weak and the stress falls on <b>ehr</b>, with a long <b>e</b>."
      },
      {
        tr: "Could you confirm the appointment for me, please?",
        why: "In <i>Termin</i> the stress falls on the last syllable, with a long <b>i</b>; in <i>bestätigen</i> the <b>st</b> after <b>be-</b> is read [ʃt] and the stress falls on <b>stä</b>."
      }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Habits at the office",
    title: "Here we do it like this",
    objectives: [
      "use man with the verb in the third person singular",
      "describe rules and habits of the workplace",
      "use man with muss, darf and kann"
    ],
    theory: [
      {
        h: "man: anyone, people in general",
        p: "<strong>man</strong> stands for any person, people in general, and is used for rules and habits: <em>Bei uns beginnt man um acht Uhr. Hier duzt man sich. In der Mittagspause isst man in der Kantine.</em> The verb is in the <strong>third person singular</strong>, even though the meaning is plural. Verbs that change their vowel keep the change: <em>man isst, man liest, man fährt, man spricht</em>. With modals: <em>man muss, man darf, man kann</em>: <em>Hier darf man nicht rauchen. Man muss pünktlich sein.</em> A common question: <em>Wie sagt man das auf Deutsch?</em>"
      },
      {
        contrast: "English has no single word like <em>man</em>. Depending on the register it uses “you” (“Here you have to be on time”), the stiffer “one” (“One has to be on time”), “people” or “they” (“In Germany people eat early”) or the passive (“German is spoken here”). In German <em>man</em> is always the subject, and the verb is third person singular: <em>man isst</em>, even though “you eat” and “they eat” look plural. <em>Man</em> is also not the same as <em>du</em>: <em>Du musst pünktlich sein</em> speaks to one person, <em>Man muss pünktlich sein</em> states a rule. And <em>man</em> goes with the reflexive pronoun <em>sich</em>: <em>Hier duzt man sich</em>."
      },
      {
        trap: "<em>man</em> is not <em>der Mann</em> (the man) and not the English “man”: it has one <strong>n</strong> and a lowercase letter. The verb stays in the third person singular: <em>man sagt</em>, not “man sagen”, and with modals <em>man muss</em>, not “man müssen”. Also watch the modals: English “can't” covers both “not allowed” and “not possible”, while German has two verbs. <em>Hier darf man nicht rauchen</em> says that smoking is not allowed; <em>Hier kann man nicht rauchen</em> would say that it can't be done."
      },
      {
        tip: "To introduce an office rule open with <em>Hier</em>, <em>Bei uns</em> or <em>In der Firma</em>; the verb stays in second position: <em>Bei uns beginnt man um acht Uhr.</em> For du or Sie: <em>duzen</em> and <em>siezen</em>: <em>Den Chef siezt man hier.</em>"
      }
    ],
    grammar: {
      title: "man + third person singular",
      note: "<b>man</b> is always the subject; the verb stays in the <b>third person singular</b>: <b>man isst, man muss, man darf</b>.",
      table: {
        head: ["verb", "with man", "example"],
        rows: [
          ["essen", "man isst", "In der Kantine isst man warm."],
          ["sagen", "man sagt", "Wie sagt man das auf Deutsch?"],
          ["müssen", "man muss", "Man muss pünktlich sein."],
          ["dürfen", "man darf", "Hier darf man nicht rauchen."],
          ["duzen", "man duzt sich", "Hier duzt man sich."]
        ]
      },
      examples: [
        { tr: "Here we use du with each other.", note: "man duzt sich: third person singular" },
        { tr: "At our place we start at eight.", note: "inversion after Bei uns: beginnt man" },
        { tr: "During the lunch break people eat in the cafeteria.", note: "essen changes its vowel: man isst" },
        { tr: "Smoking is not allowed here.", note: "man darf, with nicht" },
        { tr: "How do you say this in German?", note: "man sagt, not man sagen" },
        { tr: "You have to be on time.", note: "man muss" }
      ]
    },
    vocab: [
      "office",
      "colleague (male)",
      "colleague (female)",
      "boss",
      "lunch break",
      "cafeteria, canteen",
      "printer",
      "working hours",
      "on time, punctual",
      "to use du (informal you)",
      "to use Sie (formal you)",
      "usual, customary"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: [
          "Hier arbeiten man bis fünf Uhr.",
          "Hier arbeitet man bis fünf Uhr.",
          "Hier arbeitest man bis fünf Uhr."
        ],
        why: "With <i>man</i> the verb is in the third person singular: <b>arbeitet</b>."
      },
      {
        q: "How do you say “In Germany people eat early”?",
        opts: [
          "In Deutschland isst man früh.",
          "In Deutschland essen man früh.",
          "In Deutschland esst man früh."
        ],
        why: "<i>Essen</i> changes its vowel in the third person singular: <i>er isst</i>, so <b>man isst</b>."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Man darf hier nicht rauchen.",
          "Man muss pünktlich sein.",
          "Man müssen pünktlich sein.",
          "Wie sagt man das auf Deutsch?",
          "Man fahren mit dem Bus."
        ],
        why: "With <i>man</i> the modal is also in the third person singular: <i>man muss</i>, not “man müssen”. <i>Man fahren</i> is wrong: you need <i>man fährt</i>."
      },
      {
        q: "Complete: “In der Kantine ___ man mittags warm.” (essen)",
        hint: "third person singular, the vowel changes",
        why: "<b>isst</b>: <i>essen</i> changes <i>e</i> to <i>i</i>, and after <i>man</i> you use this form."
      },
      {
        q: "Complete: “Wie ___ man das auf Deutsch?” (sagen)",
        hint: "third person singular",
        why: "<b>sagt</b>: <i>man</i> takes the third person singular."
      },
      {
        tr: "At our place we start at eight.",
        why: "<i>Bei uns beginnt man um acht Uhr</i>. <i>Man beginnt bei uns um acht Uhr</i> and <i>Um acht Uhr beginnt man bei uns</i> work too: the verb stays in second position."
      },
      {
        tr: "Here we use du with each other.",
        why: "<i>Hier duzt man sich</i>. <i>Man duzt sich hier</i> works too. <i>Sich</i> is the reflexive pronoun that goes with <i>man</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "Here you have to be on time and you can't smoke.",
        why: "<i>Hier muss man pünktlich sein, und man darf nicht rauchen.</i> For “you can't smoke” (not allowed) German says <i>man darf nicht rauchen</i>. <i>Man kann nicht rauchen</i> would say that smoking is impossible, not forbidden."
      },
      {
        tr: "At our place we start at eight. During the lunch break people eat in the cafeteria. Here we use du with each other.",
        why: "In <i>isst</i> the <b>ss</b> is a voiceless <b>s</b> and the <b>i</b> is short; in <i>Kantine</i> the stress falls on <b>ti</b>, with a long <b>i</b> [kanˈtiːnə]."
      },
      {
        tr: "Here you have to be on time, and you can't smoke in the office.",
        why: "In <i>pünktlich</i> the <b>ü</b> is short [ʏ], the <b>n</b> before <b>k</b> is the velar nasal [ŋ], as in “think”, and the final <b>ch</b> after <b>i</b> is [ç]."
      }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Meeting",
    title: "In the meeting",
    objectives: [
      "put contributions in order with zuerst, dann, danach and außerdem",
      "put the verb right after these words, before the subject",
      "make a proposal and give your agreement"
    ],
    theory: [
      {
        h: "zuerst, dann, danach, außerdem",
        p: "<strong>zuerst</strong> (first of all), <strong>dann</strong> (then), <strong>danach</strong> (afterwards) and <strong>außerdem</strong> (besides, also) can open a sentence. When they take the <strong>first position</strong>, the conjugated verb comes <strong>right after</strong> and the subject follows it: <em>Zuerst besprechen wir die Tagesordnung. Dann diskutieren wir den Vorschlag. Danach schreibt Anna das Protokoll. Außerdem brauchen wir einen neuen Drucker.</em> They can also come later, after the subject: <em>Wir besprechen zuerst die Tagesordnung.</em> For a proposal: <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> To agree: <em>Ich bin einverstanden. Ich stimme zu.</em>"
      },
      {
        contrast: "In English these words leave the order alone: “First we discuss the agenda”, with the subject before the verb, as always. In German the conjugated verb has to stay in second position, so when one of these words opens the sentence the subject moves behind the verb: <em>Zuerst besprechen wir ...</em>, not “Zuerst wir besprechen”. The pronoun cannot be dropped either. Be careful with “before” and “after”: “first” is <em>zuerst</em>, but “before the meeting” is <em>vor der Besprechung</em> (<em>vor</em> + dative), and the preposition “after the meeting” is <em>nach der Besprechung</em>, while the adverb “afterwards” is <em>danach</em>."
      },
      {
        trap: "With <em>zuerst, dann, danach, außerdem</em> in front, <em>wir besprechen</em> becomes <em>besprechen wir</em>. A separable verb stays split: <em>Danach fängt Anna an.</em> After <em>dass</em>, however, the conjugated verb goes to the end: <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> English often drops “that” (“I suggest we set a new date”), but in German <em>dass</em> is the normal choice here. After <em>glauben</em> and <em>meinen</em> you can also leave out <em>dass</em>, and then the verb comes back to second position: <em>Ich meine, wir machen einen neuen Termin.</em>"
      },
      {
        tip: "To disagree politely: <em>Das sehe ich anders.</em> To ask for the floor or a break: <em>Ich habe eine Frage. Könnten wir eine Pause machen?</em> A list in three steps uses <em>zuerst, dann, danach</em>, and <em>außerdem</em> adds one more point."
      }
    ],
    grammar: {
      title: "zuerst, dann, danach, außerdem: the verb right after",
      note: "With <b>zuerst, dann, danach, außerdem</b> in first position the conjugated verb is in <b>second place</b> and the subject comes after it.",
      table: {
        head: ["word", "meaning", "example"],
        rows: [
          ["zuerst", "first of all", "Zuerst besprechen wir die Tagesordnung."],
          ["dann", "then", "Dann diskutieren wir den Vorschlag."],
          ["danach", "afterwards", "Danach schreibt Anna das Protokoll."],
          ["außerdem", "besides, also", "Außerdem brauchen wir einen neuen Drucker."]
        ]
      },
      examples: [
        { tr: "First of all we talk about the agenda.", note: "zuerst: verb + subject" },
        { tr: "Then we discuss the proposal.", note: "dann: diskutieren wir" },
        { tr: "Afterwards Anna writes the minutes.", note: "danach: schreibt Anna" },
        { tr: "We also need a new printer.", note: "außerdem: brauchen wir" },
        { tr: "I suggest that we set a new date.", note: "dass: the verb goes to the end" },
        { tr: "I agree.", note: "einverstanden with sein" }
      ]
    },
    vocab: [
      "meeting",
      "proposal",
      "agenda",
      "result",
      "minutes (of a meeting)",
      "point, item",
      "to propose, to suggest",
      "to agree, to approve",
      "in agreement",
      "first of all",
      "afterwards",
      "besides, also"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: [
          "Zuerst wir besprechen die Tagesordnung.",
          "Zuerst besprechen wir die Tagesordnung.",
          "Zuerst wir die Tagesordnung besprechen."
        ],
        why: "With <i>zuerst</i> in first position the verb comes right after, then the subject: <b>Zuerst besprechen wir ...</b>."
      },
      {
        q: "Complete: “Zuerst besprechen wir die Tagesordnung, ___ diskutieren wir den Vorschlag.” (then)",
        hint: "two possible words",
        why: "<b>dann</b> and <b>danach</b> both work: both open the sentence and the verb comes right after."
      },
      {
        q: "Complete: “Außerdem ___ wir einen neuen Drucker.” (brauchen)",
        hint: "present tense, wir",
        why: "<b>brauchen</b>: after <i>außerdem</i> the verb is in second position, then <i>wir</i>."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["proposal", "agenda", "result", "minutes"]
      },
      {
        tr: "Afterwards, Anna writes the minutes.",
        why: "<i>Danach schreibt Anna das Protokoll</i>: the verb comes right after <i>danach</i>. <i>Anna schreibt danach das Protokoll</i>, <i>Anna schreibt das Protokoll danach</i> and <i>Das Protokoll schreibt Anna danach</i> work too."
      },
      {
        tr: "Besides, I have a question.",
        why: "<i>Außerdem habe ich eine Frage</i>: the verb comes before the subject. <i>Ich habe außerdem eine Frage</i> works too."
      },
      {
        q: "Complete the sentence.",
        tr: "First we talk about the proposal. Then Anna writes the minutes.",
        why: "<i>Zuerst besprechen wir den Vorschlag. Dann schreibt Anna das Protokoll.</i> For “then” both <i>dann</i> and <i>danach</i> work."
      },
      {
        q: "You are in a meeting.",
        setting: "Your boss asks you how to begin.",
        lines: [
          { tr: "Good morning! We have a lot of work today. How do we begin?" },
          {
            tr: "Answer that first you talk about the agenda.",
            answerTr: "First we talk about the agenda."
          },
          { tr: "Good. And afterwards?" },
          {
            tr: "Answer that afterwards you discuss Mr. Weber's proposal.",
            answerTr: "Afterwards we discuss Mr. Weber's proposal."
          }
        ]
      },
      {
        tr: "First we talk about the agenda. Afterwards we discuss the proposal. Besides, Anna writes the minutes.",
        why: "In <i>Besprechung</i> the <b>sp</b> after <b>Be-</b> is read [ʃp] and the <b>ch</b> is [ç]; in <i>Protokoll</i> the stress falls on the last syllable; in <i>außerdem</i> the <b>ß</b> is a voiceless <b>s</b>."
      },
      {
        tr: "I suggest that we discuss the agenda first.",
        why: "In <i>vor</i> the <b>v</b> is read [f] and in <i>schlage</i> the <b>sch</b> is [ʃ]; <i>zuerst</i> is read [tsuˈʔeːɐ̯st], with <b>z</b> = [ts]."
      }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Review",
    title: "Test: At the office",
    objectives: ["check polite requests, indirect questions, the formal letter, man and the sequence connectors"],
    theory: [
      {
        p: "Ten questions on the unit. You pass with 70%. Don't look back at the lessons while you answer: if you don't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        tr: "Conjugate können in the Konjunktiv II: du, wir, ihr.",
        why: "<i>könntest, könnten, könntet</i>: the <b>ö</b> with the umlaut and the <b>-e-</b> of the Konjunktiv II."
      },
      {
        q: "Complete: “Ich weiß nicht, ___ Herr Weber im Büro ist.” (if, whether)",
        hint: "yes/no question",
        why: "A yes/no question becomes indirect with <b>ob</b>, and the verb goes to the end."
      },
      {
        q: "Complete: “Hier ___ man pünktlich sein.” (müssen)",
        hint: "third person singular",
        why: "<b>muss</b>: with <i>man</i> the modal is in the third person singular."
      },
      {
        q: "Complete: “Sehr ___ Frau Keller,” (geehrt, with the ending)",
        hint: "feminine, no article",
        why: "With <i>Frau</i> the adjective without an article takes <b>-e</b>: <i>geehrte</i>."
      },
      {
        q: "Complete: “Zuerst ___ wir die Tagesordnung.” (besprechen)",
        hint: "verb before the subject",
        why: "After <i>zuerst</i> comes the verb, then the subject: <b>besprechen wir</b>."
      },
      {
        q: "Which sentence is the polite request?",
        opts: ["Rufen Sie mich zurück!", "Könnten Sie mich bitte zurückrufen?", "Sie rufen mich zurück."],
        why: "<b>Könnten Sie ...?</b> with the infinitive at the end is the polite formula; the other two are an order and a statement."
      },
      {
        q: "Match each word to its meaning.",
        pairs: ["message", "subject line", "meeting", "colleague"]
      },
      {
        tr: "Could you confirm the appointment for me, please?",
        why: "<i>Könnten Sie mir den Termin bitte bestätigen</i>: the infinitive closes the sentence. <i>Könnten Sie mir bitte den Termin bestätigen</i> works too."
      },
      {
        tr: "I'd like to know whether Mr. Weber is in the office today. Could you call me back, please?",
        why: "In <i>Büro</i> the <b>ü</b> is [y] and the stress falls on <b>ro</b>; in <i>ich</i> the <b>ch</b> is [ç]; in <i>wissen</i> the <b>w</b> is [v] and the <b>ss</b> is a voiceless <b>s</b>."
      },
      {
        tr: "At our place we start at eight, and first of all we talk about the agenda.",
        why: "In <i>acht</i> the <b>ch</b> after <b>a</b> is [x]; <i>Bei</i> has <b>ei</b> = [aɪ]; in <i>zuerst</i> the <b>z</b> is [ts] and the vowels <b>u</b> and <b>e</b> are pronounced separately."
      }
    ]
  }
});
