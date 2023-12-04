
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Test:AGEt1s72XYaeL2Qr@cluster0.gi7qnyo.mongodb.net/?retryWrites=true&w=majority";


// Função para conectar ao banco de dados
async function connectToDatabase() {

  try {
    // Conectando ao banco de dados
    const client = new MongoClient(uri,);
    await client.connect();

    // Selecionando o banco de dados e a coleção
    const database = client.db('redesocial');
    const collection = database.collection('redesocial');

    // Executar operações no banco de dados, por exemplo:
    const result = await collection.find({}).toArray();
    console.log(result);

    // Fechar conexão
    client.close();
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}



