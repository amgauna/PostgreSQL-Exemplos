// No Java, podemos criar uma classe de conexão, utilizando driver de conexão com o postgreSQL.

public class ConnectPostgres {

public Statement statement; // Preparar e realizar pesquisas no banco de dados

public ResultSet resultSet;  // Armazenar o resultado de uma pesquisa passada para o statement

private String driver = “org.postgresql.Driver”; 

private String connectPath = “jdbc:postgresql://localhos:5432//nome-do-banco”;

private String user = “postgres”; // usuário padrão

private String password= “Sua senha de acesso”

public Connection connection; // Realizar a conexão com o banco de dados;

    public void conectar() { 

        try {

            System.setProperty("jdbc.Drivers", driver);
            connection = DriverManager.getConnection(connectPath ,user,password);

        } catch (SQLException ex) {

          /* Tratamento da exceção.*/

        }

    }
    public void desconectar() { 

        try {
            connection.close();
        
        } catch (SQLException ex) {

            /* Tratamento da exceção. */

        }
    }
}
