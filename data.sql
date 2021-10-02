USE music_db;

insert into brands (name) values ('Yamaha');
insert into brands (name) values ('Fender');
insert into brands (name) values ('Marshall');
insert into brands (name) values ('Gibson');
insert into brands (name) values ('Eastwood');
insert into brands (name) values ('Otra');


insert into colors (name) values ('Rojo');
insert into colors (name) values ('Azul');
insert into colors (name) values ('Verde');
insert into colors (name) values ('Blanco');
insert into colors (name) values ('Negro');
insert into colors (name) values ('Otro');

insert into categories (name) values ('Guitarras');
insert into categories (name) values ('Bajos');
insert into categories (name) values ('Baterias');
insert into categories (name) values ('Partes');
insert into categories (name) values ('Accesorios');
insert into categories (name) values ('Otros instrumentos');

insert into users (name, email, password, image) values ('Danita Gerauld', 'dgerauld0@gmail.com', 'YWLuUH5m6XXq', 'http://dummyimage.com/178x100.png/cc0000/ffffff');
insert into users (name, email, password, image) values ('Chandler Iaduccelli', 'ciaduccelli1@blog.com', 'F5iFxI', 'http://dummyimage.com/177x100.png/cc0000/ffffff');
insert into users (name, email, password, image) values ('Donetta Sandham', 'dsandham2@wordpress.com', 'lh0hIO4gNH6e', 'http://dummyimage.com/186x100.png/ff4444/ffffff');
insert into users (name, email, password, image) values ('Konstanze Bengtson', 'kbengtson3@meetup.com', '9tqHk56', 'http://dummyimage.com/106x100.png/dddddd/000000');
insert into users (name, email, password, image) values ('Sileas Aasaf', 'saasaf4@samsung.com', 'iBaRRcq7uX', 'http://dummyimage.com/200x100.png/5fa2dd/ffffff');
insert into users (name, email, password, image) values ('Kattie Rodolf', 'krodolf5@usda.gov', 'RaiZFWQKMuW', 'http://dummyimage.com/174x100.png/dddddd/000000');
insert into users (name, email, password, image) values ('Margaretha Begley', 'mbegley6@imgur.com', 'bpdOXSBNd', 'http://dummyimage.com/200x100.png/5fa2dd/ffffff');
insert into users (name, email, password, image) values ('Lexis Rumens', 'lrumens7@wufoo.com', 'fQBlmm', 'http://dummyimage.com/107x100.png/cc0000/ffffff');
insert into users (name, email, password, image) values ('Kele Treadwell', 'ktreadwell8@canalblog.com', 'JEHJHZ', 'http://dummyimage.com/221x100.png/ff4444/ffffff');
insert into users (name, email, password, image) values ('Domenic Volage', 'dvolage9@opera.com', 'zpTzgjmwDRhR', 'http://dummyimage.com/162x100.png/5fa2dd/ffffff');
insert into users (name, email, password, image) values ('Julieta MacLaig', 'jmaclaiga@discuz.net', 'iTDs9LUW', 'http://dummyimage.com/240x100.png/ff4444/ffffff');
insert into users (name, email, password, image) values ('Doreen Fahey', 'dfaheyb@newsvine.com', 'jrchJ69Kp', 'http://dummyimage.com/241x100.png/5fa2dd/ffffff');
insert into users (name, email, password, image) values ('Fanya Bofield', 'fbofieldc@qq.com', '7d18OCyJZ', 'http://dummyimage.com/231x100.png/dddddd/000000');
insert into users (name, email, password, image) values ('Geri Fritzer', 'gfritzerd@a8.net', '4Sme0diyNXM', 'http://dummyimage.com/161x100.png/5fa2dd/ffffff');
insert into users (name, email, password, image) values ('Theodoric Longhorne', 'tlonghornee@mozilla.com', 'tN0p40kFrb8H', 'http://dummyimage.com/166x100.png/cc0000/ffffff');
insert into users (name, email, password, image) values ('Rosy Arkle', 'rarklef@timesonline.co.uk', '7FrQiO6', 'http://dummyimage.com/126x100.png/cc0000/ffffff');
insert into users (name, email, password, image) values ('Shani Birch', 'sbirchg@nymag.com', '0tchgQ', 'http://dummyimage.com/231x100.png/5fa2dd/ffffff');
insert into users (name, email, password, image) values ('Morie Anchor', 'manchorh@ebay.com', '5mwQwr3', 'http://dummyimage.com/165x100.png/dddddd/000000');
insert into users (name, email, password, image) values ('Harold Edwardson', 'hedwardsoni@state.tx.us', '9xZaKN', 'http://dummyimage.com/206x100.png/dddddd/000000');
insert into users (name, email, password, image) values ('Ginny Pratte', 'gprattej@ebay.com', 'REfwoHx', 'http://dummyimage.com/242x100.png/ff4444/ffffff');

insert into products (name, id_brand, price, discount, description, image, id_color,id_categories) values ('Eastwood Classic 6 Guitarra', 5, 3245, 0, '60" S País clásico aspecto George Harrison de desarrollar un instrumento con gran equilibrio y sentir. Set de parte trasera y los lados superior de arce, Mástil de arce con trastes único. Es fabricado para que everyday jugador que puede soporte y Twang durante horas y horas.', 'https://m.media-amazon.com/images/I/81KPGH6xFML._AC_SX679_.jpg', 6,1)
, ('Amplificador de guitarra eléctrica Fender Frontman 10G', 2, 2000, 0, ' eget, rutrum at, lorem.', 'https://m.media-amazon.com/images/I/81zMm+OVoZL._AC_SL1200_.jpg', 4,5)
 ,('Sidejack', 5, 8909, 0, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'https://www.guitargear.com.mx/tienda/images/detailed/23/Eastwood-Guitars_SidejackBass32_MetallicRed_Right-hand_Full-front-angled_1024x1024.jpg', 1,1)
,('Pro System Audiotek Bateria', 6, 6011, 0, 'sta batería musical acústica es ideal para principiantes o expertos ', 'https://m.media-amazon.com/images/I/71xO5KU73tL._AC_SL1500_.jpg', 5,3);



