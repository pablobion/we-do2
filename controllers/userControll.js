const { response } = require("express");
const Users = require("../models/users");

require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

exports.create = function (req, res, next) {
    // Users.find({ email: req.body.email }, function (err, docs) {
    //     return res.status(401).json({ message: "Já temos esse e-mail cadastrado" });
    // });

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
    const { email } = req.body;

    const user = await Users.deleteMany({ email });

    if (user) {
        res.status(200).json({ message: "Usuario deletado" });
    } else {
        response.json({ message: "n ahamos" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 86400,
    });

    const isPasswordRight = await bcrypt.compare(password, user.password);

    if (isPasswordRight && user) {
        res.status(200).json({ success: true, token });
    } else {
        res.status(401).json({ message: "E-mail ou senha incorreta." });
    }
};
