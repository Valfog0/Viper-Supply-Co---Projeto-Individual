var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> function autenticar(): ", email, senha);
    var instrucaoSql = `
        SELECT 
            id_usuario AS idUsuario, 
            nome, 
            email, 
            id_cargo AS cargoId, 
            id_regiao AS regiaoId 
        FROM usuarios 
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL (Autenticação): \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrar(nome, email, senha, fkCargo, fkRegiao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> function cadastrar():", nome, email, senha, fkCargo, fkRegiao);

    var instrucaoSql = `
    INSERT INTO usuarios (nome, email, senha, id_cargo, id_regiao) 
    VALUES ('${nome}', '${email}', '${senha}', ${fkCargo}, ${fkRegiao});
`;

    console.log("Executando a instrução SQL (Cadastro de Usuário): \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarTopicos(idUsuario, idTopico) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> function cadastrarTopicos():", idUsuario, idTopico);


    var instrucaoSql = `
        INSERT INTO usuarios_topicos (id_usuario, id_topico) 
        VALUES (${idUsuario}, ${idTopico});
    `;
    console.log("Executando a instrução SQL (Cadastro de Tópicos): \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    cadastrarTopicos
};