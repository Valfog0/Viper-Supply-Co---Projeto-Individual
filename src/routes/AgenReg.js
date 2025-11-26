var express = require("express");
var router = express.Router();

var agenciaController = require("../controllers/agenciaController"); 

// rota listagem de agencias 
// endpoint GET /agencias/listar
router.get("/listar", function (req, res) {
    agenciaController.listarAgencias(req, res);
});


// endpoint GET /agencias/listarRegioes
router.get("/listarRegioes", function (req, res) {
    agenciaController.listarRegioes(req, res);
});


// endpoint GET /agencias/buscar/5
router.get("/buscar/:idAgencia", function (req, res) {
    agenciaController.buscarPorId(req, res);
});

module.exports = router;