CREATE TABLE clientes ( id serial primary key, data json );

INSERT INTO clientes VALUES (1, '{ "nome": "Marilia Kessia",
"email": "mkessia@gmail.com" }');
INSERT INTO clientes VALUES (2, '{ "nome": "Caroline França",
"email": "caroline.dionisio@gmail.com" }');
INSERT INTO clientes VALUES (3, '{ "nome": "Heitor Dionisio",
"email": "heitor.dionisio@gmail.com" }');
INSERT INTO clientes VALUES (4, '{ "nome": "Edson Dionisio",
"email": "edson.dionisio@gmail.com" }');

SELECT id, data->>'nome' AS nome FROM clientes;
