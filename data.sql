USE music_db;

insert into brands (name) values ('Watsica-Ondricka');
insert into brands (name) values ('Upton and Sons');
insert into brands (name) values ('Crist, Stoltenberg and Bogisich');
insert into brands (name) values ('Konopelski LLC');
insert into brands (name) values ('Jakubowski-Stamm');
insert into brands (name) values ('Shields, Pouros and Hackett');
insert into brands (name) values ('Zemlak-Lemke');
insert into brands (name) values ('Mills LLC');
insert into brands (name) values ('Rippin, Wunsch and Lockman');
insert into brands (name) values ('Ledner, McGlynn and Gleichner');

insert into colors (name) values ('Green');
insert into colors (name) values ('Turquoise');
insert into colors (name) values ('Crimson');
insert into colors (name) values ('Goldenrod');
insert into colors (name) values ('Blue');
insert into colors (name) values ('Violet');
insert into colors (name) values ('Mauv');
insert into colors (name) values ('Teal');
insert into colors (name) values ('Maroon');
insert into colors (name) values ('Red');

insert into categories (name) values ('bass');
insert into categories (name) values ('amplifier');
insert into categories (name) values ('guitar');
insert into categories (name) values ('drums');


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

insert into products (name, id_brand, price, discount, description, image, id_color) values ('Hand Antibacterial Premium', 4, 3245, 0, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'http://dummyimage.com/187x100.png/cc0000/ffffff', 2);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Mucor plumbeus', 6, 5603, 0, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'http://dummyimage.com/204x100.png/dddddd/000000', 9);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Risperidone', 10, 2909, 0, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'http://dummyimage.com/230x100.png/5fa2dd/ffffff', 2);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Health Smart Medicated Foot', 7, 4011, 0, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'http://dummyimage.com/104x100.png/cc0000/ffffff', 10);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('GOOD NEIGHBOR PHARMACY ACNE TREATMENT', 9, 8457, 0, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.', 'http://dummyimage.com/125x100.png/5fa2dd/ffffff', 10);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Ringers', 5, 4823, 0, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'http://dummyimage.com/239x100.png/5fa2dd/ffffff', 4);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('ChloraPrep One-Step', 10, 2280, 0, 'Cum sociis natoque penatibus , nascetur ridiculus mus.', 'http://dummyimage.com/234x100.png/ff4444/ffffff', 9);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Benazepril Hydrochloride', 8, 9783, 0, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'http://dummyimage.com/158x100.png/cc0000/ffffff', 4);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('verapamil hydrochloride', 5, 2135, 0, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'http://dummyimage.com/244x100.png/ff4444/ffffff', 8);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('DISTICHLIS SPICATA POLLEN', 9, 3354, 0, 'Fusce consequat. Nulla nisl. Nunc nisl.', 'http://dummyimage.com/170x100.png/dddddd/000000', 4);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('simvastatin', 10, 6366, 0, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna.', 'http://dummyimage.com/230x100.png/ff4444/ffffff', 10);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Chaetomium globosum', 10, 7705, 0, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Praesent lectus.', 'http://dummyimage.com/226x100.png/ff4444/ffffff', 3);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('HYVEE', 3, 9314, 0, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id. Mauris lacinia sapien quis libero.', 'http://dummyimage.com/230x100.png/ff4444/ffffff', 7);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Gelusil', 5, 1871, 0, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet rhoncus dui vel sem.', 'http://dummyimage.com/160x100.png/dddddd/000000', 6);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Always Perfect CC', 5, 1466, 0, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'http://dummyimage.com/138x100.png/dddddd/000000', 1);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Ibuprofen', 6, 2342, 0, 'Aliquam quis turpis eget elit sodales scelerisque.. Suspendisse accumsan tortor quis turpis.', 'http://dummyimage.com/218x100.png/ff4444/ffffff', 6);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Atropine Sulfate', 4, 1033, 0, 'Vestibulum ac est lacinia nisi venenatis tristique. ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'http://dummyimage.com/167x100.png/5fa2dd/ffffff', 2);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Jet Lag and Shift Change', 10, 9861, 0, 'Sed sagittis. Nam congue, risus semper porta volutpat, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'http://dummyimage.com/210x100.png/cc0000/ffffff', 6);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Vitamin A and Vitamin D', 9, 4841, 0, 'Praesent id massa id nisl venenatis lacinia. Aenean sit .', 'http://dummyimage.com/114x100.png/cc0000/ffffff', 10);
insert into products (name, id_brand, price, discount, description, image, id_color) values ('Cortisonum 30 Special Order', 5, 7849, 0, 'Pellentesque at nulla. Suspendisse potenti. ', 'http://dummyimage.com/129x100.png/dddddd/000000', 3);


