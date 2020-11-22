const express = require("express");
const router = express.Router();

// Colocar controller que ainda não foi criado
const smartphones_controller = require("../controllers/smartphones.controller");

// teste simples
router.get("/testar", smartphones_controller.test);

router.post("/create", smartphones_controller.create);

router.get("/:id", smartphones_controller.details);

router.delete("/delete/:id", smartphones_controller.delete);

module.exports = router;
