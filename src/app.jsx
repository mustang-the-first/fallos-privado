import { useState, useMemo, useRef, useEffect } from "react";

const CASES = [
  // ═══ CAP. I — Control de constitucionalidad ═══
  {id:1,name:"Marbury v. Madison",year:1803,court:"Corte Suprema de EE.UU.",ref:"1 Cranch 137, 5 U.S. 1",chapter:"I",category:"Constitucional",pFrom:15,pTo:28,
   summary:"Estableció el control judicial de constitucionalidad (judicial review). El juez Marshall determinó que la Corte tiene el poder de declarar inconstitucional una ley del Congreso cuando contradice la Constitución.",
   importance:"Es el origen del control de constitucionalidad y la supremacía constitucional.",
   resumen:`Hechos: Tras perder las elecciones de 1800, el presidente saliente John Adams designó a 42 jueces de paz, entre ellos William Marbury. Su secretario de Estado, John Marshall (ya designado presidente de la Corte Suprema), no alcanzó a entregar todos los nombramientos. El nuevo presidente Jefferson ordenó a su secretario Madison no entregarlos. Marbury pidió a la Corte un mandamiento (writ of mandamus) para que Madison le entregara su nombramiento.

Decisión: La Corte, presidida por el propio Marshall, resolvió tres cuestiones: (1) Marbury tenía derecho al nombramiento; (2) la ley le daba un remedio; pero (3) la Corte no podía emitir el mandamus porque la sección 13 de la Judiciary Act, que ampliaba la competencia originaria de la Corte, era inconstitucional al contradecir el art. III de la Constitución.

Doctrina: Si una ley se opone a la Constitución, los tribunales deben aplicar la Constitución porque es la ley suprema. Esto fundó la doctrina del judicial review: el Poder Judicial tiene la última palabra sobre la constitucionalidad de las leyes.`},

  {id:2,name:"Sojo",year:1887,court:"CSJN",ref:"Fallos: 32:120",chapter:"I",category:"Constitucional",pFrom:29,pTo:40,
   summary:"Primer antecedente del control de constitucionalidad en Argentina. La CSJN citó a Marbury v. Madison y se declaró incompetente para entender por jurisdicción originaria en un hábeas corpus.",
   importance:"Adoptó la doctrina de Marbury v. Madison al derecho argentino.",
   resumen:`Hechos: Eduardo Sojo, periodista y director del periódico "Don Quijote", fue arrestado por orden de la Cámara de Diputados por publicar caricaturas consideradas ofensivas al cuerpo legislativo. Sojo interpuso un recurso de hábeas corpus directamente ante la CSJN, invocando la jurisdicción originaria del tribunal.

Decisión: La CSJN se declaró incompetente. Sostuvo que la jurisdicción originaria de la Corte está taxativamente establecida en la Constitución (arts. 100 y 101, hoy 116 y 117) y no puede ser ampliada por ley del Congreso. Al hacerlo, citó expresamente la doctrina de Marbury v. Madison.

Doctrina: La CSJN importó al derecho argentino la doctrina del control judicial de constitucionalidad: es función de los jueces verificar la compatibilidad de las leyes con la Constitución y, en caso de conflicto, hacer prevalecer la norma suprema. No puede ampliarse por ley la competencia originaria de la Corte.`},

  {id:3,name:"Municipalidad de la Capital c/ Elortondo",year:1888,court:"CSJN",ref:"Fallos: 33:162",chapter:"I",category:"Constitucional",pFrom:41,pTo:50,
   summary:"Declaró inconstitucional parte de una ley de expropiación para la apertura de la Avenida de Mayo, por exceder lo necesario para la obra pública.",
   importance:"Consolidó el control de constitucionalidad y los límites al poder expropiatorio del Estado.",
   resumen:`Hechos: Para la apertura de la Avenida de Mayo en Buenos Aires, el Congreso sancionó una ley que autorizaba la expropiación de la totalidad de los terrenos frentistas, incluso aquellas porciones no necesarias para la obra. Isabel A. de Elortondo resistió la expropiación de la parte sobrante de su terreno.

Decisión: La CSJN declaró inconstitucional la ley en cuanto autorizaba la expropiación más allá de lo estrictamente necesario para la obra pública. Sostuvo que la expropiación solo se justifica por causa de "utilidad pública" (art. 17 CN) y no puede extenderse a bienes que no resultan indispensables para cumplir esa finalidad.

Doctrina: El derecho de propiedad es inviolable (art. 17 CN) y la expropiación tiene como límite la utilidad pública concreta. Los jueces pueden controlar la constitucionalidad de las leyes y declarar su invalidez cuando vulneran derechos constitucionales. La Corte ejerció control de constitucionalidad sobre una ley del Congreso en defensa del derecho de propiedad.`},

  {id:4,name:"Rodríguez Pereyra c/ Ejército Argentino",year:2012,court:"CSJN",ref:"Fallos: 335:2333",chapter:"I",category:"Constitucional",pFrom:51,pTo:59,
   summary:"Habilitó el control de constitucionalidad de oficio. Los jueces deben verificar la compatibilidad constitucional de las normas aun sin petición de parte.",
   importance:"Consagró el control de constitucionalidad de oficio en Argentina.",
   resumen:`Hechos: Jorge Rodríguez Pereyra, conscripto del Ejército Argentino, sufrió lesiones durante el servicio militar. Demandó daños y perjuicios. La indemnización tarifada prevista por la ley militar resultaba muy inferior a la que correspondería por el régimen común de responsabilidad civil. Si bien las partes no habían planteado la inconstitucionalidad de esa norma, el tribunal consideró la cuestión de oficio.

Decisión: La CSJN estableció que los jueces tienen el deber de ejercer el control de constitucionalidad de oficio, es decir, aun cuando las partes no lo soliciten. Consideró que el "control de convencionalidad" impuesto por la jurisprudencia de la Corte IDH refuerza esta obligación.

Doctrina: El control de constitucionalidad y de convencionalidad de oficio es un deber de todos los jueces, no una facultad. Se funda en la supremacía constitucional (art. 31 CN) y en la obligación internacional de realizar control de convencionalidad (Corte IDH, "Almonacid Arellano"). No implica que el juez actúe de oficio en cualquier caso, sino que no puede dejar de aplicar la Constitución por el solo hecho de que nadie haya planteado la cuestión.`},

  // ═══ CAP. II — Tratados internacionales ═══
  {id:5,name:"Martin & Cía. c/ Adm. Gral. de Puertos",year:1963,court:"CSJN",ref:"Fallos: 257:99",chapter:"II",category:"Constitucional",pFrom:60,pTo:62,
   summary:"Estableció que tratados y leyes tienen igual jerarquía, aplicándose la norma posterior. Doctrina luego superada por Ekmekdjian.",
   importance:"Teoría dualista de paridad entre tratados y leyes, vigente hasta 1992.",
   resumen:`Hechos: La empresa Martin & Cía. reclamó la repetición de recargos aduaneros cobrados sobre mercaderías importadas de Brasil. Alegó que dichos recargos violaban un tratado comercial celebrado entre Argentina y Brasil en el marco de la ALALC (hoy ALADI). La ley interna posterior había impuesto esos recargos en contradicción con el tratado.

Decisión: La CSJN aplicó el principio "lex posterior derogat priori" y sostuvo que leyes y tratados tienen la misma jerarquía normativa. Como la ley que creó los recargos era posterior al tratado, prevaleció sobre este.

Doctrina: Tanto las leyes como los tratados internacionales son "ley suprema de la Nación" (art. 31 CN) con igual jerarquía. En caso de conflicto, prevalece la norma posterior en el tiempo. Esta doctrina fue abandonada en 1992 por el fallo Ekmekdjian c/ Sofovich, que reconoció la primacía de los tratados.`},

  {id:6,name:"Ekmekdjian c/ Sofovich",year:1992,court:"CSJN",ref:"Fallos: 315:1492",chapter:"II",category:"Constitucional",pFrom:63,pTo:76,
   summary:"Reconoció la primacía de los tratados sobre las leyes internas, fundándose en la Convención de Viena. Operatividad del derecho de réplica (CADH).",
   importance:"Cambio fundamental: los tratados prevalecen sobre las leyes. Anticipó la reforma constitucional de 1994.",
   resumen:`Hechos: En el programa televisivo de Gerardo Sofovich, el escritor Dalmiro Sáenz realizó expresiones que Miguel Ekmekdjian consideró agraviantes hacia la Virgen María y Jesucristo. Ekmekdjian solicitó ejercer su derecho de réplica (art. 14.1 de la CADH), pero el conductor se negó. Ekmekdjian demandó judicialmente. La cuestión central era si el derecho de réplica previsto en la CADH era operativo (directamente exigible) o programático (necesitaba una ley reglamentaria).

Decisión: La CSJN, modificando su jurisprudencia anterior (caso "Ekmekdjian c/ Neustadt"), declaró la operatividad del derecho de réplica. Fundamentó la primacía de los tratados sobre las leyes internas en el art. 27 de la Convención de Viena sobre Derecho de los Tratados: un Estado no puede invocar disposiciones de derecho interno para incumplir un tratado.

Doctrina: Los tratados internacionales tienen jerarquía superior a las leyes internas (se abandona la doctrina de Martin & Cía.). Una norma de un tratado es directamente operativa cuando está formulada de manera suficientemente concreta como para ser aplicada por un juez sin necesidad de reglamentación legislativa. La Convención de Viena (art. 27) impone una pauta de prelación de los tratados sobre las leyes.`},

  {id:7,name:"Cafés La Virginia S.A.",year:1994,court:"CSJN",ref:"Fallos: 317:1282",chapter:"II",category:"Constitucional",pFrom:77,pTo:81,
   summary:"Confirmó la supremacía de los tratados sobre las leyes, incluyendo tratados de integración (MERCOSUR/ALADI).",
   importance:"Extendió la primacía de los tratados al derecho de integración.",
   resumen:`Hechos: Cafés La Virginia importó café crudo de Brasil, que estaba exento de gravámenes conforme a un acuerdo comercial suscripto en el marco de la ALADI. Sin embargo, el Fisco le aplicó una "tasa de estadística" del 3% a la importación. La empresa pagó bajo protesto y luego reclamó la repetición.

Decisión: La CSJN hizo lugar al reclamo. Sostuvo que la tasa de estadística, como gravamen a la importación, violaba las obligaciones asumidas por Argentina en el tratado de la ALADI. Reiteró la doctrina de Ekmekdjian sobre la primacía de los tratados.

Doctrina: Los tratados internacionales prevalecen sobre las leyes internas, incluyendo los tratados de integración económica (ALADI, MERCOSUR). Una ley o resolución interna no puede crear gravámenes que contradigan exenciones pactadas en tratados internacionales. Se reafirma la jerarquía supralegal de los tratados.`},

  {id:8,name:"Fontevecchia y D'Amico (cumplimiento)",year:2017,court:"CSJN",ref:"Fallos: 340:47",chapter:"II",category:"Constitucional",pFrom:82,pTo:99,
   summary:"La CSJN se negó a cumplir la orden de la Corte IDH de 'dejar sin efecto' una sentencia firme propia, por exceso de competencia del tribunal interamericano.",
   importance:"Estableció los límites del diálogo entre la CSJN y la Corte IDH.",
   resumen:`Hechos: En 2001, la CSJN había condenado a los periodistas Fontevecchia y D'Amico por publicar información sobre un hijo extramatrimonial del entonces presidente Menem (caso "Menem c/ Editorial Perfil"). En 2011, la Corte IDH declaró que Argentina había violado la libertad de expresión y ordenó "dejar sin efecto" esa condena civil. El Ministerio de Relaciones Exteriores remitió la sentencia a la CSJN para su cumplimiento.

Decisión: La CSJN se negó a "dejar sin efecto" su propia sentencia. Reconoció que las sentencias de la Corte IDH son, en principio, obligatorias (art. 68.1 CADH), pero sostuvo que la orden de revocar un fallo firme de la CSJN excedía las competencias remediales de la Corte IDH.

Doctrina: La obligatoriedad de las sentencias de la Corte IDH alcanza únicamente a las medidas dictadas dentro de sus potestades remediales. La Corte IDH no es una "cuarta instancia" revisora de sentencias de tribunales nacionales. La CSJN no puede ser privada de su carácter de órgano supremo del Poder Judicial argentino (art. 108 CN). Se busca un diálogo respetuoso entre ambos tribunales, pero con límites constitucionales.`},

  // ═══ CAP. III — Constitucionalización del Derecho Privado ═══
  {id:9,name:"Ferreyra c/ V.I.C.O.V. S.A.",year:2006,court:"CSJN",ref:"Fallos: 329:646",chapter:"III",category:"Civil",pFrom:100,pTo:104,
   summary:"Aplicó principios constitucionales y de tratados de DDHH al derecho privado en un caso de daños, consolidando la constitucionalización del derecho privado.",
   importance:"Aplicación directa de normas constitucionales a relaciones entre particulares.",
   resumen:`Hechos: Víctor y Ramón Ferreyra demandaron a V.I.C.O.V. S.A. (concesionaria vial) por daños y perjuicios derivados de un accidente de tránsito ocurrido en una ruta concesionada. La cuestión central era la responsabilidad de la concesionaria por los daños sufridos por un usuario de la ruta.

Decisión: La CSJN hizo lugar al reclamo, fundando la responsabilidad de la concesionaria en el deber de seguridad que pesa sobre quien lucra con una actividad. Aplicó directamente principios constitucionales (derecho a la vida, integridad física) y normas de tratados internacionales de derechos humanos para reforzar la obligación de indemnizar.

Doctrina: El derecho privado no puede interpretarse aisladamente de la Constitución y los tratados de DDHH. Los principios constitucionales irradian sobre todas las ramas del derecho (constitucionalización del derecho privado). La concesionaria vial tiene un deber de seguridad cuyo incumplimiento genera responsabilidad objetiva frente a los usuarios.`},

  {id:10,name:"Ledesma c/ Metrovías S.A.",year:2008,court:"CSJN",ref:"Fallos: 331:819",chapter:"III",category:"Civil",pFrom:105,pTo:113,
   summary:"Responsabilizó a Metrovías por daños a una pasajera. Enfatizó el deber de seguridad del transportista con fundamento constitucional.",
   importance:"Consolidó la constitucionalización del derecho de daños en el transporte público.",
   resumen:`Hechos: María Leonor Ledesma sufrió una caída en una estación del subterráneo operado por Metrovías S.A. Demandó a la concesionaria por los daños sufridos. La empresa se defendió alegando culpa de la víctima.

Decisión: La CSJN responsabilizó a Metrovías. Sostuvo que el transportista tiene una obligación de resultado: trasladar al pasajero sano y salvo. Esta obligación se funda no solo en el contrato de transporte, sino en el derecho constitucional a la vida, la salud y la integridad física (arts. 42 y 75 inc. 22 CN).

Doctrina: El deber de seguridad del transportista es una obligación de resultado con fundamento constitucional. No basta con alegar culpa de la víctima: la empresa debe probar la ruptura del nexo causal. Los tratados de DDHH jerarquizados constitucionalmente refuerzan la protección de la integridad física de los usuarios del transporte público.`},

  {id:11,name:"Descole c/ Empresa Ferrocarriles Argentinos",year:1998,court:"CSJN",ref:"Fallos: 321:700",chapter:"III",category:"Civil",pFrom:114,pTo:121,
   summary:"Responsabilidad por daños en el transporte ferroviario. Articulación entre normas constitucionales y de derecho privado.",
   importance:"Contribuyó a la jurisprudencia sobre responsabilidad en el transporte y fuentes del derecho.",
   resumen:`Hechos: Alicia Descole y otros demandaron a Ferrocarriles Argentinos por daños sufridos en un accidente ferroviario. La cuestión versaba sobre el alcance de la responsabilidad del transportista y los factores de atribución aplicables.

Decisión: La CSJN condenó a la empresa, aplicando la responsabilidad objetiva del transportista. Enfatizó que el deber de seguridad del concesionario de un servicio público no puede ser eludido, y que la interpretación del derecho privado debe hacerse a la luz de los principios constitucionales.

Doctrina: La responsabilidad del transportista ferroviario es objetiva, fundada en el riesgo de la actividad. Las normas del derecho privado sobre responsabilidad deben interpretarse en armonía con los principios constitucionales de protección de la vida y la integridad física. El vínculo contractual de transporte genera un deber de seguridad reforzado.`},

  // ═══ CAP. IV — La Ley: interpretación y aplicación ═══
  {id:12,name:"Municipalidad de Olavarría c/ Estado Nacional",year:2004,court:"CSJN",ref:"Fallos: 327:1662",chapter:"IV",category:"Civil",pFrom:122,pTo:125,
   summary:"La primera fuente de interpretación es la letra de la ley. Los jueces no pueden sustituir al legislador.",
   importance:"Reafirmó la letra de la ley como punto de partida de toda interpretación.",
   resumen:`Hechos: La Municipalidad de Olavarría demandó al Estado Nacional en una controversia sobre competencias y recursos. La resolución del caso dependía de la interpretación de las normas que regulaban la distribución de potestades entre Nación y municipios.

Decisión: La CSJN sostuvo que la primera regla de interpretación de la ley es darle pleno efecto a la intención del legislador, y que la primera fuente para determinar esa voluntad es la letra de la ley. Cuando el texto es claro, no corresponde a los jueces prescindir de sus términos bajo pretexto de penetrar su espíritu.

Doctrina: La primera fuente de hermenéutica legal es la letra de la ley. Los jueces no deben sustituir al legislador sino aplicar la norma tal como fue concebida. Solo cuando la literalidad conduce a resultados absurdos o irrazonables cabe recurrir a otros métodos interpretativos (finalidad, contexto, voluntad del legislador).`},

  {id:13,name:"Batalla, Rufino (causa Hidalgo Garzón)",year:2018,court:"CSJN",ref:"Fallos: 341:1768",chapter:"IV",category:"Penal",pFrom:126,pTo:141,
   summary:"Analizó la ley interpretativa 27.362 (post fallo Bignone sobre el 2x1 en lesa humanidad). Distinción entre ley interpretativa y modificatoria.",
   importance:"Clave para la distinción entre leyes interpretativas y modificatorias y sus efectos temporales.",
   resumen:`Hechos: Tras el polémico fallo "Muiña" (Bignone, Fallos: 340:549) de 2017, donde la CSJN aplicó el beneficio del "2x1" (ley 24.390) a condenados por delitos de lesa humanidad, el Congreso dictó la ley 27.362 que "aclaró" que dicho beneficio no era aplicable a delitos de lesa humanidad. Rufino Batalla, condenado en la causa Hidalgo Garzón, solicitó la aplicación del 2x1, lo que planteó la cuestión de la naturaleza de la ley 27.362.

Decisión: La CSJN determinó que la ley 27.362 era una ley interpretativa (no modificatoria), por lo que se aplicaba retroactivamente a situaciones anteriores a su dictado. Distinguió entre: (a) ley interpretativa: aclara el sentido de una norma preexistente, sin crear derecho nuevo; (b) ley modificatoria: altera el contenido normativo, y por tanto rige solo hacia el futuro.

Doctrina: Para verificar si una ley es interpretativa se debe constatar que: (1) no innova en el ordenamiento; (2) se limita a aclarar conceptos oscuros o a resolver interpretaciones contradictorias; (3) no afecta derechos amparados por la ley anterior. La ley interpretativa rige desde la vigencia de la norma que interpreta; la modificatoria, solo hacia el futuro.`},

  {id:14,name:"Rizzo (Gente de Derecho) c/ PEN",year:2013,court:"CSJN",ref:"Fallos: 336:760",chapter:"IV",category:"Constitucional",pFrom:142,pTo:156,
   summary:"Declaró inconstitucionales artículos de la Ley 26.855 sobre elección popular de miembros del Consejo de la Magistratura.",
   importance:"Reafirmó la independencia del Poder Judicial y los límites al legislador.",
   resumen:`Hechos: La ley 26.855 (de "democratización de la justicia") establecía la elección por voto popular de los representantes de jueces, abogados y académicos en el Consejo de la Magistratura. Jorge Rizzo, apoderado de una lista de abogados, impugnó la ley por inconstitucional.

Decisión: La CSJN declaró la inconstitucionalidad de los artículos impugnados. Sostuvo que la elección por voto popular de los estamentos técnicos del Consejo desnaturalizaba el equilibrio previsto por el art. 114 de la CN, que exige una representación equilibrada entre los sectores políticos, judiciales, profesionales y académicos.

Doctrina: El art. 114 CN impone un modelo de composición del Consejo de la Magistratura basado en el equilibrio entre estamentos (no en la representación electoral directa). La elección popular de todos los representantes subordinaría los estamentos técnicos a la lógica partidaria, afectando la independencia judicial. El legislador no puede alterar la estructura constitucional del Consejo.`},

  {id:15,name:"Longo, Antonio A.",year:1975,court:"CSJN",ref:"Fallos: 293:157",chapter:"IV",category:"Administrativo",pFrom:157,pTo:158,
   summary:"Las normas no publicadas en el Boletín Oficial no son obligatorias. La publicidad es requisito esencial para la vigencia.",
   importance:"Consagró el principio de publicidad de las normas.",
   resumen:`Hechos: Antonio Longo fue sancionado por infringir una resolución del Ministerio de Comercio (Res. 124/72) que regulaba precios máximos. Longo alegó que dicha resolución nunca había sido publicada en el Boletín Oficial.

Decisión: La CSJN revocó la sanción. Sostuvo que la publicación en el Boletín Oficial es un requisito esencial para la obligatoriedad de las normas generales. Una norma no publicada no puede generar efectos jurídicos obligatorios para los particulares, quienes no están obligados a cumplir lo que no pueden conocer.

Doctrina: El principio de publicidad de las normas es una garantía constitucional implícita vinculada al derecho de defensa y al principio de legalidad. Nadie puede ser sancionado por incumplir una norma que no fue publicada. La publicación no es una mera formalidad sino un requisito de validez de la norma en su faz obligatoria.`},

  {id:16,name:"Municipalidad de Mercedes c/ Arcor",year:2012,court:"CSJN",ref:"Fallos: 335:1459",chapter:"IV",category:"Administrativo",pFrom:159,pTo:161,
   summary:"Reglas sobre potestad tributaria municipal, publicidad de normas impositivas y legalidad tributaria.",
   importance:"Definió alcances y límites de la potestad tributaria municipal.",
   resumen:`Hechos: La Municipalidad de Mercedes reclamó a Arcor S.A.I.C. el pago de tasas municipales. La empresa cuestionó la validez de las ordenanzas impositivas invocadas, alegando falta de publicación y violación del principio de legalidad tributaria.

Decisión: La CSJN hizo lugar a la defensa de Arcor. Reiteró que las normas tributarias deben cumplir con el principio de publicidad para ser oponibles a los contribuyentes. Sin publicación adecuada, las ordenanzas tributarias no generan obligaciones exigibles.

Doctrina: Las tasas y contribuciones municipales están sujetas al principio de legalidad tributaria: deben estar establecidas por norma emanada de autoridad competente y debidamente publicada. La falta de publicación de la norma tributaria impide su exigibilidad. El municipio no puede cobrar tributos fundados en normas desconocidas por el contribuyente.`},

  {id:17,name:"Municipalidad de Berazategui c/ Molinos Río de la Plata",year:2018,court:"CSJN",ref:"Fallos: 341:1246",chapter:"IV",category:"Administrativo",pFrom:162,pTo:167,
   summary:"Aplicó la doctrina de Mercedes c/ Arcor sobre publicidad de normas tributarias municipales.",
   importance:"Ratificó la obligatoriedad de la publicidad en materia tributaria municipal.",
   resumen:`Hechos: La Municipalidad de Berazategui demandó a Molinos Río de la Plata por cobro de tasas municipales impagas. La empresa resistió el reclamo, invocando la doctrina del precedente "Mercedes c/ Arcor" sobre la necesidad de publicación de las normas tributarias.

Decisión: La CSJN resolvió que las cuestiones eran sustancialmente análogas a las tratadas en "Mercedes c/ Arcor" (Fallos: 335:1459) y aplicó la misma doctrina.

Doctrina: Se reafirma la obligatoriedad de la publicación de normas tributarias municipales como requisito de su exigibilidad. La CSJN aplica el principio de seguimiento de sus propios precedentes (stare decisis) cuando las circunstancias fácticas y jurídicas son sustancialmente análogas.`},

  {id:18,name:"Maleic S.A. c/ DGI",year:2007,court:"CSJN",ref:"Fallos: 330:3552",chapter:"IV",category:"Administrativo",pFrom:168,pTo:180,
   summary:"Interpretación de normas tributarias y repetición de impuestos pagados indebidamente. Criterios hermenéuticos de la ley fiscal.",
   importance:"Aportó criterios de interpretación de leyes tributarias y armonización normativa.",
   resumen:`Hechos: Maleic S.A. demandó la repetición de sumas pagadas en concepto de impuesto a las ganancias por el período 1998. La controversia se centró en la interpretación de las normas tributarias aplicables al caso, en particular la determinación de la base imponible.

Decisión: La CSJN hizo lugar al reclamo, estableciendo criterios hermenéuticos para la interpretación de normas tributarias. Sostuvo que las leyes impositivas deben interpretarse armonizándolas con el resto del ordenamiento jurídico, procurando que la aplicación a un caso concreto no derive en desigualdades.

Doctrina: Las leyes que crean tributos deben interpretarse atendiendo a su finalidad y al conjunto del ordenamiento. La interpretación debe procurar la armonía entre las normas fiscales y los principios constitucionales de igualdad y propiedad. No corresponde una interpretación extensiva de los hechos imponibles en perjuicio del contribuyente.`},

  {id:19,name:"Partido Comunista s/ acción de amparo",year:1995,court:"CSJN",ref:"Fallos: 318:567",chapter:"IV",category:"Constitucional",pFrom:181,pTo:186,
   summary:"Vigencia temporal de las leyes y derechos de partidos políticos. Relación entre leyes derogadas y derechos adquiridos.",
   importance:"Relevante para la interpretación del derecho transitorio.",
   resumen:`Hechos: El Partido Comunista impugnó por vía de amparo una norma que afectaba sus derechos como partido político. La cuestión exigía resolver sobre la vigencia temporal de la ley derogada y los derechos adquiridos bajo su vigencia.

Decisión: La CSJN analizó los efectos de la derogación de leyes sobre situaciones jurídicas constituidas bajo la vigencia de la norma anterior, sentando pautas sobre derecho transitorio y la protección de derechos adquiridos.

Doctrina: La derogación de una ley no afecta los derechos adquiridos bajo su vigencia (principio de irretroactividad). El derecho transitorio exige distinguir entre derechos consolidados (protegidos) y meras expectativas (no protegidas). Las leyes nuevas se aplican a las consecuencias futuras de situaciones preexistentes, pero no pueden desconocer derechos ya incorporados al patrimonio.`},

  {id:20,name:"Terren c/ Campili",year:2016,court:"CSJN",ref:"Fallos: 339:349",chapter:"IV",category:"Civil",pFrom:187,pTo:189,
   summary:"Aplicación temporal del nuevo CCyCN a un divorcio iniciado bajo el código anterior. Pautas de derecho transitorio.",
   importance:"Caso clave para la aplicación temporal del CCyCN de 2015.",
   resumen:`Hechos: Marcela Terren y otros iniciaron un juicio de divorcio bajo el Código Civil de Vélez Sarsfield. Durante la tramitación del proceso, entró en vigencia el nuevo Código Civil y Comercial (agosto de 2015), que eliminó las causales de divorcio y el requisito de la "culpa". Se planteó la cuestión de qué norma debía aplicarse al caso en trámite.

Decisión: La CSJN aplicó el nuevo CCyCN al caso en curso. Sostuvo que el principio de aplicación inmediata de la ley nueva (art. 7 CCyCN) se extiende a las consecuencias no consumadas de situaciones jurídicas preexistentes.

Doctrina: El art. 7 del CCyCN establece la aplicación inmediata de la ley nueva a las relaciones y situaciones jurídicas existentes, sin perjuicio de las ya cumplidas. En materia de divorcio, la eliminación del sistema de causales por el CCyCN se aplica inmediatamente a los procesos en trámite, sin que ello vulnere derechos adquiridos.`},

  {id:21,name:"Castro y Quevedo",year:1897,court:"CSJN",ref:"Fallos: 69:120",chapter:"IV",category:"Civil",pFrom:190,pTo:191,
   summary:"Caso histórico sobre interpretación de normas civiles, con criterios clásicos de hermenéutica legal.",
   importance:"Antecedente temprano de las pautas de interpretación legal de la CSJN.",
   resumen:`Hechos: Javier Castro y Demetrio Quevedo fueron parte en un litigio que requirió la interpretación de normas del Código Civil en un contexto de derecho penal económico (falsificación de mercaderías y marcas).

Decisión: La CSJN confirmó la sentencia recurrida, aplicando los criterios clásicos de interpretación legal: atención a la letra de la ley, su espíritu, la voluntad del legislador y el contexto normativo.

Doctrina: Las leyes deben interpretarse conforme a su sentido literal, en armonía con el conjunto del ordenamiento jurídico. Cuando la norma es clara, el juez debe aplicarla tal como está, sin forzar interpretaciones que la desnaturalicen. Es un antecedente temprano de la jurisprudencia de la CSJN sobre reglas de hermenéutica legal.`},

  {id:22,name:"Vidriería Argentina S.A. c/ Fisco Nacional",year:1960,court:"CSJN",ref:"Fallos: 248:356",chapter:"IV",category:"Administrativo",pFrom:192,pTo:202,
   summary:"Repetición de impuestos. Criterios de interpretación de la ley tributaria y relación ley general/ley especial.",
   importance:"Jurisprudencia sobre interpretación de leyes impositivas.",
   resumen:`Hechos: Vidriería Argentina S.A. reclamó la repetición de impuestos a los réditos y beneficios extraordinarios que consideraba pagados indebidamente. La controversia requería interpretar la relación entre la ley general de impuestos y normas especiales aplicables al sector.

Decisión: La CSJN analizó la relación entre normas generales y especiales en materia tributaria, estableciendo que la ley especial prevalece sobre la general cuando regula específicamente una materia (lex specialis derogat generali).

Doctrina: En materia tributaria, la ley especial prevalece sobre la general. Las exenciones impositivas deben interpretarse con criterio estricto, pero no de manera que se desnaturalice su propósito. El principio de legalidad tributaria exige que todo impuesto tenga fundamento en una ley formal, y su interpretación debe respetar el principio de capacidad contributiva.`},

  // ═══ CAP. V — Deber de resolver y sentencia arbitraria ═══
  {id:23,name:"Candia Acosta s/ queja",year:2019,court:"CSJN",ref:"Fallos: 342:93",chapter:"V",category:"Civil",pFrom:203,pTo:209,
   summary:"Doctrina de sentencia arbitraria y recurso de queja. Estándares de fundamentación suficiente de sentencias.",
   importance:"Reafirmó los requisitos de la doctrina de sentencia arbitraria.",
   resumen:`Hechos: Reina Teresa Candia Acosta interpuso un recurso de queja ante la CSJN por denegación de recurso extraordinario. Alegó que la sentencia impugnada carecía de fundamentación suficiente y constituía una sentencia arbitraria.

Decisión: La CSJN analizó los presupuestos de la doctrina de sentencia arbitraria. Recordó que una sentencia es arbitraria cuando: carece de fundamentos, se aparta de las constancias de la causa, o aplica erróneamente el derecho, de modo que no constituye una derivación razonada del derecho vigente.

Doctrina: La sentencia arbitraria es aquella que no constituye una derivación razonada del derecho vigente con arreglo a las circunstancias del caso. Los jueces tienen el deber constitucional de fundar sus decisiones. La arbitrariedad no equivale a mera discrepancia con el criterio del juez, sino que requiere un vicio grave que prive a la sentencia de validez como acto jurisdiccional.`},

  {id:24,name:"Rey c/ Rocha",year:1909,court:"CSJN",ref:"Fallos: 112:384",chapter:"V",category:"Civil",pFrom:210,pTo:212,
   summary:"Deber de los jueces de resolver aun ante ausencia de ley. Origen del deber de resolver (non liquet).",
   importance:"Fundó la doctrina del deber de resolver en Argentina.",
   resumen:`Hechos: Celestino Rey demandó a Alfredo y Eduardo Rocha por falsificación de mercadería y de marca de fábrica. La cuestión exigía resolver aplicando normas que no regulaban expresamente todos los supuestos planteados, lo que obligó a la Corte a pronunciarse sobre la obligación del juez de decidir aun ante lagunas normativas.

Decisión: La CSJN sostuvo que los jueces tienen el deber inexcusable de resolver todos los casos sometidos a su jurisdicción. No pueden excusarse invocando silencio, oscuridad o insuficiencia de las leyes (prohibición del non liquet).

Doctrina: El deber de resolver es un principio fundamental del derecho procesal argentino. Los jueces no pueden dejar de juzgar bajo pretexto de silencio, oscuridad o insuficiencia de la ley. Ante lagunas normativas, deben recurrir a los principios generales del derecho, la analogía, la costumbre y la equidad para encontrar una solución justa.`},

  {id:25,name:"L., E.S. c/ CEMIC",year:2014,court:"CSJN",ref:"Fallos: 337:580",chapter:"V",category:"Civil",pFrom:213,pTo:218,
   summary:"Obligación de una prepaga de cubrir prestación médica. Deber de resolver vinculado al derecho a la salud.",
   importance:"Vincula el deber de resolver con la protección del derecho a la salud.",
   resumen:`Hechos: E.S.L. demandó al CEMIC (Centro de Educación Médica e Investigaciones Clínicas) para obtener la cobertura de una prestación médica que la entidad de medicina prepaga se negaba a brindar, alegando que no estaba incluida en el plan contratado.

Decisión: La CSJN hizo lugar al amparo y ordenó al CEMIC cubrir la prestación. Sostuvo que el derecho a la salud tiene rango constitucional (art. 42 CN y tratados de DDHH) y que los jueces deben encontrar una solución que proteja efectivamente ese derecho, aun cuando existan lagunas contractuales.

Doctrina: El derecho a la salud tiene jerarquía constitucional y convencional. Las empresas de medicina prepaga tienen obligaciones que exceden lo estrictamente pactado en el contrato, cuando está en juego la vida o la salud del afiliado. El deber de resolver se potencia ante derechos fundamentales: el juez no puede abstenerse de tutelar el derecho a la salud por falta de cobertura contractual expresa.`},

  {id:26,name:"González c/ ANSeS",year:2000,court:"CSJN",ref:"Fallos: 323:555",chapter:"V",category:"Civil",pFrom:219,pTo:231,
   summary:"Reajustes previsionales. Doctrina del precedente: su obligatoriedad y condiciones para apartarse de fallos anteriores.",
   importance:"Pautas sobre el valor del precedente y condiciones para modificar la jurisprudencia.",
   resumen:`Hechos: Herminia González demandó a la ANSeS por reajuste de haberes previsionales. La cuestión requería determinar si la CSJN debía seguir sus propios precedentes sobre movilidad jubilatoria o si podía apartarse de ellos.

Decisión: La CSJN reafirmó el valor de sus precedentes y estableció que, si bien sus fallos no son formalmente obligatorios para los tribunales inferiores, existe un "deber moral" de seguirlos. La propia Corte puede apartarse de sus precedentes, pero solo cuando existan razones suficientemente graves que justifiquen el cambio de criterio.

Doctrina: Los precedentes de la CSJN gozan de autoridad institucional. Los tribunales inferiores deben seguirlos salvo que aporten nuevos argumentos que justifiquen apartarse. La propia CSJN puede modificar su jurisprudencia, pero el cambio debe estar debidamente fundado y no puede ser caprichoso. La estabilidad jurisprudencial es un valor vinculado a la seguridad jurídica.`},

  // ═══ CAP. VI — Buena fe ═══
  {id:27,name:"Gutiérrez s/ tercería (autos Krebs c/ Krebs)",year:1976,court:"CSJN",ref:"Fallos: 294:220",chapter:"VI",category:"Civil",pFrom:232,pTo:234,
   summary:"Principio de buena fe aplicado a una tercería de dominio en un juicio de divorcio.",
   importance:"La buena fe como límite al ejercicio de derechos y herramienta de interpretación.",
   resumen:`Hechos: Oscar Gutiérrez interpuso una tercería de dominio sobre un inmueble en el marco del juicio de divorcio entre Adelaida Miolato de Krebs y Walter Krebs. La cuestión era si la adquisición del inmueble por parte del tercerista había sido hecha de buena fe.

Decisión: La CSJN evaluó la conducta de las partes a la luz del principio de buena fe. Determinó que el tercerista no había actuado con la diligencia y lealtad que el principio de buena fe exige, lo que afectaba la protección de su derecho.

Doctrina: La buena fe opera como un estándar de conducta exigible en todas las relaciones jurídicas. Quien adquiere un derecho debe hacerlo con diligencia y lealtad. La mala fe (conocimiento de una situación que vicia la adquisición) priva al adquirente de la protección que el ordenamiento brinda a los terceros de buena fe.`},

  {id:28,name:"Faifman c/ Estado Nacional",year:2015,court:"CSJN",ref:"Fallos: 338:161",chapter:"VI",category:"Civil",pFrom:235,pTo:240,
   summary:"La buena fe es exigible al Estado. Responsabilidad del Estado evaluada bajo este principio.",
   importance:"Extendió la buena fe a la actuación estatal en relaciones con particulares.",
   resumen:`Hechos: Ruth Faifman y otros demandaron al Estado Nacional por daños y perjuicios. La cuestión central era la conducta del Estado y si esta se ajustaba al principio de buena fe.

Decisión: La CSJN evaluó la conducta del Estado a la luz del principio de buena fe, concluyendo que el Estado debe actuar con lealtad y coherencia en sus relaciones con los particulares, al igual que cualquier sujeto de derecho privado.

Doctrina: El principio de buena fe (art. 1198 CC, hoy art. 9 CCyCN) es aplicable también a la conducta del Estado. La buena fe opera como un deber de conducta leal y como un factor de interpretación de las relaciones jurídicas entre el Estado y los particulares. El Estado no puede actuar contradictoriamente ni defraudar la confianza que su propia conducta generó.`},

  {id:29,name:"Zechner c/ CEMIC",year:2019,court:"CSJN",ref:"Fallos: 342:1921",chapter:"VI",category:"Laboral",pFrom:241,pTo:253,
   summary:"Buena fe laboral: evaluación de la conducta recíproca entre empleador y trabajador en un caso de despido.",
   importance:"Aplicó la buena fe al derecho laboral con estándares de conducta recíproca.",
   resumen:`Hechos: Evelina Zechner fue despedida del CEMIC. En el juicio por despido, se debatió la conducta de ambas partes (empleadora y trabajadora) y si cada una había cumplido con el estándar de buena fe exigible en la relación laboral.

Decisión: La CSJN analizó la conducta de las partes bajo el principio de buena fe laboral. Sostuvo que tanto el empleador como el trabajador deben actuar con lealtad, diligencia y buena fe durante toda la relación de trabajo, incluyendo su extinción.

Doctrina: La buena fe laboral (art. 63 LCT) impone deberes recíprocos a ambas partes de la relación de trabajo: el empleador debe actuar con lealtad al comunicar las razones del despido, y el trabajador debe cumplir sus obligaciones con diligencia. La buena fe no solo informa la interpretación del contrato, sino que también modula el ejercicio del poder disciplinario y la legitimidad del despido.`},

  // ═══ CAP. VII — Abuso del derecho ═══
  {id:30,name:"Arcángel Maggio S.A. s/ concurso preventivo",year:2007,court:"CSJN",ref:"Fallos: 330:834",chapter:"VII",category:"Civil",pFrom:254,pTo:271,
   summary:"Abuso del derecho en materia concursal. Un acuerdo preventivo puede ser abusivo si desnaturaliza los derechos de los acreedores.",
   importance:"Aplicación paradigmática del abuso del derecho (art. 1071 CC) en concursos.",
   resumen:`Hechos: Arcángel Maggio S.A. presentó un concurso preventivo y ofreció un acuerdo a sus acreedores que fue aprobado por la mayoría requerida. Sin embargo, un acreedor impugnó la homologación alegando que el acuerdo era abusivo porque ofrecía un pago ínfimo (una quita desproporcionada) que desnaturalizaba los derechos de los acreedores.

Decisión: La CSJN sostuvo que el acuerdo preventivo, aun cuando reúna las mayorías legales, puede ser declarado abusivo si sus condiciones exceden los límites impuestos por la buena fe, la moral y las buenas costumbres. El juez tiene la facultad de no homologar un acuerdo que configure un ejercicio abusivo del derecho por parte del deudor.

Doctrina: El abuso del derecho (art. 1071 CC, hoy art. 10 CCyCN) es aplicable en materia concursal. Un acuerdo preventivo es abusivo cuando la propuesta resulta manifiestamente desproporcionada, desnaturalizando los derechos de los acreedores más allá de lo que la situación patrimonial del deudor justifica. El juez debe controlar que el acuerdo no sea un instrumento de abuso, pese a contar con las mayorías legales.`},

  // ═══ CAP. VIII — Abuso de posición dominante ═══
  {id:31,name:"YPF S.A. s/ Ley 22.262",year:2002,court:"CSJN",ref:"Fallos: 325:1702",chapter:"VIII",category:"Civil",pFrom:278,pTo:304,
   summary:"Confirmó la sanción a YPF por abuso de posición dominante en el mercado de GLP, conforme a la ley de defensa de la competencia.",
   importance:"Principal precedente de la CSJN sobre abuso de posición dominante.",
   resumen:`Hechos: La Secretaría de Comercio sancionó a YPF S.A. por abusar de su posición dominante en el mercado de gas licuado de petróleo (GLP), en violación a la ley 22.262 (defensa de la competencia). YPF habría impuesto condiciones comerciales discriminatorias y restringido la competencia en el mercado de GLP envasado. La empresa apeló la sanción.

Decisión: La CSJN confirmó la sanción impuesta por la autoridad de competencia. Determinó que YPF detentaba posición dominante en el mercado relevante (GLP envasado) y que su conducta había sobrepasado los límites de la competencia legítima, afectando el interés económico general.

Doctrina: La posición dominante en un mercado no es ilícita en sí misma, pero sí lo es su abuso. Hay abuso cuando la empresa dominante utiliza su poder de mercado para imponer condiciones comerciales inequitativas, restringir la competencia o afectar el interés económico general. El análisis debe considerar: (1) la definición del mercado relevante; (2) la existencia de posición dominante; (3) si la conducta constituye un ejercicio abusivo de esa posición.`},

  // ═══ CAP. IX — Orden público, fraude a la ley ═══
  {id:32,name:"Caffarena c/ Banco Argentino del Rosario",year:1871,court:"CSJN",ref:"Fallos: 10:427",chapter:"IX",category:"Civil",pFrom:305,pTo:307,
   summary:"Concepto temprano de orden público en el derecho privado argentino, en el contexto de conversión de billetes.",
   importance:"Antecedente fundacional del orden público en el derecho privado.",
   resumen:`Hechos: José Caffarena, ciudadano extranjero, demandó al Banco Argentino del Rosario de Santa Fe exigiendo la conversión de billetes bancarios a metálico (oro o plata), conforme a las condiciones pactadas en los billetes emitidos por el banco.

Decisión: La CSJN abordó la cuestión analizando la naturaleza de las normas que regulaban la emisión de moneda y la conversión de billetes. Sostuvo que ciertas normas son de orden público y no pueden ser derogadas por la voluntad de las partes ni por convenciones particulares.

Doctrina: El orden público es un límite a la autonomía de la voluntad. Las normas de orden público son imperativas: las partes no pueden modificarlas por acuerdo. Este concepto se distingue de las normas supletorias (que sí admiten pacto en contrario). La clasificación entre normas de orden público y normas supletorias es fundamental para determinar la validez de los acuerdos entre particulares.`},

  {id:33,name:"Egea, Manuela Rosas de s/ pensión",year:1969,court:"CSJN",ref:"Fallos: 273:363",chapter:"IX",category:"Civil",pFrom:308,pTo:311,
   summary:"Fraude a la ley: matrimonio en el extranjero para eludir impedimentos legales argentinos.",
   importance:"Caso clave sobre fraude a la ley en derecho internacional privado.",
   resumen:`Hechos: Manuela Rosas de Egea solicitó una pensión como viuda de un agente estatal. Su matrimonio había sido celebrado en un país limítrofe con el propósito de eludir el impedimento de ligamen que existía en Argentina (su esposo tenía un matrimonio anterior no disuelto). La cuestión era si ese matrimonio podía producir efectos en Argentina.

Decisión: La CSJN rechazó el reconocimiento del matrimonio celebrado en el extranjero. Sostuvo que se trataba de un caso de fraude a la ley: los contrayentes habían utilizado una legislación extranjera más permisiva con el propósito deliberado de evadir normas imperativas argentinas (impedimento de ligamen).

Doctrina: El fraude a la ley consiste en utilizar un medio lícito (matrimonio en el extranjero) para alcanzar un resultado prohibido por el ordenamiento interno. Cuando se comprueba que la finalidad de recurrir a la ley extranjera fue eludir las normas imperativas argentinas, el acto es inoponible y no produce efectos jurídicos en Argentina. El orden público internacional opera como barrera frente al fraude.`},

  {id:34,name:"Solá s/ sucesión ab intestato",year:1996,court:"CSJN",ref:"Fallos: 319:2779",chapter:"IX",category:"Civil",pFrom:312,pTo:319,
   summary:"Revisó la doctrina sobre matrimonios en el extranjero, moderando la rigidez de precedentes anteriores.",
   importance:"Evolución del concepto de orden público y fraude a la ley.",
   resumen:`Hechos: En la sucesión de Jorge Vicente Solá se planteó la cuestión de los derechos hereditarios de su segunda esposa, con quien se había casado en el extranjero existiendo un matrimonio anterior no disuelto en Argentina. Se debatió si debía aplicarse la doctrina rígida de "Egea" (Fallos: 273:363) que negaba todo efecto al segundo matrimonio.

Decisión: La CSJN moderó la doctrina de "Egea" y reconoció ciertos efectos al matrimonio celebrado en el extranjero. Consideró que la noción de orden público es variable y evoluciona con el tiempo, y que la rigidez del precedente anterior no se ajustaba a la realidad social contemporánea.

Doctrina: El concepto de orden público es dinámico y mutable: lo que una sociedad considera de orden público en una época puede no serlo en otra. La evolución de las costumbres, la legislación y los valores sociales debe reflejarse en la interpretación del orden público. Un antecedente puede ser revisado cuando las circunstancias sociales que lo motivaron han cambiado sustancialmente.`},

  {id:35,name:"YPF S.A. c/ Mercante Hnos. s/ escrituración",year:2016,court:"CSJN",ref:"Fallos: 333:2044",chapter:"IX",category:"Civil",pFrom:320,pTo:328,
   summary:"Renuncia de derechos y pesificación de obligaciones en moneda extranjera. Límites del orden público económico.",
   importance:"Límites de la renuncia de derechos en contexto de emergencia económica.",
   resumen:`Hechos: YPF S.A. demandó a Mercante Hnos. por escrituración de un inmueble cuyo precio había sido pactado en dólares. Con la pesificación de 2002 (ley 25.561 y decretos), la obligación se convirtió a pesos, lo que generó un desequilibrio contractual. La cuestión era si la renuncia de derechos efectuada en ese contexto era válida.

Decisión: La CSJN analizó los límites a la renuncia de derechos, sosteniendo que la renuncia no puede ser contraria al orden público ni afectar derechos irrenunciables. En el contexto de la pesificación, las normas de emergencia establecían un piso de orden público económico que limitaba la autonomía de la voluntad.

Doctrina: La renuncia de derechos (art. 19 CC, hoy art. 944 CCyCN) está limitada por el orden público. No pueden renunciarse derechos cuando la ley lo prohíbe expresamente, cuando la renuncia afecta el orden público, o cuando perjudica derechos de terceros. En contextos de emergencia económica, las normas de orden público económico prevalecen sobre la autonomía de la voluntad.`},

  // ═══ CAP. X — Derechos de incidencia colectiva ═══
  {id:36,name:"Supercanal S.A. c/ AFSCA",year:2019,court:"CSJN",ref:"Fallos: 342:853",chapter:"X",category:"Constitucional",pFrom:272,pTo:273,
   summary:"Legitimación activa y tutela de derechos de incidencia colectiva en un conflicto con el regulador de medios.",
   importance:"Precisiones sobre la clasificación de derechos y legitimación para su tutela.",
   resumen:`Hechos: Supercanal S.A. (operador de televisión por cable) impugnó una resolución de la AFSCA (Autoridad Federal de Servicios de Comunicación Audiovisual). La cuestión involucró la legitimación para accionar y la naturaleza de los derechos en juego (individuales vs. de incidencia colectiva).

Decisión: La CSJN analizó la clasificación tripartita de derechos establecida en "Halabi" y su aplicación al caso, precisando los alcances de la legitimación activa según el tipo de derecho afectado.

Doctrina: Los derechos se clasifican en: (1) individuales (legitimación del titular); (2) de incidencia colectiva sobre bienes colectivos (legitimación del Defensor del Pueblo, asociaciones, afectado); (3) individuales homogéneos (legitimación colectiva cuando hay causa fáctica o normativa común). La correcta calificación del derecho determina la legitimación y el alcance de la sentencia.`},

  {id:37,name:"Halabi c/ PEN",year:2009,court:"CSJN",ref:"Fallos: 332:111",chapter:"X",category:"Constitucional",pFrom:329,pTo:351,
   summary:"Creó la acción de clase en Argentina. Clasificó los derechos en tres categorías: individuales, colectivos e individuales homogéneos.",
   importance:"Fallo fundacional de las acciones colectivas en Argentina.",
   resumen:`Hechos: Ernesto Halabi, abogado, impugnó la ley 25.873 que autorizaba la intervención de comunicaciones telefónicas y por internet sin orden judicial previa. Alegó que la norma violaba su derecho a la intimidad y al secreto profesional. Planteó la acción no solo en su interés individual sino en representación de todos los usuarios afectados.

Decisión: La CSJN declaró la inconstitucionalidad de la ley con efecto erga omnes (para todos). Creó pretorianamente la acción de clase (class action) en Argentina, ante la falta de una ley que la regulara. Clasificó los derechos en tres categorías: (1) individuales; (2) de incidencia colectiva sobre bienes colectivos (como el ambiente); (3) derechos individuales homogéneos (derechos individuales pero con causa común).

Doctrina: La acción de clase procede cuando: existe una pluralidad de afectados; hay una causa fáctica o normativa común; el interés individual de cada afectado no justifica una acción individual. La sentencia tiene efecto erga omnes para proteger adecuadamente el derecho. El art. 43 CN, al reconocer legitimación al "afectado", admite la tutela colectiva de derechos individuales homogéneos.`},

  {id:38,name:"PADEC c/ Swiss Medical S.A.",year:2013,court:"CSJN",ref:"Fallos: 336:1236",chapter:"X",category:"Civil",pFrom:352,pTo:372,
   summary:"Legitimación de asociaciones de consumidores para acciones colectivas contra prepaga por aumento de cuotas.",
   importance:"Expandió la doctrina de Halabi al ámbito del consumidor.",
   resumen:`Hechos: La asociación PADEC (Prevención, Asesoramiento y Defensa del Consumidor) demandó a Swiss Medical S.A. por la nulidad de una cláusula contractual que permitía a la prepaga aumentar unilateralmente el valor de las cuotas. La acción fue iniciada en representación de todos los afiliados afectados.

Decisión: La CSJN reconoció la legitimación de PADEC para promover la acción colectiva. Aplicó la doctrina de "Halabi" y consideró que se trataba de derechos individuales homogéneos: cada afiliado tenía un derecho individual, pero la causa (la cláusula abusiva) era común a todos.

Doctrina: Las asociaciones de consumidores (art. 43 CN y ley 24.240) tienen legitimación para promover acciones colectivas en defensa de derechos individuales homogéneos de los consumidores. La acción colectiva es procedente cuando la cuestión común predomina sobre las cuestiones individuales y cuando la tramitación individual sería ineficiente o impracticable.`},

  {id:39,name:"Municipalidad de Berazategui c/ Cablevisión S.A.",year:2014,court:"CSJN",ref:"Fallos: 337:1024",chapter:"X",category:"Civil",pFrom:273,pTo:277,
   summary:"Legitimación municipal para acciones colectivas en defensa de usuarios de televisión por cable.",
   importance:"Amplió la legitimación activa en acciones colectivas a los municipios.",
   resumen:`Hechos: La Municipalidad de Berazategui promovió una acción de amparo colectivo contra Cablevisión S.A. en defensa de los usuarios del servicio de televisión por cable del partido. Alegó que la empresa incumplía con sus obligaciones de servicio y afectaba derechos de los consumidores locales.

Decisión: La CSJN analizó la legitimación del municipio para iniciar acciones colectivas en defensa de los usuarios. Reconoció la capacidad de los municipios para actuar en tutela de derechos de incidencia colectiva de sus habitantes, particularmente en materia de defensa del consumidor.

Doctrina: Los municipios pueden tener legitimación activa para promover acciones colectivas en defensa de los derechos de los consumidores y usuarios de servicios públicos de su jurisdicción, particularmente cuando se trata de derechos de incidencia colectiva. La legitimación municipal se funda en su rol de garante del bienestar de la comunidad local.`},

  // ═══ CAP. XI — Derechos y bienes ═══
  {id:40,name:"Mendoza c/ Estado Nacional (Riachuelo)",year:2006,court:"CSJN",ref:"Fallos: 329:2316",chapter:"XI",category:"Constitucional",pFrom:373,pTo:381,
   summary:"Causa por contaminación del Riachuelo. Plan integral de saneamiento ambiental. Derecho a un ambiente sano.",
   importance:"Caso emblemático de tutela ambiental en Argentina.",
   resumen:`Hechos: Beatriz Mendoza y otros vecinos de la cuenca Matanza-Riachuelo demandaron al Estado Nacional, la Provincia de Buenos Aires, la Ciudad de Buenos Aires y a 44 empresas por los daños ambientales derivados de la contaminación del río. Se trató de uno de los casos ambientales más complejos de la historia argentina.

Decisión: La CSJN asumió competencia originaria y dictó un fallo estructural: ordenó a los demandados elaborar un plan integral de saneamiento de la cuenca, estableció plazos, creó un organismo de control (ACUMAR) e implementó audiencias públicas de seguimiento. El fallo se ejecuta hasta el día de hoy.

Doctrina: El derecho a un ambiente sano (art. 41 CN) es un derecho de incidencia colectiva de tutela preferente. Los jueces tienen amplias facultades para dictar medidas de protección ambiental, incluyendo fallos estructurales que imponen obligaciones de hacer a múltiples niveles de gobierno. La prevención y la recomposición son los principios rectores del derecho ambiental, por encima de la mera reparación económica.`},

  {id:41,name:"Prille de Nicolini c/ SEGBA",year:1987,court:"CSJN",ref:"Fallos: 310:2103",chapter:"XI",category:"Civil",pFrom:382,pTo:393,
   summary:"Responsabilidad por daños de la empresa estatal de electricidad. Bienes del dominio público y responsabilidad del Estado.",
   importance:"Relación entre bienes públicos, servicios públicos y responsabilidad estatal.",
   resumen:`Hechos: El esposo de Graciela Prille de Nicolini falleció por electrocución causada por un cable de alta tensión de SEGBA (Servicios Eléctricos del Gran Buenos Aires). La viuda demandó al ente estatal por daños y perjuicios.

Decisión: La CSJN condenó a SEGBA, estableciendo su responsabilidad por los daños causados por las instalaciones a su cargo. Analizó la responsabilidad del Estado por la prestación de servicios públicos y el deber de seguridad sobre los bienes afectados a ese servicio.

Doctrina: El Estado (o el ente prestador de un servicio público) es responsable por los daños causados por las cosas de su propiedad o bajo su guarda, incluyendo las instalaciones de redes de energía eléctrica. Los bienes afectados a servicios públicos generan un deber de seguridad cuyo incumplimiento compromete la responsabilidad del prestador. La responsabilidad es objetiva, fundada en el riesgo de la cosa (art. 1113 CC).`},

  // ═══ CAP. XII — Derechos sobre el cuerpo humano ═══
  {id:42,name:"C., M. E. y otros c/ INCUCAI",year:2014,court:"CSJN",ref:"Fallos: 337:492",chapter:"XII",category:"Civil",pFrom:405,pTo:423,
   summary:"Amparo contra el INCUCAI sobre trasplantes y derechos sobre el cuerpo humano.",
   importance:"Alcances de los derechos sobre el cuerpo humano en la legislación de trasplantes.",
   resumen:`Hechos: Los actores interpusieron un amparo contra el INCUCAI cuestionando una resolución del organismo (Res. 69/2009) que establecía restricciones para el trasplante de órganos. La cuestión planteaba el conflicto entre la potestad reglamentaria del INCUCAI y los derechos de los pacientes sobre sus propios cuerpos.

Decisión: La CSJN hizo lugar al amparo, sosteniendo que los derechos personalísimos sobre el propio cuerpo tienen protección constitucional y que el poder reglamentario del INCUCAI no puede restringirlos más allá de lo que la ley expresamente autoriza.

Doctrina: Los derechos sobre el propio cuerpo son derechos personalísimos de raigambre constitucional. El cuerpo humano y sus partes no son cosas en sentido jurídico y tienen un régimen especial de protección (hoy arts. 17 y 56 CCyCN). Las restricciones a la disposición del propio cuerpo deben tener base legal y ser proporcionadas al fin perseguido. El poder reglamentario no puede exceder los límites de la ley.`},

  // ═══ CAP. XIII — Comunidades indígenas ═══
  {id:43,name:"Comunidad Indígena Eben Ezer c/ Prov. de Salta",year:2008,court:"CSJN",ref:"Fallos: 331:2119",chapter:"XIII",category:"Constitucional",pFrom:424,pTo:428,
   summary:"Derechos de la comunidad sobre tierras ancestrales. Propiedad comunitaria indígena con protección constitucional.",
   importance:"Precedente fundamental sobre propiedad comunitaria indígena (art. 75 inc. 17 CN).",
   resumen:`Hechos: La Comunidad Indígena Eben Ezer demandó a la Provincia de Salta por el reconocimiento de sus derechos sobre las tierras que ancestralmente ocupaba. La provincia había otorgado permisos de explotación a terceros sobre esas tierras, afectando los derechos de la comunidad.

Decisión: La CSJN hizo lugar al recurso y reconoció los derechos de la comunidad sobre sus tierras. Fundó su decisión en el art. 75 inc. 17 de la CN, el Convenio 169 de la OIT y la jurisprudencia de la Corte IDH sobre propiedad comunal indígena.

Doctrina: La propiedad comunitaria indígena tiene protección constitucional (art. 75 inc. 17 CN). El Estado debe reconocer la posesión y propiedad comunitaria de las tierras que tradicionalmente ocupan las comunidades indígenas, y entregar otras aptas y suficientes cuando ello no sea posible. El concepto de propiedad indígena difiere del concepto civilista: no es individual sino colectiva, y tiene una dimensión cultural y espiritual que la distingue.`},

  {id:44,name:"Comunidad Mapuche Las Huaytekas",year:2015,court:"CSJN",ref:"Fallos: 338:1277",chapter:"XIII",category:"Constitucional",pFrom:429,pTo:452,
   summary:"Legitimación de la comunidad mapuche y medidas cautelares para proteger la posesión comunitaria de tierras.",
   importance:"Protección cautelar de derechos territoriales indígenas.",
   resumen:`Hechos: La Comunidad Mapuche "Las Huaytekas" intervino como tercera en la causa "Martínez Pérez c/ Palma", donde se disputaba la posesión de tierras que la comunidad reclamaba como propias. La comunidad solicitó medidas cautelares para evitar el desalojo de sus miembros de las tierras ancestrales.

Decisión: La CSJN reconoció la legitimación de la comunidad mapuche para intervenir en el proceso y ordenó medidas cautelares para proteger la posesión comunitaria mientras se resolvía el fondo de la cuestión.

Doctrina: Las comunidades indígenas tienen legitimación para actuar judicialmente en defensa de sus derechos territoriales, incluso como terceras en procesos entre particulares. La tutela cautelar de la posesión comunitaria indígena se justifica por la irreparabilidad del daño que causaría el desalojo. Los derechos territoriales indígenas tienen protección constitucional y convencional, lo que refuerza la procedencia de las medidas cautelares.`},

  {id:45,name:"Lhaka Honhat vs. Argentina",year:2020,court:"Corte IDH",ref:"Sentencia de 6/2/2020",chapter:"XIII",category:"Constitucional",pFrom:453,pTo:488,
   summary:"La Corte IDH condenó a Argentina por violación de derechos de comunidades indígenas en Salta. Reconoció derechos económicos, sociales y culturales de forma autónoma.",
   importance:"Primera sentencia de la Corte IDH contra Argentina sobre pueblos indígenas.",
   resumen:`Hechos: Comunidades indígenas de los pueblos Wichí, Iyjwaja, Komlek, Niwackle y Tapy'y habitaban los lotes fiscales 14 y 55 en el Departamento Rivadavia (Salta), un área de 643.000 hectáreas. La presencia de pobladores criollos (colonos ganaderos) generó conflictos por la tierra y la degradación del hábitat. Pese a décadas de reclamos, el Estado argentino no entregó el título de propiedad comunitaria.

Decisión: La Corte IDH condenó a Argentina por violar los derechos de propiedad comunitaria (art. 21 CADH), la identidad cultural, el medio ambiente sano, la alimentación adecuada, el agua y la participación en la vida cultural. Fue la primera vez que la Corte IDH declaró autónomamente la violación de derechos económicos, sociales y culturales (vía art. 26 CADH).

Doctrina: La propiedad comunitaria indígena abarca no solo la tierra sino los recursos naturales necesarios para la supervivencia cultural del grupo. El Estado debe garantizar que las comunidades indígenas tengan un título de propiedad adecuado y efectivo. La Corte IDH reconoció por primera vez de forma autónoma la justiciabilidad directa de los DESC bajo la CADH, marcando un precedente histórico en el sistema interamericano.`},

  // ═══ CAP. XIV — Persona humana ═══
  {id:46,name:"F., A. L. s/ medida autosatisfactiva",year:2012,court:"CSJN",ref:"Fallos: 335:197",chapter:"XIV",category:"Constitucional",pFrom:489,pTo:525,
   summary:"Amplió la interpretación del aborto no punible (art. 86 inc. 2 CP) a todo caso de violación. Exhortó a implementar protocolos.",
   importance:"Precedió la Ley 27.610 de IVE (2020).",
   resumen:`Hechos: A.G., una joven de 15 años, fue violada por su padrastro y quedó embarazada. Su madre solicitó la interrupción del embarazo invocando el art. 86 inc. 2° del Código Penal, que permitía el aborto cuando el embarazo provenía de una violación de una "mujer idiota o demente". El caso llegó a la CSJN cuando el embarazo ya se había interrumpido, pero la Corte decidió pronunciarse por la trascendencia de la cuestión.

Decisión: La CSJN interpretó que el art. 86 inc. 2° CP autorizaba el aborto en todo caso de violación (no solo de mujeres con discapacidad intelectual). Sostuvo que una interpretación restrictiva sería irrazonable y violatoria de derechos constitucionales. Exhortó a las autoridades nacionales y provinciales a implementar protocolos hospitalarios para la atención de abortos no punibles.

Doctrina: El aborto no punible por violación no requiere autorización judicial ni denuncia penal: basta una declaración jurada de la víctima. Las normas penales deben interpretarse restrictivamente y en forma coherente con los derechos constitucionales y los tratados de DDHH. Este fallo sentó las bases para la posterior sanción de la Ley 27.610 de Interrupción Voluntaria del Embarazo (2020).`},

  {id:47,name:"Artavia Murillo y otros vs. Costa Rica (FIV)",year:2012,court:"Corte IDH",ref:"Sentencia de 28/11/2012",chapter:"XIV",category:"Constitucional",pFrom:394,pTo:404,
   summary:"La prohibición de la FIV violaba DDHH. 'Concepción' = implantación. El embrión no implantado no es persona bajo la CADH.",
   importance:"Definió 'concepción' como implantación, con impacto en la regulación de reproducción asistida.",
   resumen:`Hechos: La Sala Constitucional de la Corte Suprema de Costa Rica prohibió en 2000 la práctica de la Fecundación In Vitro (FIV), por considerar que violaba el derecho a la vida del embrión desde la fecundación (art. 4.1 CADH). Parejas infértiles que no pudieron acceder al tratamiento denunciaron a Costa Rica ante la Comisión Interamericana de DDHH.

Decisión: La Corte IDH condenó a Costa Rica. Sostuvo que la "concepción" a la que se refiere el art. 4.1 de la CADH debe entenderse como "implantación" (anidación del embrión en el útero), no como "fecundación". Por lo tanto, el embrión no implantado no es persona en los términos de la Convención. La prohibición absoluta de la FIV violaba los derechos a la vida privada, a la integridad personal, a la salud, a fundar una familia y a la no discriminación.

Doctrina: El art. 4.1 CADH ("toda persona tiene derecho a que se respete su vida... en general, a partir del momento de la concepción") no impone una protección absoluta del embrión. La expresión "en general" permite excepciones. La "concepción" se entiende como implantación. La prohibición absoluta de la FIV es desproporcionada y viola múltiples derechos convencionales. Este criterio tiene impacto directo en la interpretación del art. 19 del CCyCN argentino sobre el comienzo de la existencia de la persona.`},

  {id:48,name:"Portal de Belén c/ Ministerio de Salud",year:2002,court:"CSJN",ref:"Fallos: 325:292",chapter:"XIV",category:"Constitucional",pFrom:526,pTo:560,
   summary:"Prohibió un anticonceptivo de emergencia por considerar que podía afectar el derecho a la vida desde la fecundación.",
   importance:"Precedente sobre comienzo de la persona, luego cuestionado por Artavia Murillo.",
   resumen:`Hechos: La asociación civil "Portal de Belén" interpuso una acción de amparo contra el Ministerio de Salud de la Nación para que se prohibiera la fabricación y venta de un anticonceptivo de emergencia ("píldora del día después"), por considerar que tenía efectos abortivos al impedir la implantación del óvulo fecundado.

Decisión: La CSJN hizo lugar al amparo y prohibió la fabricación y venta del fármaco. Sostuvo que la vida humana comienza con la fecundación (no con la implantación) y que todo método que impida la anidación del óvulo fecundado constituye una forma de aborto.

Doctrina: Según este fallo, la existencia de la persona humana comienza con la fecundación, y el derecho a la vida debe protegerse desde ese momento. Sin embargo, esta doctrina fue luego cuestionada a la luz del fallo Artavia Murillo de la Corte IDH (2012), que distinguió entre fecundación e implantación y adoptó un criterio diferente. La tensión entre ambos precedentes es un tema central en la materia del comienzo de la persona.`},

  // ═══ CAP. XV — Capacidad ═══
  {id:49,name:"F., H. O. s/ art. 152 ter Código Civil",year:2018,court:"CSJN",ref:"Fallos: 341:745",chapter:"XV",category:"Civil",pFrom:561,pTo:578,
   summary:"Modelo social de discapacidad: sistema de apoyos en lugar de curatela tradicional (CDPD).",
   importance:"Consolidó el cambio al modelo de apoyos, en línea con la CDPD y el CCyCN.",
   resumen:`Hechos: F.H.O. había sido declarado incapaz bajo el régimen del antiguo Código Civil, con designación de un curador. Tras la entrada en vigencia del CCyCN (2015) y en consonancia con la CDPD, se planteó la revisión de su situación para adecuarla al nuevo régimen de capacidad con apoyos.

Decisión: La CSJN ordenó la revisión de la declaración de incapacidad y su adecuación al sistema de restricciones a la capacidad con apoyos previsto por el CCyCN (arts. 31-50). Sostuvo que el modelo de "incapacidad total con curatela" del antiguo Código debía ser reemplazado por un sistema que respete la autonomía de la persona en la mayor medida posible.

Doctrina: El nuevo paradigma de capacidad (CCyCN + CDPD) presume la capacidad de las personas con discapacidad. Las restricciones deben ser excepcionales, específicas y proporcionadas. El sistema de apoyos reemplaza a la curatela como regla: se designan personas o instituciones que asisten (no sustituyen) a la persona en la toma de decisiones. La sentencia debe especificar qué actos requieren apoyo y cuáles la persona puede realizar por sí misma.`},

  // ═══ CAP. XVI — Inviolabilidad de la persona humana ═══
  {id:50,name:"Albarracini Nieves s/ medidas precautorias",year:2012,court:"CSJN",ref:"Fallos: 335:799",chapter:"XVI",category:"Civil",pFrom:579,pTo:587,
   summary:"Derecho a rechazar transfusión de sangre (Testigo de Jehová). Autonomía personal y directivas anticipadas.",
   importance:"Precedente fundamental sobre autonomía del paciente y directivas anticipadas.",
   resumen:`Hechos: Pablo Albarracini, Testigo de Jehová, fue hospitalizado por heridas de bala y necesitaba una transfusión de sangre para sobrevivir. Su esposa presentó una directiva anticipada firmada por Pablo donde rechazaba transfusiones por razones religiosas. Su padre, Jorge Washington Albarracini Nieves, pidió judicialmente que se autorizara la transfusión para salvar la vida de su hijo.

Decisión: La CSJN rechazó el pedido del padre y respetó la directiva anticipada del paciente. Sostuvo que el derecho a rechazar tratamientos médicos, incluso con riesgo de muerte, forma parte de la autonomía personal protegida por el art. 19 CN. Las directivas anticipadas son válidas y vinculantes.

Doctrina: La autonomía personal (art. 19 CN) incluye el derecho a tomar decisiones sobre el propio cuerpo, incluido el rechazo de tratamientos médicos. Las directivas anticipadas son válidas cuando fueron otorgadas con discernimiento, intención y libertad. El derecho a la vida no puede invocarse para obligar a una persona a someterse a un tratamiento que rechaza por razones de conciencia. La libertad religiosa refuerza la protección de esta decisión.`},

  {id:51,name:"D., M. A. s/ declaración de incapacidad",year:2015,court:"CSJN",ref:"Fallos: 338:556",chapter:"XVI",category:"Civil",pFrom:588,pTo:604,
   summary:"Derecho a suspender soporte vital en estado vegetativo permanente. No es eutanasia sino ejercicio de la dignidad.",
   importance:"Consagró el derecho a morir con dignidad.",
   resumen:`Hechos: M.A.D. se encontraba en estado vegetativo permanente e irreversible desde hacía más de 20 años, sin ninguna posibilidad de recuperación según los informes médicos. Sus hermanas solicitaron judicialmente la suspensión de la alimentación e hidratación artificial que lo mantenían con vida, sosteniendo que no era lo que su hermano habría querido.

Decisión: La CSJN autorizó la suspensión del soporte vital. Sostuvo que mantener artificialmente la vida biológica de una persona en estado vegetativo irreversible, contra su voluntad presunta, no constituye un deber jurídico. La suspensión del soporte vital en estas circunstancias no configura eutanasia, sino el respeto por la dignidad de la persona.

Doctrina: Existe un derecho a morir con dignidad, que forma parte de la autonomía personal y la dignidad humana. La suspensión de medidas de soporte vital desproporcionadas o fútiles no es eutanasia (que implica un acto positivo de provocar la muerte) sino la aceptación del curso natural de una enfermedad terminal. La voluntad del paciente (expresada o presunta) debe ser el criterio rector. La ley 26.529 (derechos del paciente) refuerza esta conclusión.`},

  // ═══ CAP. XVII — Imagen, intimidad, libertad de expresión ═══
  {id:52,name:"Ponzetti de Balbín c/ Editorial Atlántida",year:1984,court:"CSJN",ref:"Fallos: 306:1892",chapter:"XVII",category:"Civil",pFrom:605,pTo:613,
   summary:"Condenó a la editorial por publicar foto de Balbín en su lecho de muerte. Derecho a la imagen e intimidad de figuras públicas.",
   importance:"Fallo fundacional sobre derecho a la imagen y la intimidad.",
   resumen:`Hechos: La revista "Gente" (Editorial Atlántida) publicó en su tapa una fotografía del líder radical Ricardo Balbín en la sala de terapia intensiva del hospital, agonizante, sin autorización de su familia. Indalia Ponzetti de Balbín demandó a la editorial por violación del derecho a la intimidad y a la imagen.

Decisión: La CSJN condenó a Editorial Atlántida. Sostuvo que aun las figuras públicas conservan un ámbito de intimidad protegido que la prensa no puede invadir. La publicación de una fotografía de una persona en su lecho de muerte, sin consentimiento, constituye una violación del derecho a la imagen y la intimidad.

Doctrina: El derecho a la imagen y a la intimidad son derechos personalísimos protegidos constitucionalmente (art. 19 CN). Las personas públicas tienen una esfera de intimidad reducida pero no inexistente: la enfermedad y la agonía pertenecen al ámbito más íntimo. La libertad de prensa no es absoluta y encuentra su límite en los derechos personalísimos. Para publicar la imagen de una persona se requiere su consentimiento, salvo excepciones legales (interés público relevante).`},

  {id:53,name:"Rodríguez, María Belén c/ Google Inc.",year:2014,court:"CSJN",ref:"Fallos: 337:1174",chapter:"XVII",category:"Civil",pFrom:614,pTo:638,
   summary:"Responsabilidad de buscadores de internet: solo ante conocimiento efectivo de contenido ilícito y falta de acción.",
   importance:"Precedente clave sobre responsabilidad de intermediarios de internet.",
   resumen:`Hechos: María Belén Rodríguez, modelo, demandó a Google Inc. porque al buscar su nombre en el buscador aparecían enlaces a sitios de contenido erótico y pornográfico donde se usaba su imagen sin autorización. Reclamó daños por violación del derecho a la imagen y a la intimidad, y que Google eliminara esos contenidos de sus resultados de búsqueda.

Decisión: La CSJN estableció que los motores de búsqueda no son responsables por los contenidos creados por terceros como regla general. Solo son responsables cuando: (1) toman conocimiento efectivo de un contenido ilícito (por notificación del afectado o por orden judicial); y (2) no actúan diligentemente para bloquearlo o eliminarlo. El conocimiento efectivo no puede presumirse.

Doctrina: Los buscadores de internet son intermediarios que facilitan el acceso a contenido creado por terceros. No tienen obligación de monitorear preventivamente todos los contenidos. Su responsabilidad es subjetiva y requiere: notificación fehaciente del contenido ilícito + inacción. Para contenidos manifiestamente ilícitos (pornografía infantil, incitación a la violencia), la responsabilidad puede surgir sin orden judicial. Se busca un equilibrio entre libertad de expresión, derecho a la información e intimidad.`},

  // ═══ CAP. XVIII — Intimidad y estupefacientes ═══
  {id:54,name:"Bazterrica s/ tenencia de estupefacientes",year:1986,court:"CSJN",ref:"Fallos: 308:1392",chapter:"XVIII",category:"Penal",pFrom:639,pTo:661,
   summary:"Declaró inconstitucional la penalización de la tenencia para uso personal (art. 19 CN). Conductas privadas sin afectación a terceros están protegidas.",
   importance:"Precedente fundamental sobre autonomía personal (art. 19 CN).",
   resumen:`Hechos: Gustavo Bazterrica fue detenido y procesado por tenencia de estupefacientes (marihuana y cocaína) para consumo personal, conforme al art. 6° de la ley 20.771 que penalizaba la tenencia sin distinción de destino (consumo personal o comercialización).

Decisión: La CSJN declaró la inconstitucionalidad del art. 6° de la ley 20.771 en cuanto penalizaba la tenencia para consumo personal. Fundó su decisión en el art. 19 de la CN: las acciones privadas que no ofenden al orden ni a la moral pública, ni perjudican a terceros, están reservadas a Dios y exentas de la autoridad de los magistrados.

Doctrina: El art. 19 CN consagra un ámbito de autonomía personal inviolable. La tenencia de estupefacientes para consumo personal es una conducta privada que, mientras no trascienda a terceros, está protegida por la garantía constitucional de privacidad. Penalizar una conducta que solo afecta al propio individuo excede las facultades del Estado e implica una intromisión ilegítima en la esfera íntima de la persona. El Estado puede combatir el narcotráfico sin criminalizar al consumidor.`},

  {id:55,name:"Montalvo s/ inf. Ley 20.771",year:1990,court:"CSJN",ref:"Fallos: 313:1333",chapter:"XVIII",category:"Penal",pFrom:662,pTo:671,
   summary:"Revirtió Bazterrica: declaró constitucional la penalización de la tenencia para consumo personal.",
   importance:"Retroceso respecto de Bazterrica. Fue dejado sin efecto por Arriola (2009).",
   resumen:`Hechos: Ernesto Montalvo fue procesado por tenencia de estupefacientes para consumo personal bajo la ley 20.771. Su defensa invocó la doctrina de "Bazterrica" para solicitar la inconstitucionalidad de la norma.

Decisión: La CSJN (con nueva composición) revirtió la doctrina de "Bazterrica" y declaró constitucional la penalización de la tenencia para consumo personal. Sostuvo que toda tenencia de estupefacientes, aun para uso personal, tiene trascendencia social porque: (a) genera demanda que alimenta el narcotráfico; (b) puede constituir un peligro potencial para terceros; (c) afecta la salud pública como bien colectivo.

Doctrina: Según este fallo (hoy abandonado), la tenencia de estupefacientes nunca es un acto privado porque siempre tiene repercusión social. El art. 19 CN no protege conductas que, aunque aparentemente privadas, pueden afectar el bienestar general. Esta doctrina fue dejada sin efecto en 2009 por el fallo "Arriola", que retomó el criterio de Bazterrica.`},

  {id:56,name:"Arriola y otros s/ causa Nº 9080",year:2009,court:"CSJN",ref:"Fallos: 332:1963",chapter:"XVIII",category:"Penal",pFrom:672,pTo:702,
   summary:"Retomó Bazterrica: la tenencia para consumo personal no es punible. Art. 19 CN, tratados de DDHH y proporcionalidad.",
   importance:"Restableció la despenalización de la tenencia para consumo. Consolidó la autonomía personal.",
   resumen:`Hechos: Ocho personas fueron detenidas con pequeñas cantidades de marihuana para consumo personal en las inmediaciones de una villa de emergencia. Fueron procesadas conforme al art. 14, segundo párrafo, de la ley 23.737 que penalizaba la tenencia para consumo personal.

Decisión: La CSJN, por unanimidad, declaró la inconstitucionalidad del art. 14, segundo párrafo, de la ley 23.737. Retomó la doctrina de "Bazterrica" y abandonó la de "Montalvo". Los siete jueces de la Corte votaron por la inconstitucionalidad, aunque con distintos fundamentos.

Doctrina: El art. 19 CN protege un ámbito de autonomía personal que incluye la decisión de consumir o no estupefacientes, siempre que no se afecten derechos de terceros. La penalización de la tenencia para consumo personal es una intromisión desproporcionada del Estado en la vida privada, violatoria del principio de reserva (art. 19 CN) y de tratados internacionales de DDHH (derecho a la intimidad, a la autonomía personal). La política criminal sobre drogas debe orientarse al tratamiento sanitario del adicto, no a su criminalización.`},

  // ═══ CAP. XIX — Derecho a la identidad ═══
  {id:57,name:"Gualtieri Rugnone de Prieto s/ sustracción de menores",year:2009,court:"CSJN",ref:"Fallos: 332:1835",chapter:"XIX",category:"Constitucional",pFrom:703,pTo:748,
   summary:"Extracción compulsiva de ADN en causas de sustracción de menores durante la dictadura. Derecho a la identidad vs. integridad física.",
   importance:"Caso clave sobre derecho a la identidad biológica en el contexto de hijos de desaparecidos.",
   resumen:`Hechos: En el marco de una causa por sustracción de menores durante la última dictadura militar (causa N° 46/85), se ordenó la extracción compulsiva de muestras de sangre para determinar la identidad biológica de una persona presuntamente apropiada. La persona se opuso, alegando la inviolabilidad de su integridad física y la garantía contra la autoincriminación.

Decisión: La CSJN admitió la extracción compulsiva de ADN, sosteniendo que el derecho a la identidad biológica tiene una dimensión individual (de la persona cuya identidad se investiga) y una dimensión social (el derecho de la sociedad a conocer la verdad sobre los crímenes de la dictadura). La medida es proporcional dada la mínima invasión corporal frente a la trascendencia del bien jurídico protegido.

Doctrina: El derecho a la identidad es un derecho personalísimo de raigambre constitucional y convencional (CDN, arts. 7 y 8). La extracción compulsiva de ADN es constitucionalmente admisible cuando: (1) persigue un fin legítimo (determinar la identidad biológica); (2) es proporcional (la extracción de sangre es mínimamente invasiva); (3) no viola la garantía contra la autoincriminación (la muestra es prueba sobre la identidad, no sobre un hecho delictivo del sometido). El derecho a conocer la propia identidad puede prevalecer sobre la voluntad individual en circunstancias excepcionales.`},

  // ═══ CAP. XX — Protección de consumidores ═══
  {id:58,name:"Unión de Usuarios y Consumidores c/ Sec. de Transporte",year:2014,court:"CSJN",ref:"Fallos: 337:790",chapter:"XX",category:"Civil",pFrom:749,pTo:770,
   summary:"Legitimación de asociaciones de consumidores para acciones colectivas en defensa de usuarios del transporte público.",
   importance:"Fortaleció la tutela colectiva de los derechos de consumidores.",
   resumen:`Hechos: La asociación "Unión de Usuarios y Consumidores" demandó a la Secretaría de Transporte de la Nación en representación de todos los usuarios del transporte público, cuestionando la calidad del servicio prestado y las condiciones de seguridad.

Decisión: La CSJN reconoció la legitimación de la asociación de consumidores para promover la acción colectiva. Aplicó el art. 42 y 43 de la CN y la ley 24.240 de defensa del consumidor, y sostuvo que las asociaciones de consumidores son un instrumento idóneo para la tutela colectiva de los derechos de los usuarios de servicios públicos.

Doctrina: Las asociaciones de consumidores y usuarios tienen legitimación constitucional (art. 43 CN) para promover acciones colectivas en defensa de derechos de incidencia colectiva. La protección constitucional del consumidor (art. 42 CN) incluye el derecho a la seguridad, a la información, a la protección de la salud y a condiciones de trato digno y equitativo. Los servicios públicos deben cumplir estándares de calidad y seguridad controlables judicialmente.`},

  // ═══ CAP. XXI — Principios contractuales ═══
  {id:59,name:"Santa Cruz c/ DGI (AFIP)",year:2018,court:"CSJN",ref:"Fallos: 341:1661",chapter:"XXI",category:"Civil",pFrom:771,pTo:775,
   summary:"Principios contractuales en el conflicto entre Provincia de Santa Cruz y AFIP. Buena fe, autonomía de la voluntad y límites tributarios.",
   importance:"Articulación entre principios contractuales privados y derecho público tributario.",
   resumen:`Hechos: La Provincia de Santa Cruz demandó a la AFIP en una controversia sobre la aplicación de cláusulas contractuales en el marco de obligaciones tributarias. La cuestión exigía analizar la interacción entre los principios contractuales del derecho privado y las normas del derecho público tributario.

Decisión: La CSJN analizó el caso aplicando los principios de buena fe, autonomía de la voluntad y fuerza obligatoria de los contratos, pero modulados por las exigencias del derecho público tributario que impone límites adicionales a la autonomía contractual.

Doctrina: Los principios contractuales del derecho privado (buena fe, pacta sunt servanda, autonomía de la voluntad) son aplicables a las relaciones contractuales del Estado, pero con las modulaciones propias del derecho público. El poder tributario del Estado está sujeto a principios constitucionales (legalidad, igualdad, razonabilidad) que limitan la autonomía contractual. La articulación entre derecho privado y público exige un análisis caso por caso.`},

  {id:60,name:"Massa c/ PEN (dto. 1570/01)",year:2006,court:"CSJN",ref:"Fallos: 329:5913",chapter:"XXI",category:"Constitucional",pFrom:776,pTo:803,
   summary:"Pesificación de depósitos en dólares durante la crisis de 2001. Protección del derecho de propiedad frente a la emergencia económica.",
   importance:"Caso emblemático sobre propiedad y emergencia económica (pesificación).",
   resumen:`Hechos: Juan Agustín Massa tenía un depósito a plazo fijo en dólares en un banco. Tras la crisis de 2001, el decreto 1570/01 ("corralito") y la ley 25.561 de emergencia económica dispusieron la pesificación de los depósitos en moneda extranjera a una tasa de $1,40 por dólar, cuando el tipo de cambio de mercado estaba significativamente por encima. Massa demandó por amparo reclamando la devolución del valor real de su depósito.

Decisión: La CSJN, en un fallo con múltiples votos, determinó que el ahorrista debía recibir una suma que respetara el valor de su depósito original. Sostuvo que la pesificación compulsiva, tal como fue implementada, violaba el derecho de propiedad constitucional. El monto a devolver debía calcularse considerando el CER (Coeficiente de Estabilización de Referencia) más intereses.

Doctrina: El derecho de propiedad (art. 17 CN) protege los depósitos bancarios. La doctrina de la emergencia económica permite restricciones temporales a los derechos constitucionales, pero estas deben ser razonables y proporcionadas. La pesificación asimétrica (1 dólar = 1,40 pesos cuando el mercado cotizaba mucho más) resultó confiscatoria y violatoria del derecho de propiedad. La emergencia no es una carta blanca para desconocer derechos adquiridos.`},

  // ═══ CAP. XXII — Responsabilidad civil ═══
  {id:61,name:"Ontiveros c/ Prevención ART S.A.",year:2017,court:"CSJN",ref:"Fallos: 340:1038",chapter:"XXII",category:"Civil",pFrom:804,pTo:814,
   summary:"Daño moral en accidente laboral. Reparación integral como principio constitucional que incluye daños no patrimoniales.",
   importance:"Consolidó la reparación integral y el daño extrapatrimonial laboral.",
   resumen:`Hechos: Stella Maris Ontiveros sufrió un accidente de trabajo que le dejó secuelas permanentes. Demandó a la ART y a otros responsables reclamando, entre otros rubros, la indemnización por daño moral (daño extrapatrimonial). El tribunal inferior había reducido significativamente el monto del daño moral.

Decisión: La CSJN revocó la sentencia y elevó la indemnización por daño moral. Sostuvo que el principio de reparación integral (alterum non laedere, art. 19 CN) exige la compensación plena de todos los daños sufridos, incluyendo los extrapatrimoniales (dolor, sufrimiento, afectación del proyecto de vida).

Doctrina: La reparación integral es un principio constitucional que emana del art. 19 CN (alterum non laedere). Comprende tanto los daños patrimoniales como los extrapatrimoniales. El daño moral no puede ser cuantificado con criterios meramente aritméticos, pero debe reflejar razonablemente la magnitud del sufrimiento y la afectación del proyecto de vida. Los jueces deben fundar adecuadamente la cuantificación del daño moral, y una reducción arbitraria del monto constituye sentencia arbitraria.`},

  {id:62,name:"Bergerot c/ Provincia de Salta",year:2019,court:"CSJN",ref:"Fallos: 342:2198",chapter:"XXII",category:"Civil",pFrom:815,pTo:829,
   summary:"Responsabilidad del Estado provincial por accidente en ruta. Responsabilidad objetiva por riesgo o vicio de la cosa.",
   importance:"Responsabilidad del Estado por mal estado de rutas.",
   resumen:`Hechos: Ana María Bergerot sufrió un accidente en una ruta provincial de Salta debido al mal estado del camino. Demandó a la provincia y a otros responsables por los daños sufridos.

Decisión: La CSJN condenó a la Provincia de Salta por responsabilidad objetiva, fundada en el riesgo o vicio de la cosa (la ruta en mal estado). Determinó los rubros indemnizatorios y la extensión de la reparación, incluyendo daño material, moral, lucro cesante y pérdida de chance.

Doctrina: El Estado es responsable por los daños causados por el mal estado de las rutas que están bajo su jurisdicción y mantenimiento. La responsabilidad es objetiva, fundada en el riesgo o vicio de la cosa (art. 1113 CC / art. 1757 CCyCN). El Estado no puede eximirse invocando la falta de recursos: tiene el deber de mantener las rutas en condiciones seguras o, en su defecto, señalizar adecuadamente los peligros.`},

  {id:63,name:"Dekleva (Zulma Lobato) c/ Balvanera Producciones",year:2016,court:"Cám. Nac. Apel. Civil, Sala J",ref:"Sentencia del 18/8/2016",chapter:"XXII",category:"Civil",pFrom:830,pTo:833,
   summary:"Responsabilidad por violación de la intimidad en un informe televisivo. Límites de la libertad de prensa.",
   importance:"Responsabilidad civil por violación de intimidad en medios de comunicación.",
   resumen:`Hechos: El programa de televisión "70-20-10" (conducido por Chiche Gelblung) emitió un informe sobre la vida de la mediática Zulma Lobato (Zulma Nélida Dekleva), exponiendo aspectos íntimos y degradantes: dónde vivía, cómo se alimentaba (revisando basura), su sexualidad, y su personalidad. Los testimonios provenían de vecinos no identificados. Lobato demandó a la productora por violación de su derecho a la intimidad.

Decisión: La Cámara condenó a Balvanera Producciones por violación del derecho a la intimidad (art. 1071 bis CC). Sostuvo que el informe constituyó un "entrometimiento" ilícito en la vida privada de la actora, presentándola de manera degradante y sin su consentimiento.

Doctrina: La responsabilidad por violación de la intimidad es objetiva: nace del hecho del entrometimiento, sin necesidad de acreditar dolo o culpa. Aun las personas públicas o mediáticas conservan un derecho a la intimidad que protege los aspectos más sensibles de su vida personal. La libertad de prensa no justifica la invasión de la esfera íntima ni la exposición degradante de la vida privada de una persona.`},

  {id:64,name:"Fideicomiso Almatasa c/ Club de Campo Los Pingüinos",year:2018,court:"Cám. Nac. Apel. Civil, Sala C",ref:"Sentencia del 6/11/2018",chapter:"XXII",category:"Civil",pFrom:835,pTo:849,
   summary:"Función preventiva de la responsabilidad civil: ordenó instalar una red para evitar que pelotas de golf cayeran en propiedad vecina.",
   importance:"Caso paradigmático de la función preventiva (arts. 1710-1713 CCyCN).",
   resumen:`Hechos: Alberto Panossian y Mariana Münch construyeron su vivienda familiar en un lote del Club de Campo Los Pingüinos. Uno de los laterales lindaba con el fairway del hoyo 13 de la cancha de golf. Diariamente caían numerosas pelotas de golf en su jardín y pileta, poniendo en riesgo a su familia (incluyendo nietos). Solicitaron una acción preventiva para evitar la continuación del daño.

Decisión: La Cámara hizo lugar a la demanda preventiva y ordenó al Club instalar una red de contención en el tee de salida del hoyo 13 para evitar que las pelotas cayeran en la propiedad vecina. Aplicó los arts. 1710-1713 del CCyCN sobre función preventiva de la responsabilidad civil.

Doctrina: La función preventiva (arts. 1710-1713 CCyCN) permite a los jueces ordenar medidas para evitar la producción de un daño, su continuación o agravamiento, sin necesidad de acreditar un factor de atribución (dolo o culpa). Basta demostrar: amenaza de daño + acción u omisión antijurídica + nexo causal. La sentencia preventiva debe procurar la menor restricción posible y el medio más idóneo para asegurar la eficacia del mandato (principio de justa medida).`},

  // ═══ CAP. XXIII — Igualdad y no discriminación en familia ═══
  {id:65,name:"Atala Riffo y Niñas vs. Chile",year:2012,court:"Corte IDH",ref:"Sentencia de 24/2/2012",chapter:"XXIII",category:"Constitucional",pFrom:850,pTo:864,
   summary:"Condena a Chile por discriminar a la jueza Atala Riffo por su orientación sexual al quitarle la custodia de sus hijas.",
   importance:"Sentencia pionera sobre no discriminación por orientación sexual en el sistema interamericano.",
   resumen:`Hechos: Karen Atala Riffo, abogada y jueza chilena, convivía con su pareja del mismo sexo tras divorciarse. Su exesposo solicitó la custodia de sus tres hijas alegando que la convivencia de las niñas con la pareja homosexual de su madre las perjudicaba. La Corte Suprema de Chile le quitó la custodia, invocando el "interés superior del niño" y el riesgo de discriminación social que sufrirían las niñas.

Decisión: La Corte IDH condenó a Chile. Sostuvo que la orientación sexual es una categoría protegida por el art. 1.1 de la CADH (cláusula de no discriminación). La decisión de la Corte Suprema chilena fue discriminatoria porque se basó en prejuicios y estereotipos sobre la orientación sexual de la madre, no en un análisis concreto del bienestar de las niñas.

Doctrina: La orientación sexual es una categoría sospechosa de discriminación bajo la CADH. Toda distinción basada en la orientación sexual se presume inconstitucional y el Estado debe demostrar una justificación estricta para sostenerla. El "interés superior del niño" no puede ser invocado en abstracto para encubrir una discriminación por orientación sexual. El riesgo de discriminación social no es un argumento válido: si la sociedad discrimina, el Estado debe combatir la discriminación, no validarla privando de derechos al discriminado.`},
];

