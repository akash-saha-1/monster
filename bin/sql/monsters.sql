CREATE TABLE monsters(
	id SERIAL NOT NULL,
	name NOT NULL VARCHAR(50),
	personality VARCHAR(50)
);

CREATE TABLE habitats(
	id serial,
	name VARCHAR(50) NOT NULL,
	climate VARCHAR(50),
	temp int
);

CREATE TABLE lives(
	monster VARCHAR(50),
	habitat VARCHAR(50)
);

INSERT INTO monsters(name,personality) VALUES('Fluffy','aggressive'),
('Noodles','impatient'),('Rusty','Passionate');

INSERT INTO habitats(name,climate,temp) VALUES('desert','dry',70),
('forest','haunted',30),('mountain','icy',10);

INSERT INTO lives(monster,habitats) VALUES('Fluffy','desert'),('Noddles','forest'),('Rusty','mountain');