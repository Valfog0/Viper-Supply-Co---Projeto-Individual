

var express = require("express");
var router = express.Router();

var referenciaController = require("../controllers/referenciaController");

// endpoint GET /referencias/cargos
router.get("/cargos", function (req, res) {
    referenciaController.listarCargos(req, res);
});

// endpoint GET /referencias/regioes
router.get("/regioes", function (req, res) {
    referenciaController.listarRegioes(req, res);
});

// endpoint GET /referencias/topicos
router.get("/topicos", function (req, res) {
    referenciaController.listarTopicos(req, res);
});

module.exports = router;