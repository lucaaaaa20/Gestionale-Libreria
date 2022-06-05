CREATE TABLE amministratori (
	utenteID INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    eml VARCHAR(255) UNIQUE NOT NULL,
    pwd VARCHAR(255) NOT NULL
);


INSERT INTO amministratori (eml, pwd) VALUES
("pippo@gmail.com", "password1"),
("pluto@gmail.com","prova2"),
