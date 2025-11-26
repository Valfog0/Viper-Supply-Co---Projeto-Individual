

var dashboardModel = require("../models/dashboardModel");

function buscarProporcoes(req, res) {
    dashboardModel.buscarProporcoesInteresses()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                // array vazio se estiver sem dados
                res.status(204).json([]);
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarProporcoes
};