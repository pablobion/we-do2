var Smartphone = require("../models/smartphones.model");
const database = require("../database/connection");

exports.test = function (req, res) {
    res.send("Olá! Teste ao Controller");
};

//Adicionar smartphone à BD
exports.create = function (req, res) {
    let smartphone = new Smartphone({
        nome: req.body.nome,
        marca: req.body.marca,
    });
    smartphone.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send("Registo de Smartphone criado com sucesso | " + smartphone);
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
