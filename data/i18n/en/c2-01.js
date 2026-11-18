/* ============================================================
   Learner-language text (en) for data/core/c2-01.js, unit c2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c2-u01": {
    title: "Extended attributes",
    grammarNote: "The extended participial attribute (die seit Jahren geforderte Reform) · participle I and participle II as attributes · the Gerundivum: zu + participle I (die zu lösende Aufgabe) · Funktionsverbgefüge in academic prose (zur Anwendung kommen, Rechnung tragen, in Abrede stellen)"
  },
  "lesson:c2-u01-l1": {
    theme: "Academic and scientific writing",
    title: "The extended participial attribute",
    objectives: [
      "recognize the article and the noun that frame an extended attribute",
      "read an attribute with several phrases and work out its structure",
      "turn a relative clause into an attribute and back",
      "choose between participle I and participle II"
    ],
    theory: [
      {
        h: "A relative clause squeezed in front of the noun",
        p: "In written German a participle can take its phrases along and sit between the article and the noun: <em>die seit Jahren von Fachleuten geforderte Reform</em>. It is a compressed relative clause: <em>die Reform, die seit Jahren von Fachleuten gefordert wird</em>. The article opens the bracket, the noun closes it, and everything in between belongs to the attribute: each phrase depends on its own participle, which comes right before the noun and takes an adjective ending. <strong>Participle II</strong> describes something done to the noun or already finished (<em>die vorgelegten Daten</em>, the data presented); <strong>participle I</strong> an active, ongoing action (<em>die vorliegenden Gutachten</em>, the expert reports that are available)."
      },
      {
        h: "How to read it",
        p: "If an article is followed by a preposition or a second article (<em>die von der ..., der dem ...</em>), expect an extended attribute: skip ahead to the noun and find the inflected participles right before it (there may be more than one, coordinated), then go back and read the phrases that belong to each. The internal order is that of a subordinate clause: phrases first, participle last, just as the verb comes last in a relative clause. A reflexive pronoun stays inside: <em>die sich verschärfende Wohnungsnot</em>. Two coordinated attributes without a conjunction are separated by a comma: <em>die in der Studie befragten, überwiegend jungen Erwachsenen</em>; with <em>und</em> no comma is needed: <em>die angekündigte und vielfach kritisierte Reform</em>."
      },
      {
        contrast: "English puts a participle before the noun when it stands alone or with a short adverb (<em>the rising costs, the widely discussed reform, the long-awaited report</em>), and short compounds can stand there too (<em>government-funded research</em>); but once it has an agent, an object or a prepositional phrase of its own, the group usually moves after the noun, especially when it grows longer: <em>the reform demanded by experts for years</em>, <em>the people living in poverty</em>. German has no such limit: the whole group stays on the left, between the article and the noun, and the participle closes it. So the English order is reversed, participle first and phrases after it; in German the phrases come first and the participle comes last, right before the noun. English <em>-ing</em> forms and German participle I are both formed from almost any verb, but German stacks even long phrases in front of it: <em>die dem Gericht vorliegenden Gutachten</em>, “the expert reports before the court”."
      },
      {
        trap: "The participle of a passive in the Perfekt has no <em>worden</em>: <em>die Daten, die erhoben worden sind</em> becomes <em>die erhobenen Daten</em>, never <em>die erhoben wordenen Daten</em>. And don't mix up the two participles: <em>die steigenden Kosten</em> are still rising, <em>die gestiegenen Kosten</em> have already risen."
      },
      {
        tip: "To translate into English, unpack the attribute into a relative clause or a participle phrase after the noun. To write in German, start from the relative clause: drop the relative pronoun, turn the verb into a participle, give it an ending and put it right before the noun."
      }
    ],
    grammar: {
      title: "The extended participial attribute",
      note: "<b>article + phrases + inflected participle + noun</b>. Participle II: passive sense or finished action (<i>die vorgelegten Daten</i>). Participle I: active sense, ongoing action (<i>die vorliegenden Gutachten</i>). The participle takes the adjective ending; <i>worden</i> disappears.",
      table: {
        head: ["relative clause", "extended attribute"],
        rows: [
          ["die Reform, die seit Jahren gefordert wird", "die seit Jahren geforderte Reform"],
          ["die Daten, die die Kommission vorgelegt hat", "die von der Kommission vorgelegten Daten"],
          ["die Gutachten, die dem Gericht vorliegen", "die dem Gericht vorliegenden Gutachten"],
          ["die Wohnungsnot, die sich verschärft", "die sich verschärfende Wohnungsnot"]
        ]
      },
      examples: [
        { tr: "The copyright reform that experts have been demanding for years is still a long time coming.", note: "participle II with two phrases: seit Jahren, von Fachleuten" },
        { tr: "The mostly young adults surveyed in the study showed surprisingly little trust in the media.", note: "two coordinated attributes, separated by a comma" },
        { tr: "The housing shortage, which has been getting worse for decades, is not a new phenomenon.", note: "participle I of a reflexive verb: sich stays inside the attribute" },
        { tr: "The report draws on the data presented by the commission last fall.", note: "participle II: von der Kommission names the agent" },
        { tr: "The expert reports before the court contradict one another on key points.", note: "participle I with the dative governed by vorliegen" },
        { tr: "The model, which many consider outdated, is proving surprisingly robust.", note: "für ... halten: the predicative phrase stays inside the attribute" }
      ]
    },
    vocab: [
      "treatise, scholarly paper",
      "finding(s), result (of an examination)",
      "expert report, expert opinion",
      "hypothesis",
      "subject, topic (of a study)",
      "study, investigation",
      "to present, to submit (a document)",
      "to prove to be, to turn out",
      "to prove, to demonstrate",
      "to be based on, to draw on",
      "mostly, predominantly",
      "decisive, decisively"
    ],
    exercises: [
      {
        q: "In an essay: «Die von der Regierung im Frühjahr angekündigte und von der Opposition scharf kritisierte Reform ist bis heute nicht umgesetzt.» What is the subject of the sentence?",
        opts: [
          "die Reform, with its whole attribute",
          "die Regierung",
          "die Opposition"
        ],
        why: "The article <i>Die</i> opens the bracket and <b>Reform</b> closes it: everything in between, two attributes joined by <i>und</i>, describes the reform. <i>von der Regierung</i> and <i>von der Opposition</i> are the agents of the two participles."
      },
      {
        q: "Turn into an attribute: «die Daten, die im letzten Jahr erhoben worden sind»",
        opts: [
          "die im letzten Jahr erhobenen Daten",
          "die im letzten Jahr erhoben wordenen Daten",
          "die im letzten Jahr erhebenden Daten"
        ],
        why: "The passive becomes an inflected participle II: <b>erhobenen</b>. <i>worden</i> never goes into the attribute; <i>erhebenden</i>, a participle I, would mean that the data are collecting something."
      },
      {
        q: "Complete: «Die Zahl der ___ Menschen ist im vergangenen Jahrzehnt gestiegen.» (people living in poverty)",
        opts: [
          "in Armut lebenden",
          "in Armut gelebten",
          "lebenden in Armut"
        ],
        why: "Active, ongoing action: participle I, <b>lebenden</b>. Inside an extended attribute the phrase <i>in Armut</i> comes before the participle, never between the participle and the noun, even though English says <em>living in poverty</em>; <i>gelebten</i> is a participle II and would describe something done or finished."
      },
      {
        q: "Complete: «Das dem Ausschuss seit März ___ Gutachten wurde bislang nicht veröffentlicht.»",
        hint: "from vorliegen, participle I, neuter after das",
        why: "<b>vorliegende</b>: participle I (the report is before the committee), ending <i>-e</i> after <i>das</i> in the nominative. <i>dem Ausschuss</i> is the dative governed by <i>vorliegen</i>."
      },
      {
        q: "Complete with two participle II forms: “predicted” in the first gap, “disadvantaged” in the second.",
        tr: "The consequences of climate change, long predicted by numerous researchers, particularly affect the already disadvantaged regions of the South.",
        why: "<i>vorhergesagten</i> (also <i>vorausgesagten</i> or <i>prognostizierten</i>) and <i>benachteiligten</i>: participle II with <i>-en</i> after the plural article <i>die</i>. <i>ohnehin</i> (“anyway, already”) sits inside the second attribute."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "expert report, expert opinion",
          "finding(s), result",
          "treatise, scholarly paper",
          "hypothesis"
        ]
      },
      {
        q: "Which sentences contain an extended participial attribute?",
        opts: [
          "Die vom Gericht bestellte Gutachterin widersprach dem Kläger.",
          "Die über Jahrzehnte gewachsenen Strukturen lassen sich nicht über Nacht ändern.",
          "Die Gutachterin, die das Gericht bestellt hatte, widersprach dem Kläger.",
          "Die Strukturen sind über Jahrzehnte gewachsen."
        ],
        why: "In the first two the participle and its phrases sit between the article and the noun (<i>die vom Gericht bestellte Gutachterin</i>, <i>die über Jahrzehnte gewachsenen Strukturen</i>). The third says the same thing as the first with a relative clause; in the fourth <i>gewachsen</i> is part of the Perfekt, not an attribute."
      },
      {
        q: "Translate with an extended participial attribute: “The study presented by the university last week contradicts the previously widespread assumptions.” (vorlegen, die Annahme)",
        why: "<i>Die von der Universität letzte Woche vorgelegte Studie widerspricht den bisher verbreiteten Annahmen</i>: what follows “study” in English goes before <i>Studie</i>, with the participle last. <i>widersprechen</i> takes the dative: <i>den ... Annahmen</i>."
      },
      {
        tr: "The thesis put forward in this treatise rests on mostly older findings. The studies published since then raise serious doubts about it.",
        why: "In <i>Abhandlung</i> the stress falls on <b>Ab</b>; in <i>Befunde</i> the stress falls on <b>fun</b>; in <i>Zweifel</i> the <b>z</b> is pronounced [ts] and <b>ei</b> [aɪ]."
      },
      {
        tr: "The reform demanded for years is still a long time coming.",
        why: "In <i>geforderte</i> the stress falls on <b>for</b>; in <i>Reform</i> the stress falls on <b>form</b>; in <i>lässt</i> the <b>ä</b> is short."
      }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Regulations and contracts",
    title: "The task to be solved",
    objectives: [
      "understand and form the Gerundivum: zu + participle I as an attribute",
      "tell die zu prüfenden Anträge from die geprüften Anträge",
      "place zu in separable verbs (die einzureichenden Unterlagen)",
      "switch between the Gerundivum and the modal passive in legal prose"
    ],
    theory: [
      {
        h: "sein + zu, moved in front of the noun",
        p: "At C1 you saw <em>sein + zu</em> + infinitive: <em>Die Aufgabe ist zu lösen</em>, “the task is to be solved”. The same content, turned into an attribute, becomes <strong>zu + participle I</strong> with an adjective ending: <em>die zu lösende Aufgabe</em>. This is the so-called Gerundivum: it has a passive sense and a modal value, “that must” or “that can” be solved. Like every participial attribute it can be extended with phrases: <em>die bis Monatsende einzureichenden Unterlagen</em>."
      },
      {
        h: "Must or can",
        p: "The value comes from the context, as with <em>sein + zu</em>. In regulations and forms obligation prevails: <em>die einzureichenden Unterlagen</em>, the documents to be submitted. With a negation the value depends on the verb: <em>ein nicht zu unterschätzendes Risiko</em> is a warning, a risk that must not be underestimated; <em>eine nicht zu lösende Aufgabe</em> states an impossibility, a task that cannot be solved. With <em>kaum</em> possibility prevails: <em>eine kaum zu beziffernde Zahl</em>, a number that can hardly be quantified. With <em>erwarten</em> it is a forecast: <em>die zu erwartenden Kosten</em>, the expected costs."
      },
      {
        contrast: "English has a close match in the passive infinitive: <em>the task to be solved, the documents to be submitted</em>. The difference is position and form: in English it all follows the noun and the infinitive never changes; in German it all comes before the noun, and the verb becomes a present participle with an adjective ending: <em>die zu lösende Aufgabe</em>, <em>bei der zu lösenden Aufgabe</em>. Where English uses an adjective in <em>-able</em> (<em>an unforeseeable cost, a hardly quantifiable number</em>), German often has a Gerundivum: <em>nicht vorherzusehende Kosten</em>, <em>eine kaum zu beziffernde Zahl</em>."
      },
      {
        trap: "Don't confuse <em>die zu prüfenden Anträge</em> (the applications to be reviewed, still pending) with <em>die geprüften Anträge</em> (the applications already reviewed). And with separable verbs <em>zu</em> goes between the particle and the verb, as one word: <em>einzureichenden, vorzunehmenden, abzugebenden</em>, not <em>zu einreichenden</em>."
      },
      {
        tip: "To check a Gerundivum, take it back to the predicative form and then to the modal passive: <em>die zu erwartenden Kosten</em> → <em>die Kosten sind zu erwarten</em> → <em>die Kosten können erwartet werden</em>. If the steps work, the form is right."
      }
    ],
    grammar: {
      title: "The Gerundivum: zu + participle I",
      note: "<b>sein + zu + infinitive</b> as a predicate (<i>ist zu lösen</i>) becomes <b>zu + participle I</b> as an attribute (<i>die zu lösende Aufgabe</i>). Passive sense, value of obligation or possibility. Separable verbs: <i>einzureichenden</i>.",
      table: {
        head: ["predicate", "attribute", "meaning"],
        rows: [
          ["Die Aufgabe ist zu lösen.", "die zu lösende Aufgabe", "must be solved"],
          ["Die Unterlagen sind einzureichen.", "die einzureichenden Unterlagen", "must be submitted"],
          ["Das Risiko ist nicht zu unterschätzen.", "ein nicht zu unterschätzendes Risiko", "must not be underestimated"],
          ["Die Kosten sind zu erwarten.", "die zu erwartenden Kosten", "are to be expected"]
        ]
      },
      examples: [
        { tr: "The task to be solved is more complex than expected.", note: "zu + participle I: lösende" },
        { tr: "You will find the documents to be submitted by the end of the month in the appendix.", note: "separable verb: ein-zu-reichenden" },
        { tr: "It's a risk not to be underestimated.", note: "with nicht: a warning, “that must not”" },
        { tr: "The expected costs far exceed the budget.", note: "zu erwarten: a forecast" },
        { tr: "The task must be solved by Friday.", note: "predicative form: sein + zu + infinitive" },
        { tr: "The questions still to be clarified will be dealt with at the next meeting.", note: "noch: “still to be”" }
      ]
    },
    vocab: [
      "provision, regulation",
      "authorized representative, attorney-in-fact",
      "clause",
      "legal remedy, appeal",
      "condition, requirement (of a permit)",
      "facts (of the case)",
      "to submit later, to supply (documents)",
      "to object to, to find fault with",
      "to underestimate",
      "to guarantee, to ensure",
      "essential, indispensable",
      "on time, within the deadline"
    ],
    exercises: [
      {
        q: "In the minutes of a meeting: «Die zu prüfenden Anträge werden bis Ende Mai bearbeitet.» What does «die zu prüfenden Anträge» mean?",
        opts: [
          "the applications that have to be reviewed",
          "the applications that review",
          "the applications already reviewed"
        ],
        why: "<i>zu</i> + participle I is the <b>Gerundivum</b>: passive sense and a value of obligation, like <i>die Anträge sind zu prüfen</i>. Without <i>zu</i>, <i>prüfend</i> would be active; <i>geprüften</i> would mean applications already reviewed."
      },
      {
        q: "In a lease: «Der Mieter hat die Wohnung in ordnungsgemäßem Zustand zurückzugeben.» What does haben + zu express?",
        opts: [
          "an obligation with an active subject: the tenant must return it",
          "a possibility: the tenant may return it",
          "a passive: the apartment is being returned"
        ],
        why: "<b>haben + zu</b> is the active counterpart of <i>sein + zu</i>: the subject has to do something. The passive would be <i>Die Wohnung ist ... zurückzugeben</i>, which gives the attribute <i>die zurückzugebende Wohnung</i>."
      },
      {
        q: "Turn into an attribute: «Die Kosten sind nicht vorherzusehen.» → «___ Kosten»",
        opts: [
          "die nicht vorherzusehenden",
          "die nicht vorhergesehenen",
          "die nicht vorherzusehende"
        ],
        why: "Gerundivum of a separable verb: <i>zu</i> between <i>vorher</i> and <i>sehen</i>, ending <b>-en</b> after the plural article. <i>vorhergesehenen</i> states a fact (“the costs not foreseen”), not that they cannot be foreseen; <i>vorherzusehende</i> has the wrong ending."
      },
      {
        q: "Complete: «Das ist ein nicht zu ___ Problem.» (underestimate)",
        hint: "from unterschätzen, neuter after ein",
        why: "<b>unterschätzendes</b>: <i>unterschätzen</i> is not separable, so <i>zu</i> stays in front as a separate word; after <i>ein</i> in the neuter nominative the ending is <i>-es</i>."
      },
      {
        q: "Complete: «Die bis zum 30. Juni ___ Unterlagen finden Sie in der Anlage.» (submit)",
        hint: "from einreichen, separable, plural after die",
        why: "<b>einzureichenden</b>: with a separable verb <i>zu</i> goes between the particle and the verb, and the participle takes <i>-en</i> after <i>die</i>."
      },
      {
        q: "Complete with the Gerundivum: “solve” in the first gap, “quantify” (beziffern) in the second.",
        tr: "The report lists three problems to be solved by the end of the year and a number of open cases that can hardly be quantified.",
        why: "<i>drei ... zu lösende Probleme</i> (or <i>zu behebende</i>): after a numeral without an article the ending is <i>-e</i>. <i>eine kaum zu beziffernde Zahl</i>: with <i>kaum</i> the Gerundivum expresses a near-zero possibility, with <i>-e</i> after <i>eine</i>."
      },
      {
        q: "Put the words in order.",
        tr: "The applications the authority has to review have been available for weeks.",
        why: "<i>Die von der Behörde zu prüfenden Anträge liegen seit Wochen vor.</i> The agent <i>von der Behörde</i> sits inside the attribute, before <i>zu prüfenden</i>; <i>vor</i>, the particle of <i>vorliegen</i>, goes at the end."
      },
      {
        q: "Translate with a Gerundivum: “The changes to be made to the contract must be approved by both parties.” (vornehmen, genehmigen, die Vertragspartei)",
        why: "<i>Die am Vertrag vorzunehmenden Änderungen müssen von beiden Vertragsparteien genehmigt werden</i>, or, in regulatory style, <i>... sind von beiden Vertragsparteien zu genehmigen</i>. <i>vornehmen</i> is separable: <i>vorzunehmenden</i>."
      },
      {
        tr: "The documents the applicant still has to supply must be submitted by the end of the month. Otherwise the application can be expected to be rejected.",
        why: "In <i>nachzureichenden</i> the stress falls on <b>nach</b>; in <i>Andernfalls</i> the stress falls on <b>An</b>; in <i>Ablehnung</i> the stress falls on <b>Ab</b> and the <b>b</b> is pronounced [p]."
      },
      {
        tr: "The expected costs can hardly be quantified.",
        why: "In <i>erwartenden</i> the stress falls on <b>war</b>; in <i>beziffern</i> the stress falls on <b>zif</b> and the <b>z</b> is pronounced [ts]; in <i>Kosten</i> the <b>o</b> is short."
      }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Essays and public debate",
    title: "Funktionsverbgefüge in a text",
    objectives: [
      "recognize a Funktionsverbgefüge in a long sentence",
      "choose the right light verb (kommen or bringen, finden or stoßen)",
      "replace a Funktionsverbgefüge with a simple verb or a passive, and back",
      "understand the difference between in Abrede stellen and nicht in Abrede stellen"
    ],
    theory: [
      {
        h: "The noun carries the meaning, the verb the perspective",
        p: "In a Funktionsverbgefüge (a fixed noun-verb phrase) the meaning lies in the noun (<em>Anwendung, Zweifel, Beweis</em>), while the verb (<em>kommen, ziehen, stellen, finden</em>) says little on its own and mostly sets the perspective: active or passive, the start of a process or a state. At C1 you learned them as set phrases; at C2 the challenge is to spot them in a long sentence, where the noun and the verb sit at the two ends of the bracket: <em>Die Ergebnisse wurden von Fachleuten in Zweifel gezogen.</em>"
      },
      {
        h: "Pairs that switch perspective",
        p: "Many Funktionsverbgefüge come in pairs. <strong>zur Anwendung kommen</strong> has a passive sense (<em>wird angewendet</em>), <strong>zur Anwendung bringen</strong> an active one (<em>anwenden</em>). <strong>Berücksichtigung finden</strong> and <strong>auf Kritik stoßen</strong> replace a passive: <em>Die Einwände fanden Berücksichtigung</em> = <em>wurden berücksichtigt</em>; <em>Der Plan stieß auf Kritik</em> = <em>wurde kritisiert</em>. Others stand next to an almost synonymous simple verb: <em>Rechnung tragen</em> (to take into account, with the dative) usually equals <em>berücksichtigen</em>, differing only in context and register. <em>zur Debatte stehen</em>, on the other hand, has no simple verb equivalent."
      },
      {
        contrast: "English has phrases of this kind too, and some line up: <em>call into question</em> (<em>in Zweifel ziehen</em>), <em>take into consideration</em> (<em>in Betracht ziehen</em>), <em>come under criticism</em> (<em>auf Kritik stoßen</em>). But the light verb can't be translated word for word: <em>unter Beweis stellen</em> is not “put under proof” but “demonstrate, prove”, <em>zur Sprache bringen</em> is “bring up, raise”, <em>in Abrede stellen</em> is “deny”. English often hides the perspective in a passive (<em>the method is applied</em>), where formal German prefers <em>kommt zur Anwendung</em>. The preposition and the article are fixed: <em>zur Anwendung</em>, never <em>in die Anwendung</em>."
      },
      {
        trap: "<em>in Abrede stellen</em> means “deny”, so <em>Sie stellt nicht in Abrede, dass ...</em> means “she doesn't deny that ...”: a cautious concession, not necessarily an explicit admission. And <em>Rechnung tragen</em> takes a plain dative with no preposition, unlike English <em>take into account</em> or <em>allow for</em>: <em>den Bedenken Rechnung tragen</em>, not <em>auf die Bedenken</em>."
      },
      {
        tip: "In formal texts a Funktionsverbgefüge puts weight on the noun and lets you switch perspective without a passive; in a text meant to read easily a simple verb is often better. When writing, use one where it adds something (perspective, the start of a process, register), not just to lengthen the sentence."
      }
    ],
    grammar: {
      title: "Funktionsverbgefüge in academic prose",
      note: "<b>Noun</b> = meaning; <b>light verb</b> = perspective. <i>kommen, finden, stoßen auf</i>: passive sense. <i>bringen, stellen, ziehen</i>: active sense. The preposition and the article are fixed.",
      table: {
        head: ["Funktionsverbgefüge", "simple verb or passive", "meaning"],
        rows: [
          ["zur Anwendung kommen", "angewendet werden", "to be applied"],
          ["in Zweifel ziehen", "bezweifeln", "to call into question"],
          ["unter Beweis stellen", "beweisen", "to demonstrate, to prove"],
          ["Berücksichtigung finden", "berücksichtigt werden", "to be taken into account"],
          ["auf Kritik stoßen", "kritisiert werden", "to meet with criticism"],
          ["in Abrede stellen", "bestreiten", "to deny"]
        ]
      },
      examples: [
        { tr: "The new method is already being used in several hospitals.", note: "zur Anwendung kommen: passive sense" },
        { tr: "The results of the study were called into question by experts.", note: "in Zweifel ziehen in the passive: noun and participle at the two ends of the sentence" },
        { tr: "The law does not sufficiently take changed living conditions into account.", note: "Rechnung tragen + dative" },
        { tr: "The author proves her thesis with numerous examples.", note: "unter Beweis stellen = beweisen" },
        { tr: "The proposal met with broad approval in the committee.", note: "auf Zustimmung stoßen: passive sense, like auf Kritik stoßen" },
        { tr: "The question of funding was not raised at the meeting.", note: "zur Sprache bringen in the passive" }
      ]
    },
    vocab: [
      "to be applied, to be used",
      "to call into question",
      "to take into account (+ dative)",
      "to demonstrate, to prove",
      "to bring up, to raise (an issue)",
      "to consider (as an option)",
      "to be taken into account",
      "to meet with criticism",
      "to deny, to dispute",
      "to be under discussion",
      "statement, position paper",
      "custom, practice"
    ],
    exercises: [
      {
        q: "Which simple verb corresponds to «etwas in Zweifel ziehen»?",
        opts: [
          "bezweifeln",
          "verzweifeln",
          "überziehen"
        ],
        why: "<b>bezweifeln</b>, “to doubt, to question”. <i>verzweifeln</i> means “to despair”; <i>überziehen</i> “to overdo” or “to overdraw” an account."
      },
      {
        q: "In a report: «Die Methode wird in drei Kliniken angewendet.» Which rewording with a Funktionsverbgefüge means the same?",
        opts: [
          "Die Methode kommt in drei Kliniken zur Anwendung.",
          "Die Methode bringt in drei Kliniken zur Anwendung.",
          "Die Methode stellt in drei Kliniken zur Anwendung."
        ],
        why: "<b>kommen</b> gives the passive sense: the method “is applied”. <i>zur Anwendung bringen</i> is active and needs a subject that applies it: <i>Drei Kliniken bringen die Methode zur Anwendung</i>. <i>stellen</i> does not form this Funktionsverbgefüge."
      },
      {
        q: "In a review: «Die Verfasserin stellt nicht in Abrede, dass ihre Quellen lückenhaft sind.» What does the author do?",
        opts: [
          "she doesn't deny that her sources are incomplete",
          "she denies that her sources are incomplete",
          "she proves that her sources are incomplete"
        ],
        why: "<i>in Abrede stellen</i> = “to deny”; with <i>nicht</i> it becomes <b>“not to deny”</b>. It is a cautious concession, typical of academic writing: the author doesn't dispute the weakness; how openly she admits it depends on the context."
      },
      {
        q: "Complete: «Der Entwurf trägt den Einwänden der Verbände kaum ___.» (takes into account)",
        hint: "the noun that goes with tragen",
        why: "<b>Rechnung</b>: <i>einer Sache Rechnung tragen</i>, “to take something into account”, with the dative (<i>den Einwänden</i>)."
      },
      {
        q: "Complete: «Die Finanzierung des Projekts steht derzeit nicht zur ___.» (is not up for discussion, or is not negotiable)",
        hint: "zur ... stehen",
        why: "<b>Debatte</b> or <b>Diskussion</b>: “is not up for discussion”. <b>Disposition</b> gives the second reading: <i>nicht zur Disposition stehen</i>, “is not negotiable, is not up for grabs”."
      },
      {
        q: "Complete: the preposition in the first gap, the noun of the Funktionsverbgefüge in the second.",
        tr: "The commission did consider the opposition's proposals, but it hardly took them into account in its final report.",
        why: "<i>in Betracht ziehen</i> (“to consider”) and <i>Rechnung tragen</i> + dative (<i>ihnen</i>). The sentence shows the difference between the two: considering a proposal is not the same as taking it into account."
      },
      {
        q: "Match each expression with its meaning.",
        pairs: [
          "to deny",
          "to demonstrate, to prove",
          "to bring up (an issue)",
          "to meet with criticism"
        ]
      },
      {
        q: "Translate: “The citizens' objections were not taken into account in the draft.” (der Einwand, der Entwurf, Berücksichtigung finden)",
        why: "With the Funktionsverbgefüge: <i>Die Einwände der Bürger haben im Entwurf keine Berücksichtigung gefunden</i> (or <i>fanden ... keine Berücksichtigung</i>). The negation moves into the noun: <i>keine Berücksichtigung</i>, not <i>nicht Berücksichtigung</i>. The simple passive is also accepted: <i>... wurden im Entwurf nicht berücksichtigt</i>."
      },
      {
        tr: "The procedure described in the study has so far been used only rarely. The authors don't call its effectiveness into question, but they raise the issue of its high costs.",
        why: "In <i>Studie</i> initial <b>st</b> is pronounced [ʃt]; in <i>Autoren</i> the stress falls on <b>to</b>; in <i>Sprache</i> <b>sp</b> is pronounced [ʃp]."
      },
      {
        tr: "The minister denied any responsibility.",
        why: "In <i>Ministerin</i> the stress falls on <b>nis</b>; in <i>Verantwortung</i> the stress falls on <b>ant</b>; in <i>Abrede</i> the stress falls on <b>Ab</b> and the <b>b</b> is pronounced [p]."
      }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Check",
    title: "Test: Extended attributes",
    objectives: [
      "check the extended participial attribute, the Gerundivum and Funktionsverbgefüge"
    ],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: «Die von der Kommission im Herbst ___ Daten sind inzwischen veraltet.» (present)",
        hint: "from vorlegen, participle II, plural after die",
        why: "<b>vorgelegten</b>: participle II with a passive sense (“presented by the commission”), <i>-en</i> after the plural article."
      },
      {
        q: "Complete: «Die bis Freitag ___ Berichte liegen noch nicht vor.» (hand in)",
        hint: "from abgeben, Gerundivum",
        why: "<b>abzugebenden</b>: <i>zu</i> between the particle and the verb, participle I, <i>-en</i> after <i>die</i>: “the reports to be handed in by Friday”."
      },
      {
        q: "Complete: «Das neue Verfahren kommt ab Januar zur ___.» (will be applied)",
        hint: "the noun that goes with zur ... kommen",
        why: "<b>Anwendung</b>: <i>zur Anwendung kommen</i>, “to be applied”."
      },
      {
        q: "Complete: «Die Autorin hat ihr Können erneut unter ___ gestellt.» (has demonstrated)",
        hint: "unter ... stellen",
        why: "<b>Beweis</b>: <i>unter Beweis stellen</i>, “to demonstrate, to prove”."
      },
      {
        q: "«Die sich aus den neuen Vorschriften für kleine Betriebe ergebenden Pflichten sind kaum zu überblicken.» Which noun does the attribute refer to?",
        opts: [
          "Pflichten",
          "Vorschriften",
          "Betriebe"
        ],
        why: "The article <i>Die</i> opens the bracket, which closes with the participle <i>ergebenden</i> and the noun <b>Pflichten</b>: “the obligations arising from the new regulations for small businesses”. <i>Vorschriften</i> and <i>Betriebe</i> are inside the phrases."
      },
      {
        q: "What does «die zu befragenden Personen» mean?",
        opts: [
          "the people who have to be interviewed",
          "the people who interview",
          "the people interviewed"
        ],
        why: "<i>zu</i> + participle I is the <b>Gerundivum</b>: passive sense and a value of obligation. <i>befragend</i> would be active, <i>befragt</i> already finished."
      },
      {
        q: "Which sentence means the same as «Die Reform stieß auf heftige Kritik»?",
        opts: [
          "Die Reform wurde heftig kritisiert.",
          "Die Reform kritisierte heftig.",
          "Die Reform hat heftige Kritik geübt."
        ],
        why: "<i>auf Kritik stoßen</i> has a passive sense: the reform <b>was criticized</b>. <i>Kritik üben</i> is active: the subject is the one criticizing."
      },
      {
        q: "Turn into an attribute: «die Fragen, die noch geklärt werden müssen»",
        opts: [
          "die noch zu klärenden Fragen",
          "die noch geklärten Fragen",
          "die noch klärenden Fragen"
        ],
        why: "A passive with <i>müssen</i> becomes a <b>Gerundivum</b>: <i>zu klärenden</i>. <i>geklärten</i> would mean they are already clarified; <i>klärenden</i> that they clarify something themselves."
      },
      {
        tr: "The findings presented by the expert commission met with broad approval. The measures to be derived from them are to be put into practice next year.",
        why: "In <i>Expertenkommission</i> the main stress falls on <b>per</b>; in <i>stießen</i> the <b>ie</b> is long and <b>ß</b> is pronounced [s]; in <i>Maßnahmen</i> the stress falls on <b>Maß</b>, with a long <b>a</b>."
      },
      {
        tr: "The questions still to be clarified will be raised at the next meeting.",
        why: "In <i>klärenden</i> the <b>ä</b> is long; in <i>nächsten</i> the <b>ä</b> is long even before <b>chst</b>; in <i>Sitzung</i> <b>tz</b> is pronounced [ts]."
      }
    ]
  }
});
