const express = require("express");
const router = express.Router();

// Colocar controller que ainda não foi criado
const boardControll = require("../controllers/boardControll");

router.post("/create", boardControll.create);

router.get("/:id", boardControll.details);

router.delete("/delete/:id", boardControll.delete);

module.exports = router;
