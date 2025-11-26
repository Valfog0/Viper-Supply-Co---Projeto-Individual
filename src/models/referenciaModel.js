

var database = require("../database/config");

function listarCargos() {
    var instrucaoSql = `SELECT id_cargo AS id, nome_cargo AS nome FROM cargos;`; 
    return database.executar(instrucaoSql);
}

function listarRegioes() {
    var instrucaoSql = `SELECT id_regiao AS id, nome_regiao AS nome FROM regioes;`;
    return database.executar(instrucaoSql);
}

function listarTopicos() {
    var instrucaoSql = `SELECT id_topico AS id, nome_topico AS nome FROM topicos_interesse;`;
    return database.executar(instrucaoSql);
}

module.exports = {
    listarCargos,
    listarRegioes,
    listarTopicos
};