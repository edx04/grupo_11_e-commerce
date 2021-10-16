USE music_db;

insert into brands (name) values ('Epiphone');
insert into brands (name) values ('Martin Guitars');
insert into brands (name) values ('Radial');
insert into brands (name) values ('Pearl');
insert into brands (name) values ('Reverb');
insert into brands (name) values ('Yamaha');
insert into brands (name) values ('Casio');
insert into brands (name) values ('Fender');
insert into brands (name) values ('D\'Addario');
insert into brands (name) values ('Roland');
insert into brands (name) values ('Ibanez');
insert into brands (name) values ('Taylor');
insert into brands (name) values ('Meinl');
insert into brands (name) values ('Evans');
insert into brands (name) values ('Tama');
insert into brands (name) values ('Jackson');
insert into brands (name) values ('Neutrik');
insert into brands (name) values ('Adam Hall');
insert into brands (name) values ('Emo Parduba');
insert into brands (name) values ('LTD');
insert into brands (name) values ('LD Systems');
insert into brands (name) values ('Boss');
insert into brands (name) values ('Höfner');
insert into brands (name) values ('Vincent Bach');
insert into brands (name) values ('Remo');
insert into brands (name) values ('Joyo');
insert into brands (name) values ('Hohner');
insert into brands (name) values ('Pirastro');

insert into colors (name) values ('Negro');
insert into colors (name) values ('Madera natural');
insert into colors (name) values ('Rojo');
insert into colors (name) values ('Verde');
insert into colors (name) values ('Diamond metálico');
insert into colors (name) values ('Blanco');
insert into colors (name) values ('Nogal');
insert into colors (name) values ('Cromo');
insert into colors (name) values ('Naranja');
insert into colors (name) values ('Azul claro');
insert into colors (name) values ('Dorado');
insert into colors (name) values ('Azul');
insert into colors (name) values ('Negro satinado');
insert into colors (name) values ('Madera oscuro');
insert into colors (name) values ('Negro con blanco');
insert into colors (name) values ('Sunburst');
insert into colors (name) values ('Prizmatic');
insert into colors (name) values ('Rojo con negro');


insert into categories (name) values ('Guitarras');
insert into categories (name) values ('Accesorios');
insert into categories (name) values ('Baterias');
insert into categories (name) values ('Partes');
insert into categories (name) values ('Pianos');
insert into categories (name) values ('Bajos');
insert into categories (name) values ('Otros instrumentos');


insert into users (name, email, password, image) values ('Rowan Alston', 'ralston0@printfriendly.com', '$2a$10$pL.6gkvKVZoUpYjv3.8M9OHtn1OSL8drMu6adCTD/W1vV4Davoou2', 'default.png');
insert into users (name, email, password, image) values ('Dominik Bletso', 'dbletso1@google.com.br', '$2a$10$E21aTmB6nVUJ0UrXsN7GJOYvF/sKq.vksr.snySh3LzSsfpWaTK6S', 'default.png');
insert into users (name, email, password, image) values ('Fulvia Winmill', 'fwinmill2@europa.eu', '$2a$10$AQA5MU6jsqGq1FDBsvR/KuPqfV3M5vFn2QASbA9HtC.jgb/hhz2vi','default.png' );
insert into users (name, email, password, image) values ('Kelby Woliter', 'kwoliter3@bloglovin.com', '$2a$10$puzd1nPR0i2Xu0TwtyRT5unXvh8e9ip/hM.7xZYW2VA0HieeTnYm.', 'default.png');
insert into users (name, email, password, image) values ('Vincent Thurbon', 'vthurbon4@flavors.me', '$2a$10$zTiJHG5knpMSeMdWXqlImeKjVdKBna5dBYcmRaiJEvsAS1j/1aCyW', 'default.png');


insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Coronet Ebony', 1, 11900, 10, 3,'Epiphone Coronet es uno de los primeros y más exitosos diseños originales de guitarra eléctrica de cuerpo sólido de Epiphone. La última versión recupera muchas de las características de los primeros modelos Coronet, incluido el cuerpo simétrico de caoba de doble corte con una sola pastilla Epiphone PRO ™ P-90 Dogear, tres en un lado de cabezal Kalamazoo de tamaño reducido con insignia Epiphone Bikini y ajuste de botón de marfil máquinas, y un golpeador de mariposa blanco con el logo de la E en lámina.', 'EpiphoneCoronetEbony.jpg', 1,1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('000Jr-10 Dreadnought Junior', 2, 13600, 20, 5,'Gracias a su caja de madera sólida de sapele, tapa de sitka de madera sólida, en escala 24\" que te permite una mejor estabilidad de afinación con una comodidad para tocar que amarás. Peso ligero, tamaño compacto con un potente rango medio y calidez.', 'Martin000jr-10.jpg',2 , 1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Usb Pro Caja directa activa', 3, 9000, 0, 6,'El USB-Pro es un convertidor de audio digital estéreo de alta resolución y caja directa que está diseñado para conectar cualquier computadora y convertir sin problemas las pistas de audio digital en un par de salidas analógicas balanceadas.', 'UsbProRadial.jpg', 1, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Masters Maple',4, 7150, 7, 4,'Estos tambores de Maple dan un contorno único a los tambores, desde la medida mas perqueña de 8”  se escucha el ataque característico de este tipo de madera, es una batería de alta calidad y resistencia, el sonido tiende a definirse perfectamente, el sonido del bass drum es una potente combinación entre la famosa gamo de Maple con contornos sintéticos que Pearl sabe muy bien manejar, esa es la mejor definición que podríamos dar, con esto nos referimos a el ataque del baquetón y los drumsticks se escucha en combinación de el brillo medio y a la vez profundo que otorga esta batería.', 'PearlMasterMaple.jpg',3, 3 );
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Boss rv-6 pedal compacto', 5, 4310, 5, 1,'Combinando el sonido de alto nivel con la versatilidad de amplio rango, el RV-6 lleva la reverberación basada en el pedal al siguiente nivel. Alcanzando más allá de las capacidades de generaciones anteriores, este poderoso pedal emplea la tecnología más reciente y el legendario conocimiento BOSS para hacer fácil la obtención de asombrosos tonos de reverberación instantáneamente. Desde cuartos sutiles a modernos efectos centellantes que brindan largas reverberaciones evocativas, el RV-6 envuelve tu tono en un opulento ambiente espacioso que inspira infinitamente.', 'Rv6Boss.jpg', 1, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Stage Custom Hip Shell Pack', 6, 11045, 0, 10,'Una batería compacta, perfecta para viajar, tocar en la calle y practicar en casa. El Set de BIRCH (abedul) de 6 capas, ofrece un sonido grave que se equilibra con armónicos sostenidos.', 'YamahaStageCustom.jpg', 2, 3);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Digital Px-S3000Bk', 7, 285600, 30, 2,'Piano digital de 88 Teclas, Rango de tono ajustable (-2 a +2 octavas), transposición de Teclas (-12 a + 12 semitonos), Cambio de octava (-2 a 0 a +2 octavas), 700 tonos, polifonía Máxima de 192 notas, Respuesta al tacto con 5 Niveles de sensibilidad.', 'CasioDigitalPxS3000Bk.jpg', 1, 5);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Telecaster anniversary', 8, 20000, 0, 1,'La Telecaster 75th Anniversary tiene un acabado en Diamond Anniversary metálico con un cabezal pintado a juego. El mástil de arce presenta un perfil de \"C moderno\", trastes jumbo medianos y un acabado satinado para una comodidad y un toque supremo. Las pastillas Telecaster de estilo vintage de los años 50 brindan un tono cálido y vibrante, mientras que un puente de 6 selletas mejora la entonación.', 'TelecasterAnniversary.jpg', 5, 1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('EJ10', 9, 205, 10, 15,'Las EJ10, el calibre más ligero de cuerdas acústicas de D\'Addario, son ideales para principiantes o jugadores que prefieren un tono más suave y una fácil flexión.','DaddarioEj10.jpg', null, 4);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('TD-50K', 10, 123500, 13, 14,'Como parte de la nueva serie emblemática de V-Drums, el TD-50K ofrece una expresión sin igual para el rendimiento de alto nivel, sesiones de práctica exigentes y trabajo de estudio profesional. Construido sobre los cimientos del nuevo módulo TD-50 con Prismatic Sound Modeling, este kit electrónico proporciona los sonidos más impresionantes y amplios de Roland hasta el momento.', 'RolandTD-50K.jpg', 1, 3);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Sr300Pw', 11, 8730, 37, 5,'El bajo Ibanez SR300 pertenece a la serie SR de Ibanez que, desde hace 25 años, ofrece una alternativa moderna a los bajistas. Dada la popularidad de esta gama de bajos eléctricos, Ibanez continua mejorando los bajos SR para responder a las necesidades de los intérpretes y a sus diferentes presupuestos. Independientemente de las especificaciones de cada modelo el corazón de los bajos SR es el mismo: mástil suave y rápido, cuerpo ligero y electrónica de calidad.', 'SR300EPW.jpg' , 6, 6);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Atril Para Tarola 740', 6, 1451.50, 0, 6,'Soporte para tarola de peso medio con patas simples y grandes cubiertas de goma.', '740Yamaha.jpg',8, 2 );
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('TRBX305', 6, 10391.63, 0, 8,'Combina el mejor tono de la caoba con una versatilidad inédita hasta la fecha. Incorpora innovaciones a nivel de EQ desarrolladas en colaboración con los mejores artistas de la marca, como el selector “Performance EQ” de 5 posiciones. El confort del mástil híbrido de 5 piezas y el nuevo cuerpo de diseño estilizado son características pensadas para satisfacer al músico de hoy en día, abierto a varios estilos musicales.', 'YamahaTRBX305.jpeg', 3, 6);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('312ce N', 12, 47099.50, 40, 100,'Nuestro Grand Concert 312ce-N de cuerdas de nailon equilibra el tono brillante y concentrado de sapeli con los sabores naturalmente suaves del sonido de nailon. Esto es una excelente opción para los músicos que prefieren la comodidad de una acústica de cuerpo pequeño y anhelan características modernas de cuerdas de acero como un cutaway y una pastilla incorporada en una guitarra de cuerdas de nailon. Los detalles adicionales incluyen un mástil de 1-7 / 8 pulgadas, encuadernación negra, incrustaciones de diamantes pequeños en acrílico italiano en el diapasón y una roseta de 3 anillos. La guitarra incorpora un cutaway veneciano para un fácil acceso al registro superior, viene equipada con la pastilla ES-N de Taylor para un gran tono amplificado y se envía en un estuche rígido de lujo Taylor.', 'Taylor312ceN.png', 2, 1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Samba Mod. Tbrs', 13, 100, 10, 35,'La baqueta para pandero Meinl fabricada en plástico de gran resistencia te ayudará a enriquecer tus sonidos.','MeinlSamba.png', 1, 4);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Parche S13H30', 14, 517.89, 20, 120,'Para tarolas de 13\" pulgadas, serie hazy 300, fabricado con una sola capa de película de 3 milésimas de pulgada, especial para resaltar el sonido del entorchado, gran brillantez y sensibilidad, amplio rango dinámico, hecho en usa.', 'ParcheEvansS13H30.jpg', 6, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Boquilla para Sax Tenor TS4C', 6, 932, 15, 26,'Ideal para calquier modelo o marca de Saxofon tenor', 'TenorTS4C.png', 1, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Superstar Classic', 15, 34500, 23, 12,'Los cascos finos de 100% arce característicos de TAMA dotan al Superstar Classic de tonos intensos y audaces para despertar tus ritmos y potenciar tus ritmos de fondo. Las orejetas de baja masa y bajo perfil reducen el peso de las carcasas para mejorar la resonancia en todos los ámbitos. Y el sistema Star-Mount de TAMA le brinda una apertura inmejorable desde sus toms altos sin soportes. Sweetwater sabe que los entusiastas de TAMA apreciarán los aros de bombo de arce a juego de este Superstar Classic y las clásicas insignias T de TAMA.', 'TamaSuper.png', 9,3);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Spectra Bass Sbx ', 16, 11780, 36, 11,'Con un estilo moderno, un tono flexible y un valor incomparable, el Jackson X Series Spectra Bass SBX V lleva al jugador aventurero a odisea de bajos audaces, lanzando una entrada totalmente nueva e imponente en la formidable línea de bajos de cuello a cuerpo de Jackson El estilo de carrocería compensado de Spectra Bass fue diseñado de manera innovadora con el músico en mente.', 'JacksonSpectra.jpg', 10, 6);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Saxofon Alto YAS 26', 6, 25000, 5, 1,'El Saxofon YAS-26 de Yamaha es uno de los favoritos en el mundo debido a que es un muy bien producto precio y calidad ya que cuenta con una base del tudel rediseñada para una rapida respuesta y facil desempeño al tocar ademas de incrementar la durabilidad de el mecanismo.', 'SaxofonAlto.png',11, 7);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Conector NL4FC', 17,  420, 33, 60,'Se acopla con un conector de chasis de 4 polos y se pone en contacto con + 1 / -1', 'NeutrikNL4FC.png', null, 4);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Funda Rigida FE1225', 8, 1790, 0, 15,'La bolsa de concierto F1225 Series de Fender es la mejor opción para mantener su guitarra eléctrica segura mientras viaja. Con nuestra forma icónica de instrumento asimétrico, su capa exterior duradera está construida con poliéster 1200 Denier resistente que protege contra daños sin rasgarse y rasgarse.', 'FenderFe1225.png', 1, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Bajo electroacustico CB-60SCE', 8, 5689, 20, 3,'La serie Classic Design se completa con el CB-60SCE, un bajo acústico muy por encima de los demás de su clase. Este modelo utiliza el mismo perfil de mástil delgado y cómodo que se encuentra en todas las guitarras de Classic Design.', 'BajoFenderElectro.jpg', 1, 6);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Guitarra C40', 6, 2995, 10, 3,'C40 ha sido galardonado en la última edición de los premios de la industria musical (M.I.A., Music Industry Awards). Desde su lanzamiento a principios de la década de los ‘90s, nuestra querida C40 ha ido coleccionando premios y reconocimientos, estableciéndose por derecho propio como la guitarra clásica mejor valorada entre profesores, alumnos y guitarristas principiantes, gracias a su increíble relación calidad-precio.', 'YamahaC40.jpg', 2, 1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Cable de Instrumento de plug a plug', 18, 225, 5, 50,'Cable de instrumento con tapones TRS de Adam Hall - probada desde 1980, robusto, y asequible. Este cable garantiza protección óptima contra el ruido de fondo con blindaje en espiral y un blindaje adicional. Equipado con conectores desequilibrados rectos.', 'CablePlugPlug.png', null, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Adaptador de Corriente PSB-120', 10, 1300, 17, 56,'El adaptador de alimentación PSB-120 se puede utilizar en lugar del adaptador de PSB-1U y trabaja con modelos de teclado Roland', 'RolandPSB-120.png', null, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Sordina para Trompeta Silent XB7X', 6, 4670, 11, 3,'Necesitas tocar cuando y como tú quieras, sin estar atado a un momento o lugar. La nueva generación de Yamaha SILENT Brass™ lo hace posible. El nuevo SILENT Brass™ consiste en una sordina más pequeña y ligera, de soplo más libre y de un Personal Studio™, que ofrece el sistema exclusivo de Yamaha Brass Resonance Modeling. Juntos proporcionan el tono acústico natural que obtienes cuando tocas sin una sordina, haciéndote sentir que realmente estás tocando sin ella.', 'YamahaSilentXB7X.png', 1, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Boquilla Para Trompeta 5I1', 19, 734, 25, 40,'El diseño patentado inusual de la boquilla Doble Taza permite una gran facilidad de tocar en el registro alto.', 'EmoParduba5I1.png', 11, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('FBJ-400 4 cuerdas', 20, 23560, 40, 5,'El FBJ-400 tiene elementos de diseño clásico como un mástil de arce atornillado con diapasón de ébano de Macassar y marcadores laterales que brillan en la oscuridad en un cuerpo de caoba a una escala de 34 ”, e incluye el excelente EMG P-HZ / EMG LJ- Pastillas HZ con cubiertas rojas de sus otros modelos exclusivos para una versatilidad sónica.', 'BajoLTD.jpg',13, 6);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Cable Midi Msc-50', 10, 194, 16, 2,'Accesorio para teclados, máquinas de ritmo y todo equipo con conectividad MIDI de conectores tradicionales.', 'RolandMsc-50.png', 1, 4);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('322CE', 12, 62400, 5, 6,'El Grand Concert 322ce con corte de caoba atraerá a los jugadores con estilo de dedos con raíces que anhelan una experiencia de juego cómoda. El mástil de 24-7 / 8 pulgadas facilita el traste y las cuerdas de flexión, mientras que el emparejamiento de madera de caoba / madera negra produce una respuesta tonal sorprendentemente cálida y dinámica para un cuerpo más pequeño, reforzado aún más por la adición de refuerzo de clase V de este año.', 'Taylor322ce.jpg',14 ,1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('American Dream AD17e Blacktop', 12, 39600, 26, 1,'Construido con fondo y aros de ovangkol macizo y una tapa de abeto macizo negro, el Grand Pacific AD17e se impone con una estética retro audaz que complementa su tono de inspiración vintage. Ovangkol aporta calidez y un agradable enfoque de rango medio, que, junto con nuestra arquitectura de refuerzo V-Class, ofrece una asombrosa combinación tonal de potencia, sustain y musicalidad.', 'BlackTop.jpg', 1,1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Electro Acustica 418E', 12, 29627, 8, 5,'El 418e de Taylor combina la potencia y la complejidad tonal de nuestra Gran Orquesta de gran cuerpo con el amplio rango de frecuencia de ovangkol y abeto de África. El resultado es una voz amplia y dinámica que rebosa de detalles. Tan grande y audaz como es el sonido, la Grand Orchestra es increíblemente equilibrada y sensible para un cuerpo grande, lo que lo convierte en un instrumento sorprendentemente versátil que también puede responder a la llamada de arreglos exuberantes de dedos.', 'Taylor418E.jpg', 2,1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Affinity Jazz Bass V', 8, 5775, 0, 2,'Tiene la apariencia y el tono que todo el mundo conoce y ama, a un precio muy económico. Ideal para los bajistas modernos que tienen un alcance extendido en el extremo bajo, lo más destacado de este bajo son las pastillas de Jazz Bass V que gruñen y pegan.', 'AffinityJazz.jpg',15 ,6);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Cherry EB-3', 1, 13127, 20, 3,'Una recreación deslumbrante de la maravilla vintage con todo el tono y la sensación del original sin el precio y los problemas vintage. El Epiphone EB-3 viene con la Garantía limitada de por vida de Epiphone y el servicio al cliente Gibson 24/7/365. Visite hoy a su distribuidor autorizado de Epiphone y descubra el sonido de una leyenda con el bajo EB-3.', 'EpiphoneCherry.jpg',3, 6);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Cable de 3.5mm estereo a 2 RCA', 21, 168.50, 40, 6,'Cable adaptador desde el conector mini TRS de 3,5 milímetros a 2 x RCA. Para conectar fuentes de señal externas, por ejemplo, reproductores de MP3 o tarjetas de sonido de PC.', 'LDSystems.png', null, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Amplificador Katana Mini', 22, 4308, 33, 20,'Los consagrados amplificadores BOSS Katana han recibido elogios de guitarristas por todos lados gracias a su fantástico sonido, textura sónica, efectos integrados a bordo y valor genial. Ahora, el Katana-Mini hace accesible el solemne sonido Katana en un pequeño amplificador que puede ir a cualquier lugar y que es operado por baterías.', 'BossKatanaMini.png', 1, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Cd-60s', 8, 3056, 0, 60,'El CD-60S All-Mahogany incluye una tapa de caoba extensamente uno de nuestros modelos más populares para un sabor claramente orgánico. Es ideal para los jugadores que buscan un acorazado asequible de alta calidad con gran tono y excelente jugabilidad.', 'FenderSunburst.jpg', 16,1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Flauta transversal YFL212', 6, 2836, 21, 8,'Con una abertura de doble ensanche y un diseño exclusivo de rebaje del orificio de la embocadura que proporciona una respuesta excelente y un tono intenso y cálido, la cabeza CY ayuda a los principiantes a aprender rápidamente a producir un bello sonido. Los intérpretes más experimentados apreciarán su respuesta rápida y uniforme en todos los registros.', 'YamahaYFL212.png', 6,7);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('HI-BB-SB', 23, 13400, 5, 5,'Höfner ha creado una replica del bajo de Paul McCartney Violín Bass Vintage 62, históricamente bastante exacta para satisfacer incluso al fan más exigente de los Beatles.', 'HofnerSunburst.jpg', 16, 6);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Trombon De Embolos Bach Sib Vt501', 24, 16456, 15, 4,'Trombón de válvula Bb de la serie VT501.', 'VincentBach.png',11 ,7);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Flauta Piccolo YPC62', 6, 29650, 21, 1,'Un antiguo favorito de los músicos profesionales, el YPC-62 puede encontrar en muchas de las mejores orquestas del mundo. Caracterizado por una excelente entonación y jugabilidad. Cuenta con una cabeza de alpaca y cuerpo de granadilla sazonada para un tono cálido y completo', 'YamahaYPC62.png', 14, 7);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Player STRATOCASTER', 8, 20179, 40, 2,'El sonido inspirador de una Stratocaster es uno de los fundamentos de Fender. Con este clásico sonido de agudos campanilleantes, medios pronunciados y bajos robustos, combinados con una articulación cristalina, la Player Stratocaster está repleta de auténtico estilo y sensación Fender. Está lista para hacer realidad tus ideas musicales, es lo suficientemente versátil para cualquier estilo de música y es la plataforma perfecta para crear tu propio sonido.', 'FenderPlayerSTRATOCASTER.png', 9,1);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Hyper-D 6 Piezas', 15, 4619, 26, 4,'Nuestra mayor prioridad en la producción de la serie de baterías Superstar fue el sonido. El carácter completo y poderoso y la rica resonancia de los tambores Superstar se lograron utilizando cáscaras de arce cuidadosamente seleccionadas y enfocándose intensamente en el moldeado de la cáscara y la forma del borde del rodamiento.', 'BateriaTamaSuperstar.png', 12,3);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Pandero TA-4110-43', 25, 700, 14, 3,'El pandero remo cuenta con un tono brillante con discos (jingle) de sonido abierto para su uso en aplicaciones de culto. Construido con el material Acousticon y parche de mylar con gráfico, pre-afinados con 1 o 2 hileras de conjuntos de jingle dependiendo del modelo. El pandero es ligero, duradero con mucha proyección de sonido, disponible en varias medidas y estampados.', 'RemoPrizmaticTA-4110-43.png', 17,7);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Pedalera de efectos GT-1000', 22, 29450, 20, 6,'Procesador/amplificador de guitarra Flagship con una calidad de sonido inigualable y una expresividad sin igual AD/DA de 32 bits líder en la industria, procesamiento de coma flotante de 32 bits y velocidad de muestreo de 96 kHz en todo Motor BOSS DSP de última generación, diseñado específicamente para aplicaciones musicales', 'BossGT-1000.png', 1, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Base para pedales RD-B2', 26, 1200, 20, 8,'La placa de pedal tiene un diseño hueco muy especial, que permite una organización conveniente de los cables. Además, su forma única de fijar la fuente de alimentación (no incluida) mediante el uso de una cuerda elástica adicional, se adapta a cualquier volumen de fuente de alimentación', 'JoyoRD-B2.png', 1, 2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Procesador para Voz VE-20', 10, 8318.50, 0, 4,'El nuevo VE-20 es fácil de usar y ha sido diseñado desde la raíz para los cantantes, presentando la tecnología de algunos de los mejores efectos de voz del mercado. Al pisar el pedal de cambio, puedes añadir al instante exuberantes capas de voz y armonías a tu canto, agregar corrección de tono en tiempo real, etc.', 'RolandVE-20.png', 18,2);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Acordeon CORONA II XTREME', 27, 43560, 20, 1,'El Corona II Xtreme se hace para el músico profesional que exige tanto la calidad y funcionalidad. Características de 34 botones de acción, dinámico, tecnología diapasón sin ruido, el bajo de la correa ajustable, funda mejorado y correas acondicionadas incluido.','HohnerBlancoCORONA.png',6,7);
insert into products (name, id_brand, price, discount, stock, description, image, id_color,id_categories) values ('Colofonia Piranito 900700', 28, 192.50, 15, 2,'Uno de los accesorios que no pueden faltar para violin o viola y una de las marcas preferidas', 'Piranito.png', null, 4);