CREATE USER
Define uma nova conta de usuário do banco de dados.

O CREATE USER adiciona um novo usuário a um cluster de banco de dados do PostgreSQL. 
Você deve ser um superusuário do banco de dados para usar este comando.

***CREATE USER name [ [ WITH ] option [ ... ] ]

where option can be:

###      SYSID uid
###    | CREATEDB | NOCREATEDB
###    | CREATEUSER | NOCREATEUSER
###    | IN GROUP groupname [, ...]
###    | [ ENCRYPTED | UNENCRYPTED ] PASSWORD 'password'
###    | VALID UNTIL 'abstime'
    
Parâmetros

name: O nome do novo usuário.

uid: A cláusula SYSID pode ser usada para escolher o ID do usuário do PostgreSQL do novo usuário. 
Isso normalmente não é necessário, mas pode ser útil se você precisar recriar o proprietário de um objeto órfão.
Se isso não for especificado, o ID do usuário atribuído mais alto mais um (com um mínimo de 100) será usado como padrão.

CREATEDB

NOCREATEDB: Essas cláusulas definem a capacidade de um usuário de criar bancos de dados. 
Se CREATEDB for especificado, o usuário que está sendo definido terá permissão para criar seus próprios bancos de dados. 
O uso do NOCREATEDB negará ao usuário a capacidade de criar bancos de dados. Se não especificado, NOCREATEDB é o padrão.

CREATEUSER

NOCREATEUSER: Essas cláusulas determinam se um usuário terá permissão para criar novos usuários. 
O CREATEUSER também fará do usuário um superusuário, que pode substituir todas as restrições de acesso. 
Se não especificado, NOCREATEUSER é o padrão.

groupname: Um nome de um grupo existente no qual inserir o usuário como um novo membro. Vários nomes de grupos podem ser listados.

password: Define a senha do usuário. Se você não planeja usar a autenticação de senha, pode omitir essa opção, mas o usuário não 
poderá se conectar se decidir mudar para a autenticação de senha. A senha pode ser definida ou alterada posteriormente, usando ALTER USER.

ENCRYPTED

UNENCRYPTED: Essas palavras-chave controlam se a senha é armazenada criptografada nos catálogos do sistema. 
(Se nenhum for especificado, o comportamento padrão será determinado pelo parâmetro de configuração password_encryption.) 
Se a string de senha apresentada já estiver no formato criptografado MD5, ela será armazenada como está, independentemente 
de ser especificado ENCRYPTED ou UNENCRYPTED (desde o sistema não pode descriptografar a string de senha criptografada 
especificada). Isso permite o recarregamento de senhas criptografadas durante o dump/restore.
Observe que os clientes mais antigos podem não ter suporte para o mecanismo de autenticação MD5 necessário para trabalhar
com senhas armazenadas criptografadas.

abstime: A cláusula VALID UNTIL define um tempo absoluto após o qual a senha do usuário não é mais válida. 
Se esta cláusula for omitida, a senha será válida para todos os tempos.
