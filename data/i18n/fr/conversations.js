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
    closing: "Entre camarades de cours, on se tutoie (du) dès la première phrase. Pour dire son métier, l'allemand se passe d'article, comme le français : « Ich bin Lehrerin », « je suis professeure ». Avec un adjectif, l'article revient, là aussi comme en français : « Ich bin eine gute Lehrerin », « je suis une bonne professeure ».",
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
      { task: "Commandez la soupe de goulasch et demandez si elle est piquante.", tr: "Je prends la soupe de goulasch. Elle est piquante ?" },
      { tr: "Juste un peu, elle est assaisonnée au paprika. Vous prendrez aussi un plat ensuite ?" },
      { task: "Refusez poliment et demandez l'addition pour plus tard.", tr: "Non, merci. Et l'addition plus tard, s'il vous plaît." }
    ]
  },
  "conv:fahrkarte-kaufen": {
    title: "Au guichet de la gare",
    setting: "Un Reisezentrum de la Deutsche Bahn, le guichet des billets à la gare. C'est votre tour.",
    closing: "Le Sparpreis est un tarif réduit, mais il impose la Zugbindung : le billet ne vaut que pour le train grandes lignes réservé, ici l'ICE.",
    turns: [
      { tr: "Au suivant, s'il vous plaît. Que puis-je faire pour vous ?" },
      { task: "Demandez un billet pour Hambourg pour cet après-midi.", tr: "Un billet pour Hambourg pour cet après-midi, s'il vous plaît." },
      { tr: "En ICE ou en Regionalexpress ? L'ICE est plus rapide, mais plus cher." },
      { task: "Demandez combien coûte l'ICE.", tr: "Combien coûte l'ICE ?" },
      { tr: "Il reste un Sparpreis aujourd'hui : vingt-neuf euros quatre-vingt-dix-neuf en seconde classe." },
      { task: "Prenez-le et demandez de quelle voie il part.", tr: "Bien, je le prends. Il part de quelle voie ?" },
      { tr: "De la voie sept, dans vingt minutes. Avec le Sparpreis, vous avez la Zugbindung : vous ne pouvez prendre que ce train-là." }
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
    closing: "Pour donner à moitié raison : « Teilweise gebe ich dir recht », mot à mot « en partie je te donne raison ». Pour être franchement en désaccord : « Da bin ich überhaupt nicht deiner Meinung ». Et abhängen se construit avec von. Quand une proposition entière suit, von prend da- devant lui et devient l'adverbe pronominal davon, qui annonce cette proposition : « Das hängt davon ab, wie… », « ça dépend de la façon dont… ».",
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
      { tr: "Très bien. Il part de la voie sept." },
      { tr: "Plus tôt, il n'y a qu'un Intercity à dix heures quinze, mais vous devez changer une fois." },
      { task: "Prenez l'Intercity ou attendez l'ICE.", opts: [
        { tr: "Ça m'est égal, je prends l'Intercity." },
        { tr: "Alors je préfère attendre l'ICE de onze heures quarante." }
      ] },
      { tr: "Intercity à dix heures quinze, voie trois." },
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
  },
  "conv:pflege-aufnahme": {
    title: "Admission dans le service",
    setting: "Un service de médecine interne. Vous êtes l'infirmière de garde et vous accueillez M. Wagner, 82 ans, qui vient d'arriver pour son hospitalisation.",
    closing: "Avec le patient, toujours Sie, comme le vouvoiement, même s'il est âgé et chaleureux : le du à un adulte inconnu sonne infantilisant. Wassertablette (« cachet pour l'eau ») est le nom courant du diurétique. On montre la Klingel, la sonnette, dès l'arrivée, et on la fait essayer : beaucoup de patients âgés n'osent pas « déranger ».",
    turns: [
      { tr: "Bonjour. On m'a dit de me présenter ici, au service sept." },
      { task: "Présentez-vous et dites que vous faites son admission.", tr: "Bonjour, je suis Lena, votre infirmière. Je fais votre admission maintenant." },
      { tr: "Ah, bien. Je suis un peu nerveux, vous savez." },
      { task: "Demandez son nom complet et sa date de naissance.", tr: "Quel est votre nom complet, et quand êtes-vous né ?" },
      { tr: "Heinrich Wagner, né le douze mars mille neuf cent quarante-quatre." },
      { task: "Remerciez-le et demandez quels symptômes il a.", tr: "Merci, monsieur Wagner. Quels symptômes avez-vous ?" },
      { tr: "Depuis une semaine, j'ai du mal à respirer, surtout la nuit. Et mes jambes ont beaucoup gonflé." },
      { task: "Demandez s'il a des allergies, par exemple à des médicaments.", tr: "Avez-vous des allergies, par exemple à des médicaments ?" },
      { tr: "Oui, à la pénicilline. Ça me donne une éruption." },
      { task: "Dites que vous le notez tout de suite dans son dossier.", tr: "Je le note tout de suite dans votre dossier." },
      { tr: "Et mes cachets ? Je les ai tous dans mon sac." },
      { task: "Demandez la liste de traitement du médecin traitant, ou les boîtes.", opts: [
        { tr: "Avez-vous sur vous la liste de traitement de votre médecin traitant ?" },
        { tr: "Montrez-moi les boîtes, s'il vous plaît, je les recopie." }
      ] },
      { tr: "Oui, la voici. Mon médecin traitant me l'a imprimée la semaine dernière." },
      { tr: "Voilà : un diurétique, un anticoagulant et quelque chose pour la tension." },
      { tr: "Ici, je dois prendre mes cachets moi-même ?" },
      { task: "Dites-lui que c'est le service qui donne les médicaments.", tr: "Non, ici, vos médicaments, c'est nous qui vous les donnons." },
      { tr: "Bien. Et si j'ai besoin de quelque chose la nuit ?" },
      { task: "Montrez-lui la sonnette près du lit.", tr: "Alors appuyez sur la sonnette, ici près du lit, s'il vous plaît." },
      { tr: "Le bouton rouge, là ? Ça, je peux m'en souvenir." },
      { task: "Proposez-lui de l'essayer, ou demandez s'il a besoin d'autre chose.", opts: [
        { tr: "Exactement. Vous voulez l'essayer une fois ?" },
        { tr: "Exactement. Vous avez besoin d'autre chose pour le moment ?" }
      ] },
      { tr: "Oh, une lumière s'allume au-dessus de la porte. Comme ça, je sais que ça marche." },
      { tr: "Non, merci, pour le moment j'ai tout ce qu'il me faut." },
      { tr: "Merci beaucoup, vous êtes très aimable." },
      { task: "Répondez et dites que le médecin arrive bientôt.", tr: "Je vous en prie. Le médecin passe vous voir dans un instant." },
      { tr: "Merci bien." }
    ]
  },
  "conv:pflege-telefon-angehoerige": {
    title: "Au téléphone avec une proche",
    setting: "Service sept, l'après-midi. Le téléphone sonne : c'est la fille de M. Wagner, hospitalisé hier. Elle veut tout savoir, tout de suite.",
    closing: "Au téléphone, vous ne voyez pas qui appelle : avant de dire quoi que ce soit, vous vérifiez dans le dossier si le patient a désigné cette personne. C'est la Schweigepflicht, le secret professionnel. Le diagnostic revient au médecin, et « Das bespricht der Arzt mit Ihnen » est la formule pour le dire sans fermer la porte. Au téléphone, on se quitte sur « Auf Wiederhören » (« au plaisir de vous entendre »), pas sur « Auf Wiedersehen ».",
    turns: [
      { tr: "Bonjour, je suis bien au service sept ? Mon père, Heinrich Wagner, a été hospitalisé chez vous hier." },
      { task: "Confirmez le service et présentez-vous.", tr: "Oui, ici le service sept, vous parlez avec Lena, de l'équipe infirmière." },
      { tr: "Je suis tellement inquiète. Comment va-t-il ? Qu'est-ce qu'il a exactement ?" },
      { task: "Avant de donner des informations : demandez son nom, ou expliquez le secret professionnel.", opts: [
        { tr: "Quel est votre nom, s'il vous plaît ? Je dois vérifier si votre père vous a désignée comme personne à contacter." },
        { tr: "Je suis tenue au secret professionnel et je ne peux informer que les personnes désignées par votre père." }
      ] },
      { tr: "Sabine Schneider, je suis sa fille." },
      { tr: "Je comprends. Je suis sa fille, Sabine Schneider. Il m'a désignée lors de son admission." },
      { task: "Confirmez que son nom est dans le dossier et dites comment s'est passée la nuit.", tr: "Merci, madame Schneider, votre nom figure dans le dossier. Votre père a passé une nuit calme." },
      { tr: "Dieu merci. Et le diagnostic ? C'est le cœur ? Il faut l'opérer ?" },
      { task: "Renvoyez la question du diagnostic au médecin.", tr: "C'est le médecin qui en parlera avec vous. En tant qu'infirmière, je ne peux rien vous dire sur le diagnostic." },
      { tr: "Et quand est-ce que je peux parler au médecin ? Je travaille jusqu'à dix-sept heures." },
      { task: "Proposez un rappel aujourd'hui ou un entretien demain.", opts: [
        { tr: "Je demande au docteur Krüger de vous rappeler aujourd'hui après dix-sept heures." },
        { tr: "Vous pouvez venir demain à quatorze heures pour un entretien avec le médecin. Ça vous convient ?" }
      ] },
      { tr: "Ce serait très gentil. Vous avez mon numéro de portable, je l'ai laissé hier à l'admission." },
      { tr: "Quatorze heures, ça me va, je prendrai mon après-midi." },
      { tr: "Vous pouvez dire à mon père que j'ai appelé ?" },
      { task: "Dites que vous le lui transmettrez volontiers.", tr: "Bien sûr, je le lui dirai volontiers." },
      { tr: "Merci beaucoup. Et excusez-moi d'avoir été si impatiente tout à l'heure." },
      { task: "Rassurez-la et prenez congé comme on le fait au téléphone.", tr: "Pas de problème, je vous comprends très bien. Au revoir, madame Schneider." },
      { tr: "Au revoir." }
    ]
  }
});
