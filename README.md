# Atividade_MongosDB-
Manipulação de Dados com MongosDB - Agregação, Atualização Condicional, Índices e Transações

<h2>Primeira coisa: Tome cuidado pois se der erro na conecao é por que o MongosDb/Atlas ele "fecha" a conecao ai eu tenho que autorizar denovo quem deve acessar o banco de dados.</h2>
Arquivos: 
- testeparabanco.js - Só serve para esconder o banco de dados e testar
- insercoes.js - Só para inserir Mais dados
- funcoes.js - As 4 funções do Node Js

<h3>testeparabanco.js - Só serve para esconder o banco de dados e testar </h3>
Resumindo: Esse código em JavaScript usa o pacote mongodb para conectar-se a um banco de dados MongoDB na nuvem. Ele importa o MongoClient, estabelece a URI de conexão, cria uma instância do cliente com essa URI e define uma função assíncrona chamada conectar. Dentro dessa função, o código estabelece a conexão com o banco de dados usando client.connect() e retorna a referência para o banco "redesocial" se a conexão for bem-sucedida. Se houver um erro durante a conexão, ele é registrado no console e lançado novamente. A função conectar é exportada para possibilitar seu uso em outros arquivos, permitindo a conexão com o MongoDB.


Mais detalhes apenas abrir o arquivo dentro do models "pasta: models" e abrir o testeparabanco.js

Como instalei:
3 - npm install mongodb


<h3>insercoes.js - Só para inserir Mais dados</h3>
Resumindo: Este código usa uma função de conexão a um banco de dados e quatro funções assíncronas (inserirusuarios, inserircategorias, inserirpostagens e inserircomentarios) para inserir conjuntos de dados em coleções diferentes do banco. Cada função utiliza a função de conexão para acessar o banco e inserir dados em coleções específicas, registrando o número de registros inseridos. As chamadas dessas funções ao final do código executam a inserção dos dados.

Mais detalhes apenas abrir o arquivo dentro do models "pasta: models" e abrir o insercoes.js

