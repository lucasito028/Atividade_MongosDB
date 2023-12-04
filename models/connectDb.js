const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://mxpotatosred123:Ot8XC1tIsEIsyGh8@test.1snikq1.mongodb.net/redesocial?retryWrites=true&w=majority";

async function testConnection() {
  try {
    const client = await MongoClient.connect(uri);
    console.log('Connection to the database successful');
    // Feche a conexão após o teste
    client.close();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

