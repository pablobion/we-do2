var Smartphone = require("../models/boards");
const database = require("../database/connection");

//Adicionar smartphone à BD
exports.create = function (req, res) {
    let smartphone = new Smartphone({
        nome: req.body.nome,
        categoria: req.body.categoria,
        description: req.body.description,
    });

    smartphone.save(function (err, next) {
        if (err) {
            return res.send(err);
        }
        res.send("Registo de Smartphone criado com sucesso | " + JSON.stringify(smartphone));
    });
};

exports.details = function (req, res) {
    Smartphone.findById(req.params.id, function (err, product) {
        if (err) res.send(err);
        res.send(product);
    });
};

exports.delete = function (req, res) {
    Smartphone.findById(req.params.id, (err, product) => {
        if (!product) {
            res.send("achamos nada nam");
        } else {
            Smartphone.deleteMany({ _id: req.params.id }, function (err) {
                if (err) console.log(err);
                res.send("Successful deletion");
            });
        }
    });
};
