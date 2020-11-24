const express = require("express");
const router = express.Router();

// Colocar controller que ainda não foi criado
const wedos_controller = require("../controllers/wedos");

router.post("/create", wedos_controller.create);

router.get("/:id", wedos_controller.details);

router.delete("/delete/:id", wedos_controller.delete);

module.exports = router;
