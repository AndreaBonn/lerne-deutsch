/* ============================================================
   Learner-language text (en) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "conv:cafe-bestellen": {
    title: "At the café",
    setting: "Saturday morning, a café in Berlin. You order a drink and, depending on what you choose, the bill changes.",
    closing: "The bill was right: three euros without cake, six with it. A choice shows at the end.",
    turns: [
      { tr: "Good day! What would you like to drink?" },
      { task: "Choose what to order to drink.", opts: [
        { tr: "A coffee, please." },
        { tr: "A tea, please." }
      ] },
      { tr: "A coffee, coming right up." },
      { tr: "A tea, coming right up." },
      { tr: "And what is your name, please?" },
      { task: "Say what your name is.", tr: "My name is Anna." },
      { tr: "Thank you. Would you like a piece of cake as well?" },
      { task: "Decide whether you want cake.", opts: [
        { tr: "Yes, a piece of apple cake, please." },
        { tr: "No, thank you." }
      ] },
      { tr: "Certainly. The cake is very fresh. That comes to six euros." },
      { tr: "Fine. That comes to three euros." },
      { task: "Hand over the money.", tr: "Here you are." },
      { tr: "Thank you very much! Goodbye." },
      { task: "Say goodbye and leave.", tr: "Goodbye!" }
    ]
  }
});
