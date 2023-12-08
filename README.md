# Atividade_MongosDB-
<h2>Manipulação de Dados com MongosDB</h2> 
<br>
<h3>- Agregação</h3>
<h3>- Atualização Condicional<h3>
<h3>- Índices</h3> 
<h3>- Transações</h3>

<h2>Primeira coisa: Tome cuidado pois se der erro na conecao é por que o MongosDb/Atlas ele "fecha" a conecao ai eu tenho que autorizar denovo quem deve acessar o banco de dados.</h2>

<h3>Por que usei Node.Js</h3>
1. Facilidade de aprendizado <br>
2. Mais facil de configurar <br>
3. Versatilidade de ambiente <br>
4. Aprendizado de NodeJs <br>
<br>
<h3>Por que usei Atlas MongosDb</h3>
1. Facilidade de aprendizado <br>
2. Mais facil de configurar <br>
3. Versatilidade de ambiente <br>
4. Visualmente falando é mais bonito que o Terminal <br>

<h3>Arquivos</h3>
- testeparabanco.js - Só serve para esconder o banco de dados e testar <br>
- insercoes.js - Só para inserir Mais dados <br>
- funcoes.js - As 4 funções do Node Js <br>
<br>
<h3>testeparabanco.js - Só serve para esconder o banco de dados e testar </h3>
Resumindo: Esse código em JavaScript usa o pacote mongodb para conectar-se a um banco de dados MongoDB na nuvem. Ele importa o MongoClient, estabelece a URI de conexão, cria uma instância do cliente com essa URI e define uma função assíncrona chamada conectar. Dentro dessa função, o código estabelece a conexão com o banco de dados usando client.connect() e retorna a referência para o banco "redesocial" se a conexão for bem-sucedida. Se houver um erro durante a conexão, ele é registrado no console e lançado novamente. A função conectar é exportada para possibilitar seu uso em outros arquivos, permitindo a conexão com o MongoDB.
<br>
<br>
Mais detalhes apenas abrir o arquivo dentro do models "pasta: models" e abrir o testeparabanco.js
<br>
Como instalei:
3 - npm install mongodb
<br>
<br>
<h3>insercoes.js - Só para inserir Mais dados</h3>
Resumindo: Este código usa uma função de conexão a um banco de dados e quatro funções assíncronas (inserirusuarios, inserircategorias, inserirpostagens e inserircomentarios) para inserir conjuntos de dados em coleções diferentes do banco. Cada função utiliza a função de conexão para acessar o banco e inserir dados em coleções específicas, registrando o número de registros inseridos. As chamadas dessas funções ao final do código executam a inserção dos dados.
<br>
Mais detalhes apenas abrir o arquivo dentro do models "pasta: models" e abrir o insercoes.js

<h3>funcoes.js - As 4 funções do Node Js</h3>
O código realiza operações de agregação, atualização condicional e manipulação de índices no banco de dados, conectando-se e executando transações para deletar registros relacionados a um usuário específico.
<br>
Mais detalhes apenas abrir o arquivo dentro do models "pasta: models" e abrir o funcoes.js
