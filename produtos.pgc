CREATE TABLE produtos (   
   cod_prod integer NOT NULL CHECK (cod_prod > 0), 
   17 nome  text    NOT NULL,   
   preco    numeric);

CREATE TABLE produtos (   
  cod_prod   integer UNIQUE,   
  nome       text,   
  preco      numeric);
  
CREATE TABLE produtos (   
  cod_prod   integer,   
  nome       text,   
  preco      numeric,   
  UNIQUE (cod_prod));
  
  CREATE TABLE exemplo (   
  a integer,   b integer,   
  c integer,   UNIQUE (a, c));
  
  CREATE TABLE produtos (   
    cod_prod   integer CONSTRAINT unq_cod_prod UNIQUE,
    nome       text,   
    preco      numeric);
