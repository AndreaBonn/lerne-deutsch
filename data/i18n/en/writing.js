/* Writing tasks - briefs and checklists in English.
   The model text lives in the neutral layer. */
LINGUAI.addStrings("en", {

  "write:w-a1-vorstellung": {
    title: "Introducing myself",
    brief: "Write a short German text introducing yourself: what your name is, where you come from and where you live now. You can add your age, your job or a hobby.",
    checklist: ["Is the conjugated verb in second position in every main clause?", "Did you capitalise every noun?", "Did you open with a greeting such as Hallo or Guten Tag?"]
  },
  "write:w-a2-gestern": {
    title: "What did you do yesterday?",
    brief: "Translate the sentences into German. You do not have to match them word for word. Where English uses the simple past (I went, we ate), spoken German usually uses the Perfekt.",
    checklist: ["Did you pick the right auxiliary? gehen, ankommen and aufstehen take sein; essen and verstehen take haben. English uses have for all of them, so this is the choice to watch.", "Is the participle at the very end of the sentence, not right after the auxiliary as in English?", "With separable verbs, does ge- go inside the word: angekommen, aufgestanden?"],
    items: [{ q: "Yesterday I went to the movies." }, { q: "We ate a schnitzel." }, { q: "I didn't understand the question." }, { q: "The train arrived late." }, { q: "I got up late." }]
  },
  "write:w-b1-absage": {
    title: "Canceling an appointment",
    brief: "Write a short formal email: you cancel an appointment, briefly give the reason and suggest another date.",
    checklist: ["Did you stay with Sie from start to finish, with Ihnen and Ihr capitalized?", "After Sehr geehrte Frau ... comes a comma, and the next line starts with a lowercase letter. Did you avoid the colon and the capital of an American business letter?", "Is the new date concrete: a day and a time of day?"]
  },
  "write:w-b1-meinung": {
    title: "Saying what you think",
    brief: "Translate the sentences into German.",
    checklist: ["After dass, did the conjugated verb move to the end of the clause?", "English can drop that (I think it's a good idea). German can drop dass too, but then the verb goes back to second position: ich glaube, das ist eine gute Idee. Did you keep the two patterns apart?", "Did you put a comma before dass? German requires it; English puts none before that."],
    items: [{ q: "I think it's a good idea." }, { q: "I don't agree with you." }, { q: "In my opinion it's too expensive." }, { q: "It seems to me that he's right." }, { q: "It depends on what you want." }]
  },
  "write:w-b2-argumentieren": {
    title: "Defending a position",
    brief: "Pick a topic you care about, for example working from home, a general speed limit on German autobahns or stores opening on Sundays, and argue your position. State at least one opposing argument and answer it.",
    checklist: ["Is the opposing argument stated fairly, not as a straw man?", "After außerdem, deshalb or jedoch at the start of a sentence, does the verb come next (Deshalb liegt das Problem ...)? After therefore, English keeps the subject first; German does not.", "Is the conclusion a sentence rather than a slogan?"]
  },
  "write:w-c1-zusammenfassung": {
    title: "Summarizing without copying",
    brief: "Summarize the text “Your Attention Is Requested” in the Reading and listening section. Do not reuse its sentences: write what the author claims and what the claim rests on, and report the author's claims in indirect speech.",
    checklist: ["Did you report the author's claims with Konjunktiv I (sei, nenne, gebe)? The mood only marks the claim as the author's, without adding doubt or disagreement. English has no such form and relies on words like according to the author, or on shifting the tense back.", "Can the summary be understood without the original?", "Did your own opinion stay out, or did it take the place of the author's?"]
  }

});
