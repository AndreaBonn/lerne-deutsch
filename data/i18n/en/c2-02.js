/* ============================================================
   Learner-language text (en) for data/core/c2-02.js, unit c2-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c2-u04": {
    title: "What worries me",
    grammarNote: "Relative clauses with the genitive dessen and deren (die Forscherin, deren Ergebnisse ...) and with the preposition in front of the pronoun (mit dem, auf dessen Grundlage) · relative clauses with wer, was and wo(r)- + preposition (Wer zu spät kommt, den ...; alles, was ...; vieles, worüber ...) · verbs and adjectives whose government you cannot guess from English: genitive (bedürfen, sich enthalten, beschuldigen, sich bewusst sein) and prepositions (zweifeln an, stolz auf, bestehen auf/in)"
  },
  "lesson:c2-u04-l1": {
    theme: "Argument and formal writing",
    title: "dessen, deren, mit dem",
    objectives: [
      "use dessen and deren to say “whose”",
      "make dessen and deren agree with the antecedent, not with the noun that follows",
      "put the preposition in front of the relative pronoun (mit dem, auf deren Grundlage)",
      "decline the adjective that follows dessen and deren"
    ],
    theory: [
      {
        h: "The genitive of the relative pronoun",
        p: "To say “whose”, German uses the genitive of the relative pronoun: <strong>dessen</strong> if the antecedent is masculine or neuter, <strong>deren</strong> if it is feminine or plural. <em>Der Autor, dessen Roman verfilmt wurde</em>, “the author whose novel was made into a film”; <em>die Forscherin, deren Ergebnisse umstritten sind</em>, “the researcher whose results are disputed”. After <em>dessen</em> and <em>deren</em> there is no article: the pronoun takes its place, and the noun that follows takes the case required by the relative clause."
      },
      {
        h: "The preposition comes first",
        p: "If the verb of the relative clause takes a preposition, the preposition opens the clause and governs the pronoun in its case: <em>die Kommission, mit der wir zusammenarbeiten</em> (mit + dative), <em>das Thema, für das sie sich interessiert</em> (für + accusative). The same goes for the genitive: <em>das Gesetz, auf dessen Grundlage die Behörde entschieden hat</em>; <em>die Kollegen, mit deren Hilfe wir das Projekt abgeschlossen haben</em>. The conjugated verb goes to the end, as in every subordinate clause."
      },
      {
        contrast: "English <em>whose</em> never changes: <em>the man whose car</em>, <em>the woman whose car</em>, <em>the companies whose cars</em>. German has to choose, and it looks at the possessor, that is, the antecedent: <em>dessen</em> for der and das nouns, <em>deren</em> for die nouns and plurals, whatever the gender of the noun that follows. <em>Das Unternehmen, dessen Chefin zurückgetreten ist</em>: <em>dessen</em> because <em>das Unternehmen</em> is neuter, even though <em>Chefin</em> is feminine. With prepositions, English usually leaves the preposition at the end and often drops the pronoun altogether: <em>the commission we work with</em>, <em>the topic she is interested in</em>. German allows neither: the relative pronoun is never left out, the preposition always stands in front of it, and the pronoun is declined: <em>die Kommission, mit der wir zusammenarbeiten</em>, <em>das Thema, für das sie sich interessiert</em>. And where formal English puts the possessor after the noun (<em>the law on the basis of which</em>), German puts it before: <em>auf dessen Grundlage</em>."
      },
      {
        trap: "<em>deren</em> and <em>derer</em> are not the same thing: <em>derer</em> is a demonstrative that points ahead to a relative clause (<em>die Zahl derer, die das Angebot nutzen</em>, “the number of those who ...”), never the possessive relative. And the adjective after <em>dessen</em> and <em>deren</em> takes the strong ending, as if there were no article: <em>mit dessen neuem Vorschlag</em>, <em>deren letzter Roman</em>; <em>mit dessen neuen Vorschlag</em> is heard in speech, but in careful writing it is a mistake."
      },
      {
        tip: "To build the relative clause, start from the main clause: <em>Die Regierung beruft sich auf ihre Ergebnisse.</em> The owner of <em>Ergebnisse</em> is <em>die Studie</em>, feminine: <em>ihre</em> becomes <em>deren</em>, and the whole group with the preposition moves to the front of the relative clause: <em>die Studie, auf deren Ergebnisse sich die Regierung beruft</em>."
      }
    ],
    grammar: {
      title: "Relative pronoun in the genitive and with a preposition",
      note: "<b>dessen</b>: masculine or neuter antecedent · <b>deren</b>: feminine or plural antecedent. They agree with the possessor, not with the noun that follows, and replace the article. The preposition opens the relative clause: <i>mit dem, auf deren Grundlage</i>. Adjective after dessen/deren: strong ending.",
      table: {
        head: ["antecedent", "genitive", "with a preposition"],
        rows: [
          ["der Autor", "dessen Roman", "mit dem, auf dessen Grundlage"],
          ["das Gesetz", "dessen Text", "nach dem, auf dessen Grundlage"],
          ["die Forscherin", "deren Ergebnisse", "mit der, mit deren Hilfe"],
          ["die Kollegen", "deren Hilfe", "mit denen, mit deren Hilfe"]
        ]
      },
      examples: [
        { tr: "The author whose novel was made into a film lives a very secluded life.", note: "dessen: der Autor is masculine" },
        { tr: "The researcher whose results are disputed has made her data public.", note: "deren: die Forscherin is feminine, even though Ergebnisse is plural" },
        { tr: "The colleagues with whose help we completed the project have since left.", note: "preposition + deren: plural antecedent" },
        { tr: "The law on the basis of which the authority made its decision is being reviewed by a court.", note: "auf dessen Grundlage: das Gesetz is neuter" },
        { tr: "The commission we have been working with for years has published its recommendations.", note: "mit + feminine dative: mit der" },
        { tr: "The minister, whose new proposal hardly anyone agrees with, is sticking to his plan.", note: "after dessen the adjective is strong: neuem" }
      ]
    },
    vocab: [
      "objection",
      "reservation, misgiving",
      "scope, implications (of a decision)",
      "facts of the case, state of affairs",
      "basis, foundation",
      "originator, author (of something)",
      "credibility",
      "career path, background",
      "to leave (a post), to step down (from a board)",
      "to disclose, to make public",
      "controversial, disputed",
      "secluded, withdrawn"
    ],
    exercises: [
      {
        q: "Complete: «Der Schriftsteller, ___ Roman gerade verfilmt wird, gibt keine Interviews.»",
        opts: [
          "dessen",
          "deren",
          "dem"
        ],
        why: "The antecedent <i>der Schriftsteller</i> is masculine: <b>dessen</b>, “whose”. <i>deren</i> would go with a feminine or plural antecedent; <i>dem</i> is a dative, not a possessive."
      },
      {
        q: "Complete: «Das Unternehmen, ___ Chefin vergangene Woche zurückgetreten ist, sucht einen Nachfolger.»",
        opts: [
          "dessen",
          "deren",
          "der"
        ],
        why: "What counts is the possessor, <i>das Unternehmen</i>, which is neuter: <b>dessen</b>. The gender of <i>Chefin</i> plays no part: choosing <i>deren</i> means matching the pronoun to the wrong noun."
      },
      {
        q: "Complete: «Die Ministerin, mit deren ___ Vorschlag niemand einverstanden war, trat zurück.»",
        opts: [
          "neuem",
          "neuen",
          "neue"
        ],
        why: "After <i>dessen</i> and <i>deren</i> the adjective takes the strong ending, as with no article: <i>mit</i> + masculine dative, <b>neuem</b>. <i>neuen</i> is common in speech but counts as a mistake in careful writing; <i>neue</i> is not a dative."
      },
      {
        q: "Complete: «Das ist die Kollegin, mit ___ Hilfe ich die Studie abgeschlossen habe.»",
        hint: "possessive relative, feminine antecedent",
        why: "<b>deren</b>: <i>die Kollegin</i> is feminine, and <i>mit deren Hilfe</i> means “with whose help”. The preposition stays in front, and the noun after the pronoun has no article."
      },
      {
        q: "Complete: «Der Kollege, mit ___ ich das Büro teile, ist im Urlaub.»",
        hint: "relative pronoun after mit, masculine antecedent",
        why: "<b>dem</b>: <i>mit</i> takes the dative and the antecedent <i>der Kollege</i> is masculine. English can say “the colleague I share the office with”; German needs the pronoun, puts <i>mit</i> in front of it and declines it."
      },
      {
        q: "Complete with the possessive relative: the first gap refers to the Studie, the second to the Institut.",
        tr: "The study whose results the government relies on was produced by an institute whose funding is still unclear to this day.",
        why: "<b>deren</b>: <i>die Studie</i> is feminine (<i>auf deren Ergebnisse</i>, with <i>sich berufen auf</i> + accusative). <b>dessen</b>: <i>das Institut</i> is neuter, even though <i>Finanzierung</i> is feminine."
      },
      {
        q: "In which sentences is the relative pronoun correct? (two answers)",
        opts: [
          "Die Nachbarin, deren Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an dessen Erfolg niemand mehr glaubte, wurde doch abgeschlossen.",
          "Die Nachbarin, dessen Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an den Erfolg niemand mehr glaubte, wurde doch abgeschlossen."
        ],
        why: "The first two are correct: <i>deren</i> for the feminine antecedent <i>die Nachbarin</i>, <i>an dessen Erfolg</i> for the neuter <i>das Projekt</i>. In the third, <i>dessen</i> follows the gender of <i>Sohn</i> instead of the possessor's; in the fourth the genitive is missing: <i>an den Erfolg</i> does not say whose success it is."
      },
      {
        q: "Put the words in order.",
        tr: "The company whose products she advertises has been under fire for months.",
        why: "<i>Die Firma, für deren Produkte sie wirbt, steht seit Monaten in der Kritik.</i> <i>werben für</i>: the preposition opens the relative clause, <i>deren</i> refers back to <i>die Firma</i>, and the verb <i>wirbt</i> closes the subordinate clause."
      },
      {
        q: "Translate: “The writer, whose latest novel has been translated into twenty languages, lives in Vienna.” (a woman; übersetzen)",
        why: "<i>Die Schriftstellerin, deren letzter Roman in zwanzig Sprachen übersetzt wurde, lebt in Wien.</i> <i>deren</i> because the antecedent is feminine; <i>letzter</i> has the strong masculine nominative ending. <i>Autorin</i> and the perfect passive <i>übersetzt worden ist</i> are also accepted."
      },
      {
        tr: "The report, whose publication had been expected for months, contains hardly anything new. The experts whose judgment the government relies on remain anonymous.",
        why: "In <i>Veröffentlichung</i> the stress falls on <b>öf</b>; in <i>Urteil</i> the stress falls on <b>Ur</b>; in <i>anonym</i> the stress falls on <b>nym</b>."
      },
      {
        tr: "The author, whose novel was made into a film, lives a very secluded life.",
        why: "In <i>Autorin</i> the stress falls on <b>to</b>; in <i>verfilmt</i> the stress falls on <b>filmt</b>; in <i>zurückgezogen</i> the stress falls on <b>rück</b>."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    theme: "Argument and formal writing",
    title: "wer, was, worüber",
    objectives: [
      "use wer for a general “whoever” and choose the case of the correlative (der, den, dem)",
      "use was after alles, nichts, etwas, das and neuter superlatives",
      "refer back to a whole clause with was (“which”)",
      "replace preposition + was with wo(r)- + preposition (worüber, wofür, wovor)"
    ],
    theory: [
      {
        h: "wer: “whoever” with no antecedent",
        p: "<strong>wer</strong> opens a relative clause that has no noun to refer to: <em>Wer zu spät kommt, den bestraft das Leben</em>, “whoever comes too late is punished by life”. The main clause picks the relative clause up again with a demonstrative, the correlative, in the case it needs: <em>den</em> (accusative, <em>bestrafen</em>), <em>dem</em> (dative: <em>Wer viel verspricht, dem glaubt man nicht</em>). If the two cases are the same, the correlative can be left out: <em>Wer A sagt, (der) muss auch B sagen</em>. <em>wer</em> is declined too: <em>wem</em>, <em>wen</em>, <em>wessen</em>."
      },
      {
        h: "was and wo(r)-",
        p: "<strong>was</strong> replaces <em>das</em> when the antecedent is not a specific noun: after <em>alles, nichts, etwas, vieles, manches, das</em> and after a neuter superlative used as a noun (<em>das Beste, was ...</em>). It is also used with no antecedent (<em>Was mich beunruhigt, ist ...</em>) and to refer back to a whole clause: <em>Er hat bestanden, was niemand erwartet hatte</em>, “which nobody had expected”. If the verb takes a preposition, preposition + <em>was</em> is replaced by <strong>wo(r)- + preposition</strong>: <em>vieles, worüber wir uns nicht einig waren</em>. The <em>r</em> appears before a vowel: <em>woran, worauf, worüber</em>, but <em>wofür, womit, wovon, wovor</em>."
      },
      {
        contrast: "English splits this between <em>whoever</em>, <em>what</em>, <em>that</em> and <em>which</em>; German needs two words: <em>wer</em> for people, <em>was</em> for everything else. <em>What worries me</em> is <em>Was mich beunruhigt</em>; <em>everything (that) he says</em> is <em>alles, was er sagt</em>; and the <em>which</em> that refers back to a whole clause (<em>..., which nobody had expected</em>) is <em>was</em> as well. Where English leaves the preposition dangling at the end (<em>a lot we disagreed about</em>, <em>everything she fought for</em>), German fuses it with the pronoun at the start of the clause: <em>vieles, worüber wir uns nicht einig waren</em>, <em>alles, wofür sie gekämpft hat</em>. And English <em>whoever</em> needs no resumptive pronoun, whereas German usually adds the correlative, in the case of the main clause, whenever the case changes: <em>Wem die Reform schadet, den hat man nicht gefragt</em>, “those the reform harms were not asked”."
      },
      {
        trap: "Because English says <em>everything that</em>, <em>alles, das</em> looks natural; after <em>alles, nichts, etwas, das Einzige, das Beste</em> it has to be <em>was</em>: <em>Alles, was er sagt</em>. In formal writing avoid <em>über was, für was</em>: they are colloquial, the careful form is <em>worüber, wofür</em>. With an antecedent that is a specific noun, on the other hand, preposition + <em>der/die/das</em> stays: <em>die Frage, über die wir sprechen</em>."
      },
      {
        tip: "To choose between <em>wer</em> and the correlative, ask two separate questions: what case does the verb of the relative clause want (<em>schaden</em> + dative: <em>wem</em>)? And what case does the verb of the main clause want (<em>fragen</em> + accusative: <em>den</em>)? The two answers can differ, and that is exactly where the correlative is needed."
      }
    ],
    grammar: {
      title: "Relative clauses with wer, was and wo(r)-",
      note: "<b>wer ..., der/den/dem</b>: “whoever”, correlative in the case of the main clause (can be dropped if the case is the same). <b>was</b>: after alles, nichts, etwas, das, das Beste; with no antecedent; referring to a whole clause. <b>wo(r)- + preposition</b> instead of preposition + was: <i>worüber, woran, wofür, wovor</i>.",
      table: {
        head: ["antecedent", "relative", "example"],
        rows: [
          ["none (people)", "wer, wem, wen", "Wer lügt, dem glaubt man nicht."],
          ["alles, nichts, etwas, das", "was", "Alles, was er sagt, stimmt."],
          ["neuter superlative", "was", "das Beste, was passieren konnte"],
          ["a whole clause", "was", "..., was niemand erwartet hatte."],
          ["was + preposition", "wo(r)- + preposition", "vieles, worüber wir streiten"]
        ]
      },
      examples: [
        { tr: "Whoever comes too late is punished by life.", note: "wer + correlative in the accusative: bestrafen takes the accusative" },
        { tr: "What worries me is the indifference of many people.", note: "was with no antecedent, as the subject" },
        { tr: "Everything he claimed could be refuted.", note: "after alles: was" },
        { tr: "The best thing that could have happened to us was this rejection.", note: "after a neuter superlative: was" },
        { tr: "He passed the exam, which nobody had expected.", note: "was refers back to the whole previous clause" },
        { tr: "There was a lot we did not agree on.", note: "sich einig sein über: worüber" }
      ]
    },
    vocab: [
      "indifference",
      "claim, assertion",
      "contradiction",
      "conclusion (drawn from something)",
      "fallacy, false conclusion",
      "request, concern",
      "to refute, to disprove",
      "to prove, to document",
      "to worry, to trouble",
      "to admit, to concede",
      "sound, convincing",
      "questionable, dubious"
    ],
    exercises: [
      {
        q: "Complete: «Alles, ___ sie gesagt hat, war gelogen.»",
        opts: [
          "was",
          "das",
          "welches"
        ],
        why: "After <i>alles</i> the relative is <b>was</b>: the antecedent is not a specific noun. <i>das</i> and <i>welches</i> would need a neuter noun as antecedent, even though English “everything that” makes <i>das</i> tempting."
      },
      {
        q: "Complete: «___ sich nicht an die Regeln hält, ___ droht ein Bußgeld.»",
        opts: [
          "Wer ... dem",
          "Wer ... der",
          "Der ... wer"
        ],
        why: "<i>Wer</i> is the subject of <i>sich halten</i>; in the main clause <i>drohen</i> takes the dative, so the correlative is <b>dem</b>: “whoever does not follow the rules faces a fine”. <i>der</i> would be a nominative."
      },
      {
        q: "In formal writing: «Das ist eine Frage, ___ ich lange nachgedacht habe.»",
        opts: [
          "über die",
          "worüber",
          "über was"
        ],
        why: "The antecedent is a specific noun, <i>eine Frage</i>, feminine: <b>über die</b> (<i>nachdenken über</i> + accusative). <i>worüber</i> is used with <i>alles, etwas, das</i> or with a whole clause; after a noun it is old-fashioned or colloquial. <i>über was</i> is colloquial."
      },
      {
        q: "Complete: «Das Einzige, ___ mich an dem Vorschlag stört, ist der Zeitplan.»",
        hint: "relative after das Einzige",
        why: "<b>was</b>: <i>das Einzige</i>, like <i>alles</i> and neuter superlatives, takes <i>was</i>."
      },
      {
        q: "Complete: «Das ist genau das, ___ ich Angst hatte.»",
        hint: "wo(r)- + the preposition of Angst haben",
        why: "<b>wovor</b>: <i>Angst haben vor</i>; after <i>das</i>, preposition + <i>was</i> becomes <i>wo(r)-</i> + preposition. Before a consonant there is no <i>r</i>: <i>wovor</i>, not <i>worvor</i>. English “what I was afraid of” leaves the preposition at the end; German puts it at the start."
      },
      {
        q: "Complete with declined wer and the correlative.",
        tr: "Those who are harmed most by the reform were consulted least.",
        why: "<b>Wem</b>: <i>schaden</i> takes the dative. <b>den</b>: in the main clause <i>fragen</i> takes the accusative. The cases are different, so the correlative cannot be left out."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "to admit, to concede",
          "to refute, to disprove",
          "sound, convincing",
          "fallacy, false conclusion"
        ]
      },
      {
        q: "Put the words in order.",
        tr: "What worries me about the report is the indifference of the authorities.",
        why: "<i>Was mich an dem Bericht beunruhigt, ist die Gleichgültigkeit der Behörden.</i> The relative clause with <i>was</i> is the subject and fills the first position; the verb <i>ist</i> comes right after the comma."
      },
      {
        q: "Translate: “Everything we talked about remains confidential.” (vertraulich)",
        why: "<i>Alles, worüber wir gesprochen haben, bleibt vertraulich.</i> With <i>sprechen über</i> you need <i>worüber</i>; with a transitive verb <i>was</i> is enough: <i>Alles, was wir besprochen haben</i> (or <i>diskutiert haben</i>)."
      },
      {
        tr: "What worries many readers is not the study itself but what politicians make of it. Anyone who reads the figures carefully finds hardly anything in them to get worked up about.",
        why: "In <i>beunruhigt</i> the stress falls on <b>un</b>; in <i>aufregen</i> the stress falls on <b>auf</b>; in <i>worüber</i> the stress falls on <b>ü</b>."
      },
      {
        tr: "Everything he claimed could be refuted.",
        why: "In <i>behauptet</i> the stress falls on <b>haup</b>; in <i>widerlegen</i>, an inseparable verb, the stress falls on <b>le</b>; in <i>ließ</i> the <b>ie</b> is long."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    theme: "Argument and formal writing",
    title: "Government you cannot guess",
    objectives: [
      "use verbs and adjectives with the genitive (bedürfen, sich enthalten, beschuldigen, sich bewusst sein)",
      "choose the right preposition where English uses a different one (zweifeln an, stolz auf)",
      "tell bestehen auf, bestehen aus and bestehen in apart",
      "recognize the formal register of genitive government"
    ],
    theory: [
      {
        h: "Verbs and adjectives with the genitive",
        p: "A small group of verbs takes an object in the genitive: <em>bedürfen</em> (to need, to require), <em>gedenken</em> (to commemorate), <em>sich enthalten</em> (to abstain from), <em>sich vergewissern</em> (to make sure of), <em>sich bedienen</em> (to make use of). Some take an accusative and a genitive: <em>jemanden einer Sache beschuldigen</em> or <em>anklagen</em>, “to accuse someone of something”, and <em>jemanden einer Sache verdächtigen</em>, “to suspect someone of something”. The same is true of some adjectives: <em>sich einer Sache bewusst sein</em>, <em>einer Sache würdig</em>, <em>sich einer Sache schuldig machen</em>. Verbs like <em>bedürfen</em>, <em>gedenken</em>, <em>sich enthalten</em> and <em>beschuldigen</em> belong to the high register: in everyday speech people say <em>brauchen</em> instead of <em>bedürfen</em>. <em>sich einer Sache bewusst sein</em>, on the other hand, is common in ordinary use too."
      },
      {
        h: "Learn the preposition with the verb",
        p: "Many German verbs and adjectives take a fixed preposition, and the case that follows is part of the pattern: <em>zweifeln an</em> + dative, <em>stolz auf</em> + accusative, <em>angewiesen auf</em> + accusative, <em>sich erkundigen nach</em> + dative. The same verb changes its meaning with the preposition: <em>bestehen auf</em> (to insist on), <em>bestehen aus</em> (to consist of, to be made up of), <em>bestehen in</em> (to consist in, to lie in)."
      },
      {
        contrast: "Many German patterns do not match the English ones, and translating the preposition word for word leads to mistakes: “to doubt something” has no preposition in English but is <em>an etwas zweifeln</em>; “proud <em>of</em>” is <em>stolz auf</em>; “to depend <em>on</em>” is <em>abhängen von</em>, not <em>auf</em>; “to get used <em>to</em>” is <em>sich gewöhnen an</em>. Where English uses <em>of</em> or a plain direct object (<em>to need something, to accuse someone of something, to be aware of something</em>), formal German often uses a bare genitive with no preposition at all: <em>der Hilfe bedürfen</em>, <em>des Betrugs beschuldigen</em>, <em>sich der Risiken bewusst sein</em>. And English <em>consist of</em> and <em>consist in</em> map onto two different German prepositions: <em>bestehen aus</em> and <em>bestehen in</em>."
      },
      {
        trap: "<em>sich interessieren für</em>, but <em>interessiert an</em>: the verb and the adjective do not take the same preposition, and neither of them takes <em>in</em> as in English “interested in”. And with <em>bedürfen</em> the object is never in the accusative: <em>Der Plan bedarf einer Überarbeitung</em>, not <em>eine Überarbeitung</em>."
      },
      {
        tip: "Always learn verbs and adjectives together with their pattern, as a single word: not <em>zweifeln</em>, but <em>an etwas (Dat.) zweifeln</em>; not <em>bewusst</em>, but <em>sich einer Sache (Gen.) bewusst sein</em>."
      }
    ],
    grammar: {
      title: "Verb and adjective government",
      note: "<b>Genitive</b>: bedürfen, gedenken, sich enthalten, sich vergewissern; jemanden einer Sache beschuldigen; sich einer Sache bewusst sein, einer Sache würdig. <b>Prepositions</b>: zweifeln an + Dat., stolz auf + Akk., angewiesen auf + Akk., bestehen auf / aus / in + Dat. The verbs with the genitive belong to the formal register.",
      table: {
        head: ["German", "English"],
        rows: [
          ["einer Sache bedürfen", "to need, to require something"],
          ["jemanden einer Sache beschuldigen", "to accuse someone of something"],
          ["sich einer Sache bewusst sein", "to be aware of something"],
          ["an einer Sache zweifeln", "to doubt something"],
          ["auf etwas stolz sein", "to be proud of something"],
          ["auf etwas bestehen / aus etwas bestehen / in etwas bestehen", "to insist on / to consist of / to consist in"]
        ]
      },
      examples: [
        { tr: "The reform requires a thorough review.", note: "bedürfen + genitive: einer gründlichen Prüfung" },
        { tr: "They accused him of fraud.", note: "beschuldigen + accusative of the person + genitive of the charge" },
        { tr: "She is fully aware of the risks.", note: "sich bewusst sein + genitive plural: der Risiken" },
        { tr: "Two members of parliament abstained.", note: "sich der Stimme enthalten: genitive" },
        { tr: "Nobody doubts the authenticity of the document.", note: "zweifeln an + dative, with a preposition where English has none" },
        { tr: "The opposition insists on a public hearing.", note: "bestehen auf + dative: to insist" }
      ]
    },
    vocab: [
      "to need, to require (+ genitive)",
      "to abstain from (+ genitive)",
      "to accuse (someone of something)",
      "to commemorate (+ genitive)",
      "to make sure of (+ genitive)",
      "to doubt",
      "dependent on, reliant on",
      "aware",
      "proud of",
      "worthy of (+ genitive)",
      "government (of a verb), valency",
      "accusation, reproach"
    ],
    exercises: [
      {
        q: "Complete: «Die Gesetzesänderung bedarf ___.»",
        opts: [
          "der Zustimmung des Bundesrats",
          "die Zustimmung des Bundesrats",
          "auf die Zustimmung des Bundesrats"
        ],
        why: "<i>bedürfen</i> takes the genitive: <b>der Zustimmung</b>. The accusative <i>die Zustimmung</i> goes with <i>brauchen</i>; <i>bedürfen</i> takes no preposition."
      },
      {
        q: "Complete: «Niemand zweifelt ___ ihrer Ehrlichkeit.»",
        opts: [
          "an",
          "von",
          "über"
        ],
        why: "<b>zweifeln an</b> + dative. English “to doubt something” has no preposition, and “doubts about” pushes towards <i>über</i>, which is wrong here; <i>von</i> is wrong too."
      },
      {
        q: "“The opposition insists on a public hearing.” Complete: «Die Opposition besteht ___ einer öffentlichen Anhörung.»",
        opts: [
          "auf",
          "aus",
          "in"
        ],
        why: "<b>bestehen auf</b>: to insist on. <i>bestehen aus</i> means “to consist of”, <i>bestehen in</i> “to consist in”."
      },
      {
        q: "Complete: «Sie ist sich ___ Risiken durchaus bewusst.»",
        hint: "sich bewusst sein + genitive plural",
        why: "<b>der</b>: <i>sich einer Sache bewusst sein</i> takes the genitive, and the genitive plural of the article is <i>der</i>."
      },
      {
        q: "Complete: «Viele Rentner sind ___ die Hilfe ihrer Kinder angewiesen.»",
        hint: "preposition of angewiesen",
        why: "<b>auf</b>: <i>angewiesen sein auf</i> + accusative, “to depend on, to rely on”."
      },
      {
        q: "Complete: the first gap is the relative pronoun, the second the preposition of bestehen.",
        tr: "The member of parliament, who is accused of bribery, rejects the accusation and insists on an independent investigation.",
        why: "<b>den</b>: <i>beschuldigen</i> takes the person in the accusative (and the charge in the genitive, <i>der Bestechung</i>). <b>auf</b>: <i>bestehen auf</i>, “to insist on”."
      },
      {
        q: "In which sentences is the government correct? (two answers)",
        opts: [
          "Der Plan bedarf einer gründlichen Überarbeitung.",
          "Wir sind stolz auf unsere Ergebnisse.",
          "Der Plan bedarf eine gründliche Überarbeitung.",
          "Sie interessiert sich an moderner Kunst."
        ],
        why: "The first two are correct: <i>bedürfen</i> + genitive, <i>stolz auf</i> + accusative. The third has an accusative instead of the genitive; in the fourth the verb takes <i>für</i>: <i>sich für moderne Kunst interessieren</i>, while <i>an</i> goes with the adjective <i>interessiert</i>."
      },
      {
        q: "Put the words in order.",
        tr: "The defendant denies having been guilty of fraud.",
        why: "<i>Die Angeklagte bestreitet, sich des Betrugs schuldig gemacht zu haben.</i> <i>sich einer Sache schuldig machen</i> takes the genitive; the perfect infinitive <i>gemacht zu haben</i> closes the sentence."
      },
      {
        q: "Translate: “We are aware of the responsibility we are taking on.” (sich bewusst sein, übernehmen)",
        why: "<i>Wir sind uns der Verantwortung bewusst, die wir übernehmen.</i> <i>sich bewusst sein</i> takes the genitive, and the reflexive is in the dative: <i>uns</i>. The relative clause can also come straight after <i>Verantwortung</i>: <i>Wir sind uns der Verantwortung, die wir übernehmen, bewusst</i>. Unlike English, German cannot drop the relative pronoun <i>die</i>."
      },
      {
        tr: "The motion requires the approval of all members. Anyone who cannot take part in the vote should ask the board about the deadlines beforehand.",
        why: "In <i>Zustimmung</i> the stress falls on <b>Zu</b>; in <i>Abstimmung</i> the stress falls on <b>Ab</b>; in <i>erkundigen</i> the stress falls on <b>kun</b>."
      },
      {
        tr: "She is fully aware of the risks.",
        why: "In <i>Risiken</i> the stress falls on <b>Ri</b>; in <i>durchaus</i> the stress can fall on <b>durch</b> or on <b>aus</b>; in <i>bewusst</i> the <b>u</b> is short."
      }
    ]
  },
  "lesson:c2-u04-test": {
    theme: "Assessment",
    title: "Test: What worries me",
    objectives: [
      "check the relative clauses and verb patterns of the unit and review level C2 in the final exam"
    ],
    theory: [
      {
        p: "Final exam of level C2: twelve questions on this unit, with a review of the participial attribute (unit 1) and of register (unit 3). You pass with 70%. Do not look back at the lessons while you answer: if you do not remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: «Die Firma, ___ Gründerin den Preis erhalten hat, sitzt in Basel.»",
        hint: "possessive relative, feminine antecedent",
        why: "<b>deren</b>: <i>die Firma</i> is feminine, and <i>deren Gründerin</i> means “whose founder”."
      },
      {
        q: "Complete: «Er hat alles verloren, ___ ihm wichtig war.»",
        hint: "relative after alles",
        why: "<b>was</b>: after <i>alles</i> the relative is always <i>was</i>."
      },
      {
        q: "Complete: «Das Vorhaben bedarf ___ sorgfältigen Planung.»",
        hint: "bedürfen + genitive, article",
        why: "<b>einer</b> (or <b>der</b>): <i>bedürfen</i> takes the genitive, and the feminine genitive of the article is <i>einer</i> or <i>der</i>."
      },
      {
        q: "Complete with the participial attribute: «Die im Bericht ___ Mängel wurden inzwischen behoben.» (to criticize, to object to: beanstanden)",
        hint: "participle II of beanstanden, plural after die",
        why: "<b>beanstandeten</b>: participle II with passive meaning (“the shortcomings criticized in the report”), ending <i>-en</i> after the plural article <i>die</i>. <i>beanstanden</i> is inseparable: no <i>ge-</i>."
      },
      {
        q: "In a formal letter, which sentence is appropriate?",
        opts: [
          "Wir bitten Sie, uns die fehlenden Unterlagen bis zum 15. März zukommen zu lassen.",
          "Schicken Sie uns mal die fehlenden Sachen bis zum 15. März.",
          "Wär nett, wenn Sie uns die Unterlagen bis zum 15. März schicken."
        ],
        why: "The first uses the formal register: <i>wir bitten Sie</i>, <i>Unterlagen</i>, <i>zukommen lassen</i>. In the second, <i>mal</i> and <i>Sachen</i> are colloquial; in the third, <i>Wär nett</i> belongs to conversation."
      },
      {
        q: "Complete: «Die Frage, ___ es eigentlich ankommt, hat niemand gestellt.»",
        opts: [
          "auf die",
          "auf der",
          "auf welcher"
        ],
        why: "<i>es kommt auf etwas an</i> takes <i>auf</i> + accusative, and the antecedent <i>die Frage</i> is feminine: <b>auf die</b>. <i>auf der</i> and <i>auf welcher</i> are datives."
      },
      {
        q: "“The difficulty lies in convincing everyone involved.” Complete: «Die Schwierigkeit besteht ___, alle Beteiligten zu überzeugen.»",
        opts: [
          "darin",
          "darauf",
          "daraus"
        ],
        why: "<b>bestehen in</b>, “to consist in, to lie in”, with the pronominal <i>darin</i> pointing ahead to the infinitive. <i>darauf</i> would mean “to insist”, <i>daraus</i> “to consist of”."
      },
      {
        q: "Which sentences are correct? (two answers)",
        opts: [
          "Wer zuletzt lacht, lacht am besten.",
          "Die Studie, auf deren Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Die Studie, auf dessen Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Er ist sich die Risiken bewusst."
        ],
        why: "The first two are correct: <i>wer</i> with no correlative (same case in both clauses) and <i>deren</i> for the feminine antecedent <i>die Studie</i>. In the third, <i>dessen</i> does not agree with <i>Studie</i>; in the fourth, <i>sich bewusst sein</i> takes the genitive: <i>der Risiken</i>."
      },
      {
        q: "Complete: the first gap is the possessive relative, the second the article governed by sich schuldig machen.",
        tr: "The minister, whose resignation has been demanded for weeks, denies having been guilty of misconduct.",
        why: "<b>deren</b>: <i>die Ministerin</i> is feminine. <b>eines</b> (or <b>des</b>): <i>sich einer Sache schuldig machen</i> takes the genitive, and <i>Fehlverhalten</i> is neuter: <i>eines Fehlverhaltens</i>."
      },
      {
        q: "Translate in formal register: “Anyone who is aware of the risks needs no further warnings.” (sich bewusst sein, bedürfen)",
        why: "<i>Wer sich der Risiken bewusst ist, bedarf keiner weiteren Warnungen.</i> <i>sich bewusst sein</i> and <i>bedürfen</i> both take the genitive; the correlative <i>der</i> can be added or left out, because <i>wer</i> and the subject of the main clause are both nominative."
      },
      {
        tr: "What worries the experts is not so much the number of cases as the indifference with which the authorities react to them. The measures listed in the report urgently need to be reviewed.",
        why: "In <i>Gleichgültigkeit</i> the stress falls on <b>Gleich</b>; in <i>Behörden</i> the stress falls on <b>hör</b>; in <i>Überprüfung</i> the stress falls on <b>prü</b>."
      },
      {
        tr: "Anyone who is aware of the implications of their decision acts more cautiously.",
        why: "In <i>Tragweite</i> the stress falls on <b>Trag</b>; in <i>Entscheidung</i> the stress falls on <b>schei</b>; in <i>vorsichtiger</i> the stress falls on <b>vor</b>."
      }
    ]
  }
});
