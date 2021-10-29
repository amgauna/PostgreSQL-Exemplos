CREATE TABLE funcionarios (nome character varying(100), sal_semestre
integer[], agenda text[][]);

INSERT INTO funcionarios VALUES ('Edson Dionisio', '{2000, 2500, 3000,
3500}', '{{"Reunião", "Almoço"}, {"Projetos", "Reunião 2"}}');

