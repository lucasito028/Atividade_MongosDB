//Pega a requisição do MongoDb
const {MongoClient} = require('mongodb');

//Chave/Link para acesso
const uri = `mongodb+srv://mxpotatosred123:vK4gPpzmrpajJqNm@test.1snikq1.mongodb.net/?retryWrites=true&w=majority`;

//Criei uma "instancia" para o client
const client = new MongoClient(uri);

//Lugar apenas para conectar o banco e ficar encapsulado
async function conectar() {

  try {
    await client.connect();

    //Aqui ele vai retornar a conexao
    return client.db("redesocial"); 
    
    //Se deu erro fazer o que?
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  }
}

module.exports = conectar;
