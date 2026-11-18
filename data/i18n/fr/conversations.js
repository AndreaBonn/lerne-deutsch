/* ============================================================
   Learner-language text (fr) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "conv:cafe-bestellen": {
    title: "Au café",
    setting: "Samedi matin, un café à Berlin. Vous commandez une boisson et peut-être une part de gâteau : un de vos choix change l'addition.",
    closing: "L'addition était juste : trois euros sans gâteau, six avec. Un choix se voit à la fin.",
    turns: [
      { tr: "Bonjour ! Que désirez-vous boire ?" },
      { task: "Choisissez ce que vous commandez à boire.", opts: [
        { tr: "Un café, s'il vous plaît." },
        { tr: "Un thé, s'il vous plaît." }
      ] },
      { tr: "Un café, avec plaisir." },
      { tr: "Un thé, avec plaisir." },
      { tr: "Et comment vous appelez-vous, s'il vous plaît ?" },
      { task: "Dites que vous vous appelez Anna.", tr: "Je m'appelle Anna." },
      { tr: "Merci. Désirez-vous aussi une part de gâteau ?" },
      { task: "Décidez si vous voulez du gâteau.", opts: [
        { tr: "Oui, une part de gâteau aux pommes, s'il vous plaît." },
        { tr: "Non, merci." }
      ] },
      { tr: "Avec plaisir. Le gâteau est tout frais. Ça fait six euros." },
      { tr: "Bien. Ça fait trois euros." },
      { task: "Tendez l'argent.", tr: "Voilà." },
      { tr: "Merci beaucoup ! Au revoir." },
      { task: "Dites au revoir et partez.", tr: "Au revoir !" }
    ]
  },
  "conv:sich-vorstellen": {
    title: "Le premier jour de cours",
    setting: "Un cours d'allemand à la Volkshochschule, l'université populaire de la ville. Avant le début du cours, quelqu'un s'assoit à côté de vous.",
    closing: "Entre camarades de cours, on se tutoie (du) dès la première phrase. Pour dire son métier, l'allemand se passe d'article, comme le français : « Ich bin Lehrerin », « je suis professeure ». Avec un adjectif, l'article revient : « Ich bin eine gute Lehrerin ». Le français passe alors à « c'est une bonne professeure », l'allemand garde « ich bin ».",
    turns: [
      { tr: "Salut ! La place est encore libre ?" },
      { task: "Dites oui et invitez-le à s'asseoir.", tr: "Oui, bien sûr ! Assieds-toi." },
      { tr: "Merci. Moi, c'est Jonas. Et toi, tu t'appelles comment ?" },
      { task: "Dites comment vous vous appelez (Anna).", tr: "Je m'appelle Anna." },
      { tr: "Enchanté ! Tu viens d'où ?" },
      { task: "Dites que vous venez d'Italie.", tr: "Je viens d'Italie." },
      { tr: "Ah, sympa ! Et qu'est-ce que tu fais dans la vie ?" },
      { task: "Dites que vous êtes professeure.", tr: "Je suis professeure." }
    ]
  },
  "conv:wochenmarkt": {
    title: "Au marché",
    setting: "Samedi matin, le marché hebdomadaire sur la place. Le marchand vous salue derrière ses cageots de légumes.",
    closing: "Trois phrases suffisent au marché : « Ich hätte gern… » (je voudrais…), « Was kosten…? » (combien coûtent… ?) et « Was macht das zusammen? » (ça fait combien en tout ?).",
    turns: [
      { tr: "Bonjour ! Qu'est-ce que je vous sers ? Les tomates sont particulièrement bonnes aujourd'hui." },
      { task: "Demandez un kilo de tomates.", tr: "Un kilo de tomates, s'il vous plaît." },
      { tr: "Voilà, un kilo de tomates, ça fait quatre euros cinquante. Et avec ceci ? Les pommes sont en promotion aujourd'hui." },
      { task: "Demandez combien coûtent les pommes.", tr: "Combien coûtent les pommes ?" },
      { tr: "Deux euros le kilo. Elles sont bien sucrées." },
      { task: "Dites que c'est tout et demandez combien ça fait.", tr: "Merci, ce sera tout. Ça fait combien en tout ?" },
      { tr: "Quatre euros cinquante, s'il vous plaît. Merci, et bon week-end !" }
    ]
  },
  "conv:im-restaurant": {
    title: "Dîner au restaurant",
    setting: "Le soir, un restaurant allemand, sans réservation. Le serveur vient vers vous à l'entrée.",
    closing: "On vouvoie le serveur : Sie correspond à votre vous de politesse. « Ich nehme… » (je prends…) est la façon la plus simple de commander. En Allemagne, l'addition ne vient pas toute seule : on la demande.",
    turns: [
      { tr: "Bonsoir ! Vous avez réservé ?" },
      { task: "Dites que non et demandez s'il y a une table pour deux.", tr: "Non. Vous avez une table pour deux personnes ?" },
      { tr: "Oui, bien sûr. Installez-vous, voici la carte. Qu'est-ce que vous désirez boire ?" },
      { task: "Commandez une bouteille d'eau gazeuse et un verre de vin rouge.", tr: "Une bouteille d'eau gazeuse et un verre de vin rouge, s'il vous plaît." },
      { tr: "Très bien. Et qu'est-ce que vous prendrez en entrée ?" },
      { task: "Commandez la soupe de goulasch et demandez si elle est épicée.", tr: "Je prends la soupe de goulasch. Elle est épicée ?" },
      { tr: "Juste un peu, elle est assaisonnée au paprika. Vous prendrez aussi un plat ensuite ?" },
      { task: "Refusez poliment et demandez l'addition pour plus tard.", tr: "Non, merci. Et l'addition plus tard, s'il vous plaît." }
    ]
  },
  "conv:fahrkarte-kaufen": {
    title: "Au guichet de la gare",
    setting: "Un Reisezentrum de la Deutsche Bahn, le guichet des billets à la gare. C'est votre tour.",
    closing: "Le Sparpreis est un tarif réduit, mais il impose la Zugbindung : le billet ne vaut que pour le train réservé.",
    turns: [
      { tr: "Au suivant, s'il vous plaît. Que puis-je faire pour vous ?" },
      { task: "Demandez un billet pour Hambourg pour cet après-midi.", tr: "Un billet pour Hambourg pour cet après-midi, s'il vous plaît." },
      { tr: "En ICE ou en Regionalexpress ? L'ICE est plus rapide, mais plus cher." },
      { task: "Demandez combien coûte l'ICE.", tr: "Combien coûte l'ICE ?" },
      { tr: "Il reste un Sparpreis aujourd'hui : vingt-neuf euros quatre-vingt-dix-neuf en seconde classe." },
      { task: "Prenez-le et demandez de quel quai il part.", tr: "Bien, je le prends. Il part de quel quai ?" },
      { tr: "Du quai sept, dans vingt minutes. Avec le Sparpreis, vous avez la Zugbindung : vous ne pouvez prendre que ce train-là." }
    ]
  },
  "conv:beim-arzt": {
    title: "Chez le médecin",
    setting: "Un cabinet médical. À l'accueil, vous avez présenté votre carte d'assurance maladie (Versichertenkarte) ; vous êtes maintenant chez le médecin.",
    closing: "Chez le médecin, vous dites ce qui ne va pas avec « Ich habe… », vous entendez « Seit wann? » et vous demandez « Wie oft am Tag? ». Pour ce qui a commencé dans le passé et dure encore, seit se construit avec le présent, exactement comme depuis : « Ich habe seit drei Tagen Fieber », « j'ai de la fièvre depuis trois jours ». Seit est suivi du datif : seit drei Tagen.",
    turns: [
      { tr: "Bonjour, asseyez-vous, je vous en prie. Qu'est-ce qui ne va pas ?" },
      { task: "Dites que vous avez mal à la gorge et de la fièvre.", tr: "J'ai mal à la gorge et de la fièvre." },
      { tr: "Depuis quand avez-vous ces symptômes ?" },
      { task: "Dites que vous les avez depuis trois jours.", tr: "Depuis trois jours." },
      { tr: "Êtes-vous allergique à un médicament ?" },
      { task: "Dites que vous n'avez pas d'allergie.", tr: "Non, je n'ai pas d'allergie." },
      { tr: "Je vous prescris un antibiotique. Reposez-vous et buvez beaucoup." },
      { task: "Demandez combien de fois par jour vous devez le prendre.", tr: "Combien de fois par jour dois-je le prendre ?" },
      { tr: "Trois fois par jour, après les repas, pendant sept jours. Bon rétablissement !" }
    ]
  },
  "conv:wohnungsbesichtigung": {
    title: "La visite d'appartement",
    setting: "La propriétaire vous fait visiter un deux-pièces. Vous avez dix minutes et beaucoup de questions.",
    closing: "En Allemagne, on demande toujours la Kaltmiete (le loyer hors charges), les Nebenkosten (les charges : entretien de l'immeuble, eau, ordures et le plus souvent le chauffage) et la Kaution (le dépôt de garantie). Pour « donner des nouvelles », l'allemand dit sich melden, avec bei + datif pour la personne : « Ich melde mich bei Ihnen ».",
    turns: [
      { tr: "Voilà, c'est le deux-pièces. Comme vous le voyez, il est lumineux et refait à neuf." },
      { task: "Demandez le montant du loyer hors charges.", tr: "Quel est le loyer hors charges ?" },
      { tr: "Huit cents euros par mois, hors charges." },
      { task: "Demandez à combien s'élèvent les charges.", tr: "Et à combien s'élèvent les charges ?" },
      { tr: "Environ cent quarante euros par mois, chauffage compris." },
      { task: "Demandez si le bail est à durée déterminée et quel est le montant du dépôt de garantie.", tr: "Le bail est-il à durée déterminée ? Et quel est le montant du dépôt de garantie ?" },
      { tr: "Non, il est à durée indéterminée. Le dépôt de garantie est de trois mois de loyer hors charges, la loi n'en permet pas plus." },
      { task: "Dites que vous allez réfléchir et que vous la recontactez demain.", tr: "Je vais réfléchir et je vous recontacte demain." }
    ]
  },
  "conv:vorstellungsgespraech": {
    title: "L'entretien d'embauche",
    setting: "Une agence de marketing à Hambourg. La responsable des ressources humaines ouvre avec la question classique.",
    closing: "En entretien, on parle concret. Attention au verbe après weil : il part en fin de proposition, alors qu'après « parce que » il reste à sa place : « Weil mich Ihre Projekte interessieren ».",
    turns: [
      { tr: "Alors, parlez-moi un peu de vous." },
      { task: "Dites votre nom (Anna) et que vous avez cinq ans d'expérience en marketing en ligne.", tr: "Je m'appelle Anna et j'ai cinq ans d'expérience en marketing en ligne." },
      { tr: "Et pourquoi avez-vous postulé chez nous précisément ?" },
      { task: "Dites que leurs projets internationaux vous intéressent beaucoup.", tr: "Parce que vos projets internationaux m'intéressent beaucoup." },
      { tr: "Quel serait, selon vous, votre plus grand défaut ?" },
      { task: "Dites que vous voulez souvent tout contrôler vous-même, mais que vous apprenez à déléguer.", tr: "Je veux souvent tout contrôler moi-même, mais j'apprends en ce moment à déléguer." },
      { tr: "Bien. Avez-vous des questions à nous poser ?" },
      { task: "Demandez comment l'équipe est composée et quelle est la suite.", tr: "Oui : comment l'équipe est-elle composée, et quelle est la suite ?" }
    ]
  },
  "conv:buergeramt": {
    title: "Au Bürgeramt",
    setting: "Le Bürgeramt, le service municipal de votre nouvelle ville. Vous venez d'emménager et devez déclarer votre adresse (Anmeldung), une obligation pour toute personne qui habite en Allemagne.",
    closing: "Pour l'Anmeldung, il faut une pièce d'identité et la Wohnungsgeberbestätigung, l'attestation signée par le bailleur qui confirme votre emménagement. La Meldebescheinigung est le certificat que l'on vous remet, et on vous la demandera sans cesse : à la banque, au travail, aux impôts.",
    turns: [
      { tr: "Numéro deux cent quatorze, guichet trois, s'il vous plaît. Bonjour, que puis-je faire pour vous ?" },
      { task: "Dites que vous voulez déclarer votre adresse.", tr: "Je voudrais déclarer mon domicile." },
      { tr: "Avez-vous sur vous votre passeport, l'attestation du bailleur et le formulaire de déclaration rempli ?" },
      { task: "Dites que vous avez le passeport et l'attestation, mais pas le formulaire.", tr: "J'ai le passeport et l'attestation, mais pas le formulaire." },
      { tr: "Pas de problème, je vous donne un formulaire. Remplissez-le en caractères d'imprimerie, s'il vous plaît." },
      { task: "Demandez combien de temps il faut pour obtenir le certificat de domicile.", tr: "Combien de temps faut-il pour que j'obtienne le certificat de domicile ?" },
      { tr: "Vous le recevez tout de suite, ici même au guichet." }
    ]
  },
  "conv:diskussion": {
    title: "Une discussion entre amis",
    setting: "Une bière après le travail. Un ami lance le sujet du télétravail.",
    closing: "Pour donner à moitié raison : « Teilweise gebe ich dir recht », mot à mot « en partie je te donne raison ». Pour être franchement en désaccord : « Da bin ich überhaupt nicht deiner Meinung ». Et abhängen se construit avec von, qui fusionne en davon : « Das hängt davon ab, wie… », « ça dépend de la façon dont… ».",
    turns: [
      { tr: "Je trouve que le télétravail a tué l'esprit d'équipe. Tu en penses quoi ?" },
      { task: "Donnez-lui en partie raison, mais dites que cela a aussi réduit le stress des trajets.", tr: "Je te donne en partie raison, mais ça a aussi réduit le stress des trajets." },
      { tr: "D'accord, mais tu ne crois pas que les jeunes apprennent moins quand ils ne sont pas au bureau ?" },
      { task: "Dites que cela dépend de la façon dont l'entreprise organise l'intégration des nouveaux.", tr: "Ça dépend de la façon dont l'entreprise organise l'intégration des nouveaux." },
      { tr: "Là, tu as raison. Mais pour moi, le modèle hybride, c'est le pire des deux mondes." },
      { task: "Exprimez un désaccord net : avec le modèle hybride, on peut décider selon la tâche.", tr: "Je ne suis pas du tout de ton avis : avec le modèle hybride, on peut décider selon la tâche." }
    ]
  },
  "conv:restaurant-entscheidungen": {
    title: "À table, avec quelques décisions",
    setting: "Vendredi soir, un restaurant allemand. Vos choix changent la table, le plat et, à la fin, l'addition.",
    closing: "L'addition se souvient de vos choix : vingt-quatre euros avec le strudel, vingt et un avec le café.",
    turns: [
      { tr: "Bonsoir. Vous avez réservé ?" },
      { task: "Dites si vous avez réservé ou non.", opts: [
        { tr: "Oui, au nom de Weber." },
        { tr: "Non, nous sommes deux. Vous avez encore une table libre ?" }
      ] },
      { tr: "Très bien. Votre table est près de la fenêtre. Par ici, s'il vous plaît." },
      { tr: "Il reste une table pour deux, tout au fond de la salle. Je vous en prie." },
      { tr: "Voici la carte. Vous désirez déjà commander quelque chose à boire ?" },
      { task: "Commandez une bouteille d'eau plate.", tr: "Une bouteille d'eau plate, s'il vous plaît." },
      { tr: "De l'eau plate, ça arrive tout de suite. Et qu'est-ce que vous désirez manger ?" },
      { task: "Choisissez ce que vous mangez.", opts: [
        { tr: "Pour moi, le schnitzel, s'il vous plaît." },
        { tr: "Pour moi, la poêlée de légumes, s'il vous plaît. Je ne mange pas de viande." }
      ] },
      { tr: "Le schnitzel est très bon aujourd'hui, pané minute." },
      { tr: "Avec plaisir. Les légumes viennent du marché d'à côté." },
      { tr: "Vous prendrez un dessert pour finir ? Le strudel aux pommes est fait maison." },
      { task: "Décidez si vous prenez un dessert.", opts: [
        { tr: "Oui, le strudel aux pommes, s'il vous plaît." },
        { tr: "Non, merci. Juste un café, s'il vous plaît." }
      ] },
      { tr: "Bon choix, ça arrive tout de suite." },
      { tr: "Un café, avec plaisir." },
      { tr: "Voici l'addition : plat, eau et strudel aux pommes. Ça fait vingt-quatre euros." },
      { tr: "Voici l'addition : plat, eau et café. Ça fait vingt et un euros." },
      { task: "Demandez si vous pouvez payer par carte.", tr: "Je peux payer par carte ?" },
      { tr: "Bien sûr, voici le terminal de paiement. Merci beaucoup, et bonne soirée !" }
    ]
  },
  "conv:zug-verpasst": {
    title: "Au guichet, après un train raté",
    setting: "Vous avez un billet Sparpreis (un tarif réduit valable seulement pour le train réservé) pour Cologne, mais votre ICE de 9 h 20 est parti sans vous, ou n'est pas parti du tout. Vous allez au guichet de la Deutsche Bahn.",
    closing: "La Zugbindung du Sparpreis tombe si le train est supprimé, pas si c'est vous qui le ratez. Là où le français dit « manquer » pour un train comme pour une personne, l'allemand sépare : « Ich habe den Zug verpasst » (j'ai raté le train), mais « Ich vermisse dich » (tu me manques). Et un portefeuille perdu, c'est verlieren : « Ich habe meine Geldbörse verloren ». Un train supprimé fällt aus : « Mein Zug ist ausgefallen ».",
    turns: [
      { tr: "Bonjour, je vous écoute ?" },
      { task: "Expliquez ce qui est arrivé à votre train.", opts: [
        { tr: "J'ai raté l'ICE de neuf heures vingt pour Cologne." },
        { tr: "Mon ICE pour Cologne a été supprimé." }
      ] },
      { tr: "Votre Sparpreis n'est malheureusement valable que pour le train réservé. Il vous faut un nouveau billet." },
      { tr: "Le prochain ICE pour Cologne part à onze heures quarante. Le billet coûte trente-neuf euros quatre-vingt-dix-neuf." },
      { tr: "Je regrette. Quand le train est supprimé, vous pouvez prendre un autre train." },
      { tr: "Le prochain ICE pour Cologne part à onze heures quarante. Vous ne payez rien de plus." },
      { task: "Prenez le train de 11 h 40 ou demandez s'il y a plus tôt.", opts: [
        { tr: "Bien, alors je prends le train de onze heures quarante." },
        { tr: "Il n'y a rien de plus tôt ?" }
      ] },
      { tr: "Très bien. Il part du quai sept." },
      { tr: "Plus tôt, il n'y a qu'un Intercity à dix heures quinze, mais vous devez changer une fois." },
      { task: "Prenez l'Intercity ou attendez l'ICE.", opts: [
        { tr: "Ça m'est égal, je prends l'Intercity." },
        { tr: "Alors je préfère attendre l'ICE de onze heures quarante." }
      ] },
      { tr: "Intercity à dix heures quinze, quai trois." },
      { tr: "Je vous imprime l'itinéraire. Bon voyage !" },
      { task: "Remerciez et dites au revoir.", tr: "Merci beaucoup, bonne journée !" },
      { tr: "Au revoir." }
    ]
  },
  "conv:wohnung-ansehen": {
    title: "Visiter un appartement",
    setting: "Un agent immobilier vous fait visiter un studio. Ce que vous dites décide si l'on parle de prix ou de dates.",
    closing: "Dans une comparaison, als correspond à « que », et dans la proposition qui suit, le verbe conjugué va à la fin : « kleiner, als es auf den Fotos aussah ». Et pour donner sa réponse plus tard : « Ich sage Ihnen Bescheid », « je vous tiens au courant ».",
    turns: [
      { tr: "Voilà, c'est le séjour. Qu'en pensez-vous ?" },
      { task: "Dites ce que vous en pensez.", opts: [
        { tr: "Il me plaît, mais il est plus petit qu'il n'en avait l'air sur les photos." },
        { tr: "Il est très lumineux, ça me plaît." }
      ] },
      { tr: "Les photos trompent toujours un peu. Mais l'appartement fait trente-cinq mètres carrés, et aucune place n'est perdue en longs couloirs." },
      { tr: "Oui, les fenêtres donnent au sud. En hiver, on n'a presque pas besoin de chauffer." },
      { tr: "Les charges sont d'environ cent euros par mois, chauffage compris." },
      { tr: "Le loyer hors charges est de six cent cinquante euros." },
      { task: "Demandez si le loyer est négociable ou à partir de quand l'appartement est libre.", opts: [
        { tr: "Le loyer est-il négociable ?" },
        { tr: "À partir de quand l'appartement est-il libre ?" }
      ] },
      { tr: "Le propriétaire descend à six cents euros si vous signez le bail cette semaine." },
      { tr: "L'appartement est libre à partir du premier du mois prochain." },
      { tr: "À partir du premier du mois prochain. Mais le loyer reste à six cent cinquante euros." },
      { task: "Décidez : vous le prenez ou vous réfléchissez ?", opts: [
        { tr: "Je prends l'appartement." },
        { tr: "Je vais réfléchir et je vous tiens au courant." }
      ] },
      { tr: "Très bien. Je vous envoie le bail par e-mail d'ici demain." },
      { tr: "Nous restons en contact dans les prochains jours." },
      { tr: "Bien sûr, réfléchissez tranquillement. Vous avez mon numéro." },
      { task: "Remerciez et dites au revoir.", tr: "Merci, au revoir." },
      { tr: "Au revoir." }
    ]
  },
  "conv:arzt-halsschmerzen": {
    title: "Chez le médecin, avec un mal de gorge",
    setting: "Le cabinet d'un médecin généraliste. Vous avez mal à la gorge depuis trois jours et devez expliquer clairement comment vous vous sentez.",
    closing: "En Allemagne, l'arrêt de travail (Arbeitsunfähigkeitsbescheinigung) part par voie électronique à votre caisse d'assurance maladie (Krankenkasse), mais c'est à vous de prévenir votre employeur. Pour la température, l'allemand dit la virgule comme le français : « achtunddreißig Komma fünf », trente-huit virgule cinq. Et seit se construit avec le présent, comme depuis, et avec le datif : « seit drei Tagen ».",
    turns: [
      { tr: "Bonjour, asseyez-vous. Que puis-je faire pour vous ?" },
      { task: "Dites que vous avez mal à la gorge depuis trois jours, avec ou sans fièvre.", opts: [
        { tr: "J'ai mal à la gorge et de la fièvre depuis trois jours." },
        { tr: "J'ai mal à la gorge depuis trois jours, mais pas de fièvre." }
      ] },
      { tr: "Trois jours de fièvre. Elle est montée à combien ?" },
      { task: "Dites qu'elle était à trente-huit virgule cinq.", tr: "Trente-huit virgule cinq." },
      { tr: "C'est déjà pas mal. Ouvrez la bouche, s'il vous plaît." },
      { tr: "Sans fièvre, c'est déjà bon signe. Ouvrez la bouche, s'il vous plaît." },
      { tr: "La gorge est très rouge. Ça fait mal quand vous avalez ?" },
      { task: "Dites si avaler fait mal.", opts: [
        { tr: "Oui, avaler fait très mal." },
        { tr: "Non, ça gratte juste un peu." }
      ] },
      { tr: "Alors je vais faire un prélèvement de gorge. Selon le résultat, nous déciderons si vous avez besoin d'un antibiotique." },
      { tr: "Ça ressemble à un rhume ; pour le moment, je ne vois aucune raison de prendre un antibiotique. Gargarisez-vous à l'eau salée et buvez beaucoup de boissons chaudes." },
      { tr: "Dans tous les cas, vous avez besoin de repos. Si ça ne va pas mieux dans trois jours, revenez." },
      { task: "Posez une question sur le travail ou sur le sport.", opts: [
        { tr: "Je dois rester à la maison, ou je peux aller travailler ?" },
        { tr: "J'ai le droit de faire du sport ?" }
      ] },
      { tr: "Je vous mets en arrêt de travail pour trois jours. L'arrêt part par voie électronique à votre caisse d'assurance maladie, mais votre employeur, c'est à vous de le prévenir." },
      { tr: "Mieux vaut éviter le sport tant que la gorge est dans cet état. Se promener, ça va." },
      { tr: "Bon rétablissement !" },
      { task: "Remerciez et dites au revoir.", tr: "Merci, au revoir." },
      { tr: "Au revoir." }
    ]
  }
});
