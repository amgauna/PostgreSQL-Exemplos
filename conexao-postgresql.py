# No Python
# Depois que o pyPostgreSQL estiver instalado, podemos codificar a conexão da seguinte forma:
# Se tudo deu certo, ou seja, nenhum erro foi gerado, a conexão foi realizada.
# Novamente ressaltando que existem várias formas de realizar essa conexão para várias 
# linguagens de frameworks que lidam com o banco de dados, principalmente os relacionais.

import postgresql

db = postgresql.open( user = ‘username’, database = ‘database_name’, port = 5432, password = ‘password’ )