const CATEGORIES = ["Todos","Constitucional","Civil","Penal","Administrativo","Laboral"];

const CHAPTERS = [
  {num:"I",title:"Control de constitucionalidad"},
  {num:"II",title:"Tratados internacionales"},
  {num:"III",title:"Constitucionalización del Derecho Privado"},
  {num:"IV",title:"La Ley: interpretación y aplicación"},
  {num:"V",title:"Deber de resolver y sentencia arbitraria"},
  {num:"VI",title:"Buena fe"},
  {num:"VII",title:"Abuso del derecho"},
  {num:"VIII",title:"Abuso de posición dominante"},
  {num:"IX",title:"Orden público y fraude a la ley"},
  {num:"X",title:"Derechos de incidencia colectiva"},
  {num:"XI",title:"Derechos y bienes"},
  {num:"XII",title:"Derechos sobre el cuerpo humano"},
  {num:"XIII",title:"Comunidades indígenas"},
  {num:"XIV",title:"Persona humana"},
  {num:"XV",title:"Capacidad"},
  {num:"XVI",title:"Inviolabilidad de la persona humana"},
  {num:"XVII",title:"Imagen, intimidad y libertad de expresión"},
  {num:"XVIII",title:"Intimidad y estupefacientes"},
  {num:"XIX",title:"Derecho a la identidad"},
  {num:"XX",title:"Protección de consumidores"},
  {num:"XXI",title:"Principios contractuales"},
  {num:"XXII",title:"Responsabilidad civil"},
  {num:"XXIII",title:"Igualdad y no discriminación en familia"},
];

