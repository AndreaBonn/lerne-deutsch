/* ============================================================
   Learner-language text (es) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "conv:cafe-bestellen": {
    title: "En la cafetería",
    setting: "Sábado por la mañana, una cafetería en Berlín. Pides algo de beber y quizá un trozo de tarta: una de tus elecciones cambia la cuenta.",
    closing: "La cuenta fue correcta: tres euros sin tarta, seis con tarta. Una elección se ve al final.",
    turns: [
      { tr: "¡Buenos días! ¿Qué desea beber?" },
      { task: "Elige qué pedir de beber.", opts: [
        { tr: "Un café, por favor." },
        { tr: "Un té, por favor." }
      ] },
      { tr: "Un café, con mucho gusto." },
      { tr: "Un té, con mucho gusto." },
      { tr: "¿Y cómo se llama, por favor?" },
      { task: "Di que te llamas Anna.", tr: "Me llamo Anna." },
      { tr: "Gracias. ¿Desea también un trozo de tarta?" },
      { task: "Decide si quieres tarta.", opts: [
        { tr: "Sí, un trozo de tarta de manzana, por favor." },
        { tr: "No, gracias." }
      ] },
      { tr: "Con mucho gusto. La tarta es muy fresca. Son seis euros." },
      { tr: "Bien. Son tres euros." },
      { task: "Entrega el dinero.", tr: "Aquí tiene." },
      { tr: "¡Muchas gracias! Adiós." },
      { task: "Despídete y vete.", tr: "¡Adiós!" }
    ]
  },
  "conv:sich-vorstellen": {
    title: "El primer día de curso",
    setting: "Un curso de alemán en la Volkshochschule, el centro municipal de educación para adultos. Antes de la clase alguien se sienta a tu lado.",
    closing: "Entre compañeros de curso se tutea (du) desde la primera frase. Y para decir la profesión el alemán no usa artículo, igual que el español: «Ich bin Lehrerin», «soy profesora». Con un adjetivo, en alemán el artículo vuelve: «Ich bin eine gute Lehrerin» («soy una buena profesora»).",
    turns: [
      { tr: "¡Hola! ¿Está libre este sitio?" },
      { task: "Di que sí e invítalo a sentarse.", tr: "¡Sí, claro! Siéntate." },
      { tr: "Gracias. Soy Jonas. ¿Y tú cómo te llamas?" },
      { task: "Di cómo te llamas (Anna).", tr: "Me llamo Anna." },
      { tr: "¡Encantado! ¿De dónde eres?" },
      { task: "Di que eres de Italia.", tr: "Soy de Italia." },
      { tr: "¡Ah, qué bien! ¿Y a qué te dedicas?" },
      { task: "Di que eres profesora.", tr: "Soy profesora." }
    ]
  },
  "conv:wochenmarkt": {
    title: "En el mercado semanal",
    setting: "Sábado por la mañana, el mercado en la plaza. El vendedor te saluda desde detrás de las cajas de verdura.",
    closing: "En el mercado bastan tres frases: «Ich hätte gern…», «Was kosten…?» y «Was macht das zusammen?».",
    turns: [
      { tr: "¡Buenos días! ¿Qué le pongo? Hoy los tomates están especialmente buenos." },
      { task: "Pide un kilo de tomates.", tr: "Un kilo de tomates, por favor." },
      { tr: "Aquí tiene, un kilo de tomates, son cuatro euros con cincuenta. ¿Algo más? Hoy las manzanas están en oferta." },
      { task: "Pregunta cuánto cuestan las manzanas.", tr: "¿Cuánto cuestan las manzanas?" },
      { tr: "Dos euros el kilo. Son bien dulces." },
      { task: "Di que eso es todo y pregunta cuánto es en total.", tr: "Gracias, eso es todo. ¿Cuánto es en total?" },
      { tr: "Cuatro euros con cincuenta, por favor. ¡Muchas gracias y buen fin de semana!" }
    ]
  },
  "conv:im-restaurant": {
    title: "Cena en el restaurante",
    setting: "Por la noche, un restaurante alemán, sin reserva. El camarero sale a vuestro encuentro en la entrada.",
    closing: "Al camarero se le trata de Sie, como de usted. «Ich nehme…» («tomo…») es la forma más sencilla de pedir.",
    turns: [
      { tr: "¡Buenas noches! ¿Tienen reserva?" },
      { task: "Di que no y pregunta si hay una mesa para dos personas.", tr: "No. ¿Tienen una mesa para dos personas?" },
      { tr: "Sí, claro. Siéntense, por favor, aquí tienen la carta. ¿Qué desean beber?" },
      { task: "Pide una botella de agua con gas y una copa de vino tinto.", tr: "Una botella de agua con gas y una copa de vino tinto, por favor." },
      { tr: "Con mucho gusto. ¿Y qué desean de entrante?" },
      { task: "Pide la sopa de gulash y pregunta si pica.", tr: "Tomo la sopa de gulash. ¿Pica?" },
      { tr: "Solo un poco, está condimentada con pimentón. ¿Desean también un plato principal después?" },
      { task: "Rechaza amablemente y pide la cuenta para más tarde.", tr: "No, gracias. Y más tarde la cuenta, por favor." }
    ]
  },
  "conv:fahrkarte-kaufen": {
    title: "En el centro de viajes",
    setting: "Un Reisezentrum de la Deutsche Bahn, la oficina de venta de billetes de la estación. Te toca en la ventanilla.",
    closing: "El Sparpreis es una tarifa rebajada, pero tiene Zugbindung: el billete solo vale para el tren elegido.",
    turns: [
      { tr: "El siguiente, por favor. ¿En qué puedo ayudarle?" },
      { task: "Pide un billete a Hamburgo para esta tarde.", tr: "Un billete a Hamburgo para esta tarde, por favor." },
      { tr: "¿En el ICE o en el Regionalexpress? El ICE es más rápido, pero más caro." },
      { task: "Pregunta cuánto cuesta el ICE.", tr: "¿Cuánto cuesta el ICE?" },
      { tr: "Hoy todavía hay un Sparpreis: veintinueve euros con noventa y nueve en segunda clase." },
      { task: "Acepta y pregunta de qué vía sale.", tr: "Bien, me lo quedo. ¿De qué vía sale?" },
      { tr: "De la vía siete, dentro de veinte minutos. Con el Sparpreis el billete está ligado al tren: solo puede tomar este." }
    ]
  },
  "conv:beim-arzt": {
    title: "En la consulta",
    setting: "Una consulta médica. En recepción has enseñado la tarjeta del seguro médico (Versichertenkarte); ahora estás con la doctora.",
    closing: "En el médico dices qué te pasa con «Ich habe…», oyes «Seit wann?» y preguntas «Wie oft am Tag?». Para algo que empezó en el pasado y sigue ahora, el alemán usa el presente, como el español: «Ich habe seit drei Tagen Fieber», «tengo fiebre desde hace tres días». Seit cubre tanto «desde» como «desde hace» y rige dativo: seit drei Tagen.",
    turns: [
      { tr: "Buenos días, siéntese, por favor. ¿Qué le pasa?" },
      { task: "Di que te duele la garganta y que tienes fiebre.", tr: "Me duele la garganta y tengo fiebre." },
      { tr: "¿Desde cuándo tiene estas molestias?" },
      { task: "Di que desde hace tres días.", tr: "Desde hace tres días." },
      { tr: "¿Es alérgica a algún medicamento?" },
      { task: "Di que no tienes alergias.", tr: "No, no tengo alergias." },
      { tr: "Le receto un antibiótico. Descanse y beba mucho líquido." },
      { task: "Pregunta cuántas veces al día tienes que tomarlo.", tr: "¿Cuántas veces al día tengo que tomarlo?" },
      { tr: "Tres veces al día, después de las comidas, durante siete días. ¡Que se mejore!" }
    ]
  },
  "conv:wohnungsbesichtigung": {
    title: "La visita al piso",
    setting: "La propietaria te enseña un piso de dos habitaciones. Tienes diez minutos y muchas preguntas.",
    closing: "En Alemania siempre se pregunta por la Kaltmiete (el alquiler base, sin gastos adicionales), los Nebenkosten (los gastos adicionales: comunidad, agua, basuras y casi siempre la calefacción) y la Kaution (la fianza). Para «dar señales» el alemán usa sich melden, con bei + dativo para la persona: «Ich melde mich bei Ihnen».",
    turns: [
      { tr: "Bueno, este es el piso de dos habitaciones. Como ve, es luminoso y está recién reformado." },
      { task: "Pregunta cuánto es el alquiler sin gastos.", tr: "¿A cuánto asciende el alquiler sin gastos?" },
      { tr: "Ochocientos euros al mes, sin gastos." },
      { task: "Pregunta a cuánto ascienden los gastos.", tr: "¿Y a cuánto ascienden los gastos?" },
      { tr: "Unos ciento cuarenta euros al mes, la calefacción ya está incluida." },
      { task: "Pregunta si el contrato es temporal y cuánto es la fianza.", tr: "¿El contrato es temporal? ¿Y cuánto es la fianza?" },
      { tr: "No, es indefinido. La fianza es de tres mensualidades sin gastos: la ley no permite más." },
      { task: "Di que te lo vas a pensar y que mañana le dices algo.", tr: "Me lo pienso y mañana me pongo en contacto con usted." }
    ]
  }
,
  "conv:vorstellungsgespraech": {
    title: "La entrevista de trabajo",
    setting: "Una agencia de marketing en Hamburgo. La responsable de personal empieza con la pregunta clásica.",
    closing: "En la entrevista se habla de cosas concretas. Ojo con el verbo después de weil: va al final de la frase, cosa que «porque» no hace: «Weil mich Ihre Projekte interessieren».",
    turns: [
      { tr: "Bueno, cuénteme un poco sobre usted." },
      { task: "Di cómo te llamas (Anna) y que tienes cinco años de experiencia en marketing online.", tr: "Me llamo Anna y tengo cinco años de experiencia en marketing online." },
      { tr: "¿Y por qué se ha presentado precisamente a nosotros?" },
      { task: "Di que te interesan mucho sus proyectos internacionales.", tr: "Porque me interesan mucho sus proyectos internacionales." },
      { tr: "¿Cuál diría que es su mayor debilidad?" },
      { task: "Di que a menudo quieres controlarlo todo tú misma, pero que estás aprendiendo a delegar.", tr: "A menudo quiero controlarlo todo yo misma, pero estoy aprendiendo a delegar tareas." },
      { tr: "Bien. ¿Tiene alguna pregunta para nosotros?" },
      { task: "Pregunta cómo está formado el equipo y cuáles son los próximos pasos.", tr: "Sí: ¿cómo está formado el equipo y cuáles son los próximos pasos?" }
    ]
  },
  "conv:buergeramt": {
    title: "En la oficina de empadronamiento",
    setting: "El Bürgeramt de tu nueva ciudad. Acabas de mudarte y tienes que registrar tu domicilio (Anmeldung), algo parecido al empadronamiento en España y obligatorio para todo el que vive en Alemania.",
    closing: "Para la Anmeldung hacen falta un documento de identidad y la Wohnungsgeberbestätigung, la confirmación firmada por el casero. La Meldebescheinigung es el certificado que te dan, y te lo pedirán una y otra vez: en el banco, en el trabajo, en Hacienda.",
    turns: [
      { tr: "Número doscientos catorce, ventanilla tres, por favor. Buenos días, ¿en qué puedo ayudarle?" },
      { task: "Di que quieres registrar tu domicilio.", tr: "Quisiera registrar mi domicilio." },
      { tr: "¿Tiene aquí el pasaporte, la confirmación del casero y el formulario de inscripción rellenado?" },
      { task: "Di que tienes el pasaporte y la confirmación, pero no el formulario.", tr: "El pasaporte y la confirmación los tengo, pero el formulario no." },
      { tr: "No pasa nada, le doy un formulario. Rellénelo en letra de imprenta, por favor." },
      { task: "Pregunta cuánto se tarda en recibir el certificado de empadronamiento.", tr: "¿Cuánto se tarda hasta que reciba el certificado de empadronamiento?" },
      { tr: "Se lo damos enseguida, aquí mismo en la ventanilla." }
    ]
  },
  "conv:diskussion": {
    title: "Una discusión entre amigos",
    setting: "Una cerveza después del trabajo. Un amigo saca el tema del teletrabajo.",
    closing: "Para dar la razón a medias: «Teilweise gebe ich dir recht», casi palabra por palabra «en parte te doy la razón». Para discrepar con firmeza: «Da bin ich überhaupt nicht deiner Meinung». Y abhängen va con von, que se funde en davon: «Das hängt davon ab, wie…», «depende de cómo…».",
    turns: [
      { tr: "Yo creo que el teletrabajo ha acabado con el espíritu de equipo. ¿Tú cómo lo ves?" },
      { task: "Dale la razón en parte, pero di que también ha reducido el estrés de los desplazamientos.", tr: "En parte te doy la razón, pero también ha reducido el estrés de los desplazamientos." },
      { tr: "Ya, pero ¿no crees que los jóvenes aprenden menos si no están en la oficina?" },
      { task: "Di que depende de cómo organice la empresa la incorporación de los nuevos.", tr: "Depende de cómo organice la empresa la incorporación de los nuevos." },
      { tr: "En eso tienes razón. Pero para mí el modelo híbrido es lo peor de los dos mundos." },
      { task: "Discrepa con firmeza: con el modelo híbrido se puede decidir según la tarea.", tr: "No estoy nada de acuerdo contigo: con el modelo híbrido se puede decidir según la tarea." }
    ]
  },
  "conv:restaurant-entscheidungen": {
    title: "En la mesa, con algunas decisiones",
    setting: "Viernes por la noche, un restaurante alemán. Tus elecciones cambian la mesa, el plato y, al final, la cuenta.",
    closing: "La cuenta recuerda tus elecciones: veinticuatro euros con el strudel, veintiuno con el café.",
    turns: [
      { tr: "Buenas noches. ¿Tienen reserva?" },
      { task: "Di si tenéis reserva o no.", opts: [
        { tr: "Sí, a nombre de Weber." },
        { tr: "No, somos dos. ¿Todavía tienen una mesa libre?" }
      ] },
      { tr: "Muy bien. Su mesa está junto a la ventana. Por aquí, por favor." },
      { tr: "Todavía queda libre una mesa para dos, al fondo del local. Pasen, por favor." },
      { tr: "Aquí tienen la carta. ¿Quieren pedir ya algo de beber?" },
      { task: "Pide una botella de agua sin gas.", tr: "Una botella de agua sin gas, por favor." },
      { tr: "Agua sin gas, enseguida. ¿Y qué desean comer?" },
      { task: "Elige qué comer.", opts: [
        { tr: "Para mí el escalope empanado, por favor." },
        { tr: "Para mí la sartén de verduras, por favor. No como carne." }
      ] },
      { tr: "El escalope hoy está muy bueno, recién empanado." },
      { tr: "Con mucho gusto. Las verduras vienen del mercado de al lado." },
      { tr: "¿Desean un postre para terminar? El strudel de manzana es casero." },
      { task: "Decide si tomas postre.", opts: [
        { tr: "Sí, el strudel de manzana, por favor." },
        { tr: "No, gracias. Solo un café, por favor." }
      ] },
      { tr: "Buena elección, enseguida." },
      { tr: "Un café, con mucho gusto." },
      { tr: "Aquí tienen la cuenta: plato principal, agua y strudel de manzana. Son veinticuatro euros." },
      { tr: "Aquí tienen la cuenta: plato principal, agua y café. Son veintiún euros." },
      { task: "Pregunta si puedes pagar con tarjeta.", tr: "¿Puedo pagar con tarjeta?" },
      { tr: "Claro, aquí tiene el datáfono. ¡Muchas gracias y que pasen buena noche!" }
    ]
  },
  "conv:zug-verpasst": {
    title: "En la ventanilla, después de perder un tren",
    setting: "Tienes un billete Sparpreis (tarifa rebajada válida solo en el tren reservado) a Colonia, pero tu ICE de las 9:20 salió sin ti, o no salió. Vas a la ventanilla de la Deutsche Bahn.",
    closing: "La Zugbindung del Sparpreis se levanta si el tren se cancela, no si lo pierdes tú. Donde el español usa «perder» tanto para el tren como para la cartera, el alemán distingue: un tren se verpasst, una cartera se verliert. Y un tren cancelado fällt aus: «Mein Zug ist ausgefallen».",
    turns: [
      { tr: "Buenos días, dígame." },
      { task: "Explica qué ha pasado con tu tren.", opts: [
        { tr: "He perdido el ICE a Colonia de las nueve y veinte." },
        { tr: "Mi ICE a Colonia se ha cancelado." }
      ] },
      { tr: "Lamentablemente su Sparpreis solo vale para el tren reservado. Necesita un billete nuevo." },
      { tr: "El próximo ICE a Colonia sale a las once y cuarenta. El billete cuesta treinta y nueve euros con noventa y nueve." },
      { tr: "Lo siento. Si el tren se cancela, puede tomar también otro tren." },
      { tr: "El próximo ICE a Colonia sale a las once y cuarenta. No paga nada más." },
      { task: "Acepta el tren de las 11:40 o pregunta si hay algo antes.", opts: [
        { tr: "Bien, entonces tomo el tren de las once y cuarenta." },
        { tr: "¿No hay nada antes?" }
      ] },
      { tr: "De acuerdo. Sale de la vía siete." },
      { tr: "Antes solo sale un Intercity a las diez y cuarto, pero tiene que hacer un transbordo." },
      { task: "Toma el Intercity o espera al ICE.", opts: [
        { tr: "Me da igual, tomo el Intercity." },
        { tr: "Entonces prefiero esperar al ICE de las once y cuarenta." }
      ] },
      { tr: "Intercity de las diez y cuarto, vía tres." },
      { tr: "Le imprimo la conexión. ¡Buen viaje!" },
      { task: "Da las gracias y despídete.", tr: "¡Muchas gracias, que tenga un buen día!" },
      { tr: "Adiós." }
    ]
  },
  "conv:wohnung-ansehen": {
    title: "Ver un piso",
    setting: "Un agente inmobiliario te enseña un estudio. Lo que dices decide si se habla de precio o de fechas.",
    closing: "En la comparación als equivale a «que», y en la frase que sigue el verbo conjugado va al final: «kleiner, als es auf den Fotos aussah». Y para dar una respuesta más tarde: «Ich sage Ihnen Bescheid», «ya le aviso».",
    turns: [
      { tr: "Bueno, este es el salón. ¿Qué le parece?" },
      { task: "Di qué te parece.", opts: [
        { tr: "Me gusta, pero es más pequeño de lo que parecía en las fotos." },
        { tr: "Es muy luminoso, eso me gusta." }
      ] },
      { tr: "Las fotos siempre engañan un poco. Pero el piso tiene treinta y cinco metros cuadrados, y no se pierde espacio en pasillos largos." },
      { tr: "Sí, las ventanas dan al sur. En invierno casi no hace falta poner la calefacción." },
      { tr: "Los gastos rondan los cien euros al mes, con la calefacción incluida." },
      { tr: "El alquiler sin gastos es de seiscientos cincuenta euros." },
      { task: "Pregunta si se puede negociar el alquiler o desde cuándo está libre.", opts: [
        { tr: "¿Se puede hablar del alquiler?" },
        { tr: "¿Desde cuándo está libre el piso?" }
      ] },
      { tr: "El propietario baja a seiscientos euros si firma el contrato esta misma semana." },
      { tr: "El piso está libre a partir del día uno del mes que viene." },
      { tr: "A partir del día uno del mes que viene. Pero el alquiler sigue siendo de seiscientos cincuenta euros." },
      { task: "Decide: ¿te lo quedas o te lo piensas?", opts: [
        { tr: "Me quedo con el piso." },
        { tr: "Me lo pienso y ya le aviso." }
      ] },
      { tr: "Muy bien. Le mando el contrato de alquiler por correo electrónico como muy tarde mañana." },
      { tr: "Hablamos en los próximos días." },
      { tr: "Claro, piénselo con calma. Ya tiene mi número." },
      { task: "Da las gracias y despídete.", tr: "Gracias, adiós." },
      { tr: "Adiós." }
    ]
  },
  "conv:arzt-halsschmerzen": {
    title: "En la consulta, con dolor de garganta",
    setting: "Una consulta de medicina general. Te duele la garganta desde hace tres días y tienes que explicar bien cómo estás.",
    closing: "En Alemania el parte de baja va por vía electrónica a la caja del seguro médico (Krankenkasse), pero avisar a la empresa te toca a ti. Para algo que empezó y sigue ahora, seit va con presente, como en español: «seit drei Tagen», «desde hace tres días», y rige dativo.",
    turns: [
      { tr: "Buenos días, siéntese. ¿En qué puedo ayudarle?" },
      { task: "Di que te duele la garganta desde hace tres días, con o sin fiebre.", opts: [
        { tr: "Me duele la garganta y tengo fiebre desde hace tres días." },
        { tr: "Me duele la garganta desde hace tres días, pero no tengo fiebre." }
      ] },
      { tr: "Tres días con fiebre. ¿Cuánto tenía?" },
      { task: "Di que tenías treinta y ocho y medio.", tr: "Treinta y ocho coma cinco." },
      { tr: "Eso ya es bastante. Abra la boca, por favor." },
      { tr: "Sin fiebre, eso ya es buena señal. Abra la boca, por favor." },
      { tr: "La garganta está muy enrojecida. ¿Le duele al tragar?" },
      { task: "Di si te duele al tragar.", opts: [
        { tr: "Sí, me duele mucho al tragar." },
        { tr: "No, solo me pica un poco." }
      ] },
      { tr: "Entonces le hago un frotis. Según el resultado decidimos si necesita un antibiótico." },
      { tr: "Parece un resfriado: de momento no veo motivo para un antibiótico. Haga gárgaras con agua con sal y beba muchas cosas calientes." },
      { tr: "En cualquier caso necesita reposo. Si dentro de tres días no está mejor, vuelva." },
      { task: "Pregunta por el trabajo o por el deporte.", opts: [
        { tr: "¿Tengo que quedarme en casa o puedo ir a trabajar?" },
        { tr: "¿Puedo hacer deporte?" }
      ] },
      { tr: "Le doy la baja para tres días. El certificado de incapacidad laboral va por vía electrónica a su caja del seguro médico, pero a su empresa tiene que avisarla usted." },
      { tr: "Deporte mejor no, mientras la garganta esté así. Pasear sí puede." },
      { tr: "¡Que se mejore!" },
      { task: "Da las gracias y despídete.", tr: "Gracias, adiós." },
      { tr: "Adiós." }
    ]
  },
  "conv:pflege-aufnahme": {
    title: "Ingreso en planta",
    setting: "Una planta de medicina interna. Eres la enfermera de turno y recibes al señor Wagner, de 82 años, que acaba de llegar para ingresar.",
    closing: "Con el paciente, siempre Sie, como el usted, aunque sea mayor y cariñoso: tutear a un adulto desconocido suena condescendiente. Wassertablette («pastilla del agua») es el nombre coloquial del diurético, igual que en español. La Klingel, el timbre, se enseña nada más llegar, y conviene que el paciente la pruebe: muchos mayores no llaman por no «molestar».",
    turns: [
      { tr: "Buenos días. Me han dicho que me presente aquí, en la planta siete." },
      { task: "Preséntate y di que vas a hacer el ingreso.", tr: "Buenos días, soy Lena, su enfermera. Ahora le hago el ingreso." },
      { tr: "Ah, bien. Estoy un poco nervioso, ¿sabe?" },
      { task: "Pregunta el nombre completo y la fecha de nacimiento.", tr: "¿Cuál es su nombre completo y cuándo nació?" },
      { tr: "Heinrich Wagner, nacido el doce de marzo de mil novecientos cuarenta y cuatro." },
      { task: "Da las gracias y pregunta qué molestias tiene.", tr: "Gracias, señor Wagner. ¿Qué molestias tiene?" },
      { tr: "Desde hace una semana me falta el aire, sobre todo por la noche. Y se me han hinchado mucho las piernas." },
      { task: "Pregunta si tiene alergias, por ejemplo a medicamentos.", tr: "¿Tiene alergias, por ejemplo a algún medicamento?" },
      { tr: "Sí, a la penicilina. Me sale un sarpullido." },
      { task: "Di que lo anotas enseguida en su historia.", tr: "Lo apunto enseguida en su historia clínica." },
      { tr: "¿Y mis pastillas? Las tengo todas en la bolsa." },
      { task: "Pide la lista de medicación del médico de cabecera, o las cajas.", opts: [
        { tr: "¿Trae la lista de medicación de su médico de cabecera?" },
        { tr: "Enséñeme las cajas, por favor, y las apunto." }
      ] },
      { tr: "Sí, aquí está. Me la imprimió mi médico de cabecera la semana pasada." },
      { tr: "Aquí: una pastilla del agua, un anticoagulante y algo para la tensión." },
      { tr: "¿Aquí tengo que tomarme yo las pastillas?" },
      { task: "Dile que la medicación se la da la planta.", tr: "No, aquí la medicación se la damos nosotros." },
      { tr: "Bien. ¿Y si por la noche necesito algo?" },
      { task: "Enséñale el timbre junto a la cama.", tr: "Entonces pulse el timbre que tiene aquí junto a la cama, por favor." },
      { tr: "¿El botón rojo de aquí? Eso me lo puedo acordar." },
      { task: "Propón que lo pruebe, o pregunta si necesita algo más.", opts: [
        { tr: "Exacto. ¿Quiere probarlo una vez?" },
        { tr: "Exacto. ¿Necesita algo más ahora mismo?" }
      ] },
      { tr: "Oh, encima de la puerta se enciende una luz. Así sé que funciona." },
      { tr: "No, gracias, de momento tengo de todo." },
      { tr: "Muchas gracias, es usted muy amable." },
      { task: "Contesta y di que el médico viene enseguida.", tr: "De nada. El médico viene a verle enseguida." },
      { tr: "Gracias." }
    ]
  },
  "conv:pflege-telefon-angehoerige": {
    title: "Al teléfono con una familiar",
    setting: "Planta siete, por la tarde. Suena el teléfono: es la hija del señor Wagner, que ingresó ayer. Quiere saberlo todo, ya.",
    closing: "Por teléfono no ves quién llama: antes de decir nada compruebas en la historia si el paciente ha autorizado a esa persona. Es la Schweigepflicht, el secreto profesional. El diagnóstico lo da el médico, y «Das bespricht der Arzt mit Ihnen» es la frase para decirlo sin cerrar la puerta. Al teléfono uno se despide con «Auf Wiederhören» («hasta oírnos»), no con «Auf Wiedersehen».",
    turns: [
      { tr: "Buenas tardes, ¿es la planta siete? Mi padre, Heinrich Wagner, ingresó ayer con ustedes." },
      { task: "Confirma la planta y preséntate.", tr: "Sí, esta es la planta siete, habla con Lena, de enfermería." },
      { tr: "Estoy tan preocupada. ¿Cómo está? ¿Qué tiene exactamente?" },
      { task: "Antes de informar: pide su nombre o explica el secreto profesional.", opts: [
        { tr: "¿Me dice su nombre, por favor? Tengo que comprobar si su padre la ha indicado como persona de contacto." },
        { tr: "Estoy sujeta al secreto profesional y solo puedo informar a las personas que su padre ha autorizado." }
      ] },
      { tr: "Sabine Schneider, soy su hija." },
      { tr: "Lo entiendo. Soy su hija, Sabine Schneider. Me indicó él al ingresar." },
      { task: "Confirma que su nombre está en la historia y di cómo ha pasado la noche.", tr: "Gracias, señora Schneider, su nombre está en la historia. Su padre ha pasado una noche tranquila." },
      { tr: "Gracias a Dios. ¿Y el diagnóstico? ¿Es el corazón? ¿Hay que operarle?" },
      { task: "Remite el diagnóstico al médico.", tr: "Eso lo hablará el médico con usted. Como enfermera no puedo decirle nada sobre el diagnóstico." },
      { tr: "¿Y cuándo puedo hablar con el médico? Trabajo hasta las cinco." },
      { task: "Ofrece una llamada hoy o una cita mañana.", opts: [
        { tr: "Le pido al doctor Krüger que la llame hoy después de las cinco." },
        { tr: "Puede venir mañana a las dos para hablar con el médico. ¿Le viene bien?" }
      ] },
      { tr: "Sería muy amable. Mi móvil lo tienen, lo dejé ayer en el ingreso." },
      { tr: "Las dos me vienen bien, me tomo la tarde libre." },
      { tr: "¿Puede decirle a mi padre que he llamado?" },
      { task: "Di que se lo dirás con gusto.", tr: "Claro, se lo digo con mucho gusto." },
      { tr: "Muchas gracias. Y perdone que antes estuviera tan impaciente." },
      { task: "Tranquilízala y despídete como se hace al teléfono.", tr: "No se preocupe, la entiendo muy bien. Adiós, señora Schneider." },
      { tr: "Adiós." }
    ]
  }
});
