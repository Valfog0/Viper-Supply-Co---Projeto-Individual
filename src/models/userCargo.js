
var database = require("../database/config");

function buscarUsuariosPorCargo(idCargo) {
    var instrucaoSql = `SELECT * FROM usuarios WHERE id_cargo = ${idCargo};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUsuariosPorCargo
}
