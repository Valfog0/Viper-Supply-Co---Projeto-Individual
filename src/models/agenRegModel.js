

var database = require("../database/config");
function listarAgencias() {
    var instrucaoSql = `SELECT idCargo, nome as agenciaNome FROM cargos;`; 
    console.log("Executando a instrução SQL para listar Agências:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarRegioes() {
    var instrucaoSql = `SELECT idRegiao, nome as regiaoNome FROM regioes;`;
    console.log("Executando a instrução SQL para listar Regiões:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarAgencias,
    listarRegioes
};