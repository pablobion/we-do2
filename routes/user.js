const express = require("express");
const router = express.Router();

const userControll = require("../controllers/userControll");

//middleware
const verifyEmail = require("../middleware/verifyEmail");
const verifyJWT = require("../middleware/verifyJWT");

//model
const User = require("../models/users");

router.post("/create", verifyEmail, userControll.create);
router.delete("/delete", verifyJWT, userControll.delete);
router.post("/login", userControll.login);
router.post("/logout", userControll.logout);

module.exports = router;
