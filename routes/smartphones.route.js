const express = require("express");
const router = express.Router();

// Colocar controller que ainda não foi criado
const smartphones_controller = require("../controllers/smartphones.controller");

// teste simples
router.get("/testar", smartphones_controller.test);

router.post("/create", smartphones_controller.create);

module.exports = router;
