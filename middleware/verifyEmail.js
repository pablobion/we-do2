const jwt = require("jsonwebtoken");
const User = require("../models/users");

const verifyEmail = async (req, res, next) => {
    const { email } = req.body;

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(String(email).toLowerCase()) === false) return res.status(406).json({ message: "O e-mail precisa ser valido" });
    if (!email) return res.status(406).json({ message: "Você precisa informar o e-mail" });

    const user = await User.findOne({ email });
    if (user) {
        res.status(401).json({ message: "Já existe um e-mail cadastrado" });
    } else {
        return next();
    }
};

module.exports = verifyEmail;
