/* ============================================================
   Learner-language text (en) for data/core/c2-01.js, units c2-u01, c2-u02 and c2-u03.
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
  },
  "unit:c2-u02": {
    title: "Plurals and word formation",
    grammarNote: "Double plurals with different meanings (die Banken and die Bänke, die Worte and die Wörter) · substitute plurals (Ratschläge, Regenfälle, Streitigkeiten) · compounds: Grundwort and linking element (Arbeitszeit, Hundebesitzer, Schulpflicht) · derivation with -ung, -heit, -keit and with ver-, zer-, ent-, miss- · the gender of Fremdwörter (-ion, -ität, -ismus)"
  },
  "lesson:c2-u02-l1": {
    theme: "Vocabulary and meaning",
    title: "Die Banken and die Bänke",
    objectives: [
      "tell apart plurals that change the meaning (Banken and Bänke, Worte and Wörter)",
      "use the substitute plurals of nouns that have no plural (Ratschläge, Regenfälle)",
      "choose the right plural from the context",
      "keep Mütter and Muttern, Bände and Bänder apart"
    ],
    theory: [
      {
        h: "One singular, two plurals",
        p: "Some nouns have two plurals, and each one carries a different meaning. <em>die Bank</em> is both a bank and a bench: banks are <strong>Banken</strong>, benches are <strong>Bänke</strong>. <em>das Wort</em> becomes <strong>Wörter</strong> when you mean words as units of vocabulary, taken one by one (<em>ein Wörterbuch mit 100 000 Wörtern</em>), and <strong>Worte</strong> when you mean words that make up a speech or a statement (<em>mit anderen Worten, Worte des Dankes</em>). <em>die Mutter</em> becomes <strong>Mütter</strong> (mothers) and <strong>Muttern</strong> (nuts for bolts). Sometimes two nouns of different gender hide behind the same form: <em>der Band</em> (a volume) becomes <strong>Bände</strong>, <em>das Band</em> (a ribbon, a ligament) becomes <strong>Bänder</strong>, and <em>die Band</em>, the music group, becomes <em>Bands</em>."
      },
      {
        h: "When the plural is missing: substitute plurals",
        p: "Other nouns have no plural in normal use, or only a rare one, and German borrows it from a compound or a derived word. <em>der Rat</em> in the sense of advice becomes <strong>Ratschläge</strong>: <em>Räte</em> are councils or their members (<em>die Stadträte</em>). <em>der Regen</em> becomes <strong>Regenfälle</strong>, <em>der Schnee</em> <strong>Schneefälle</strong>, <em>der Streit</em> usually <strong>Streitigkeiten</strong> (<em>Streite</em> exists, but it is rare). The substitute plural is where plural and word formation meet: German turns to a compound whose last element has a plural (<em>Regenfälle, Ratschläge</em>) or to a derived word (<em>Streitigkeiten</em>)."
      },
      {
        contrast: "English has a few double plurals of its own: <em>brothers</em> and <em>brethren</em>, <em>indexes</em> of books and <em>indices</em> in math, <em>cloths</em> and <em>clothes</em>. The German pairs are different ones, though, and for you a bank and a bench are two separate words, so nothing in English warns you that German makes you choose between <em>Banken</em> and <em>Bänke</em>. The substitute plurals, on the other hand, will feel familiar: English does not pluralize <em>advice</em> either and says <em>pieces of advice</em> or <em>tips</em>, and it gets around <em>rain</em> with <em>rainfall</em>. German solves the same problem with a compound: <em>Ratschläge, Regenfälle</em>."
      },
      {
        trap: "A dictionary contains <em>Wörter</em>, never <em>Worte</em>; a moving speech is made of <em>Worte</em>. English <em>words</em> covers both, so your ear gives you no help here. The criterion is not number (even <em>ein paar Worte</em> can be counted) but point of view: units of vocabulary, <em>Wörter</em>; an utterance, what someone says, <em>Worte</em>. And watch the umlaut and the ending, which here change the meaning: <em>Muttern</em> (no umlaut, ending <em>-n</em>) are nuts, <em>Mütter</em> are mothers; <em>Bänke</em> are benches, <em>Banken</em> are financial institutions."
      },
      {
        tip: "Learn the plural together with the meaning, not as a form on its own. Monolingual dictionaries (the Duden, for example) give the two plurals each with its own definition: that is the place to check."
      }
    ],
    grammar: {
      title: "Double plurals and substitute plurals",
      note: "One noun, two plurals, two meanings: <b>Banken</b> (banks) and <b>Bänke</b> (benches), <b>Wörter</b> (vocabulary items) and <b>Worte</b> (speech). When the plural is missing, a compound supplies it: <b>Ratschläge</b>, <b>Regenfälle</b>, <b>Streitigkeiten</b>.",
      table: {
        head: ["singular", "plural", "meaning"],
        rows: [
          ["die Bank", "die Banken", "banks"],
          ["die Bank", "die Bänke", "benches"],
          ["das Wort", "die Wörter", "words (individual vocabulary items)"],
          ["das Wort", "die Worte", "words (of a speech)"],
          ["die Mutter", "die Muttern", "nuts (for bolts)"],
          ["der Rat", "die Ratschläge", "pieces of advice"]
        ]
      },
      examples: [
        { tr: "The banks have raised interest rates again.", note: "Banken: financial institutions" },
        { tr: "New benches were put up in front of the town hall.", note: "Bänke: benches, with an umlaut" },
        { tr: "In a few words she put her finger on the problem.", note: "Worte: words as expression, not as vocabulary items" },
        { tr: "The dictionary lists more than a hundred thousand words.", note: "Wörter: words as units of vocabulary" },
        { tr: "She gratefully accepted her colleagues' advice.", note: "Ratschläge: substitute plural of der Rat" },
        { tr: "After the heavy rains the river burst its banks.", note: "Regenfälle: substitute plural of der Regen" }
      ]
    },
    vocab: [
      "financial institution",
      "bench",
      "nut (for a bolt)",
      "dispute, quarrel",
      "rainfall, spell of rain",
      "snowfall",
      "sport, type of sport",
      "idiom, set phrase",
      "difference in meaning",
      "plural form",
      "ambiguous, having several meanings",
      "to distinguish"
    ],
    exercises: [
      {
        q: "In the business pages: «Mehrere ___ haben ihre Gebühren erhöht.»",
        opts: [
          "Banken",
          "Bänke",
          "Banke"
        ],
        why: "Financial institutions are <b>Banken</b>; <i>Bänke</i> are benches. <i>Banke</i> does not exist."
      },
      {
        q: "Complete: «Zur Begrüßung sprach der Direktor ein paar ___.» (a few words, a short speech)",
        opts: [
          "Worte",
          "Wörter",
          "Worten"
        ],
        why: "Words that make up a speech: <b>Worte</b>. <i>Wörter</i> are words seen as units of vocabulary; <i>Worten</i> is the dative plural (<i>mit wenigen Worten</i>), while this sentence needs the accusative."
      },
      {
        q: "What is the usual plural of «der Rat» in the sense of “advice, suggestion”?",
        opts: [
          "die Ratschläge",
          "die Räte",
          "die Rate"
        ],
        why: "In the sense of advice <i>Rat</i> has no plural in normal use, so German uses the substitute plural <b>Ratschläge</b>. <i>Räte</i> are councils or their members (<i>Stadträte</i>); <i>die Rate</i> is an installment, a different word."
      },
      {
        q: "Complete: «Das neue Wörterbuch verzeichnet rund 140 000 ___.»",
        hint: "plural of das Wort: units of vocabulary",
        why: "<b>Wörter</b>: a dictionary lists words as units of vocabulary. Watch the umlaut: <i>Worter</i> does not exist."
      },
      {
        q: "Complete: «An der Schraube fehlt eine Mutter; im Werkzeugkasten liegen aber noch zwei ___.»",
        hint: "plural of die Mutter in the sense of “nut”",
        why: "<b>Muttern</b> (or <b>Schraubenmuttern</b>): the nut forms its plural with <i>-n</i>, without an umlaut. <i>Mütter</i> are mothers."
      },
      {
        q: "Complete with two substitute plurals: the one that stands in for «der Regen» in the first gap, the one that stands in for «der Rat» (advice) in the second.",
        tr: "The heavy rains of the past few weeks have destroyed the harvest; now the farmers are getting well-meant advice from all sides.",
        why: "<i>Regen</i> has no plural in normal use: German says <b>Regenfälle</b>. <i>Niederschläge</i> would be broader, since it includes snow and hail. For the advice you need <b>Ratschläge</b>. Neither takes <i>-n</i>: the first is a nominative plural, the second an accusative plural."
      },
      {
        q: "Match each plural with its meaning.",
        pairs: [
          "banks",
          "benches",
          "words (of a speech)",
          "words (individual vocabulary items)"
        ]
      },
      {
        q: "Translate: “The banks ignored the experts' advice.” (ignorieren, der Ratschlag, der Experte)",
        why: "<i>Die Banken haben die Ratschläge der Experten ignoriert</i>. Two plurals to choose carefully: <i>Banken</i>, not <i>Bänke</i>, and <i>Ratschläge</i>, because <i>Rat</i> in the sense of advice has no plural. <i>Fachleute</i>, the Präteritum <i>ignorierten</i> and the verb <i>missachten</i> are also accepted."
      },
      {
        tr: "On the benches in front of the bank, customers had been waiting since early morning. In a few words, an employee explained why the branch was staying closed.",
        why: "In <i>Bänken</i> the <b>ä</b> is short, [ɛ]; in <i>Angestellter</i> the stress falls on <b>An</b>; in <i>Filiale</i> the stress falls on the long <b>a</b>: fi-li-<b>a</b>-le."
      },
      {
        tr: "In a few words she said it all.",
        why: "In <i>Worten</i> the <b>o</b> is short, [ɔ]; in <i>wenigen</i> the stress falls on <b>we</b>; in <i>gesagt</i> the stress falls on <b>sagt</b>, and the <b>g</b> before the final <b>t</b> is pronounced [k]."
      }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Technical and administrative vocabulary",
    title: "Compounds and the Fugenelement",
    objectives: [
      "split a compound into Bestimmungswort and Grundwort",
      "work out the gender of a compound from its last element",
      "insert the right linking element (-s-, -e-, -n-, -er-)",
      "recognize the suffixes after which -s- is the norm (-ung, -heit, -keit, -tät)"
    ],
    theory: [
      {
        h: "The noun on the right decides",
        p: "In a compound (<em>Kompositum</em>) the last element, the <strong>Grundwort</strong>, sets the gender, the plural and the word class; the elements in front of it, the <strong>Bestimmungswörter</strong>, narrow it down. <em>das Haus + die Tür + der Schlüssel</em> give <em>der Haustürschlüssel</em>, masculine like <em>Schlüssel</em>. The compound is written as one word, and the main stress usually falls on the first element: <em><b>Haus</b>türschlüssel</em>."
      },
      {
        h: "The linking element",
        p: "A <strong>Fugenelement</strong> can appear between one element and the next: <em>-s-</em> (<em>Arbeitszeit, Wohnungsmarkt</em>), <em>-es-</em> (<em>Tageslicht</em>), <em>-e-</em> (<em>Hundebesitzer</em>), <em>-n-</em> or <em>-en-</em> (<em>Sonnenenergie, Leinenpflicht</em>), <em>-er-</em> (<em>Kinderbuch</em>); sometimes, instead, the final <em>-e</em> of the first element drops (<em>die Schule</em> → <em>Schulpflicht</em>). A reliable clue: after the suffixes <em>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</em> the linking element is usually <em>-s-</em> (<em>Gesundheitswesen, Freiheitsstrafe, Universitätsbibliothek, Lieblingsbuch</em>). But it is a clue, not a guarantee, and in other cases the linking element has to be learned word by word, and sometimes it varies: <em>Schadensersatz</em> and <em>Schadenersatz</em> are both correct, and in Austria people say <em>Schweinsbraten</em> where Germany says <em>Schweinebraten</em>."
      },
      {
        contrast: "English puts the modifier first, just like German: <em>housing market</em>, <em>university library</em>, <em>front door key</em>. The order is the same; the spelling is not. English mostly writes its compounds open, with spaces (<em>prison sentence, health care system</em>), sometimes with a hyphen, and closes them into one word only once they are well settled (<em>bookstore, toothbrush</em>). German normally closes a noun compound into a single word, however long (a hyphen appears only in the cases described below): <em>Wohnungsmarkt, Universitätsbibliothek, Haustürschlüssel</em>. Read the German word as an English compound with the spaces taken out. English has almost no linking elements (<em>craftsman</em> and <em>statesman</em> are fossils), and the German <em>-s-</em> is not a possessive <em>'s</em>: it also appears after feminine nouns (<em>die Arbeit</em> → <em>Arbeitszeit</em>, <em>die Liebe</em> → <em>Liebesbrief</em>), which never take <em>-s</em> in the genitive."
      },
      {
        trap: "The gender always comes from the last element, even when the first one is more “visible”: <em>das Arbeitsamt</em> is neuter like <em>das Amt</em>, although <em>Arbeit</em> is feminine; <em>der Wohnungsmarkt</em> is masculine like <em>der Markt</em>. And the compound is never split, however natural a space looks to you: <em>Arbeitsbedingungen</em>, not <em>Arbeits Bedingungen</em>. A hyphen is used only for clarity or with abbreviations and proper names (<em>E-Mail-Adresse</em>)."
      },
      {
        tip: "To understand a long compound, start from the right: <em>Arbeits|bedingungen</em> are conditions, and the first element says what kind (of work). Remove any linking element and look up the parts in the dictionary one at a time."
      }
    ],
    grammar: {
      title: "Compounds and the linking element",
      note: "<b>Bestimmungswort + (linking element) + Grundwort</b>. The Grundwort, on the right, decides gender and plural; the main stress usually falls on the first element. After <i>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</i> the linking element is usually <i>-s-</i>.",
      table: {
        head: ["elements", "linking element", "compound"],
        rows: [
          ["die Arbeit + die Zeit", "-s-", "die Arbeitszeit"],
          ["die Wohnung + der Markt", "-s-", "der Wohnungsmarkt"],
          ["der Hund + der Besitzer", "-e-", "der Hundebesitzer"],
          ["die Sonne + die Energie", "-n-", "die Sonnenenergie"],
          ["das Kind + das Buch", "-er-", "das Kinderbuch"],
          ["die Schule + die Pflicht", "the -e drops", "die Schulpflicht"]
        ]
      },
      examples: [
        { tr: "Working conditions in the care sector have hardly improved.", note: "Arbeit + s + Bedingungen: -s- even after a feminine noun" },
        { tr: "The dog owner is liable for the damage.", note: "Hund + e + Besitzer" },
        { tr: "Solar energy already covers part of the demand for electricity.", note: "Sonne + n + Energie; Strom + Bedarf with no linking element: the -s of Strombedarfs is the genitive ending" },
        { tr: "The children's book has been translated into twenty languages.", note: "Kind + er + Buch: the linking element looks like the plural Kinder" },
        { tr: "Her love letter never arrived.", note: "Liebe + s + Brief: -s- after a feminine noun, so it is not a genitive" },
        { tr: "Compulsory schooling usually begins at age six.", note: "Schule + Pflicht: the final -e drops" }
      ]
    },
    vocab: [
      "compound, compound word",
      "base word (the last element of a compound)",
      "determining element (the element in front of the base)",
      "linking element",
      "working condition",
      "housing market",
      "university library",
      "prison sentence",
      "damages, compensation",
      "health care system",
      "to be made up of, to consist of",
      "compound (said of a word)"
    ],
    exercises: [
      {
        q: "What gender is «Haustürschlüssel» (front door key)?",
        opts: [
          "der, like Schlüssel",
          "die, like Tür",
          "das, like Haus"
        ],
        why: "The gender is always decided by the last element, the Grundwort: <b>der</b> Schlüssel, so <b>der</b> Haustürschlüssel."
      },
      {
        q: "Complete: «Der ___ in München ist seit Jahren angespannt.»",
        hint: "die Wohnung + der Markt, with the linking element",
        why: "<b>Wohnungsmarkt</b>: after <i>-ung</i> the linking element is <i>-s-</i>. The gender is masculine, like <i>der Markt</i>."
      },
      {
        q: "Complete: «Die ___ ist auch am Sonntag geöffnet.»",
        hint: "die Universität + die Bibliothek",
        why: "<b>Universitätsbibliothek</b>: after <i>-tät</i> the linking element is <i>-s-</i>, and the whole thing is written as one word."
      },
      {
        q: "Complete: «Der Angeklagte wurde zu einer ___ von drei Jahren verurteilt.»",
        hint: "die Freiheit + die Strafe",
        why: "<b>Freiheitsstrafe</b>, “prison sentence”: after <i>-heit</i> the linking element is <i>-s-</i>."
      },
      {
        q: "Complete: «Die ___ beginnt in Deutschland in der Regel mit sechs Jahren.»",
        hint: "die Schule + die Pflicht",
        why: "<b>Schulpflicht</b>: nothing is added here; in fact the final <i>-e</i> of <i>Schule</i> drops, as in <i>Schulbuch</i> and <i>Schulweg</i>."
      },
      {
        q: "Complete with two compounds: «der Hund + der Besitzer» in the first gap, «die Leine + die Pflicht» in the second.",
        tr: "Many dog owners are protesting against the new leash requirement in the city parks.",
        why: "<b>Hundebesitzer</b> with the linking element <i>-e-</i>, <b>Leinenpflicht</b> with <i>-n-</i>. The plural of <i>Hundebesitzer</i> is the same as the singular; <i>Leinenpflicht</i> is feminine like <i>die Pflicht</i>."
      },
      {
        q: "Which compounds contain a linking element?",
        opts: [
          "Arbeitszeit",
          "Liebesbrief",
          "Haustür",
          "Tischbein"
        ],
        why: "<i>Arbeit<b>s</b>zeit</i> and <i>Liebe<b>s</b>brief</i> have the linking element <i>-s-</i>, even though <i>Arbeit</i> and <i>Liebe</i> are feminine. <i>Haus|tür</i> and <i>Tisch|bein</i> join the two nouns with nothing in between."
      },
      {
        q: "Translate: “Working conditions in the health care system have gotten worse.” (die Arbeitsbedingung, das Gesundheitswesen, sich verschlechtern)",
        why: "<i>Die Arbeitsbedingungen im Gesundheitswesen haben sich verschlechtert</i>. Two compounds with <i>-s-</i>: <i>Arbeit<b>s</b>bedingungen</i> and <i>Gesundheit<b>s</b>wesen</i>. <i>sind schlechter geworden</i>, the Präteritum <i>verschlechterten sich</i> and the word order with <i>Im Gesundheitswesen</i> in first position are also accepted."
      },
      {
        tr: "The housing market in university towns has been tight for years. Many students find an affordable room only after months of searching.",
        why: "In <i>Wohnungsmarkt</i> the stress falls on <b>Woh</b>, with a long <b>o</b>; in <i>Universitätsstädten</i> the main stress falls on <b>tät</b>; in <i>monatelanger</i> the stress falls on <b>Mo</b>."
      },
      {
        tr: "Working conditions have improved significantly.",
        why: "In <i>Arbeitsbedingungen</i> the main stress falls on <b>Ar</b>, the first element of the compound; in <i>deutlich</i> <b>eu</b> is pronounced [ɔʏ]; in <i>verbessert</i> the stress falls on <b>bes</b>."
      }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Abstract vocabulary",
    title: "Derivation and Fremdwörter",
    objectives: [
      "form abstract nouns with -ung, -heit, -keit",
      "choose between -heit and -keit",
      "understand what the prefixes ver-, zer-, ent-, miss- add",
      "work out the gender of Fremdwörter from the suffix"
    ],
    theory: [
      {
        h: "Suffixes that decide the gender",
        p: "A suffix moves a word into another word class and fixes its gender. <em>-ung</em> makes nouns from verbs: <em>verbessern</em> → <em>die Verbesserung</em>. <em>-heit</em>, <em>-keit</em> and <em>-igkeit</em> make nouns from adjectives: <em>frei</em> → <em>die Freiheit</em>, <em>nachhaltig</em> → <em>die Nachhaltigkeit</em>, <em>genau</em> → <em>die Genauigkeit</em>. Nouns in <strong>-ung, -heit, -keit, -schaft</strong> are always feminine and, when they have a plural, form it with <em>-en</em>; many abstract nouns, such as <em>Gelassenheit</em>, have none."
      },
      {
        h: "-heit or -keit?",
        p: "<strong>-keit</strong> follows adjectives in <em>-bar, -ig, -lich, -sam</em> (<em>Dankbarkeit, Nachhaltigkeit, Höflichkeit, Wirksamkeit</em>) and usually those in <em>-el</em> and <em>-er</em> (<em>Eitelkeit, Sauberkeit</em>), with exceptions such as <em>Sicherheit</em> and <em>Dunkelheit</em>. <strong>-heit</strong> applies in most other cases (<em>Freiheit, Gelassenheit, Schönheit</em>). <strong>-igkeit</strong> is added to adjectives in <em>-los</em> and to a few others: <em>Arbeitslosigkeit, Genauigkeit</em>."
      },
      {
        h: "Inseparable verb prefixes",
        p: "<em>ver-</em> has several values: change (<em>verändern</em>), a mistake in reflexive verbs (<em>sich verschreiben, sich verrechnen, sich verlaufen</em>), using something up completely (<em>verbrauchen</em>). <em>zer-</em> means breaking into pieces (<em>zerreißen, zerbrechen</em>). <em>ent-</em> means removal or deprivation (<em>entfernen, entwerten</em>). <em>miss-</em> means that something goes wrong (<em>missverstehen, misslingen</em>). They are all inseparable and take no <em>ge-</em> in the participle: <em>zerrissen, missverstanden, entwertet</em>. <em>ver-, zer-, ent-</em> are never stressed; <em>miss-</em> is stressed in some verbs (<em>missverstehen</em>) and not in others (<em>misslingen</em>)."
      },
      {
        h: "Fremdwörter: the suffix gives the gender",
        p: "In foreign words, too, the suffix points to the gender: <em>-ion, -ität, -ur, -ie</em> are usually feminine (<em>die Nation, die Qualität, die Kultur, die Demokratie</em>); <em>-ismus</em> is masculine (<em>der Realismus</em>); <em>-ment</em> is almost always neuter (<em>das Dokument, das Argument</em>). Many verbs in <em>-ieren</em> form nouns in <em>-ierung</em> (<em>digitalisieren</em> → <em>die Digitalisierung</em>), but not all of them: <em>studieren</em> gives <em>das Studium</em>."
      },
      {
        contrast: "Many Fremdwörter are transparent to you: <em>-ity</em> matches <em>-ität</em> (<em>quality, Qualität</em>), <em>-tion</em> stays <em>-tion</em> (<em>nation, Nation</em>), <em>-ism</em> becomes <em>-ismus</em>. Even <em>-heit</em> has an English relative: it is the same suffix as <em>-hood</em> (<em>childhood, Kindheit</em>). What English cannot give you is the gender, because English nouns have none: the suffix is the best clue you have, and for everything else the article has to be learned with the noun. Watch the false friends too: <em>die Fabrik</em> is a factory, not fabric (<em>der Stoff</em>); <em>der Konkurs</em> is bankruptcy, not a concourse; <em>das Gymnasium</em> is a college-preparatory high school, not a gym."
      },
      {
        trap: "<em>ver-</em> does not always signal a mistake: <em>verkaufen</em> means to sell, <em>verschreiben</em> without the reflexive means to prescribe (<em>ein Medikament verschreiben</em>), and <em>sich einer Sache verschreiben</em> means to devote yourself to something. And <em>verreißen</em> is not <em>zerreißen</em>: a critic who <em>verreißt</em> a book pans it, he does not tear it up."
      },
      {
        tip: "When you meet an abstract noun you don't know, strip off the prefixes and suffixes and look for the base: <em>Unzuverlässigkeit</em> → <em>un-</em> + <em>zuverlässig</em> + <em>-keit</em>, “unreliability”."
      }
    ],
    grammar: {
      title: "Derivation: suffixes, prefixes, Fremdwörter",
      note: "<b>-ung, -heit, -keit, -schaft, -ion, -ität</b>: feminine. <b>-ismus</b>: masculine. <b>-ment</b>: almost always neuter. <b>ver-, zer-, ent-, miss-</b>: inseparable prefixes, participle without <i>ge-</i>.",
      table: {
        head: ["base", "derived word", "meaning"],
        rows: [
          ["verbessern", "die Verbesserung", "improvement"],
          ["gelassen", "die Gelassenheit", "composure, calm"],
          ["nachhaltig", "die Nachhaltigkeit", "sustainability"],
          ["reißen", "zerreißen", "to tear to pieces"],
          ["verstehen", "missverstehen", "to misunderstand"],
          ["digitalisieren", "die Digitalisierung", "digitalization"]
        ]
      },
      examples: [
        { tr: "Improving working conditions is long overdue.", note: "verbessern + -ung: a feminine noun from a verb" },
        { tr: "I admire her composure in difficult situations.", note: "gelassen + -heit" },
        { tr: "Experts are questioning the sustainability of the project.", note: "nachhaltig + -keit: -keit after -ig" },
        { tr: "I wrote the date wrong.", note: "sich verschreiben: ver- signals a mistake" },
        { tr: "During the argument she tore the letter into little pieces.", note: "zer-: breaking into pieces; participle zerrissen, without ge-" },
        { tr: "The digitalization of public administration is making only slow progress.", note: "digitalisieren + -ung: a common pattern for verbs in -ieren" }
      ]
    },
    vocab: [
      "derivation, derived word",
      "suffix",
      "prefix",
      "foreign word, loanword",
      "composure, calm",
      "sustainability",
      "reliability",
      "digitalization",
      "to tear (to pieces)",
      "to write something wrong, to make a slip of the pen",
      "to misunderstand",
      "to devalue; to validate (a ticket)"
    ],
    exercises: [
      {
        q: "Which noun is correctly derived from «dankbar»?",
        opts: [
          "die Dankbarkeit",
          "die Dankbarheit",
          "die Dankbarung"
        ],
        why: "After <i>-bar</i> the suffix is <b>-keit</b>: <i>Dankbarkeit</i>, like <i>Verfügbarkeit</i>. <i>-ung</i> makes nouns from verbs, not from adjectives."
      },
      {
        q: "What gender is «Realismus»?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "Nouns in <b>-ismus</b> are masculine: <i>der Realismus, der Optimismus</i>. The plural, when there is one, ends in <i>-ismen</i>."
      },
      {
        q: "On a form: «Entschuldigung, ich habe mich beim Datum verschrieben.» What happened?",
        opts: [
          "I wrote the date wrong",
          "I signed up for that date",
          "I prescribed the date"
        ],
        why: "<b>sich verschreiben</b>: here <i>ver-</i> signals a mistake, as in <i>sich verrechnen</i> and <i>sich verlaufen</i>. Without the reflexive, <i>verschreiben</i> means “to prescribe” (a medication); <i>sich einer Sache verschreiben</i> means “to devote yourself to something”."
      },
      {
        q: "Complete: «Seine ___ ist legendär: Er hat noch nie eine Frist versäumt.»",
        hint: "noun from zuverlässig",
        why: "<b>Zuverlässigkeit</b>: after <i>-ig</i> the suffix is <i>-keit</i>; the noun is feminine and is capitalized."
      },
      {
        q: "Complete with two derived nouns: from «digitalisieren» in the first gap, from «wirksam» in the second.",
        tr: "Digitalizing the administration is supposed to speed up procedures, but experts disagree about how effective it is.",
        why: "<b>Digitalisierung</b>: many verbs in <i>-ieren</i> form a noun in <i>-ierung</i>. <b>Wirksamkeit</b>: after <i>-sam</i> the suffix is <i>-keit</i>."
      },
      {
        q: "Match each verb with its meaning.",
        pairs: [
          "to tear to pieces",
          "to get lost, to take a wrong turn",
          "to misunderstand",
          "to devalue"
        ]
      },
      {
        q: "Which of these nouns are feminine?",
        opts: [
          "Nation",
          "Qualität",
          "Dokument",
          "Optimismus"
        ],
        why: "<i>die Nation</i> and <i>die Qualität</i>: <b>-ion</b> and <b>-ität</b> make feminine nouns. <i>das Dokument</i> is neuter, <i>der Optimismus</i> masculine."
      },
      {
        q: "Translate: “The sustainability of the project was called into question.” (die Nachhaltigkeit, in Zweifel ziehen)",
        why: "<i>Die Nachhaltigkeit des Projekts wurde in Zweifel gezogen</i> (or <i>ist ... in Zweifel gezogen worden</i>). The simple verb <i>bezweifeln</i> and the genitive <i>Projektes</i> are also accepted."
      },
      {
        tr: "Digitalization is changing not only the working world, but also the language. Many foreign words from English are now used quite naturally.",
        why: "In <i>Digitalisierung</i> the stress falls on <b>sie</b>; in <i>Fremdwörter</i> the stress falls on <b>Fremd</b>; in <i>Englischen</i> the stress falls on <b>Eng</b>, and <b>ng</b> is pronounced [ŋ]."
      },
      {
        tr: "Her composure impressed me.",
        why: "In <i>Gelassenheit</i> the stress falls on <b>las</b>; in <i>beeindruckt</i> the two vowels are pronounced separately, be-<b>ein</b>-druckt, with the stress on <b>ein</b>."
      }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Check",
    title: "Test: Plurals and word formation",
    objectives: [
      "check double and substitute plurals, compounds and derivation"
    ],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: «In der Innenstadt gibt es zu wenige ___ für ältere Menschen.» (benches)",
        hint: "plural of die Bank in the sense of “bench”",
        why: "<b>Bänke</b> (or <b>Sitzbänke</b>): benches have the umlaut; <i>Banken</i> are financial institutions."
      },
      {
        q: "Complete: «Die ___ zwischen Vermieter und Mieter landeten schließlich vor Gericht.» (the disputes)",
        hint: "usual plural of der Streit",
        why: "<b>Streitigkeiten</b>: the usual plural of <i>Streit</i> is <i>Streitigkeiten</i>; <i>Streite</i>, correct but rare, is also accepted."
      },
      {
        q: "Complete: «Das ___ hat die Schließung des Restaurants angeordnet.»",
        hint: "die Gesundheit + das Amt",
        why: "<b>Gesundheitsamt</b>: <i>-s-</i> after <i>-heit</i>; neuter like <i>das Amt</i>."
      },
      {
        q: "Complete: «Mit großer ___ steuerte die Pilotin die Maschine durch den Sturm.»",
        hint: "noun from besonnen (level-headed, prudent)",
        why: "<b>Besonnenheit</b>: <i>besonnen</i> + <i>-heit</i>, feminine."
      },
      {
        q: "In which sentence is «Worte» used correctly?",
        opts: [
          "Ihre Worte haben mich tief berührt.",
          "Das Wörterbuch enthält 50 000 Worte.",
          "Er kennt schon viele Worte auf Englisch."
        ],
        why: "The words of a speech, the ones that move or convince, are <b>Worte</b>. For words as units of vocabulary, in a dictionary or in the vocabulary of a language, you need <i>Wörter</i>."
      },
      {
        q: "What gender is «Bahnhofsvorplatz» (the square in front of the train station)?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "The last element decides: <b>der</b> Platz. The <i>-s-</i> after <i>Bahnhof</i> is a linking element."
      },
      {
        q: "A critic judged a novel very harshly. Which sentence does the newspaper use?",
        opts: [
          "Der Kritiker hat den Roman verrissen.",
          "Der Kritiker hat den Roman zerbrochen.",
          "Der Kritiker hat den Roman entrissen."
        ],
        why: "<b>verreißen</b> means “to pan, to tear apart in a review”. <i>zerbrechen</i> is to break a fragile object; <i>entreißen</i> is to snatch something out of someone's hands, and it takes the dative of the person."
      },
      {
        q: "Match each plural with its meaning.",
        pairs: [
          "ribbons, ligaments",
          "volumes (of a work)",
          "banks",
          "benches"
        ]
      },
      {
        tr: "In a few words, the linguist explained the difference between Wörter and Worte. The students listened to her very attentively.",
        why: "In <i>Sprachwissenschaftlerin</i> the stress falls on <b>Sprach</b>; in <i>Wörtern</i> the <b>ö</b> is short, [œ]; in <i>Aufmerksamkeit</i> the stress falls on <b>Auf</b>."
      },
      {
        tr: "The public health department ordered the closure.",
        why: "In <i>Gesundheitsamt</i> the stress falls on <b>sund</b>; in <i>Schließung</i> <b>ie</b> is long and <b>ß</b> is pronounced [s]; in <i>angeordnet</i> the stress falls on <b>an</b>."
      }
    ]
  },
  "unit:c2-u03": {
    title: "Shades of meaning",
    grammarNote: "Litotes and understatement (nicht schlecht, nicht ganz ohne, nicht gerade billig) · irony with particles (Das ist ja eine schöne Bescherung!) · Umgangssprache and register · Austrian and Swiss words to recognize (Jänner, Paradeiser, Velo, grüezi) · Latinisms and Bildungssprache (obsolet, konsistent, die Prämisse) and the plural of Fremdwörter (Kriterien, Gremien)"
  },
  "lesson:c2-u03-l1": {
    theme: "Conversation and criticism",
    title: "Irony and understatement",
    objectives: [
      "recognize litotes and understatement (nicht schlecht, nicht ganz ohne, nicht gerade)",
      "tell when praise or an exclamation is meant ironically",
      "recognize what ja and mir do in ironic exclamations",
      "soften a negative judgment with gelinde gesagt and nicht ganz"
    ],
    theory: [
      {
        h: "Saying less to mean more",
        p: "Spoken German, and journalistic German too, loves <strong>litotes</strong>: you deny the opposite of what you think. <em>Nicht schlecht</em> is often full praise, <em>nicht ganz ohne</em> means “demanding, risky”, <em>nicht gerade billig</em> means “expensive”, <em>nicht ganz unproblematisch</em> means “seriously problematic”. The phrase <strong>gelinde gesagt</strong> (“to put it mildly”) warns you that reality is worse than the word chosen: <em>Die Lage ist, gelinde gesagt, angespannt.</em> Praise can be low-key as well: <em>Das kann sich sehen lassen</em> acknowledges a remarkable result without any fanfare."
      },
      {
        h: "Irony in the particles",
        p: "German irony often travels through modal particles and through a positive adjective in a negative situation. <em>Das ist <strong>ja</strong> eine schöne Bescherung!</em> (“well, this is a fine mess!”): <em>ja</em> in the exclamation signals surprise, and <em>schön</em> is read backwards. <em>Du bist <strong>mir</strong> ja ein schöner Freund!</em> is a reproach: the ethical dative <em>mir</em> brings the speaker into it, roughly “some friend you are!”. <em>Na, das hast du ja toll hingekriegt!</em> is said to someone who has just made a mess of things. The particles alone do not make a sentence ironic: they strengthen the exclamation and the speaker's involvement. The real signal is the clash between the word and the situation, together with the intonation: these are the cues that let you hear the reversed meaning."
      },
      {
        contrast: "English has a famous tradition of understatement (“not bad”, “a bit of a problem”, “not the brightest bulb”), so the mechanism will feel familiar. The calibration is what differs. American workplace praise tends to run high (“awesome”, “great job!”), and against that background a German boss's <em>nicht schlecht</em> can sound lukewarm to you, when it may be the highest praise you will get. The reverse also holds: enthusiastic American praise in a German professional setting can come across as inflated, and therefore not quite believable."
      },
      {
        trap: "Do not take <em>nicht ganz ohne</em> literally: it does not mean “not entirely without”, but “anything but easy”. And <em>nicht unbedingt</em> does not mean “absolutely not”, but “not necessarily”: <em>Das ist nicht unbedingt nötig</em> leaves the door open. Watch out for <em>jemanden auf den Arm nehmen</em> as well: figuratively it is “to pull someone's leg”; the literal meaning is “to pick someone up in your arms”, and only the context tells them apart."
      },
      {
        tip: "When you are not sure about the tone, go by intonation and context, not by the words: a flat, drawn-out <em>Na toll!</em> is ironic almost every time."
      }
    ],
    grammar: {
      title: "Litotes, understatement and irony",
      note: "<b>nicht + the opposite</b>: <i>nicht schlecht</i> (good), <i>nicht gerade billig</i> (expensive), <i>nicht ganz ohne</i> (demanding). <b>gelinde gesagt</b> softens a negative judgment. Irony comes from the clash between a positive adjective and the situation; <b>ja</b> in an exclamation and the ethical dative <b>mir</b> strengthen it, but neither is enough on its own.",
      table: {
        head: ["expression", "literally", "actual meaning"],
        rows: [
          ["nicht schlecht", "not bad", "good, impressive"],
          ["nicht ganz ohne", "not entirely without", "demanding, risky"],
          ["nicht gerade billig", "not exactly cheap", "expensive"],
          ["nicht ganz unproblematisch", "not entirely free of problems", "seriously problematic"],
          ["Das kann sich sehen lassen.", "it can let itself be seen", "that is an impressive result"],
          ["Das ist ja eine schöne Bescherung!", "what a lovely present!", "what a mess!"]
        ]
      },
      examples: [
        { tr: "The negotiations were not entirely free of problems.", note: "litotes: in fact they were difficult" },
        { tr: "The movie actually wasn't that bad.", note: "gar nicht mal so: low-key praise" },
        { tr: "He's not exactly the most hardworking.", note: "nicht gerade + superlative: softened criticism" },
        { tr: "Well, this is a fine mess!", note: "irony: ja in the exclamation, schön read backwards" },
        { tr: "Some friend you are!", note: "ironic reproach with the ethical dative mir" },
        { tr: "The result is genuinely impressive.", note: "sich sehen lassen können: praise without fanfare" }
      ]
    },
    vocab: [
      "irony",
      "understatement, a deliberately low-key phrasing",
      "understatement, playing down",
      "exaggeration",
      "allusion, insinuation",
      "undertone",
      "dig, swipe",
      "hint, vague allusion",
      "ambiguous, with a double meaning",
      "with a wink, tongue in cheek",
      "to play down",
      "to pull someone's leg"
    ],
    exercises: [
      {
        q: "A coworker says of the new boss: “Er ist nicht gerade ein Organisationstalent.” What does she mean?",
        opts: [
          "The boss is poorly organized.",
          "The boss is an excellent organizer.",
          "The boss does not deal with organization."
        ],
        why: "<b>nicht gerade</b> + a positive expression is softened criticism: the boss is disorganized, but it is said politely."
      },
      {
        q: "After a six-hour mountain climb a guide says: “Die Tour war nicht ganz ohne.” What does that mean?",
        opts: [
          "The hike was fairly demanding.",
          "The hike was easy and pleasant.",
          "The hike was incomplete."
        ],
        why: "<b>nicht ganz ohne</b> is a fixed litotes: “anything but easy, with its risks”. It has nothing to do with something missing."
      },
      {
        q: "Your coworker spills coffee on the keyboard. Complete the ironic exclamation: “Das ist ___ eine schöne Bescherung!”",
        opts: [
          "ja",
          "denn",
          "etwa"
        ],
        why: "In an exclamation the particle is <b>ja</b>, which signals surprise; together with <i>schön</i> read backwards it gives “what a mess!”. <i>denn</i> and <i>etwa</i> are question particles."
      },
      {
        q: "Which sentence is low-key praise for a very good result?",
        opts: [
          "Das kann sich sehen lassen.",
          "Das lässt zu wünschen übrig.",
          "Das ist unter aller Kritik."
        ],
        why: "<b>sich sehen lassen können</b> acknowledges a remarkable result without fanfare. <i>zu wünschen übrig lassen</i> (“to leave a lot to be desired”) is a negative judgment; <i>unter aller Kritik</i> is a flat-out pan."
      },
      {
        q: "You forgot a friend's birthday. He tells you: “Du bist mir ja ein schöner Freund!” What does he mean?",
        opts: [
          "He is reproaching you: you are a lousy friend.",
          "He is paying you a compliment: you are a charming friend.",
          "He is telling you that you are his best friend."
        ],
        why: "It is an ironic reproach: <i>schön</i> is read backwards, and the ethical dative <b>mir</b> stresses that the speaker is personally affected, much like English “some friend you are!”."
      },
      {
        q: "Complete: in the first gap the adverb of the softening phrase “to put it mildly”, in the second a word describing the outcome (“successful”).",
        tr: "The presentation was, to put it mildly, not entirely successful: the projector broke down and the speaker had forgotten her notes.",
        why: "<b>gelinde gesagt</b> (also <i>milde</i> or <i>vorsichtig gesagt</i>) warns you that reality is worse than the word chosen; <b>nicht ganz gelungen</b> (or <i>geglückt</i>, <i>glücklich</i>, <i>reibungslos</i>) is litotes: “not entirely successful”, and here the context makes clear it went badly."
      },
      {
        q: "Match each expression with its actual meaning.",
        pairs: [
          "good, impressive",
          "demanding, risky",
          "rather expensive",
          "not necessarily"
        ]
      },
      {
        q: "Translate using litotes: “The restaurant wasn't exactly cheap.” (nicht gerade, billig)",
        why: "<i>Das Restaurant war nicht gerade billig</i>: <i>nicht gerade</i> softens the statement and lets you understand that the check was steep. <i>günstig</i> or <i>preiswert</i>, <i>nicht eben</i> and the Perfekt <i>ist ... gewesen</i> are accepted too."
      },
      {
        tr: "The food was burnt, the wine was warm, and outside it was pouring rain. “Not quite the evening I had imagined,” the host remarked dryly.",
        why: "In <i>angebrannt</i> the stress falls on <b>an</b>; in <i>Strömen</i> the <b>ö</b> is long, [øː]; in <i>vorgestellt</i> the stress falls on <b>vor</b>. The irony comes from the clash between the disaster described and the understated line; the dry tone strengthens it."
      },
      {
        tr: "That was, to put it mildly, not entirely unproblematic.",
        why: "In <i>gelinde</i> the stress falls on <b>lin</b>; in <i>unproblematisch</i> the stress falls on <b>un</b> or on <b>ma</b>: the Duden records both pronunciations. The two pauses around <i>gelinde gesagt</i> make the aside audible."
      }
    ]
  },
  "lesson:c2-u03-l2": {
    theme: "Varieties of German",
    title: "Colloquial speech, dialect, varieties",
    objectives: [
      "recognize the features of colloquial speech (hab, 'ne, was for etwas)",
      "understand the most common Austrian and Swiss words (Jänner, Paradeiser, Velo, grüezi)",
      "tell dialect apart from a national standard variety",
      "choose standard German when writing or speaking in a formal setting"
    ],
    theory: [
      {
        h: "Three standards, many dialects",
        p: "German is a <strong>pluricentric</strong> language: Germany, Austria and Switzerland each have their own standard variety, with different words, pronunciations and sometimes grammatical forms, all of them correct. In Austria January is <em>der Jänner</em>, a tomato is <em>der Paradeiser</em>, a potato <em>der Erdapfel</em>, an apricot <em>die Marille</em>; in Switzerland a bicycle is <em>das Velo</em>, people <em>parkieren</em> instead of <em>parken</em>, and a train ticket is <em>das Billett</em>. These are standard words in their country, not dialect: an Austrian word appears in newspapers, official documents and school textbooks. <strong>Dialect</strong> (<em>Mundart</em>) is something else: the Bavarian, Swabian or Swiss German dialect groups, which a northern German sometimes cannot understand at all."
      },
      {
        h: "Colloquial speech",
        p: "<strong>Umgangssprache</strong> cuts across all regions. It shortens forms (<em>ich hab</em> for <em>ich habe</em>, <em>'ne</em> for <em>eine</em>, <em>was</em> for <em>etwas</em>, <em>mal</em> for <em>einmal</em>), uses informal vocabulary (<em>keinen Bock haben</em>, “to not feel like it”; <em>der Kram</em>, “stuff”) and prefers the Perfekt to the Präteritum. Among friends it is natural; in an email to a professor or a client it sounds sloppy, or <em>salopp</em>."
      },
      {
        contrast: "This will make sense to you right away, because English works the same way: American and British English are both standard, and an American who writes <em>gotten</em>, <em>sidewalk</em> or <em>fall</em> is no more wrong than a Briton who writes <em>got</em>, <em>pavement</em> or <em>autumn</em>. Austrian and Swiss Standard German stand to German German roughly the way British English stands to American English, not the way Appalachian or Cockney speech stands to either. A Viennese who writes <em>Jänner</em> or someone from Zurich who writes <em>parkieren</em> is not making a mistake. The practical rule is the one you already follow in English: recognize all of them, and produce one consistently, usually the German one."
      },
      {
        trap: "<em>Im Jänner fahre ich mit dem Velo</em> mixes an Austrian and a Swiss word: it is not an error, and it does happen in real usage, but as a learner you do well to pick one variety and stick to it within a text. And do not mistake regional pronunciation for an error: in many parts of Austria and southern Germany <em>Chemie</em> and <em>China</em> are said with an initial [k], and that is correct."
      },
      {
        tip: "Dictionaries label regional words: <em>österr.</em> for Austria, <em>schweiz.</em> for Switzerland, <em>südd.</em> for southern Germany, <em>ugs.</em> for colloquial. That label tells you where and when the word fits."
      }
    ],
    grammar: {
      title: "Three standard varieties",
      note: "Germany, Austria and Switzerland each have their own standard. <b>Austrian</b> and <b>Swiss</b> words are standard in their own country: you recognize all of them; when an exercise asks you to produce a form, the instructions say which variety they want, usually the German standard. <b>Umgangssprache</b> shortens forms (<i>hab</i>, <i>'ne</i>, <i>was</i>) and is best avoided in formal writing.",
      table: {
        head: ["Germany", "Austria", "Switzerland", "English"],
        rows: [
          ["der Januar", "der Jänner", "der Januar", "January"],
          ["die Tomate", "der Paradeiser", "die Tomate", "tomato"],
          ["die Kartoffel", "der Erdapfel", "die Kartoffel", "potato"],
          ["das Fahrrad", "das Fahrrad", "das Velo", "bicycle"],
          ["parken", "parken", "parkieren", "to park"],
          ["Guten Tag", "Grüß Gott", "Grüezi", "hello, good day"]
        ]
      },
      examples: [
        { tr: "Hello! I'd like a kilo of tomatoes.", note: "Austrian: Grüß Gott, der Paradeiser" },
        { tr: "In January there is usually snow in Innsbruck.", note: "Austrian: der Jänner" },
        { tr: "Hello! Where can I park here?", note: "Swiss: Grüezi, parkieren" },
        { tr: "She bikes to work every day.", note: "Swiss: das Velo" },
        { tr: "Got a minute? I have to tell you something.", note: "colloquial: 'ne for eine, was for etwas" },
        { tr: "I really can't be bothered with all this paperwork.", note: "colloquial: hab, keinen Bock haben, der Papierkram" }
      ]
    },
    vocab: [
      "colloquial speech",
      "the standard language",
      "dialect (also in a literary sense)",
      "dialect",
      "variety (of a language)",
      "Austrian word or expression",
      "Swiss word or expression",
      "accent",
      "coloring, inflection",
      "in dialect, dialectal",
      "casual, sloppy (of register)",
      "to make oneself understood, to communicate"
    ],
    exercises: [
      {
        q: "In a Viennese restaurant you see “Erdäpfelsalat” on the menu. What are you ordering?",
        opts: [
          "potato salad",
          "tomato salad",
          "apple salad"
        ],
        why: "<b>der Erdapfel</b> (plural <i>Erdäpfel</i>) is the Austrian word for <i>die Kartoffel</i>. Tomatoes, in Vienna, are <i>Paradeiser</i>."
      },
      {
        q: "In Zurich a sign says “Velos abstellen verboten”. What is forbidden?",
        opts: [
          "leaving bicycles",
          "parking cars",
          "stopping mopeds"
        ],
        why: "<b>das Velo</b> (plural <i>Velos</i>) is a bicycle in Switzerland; in Germany it is <i>das Fahrrad</i>."
      },
      {
        q: "Which sentence fits an email to the university president asking for an extension?",
        opts: [
          "Ich möchte Sie fragen, ob eine Verlängerung der Frist möglich wäre.",
          "Ich wollt' mal fragen, ob ich noch 'n bisschen mehr Zeit krieg.",
          "Geht das klar mit der Frist, oder was?"
        ],
        why: "Only the first is standard and formal: <i>Sie</i>, the polite Konjunktiv II, the abstract noun <i>Verlängerung</i>. The second is colloquial (<i>wollt'</i>, <i>'n</i>, <i>krieg</i>), the third downright rude."
      },
      {
        q: "A Viennese pronounces “Chemie” with an initial [k]. What does that tell you?",
        opts: [
          "It is a correct regional pronunciation, common in Austria and southern Germany.",
          "It is a pronunciation mistake.",
          "He is talking about a different subject."
        ],
        why: "Before <i>e</i> and <i>i</i>, initial <i>ch</i> is pronounced [ç] in most of Germany and [k] in many parts of Austria and the south: these are <b>regional variants, both standard</b>."
      },
      {
        q: "Complete with the word used in the German standard of Germany: “In Wien sagt man Paradeiser, in Hamburg sagt man ___.”",
        hint: "tomatoes, in the standard German of Germany",
        why: "<b>Tomaten</b> (or <b>Tomate</b>): <i>der Paradeiser</i> is the Austrian word, <i>die Tomate</i> the word used in Germany and Switzerland."
      },
      {
        q: "Complete: in the first gap the plural of “der Dialekt”, in the second the plural of “die Varietät”.",
        tr: "Austrian and Swiss Standard German are not dialects, but varieties of the German language with equal standing.",
        why: "<b>Dialekte</b> (or <i>Mundarten</i>) and <b>Varietäten</b>: the national varieties are standard in their own right, while dialects are regional varieties used mostly in speech. Linguists also say <i>Standardvarietäten</i>."
      },
      {
        q: "Match each regional word with its meaning.",
        pairs: [
          "January (Austria)",
          "tomato (Austria)",
          "bicycle (Switzerland)",
          "hello (Switzerland)"
        ]
      },
      {
        q: "Translate: “She speaks with a slight Swiss accent.” (leicht, der Akzent)",
        why: "<i>Sie spricht mit einem leichten Schweizer Akzent</i>. <i>Schweizer</i>, as an adjective of country, is not declined and is capitalized. <i>mit leichtem Schweizer Akzent</i> and the adjective <i>schweizerisch</i>, which is declined, are accepted too."
      },
      {
        tr: "In Vienna people say Paradeiser instead of Tomaten and Erdäpfel instead of Kartoffeln. So anyone shopping in Austria for the first time shouldn't be surprised by it.",
        why: "In <i>Paradeiser</i> the stress falls on <b>dei</b>; in <i>Erdäpfel</i> the stress falls on <b>Erd</b>; in <i>Österreich</i> the <b>Ö</b> is long and the final syllable <b>reich</b> is pronounced [ʁaɪ̯ç]."
      },
      {
        tr: "He speaks dialect, but he also understands the standard language.",
        why: "In <i>Dialekt</i> the stress falls on <b>lekt</b>; in <i>versteht</i> the stress falls on <b>steht</b> and <b>st</b> is pronounced [ʃt]; in <i>Standardsprache</i> the main stress falls on <b>Stan</b>."
      }
    ]
  },
  "lesson:c2-u03-l3": {
    theme: "Essays and academia",
    title: "Latinisms and Bildungssprache",
    objectives: [
      "recognize the Latinisms typical of educated language (These, Prämisse, obsolet, konsistent)",
      "form the plural of Fremdwörter in -um (Kriterien, Gremien)",
      "derive nouns from Latin adjectives (konsistent, Konsistenz)",
      "avoid the false friends (ordinär, Konfession)"
    ],
    theory: [
      {
        h: "The language of essays",
        p: "<strong>Bildungssprache</strong> is the register of essays, academia and quality journalism. Alongside native German vocabulary it uses many <strong>Latinisms</strong> (and Greek words): <em>die These, die Prämisse, das Phänomen, das Kriterium, obsolet, konsistent, ambivalent, verifizieren, implizieren</em>. There is often a German equivalent (<em>veraltet</em> for <em>obsolet</em>, <em>bestätigen</em> for <em>verifizieren</em>), and the choice depends on the context: the Latinism is often more technical, and in an essay it is common."
      },
      {
        h: "Plurals and derivatives of Fremdwörter",
        p: "In many neuter nouns ending in <em>-um</em>, the ending <em>-um</em> drops and <strong>-en</strong> takes its place: <em>Gremi|um → Gremi|en</em>, <em>Kriteri|um → Kriteri|en</em>, <em>Spektr|um → Spektr|en</em>, <em>Muse|um → Muse|en</em>. It is not the only pattern: <em>das Visum</em> becomes <em>die Visa</em> (or <em>Visen</em>), <em>das Praktikum</em> becomes <em>die Praktika</em>, and some recent borrowings take <em>-s</em>. Check the plural word by word. Two frequent derivation patterns, not rules without exceptions: many verbs in <em>-ieren</em> give nouns in <em>-ation</em> or <em>-ierung</em> (<em>verifizieren → die Verifikation, die Verifizierung</em>); many adjectives in <em>-ent</em> and <em>-ant</em> give nouns in <em>-enz</em> and <em>-anz</em>: <em>konsistent → die Konsistenz</em>, <em>ambivalent → die Ambivalenz</em>, <em>tolerant → die Toleranz</em>. These nouns are feminine; still, check the derivative in a dictionary."
      },
      {
        contrast: "English knows this register well: it is the gap between <em>begin</em> and <em>commence</em>, <em>use</em> and <em>utilize</em>, <em>show</em> and <em>demonstrate</em>. That is exactly the gap between <em>veraltet</em> and <em>obsolet</em>, so <em>Prämisse, Konsequenz, ambivalent, implizieren</em> will be transparent to you. The danger lies in the <strong>false friends</strong>: <em>ordinär</em>, said of people, means “vulgar, crude”, not “ordinary” (that is <em>gewöhnlich</em>); <em>die Konfession</em> is a religious denomination, while confessing a sin is <em>die Beichte</em>; and <em>konsistent</em> means “internally consistent”, while being consistent in your behavior is <em>konsequent</em>. The plurals do not follow English either: English keeps <em>criteria</em> and <em>spectra</em>, German says <em>die Kriterien</em> and <em>die Spektren</em>."
      },
      {
        trap: "Do not build the German plural with <em>-s</em> or with native endings: <em>die Gremiums</em> and <em>die Kriteriume</em> do not exist, and neither does <em>die Kriteria</em>. And watch the stress, which in Fremdwörter almost always falls near the end: <em>Phäno<b>men</b>, Prä<b>mis</b>se, konsis<b>tent</b>, verifi<b>zie</b>ren</em>."
      },
      {
        tip: "One Latinism per paragraph gives precision; five in one sentence give pedantry. If the German equivalent says the same thing, it is often the better choice in texts for a general audience."
      }
    ],
    grammar: {
      title: "Latinisms, plurals and derivatives",
      note: "In many nouns in <b>-um</b> the ending <i>-um</i> drops and <b>-en</b> takes its place (<i>Gremi|um → Gremi|en, Spektr|um → Spektr|en</i>), but not in all of them (<i>Visa, Praktika</i>): learn the plural with the word. Frequent patterns, to be checked word by word: adjectives in <b>-ent/-ant</b> → feminine noun in <b>-enz/-anz</b> (<i>Konsistenz, Ambivalenz</i>); verbs in <b>-ieren</b> → noun in <b>-ation</b> or <b>-ierung</b>.",
      table: {
        head: ["Latinism", "German equivalent", "English"],
        rows: [
          ["obsolet", "veraltet, überholt", "obsolete, outdated"],
          ["verifizieren", "als richtig bestätigen", "to verify, to establish as true"],
          ["implizieren", "mit sich bringen", "to imply, to entail"],
          ["die Prämisse", "die Voraussetzung", "premise"],
          ["das Gremium, die Gremien", "der Ausschuss", "committee, board"],
          ["konsistent, die Konsistenz", "widerspruchsfrei", "consistent, consistency"]
        ]
      },
      examples: [
        { tr: "The thesis can hardly be verified empirically.", note: "verifizieren: verb in -ieren" },
        { tr: "The proposal was accepted unanimously by the committee.", note: "das Gremium, plural die Gremien" },
        { tr: "His line of argument is not internally consistent.", note: "konsistent, noun: die Konsistenz" },
        { tr: "The phenomenon cannot be explained by a single cause.", note: "monokausal: one single cause; the stress falls on sal" },
        { tr: "The results are to be interpreted with caution.", note: "zu + infinitive expressing necessity" },
        { tr: "The criteria used so far are considered obsolete.", note: "das Kriterium, plural die Kriterien" }
      ]
    },
    vocab: [
      "thesis",
      "phenomenon",
      "committee, board",
      "criterion",
      "spectrum, range",
      "premise",
      "consequence",
      "consistent, free of contradictions",
      "obsolete, outdated",
      "ambivalent",
      "to verify",
      "to imply, to entail"
    ],
    exercises: [
      {
        q: "What is the plural of “das Kriterium”?",
        opts: [
          "die Kriterien",
          "die Kriteriums",
          "die Kriteriume"
        ],
        why: "In <i>Kriterium</i> the ending <i>-um</i> is replaced by <b>-en</b>: <i>Kriteri|um → Kriteri|en</i>, like <i>Gremium → Gremien</i>. It is the most frequent pattern, not the only one (<i>Visum → Visa</i>)."
      },
      {
        q: "In an essay, “Die Methode ist veraltet” becomes:",
        opts: [
          "Die Methode ist obsolet.",
          "Die Methode ist absolut.",
          "Die Methode ist obszön."
        ],
        why: "<b>obsolet</b> is the Latinism for <i>veraltet, überholt</i>. <i>absolut</i> means “absolute”, <i>obszön</i> “obscene”."
      },
      {
        q: "A critic calls a politician's behavior “ordinär”. What does he mean?",
        opts: [
          "vulgar, crude",
          "ordinary, normal",
          "orderly, regular"
        ],
        why: "False friend: in a judgment on behavior <b>ordinär</b> means “vulgar”. There is also a sense of “common, cheap” (<i>ganz ordinäres Papier</i>), but the context rules it out here."
      },
      {
        q: "Complete: “Der Antrag wurde in mehreren ___ der Universität diskutiert.”",
        hint: "plural of das Gremium",
        why: "<b>Gremien</b>: <i>-um</i> is replaced by <i>-en</i> (<i>Gremi|um → Gremi|en</i>). This is a dative plural, but the form does not change."
      },
      {
        q: "Complete: “Die ___ seiner Argumentation überzeugte die Kommission.”",
        hint: "noun from konsistent",
        why: "<b>Konsistenz</b>: adjectives in <i>-ent</i> give feminine nouns in <i>-enz</i>, like <i>ambivalent → Ambivalenz</i>."
      },
      {
        q: "Complete: in the first gap the Latinism for “premise”, in the second an adjective meaning “no longer valid”.",
        tr: "The premise on which the entire study rests has turned out to be false; the results are therefore no longer valid.",
        why: "<b>Prämisse</b> (<i>Annahme</i>, <i>Grundannahme</i>, <i>Voraussetzung</i> are accepted too) and <b>hinfällig</b> (or <i>ungültig</i>): an invalidated result is <i>hinfällig</i>, while <i>obsolet</i> only says that time has overtaken something. <i>Prämisse</i> is feminine: <i>die Prämisse, auf der</i>."
      },
      {
        q: "Match each Latinism with its meaning.",
        pairs: [
          "outdated, fallen out of use",
          "conciliatory, willing to compromise",
          "ambivalent, with mixed feelings",
          "marginal, secondary"
        ]
      },
      {
        q: "Translate: “The thesis cannot be verified empirically.”, in the sense that the data cannot establish that it is true (die These, empirisch, verifizierbar)",
        why: "<i>Die These ist empirisch nicht verifizierbar</i>. <i>lässt sich nicht verifizieren</i> and <i>ist nicht zu verifizieren</i> are accepted too. <i>überprüfbar</i> is not: <i>überprüfen</i> means “to check” and does not imply confirmation, whereas <i>verifizieren</i> means establishing that something is true."
      },
      {
        tr: "The study's premise is controversial. Critics consider the results unverifiable and the conclusions drawn from them hasty.",
        why: "In <i>Prämisse</i> the stress falls on <b>mis</b>; in <i>verifizierbar</i> the stress falls on <b>zier</b>; in <i>Konsequenzen</i> the stress falls on <b>quen</b> and <b>qu</b> is pronounced [kv]."
      },
      {
        tr: "The phenomenon cannot be explained by a single cause.",
        why: "In <i>Phänomen</i> the stress falls on <b>men</b>, with a long <b>e</b>; in <i>monokausal</i> the stress falls on <b>sal</b>; <b>ph</b> is pronounced [f]."
      }
    ]
  },
  "lesson:c2-u03-test": {
    theme: "Assessment",
    title: "Test: Shades of meaning",
    objectives: [
      "check understatement, regional varieties and Bildungssprache, with a review of units 1-3"
    ],
    theory: [
      {
        p: "Twelve questions on the whole unit, with a review of participial attributes (unit 1) and Fremdwörter (unit 2). You pass with 70%. Do not look back at the lessons while you answer: if you cannot remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete with the participial attribute: “Die von den Bürgern ___ Fragen blieben unbeantwortet.”",
        hint: "past participle of stellen, declined",
        why: "<b>gestellten</b>: past participle used as an attribute, with the weak ending <i>-en</i> after the plural article <i>die</i>."
      },
      {
        q: "Complete: “Die ___ für die Vergabe der Stipendien sind streng.”",
        hint: "plural of das Kriterium",
        why: "<b>Kriterien</b>: <i>-um</i> is replaced by <i>-en</i> (<i>Kriteri|um → Kriteri|en</i>)."
      },
      {
        q: "Complete the softening phrase: “Die Lage ist, ___ gesagt, angespannt.”",
        hint: "“to put it mildly”",
        why: "<b>gelinde gesagt</b> (also <i>milde</i> or <i>vorsichtig gesagt</i>): reality is worse than the word chosen suggests."
      },
      {
        q: "Complete: “Die ___ ihrer Gefühle war nicht zu übersehen.”",
        hint: "noun from ambivalent",
        why: "<b>Ambivalenz</b>: <i>-ent</i> becomes <i>-enz</i>, feminine."
      },
      {
        q: "After a fourteen-hour flight, two layovers, lost luggage and a sleepless night, a coworker says: “Die Reise war etwas anstrengend.” The tone is:",
        opts: [
          "an understatement: the trip was exhausting",
          "an exaggeration: the trip was uneventful",
          "an ironic compliment to the airline"
        ],
        why: "<i>etwas anstrengend</i> after a trip like that is an <b>understatement</b>: she says less than she thinks."
      },
      {
        q: "In Graz the greengrocer offers you “Marillen”. What are they?",
        opts: [
          "apricots",
          "blueberries",
          "plums"
        ],
        why: "<b>die Marille</b> is the Austrian word for <i>die Aprikose</i>."
      },
      {
        q: "At a Swiss train station the conductor asks: “Ihr Billett, bitte.” What is he asking for?",
        opts: [
          "your ticket",
          "your ID",
          "your luggage"
        ],
        why: "<b>das Billett</b> is a ticket in Switzerland; in Germany it is <i>die Fahrkarte</i> or <i>das Ticket</i>."
      },
      {
        q: "Which sentence contains a correct extended participial attribute?",
        opts: [
          "Die von der Regierung geplanten Maßnahmen stoßen auf Kritik.",
          "Die Maßnahmen von der Regierung geplanten stoßen auf Kritik.",
          "Die geplanten von der Regierung Maßnahmen stoßen auf Kritik."
        ],
        why: "The extended attribute stands between article and noun, with the participle right before the noun: <i>die [von der Regierung geplanten] Maßnahmen</i>."
      },
      {
        q: "Which sentence belongs to educated language (Bildungssprache)?",
        opts: [
          "Die Befunde implizieren eine Revision der bisherigen These.",
          "Aus den Befunden folgt, dass die alte Meinung nicht mehr stimmt.",
          "Die Befunde zeigen, dass die alte These Quatsch ist."
        ],
        why: "The first uses Latinisms (<i>implizieren, Revision, These</i>) and the nominal style typical of the educated register. The second is neutral, the third colloquial (<i>Quatsch</i>)."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "committee, board",
          "premise",
          "dig, swipe",
          "dialect"
        ]
      },
      {
        q: "Translate using a participial attribute: “The measures proposed by the commission are obsolete.” (vorschlagen, obsolet)",
        why: "<i>Die von der Kommission vorgeschlagenen Maßnahmen sind obsolet</i>: the extended attribute stands between <i>die</i> and <i>Maßnahmen</i>. <i>veraltet</i> and <i>überholt</i> are accepted too. A relative clause (<i>die Maßnahmen, die die Kommission vorgeschlagen hat</i>) is correct, but here the instructions ask for the attribute."
      },
      {
        tr: "The measures proposed by the commission are, to put it mildly, controversial.",
        why: "In <i>vorgeschlagenen</i> the stress falls on <b>vor</b>; in <i>Kommission</i> the stress falls on <b>sion</b>; in <i>umstritten</i> the stress falls on <b>strit</b>."
      }
    ]
  }
});
