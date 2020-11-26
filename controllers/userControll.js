const Users = require("../models/users");

exports.create = function (req, res) {
    let user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    user.save(function (err, next) {
        if (err) {
            return res.send(err);
        }
        res.send("Usuário criado.");
    });
};
