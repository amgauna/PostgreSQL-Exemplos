/*
Parâmetros

name: O nome de um banco de dados para criar.

user_name: O nome da função do usuário que possuirá o novo banco de dados, 
ou DEFAULT para usar o padrão (ou seja, o usuário que está executando o comando).

Para criar um banco de dados de propriedade de outra função, você deve ser um 
membro direto ou indireto dessa função ou ser um superusuário.

template: O nome do template a partir do qual criar o novo banco de dados, ou 
DEFAULT para usar o template padrão (template1).

encoding:Codificação do conjunto de caracteres para usar no novo banco de dados. 
Especifique uma constante de cadeia (por exemplo, 'SQL_ASCII'), ou um número de 
codificação de inteiro, ou DEFAULT para usar a codificação padrão (ou seja, a 
codificação do banco de dados de modelo).

lc_collate: Ordem de agrupamento (LC_COLLATE) para usar no novo banco de dados. 

Isso afeta a ordem de classificação aplicada às strings, por exemplo, em consultas 
com ORDER BY, bem como a ordem usada em índices em colunas de texto.
O padrão é usar a ordem de agrupamento do banco de dados de modelos.

lc_ctype: Classificação de caracteres (LC_CTYPE) para usar no novo banco de dados. 

Isso afeta a categorização de caracteres, por ex. inferior, superior e dígito.
O padrão é usar a classificação de caracteres do banco de dados de modelos. 

Veja abaixo as restrições adicionais.

tablespace: O nome do espaço de tabela que será associado ao novo banco de dados, 
ou DEFAULT para usar o espaço de tabela do banco de dados de modelo. Esse espaço de
tabela será o espaço de tabela padrão usado para objetos criados neste banco de dados. 

Veja CREATE TABLESPACE para mais informações.

connlimit: Quantas conexões simultâneas podem ser feitas neste banco de dados. -1 
(o padrão) significa sem limite.

Parâmetros opcionais podem ser escritos em qualquer ordem, não apenas na ordem 
ilustrada abaixo.
*/

CREATE DATABASE name
    [ [ WITH ] [ OWNER [=] user_name ]
           [ TEMPLATE [=] template ]
           [ ENCODING [=] encoding ]
           [ LC_COLLATE [=] lc_collate ]
           [ LC_CTYPE [=] lc_ctype ]
           [ TABLESPACE [=] tablespace ]
           [ CONNECTION LIMIT [=] connlimit ] ]
           
