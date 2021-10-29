const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    porta: process.env.POSTGRES_PORT,
    usuário: 'postgres',
    senha: 'postgres',
    banco de dados: 'postgres'
});

pgclient.connect();

const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']

pgclient.query(table, (err, res) => {
    if (err) throw err
});

pgclient.query(text, values, (err, res) => {
    if (err) throw err
});

pgclient.query('SELECT * FROM student', (err, res) => {
    if (err) throw err
    console.log(err, res.rows) // Print the data in student table
    pgclient.end()
});
O script cria uma nova conexão com o serviço PostgreSQL e usa as variáveis de ambiente POSTGRES_HOST e POSTGRES_PORT para especificar o endereço e porta do serviço do PostgreSQL. Se o host e a porta não forem definidos, o host-padrão será localhost e a porta-padrão será 5432.

O script cria uma tabela e preenche com dados de espaço reservado. Para testar se o banco de dados postgres contém os dados, o script imprime o conteúdo da tabela no registro do console.

Ao executar este fluxo de trabalho, você verá a seguinte saída na etapa "Conectar ao PostgreSQL", que confirma que você criou com sucesso a tabela do PostgreSQL e adicionou dados:

null [ { id: 1,
    primeiro nome: 'Mona the',
    último nome: 'Octocat',
    idade: 9,
    endereço:
     '88 Colin P Kelly Jr St, São Francisco, CA 94107, Estados Unidos',
    e-mail: 'octocat@github.com' } ]
