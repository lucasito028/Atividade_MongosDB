const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://mxpotatosred123:vK4gPpzmrpajJqNm@test.1snikq1.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

//Lugar apenas para conectar o banco e ficar encapsulado
async function conectar() {

  try {
    await client.connect();
    return client.db("redesocial"); 
    
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  }
}

module.exports = conectar;
