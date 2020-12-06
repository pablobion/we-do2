const Users = require("../models/users");

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

exports.delete = (req, res) => {
    const userDelete = {
        email: req.body.email,
        password: req.body.password,
    };

    //fazendo
};
