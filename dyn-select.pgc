/*
 * Programa para mostrar a utilização do SQL dinâmico incorporado.
 * Baseado em:
 *     Universidade de Toronto - DB2 -  Embedded SQL Examples
 *     http://www.cs.toronto.edu/db/courses/db2/
 */

#include <stdio.h>

/*
 * Declarar as variáveis do programa
 */

int i;

/*
 * Declarar as variáveis hospedeiras
 */

EXEC SQL BEGIN DECLARE SECTION;
    /* Propriedades do filme */
    int   filme_id;
    char  filme_titulo[20];
    char  filme_diretor[20];
    /* Propriedades da conexão com o servidor de banco de dados */
    char *conexao="unix:postgresql://localhost/teste";
    char *usuario="teste";
    char *senha="teste";
    /* Filmes */
    struct filme {
        int   filme_id;
        char  filme_titulo[20];
        char  filme_diretor[20];
    };
    struct filme filmes[] = {
        {100,"Água Negra","Walter Salles"},
        {200,"Aprendendo a Mentir","Hendrik Handloegten"},
        {300,"Guerra dos Mundos","Steven Spielberg"},
        {400,"Quarteto Fantástico","Tim Story"},
        {500,"Horror em Amityville",""}
    };
    /* Indicadores */
    int ind1, ind2, ind3;
    /* Declaração de inserção de filme */
    char *insere_filme = "INSERT INTO filmes VALUES(?, ?, ?);";
EXEC SQL END DECLARE SECTION;

/*
 * As linhas abaixo são redundantes, porque a ação padrão é continuar.
 * Estas linhas apenas mostram as situações que podem ocorrer,
 * e uma forma de controlá-las.
 */

                                        /* sqlca.sqlcode == 0 (sem erro)   */
EXEC SQL WHENEVER SQLWARNING CONTINUE;  /* sqlca.sqlwarn[0] == 'W'         */
EXEC SQL WHENEVER NOT FOUND CONTINUE;   /* sqlca.sqlcode == ECPG_NOT_FOUND */

/*
 * Quando houver um erro executar a rotina de tratamento de erro.
 */

EXEC SQL WHENEVER SQLERROR DO erro();   /* sqlca.sqlcode < 0 */

/*
 * Rotina para tratamento de erro
 */

static void erro()
{  printf("#%ld:%s\n",sqlca.sqlcode,sqlca.sqlerrm.sqlerrmc);
   exit(1);
}

/*
 * Programa principal
 */

int main() {

/*
 * Conectar com o banco de dados
 */

EXEC SQL CONNECT TO :conexao USER :usuario IDENTIFIED BY :senha;

if (sqlca.sqlcode != 0) {
        printf("Falha na conexão!");
        erro();
}

/*
 * Criar a tabela filmes
 */

EXEC SQL CREATE TEMPORARY TABLE filmes (
    filme_id      INT NOT NULL PRIMARY KEY,
    filme_titulo  VARCHAR(20),
    filme_diretor VARCHAR(20)
);

/*
 * Inserir as linhas na tabela
 */

EXEC SQL PREPARE insere_filme FROM :insere_filme;

for (i=0; i<(sizeof(filmes)/sizeof(filmes[0])); i++) {
    ind1 = ind2 = ind3 = 0;
    if (strlen(filmes[i].filme_titulo) == 0) ind2=-1;
    if (strlen(filmes[i].filme_diretor) == 0) ind3=-1;
    EXEC SQL EXECUTE insere_filme USING
        :filmes[i].filme_id:ind1,
        :filmes[i].filme_titulo:ind2,
        :filmes[i].filme_diretor:ind3;
}

/*
 * Imprimir o cabeçalho da tabela
 */

 printf("+----------------------+----------------------+\n");
 printf("| Nome do filme        | Diretor              |\n");
 printf("+----------------------+----------------------+\n");

/*
 * Declarar um cursor para acessar as linhas da tabela
 */

EXEC SQL DECLARE c1 CURSOR FOR
    SELECT filme_titulo, filme_diretor
    FROM filmes;

/*
 * Abrir o cursor para ler as linhas da tabela
 */

EXEC SQL OPEN c1;

do {

  /*
   * Ler as linhas da tabela.
   * Executa a declaração implementada pelo cursor e retorna os resultados.
   */

  EXEC SQL FETCH c1 INTO :filme_titulo:ind1, :filme_diretor:ind2;
  if (SQLCODE != 0) break;  /* SQLCODE se refere a sqlca.sqlcode */
  /* Verificar valores nulos */
  if (ind1 == -1) {
     strcpy(filme_titulo,"-");
  }
  if (ind2 == -1) {
     strcpy(filme_diretor,"-");
  }

  /*
   * As variáveis hospedeiras devem ser prefixadas por ':'
   * quando são utilizadas nos comandos SQL
   */

  printf("| %-20s | %-20s |\n",filme_titulo,filme_diretor);

} while (1);

/*
 * Fechar a tabela
 */
 printf("+----------------------+----------------------+\n");

/*
 * Fechar o cursor e a conexão
 */

EXEC SQL CLOSE c1;
EXEC SQL DISCONNECT;
}
