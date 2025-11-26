// src/routes/dashboard.js

var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

// Rota para buscar os dados brutos de proporção
router.get("/proporcoes", dashboardController.buscarProporcoes);

module.exports = router;