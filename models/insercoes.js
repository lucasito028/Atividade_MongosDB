const conectar = require('./testeparabanco.js');


async function inserirusuarios() {
    
    let conecao = await conectar();

    var dados = [

        {id: 1, usuario: "klepeo"},
        {id: 2, usuario: "JaoPaulo"}

        ];

    try{
        const colecao = conecao.collection("usuario");
        const resultado = await colecao.insertMany(dados);

        console.log(`${resultado.insertedCount} registros inseridos na coleção "Usuario"`);

    }catch(error){

    }

}

async function inserircategorias() {
    
    let conecao = await conectar();

    var dados = [

        {id: 1, usuario: "Normal"},
        {id: 2, usuario: "Popular"}

        ];

    try{
        const colecao = conecao.collection("categoria");
        const resultado = await colecao.insertMany(dados);

        console.log(`${resultado.insertedCount} registros inseridos na coleção "Categoria"`);

    }catch(error){

    }

}


async function inserirpostagens() {
    
    let conecao = await conectar();

    var dados = [

        {id: 1, desc: "Exemplo1", fkcategoria: 1, fkusuario:1, curtidas: 90},
        {id: 2, desc: "Exemplo2", fkcategoria: 1, fkusuario:2, curtidas: 100},
        {id: 3, desc: "Exemplo3", fkcategoria: 1, fkusuario:2, curtidas: 120},
        {id: 4, desc: "Exemplo4", fkcategoria: 1, fkusuario:2, curtidas: 70}

        ];

    try{

        const colecao = conecao.collection("postagens");
        const resultado = await colecao.insertMany(dados);

        console.log(`${resultado.insertedCount} registros inseridos na coleção "Postagens"`);

    }catch(error){

    }

}



async function inserircomentarios() {
    
    let conecao = await conectar();

    var dados = [

        {id: 1, texto: "Exemplo1Comentario", fkpostagem: 1, fkusuario:1},
        {id: 2, texto: "Exemplo2Comentario", fkpostagem: 1, fkusuario:2},
        {id: 3, texto: "Exemplo3Comentario", fkpostagem: 2, fkusuario:2},
        {id: 4, texto: "Exemplo4Comentario", fkpostagem: 2, fkusuario:2}

        ];

    try{

        const colecao = conecao.collection("comentarios");
        const resultado = await colecao.insertMany(dados);

        console.log(`${resultado.insertedCount} registros inseridos na coleção "Comentarios"`);

    }catch(error){

    }

}



inserirusuarios();
inserircategorias();
inserirpostagens();
inserircomentarios();