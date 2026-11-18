/* ============================================================
   Learner-language text (en) for data/core/c2-01.js, units c2-u01 and c2-u02.
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
        trap: "A dictionary contains <em>Wörter</em>, never <em>Worte</em>; a moving speech is made of <em>Worte</em>. English <em>words</em> covers both, so your ear gives you no help here. The criterion is not number (even <em>ein paar Worte</em> can be counted) but point of view: units of vocabulary, <em>Wörter</em>; an utterance, what someone says, <em>Worte</em>. And watch the umlaut, which here changes the meaning: <em>Muttern</em> are nuts, <em>Mütter</em> are mothers; <em>Bänke</em> are benches, <em>Banken</em> are financial institutions."
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
        q: "Complete with two substitute plurals: the plural of «der Regen» in the first gap, the plural of «der Rat» (advice) in the second.",
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
  }
});
