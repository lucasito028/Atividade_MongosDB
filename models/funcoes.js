const conectar = require('./testeparabanco.js'); // Importação do módulo para conexão com o banco de dados

async function agregacao() {

    let conexao = await conectar(); // Estabelece a conexão com o banco de dados

    try {
        const colecaopostagens = conexao.collection("postagens");

        /* Sinceridade "pedi ajuda" para uma AI Claude 2 ou seja se quiser descontar pontos, não tem problema
        */
        const resultadoAgregacao = await colecaopostagens.aggregate([
            // Pipeline de agregação para calcular estatísticas sobre postagens e comentários
        ]).toArray();

        console.log('Resultado da agregação:', resultadoAgregacao); // Exibe o resultado da agregação
    } catch (error) {
        console.error('Erro na agregação:', error); // Exibe erro, se houver, na agregação
    }
}


async function atualizacaoCondicional() {

    let conexao = await conectar(); // Estabelece a conexão com o banco de dados

    try {

        const colecaopostagens = conexao.collection("postagens");

        // Define filtro e atualização condicional para determinadas postagens
        const filtroAtualizacao = {
            curtidas: { $gte: 100 } 
        };
        const atualizacao = {
            $set: { fkcategoria: 2 } 
        };

        const resultadoAtualizacao = await colecaopostagens.updateMany(filtroAtualizacao, atualizacao);

        console.log(`${resultadoAtualizacao.modifiedCount} postagens atualizadas com sucesso.`); // Exibe a quantidade de postagens atualizadas

        const postagensAtualizadas = await colecaopostagens.find({ fkcategoria: 2 }).toArray();

        console.log('Postagens com fkcategoria = 2:', postagensAtualizadas); // Exibe postagens atualizadas
    } catch (error) {
        console.error('Erro na atualização condicional e seleção:', error); // Exibe erro, se houver, na atualização
    }
}


async function indices() {

    let conexao = await conectar(); // Estabelece a conexão com o banco de dados

    try {

        const collection = conexao.collection('postagens');

        // Cria um índice no campo 'usuario_id'
        await collection.createIndex({ fkusuario: 1 });

        // Consulta sem o índice
        console.log('Exemplo 1 sem indice');
        const semindice = await collection.find({ fkusuario: 1 }).toArray();
        console.log('Resultado', semindice);

        // Consulta com o índice
        console.log('Mesmo exemplo 1 com indice');
        const comindice = await collection.find({ fkusuario: 1 }).toArray();
        console.log('Resultado:', comindice);

    } catch (error) {
        console.error('Erro na atualização condicional e seleção:', error); // Exibe erro, se houver, na criação do índice
    }
}

async function translacaodeletar() {

    let conexao = await conectar(); // Estabelece a conexão com o banco de dados
  
    try {

      const postagens = conexao.collection('postagens');
      const comentarios = conexao.collection('comentarios');
      const usuarios = conexao.collection('usuario'); 
  
      // Mostra informações antes de deletar registros relacionados a um usuário específico
      console.log('Antes:');
      const usuariosAntes = await usuarios.find({fkusuario: 1}).toArray();
      console.log('O usuario', usuariosAntes);
  
      const postagensAntes = await postagens.find({fkusuario: 1}).toArray();
      console.log('E suas postagens:', postagensAntes);
  
      const comentariosAntes = await comentarios.find({id: 1}).toArray();
      console.log('E seus comentários:', comentariosAntes);

      const sesao = conexao.startSession({ retryWrites: true, causalConsistency: true }); 

      // Inicia uma transação para deletar registros relacionados ao usuário específico
      sesao.startTransaction();
      try {
        
        await comentarios.deleteMany({ fkusuario: 1 }, { sesao });
        await postagens.deleteMany({ fkusuario: 1}, { sesao });
        await usuarios.deleteOne({ id: 1 }, { sesao });

        await sesao.commitTransaction(); // Confirma a transação após a remoção dos registros
        console.log('Transação concluída com sucesso');

        // Mostra informações após a remoção dos registros
        console.log('Apos a remocao');
        const usuariosdepois = await usuarios.find({fkusuario: 1}).toArray();
        console.log('usuario:', usuariosdepois);
  
        const postagensdepois = await postagens.find({fkusuario: 1}).toArray();
        console.log('E suas postagens:', postagensdepois);
  
        const comentariosdepois = await comentarios.find({id: 1}).toArray();
        console.log('E seus comentários:', comentariosdepois);

      } catch (error) {
        console.error('Erro na transação:', error); // Exibe erro, se houver, na transação
        await sesao.abortTransaction(); // Aborta a transação em caso de erro
      }
    } catch (error) {
      console.error('Erro na conexão:', error); // Exibe erro, se houver, na conexão com o banco de dados
    }
}

// agregacao(); 
// atualizacaoCondicional()
// indices();
// translacaodeletar();