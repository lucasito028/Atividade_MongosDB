// Importa a função de conecar() do banco de dados
const conectar = require('./testeparabanco.js');

// Função para inserir dados na coleção usuario
async function inserirusuarios() {
    try {
        // Estabelece ("instancia") a conexão com o banco de dados
        let conexao = await conectar();

        // Dados a serem inseridos na coleção usuario
        var dados = [
            {id: 1, usuario: "klepeo"},
            {id: 2, usuario: "JaoPaulo"}
        ];

        // Acessa a coleção usuario
        const colecao = conexao.collection("usuario");
        
        // Insere os dados na coleção usuario
        const resultado = await colecao.insertMany(dados);

        // Registra a quantidade de registros inseridos na coleção usuario
        console.log(`${resultado.insertedCount} registros inseridos na coleção "Usuario"`);
    } catch(error) {
        // Errou? Aqui está o erro
        console.log("Deu erro aqui:", error);
    }
}

// Função para inserir dados na coleção categoria
async function inserircategorias() {
    try {
        let conexao = await conectar();
        
        var dados = [
            {id: 1, usuario: "Normal"},
            {id: 2, usuario: "Popular"}
        ];
        const colecao = conexao.collection("categoria");
        const resultado = await colecao.insertMany(dados);

        console.log(`${resultado.insertedCount} registros inseridos na coleção "Categoria"`);
    } catch(error) {
        // Errou? Aqui está o erro
        console.log("Deu erro aqui:", error);
    }
}

// Função para inserir dados na coleção postagens
async function inserirpostagens() {
    try {
        let conexao = await conectar();

        var dados = [
            {id: 1, desc: "Exemplo1", fkcategoria: 1, fkusuario: 1, curtidas: 90},
            {id: 2, desc: "Exemplo2", fkcategoria: 1, fkusuario: 2, curtidas: 100},
            {id: 3, desc: "Exemplo3", fkcategoria: 1, fkusuario: 2, curtidas: 120},
            {id: 4, desc: "Exemplo4", fkcategoria: 1, fkusuario: 2, curtidas: 70}
        ];
        const colecao = conexao.collection("postagens");
        const resultado = await colecao.insertMany(dados);

        console.log(`${resultado.insertedCount} registros inseridos na coleção "Postagens"`);
    } catch(error) {
        //  Errou? Aqui está o erro
        console.log("Deu erro aqui:", error);
    }
}

// Função para inserir dados na coleção comentarios
async function inserircomentarios() {
    try {
        let conexao = await conectar();

        var dados = [
            {id: 1, texto: "Exemplo1Comentario", fkpostagem: 1, fkusuario: 1},
            {id: 2, texto: "Exemplo2Comentario", fkpostagem: 1, fkusuario: 2},
            {id: 3, texto: "Exemplo3Comentario", fkpostagem: 2, fkusuario: 2},
            {id: 4, texto: "Exemplo4Comentario", fkpostagem: 2, fkusuario: 2}
        ];
        const colecao = conexao.collection("comentarios");
        const resultado = await colecao.insertMany(dados);

        console.log(`${resultado.insertedCount} registros inseridos na coleção "Comentarios"`);
    } catch(error) {
        //  Errou? Aqui está o erro
        console.log("Deu erro aqui:", error);
    }
}

// apenas executa as funções para inserir dados em diferentes coleções
inserirusuarios();
inserircategorias();
inserirpostagens();
inserircomentarios();