const catColors = {
  Constitucional:{bg:"#E8F0FE",text:"#1A56DB",border:"#93B4F5"},
  Civil:{bg:"#FEF3E2",text:"#B45309",border:"#F5C882"},
  Penal:{bg:"#FDE8E8",text:"#C81E1E",border:"#F5A3A3"},
  Administrativo:{bg:"#E8F5E8",text:"#166534",border:"#86CFAC"},
  Laboral:{bg:"#F3E8FE",text:"#7C3AED",border:"#C4A5F5"},
};

function CaseCard({c, isExpanded, onToggle, showingResumen, onToggleResumen}) {
  const colors = catColors[c.category] || catColors.Civil;
  return (
    <div style={{background:"#fff",borderRadius:14,padding:"20px 20px 18px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",border:"1px solid #e8e8ec"}}>
      <div onClick={onToggle} style={{cursor:"pointer"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:6}}>
          <div style={{flex:1}}>
            <h3 style={{fontFamily:"'Source Serif 4','Georgia',serif",fontSize:18,fontWeight:700,color:"#1a1a2e",margin:0,lineHeight:1.3}}>{c.name}</h3>
            <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:"#8b8b9e",fontWeight:500}}>({c.year})</span>
          </div>
          <span style={{display:"inline-block",fontSize:11,fontFamily:"'DM Sans',sans-serif",fontWeight:600,color:colors.text,background:colors.bg,border:`1px solid ${colors.border}`,borderRadius:20,padding:"3px 10px",whiteSpace:"nowrap",letterSpacing:"0.02em",flexShrink:0,marginTop:2}}>{c.category}</span>
        </div>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,color:"#6b6b80",margin:"2px 0 10px",lineHeight:1.3}}>{c.court} · {c.ref}</p>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:14.5,color:"#3a3a50",margin:0,lineHeight:1.55}}>{c.summary}</p>
      </div>
      {isExpanded && (
        <div style={{marginTop:16,paddingTop:14,borderTop:"1px solid #ededf0"}}>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,fontWeight:700,color:"#1A56DB",letterSpacing:"0.1em",textTransform:"uppercase",margin:"0 0 6px"}}>Por qué importa</p>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"#3a3a50",margin:0,lineHeight:1.55}}>{c.importance}</p>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:11.5,color:"#9b9bae",margin:"10px 0 0",fontStyle:"italic"}}>Cap. {c.chapter} · {CHAPTERS.find(ch=>ch.num===c.chapter)?.title} · Págs. {c.pFrom}–{c.pTo}</p>

          <button onClick={(e)=>{e.stopPropagation();onToggleResumen();}} style={{
            marginTop:14,display:"flex",alignItems:"center",gap:6,
            fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,
            color:showingResumen?"#B45309":"#1A56DB",
            background:showingResumen?"#FEF3E2":"#E8F0FE",
            border:showingResumen?"1px solid #F5C882":"1px solid #93B4F5",
            borderRadius:10,padding:"8px 14px",cursor:"pointer",transition:"all 0.15s"
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {showingResumen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>
              }
            </svg>
            {showingResumen ? "Ocultar resumen" : `Ver resumen · Págs. ${c.pFrom}–${c.pTo}`}
          </button>

          {showingResumen && (
            <div style={{marginTop:12,padding:16,background:"#FAFAF8",borderRadius:10,border:"1px solid #e8e8e0"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:600,color:"#B45309",letterSpacing:"0.08em",textTransform:"uppercase",margin:0}}>Resumen para estudiar</p>
                <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:10.5,color:"#9b9bae",background:"#f0f0f4",borderRadius:6,padding:"2px 8px"}}>Manual págs. {c.pFrom}–{c.pTo}</span>
              </div>
              {c.resumen.split('\n\n').map((paragraph, i) => (
                <p key={i} style={{
                  fontFamily:"'DM Sans',sans-serif",fontSize:13.5,color:"#2a2a3e",
                  lineHeight:1.6,margin: i === 0 ? 0 : "12px 0 0",
                  ...(paragraph.startsWith('Hechos:') || paragraph.startsWith('Decisión:') || paragraph.startsWith('Doctrina:')
                    ? {}
                    : {}
                  )
                }}>
                  {paragraph.startsWith('Hechos:') || paragraph.startsWith('Decisión:') || paragraph.startsWith('Doctrina:')
                    ? <><strong style={{color:"#1a1a2e"}}>{paragraph.split(':')[0]}:</strong>{paragraph.substring(paragraph.indexOf(':')+1)}</>
                    : paragraph
                  }
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Fallos() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [chapterFilter, setChapterFilter] = useState("Todos");
  const [expandedId, setExpandedId] = useState(null);
  const [resumenId, setResumenId] = useState(null);
  const [showChapters, setShowChapters] = useState(false);

  const filtered = useMemo(() => {
    return CASES.filter(c => {
      const matchCat = category === "Todos" || c.category === category;
      const matchChap = chapterFilter === "Todos" || c.chapter === chapterFilter;
      const q = search.toLowerCase();
      const matchSearch = !q || c.name.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q) || c.importance.toLowerCase().includes(q) || c.resumen.toLowerCase().includes(q) || c.court.toLowerCase().includes(q) || c.ref.toLowerCase().includes(q) || String(c.year).includes(q) || c.category.toLowerCase().includes(q);
      return matchCat && matchChap && matchSearch;
    });
  }, [search, category, chapterFilter]);

  useEffect(() => { window.scrollTo(0, 0); }, [search, category, chapterFilter]);

  return (
    <div style={{minHeight:"100vh",background:"#F6F6F9",fontFamily:"'DM Sans',sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
      <div style={{background:"#F6F6F9"}}>
        <div style={{padding:"24px 20px 0"}}>
          <h1 style={{fontFamily:"'Source Serif 4','Georgia',serif",fontSize:30,fontWeight:700,color:"#1a1a2e",margin:"0 0 4px"}}>Fallos</h1>
          <p style={{fontSize:14,color:"#8b8b9e",margin:"0 0 16px"}}>Jurisprudencia resumida para estudiar · <span style={{fontWeight:600,color:"#6b6b80"}}>{filtered.length}</span> {filtered.length===1?"caso":"casos"}</p>
          <div style={{position:"relative",marginBottom:12}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9b9bae" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Buscar por nombre, tema o palabra clave..." value={search} onChange={e=>setSearch(e.target.value)} style={{width:"100%",boxSizing:"border-box",padding:"12px 14px 12px 42px",fontSize:14.5,fontFamily:"'DM Sans',sans-serif",border:"1.5px solid #dddde3",borderRadius:12,outline:"none",background:"#fff",color:"#1a1a2e",transition:"border-color 0.2s"}} onFocus={e=>e.target.style.borderColor="#93B4F5"} onBlur={e=>e.target.style.borderColor="#dddde3"}/>
          </div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:6}}>
            {CATEGORIES.map(cat=>{
              const active=category===cat;
              return <button key={cat} onClick={()=>setCategory(cat)} style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:active?600:500,color:active?"#1A56DB":"#6b6b80",background:active?"#E8F0FE":"#fff",border:active?"1.5px solid #93B4F5":"1.5px solid #dddde3",borderRadius:20,padding:"6px 14px",cursor:"pointer",transition:"all 0.15s",whiteSpace:"nowrap"}}>{cat}</button>;
            })}
          </div>
          <button onClick={()=>setShowChapters(!showChapters)} style={{fontFamily:"'DM Sans',sans-serif",fontSize:12.5,fontWeight:500,color:chapterFilter!=="Todos"?"#1A56DB":"#8b8b9e",background:"transparent",border:"none",cursor:"pointer",padding:"6px 2px",display:"flex",alignItems:"center",gap:4}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h10M4 18h6"/></svg>
            {chapterFilter!=="Todos"?`Cap. ${chapterFilter}`:"Filtrar por capítulo"}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{transform:showChapters?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s"}}><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          {showChapters && (
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:4,marginBottom:4,padding:"8px 0"}}>
              <button onClick={()=>{setChapterFilter("Todos");setShowChapters(false);}} style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:chapterFilter==="Todos"?600:400,color:chapterFilter==="Todos"?"#1A56DB":"#6b6b80",background:chapterFilter==="Todos"?"#E8F0FE":"#f0f0f4",border:"none",borderRadius:8,padding:"5px 10px",cursor:"pointer"}}>Todos</button>
              {CHAPTERS.map(ch=>{
                const active=chapterFilter===ch.num;
                const count=CASES.filter(c=>c.chapter===ch.num).length;
                return <button key={ch.num} onClick={()=>{setChapterFilter(ch.num);setShowChapters(false);}} style={{fontFamily:"'DM Sans',sans-serif",fontSize:11.5,fontWeight:active?600:400,color:active?"#1A56DB":"#5a5a70",background:active?"#E8F0FE":"#f0f0f4",border:"none",borderRadius:8,padding:"5px 9px",cursor:"pointer",lineHeight:1.35,textAlign:"left"}} title={ch.title}>{ch.num} <span style={{color:"#9b9bae",marginLeft:2}}>({count})</span></button>;
              })}
            </div>
          )}
        </div>
        <div style={{height:1,background:"linear-gradient(90deg,transparent,#dddde3,transparent)",margin:"16px 20px 0"}}/>
      </div>
      <div style={{padding:"14px 16px 40px"}}>
        {filtered.length===0?(
          <div style={{textAlign:"center",padding:"48px 20px",color:"#9b9bae"}}>
            <p style={{fontSize:16,margin:"0 0 6px"}}>No se encontraron fallos</p>
            <p style={{fontSize:13}}>Probá con otros términos de búsqueda o filtros</p>
          </div>
        ):(
          filtered.map(c=>(
            <CaseCard key={c.id} c={c} isExpanded={expandedId===c.id} showingResumen={resumenId===c.id} onToggle={()=>{setExpandedId(expandedId===c.id?null:c.id);if(expandedId!==c.id)setResumenId(null);}} onToggleResumen={()=>setResumenId(resumenId===c.id?null:c.id)}/>
          ))
        )}
      </div>
    </div>
  );
}
