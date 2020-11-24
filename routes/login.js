const express = require("express");
const router = express.Router();
require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

router.post("/", (req, res, next) => {
    if (req.body.user === "pablo" && req.body.password === "123") {
        const id = 1; //esse id viria do banco de dados
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 3600, // expires in 1 hour
        });
        return res.json({ auth: true, token: token });
    }

    res.status(500).json({ message: "Login inválido!" });
});

module.exports = router;
