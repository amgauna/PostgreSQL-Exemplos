CREATE TABLE "EmpresaMarketing".tb_funcionarios
(
  codigo integer NOT NULL,
  nome character varying(100),
  email character varying(100) NOT NULL,
  telefone character varying(14),
  CONSTRAINT pk_funcionario PRIMARY KEY (codigo)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "EmpresaDevmedia".tb_funcionarios
  OWNER TO postgres;
  
INSERT INTO "EmpresaDevmedia".tb_funcionarios(codigo, nome, email, telefone)
    VALUES (1, 'Edson Dionisio', 'edson.dionisio@gmail.com', '81997402803');
INSERT INTO "EmpresaDevmedia".tb_funcionarios(codigo, nome, email, telefone)
    VALUES (2, 'Marilia Kessia', 'mkessia@gmail.com', '81997402810');
INSERT INTO "EmpresaDevmedia".tb_funcionarios(codigo, nome, email, telefone)
    VALUES (3, 'Caroline Franca', 'carol.dionisio@gmail.com', '81997402123');
INSERT INTO "EmpresaDevmedia".tb_funcionarios(codigo, nome, email, telefone)
    VALUES (4, 'Maite Dionisio', 'maite.dionisio@gmail.com', '81997402322');
INSERT INTO "EmpresaDevmedia".tb_funcionarios(codigo, nome, email, telefone)
    VALUES (5, 'Tatsu Yamashiro', 'tatsu.yamashiro@arrow.com', '99999740999');
    
SELECT codigo, nome, email, telefone FROM "EmpresaMarketing".tb_funcionarios;

