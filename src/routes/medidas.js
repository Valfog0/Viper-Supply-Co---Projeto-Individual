// src/routes/dadosAgencia.js (Sugestão de nome)

var express = require("express");
var router = express.Router();

// 1. O Controller deve ser renomeado para algo relevante (ex: DadosController)
var dadosController = require("../controllers/dadosController"); // <-- Nome adaptado

// Rota para buscar os dados de status mais recentes de um usuário/agência
router.get("/ultimas/:idUsuario", function (req, res) { // <-- Parâmetro mudado para ID de Usuário
    dadosController.buscarUltimosDados(req, res);
});

// Rota para buscar dados em tempo real (se houver monitoramento contínuo)
router.get("/tempo-real/:idAgencia", function (req, res) { // <-- Parâmetro mudado para ID de Agência
    dadosController.buscarDadosEmTempoReal(req, res);
})

module.exports = router;