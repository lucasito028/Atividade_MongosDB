const conectar = require('./testeparabanco.js');

async function agregacao() {

    let conexao = await conectar();

    try {
        const colecaopostagens = conexao.collection("postagens");

        /* Sinceridade "pedi ajuda" para uma AI Claude 2 ou seja se quiser descontar pontos, não tem problema
        */
        const resultadoAgregacao = await colecaopostagens.aggregate([
            {
                $group: {
                    _id: "$fkusuario",
                    totalPostagens: { $sum: 1 }
                }
            },
            {
                $lookup: {
                    from: "comentarios",
                    localField: "_id",
                    foreignField: "fkusuario",
                    as: "comentarios"
                }
            },
            {
                $project: {
                    _id: 1,
                    totalPostagens: 1,
                    numeroComentarios: { $size: "$comentarios" }
                }
            },
            {
                $group: {
                    _id: "$_id",
                    totalPostagens: { $first: "$totalPostagens" },
                    mediaComentarios: { $avg: "$numeroComentarios" }
                }
            },
            {
                $sort: { totalPostagens: -1 }
            }
        ]).toArray();

        console.log('Resultado da agregação:', resultadoAgregacao);
    } catch (error) {
        console.error('Erro na agregação:', error);
    }
}


async function atualizacaoCondicional() {

    let conexao = await conectar();

    try {

        const colecaopostagens = conexao.collection("postagens");

        const filtroAtualizacao = {
            curtidas: { $gte: 100 } 
        };

        const atualizacao = {
            $set: { fkcategoria: 2 } 
        };

        const resultadoAtualizacao = await colecaopostagens.updateMany(filtroAtualizacao, atualizacao);

        console.log(`${resultadoAtualizacao.modifiedCount} postagens atualizadas com sucesso.`);


        const postagensAtualizadas = await colecaopostagens.find({ fkcategoria: 2 }).toArray();

        console.log('Postagens com fkcategoria = 2:', postagensAtualizadas);
    } catch (error) {
        console.error('Erro na atualização condicional e seleção:', error);
    }
}


async function indices() {

    let conexao = await conectar();

    try {

        const collection = conexao.collection('postagens');


        // Criar um índice no campo 'usuario_id'
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

        console.error('Erro na atualização condicional e seleção:', error);

    }
}

async function translacaodeletar() {

    let conexao = await conectar(); 
  
    try {

      const postagens = conexao.collection('postagens');
      const comentarios = conexao.collection('comentarios');

      const usuarios = conexao.collection('usuario'); 
  
      console.log('Antes:');
      const usuariosAntes = await usuarios.find({fkusuario: 1}).toArray();
      console.log('O usuario', usuariosAntes);
  
      const postagensAntes = await postagens.find({fkusuario: 1}).toArray();
      console.log('E suas postagens:', postagensAntes);
  
      const comentariosAntes = await comentarios.find({id: 1}).toArray();
      console.log('E seus comentários:', comentariosAntes);

  
      const sesao = conexao.startSession({ retryWrites: true, causalConsistency: true }); 

      sesao.startTransaction();
      try {
        
        await comentarios.deleteMany({ fkusuario: 1 }, { sesao });
        await postagens.deleteMany({ fkusuario: 1}, { sesao });

        await usuarios.deleteOne({ id: 1 }, { sesao });
  

        
        await sesao.commitTransaction();
        console.log('Transação concluída com sucesso');
  

        console.log('Apos a remocao');
        const usuariosdepois = await usuarios.find({fkusuario: 1}).toArray();
        console.log('usuario:', usuariosdepois);
  
        const postagensdepois = await postagens.find({fkusuario: 1}).toArray();
        console.log('E suas postagens:', postagensdepois);
  
        const comentariosdepois = await comentarios.find({id: 1}).toArray();
        console.log('E seus comentários:', comentariosdepois);


      } catch (error) {

        console.error('Erro na transação:', error);
        await sesao.abortTransaction();
      }
    } catch (error) {

      console.error('Erro na conexão:', error);
    }
  }
  

//atualizacaoCondicional();
//agregacao();
//indices(); 
//translacaodeletar();