const { response } = require("express");
const Users = require("../models/users");

require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

exports.create = function (req, res, next) {
    let user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    user.save(function (err, next) {
        if (err) {
            return res.send(err);
        }
        return res.status(200).json({ message: "Usuario criado com sucesso" });
    });
};

exports.delete = async (req, res) => {
    const email = req.jwtEmail;

    const user = await Users.findOne({ email });
    if (!user) return res.status(401).json({ message: "Não existe ou o e-mail está incorreto." });

    await Users.deleteMany({ email });

    try {
        res.status(200).json({ message: "Usuario deletado" });
    } catch (err) {
        response.status(401).json({ message: err });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (!user) return res.status(401).json({ message: "E-mail ou senha incorreta" });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET, {
        expiresIn: 86400,
    });

    const isPasswordRight = await bcrypt.compare(password, user.password);

    if (isPasswordRight && user) {
        res.status(200).json({ success: true, token });
    } else {
        res.status(401).json({ message: "E-mail ou senha incorreta." });
    }
};
