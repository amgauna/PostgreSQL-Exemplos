/*
 * Programa para mostrar a utilização do SQL estático incorporado.
 * Baseado em:
 *     The art of metaprogramming, Part 1: Introduction to metaprogramming
 *     http://www-128.ibm.com/developerworks/linux/library/l-metaprog1.html
 */

#include <stdio.h>

/*
 * Rotina para tratamento de erro
 */

static void erro() {
   printf("#%ld:%s\n",sqlca.sqlcode,sqlca.sqlerrm.sqlerrmc);
   exit(1);
}

/*
 * Rotina para tratamento de advertência
 */

static void advertencia() {
   printf("#%ld:%s\n",sqlca.sqlcode,sqlca.sqlerrm.sqlerrmc);
}

int main()
{

   /*
    * Tratar os erros e advertências de forma apropriada
    */

   EXEC SQL WHENEVER SQLWARNING DO advertencia();   /* sqlca.sqlwarn[0] == 'W' */
   EXEC SQL WHENEVER SQLERROR DO erro();            /* sqlca.sqlcode < 0 */

   /*
    * Estabelecer a conexão com o servidor de banco de dados.
    * Usar o nome, senha e banco de dados apropriados.
    */

   EXEC SQL CONNECT TO unix:postgresql://localhost/teste USER teste/teste;

   /*
    * Variáveis utilizadas para armazenamento
    * temporário dos campos do banco de dados
    */

   EXEC SQL BEGIN DECLARE SECTION;
   int id;
   VARCHAR nome[200];
   EXEC SQL END DECLARE SECTION;

   /*
    * Declaração a ser executada
    */

   EXEC SQL DECLARE cursor_pessoal CURSOR FOR
      SELECT id, nome FROM pessoal ORDER BY nome;

   /*
    * Executar a declaração
    */

   EXEC SQL OPEN cursor_pessoal;

   EXEC SQL WHENEVER NOT FOUND GOTO fechar_cursor;
   while(1) /* a saída do laço é tratada pela declaração precedente */
   {
      /* Ler o próximo valor */
      EXEC SQL FETCH cursor_pessoal INTO :id, :nome;
      printf("Lido: ID = %d; Nome = %s\n", id, nome.arr);
   }

   /* Limpeza */
   fechar_cursor:
   EXEC SQL CLOSE cursor_pessoal;
   EXEC SQL DISCONNECT;

   return 0;
}
