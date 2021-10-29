CREATE TABLE paciente (
id INTEGER NOT NULL,
registro   VARCHAR(50) NOT NULL,
data_nasc DATE,
mama      DB2IMAGE);
ENABLE TABLE paciente FOR DG2IMAGE;
ENABLE COLUMN paciente mama FOR DB2IMAGE;

INSERT INTO paciente (id,registro,data_nasc,mama)
VALUES (1, ´5042002-7', '22/03/1958', 
  DB2IMAGE(
  CURRENT SERVER, /* nome do servidor de DB*/
  'c:/images/mamografia.bmp', /* arquivo da imagem */
  'BMP', /* formato origem da imagem */
  'GIF', /* formato destino da imagem */
  '-x 110 -y 150', /* opções de conversão */
  'c:/images/mamografia.gif', /* imagem destino */
  /* 'ASIS' : Permite o Image encontrar o formato */
  MMDB_STORAGE_TYPE_INTERNAL, /* armazenar no DB */
  /* MMDB_STORAGE_EXTERNAL : armazenar no  arquivo*/
  'Mamografia da Paciente' /* comentário */
  ))
  
SELECT id, registro,
       (QScoreFromStr(
       mama,
       'QbTextureFeatureClass file-<server,"C:/pesq.bmp">'
       ) AS ScoreMama
FROM paciente
WHERE CAST (mama As varchar(250)) IN
      (SELECT CAST(image_id AS varchar(25))
      FROM TABLE (
           QbScoreTBFromStr(
              'QbTextureFeatureClass file-<server,"c:/pesq.bmp">',
               /* query string */
               paciente, /* tabela de consulta */
               mama, /* campo da tabela de consulta */
               10 )  /* Numero de imagens mais similares */
               ) AS Tabela1 )
ORDER BY ScoreMama;
               
