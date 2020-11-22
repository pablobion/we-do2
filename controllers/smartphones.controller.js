var Smartphone = require("../models/smartphones.model");

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
        res.send("Registo de Smartphone criado com sucesso");
    });
};
