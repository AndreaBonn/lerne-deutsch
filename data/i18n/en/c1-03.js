/* ============================================================
   Learner-language text (en) for data/core/c1-03.js, unit c1-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c1-u05": {
    title: "Work completed",
    grammarNote: "Participles I and II as attributes (extended attributes in moderation; the full type and the Gerundivum are left for later study) · nominalization instead of a subordinate clause (nach Abschluss, wegen, bei, trotz, zur, infolge) · cases where the subordinate clause has to stay (no suitable noun, several subjects, modal nuance, readability)"
  },
  "lesson:c1-u05-l1": {
    theme: "Minutes, reports and academic texts",
    title: "Participles I and II as attributes",
    objectives: [
      "use participle I (active, simultaneous) and participle II (passive or completed) before a noun",
      "choose the right ending after the article",
      "build a short extended attribute (im Protokoll festgehaltenen Beschlüsse)",
      "recognize when an attribute that is too long should be unpacked into a relative clause"
    ],
    theory: [
      {
        h: "The participle before the noun",
        p: "In formal texts a relative clause can be compressed into a participle placed before the noun, which takes an adjective ending. <strong>Participle I</strong> (infinitive + <em>-d</em>) is active and simultaneous: <em>die steigenden Kosten</em> = <em>die Kosten, die steigen</em>. The <strong>participle II</strong> of a transitive verb is passive and usually completed (the time value depends on the verb and the context): <em>die geprüften Unterlagen</em> = <em>die Unterlagen, die geprüft wurden</em>. The participle II of an intransitive verb (with <em>sein</em>) is active and completed: <em>die gestiegenen Kosten</em> = <em>die Kosten, die gestiegen sind</em>."
      },
      {
        h: "The extended attribute, in moderation",
        p: "Complements can also stand between the article and the noun, but the participle usually stands <strong>right before the noun</strong>; other attributes may come in between (<em>die geprüften und freigegebenen Unterlagen</em>): <em>die im letzten Quartal erzielten Umsätze</em>. In minutes and reports one or two complements are enough; beyond that the reader loses the thread and a relative clause is the better choice. The type with <em>zu</em> (<em>die zu prüfenden Unterlagen</em>) and longer constructions are left for later study."
      },
      {
        contrast: "English puts a participle <strong>before</strong> the noun when it stands alone or with a short modifier (<em>the rising costs</em>, <em>rapidly rising costs</em>, <em>recently audited documents</em>); a participle with a longer complement usually moves <strong>after</strong> the noun: <em>the figures obtained in the second quarter</em>, <em>the data collected by the office</em>. German does not use that postnominal order for this construction: the complements go <strong>in front</strong> of the noun, between the article and the participle: <em>die vom Amt erhobenen Daten</em>. So the short English pattern (<em>a much-discussed proposal</em>) is only the starting point: in written German the same slot can be filled at length, with <em>steigend, laufend, vorliegend</em> everywhere. German also adds an adjective ending to the participle, which English never does."
      },
      {
        trap: "<em>die prüfenden Unterlagen</em> does not mean “the audited documents”: they are documents that <em>examine</em> something. For the passive sense you need participle II, <em>die geprüften Unterlagen</em>. And do not swap the two: <em>die steigenden Kosten</em> are still rising, <em>die gestiegenen Kosten</em> have already risen. Then the ending: after plural <em>die</em> it is <em>-en</em>, so <em>die geprüften Unterlagen</em>, never <em>die geprüfte Unterlagen</em>."
      },
      {
        tip: "To understand a participle, or to choose one, unpack it into a relative clause: if the verb in the relative clause is active and its action is simultaneous with the main clause (<em>die steigen</em>, but also <em>die teilnahmen</em> in a past narrative) you need participle I; if it is a passive (<em>die geprüft wurden</em>) or a perfect with <em>sein</em> (<em>die gestiegen sind</em>) you need participle II."
      }
    ],
    grammar: {
      title: "Participles I and II as attributes",
      note: "<b>Participle I</b> = infinitive + <i>-d</i>: active, simultaneous. <b>Participle II</b>: passive and usually completed (transitive verbs; the time value depends on verb and context), active and completed (intransitive verbs with <i>sein</i>). Usually right before the noun, with the adjective ending; complements go between the article and the participle.",
      table: {
        head: ["participle", "meaning", "corresponding relative clause", "example"],
        rows: [
          ["participle I", "active, simultaneous", "die Kosten, die steigen", "die steigenden Kosten"],
          ["participle II (transitive)", "passive, completed", "die Unterlagen, die geprüft wurden", "die geprüften Unterlagen"],
          ["participle II (intransitive)", "active, completed", "die Kosten, die gestiegen sind", "die gestiegenen Kosten"],
          ["extended attribute", "complement before the participle", "die Umsätze, die im Quartal erzielt wurden", "die im Quartal erzielten Umsätze"]
        ]
      },
      examples: [
        { tr: "The rising energy costs are weighing on households.", note: "participle I: the increase is going on at the time referred to" },
        { tr: "The increased costs are explained in the report.", note: "participle II of an intransitive verb: active and completed" },
        { tr: "The verified documents are attached to the file.", note: "transitive participle II: passive, “have been verified”" },
        { tr: "The members taking part in the meeting approved the motion.", note: "participle I with a complement: an der Sitzung teilnehmenden" },
        { tr: "The budget approved by the board of directors takes effect in January.", note: "vom Vorstand verabschiedete: the agent phrase goes before the participle" },
        { tr: "The revenue earned in the last quarter was higher than expected.", note: "short extended attribute: im letzten Quartal erzielten" }
      ]
    },
    vocab: [
      "the minutes",
      "the negotiation, the negotiations",
      "the resolution, the decision",
      "the document, the documentation",
      "the turnover, the revenue",
      "the budget",
      "to approve, to adopt (a text or a budget)",
      "to achieve, to obtain (a result)",
      "to record in the minutes, to put in writing",
      "ongoing, current",
      "present, at hand",
      "outstanding, still to be paid"
    ],
    exercises: [
      {
        q: "A quarterly report reads «die steigenden Kosten» in one place and «die gestiegenen Kosten» in another. What is the difference in meaning?",
        opts: [
          "steigenden: the increase is going on at the time referred to; gestiegenen: the increase has already happened",
          "steigenden: the increase has already happened; gestiegenen: the increase is going on at the time referred to",
          "none: they are free variants with the same meaning"
        ],
        why: "Participle I (<i>steigend</i>) is active and <b>simultaneous</b> with the time of reference (usually the present, but it can be a past or future moment): the costs are rising at that point. The participle II of <i>steigen</i> (<i>gestiegen</i>) is <b>completed</b>: the increase has already taken place. That is why they are not interchangeable."
      },
      {
        q: "From the minutes: «Der vom Gemeinderat ___ Haushaltsplan tritt am 1. Januar in Kraft.» Which form completes the sentence?",
        opts: [
          "verabschiedete",
          "verabschiedende",
          "verabschiedeten"
        ],
        why: "The budget does not approve anything, it <b>is approved</b>: you need participle II (passive), so <i>verabschiedete</i>. <i>verabschiedende</i> would be active, and <i>verabschiedeten</i> has the wrong ending: after <i>der</i> in the masculine singular nominative it is <b>-e</b>."
      },
      {
        q: "In a financial report: «Die ___ Umsätze lagen über den Erwartungen.» Which extended attribute is correct?",
        opts: [
          "im vierten Quartal erzielten",
          "im vierten Quartal erzielte",
          "erzielten im vierten Quartal"
        ],
        why: "The participle stands right before the noun and after plural <i>die</i> it takes <b>-en</b>: <i>die im vierten Quartal erzielten Umsätze</i>. <i>erzielte</i> has the wrong ending; in <i>erzielten im vierten Quartal</i> the complement comes after the participle, an order that works in English but not in German."
      },
      {
        q: "Fill in the participle II of prüfen with the right ending: «Die vom Ausschuss ___ Unterlagen werden archiviert.»",
        hint: "participle II of prüfen, plural after die",
        why: "<b>geprüften</b>: passive participle II (“the documents that have been checked”), with <b>-en</b> after plural <i>die</i>."
      },
      {
        q: "Fill in the participle I of gelten with the right ending: «Wir bitten um Beachtung der ___ Vorschriften.»",
        hint: "participle I of gelten, genitive plural after der",
        why: "<b>geltenden</b>: participle I (active, simultaneous: “the regulations in force”), <b>-en</b> in the genitive plural after <i>der</i>."
      },
      {
        q: "Complete the passage from a report with the participle II of ergreifen (or treffen) and the participle I of steigen.",
        tr: "The measures taken last year have not reduced the steadily rising costs.",
        why: "<i>ergriffenen</i> (or <i>getroffenen</i>): passive participle II, “the measures that were taken”. <i>steigenden</i>: participle I, because the increase is still going on. Both take <b>-en</b> after plural <i>die</i>."
      },
      {
        q: "Which sentences use a participle correctly as an attribute? (two answers)",
        opts: [
          "Die an der Sitzung teilnehmenden Mitglieder stimmten dem Antrag zu.",
          "Die am Dienstag eingereichten Unterlagen sind vollständig.",
          "Die einreichenden Unterlagen sind vollständig.",
          "Die eingereichte Unterlagen sind vollständig."
        ],
        why: "The first two are correct: active participle I (the members <i>who are taking part</i>) and passive participle II (the documents <i>that were submitted</i>). <i>einreichenden</i> would give the documents an active role, and <i>eingereichte</i> lacks the <b>-n</b> after plural <i>die</i>."
      },
      {
        q: "Put the words of a sentence from the minutes in order.",
        tr: "The decisions recorded in the minutes are binding on all departments.",
        why: "<i>Die im Protokoll festgehaltenen Beschlüsse sind für alle Abteilungen verbindlich.</i> The attribute <i>im Protokoll festgehaltenen</i> stays compact between <i>die</i> and <i>Beschlüsse</i>. <i>verbindlich für alle Abteilungen</i> and the inversion with <i>Für alle Abteilungen</i> in first position are also possible."
      },
      {
        q: "Translate using an extended attribute: «The results obtained in the second quarter were discussed at the meeting.» (das Quartal, das Ergebnis, erzielen, die Sitzung, besprechen)",
        why: "<i>Die im zweiten Quartal erzielten Ergebnisse wurden in der Sitzung besprochen.</i> The Perfekt passive (<i>sind ... besprochen worden</i>) and the inversion with <i>In der Sitzung</i> in first position are also accepted. The complement <i>im zweiten Quartal</i> goes before the participle."
      },
      {
        tr: "The decisions recorded in the minutes take effect immediately. The ongoing negotiations will be concluded in the fall and the increased costs continue to weigh on the budget.",
        why: "In <i>Protokoll</i> the stress falls on <b>koll</b>; in <i>Verhandlungen</i> the stress falls on <b>hand</b>; in <i>Haushalt</i> the stress falls on <b>Haus</b>."
      },
      {
        tr: "The revenue earned in the last quarter was higher than expected.",
        why: "In <i>Quartal</i> the stress falls on <b>tal</b>; in <i>Umsätze</i> the stress falls on <b>Um</b>; in <i>Erwartungen</i> the stress falls on <b>war</b>."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    theme: "Press releases, notices and reports",
    title: "Nominalization instead of a subordinate clause",
    objectives: [
      "turn a subordinate clause into a noun phrase with the right preposition",
      "choose between nach, wegen, bei, trotz, zu, infolge according to the logical relation",
      "use the genitive and the endings that follow these prepositions",
      "recognize the subordinate clause hidden in a noun phrase"
    ],
    theory: [
      {
        h: "From clause to noun",
        p: "In formal texts a subordinate clause can be compressed: the verb becomes a noun (<em>abschließen</em> → <em>der Abschluss</em>), the conjunction becomes a preposition, and the subject or object of the verb can move into a genitive (the agent may also be left out or expressed with <em>durch</em> or another construction). <em>Nachdem die Prüfung abgeschlossen ist, ...</em> → <em>Nach Abschluss der Prüfung ...</em>. The preposition depends on the <strong>logical relation</strong>: cause (<em>weil</em> → <em>wegen, aufgrund, infolge</em> + genitive), concession (<em>obwohl</em> → <em>trotz, ungeachtet</em> + genitive), condition (<em>wenn</em> → <em>bei</em> + dative), time (<em>nachdem</em> → <em>nach</em> + dative), purpose (<em>um ... zu</em> → <em>zu</em> + dative)."
      },
      {
        h: "What gets lost",
        p: "The noun phrase is compact but poorer: tense, mood and often the agent disappear. <em>Nach Abschluss der Prüfung</em> does not say who finished it or whether it is about the past or the future; you work that out from the context. That is why it works well when subject and tense are obvious, and badly when they are not (see lesson 3)."
      },
      {
        contrast: "English nominalizes too (<em>upon completion of the work</em>, <em>in case of need</em>, <em>for the clarification of open questions</em>), but it can also use an -ing form (<em>after completing the work</em>, <em>despite having been reminded</em>), which German does not have in this form. And where English links the nouns with <em>of</em> (<em>the clarification of open questions</em>), German uses a <strong>genitive with no preposition</strong>: <em>die Klärung offener Fragen</em>. The prepositions of cause and concession also take the genitive, with the endings that follow: <em>offener Fragen</em> without an article, <em>der gestiegenen Preise</em> with the article. English nouns and adjectives have no case endings (only pronouns keep forms like <em>he/him</em>), so every one of these has to be learned."
      },
      {
        trap: "A wrong preposition changes the logical relation: <em>Nach mehrfacher Mahnung blieb die Zahlung aus</em> says that the payment is missing <em>after</em> the reminders, while <em>Trotz mehrfacher Mahnung</em> says it is missing <em>despite</em> the reminders. Watch the cases too: <em>infolge</em> and <em>trotz</em> take the genitive (<em>Infolge der gestiegenen Preise</em>), not the dative; only where a genitive plural cannot be recognized does German switch to <em>von</em> (<em>infolge von Umbauten</em>). English does not mark case after prepositions, so the case each German preposition governs has to be learned with it: in formal writing these take the genitive."
      },
      {
        tip: "In front of a noun phrase, ask which conjunction is hiding in it: cause → <em>weil</em>, concession → <em>obwohl</em>, condition → <em>wenn</em>, time → <em>nachdem, bevor</em>, purpose → <em>um ... zu</em>. Then rewrite it as a subordinate clause and check that the meaning has not changed."
      }
    ],
    grammar: {
      title: "Nominalization instead of a subordinate clause",
      note: "The verb becomes a noun, the conjunction a preposition: <b>nach, bei, zu</b> + dative; <b>wegen, aufgrund, infolge, trotz</b> + genitive. Subject or object of the verb can become a genitive, but they do not have to.",
      table: {
        head: ["subordinate clause", "noun phrase", "example"],
        rows: [
          ["weil ... (cause)", "wegen, aufgrund, infolge + genitive", "Wegen der Verzögerung ..."],
          ["obwohl ... (concession)", "trotz, ungeachtet + genitive", "Trotz mehrfacher Mahnung ..."],
          ["wenn ... (condition)", "bei + dative", "Bei Bedarf ..."],
          ["nachdem ... (time)", "nach + dative", "Nach Abschluss der Prüfung ..."],
          ["um ... zu (purpose)", "zu + dative", "Zur Klärung offener Fragen ..."]
        ]
      },
      examples: [
        { tr: "After the audit is completed, the report will be published.", note: "nach + dative = nachdem; der Prüfung is the genitive that depends on Abschluss" },
        { tr: "Because of the delay in delivery, the date had to be postponed.", note: "wegen + genitive = weil" },
        { tr: "If necessary, further documents can be requested.", note: "bei + dative = wenn man es braucht" },
        { tr: "Despite repeated reminders, the payment did not arrive.", note: "trotz + genitive; mehrfacher: feminine genitive without an article" },
        { tr: "A meeting is being called to clarify the open questions.", note: "zu + dative = um ... zu klären; offener Fragen: genitive plural without an article" },
        { tr: "As a result of the rise in energy prices, demand fell.", note: "infolge + genitive: a cause that produces an effect" }
      ]
    },
    vocab: [
      "the completion, the end",
      "the delay",
      "the need, the requirement",
      "the reminder, the dunning letter",
      "the clarification",
      "the demand (in the market)",
      "to request, to ask for (documents)",
      "to convene, to call",
      "to fail to appear, to be missing",
      "to publish",
      "as a result of, owing to",
      "because of, on the basis of"
    ],
    exercises: [
      {
        q: "In a letter: «Obwohl mehrfach gemahnt wurde, blieb die Zahlung aus.» Which nominal version has the same meaning?",
        opts: [
          "Trotz mehrfacher Mahnung blieb die Zahlung aus.",
          "Nach mehrfacher Mahnung blieb die Zahlung aus.",
          "Wegen mehrfacher Mahnung blieb die Zahlung aus."
        ],
        why: "<i>obwohl</i> is concessive: <b>trotz</b> + genitive. <i>nach</i> would be a time relation (“after the reminders”) and <i>wegen</i> would make the reminders the cause of the missing payment."
      },
      {
        q: "In a press release. Which sentence is correct?",
        opts: [
          "Infolge der gestiegenen Energiepreise sank die Nachfrage.",
          "Infolge den gestiegenen Energiepreisen sank die Nachfrage.",
          "Infolge die gestiegenen Energiepreise sank die Nachfrage."
        ],
        why: "<i>infolge</i> takes the <b>genitive</b>: <i>der gestiegenen Energiepreise</i>, plural with an article and the ending <b>-en</b>. Dative and accusative are not allowed."
      },
      {
        q: "Which subordinate clause corresponds to «Bei Bedarf können weitere Unterlagen angefordert werden»?",
        opts: [
          "Wenn Bedarf besteht, können weitere Unterlagen angefordert werden.",
          "Weil weitere Unterlagen benötigt wurden, können sie angefordert werden.",
          "Obwohl weitere Unterlagen benötigt werden, können sie angefordert werden."
        ],
        why: "<i>bei Bedarf</i> expresses a <b>condition</b>: “if needed”. It corresponds to <i>wenn Bedarf besteht</i> (or <i>falls</i>). <i>weil</i> and <i>obwohl</i> would give a cause or a concession."
      },
      {
        q: "Fill in the concessive preposition: «___ mehrfacher Erinnerung ist die Zahlung nicht eingegangen.»",
        hint: "concessive preposition: “despite”",
        why: "<b>Trotz</b> (or the more formal <b>Ungeachtet</b>) + genitive: <i>mehrfacher Erinnerung</i>."
      },
      {
        q: "Fill in the adjective ending: «Zur Klärung ___ Fragen wird eine Sitzung einberufen.»",
        hint: "adjective “offen” in the genitive plural, without an article",
        why: "<b>offener</b>: after <i>zu</i> comes the dative (<i>zur Klärung</i>), but <i>Fragen</i> depends on <i>Klärung</i> and is a genitive plural without an article, so the adjective takes <b>-er</b>."
      },
      {
        q: "Complete the press release with the two prepositions.",
        tr: "Because of the delay in delivery, the date had to be postponed. If necessary, a new date will be agreed.",
        why: "<i>Wegen</i> (or <i>Aufgrund</i>, <i>Infolge</i>) + genitive for the cause. <i>Bei Bedarf</i> for the condition (“if needed”); <i>Nach Bedarf</i> means “as needed”, a different meaning."
      },
      {
        q: "Match each expression with its meaning.",
        pairs: [
          "as a result of, owing to",
          "despite",
          "if necessary",
          "in view of, given that"
        ]
      },
      {
        q: "Put the words of the invitation in order.",
        tr: "A meeting is being called to clarify the open questions.",
        why: "<i>Zur Klärung offener Fragen wird eine Sitzung einberufen.</i> The noun phrase with <i>zur</i> opens the sentence and the finite verb is in second position. <i>Eine Sitzung wird zur Klärung offener Fragen einberufen</i> is also fine."
      },
      {
        q: "Translate in nominal style: «If necessary, further documents can be requested.» (der Bedarf, die Unterlagen, anfordern)",
        why: "<i>Bei Bedarf können weitere Unterlagen angefordert werden.</i> The position of <i>bei Bedarf</i> after the subject and the form with <i>man</i> are accepted."
      },
      {
        tr: "After the audit is completed, the report will be published. If necessary, further documents can be requested. For clarification of the open questions, the project management is happy to be available.",
        why: "In <i>Abschluss</i> the stress falls on <b>Ab</b>; in <i>veröffentlicht</i> the stress falls on <b>öf</b>; in <i>Klärung</i> the stress falls on <b>Klä</b>."
      },
      {
        tr: "Despite repeated reminders the payment has not arrived.",
        why: "In <i>mehrfacher</i> the stress falls on <b>mehr</b>; in <i>Erinnerung</i> the stress falls on <b>in</b>; in <i>eingegangen</i> the stress falls on <b>ein</b>."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    theme: "Readability and precision",
    title: "When the subordinate clause stays",
    objectives: [
      "recognize the cases where nominalization is not a good idea",
      "keep the subordinate clause when there are several subjects or several conditions",
      "express modal nuances with the subordinate clause (sollte, falls ... sollten)",
      "choose between the compact form and the subordinate clause with the reader in mind"
    ],
    theory: [
      {
        h: "The four cases where the subordinate clause stays",
        p: "The compact form is not always the best. The subordinate clause is preferable when: (1) <strong>there is no suitable noun</strong> or the noun sounds unnatural; (2) there are <strong>several subjects</strong> or several predicates, and the noun phrase would hide who does what: <em>weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß</em>; (3) you need a <strong>modal nuance</strong> or a degree of probability (<em>sollte, könnte, offenbar</em>), which a noun phrase often cannot carry; a necessary condition such as <em>nur dann ..., wenn</em>, on the other hand, often has a nominal form too (<em>nur bei repräsentativer Stichprobe</em>); (4) <strong>readability</strong> suffers, for example with several genitives and complements in a row."
      },
      {
        h: "How to choose",
        p: "Before nominalizing, ask four questions. Is it clear who is acting, even in noun form? Is there a natural noun (<em>Abschluss, Klärung</em>)? Can I drop tense and mood without losing anything? Will the reader get it on the first reading? If the answer is yes to every question, the compact form works (<em>Nach Abschluss der Prüfung ...</em>); otherwise the subordinate clause is clearer, and in texts for a non-specialist audience it almost always is."
      },
      {
        contrast: "English has compact tools such as <em>after completing the review</em>, <em>once the work is finished</em>, <em>should the review take longer</em>. German has equivalents for some of them: a subordinate clause with <em>sobald</em> for <em>once the work is finished</em>, and <em>Sollte die Prüfung länger dauern, ...</em> for <em>should the review take longer</em>; it has no -ing form, and the infinitive with <em>ohne zu</em> or <em>um ... zu</em> usually has the subject of the main clause as its implicit subject, though it can be an object (<em>Ich bitte dich, früher zu kommen</em>); when the referent is not clear from the context, a subordinate clause (often with <em>dass</em> or <em>weil</em>, but not always) is the usual choice. German <em>sollte</em> at the start of the clause behaves like English inverted <em>should</em>, with no <em>if</em>."
      },
      {
        trap: "Do not nominalize everything just because it “sounds formal”: the result is office German that is hard to read, and a phrase with a preposition like <em>seitens der Teilnehmenden</em> does name the participants, but it makes the sentence heavy and distances the agent from the action. And <em>sollte</em> in first position is not the “should” of obligation: <em>Sollte die Prüfung länger dauern</em> means “if the review should happen to take longer”, a hypothetical condition. English speakers tend to read <em>sollte</em> as “ought to” and miss that it is the conditional."
      },
      {
        tip: "Read the sentence aloud. If you have to catch your breath in the middle of a noun phrase, because there are two genitives and a <em>durch</em>, break it into a subordinate clause."
      }
    ],
    grammar: {
      title: "Compact form or subordinate clause",
      note: "Compact form: natural noun, obvious tense; it is clearer when the agent is obvious too, but the subjects of the two clauses need not coincide. Subordinate clause: several subjects, no suitable noun, modal nuance, genitives in a row. For a possibility: <i>Sollte ..., falls ... sollten</i>.",
      table: {
        head: ["situation", "choice", "example"],
        rows: [
          ["natural noun, obvious agent and tense", "compact form", "Nach Abschluss der Prüfung ..."],
          ["two subjects or several predicates", "subordinate clause", "..., weil der Vorsitzende erkrankt war und die Referentin festsaß."],
          ["modal nuance or probability", "subordinate clause with sollte", "Sollte die Prüfung länger dauern, ..."],
          ["several conditions together", "subordinate clause", "..., wenn der Vorstand zugestimmt hat und die Finanzierung gesichert ist."],
          ["genitives and complements in a row", "subordinate clause", "..., nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten."]
        ]
      },
      examples: [
        { tr: "The meeting was postponed because the chair was ill and the speaker was stranded abroad.", note: "two subjects: the noun form would hide one of them" },
        { tr: "The contract will be signed only when the board has approved it and the financing is secured.", note: "two conditions with different verbs: subordinate clause" },
        { tr: "Should the review take longer, the date will be postponed.", note: "Sollte in first position: a hypothetical condition" },
        { tr: "The funding lapses if the general conditions should change.", note: "falls ... ändern sollten: modal nuance" },
        { tr: "The results are informative only if the sample is representative.", note: "nur dann ..., wenn: a necessary condition; a noun phrase with bei can sometimes carry it too (nur bei einer repräsentativen Stichprobe)" },
        { tr: "The evaluation began after the participants had filled in the questionnaire.", note: "temporal subordinate clause in the pluperfect: more readable than a chain of genitives" }
      ]
    },
    vocab: [
      "the comprehensibility",
      "the prerequisite, the requirement",
      "the general condition, the framework condition",
      "the sample (statistical)",
      "the chair (of a meeting)",
      "the applicant",
      "to let lapse, to miss (a deadline)",
      "to lapse, to be dropped",
      "to approve, to give consent",
      "to reject, to turn down",
      "informative, meaningful",
      "representative"
    ],
    exercises: [
      {
        q: "In the minutes: «Die Sitzung wurde verschoben, weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß.» Why is it better to keep the subordinate clause here?",
        opts: [
          "There are two different subjects, each with its own predicate: in noun form one of the two actors would disappear or the sentence would become heavy",
          "Because a cause can never be expressed with a noun phrase",
          "Because the past tense (war, festsaß) cannot be expressed with a noun"
        ],
        why: "A cause can be nominalized (<i>wegen</i> + genitive), but here there are <b>two</b> facts with different subjects: the noun form would compress them heavily or lose one. The other two statements are false."
      },
      {
        q: "«Sollte die Prüfung länger dauern, wird der Termin verschoben.» What does the nominal version «Bei längerer Dauer der Prüfung wird der Termin verschoben» make less explicit?",
        opts: [
          "the hypothetical nuance (“should it happen to”) expressed by sollte",
          "the conditional value of the sentence",
          "the subject, because Prüfung disappears"
        ],
        why: "<i>bei</i> keeps the <b>condition</b>, and <i>Prüfung</i> is still in the text; the nominal version can also describe a possible case. What becomes less explicit is the hypothetical marking of <i>sollte</i> (“should it happen to”), which the noun phrase leaves to context."
      },
      {
        q: "In a report for a non-specialist audience, which wording is the most readable?",
        opts: [
          "Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten, den die Projektleitung entwickelt hatte.",
          "Die Auswertung begann nach dem Ausfüllen des von der Projektleitung entwickelten Fragebogens durch die Teilnehmenden.",
          "Die Auswertung begann nach Ausfüllung des durch die Projektleitung entwickelten Fragebogens seitens der Teilnehmenden."
        ],
        why: "All three sentences are grammatical, but in the last two the reader has to hold together a genitive, an extended participle and an agent phrase (<i>durch, seitens</i>) before reaching the meaning. The subordinate clause says <b>who does what</b> in two steps."
      },
      {
        q: "Fill in: «Die Ergebnisse sind nur dann aussagekräftig, ___ die Stichprobe repräsentativ ist.»",
        hint: "conditional conjunction",
        why: "<b>wenn</b>: <i>nur dann ..., wenn</i> expresses a necessary condition. A noun phrase is possible too (<i>nur bei einer repräsentativen Stichprobe</i>), but the clause with <i>wenn</i> states the condition more explicitly."
      },
      {
        q: "Fill in the modal verb: «Falls sich die Rahmenbedingungen ändern ___, entfällt die Förderung.»",
        hint: "Konjunktiv II of a modal: a hypothetical condition",
        why: "<b>sollten</b>: <i>falls ... sollten</i> signals a hypothetical condition (“should it happen that”), a nuance that a noun phrase usually cannot render."
      },
      {
        q: "Complete the two conditions of a contract.",
        tr: "The contract will be signed only when the board has approved it and the financing is secured.",
        why: "<i>wenn</i> for the first condition (<i>sobald</i> and <i>nachdem</i> would express a time relation, not a condition), <i>ist</i> for the second: <i>die Finanzierung gesichert ist</i>. Two conditions with different subjects are a good reason to keep the subordinate clause."
      },
      {
        q: "In which cases is it better to keep the subordinate clause? (two answers)",
        opts: [
          "when the subjects are two different people and the noun would hide who is acting",
          "when a modal nuance such as sollte, könnte, offenbar is needed",
          "every time the text is an official record",
          "every time the sentence contains a verb"
        ],
        why: "The two criteria are multiple subjects and a modal nuance. An official record allows nominal style (in fact it likes it), and the fact that a sentence has a verb says nothing about the choice."
      },
      {
        q: "Put the words of the sentence in order.",
        tr: "The evaluation began after the participants had filled in the questionnaire.",
        why: "<i>Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten.</i> In the subordinate clause the finite verb (<i>hatten</i>) goes at the end. The subordinate clause in first position, with <i>begann</i> right after the comma, is also accepted."
      },
      {
        q: "Translate, keeping the possibility: «Should the committee reject the application, the deadline will be extended.» (der Ausschuss, der Antrag, ablehnen, die Frist, verlängern)",
        why: "<i>Sollte der Ausschuss den Antrag ablehnen, wird die Frist verlängert.</i> <i>falls</i> and <i>wenn</i> (with or without <i>sollte</i>) and the form without a conjunction <i>Lehnt der Ausschuss den Antrag ab, ...</i> are also accepted."
      },
      {
        tr: "The meeting was postponed because the chair was ill and the speaker was stranded abroad. Should the review take longer, the date will be set again.",
        why: "In <i>Vorsitzende</i> the stress falls on <b>Vor</b>; in <i>Referentin</i> the stress falls on <b>ren</b>; in <i>Ausland</i> the stress falls on <b>Aus</b>."
      },
      {
        tr: "Should the review take longer, the date will be postponed.",
        why: "In <i>Prüfung</i> the stress falls on <b>Prü</b>; in <i>dauern</i> the stress falls on <b>dau</b>; in <i>verschoben</i> the stress falls on <b>scho</b>."
      }
    ]
  },
  "lesson:c1-u05-test": {
    theme: "Review",
    title: "Test: Work completed",
    objectives: [
      "check the unit and review the functions of werden and the Futur of supposition from the level"
    ],
    theory: [
      {
        p: "Twelve questions on the unit and on the review of the level (werden and the Futur II of supposition). You pass with 70%. Do not look back at the lessons while answering: if you do not remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "The plant has been down for hours. Complete the supposition about the past: «Die Anlage wird wohl ausgefallen ___.»",
        hint: "Futur II: auxiliary of ausfallen",
        why: "<b>sein</b>: <i>ausfallen</i> is a verb of change of state and takes <i>sein</i> in the Perfekt; the Futur II of supposition is <i>wird ... ausgefallen sein</i>, “it must have broken down”."
      },
      {
        q: "Fill in: «Die Verhandlungen sind erst im Mai abgeschlossen ___.»",
        hint: "participle of werden in the passive",
        why: "<b>worden</b>: <i>worden</i> is the participle of <i>werden</i> used as the auxiliary of the passive; <i>geworden</i> is used when <i>werden</i> is the full verb, “to become”."
      },
      {
        q: "Fill in the participle I of stehen with the right ending: «Die uns zur Verfügung ___ Mittel reichen nicht aus.»",
        hint: "participle I of stehen, plural after die",
        why: "<b>stehenden</b>: <i>die uns zur Verfügung stehenden Mittel</i>, “the funds available to us”. Active, simultaneous participle I, with <b>-en</b> after plural <i>die</i>."
      },
      {
        q: "Fill in the preposition: «___ Rücksprache mit dem Vorstand kann der Vertrag nicht geändert werden.»",
        hint: "preposition: “without”",
        why: "<b>Ohne</b> + accusative: <i>ohne Rücksprache</i> is the noun version of <i>ohne dass man sich mit dem Vorstand bespricht</i>."
      },
      {
        q: "In an internal email: «Er wird jetzt im Meeting sein.» What does werden express?",
        opts: [
          "a supposition about the present",
          "a future",
          "a passive"
        ],
        why: "<i>werden</i> + infinitive with <i>jetzt</i> is a <b>supposition</b> about the present: “he'll be in a meeting right now”. Without <i>jetzt</i> or <i>wohl</i> it could also be read as a future."
      },
      {
        q: "Which phrase corresponds to «die Anträge, die gerade bearbeitet werden»?",
        opts: [
          "die gerade bearbeiteten Anträge",
          "die gerade bearbeitenden Anträge",
          "die gerade bearbeitete Anträge"
        ],
        why: "It is a passive in progress: you need participle II, <i>bearbeiteten</i>, with <b>-en</b> after plural <i>die</i>. <i>bearbeitenden</i> would give the applications an active role; <i>bearbeitete</i> has the wrong ending."
      },
      {
        q: "Which subordinate clause corresponds to «Trotz Erkrankung des Referenten fand die Tagung statt»?",
        opts: [
          "Obwohl der Referent erkrankt war, fand die Tagung statt.",
          "Weil der Referent erkrankt war, fand die Tagung statt.",
          "Nachdem der Referent erkrankt war, fand die Tagung statt."
        ],
        why: "<i>trotz</i> is concessive: <i>obwohl</i>. <i>weil</i> and <i>nachdem</i> would change the logical relation."
      },
      {
        q: "Which sentences use a participle correctly as an attribute? (two answers)",
        opts: [
          "Die zur Verfügung gestellten Mittel sind begrenzt.",
          "Die auf der Sitzung getroffenen Entscheidungen gelten sofort.",
          "Die getroffene Entscheidungen gelten sofort.",
          "Die zur Verfügung stellenden Mittel sind begrenzt."
        ],
        why: "The first two are correct: passive participle II with <b>-en</b> after <i>die</i>. <i>getroffene</i> lacks the <b>-n</b>; <i>stellenden</i> would give the funds an active role (“the funds that provide”)."
      },
      {
        q: "Complete the notice with the participle II of planen (or vorsehen) and the preposition.",
        tr: "We will inform you in good time. The measures we have planned (or envisaged) will only take effect after the audit is completed.",
        why: "<i>geplanten</i> (or <i>vorgesehenen</i>): passive participle II with <b>-en</b>. <i>nach</i>: <i>nach Abschluss der Prüfung</i>, time with <i>nach</i> + dative, “after the completion”."
      },
      {
        q: "Translate: «The decisions made at the meeting will be announced after the audit is completed.» (die Sitzung, die Entscheidung, mitteilen, der Abschluss, die Prüfung)",
        why: "<i>Die in der Sitzung getroffenen Entscheidungen werden nach Abschluss der Prüfung mitgeteilt.</i> <i>werden ... mitgeteilt</i> is a present passive that refers to the future through context (<i>nach Abschluss</i>); the explicit future passive <i>werden ... mitgeteilt werden</i> is also accepted, as is the sentence beginning with <i>Nach Abschluss der Prüfung</i>."
      },
      {
        tr: "He will have finished the report by Friday. The decisions recorded in the minutes will be implemented after the audit is completed.",
        why: "In <i>Beschlüsse</i> the stress falls on <b>schlüs</b>; in <i>umgesetzt</i> the stress falls on <b>um</b>."
      },
      {
        tr: "The increased costs will continue to weigh on the budget.",
        why: "In <i>gestiegenen</i> the stress falls on <b>stie</b>; in <i>belasten</i> the stress falls on <b>las</b>; in <i>Haushalt</i> the stress falls on <b>Haus</b>."
      }
    ]
  }
});
