/* ============================================================
   Learner-language text (en) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "conv:cafe-bestellen": {
    title: "At the café",
    setting: "Saturday morning, a café in Berlin. You order a drink and maybe some cake: one of your choices changes the bill.",
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
      { task: "Say that your name is Anna.", tr: "My name is Anna." },
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
  },
  "conv:sich-vorstellen": {
    title: "The first day of class",
    setting: "A German class at the Volkshochschule, the local adult education center. Before the lesson someone sits down next to you.",
    closing: "Classmates say du to each other from the very first sentence. And German drops the article before a job, where English says \"a\": \"Ich bin Lehrerin\" is \"I am a teacher\". The article comes back with an adjective: \"Ich bin eine gute Lehrerin\".",
    turns: [
      { tr: "Hi! Is this seat free?" },
      { task: "Say yes and invite him to sit down.", tr: "Yes, sure! Have a seat." },
      { tr: "Thanks. I'm Jonas. And what's your name?" },
      { task: "Say what your name is (Anna).", tr: "My name is Anna." },
      { tr: "Nice to meet you! Where are you from?" },
      { task: "Say that you come from Italy.", tr: "I'm from Italy." },
      { tr: "Oh, nice! And what do you do for a living?" },
      { task: "Say that you are a teacher.", tr: "I'm a teacher." }
    ]
  },
  "conv:wochenmarkt": {
    title: "At the farmers' market",
    setting: "Saturday morning, the weekly market on the town square. The vendor greets you from behind the crates of vegetables.",
    closing: "Three sentences get you through the market: \"Ich hätte gern…\", \"Was kosten…?\" and \"Was macht das zusammen?\".",
    turns: [
      { tr: "Good morning! What can I get you? The tomatoes are especially good today." },
      { task: "Ask for a kilo of tomatoes.", tr: "A kilo of tomatoes, please." },
      { tr: "Here you go, a kilo of tomatoes, that's four euros fifty. Anything else? The apples are on sale today." },
      { task: "Ask how much the apples are.", tr: "How much are the apples?" },
      { tr: "Two euros a kilo. They're nice and sweet." },
      { task: "Say that's all and ask how much it comes to.", tr: "Thanks, that's all. How much does that come to?" },
      { tr: "Four euros fifty, please. Thank you, and have a nice weekend!" }
    ]
  },
  "conv:im-restaurant": {
    title: "Dinner at a restaurant",
    setting: "Evening, a German restaurant, no reservation. The waiter comes over to you at the entrance.",
    closing: "You address the waiter with Sie. \"Ich nehme…\" works like \"I'll have…\" and is the simplest way to order. In Germany the check doesn't come on its own: you ask for it.",
    turns: [
      { tr: "Good evening! Do you have a reservation?" },
      { task: "Say no and ask whether there's a table for two.", tr: "No. Do you have a table for two?" },
      { tr: "Yes, of course. Please have a seat, here's the menu. What would you like to drink?" },
      { task: "Order a bottle of sparkling water and a glass of red wine.", tr: "A bottle of sparkling water and a glass of red wine, please." },
      { tr: "Certainly. And what would you like as an appetizer?" },
      { task: "Order the goulash soup and ask whether it's spicy.", tr: "I'll have the goulash soup. Is it spicy?" },
      { tr: "Just a little, it's seasoned with paprika. Would you like a main course afterwards as well?" },
      { task: "Politely say no and ask for the check for later.", tr: "No, thank you. And the check later, please." }
    ]
  },
  "conv:fahrkarte-kaufen": {
    title: "At the travel center",
    setting: "A Deutsche Bahn Reisezentrum, the ticket office at the station. It's your turn at the counter.",
    closing: "The Sparpreis is a discounted fare, but it comes with Zugbindung: the ticket is only valid on the train you booked.",
    turns: [
      { tr: "Next, please. What can I do for you?" },
      { task: "Ask for a ticket to Hamburg for this afternoon.", tr: "A ticket to Hamburg for this afternoon, please." },
      { tr: "On the ICE or on the Regionalexpress? The ICE is faster, but more expensive." },
      { task: "Ask how much the ICE costs.", tr: "How much is the ICE?" },
      { tr: "There's still a Sparpreis fare today: twenty-nine ninety-nine in second class." },
      { task: "Take it and ask which track it leaves from.", tr: "Good, I'll take it. Which track does it leave from?" },
      { tr: "From track seven, in twenty minutes. With the Sparpreis your ticket is tied to the train: you may only take this one." }
    ]
  },
  "conv:beim-arzt": {
    title: "At the doctor's office",
    setting: "A doctor's office. At the front desk you showed your health insurance card (Versichertenkarte); now you're in with the doctor.",
    closing: "At the doctor's you say what's wrong with \"Ich habe…\", you hear \"Seit wann?\", and you ask \"Wie oft am Tag?\". For something that started in the past and is still going on, German uses seit with the present tense, where English says \"I've had a fever for three days\": \"Ich habe seit drei Tagen Fieber\". And seit takes the dative: seit drei Tagen.",
    turns: [
      { tr: "Hello, please have a seat. What seems to be the problem?" },
      { task: "Say that you have a sore throat and a fever.", tr: "I have a sore throat and a fever." },
      { tr: "How long have you had these symptoms?" },
      { task: "Say that you've had them for three days.", tr: "For three days." },
      { tr: "Are you allergic to any medication?" },
      { task: "Say that you don't have any allergies.", tr: "No, I don't have any allergies." },
      { tr: "I'll write you a prescription for an antibiotic. Get some rest and drink plenty of fluids." },
      { task: "Ask how many times a day you have to take it.", tr: "How many times a day do I have to take it?" },
      { tr: "Three times a day, after meals, for seven days. Get well soon!" }
    ]
  },
  "conv:wohnungsbesichtigung": {
    title: "The apartment viewing",
    setting: "The landlady is showing you a one-bedroom apartment. You have ten minutes and a lot of questions.",
    closing: "In Germany you always ask about the Kaltmiete (the base rent, without the additional costs), the Nebenkosten (the additional costs: building upkeep, water, trash and usually heating) and the Kaution (the security deposit). To say \"I'll get back to you\" German uses sich melden, with bei + dative for the person: \"Ich melde mich bei Ihnen\".",
    turns: [
      { tr: "So, this is the two-room apartment. As you can see, it's bright and newly renovated." },
      { task: "Ask how much the rent is without additional costs.", tr: "How much is the base rent?" },
      { tr: "Eight hundred euros a month, not including additional costs." },
      { task: "Ask how much the additional costs are.", tr: "And how much are the additional costs?" },
      { tr: "About a hundred and forty euros a month, heating included." },
      { task: "Ask whether the lease is for a fixed term and how much the deposit is.", tr: "Is the lease for a fixed term? And how much is the deposit?" },
      { tr: "No, it's open-ended. The deposit is three months' base rent; the law doesn't allow more than that." },
      { task: "Say that you'll think it over and get back to her tomorrow.", tr: "I'll think it over and get back to you tomorrow." }
    ]
  }
,
  "conv:vorstellungsgespraech": {
    title: "The job interview",
    setting: "A marketing agency in Hamburg. The HR manager opens with the classic question.",
    closing: "In an interview you speak in concrete terms. Watch the verb after weil: it moves to the end of the clause, where English \"because\" leaves it in place: \"Weil mich Ihre Projekte interessieren\".",
    turns: [
      { tr: "So, tell me a little about yourself." },
      { task: "Say your name (Anna) and that you have five years of experience in online marketing.", tr: "My name is Anna and I have five years of experience in online marketing." },
      { tr: "And why did you apply to us in particular?" },
      { task: "Say that you're very interested in their international projects.", tr: "Because I'm very interested in your international projects." },
      { tr: "What would you say is your greatest weakness?" },
      { task: "Say that you often want to control everything yourself, but you're learning to delegate.", tr: "I often want to control everything myself, but I'm learning to delegate tasks." },
      { tr: "Good. Do you have any questions for us?" },
      { task: "Ask how the team is made up and what the next steps are.", tr: "Yes: how is the team made up, and what are the next steps?" }
    ]
  },
  "conv:buergeramt": {
    title: "At the citizens' office",
    setting: "The Bürgeramt in your new city. You've just moved and have to register your address (Anmeldung), which everyone living in Germany is required to do.",
    closing: "For the Anmeldung you need an ID and the Wohnungsgeberbestätigung, a form signed by your landlord confirming you moved in. The Meldebescheinigung is the certificate you get in return, and you'll be asked for it again and again: at the bank, at work, at the tax office.",
    turns: [
      { tr: "Number two hundred fourteen, counter three, please. Hello, what can I do for you?" },
      { task: "Say that you want to register your address.", tr: "I'd like to register my address." },
      { tr: "Do you have your passport, the landlord's confirmation and the completed registration form with you?" },
      { task: "Say that you have the passport and the confirmation, but not the form.", tr: "I have the passport and the confirmation, but not the form." },
      { tr: "No problem, I'll give you a form. Please fill it out in block letters." },
      { task: "Ask how long it takes to get the registration certificate.", tr: "How long does it take until I get the registration certificate?" },
      { tr: "You get it right away, here at the counter." }
    ]
  },
  "conv:diskussion": {
    title: "A discussion among friends",
    setting: "A beer after work. A friend brings up working from home.",
    closing: "To half agree: \"Teilweise gebe ich dir recht\", literally \"partly I give you right\". To disagree firmly: \"Da bin ich überhaupt nicht deiner Meinung\". And abhängen takes von, which fuses into davon: \"Das hängt davon ab, wie…\".",
    turns: [
      { tr: "I think working from home has killed team spirit. How do you see it?" },
      { task: "Partly agree, but say that it has also cut the stress of commuting.", tr: "You're partly right, but it has also reduced the stress of commuting." },
      { tr: "Sure, but don't you think young people learn less when they aren't in the office?" },
      { task: "Say that it depends on how the company organizes onboarding.", tr: "That depends on how the company organizes onboarding." },
      { tr: "You've got a point there. But for me the hybrid model is the worst of both worlds." },
      { task: "Disagree strongly: with the hybrid model you can decide based on the task.", tr: "I don't agree with you at all: with the hybrid model you can decide based on the task." }
    ]
  },
  "conv:restaurant-entscheidungen": {
    title: "At the table, with a few decisions",
    setting: "Friday night, a German restaurant. Your choices change the table, the dish and, in the end, the check.",
    closing: "The check remembers your choices: twenty-four euros with the strudel, twenty-one with the coffee.",
    turns: [
      { tr: "Good evening. Do you have a reservation?" },
      { task: "Say whether you have a reservation or not.", opts: [
        { tr: "Yes, under the name Weber." },
        { tr: "No, there are two of us. Do you still have a table free?" }
      ] },
      { tr: "Very good. Your table is by the window. This way, please." },
      { tr: "There's still a table for two, all the way at the back. Here you are." },
      { tr: "Here's the menu. Would you like to order something to drink already?" },
      { task: "Order a bottle of still water.", tr: "A bottle of still water, please." },
      { tr: "Still water, coming right up. And what would you like to eat?" },
      { task: "Choose what to eat.", opts: [
        { tr: "The schnitzel for me, please." },
        { tr: "The vegetable skillet for me, please. I don't eat meat." }
      ] },
      { tr: "The schnitzel is very good today, freshly breaded." },
      { tr: "Sure. The vegetables for it come from the market next door." },
      { tr: "Would you like a dessert to finish? The apple strudel is homemade." },
      { task: "Decide whether to have dessert.", opts: [
        { tr: "Yes, the apple strudel, please." },
        { tr: "No, thank you. Just a coffee, please." }
      ] },
      { tr: "Good choice, coming right up." },
      { tr: "A coffee, certainly." },
      { tr: "Here's the check: main course, water and apple strudel. That comes to twenty-four euros." },
      { tr: "Here's the check: main course, water and coffee. That comes to twenty-one euros." },
      { task: "Ask whether you can pay by card.", tr: "Can I pay by card?" },
      { tr: "Of course, here's the card reader. Thank you very much, and have a nice evening!" }
    ]
  },
  "conv:zug-verpasst": {
    title: "At the counter, after a missed train",
    setting: "You have a Sparpreis ticket (a discounted fare valid only on the train you booked) to Cologne, but your 9:20 ICE left without you, or didn't leave at all. You go to the Deutsche Bahn counter.",
    closing: "The Sparpreis train restriction is lifted if your train is canceled, not if you miss it. Missing a train is verpassen; missing a person is vermissen, a different verb. And a canceled train fällt aus: \"Mein Zug ist ausgefallen\".",
    turns: [
      { tr: "Hello, how can I help you?" },
      { task: "Explain what happened to your train.", opts: [
        { tr: "I missed the nine-twenty ICE to Cologne." },
        { tr: "My ICE to Cologne was canceled." }
      ] },
      { tr: "Unfortunately your Sparpreis is only valid on the train you booked. You need a new ticket." },
      { tr: "The next ICE to Cologne leaves at eleven-forty. The ticket costs thirty-nine ninety-nine." },
      { tr: "I'm sorry. When a train is canceled, you may take a different train." },
      { tr: "The next ICE to Cologne leaves at eleven-forty. You don't pay anything extra." },
      { task: "Take the 11:40 train or ask whether there's anything earlier.", opts: [
        { tr: "All right, then I'll take the eleven-forty train." },
        { tr: "Isn't there anything earlier?" }
      ] },
      { tr: "All right. It leaves from track seven." },
      { tr: "The only earlier one is an Intercity at ten-fifteen, but you have to change trains once." },
      { task: "Take the Intercity or wait for the ICE.", opts: [
        { tr: "I don't mind, I'll take the Intercity." },
        { tr: "Then I'd rather wait for the eleven-forty ICE." }
      ] },
      { tr: "Intercity at ten-fifteen, track three." },
      { tr: "I'll print out the connection for you. Have a good trip!" },
      { task: "Say thank you and goodbye.", tr: "Thanks a lot, have a nice day!" },
      { tr: "Goodbye." }
    ]
  },
  "conv:wohnung-ansehen": {
    title: "Looking at an apartment",
    setting: "A real estate agent is showing you a studio apartment. What you say decides whether you talk about price or dates.",
    closing: "In a comparison als means \"than\", and in the clause that follows it the conjugated verb goes to the end: \"kleiner, als es auf den Fotos aussah\". And to give an answer later: \"Ich sage Ihnen Bescheid\", \"I'll let you know\".",
    turns: [
      { tr: "So, this is the living room. What do you think?" },
      { task: "Say what you think of it.", opts: [
        { tr: "I like it, but it's smaller than it looked in the photos." },
        { tr: "It's very bright, I like that." }
      ] },
      { tr: "Photos are always a little deceiving. But the apartment is thirty-five square meters, and no space is lost to long hallways." },
      { tr: "Yes, the windows face south. In winter you hardly need to turn on the heat." },
      { tr: "The additional costs come to about a hundred euros a month, heating included." },
      { tr: "The base rent is six hundred fifty euros." },
      { task: "Ask whether the rent is negotiable or when the apartment is available.", opts: [
        { tr: "Is the rent negotiable?" },
        { tr: "When is the apartment available?" }
      ] },
      { tr: "The landlord will come down to six hundred euros if you sign the lease this week." },
      { tr: "The apartment is available from the first of next month." },
      { tr: "From the first of next month. But the rent stays at six hundred fifty euros." },
      { task: "Decide: will you take it or think it over?", opts: [
        { tr: "I'll take the apartment." },
        { tr: "I'll think it over and let you know." }
      ] },
      { tr: "Very good. I'll email you the lease by tomorrow." },
      { tr: "We'll be in touch in the next few days." },
      { tr: "Of course, take your time. You have my number." },
      { task: "Say thank you and goodbye.", tr: "Thank you, goodbye." },
      { tr: "Goodbye." }
    ]
  },
  "conv:arzt-halsschmerzen": {
    title: "At the doctor's, with a sore throat",
    setting: "A family doctor's office. You've had a sore throat for three days and need to explain clearly how you feel.",
    closing: "In Germany the doctor's sick note goes electronically to your health insurance fund (Krankenkasse), but telling your employer is up to you. German writes and says a decimal comma: \"achtunddreißig Komma fünf\" is 38.5 °C, about 101 °F. And for something that started in the past and is still going on, seit takes the present tense with the dative: \"seit drei Tagen\", where English says \"I've had… for three days\".",
    turns: [
      { tr: "Hello, have a seat. What can I do for you?" },
      { task: "Say that you've had a sore throat for three days, with or without a fever.", opts: [
        { tr: "I've had a sore throat and a fever for three days." },
        { tr: "I've had a sore throat for three days, but no fever." }
      ] },
      { tr: "Three days with a fever. How high was it?" },
      { task: "Say that it was thirty-eight point five.", tr: "Thirty-eight point five." },
      { tr: "That's quite high. Open your mouth, please." },
      { tr: "No fever, that's a good sign. Open your mouth, please." },
      { tr: "Your throat is very red. Does it hurt when you swallow?" },
      { task: "Say whether swallowing hurts.", opts: [
        { tr: "Yes, swallowing hurts a lot." },
        { tr: "No, it's just a little scratchy." }
      ] },
      { tr: "Then I'll do a throat swab. Depending on the result, we'll decide whether you need an antibiotic." },
      { tr: "It sounds like a cold; right now I don't see any reason for an antibiotic. Gargle with salt water and drink plenty of warm fluids." },
      { tr: "Either way, you need rest. If it isn't better in three days, come back." },
      { task: "Ask about work or about exercise.", opts: [
        { tr: "Do I have to stay home, or can I go to work?" },
        { tr: "Can I exercise?" }
      ] },
      { tr: "I'm putting you on sick leave for three days. The sick note goes electronically to your health insurance fund, but you have to tell your employer yourself." },
      { tr: "Better skip exercise while your throat is like this. Going for walks is fine." },
      { tr: "Get well soon!" },
      { task: "Say thank you and goodbye.", tr: "Thank you, goodbye." },
      { tr: "Goodbye." }
    ]
  }
});
