var referenciaModel = require("../models/referenciaModel");
function listarCargos(req, res) {
    referenciaModel.listarCargos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum cargo encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao listar os cargos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarRegioes(req, res) {
    referenciaModel.listarRegioes()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma região encontrada!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao listar as regiões: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarTopicos(req, res) {
    referenciaModel.listarTopicos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum tópico encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao listar os tópicos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarCargos,
    listarRegioes,
    listarTopicos
};