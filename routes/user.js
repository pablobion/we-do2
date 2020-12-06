const express = require("express");
const router = express.Router();

const userControll = require("../controllers/userControll");

//middleware
const verifyEmail = require("../middleware/verifyEmail");

//model
const User = require("../models/users");

router.post("/create", verifyEmail, userControll.create);
router.delete("/delete", userControll.delete);
router.post("/login", userControll.login);

module.exports = router;
