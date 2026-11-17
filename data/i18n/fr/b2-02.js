/* ============================================================
   Learner-language text (fr) for data/core/b2-02.js, unit b2-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:b2-u05": {
    title: "Elle a dit qu'elle était malade",
    grammarNote: "Konjunktiv I au discours indirect (er sei, er habe, er werde) · le Konjunktiv II comme substitut (sie hätten) · changements de temps, de lieu et de personne · questions indirectes avec ob et avec un mot interrogatif · ordres indirects avec sollen"
  },
  "lesson:b2-u05-l1": {
    theme: "Informations et témoignages",
    title: "Du discours direct au discours indirect",
    objectives: [
      "reconnaître et former le Konjunktiv I à la troisième personne",
      "rapporter les paroles d'autrui avec distance, comme dans la presse",
      "remplacer le Konjunktiv I par le Konjunktiv II quand il se confond avec l'indicatif",
      "employer des verbes comme behaupten, erklären, betonen"
    ],
    theory: [
      {
        h: "Le Konjunktiv I",
        p: "Les journaux, les procès-verbaux et les rapports rapportent les paroles d'autrui au <strong>Konjunktiv I</strong> : l'auteur signale qu'il s'agit de la version de cette personne. Il se forme sur le <strong>radical de l'infinitif</strong> + <em>-e</em> et s'emploie surtout à la troisième personne du singulier, où il se distingue de l'indicatif : <em>er habe, er komme, er wisse, er könne, er werde</em>. <em>sein</em> est irrégulier : <em>er sei, sie seien</em>. <em>Der Minister sagte, er sei mit dem Ergebnis zufrieden.</em>"
      },
      {
        h: "Passé et substitution",
        p: "Le passé se forme avec <strong>habe</strong> ou <strong>sei</strong> + participe : <em>Die Zeugin erklärte, sie habe nichts gesehen. Laut Polizei sei der Fahrer zu schnell gefahren.</em> Le futur avec <strong>werde</strong> + infinitif : <em>Die Firma werde keine Stellen streichen.</em> Quand le Konjunktiv I se confond avec l'indicatif, surtout au pluriel (<em>sie haben</em>), on prend le <strong>Konjunktiv II</strong> : <em>Sie sagten, sie hätten keine Zeit.</em>"
      },
      {
        contrast: "En français, le discours indirect applique la concordance des temps : <em>« Je suis malade »</em> devient <em>elle a dit qu'elle était malade</em>. L'allemand garde le temps et change le mode : <em>sie sagte, sie sei krank</em>. Le Konjunktiv I attribue l'information à une source sans dire si elle est vraie ; il n'équivaut pas forcément au conditionnel journalistique (<em>le conducteur aurait roulé trop vite</em>), qui ajoute l'idée d'une information non confirmée."
      },
      {
        trap: "Le Konjunktiv I n'exprime pas le doute : il marque seulement que les paroles sont celles d'un autre. Et il est rare à l'oral : <em>Er hat gesagt, er ist krank</em> est normal dans une conversation. À l'écrit, le Konjunktiv I marque l'attribution de façon explicite ; l'indicatif est possible aussi, surtout avec <em>dass</em> et une source nommée, et ne signifie pas forcément que l'auteur garantit ce qui est affirmé."
      },
      {
        tip: "Avec les verbes en <em>-en</em>, on obtient la troisième personne du singulier du Konjunktiv I en enlevant le <em>-n</em> de l'infinitif : <em>haben → habe, kommen → komme, wissen → wisse, können → könne</em>. Les exceptions sont <em>sein → sei</em> et les verbes en <em>-eln</em> ou comme <em>tun</em> (<em>er handle, er tue</em>)."
      }
    ],
    grammar: {
      title: "Le Konjunktiv I au discours indirect",
      note: "<b>Présent</b> : radical + <i>-e</i> (er habe, er komme ; er sei). <b>Passé</b> : habe / sei + participe. <b>Futur</b> : werde + infinitif. S'il se confond avec l'indicatif : <b>Konjunktiv II</b> (sie hätten).",
      table: {
        head: ["infinitif", "indicatif (er)", "Konjunktiv I (er)", "Konjunktiv I (sie, pluriel)", "substitut"],
        rows: [
          ["sein", "er ist", "er sei", "sie seien", "-"],
          ["haben", "er hat", "er habe", "sie haben", "sie hätten"],
          ["werden", "er wird", "er werde", "sie werden", "sie würden"],
          ["wissen", "er weiß", "er wisse", "sie wissen", "sie wüssten"],
          ["können", "er kann", "er könne", "sie können", "sie könnten"]
        ]
      },
      examples: [
        { tr: "Le ministre a dit qu'il était satisfait du résultat.", note: "er sei : Konjunktiv I de sein" },
        { tr: "La témoin a déclaré qu'elle n'avait rien vu.", note: "passé : habe + participe" },
        { tr: "Selon la police, le conducteur roulait trop vite.", note: "laut + Konjunktiv I : l'information est attribuée à la police" },
        { tr: "Le porte-parole a souligné que l'entreprise ne supprimerait pas de postes.", note: "futur : werde + infinitif" },
        { tr: "Ils ont dit qu'ils n'avaient pas le temps.", note: "sie haben se confond avec l'indicatif : hätten" },
        { tr: "Il affirme qu'il ne sait rien.", note: "er wisse : Konjunktiv I de wissen" }
      ]
    },
    vocab: [
      "la déclaration, le témoignage",
      "le témoin",
      "la témoin",
      "le porte-parole",
      "la nouvelle, l'annonce",
      "le rapport, le compte rendu",
      "affirmer, prétendre",
      "déclarer, expliquer",
      "souligner",
      "rapporter, informer (über + accusatif : sur)",
      "selon, d'après (+ datif ou génitif)",
      "soi-disant, prétendument (comme adjectif : die angebliche Krankheit, la prétendue maladie)"
    ],
    exercises: [
      {
        q: "Comment un journal rapporte-t-il « Je suis malade », dit par elle ?",
        opts: [
          "Sie sagte, sie sei krank.",
          "Sie sagte, sie wäre krank gewesen.",
          "Sie sagte, sie seien krank."
        ],
        why: "Konjunktiv I de <i>sein</i>, troisième personne du singulier : <b>sie sei</b>. Le temps ne change pas : <i>wäre krank gewesen</i> parlerait du passé, <i>seien</i> est un pluriel."
      },
      {
        q: "Quel est le Konjunktiv I de haben à la troisième personne du singulier ?",
        opts: [
          "er habe",
          "er hat",
          "er hatte"
        ],
        why: "Radical de l'infinitif <i>hab-</i> + <i>-e</i> : <b>er habe</b>. <i>hat</i> est le présent de l'indicatif, <i>hatte</i> le Präteritum."
      },
      {
        q: "Complétez, dans le style de la presse, avec la forme qui remplace le Konjunktiv I : « Sie sagten, sie ___ keine Zeit. »",
        opts: [
          "hätten",
          "haben",
          "hatten"
        ],
        why: "Le Konjunktiv I <i>sie haben</i> se confond avec l'indicatif, on prend donc le Konjunktiv II : <b>hätten</b>. <i>hatten</i> est le Präteritum."
      },
      {
        q: "Complétez : « Der Minister sagte, er ___ zufrieden. »",
        hint: "Konjunktiv I de sein, er",
        why: "<b>sei</b> : Konjunktiv I de <i>sein</i>, la forme typique de la presse."
      },
      {
        q: "Complétez : « Die Zeugin erklärte, sie ___ nichts gesehen. »",
        hint: "Konjunktiv I de haben, sie (elle)",
        why: "<b>habe</b> : le passé du Konjunktiv I se forme avec <i>habe</i> + participe."
      },
      {
        q: "Complétez la phrase.",
        tr: "Il affirme qu'il ne sait rien.",
        why: "<i>Er behauptet, er wisse von nichts</i> : <i>wisse</i> est le Konjunktiv I de <i>wissen</i> ; <i>von nichts wissen</i> signifie « ne rien savoir de l'affaire »."
      },
      {
        q: "Associez chaque verbe à son sens.",
        pairs: [
          "affirmer, prétendre",
          "souligner",
          "rapporter, informer",
          "déclarer, expliquer"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Selon la police, le conducteur roulait trop vite.",
        why: "<i>Laut Polizei sei der Fahrer zu schnell gefahren.</i> <i>Laut Polizei</i> occupe la première place, puis le verbe <i>sei</i>, le participe <i>gefahren</i> à la fin."
      },
      {
        q: "Traduisez pour un article : « Le porte-parole a dit que l'entreprise ne supprimerait pas de postes. » (Stellen streichen)",
        why: "<i>Der Sprecher sagte, die Firma werde keine Stellen streichen</i> : futur du Konjunktiv I avec <i>werde</i>, là où le français met le conditionnel <i>supprimerait</i>. Avec <i>dass</i>, le verbe va à la fin : <i>..., dass die Firma keine Stellen streichen werde</i>."
      },
      {
        tr: "La police a indiqué que l'accident s'était produit vers huit heures. Un témoin a rapporté que le conducteur n'avait pas freiné.",
        why: "Dans <i>teilte ... mit</i> la particule va à la fin ; dans <i>Zeuge</i> le <b>Z</b> se prononce [ts] et <b>eu</b> [ɔʏ] ; dans <i>gebremst</i> le préfixe <b>ge-</b> est inaccentué."
      },
      {
        tr: "La porte-parole a déclaré que le problème était désormais résolu.",
        why: "Dans <i>Sprecherin</i> le <b>sp</b> initial se prononce [ʃp] ; dans <i>inzwischen</i> le <b>z</b> est [ts] et <b>sch</b> [ʃ] ; dans <i>gelöst</i> le <b>ö</b> est long."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    theme: "Procès-verbaux et conférences de presse",
    title: "Temps, lieu, personne",
    objectives: [
      "changer la personne, le temps et le lieu au discours indirect",
      "garder au Konjunktiv I le temps du discours direct",
      "employer am Tag davor, am nächsten Tag, dort",
      "rapporter une conférence de presse ou une interview"
    ],
    theory: [
      {
        h: "Ce qui change",
        p: "Quand on rapporte les paroles d'autrui à un autre moment ou dans un autre lieu, la <strong>personne</strong> change (<em>ich → er/sie, mein → sein/ihr</em>), ainsi que les indications de <strong>temps</strong> (<em>heute → an diesem Tag, morgen → am nächsten Tag / am folgenden Tag, gestern → am Tag davor / am Vortag, nächste Woche → in der folgenden Woche</em>) et de <strong>lieu</strong> (<em>hier → dort</em>). Si l'on rapporte le jour même ou au même endroit, <em>heute</em> ou <em>hier</em> peuvent rester. „Ich komme morgen.“ → <em>Er sagte, er komme am nächsten Tag.</em> „Das ist mein Auto.“ → <em>Er sagte, das sei sein Auto.</em>"
      },
      {
        h: "Ce qui ne change pas",
        p: "Le <strong>temps</strong> reste celui du discours direct ; seul le mode change. Présent → présent du Konjunktiv I („Ich kenne ihn nicht.“ → <em>sie kenne ihn nicht</em>) ; passé → passé du Konjunktiv I („Ich war gestern hier.“ → <em>sie sei am Tag davor dort gewesen</em>) ; futur → <em>werde</em> + infinitif („Ich werde anrufen.“ → <em>er werde anrufen</em>)."
      },
      {
        contrast: "Le français applique la concordance des temps : <em>« Je le connais »</em> → <em>elle a dit qu'elle le connaissait</em>, <em>« J'étais ici hier »</em> → <em>elle a dit qu'elle avait été là la veille</em>, <em>« J'appellerai »</em> → <em>il a dit qu'il appellerait</em>. L'allemand non : <em>sie kenne</em>, <em>sie sei ... gewesen</em>, <em>er werde anrufen</em>. Les changements de personne, de temps et de lieu, eux, sont les mêmes qu'en français."
      },
      {
        trap: "Ne transformez pas le futur en conditionnel pour imiter <em>appellerait</em> : le futur rapporté est <em>er werde anrufen</em> (au pluriel, <em>sie würden anrufen</em>). Et <em>la veille</em> se dit <em>am Tag davor</em> ou <em>am Vortag</em>, pas <em>der Tag vorher</em> comme complément de temps."
      },
      {
        tip: "Avant de rapporter une phrase, soulignez dans le discours direct les pronoms et les mots de temps et de lieu : ce sont les seuls qui changent, en plus du mode du verbe."
      }
    ],
    grammar: {
      title: "Les changements au discours indirect",
      note: "La <b>personne</b> change et, si le moment ou le lieu de celui qui rapporte sont différents, aussi les mots de <b>temps</b> et de <b>lieu</b> ; le <b>temps verbal</b> reste celui du discours direct, mais au Konjunktiv I.",
      table: {
        head: ["discours direct", "discours indirect"],
        rows: [
          ["heute", "an diesem Tag"],
          ["morgen", "am nächsten Tag, am folgenden Tag"],
          ["gestern", "am Tag davor, am Vortag"],
          ["nächste Woche", "in der folgenden Woche"],
          ["hier", "dort"]
        ]
      },
      examples: [
        { tr: "Il a dit qu'il viendrait le lendemain.", note: "„Ich komme morgen.“ : présent → présent du Konjunktiv I" },
        { tr: "Elle a dit qu'elle avait été là la veille.", note: "„Ich war gestern hier.“ : passé → sei ... gewesen" },
        { tr: "Ils ont dit qu'ils n'avaient pas le temps ce jour-là.", note: "„Wir haben heute keine Zeit.“ : hätten au lieu de haben" },
        { tr: "Il a dit qu'il appellerait la semaine suivante.", note: "„Ich werde nächste Woche anrufen.“ : werde + infinitif" },
        { tr: "Il a dit que c'était sa voiture.", note: "mein → sein" },
        { tr: "Elle a dit qu'elle ne le connaissait pas.", note: "„Ich kenne ihn nicht.“ : kenne" }
      ]
    },
    vocab: [
      "la veille",
      "la communication, l'avis",
      "le procès-verbal, le compte rendu",
      "la conférence de presse",
      "l'interview, l'entretien",
      "la source",
      "communiquer, annoncer",
      "assurer",
      "citer",
      "rapporter, restituer (les paroles de quelqu'un)",
      "suivant",
      "entre-temps, désormais"
    ],
    exercises: [
      {
        q: "Une semaine plus tard, vous rapportez « Ich komme morgen » (lui). Quelle phrase le rapporte au Konjunktiv I ?",
        opts: [
          "Er sagte, er komme am nächsten Tag.",
          "Er sagte, ich komme am nächsten Tag.",
          "Er sagte, er kam am nächsten Tag."
        ],
        why: "La personne change (<i>ich → er</i>) et le temps aussi (<i>morgen → am nächsten Tag</i>) ; le verbe prend le présent du Konjunktiv I : <b>komme</b>. <i>kam</i> est un Präteritum de l'indicatif, pas un Konjunktiv I."
      },
      {
        q: "Quelques jours plus tard, dans une autre ville, vous rapportez « Ich war gestern hier » (elle). Quelle phrase est correcte ?",
        opts: [
          "Sie sagte, sie sei am Tag davor dort gewesen.",
          "Sie sagte, sie war gestern hier.",
          "Sie sagte, sie sei am Tag davor hier."
        ],
        why: "Passé → <b>sei ... gewesen</b> ; <i>gestern → am Tag davor</i>, <i>hier → dort</i>. La troisième phrase a perdu le passé."
      },
      {
        q: "Comment rapportez-vous « Das ist mein Auto » (lui) ?",
        opts: [
          "Er sagte, das sei sein Auto.",
          "Er sagte, das sei mein Auto.",
          "Er sagte, das ist sein Auto sei."
        ],
        why: "Le possessif change avec la personne : <i>mein → sein</i> ; le verbe passe au Konjunktiv I : <b>sei</b>."
      },
      {
        q: "„Ich kenne ihn nicht.“ → « Sie sagte, sie ___ ihn nicht. »",
        hint: "Konjunktiv I de kennen, sie (elle)",
        why: "<b>kenne</b> : radical <i>kenn-</i> + <i>-e</i>. Le temps reste au présent, là où le français dirait <i>connaissait</i>."
      },
      {
        q: "Rapporté quelques jours plus tard : „Wir haben heute keine Zeit.“ → « Sie sagten, sie ___ an diesem Tag keine Zeit. »",
        hint: "pluriel : le Konjunktiv I se confond avec l'indicatif",
        why: "<b>hätten</b> : <i>sie haben</i> se confondrait avec l'indicatif, donc Konjunktiv II. Et <i>heute → an diesem Tag</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "„Ich werde nächste Woche anrufen.“ → Il a dit qu'il appellerait la semaine suivante.",
        why: "<i>Er sagte, er werde in der folgenden Woche anrufen</i> : le futur rapporté est <i>werde</i> + infinitif, pas un conditionnel."
      },
      {
        q: "Quelles phrases rapportent correctement, dans le style de la presse, « Ich bin müde », dit par elle ?",
        opts: [
          "Sie sagte, sie sei müde.",
          "Sie sagte, dass sie müde sei.",
          "Sie sagte, ich sei müde.",
          "Sie sagte, dass sie sei müde."
        ],
        why: "Les deux premières sont correctes : sans <i>dass</i> le verbe est en deuxième position, avec <i>dass</i> il va à la fin. La troisième ne change pas la personne, la quatrième ne met pas le verbe à la fin après <i>dass</i>."
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Elle a dit qu'elle avait été là la veille.",
        why: "<i>Sie sagte, sie sei am Tag davor dort gewesen.</i> <i>sei</i> en deuxième position, le participe <i>gewesen</i> à la fin."
      },
      {
        q: "Traduisez, dans le style de la presse : « (Lui) a dit qu'il avait vu le film la veille. »",
        why: "<i>Er sagte, er habe den Film am Tag davor gesehen</i> (ou <i>am Vortag</i>) : passé du Konjunktiv I, sans le plus-que-parfait du français."
      },
      {
        tr: "Lors de la conférence de presse, la maire a annoncé que le pont rouvrirait le lundi suivant. Elle a assuré que tous les travaux étaient désormais terminés.",
        why: "Dans <i>Bürgermeisterin</i> l'accent tombe sur <b>Bür</b> ; dans <i>versicherte</i> le <b>v</b> se prononce [f] ; dans <i>abgeschlossen</i> le <b>b</b> devant <i>g</i> se prononce [p]."
      },
      {
        tr: "Le ministre a assuré qu'il n'avait rien su du problème.",
        why: "Dans <i>Minister</i> l'accent tombe sur <b>nis</b> ; dans <i>Problem</i> sur <b>blem</b> ; dans <i>gewusst</i> le <b>u</b> est bref."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    theme: "Questions et ordres rapportés",
    title: "Il a demandé si... ; elle m'a dit de...",
    objectives: [
      "rapporter une question fermée avec ob",
      "rapporter une question ouverte avec le mot interrogatif",
      "rapporter un ordre avec sollen",
      "rapporter une demande polie avec jemanden bitten, etwas zu tun"
    ],
    theory: [
      {
        h: "Les questions indirectes",
        p: "Une question <strong>fermée</strong> se rapporte avec <strong>ob</strong> et le verbe à la fin : „Hast du Zeit?“ → <em>Er fragte, ob ich Zeit hätte.</em> Une question <strong>ouverte</strong> garde son mot interrogatif, et là aussi le verbe va à la fin : „Wann fährt der Zug?“ → <em>Sie fragte, wann der Zug fahre.</em> En plus de <em>fragen</em>, on emploie <em>wissen wollen</em> et <em>sich erkundigen</em> : <em>Sie wollte wissen, ob ich mitkäme.</em>"
      },
      {
        h: "Les ordres et les demandes indirects",
        p: "Un ordre se rapporte avec <strong>sollen</strong> au Konjunktiv I : „Warte hier!“ → <em>Sie sagte, ich solle hier warten.</em> <em>Der Arzt sagte, ich solle mehr schlafen.</em> L'infinitif est possible aussi, avec la personne en complément : <em>Sie sagte mir, hier zu warten.</em> Une demande polie se rapporte souvent avec <strong>jemanden bitten</strong> ou <strong>jemanden auffordern</strong>, <em>etwas zu tun</em> : „Rufen Sie mich bitte an!“ → <em>Er bat mich, ihn anzurufen.</em> <em>Er forderte mich auf, zu warten.</em>"
      },
      {
        contrast: "En français, l'ordre rapporté se fait avec <em>de</em> + infinitif (<em>elle m'a dit d'attendre</em>) et la question avec <em>si</em> et la concordance des temps (<em>il a demandé si j'avais le temps</em>). L'allemand rapporte l'ordre surtout par une proposition avec <em>sollen</em> (<em>Sie sagte, ich solle warten</em>, ou <em>dass ich warten solle</em>) ; l'infinitif fonctionne surtout après <em>bitten</em> et <em>auffordern</em>. La question prend <em>ob</em> et le verbe à la fin, au Konjunktiv (<em>ob ich Zeit hätte</em>)."
      },
      {
        trap: "<em>ob</em> n'est pas <em>dass</em> : <em>Er fragte, dass ich Zeit hätte</em> n'a pas de sens, pas plus que « il a demandé que j'avais le temps ». Et après <em>ob</em> ou un mot interrogatif, le verbe va à la fin, pas en deuxième position comme dans la question directe : <em>wann der Zug fahre</em>, pas <em>wann fährt der Zug</em>."
      },
      {
        tip: "À l'oral, l'indicatif suffit souvent dans les questions indirectes (<em>Er hat gefragt, ob ich Zeit habe</em>) ; le Konjunktiv est la forme des textes écrits et des comptes rendus."
      }
    ],
    grammar: {
      title: "Questions et ordres au discours indirect",
      note: "<b>Question fermée</b> : ob + verbe à la fin. <b>Question ouverte</b> : mot interrogatif + verbe à la fin. <b>Ordre</b> : sollen au Konjunktiv I. <b>Demande</b> : jemanden bitten / jemanden auffordern, etwas zu tun (Er bat mich, ihn anzurufen. Er forderte mich auf, zu warten.).",
      table: {
        head: ["discours direct", "discours indirect"],
        rows: [
          ["„Hast du Zeit?“", "Er fragte, ob ich Zeit hätte."],
          ["„Wann fährt der Zug?“", "Sie fragte, wann der Zug fahre."],
          ["„Warte hier!“", "Sie sagte, ich solle hier warten."],
          ["„Rufen Sie mich bitte an!“", "Er bat mich, ihn anzurufen."]
        ]
      },
      examples: [
        { tr: "Il m'a demandé si j'avais le temps.", note: "ob + verbe à la fin, Konjunktiv II au lieu de ich habe" },
        { tr: "Elle a demandé à quelle heure partait le train.", note: "mot interrogatif + fahre" },
        { tr: "Elle m'a dit d'attendre ici.", note: "ordre : ich solle" },
        { tr: "Il m'a demandé de l'appeler.", note: "bitten + zu + infinitif" },
        { tr: "Elle voulait savoir si je viendrais avec eux.", note: "wissen wollen, ob ..." },
        { tr: "Le médecin m'a dit de dormir davantage.", note: "conseil rapporté avec sollen" }
      ]
    },
    vocab: [
      "la demande, le service demandé",
      "l'instruction, la consigne",
      "l'ordre",
      "le renseignement (Auskunft geben : renseigner)",
      "l'audition, l'interrogatoire",
      "inviter, sommer (quelqu'un à faire quelque chose)",
      "demander, prier (um + accusatif : quelque chose)",
      "se renseigner (nach + datif : sur)",
      "vouloir savoir",
      "exiger, réclamer",
      "expressément",
      "d'urgence, de toute urgence"
    ],
    exercises: [
      {
        q: "Comment rapportez-vous « Hast du Zeit? » (lui, à moi) ?",
        opts: [
          "Er fragte, ob ich Zeit hätte.",
          "Er fragte, dass ich Zeit hätte.",
          "Er fragte, ob hätte ich Zeit."
        ],
        why: "Question fermée : <b>ob</b> + verbe à la fin. <i>dass</i> n'introduit pas de question, et après <i>ob</i> le verbe doit aller à la fin, pas juste derrière."
      },
      {
        q: "Comment rapportez-vous « Warte hier! » (elle, à moi) ?",
        opts: [
          "Sie sagte, ich solle hier warten.",
          "Sie sagte, ich warte hier.",
          "Sie sagte, warte ich hier."
        ],
        why: "L'ordre rapporté se fait avec <b>sollen</b> au Konjunktiv I : <i>ich solle ... warten</i>."
      },
      {
        q: "Comment rapportez-vous « Wann fährt der Zug? » (elle) ?",
        opts: [
          "Sie fragte, wann der Zug fahre.",
          "Sie fragte, wann fährt der Zug.",
          "Sie fragte, ob wann der Zug fahre."
        ],
        why: "Le mot interrogatif reste et le verbe va à la fin : <b>wann der Zug fahre</b>. On n'ajoute pas <i>ob</i>."
      },
      {
        q: "Complétez : « Er fragte, ___ ich mitkommen wolle. »",
        hint: "question indirecte fermée",
        why: "<b>ob</b> : il introduit la question indirecte fermée et envoie le verbe à la fin, comme le <i>si</i> français."
      },
      {
        q: "Complétez : « Der Arzt sagte, ich ___ mehr schlafen. »",
        hint: "sollen au Konjunktiv I, ich",
        why: "<b>solle</b> : Konjunktiv I de <i>sollen</i>, qui se distingue ici de l'indicatif <i>ich soll</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "« Appelez-moi, s'il vous plaît ! » → Il m'a demandé de l'appeler.",
        why: "<i>Er bat mich, ihn anzurufen</i> : <i>bat</i> est le Präteritum de <i>bitten</i> ; avec un verbe séparable, <i>zu</i> se place entre la particule et le verbe."
      },
      {
        q: "Associez chaque verbe à son sens.",
        pairs: [
          "demander, prier",
          "inviter, sommer (quelqu'un à faire quelque chose)",
          "se renseigner",
          "exiger, réclamer"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Elle voulait savoir si j'avais le temps demain.",
        why: "<i>Sie wollte wissen, ob ich morgen Zeit hätte.</i> Après <i>ob</i>, le verbe <i>hätte</i> ferme la proposition."
      },
      {
        q: "Traduisez : « (Elle) m'a demandé où j'habitais. »",
        why: "<i>Sie fragte mich, wo ich wohnte</i>, ou <i>wo ich wohne</i>, correct aussi. Le Konjunktiv I <i>ich wohne</i> se confond avec l'indicatif, et <i>wohnte</i> aussi, identique au Präteritum : si vous voulez que le Konjunktiv se reconnaisse, employez <i>wo ich wohnen würde</i>."
      },
      {
        tr: "Le policier m'a demandé si j'avais vu l'accident. Puis il m'a invité à lui montrer ma pièce d'identité.",
        why: "Dans <i>Polizist</i> l'accent tombe sur <b>zist</b> ; dans <i>forderte ... auf</i> la particule va à la fin ; dans <i>Ausweis</i> <b>au</b> se prononce [aʊ] et <b>ei</b> [aɪ]."
      },
      {
        tr: "Elle m'a demandé de la rappeler d'urgence.",
        why: "Dans <i>dringend</i> <b>ng</b> se prononce [ŋ] et le <b>d</b> final [t] ; dans <i>zurückzurufen</i> le second <i>zu</i> se place entre <i>zurück</i> et <i>rufen</i>."
      }
    ]
  },
  "lesson:b2-u05-test": {
    theme: "Vérification",
    title: "Test : Elle a dit qu'elle était malade",
    objectives: [
      "vérifier le Konjunktiv I, les changements du discours indirect, ob et sollen"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "Complétez : « Sie sagte, sie ___ keine Zeit. »",
        hint: "Konjunktiv I de haben, sie (elle)",
        why: "<b>habe</b> : à la troisième personne du singulier, le Konjunktiv I se distingue de l'indicatif <i>hat</i>."
      },
      {
        q: "Complétez : « Er erklärte, er ___ am Vortag in Berlin gewesen. »",
        hint: "Konjunktiv I de sein, er",
        why: "<b>sei</b> : passé du Konjunktiv I avec <i>sein</i> + <i>gewesen</i>."
      },
      {
        q: "Complétez : « Sie fragte, ___ ich Hunger hätte. »",
        hint: "question indirecte fermée",
        why: "<b>ob</b>, avec le verbe <i>hätte</i> à la fin."
      },
      {
        q: "Quel est le Konjunktiv I de können à la troisième personne du singulier ?",
        opts: [
          "er könne",
          "er kann",
          "er könnte"
        ],
        why: "Radical de l'infinitif <i>könn-</i> + <i>-e</i> : <b>er könne</b>. <i>könnte</i> est le Konjunktiv II."
      },
      {
        q: "Comment rapportez-vous « Bring mir das Buch! » (lui, à moi) ?",
        opts: [
          "Er sagte, ich solle ihm das Buch bringen.",
          "Er sagte, ich bringe ihm das Buch.",
          "Er sagte, bring ihm das Buch."
        ],
        why: "Ordre rapporté : <b>sollen</b> au Konjunktiv I, et <i>mir</i> devient <i>ihm</i>."
      },
      {
        q: "Complétez, dans le style de la presse, avec la forme qui remplace le Konjunktiv I : « Die Kinder sagten, sie ___ Hunger. »",
        opts: [
          "hätten",
          "haben",
          "habe"
        ],
        why: "Au pluriel, <i>sie haben</i> se confond avec l'indicatif, on prend donc le Konjunktiv II <b>hätten</b>. <i>habe</i> est un singulier."
      },
      {
        q: "Quelles phrases rapportent correctement, dans le style de la presse, « Ich kann nicht kommen », dit par lui ?",
        opts: [
          "Er sagte, er könne nicht kommen.",
          "Er sagte, dass er nicht kommen könne.",
          "Er sagte, er kann nicht kommen könne.",
          "Er sagte, ich könne nicht kommen."
        ],
        why: "Les deux premières sont correctes. La troisième mélange indicatif et Konjunktiv, la quatrième ne change pas la personne."
      },
      {
        q: "Complétez la phrase.",
        tr: "« J'ai envoyé la lettre hier. » (schicken) → Elle a dit qu'elle avait envoyé la lettre la veille.",
        why: "<i>Sie sagte, sie habe den Brief am Tag davor geschickt</i> : passé du Konjunktiv I et <i>gestern → am Tag davor</i>."
      },
      {
        tr: "La porte-parole de l'entreprise a déclaré que les clients avaient été informés immédiatement. À la question de savoir s'il y avait d'autres problèmes, elle a répondu qu'elle ne pouvait pas encore le dire.",
        why: "Dans <i>Sprecherin</i> <b>sp</b> se prononce [ʃp] ; dans <i>informiert</i> l'accent tombe sur <b>miert</b> ; dans <i>weitere</i> <b>ei</b> se prononce [aɪ]."
      },
      {
        tr: "Le témoin a dit qu'il n'avait jamais vu cet homme auparavant.",
        why: "Dans <i>Zeuge</i> le <b>Z</b> se prononce [ts] ; dans <i>zuvor</i> le <b>v</b> se prononce [f] ; dans <i>gesehen</i> le <b>h</b> est muet."
      }
    ]
  }
});
