const Boards = require("../models/boards");

//Adicionar smartphone à BD
exports.create = function (req, res) {
    let boards = new Boards({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
    });

    boards.save(function (err, next) {
        if (err) {
            return res.send(err);
        }
        res.send("Registo de Smartphone criado com sucesso | " + JSON.stringify(boards));
    });
};

exports.details = function (req, res) {
    Boards.findById(req.params.id, function (err, product) {
        if (err) res.send(err);
        res.send(product);
    });
};

exports.delete = function (req, res) {
    Boards.findById(req.params.id, (err, product) => {
        if (!product) {
            res.send("achamos nada nam");
        } else {
            Boards.deleteMany({ _id: req.params.id }, function (err) {
                if (err) console.log(err);
                res.send("Successful deletion");
            });
        }
    });
};
