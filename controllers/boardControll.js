const Boards = require("../models/boards");
const Users = require("../models/users");

//Adicionar smartphone à BD
exports.create = function (req, res) {
    let boards = new Boards({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        author: req.jwtEmail,
        members: [...req.body.members, req.jwtEmail],
    });

    boards.save(function (err, next) {
        if (err) {
            return res.send(err);
        }
        res.status(200).json({ success: true, message: "Registro criado com sucesso", boards });
    });
};

exports.details = async (req, res) => {
    try {
        const board = await Boards.findById({ _id: req.params.id });

        if (board.members.find((elem) => elem === req.jwtEmail)) {
            res.status(200).json({ success: true, board });
        } else {
            res.status(401).json({ success: false, message: "Esse board não pertence a você" });
        }
    } catch (err) {
        res.status(400).json({ success: false, message: "Não existe esse id" });
    }
};

exports.delete = async (req, res) => {
    try {
        const board = await Boards.findById({ _id: req.params.id });

        if (board.author === req.jwtEmail) {
            Boards.deleteMany({ _id: req.params.id }, function (err) {
                if (err) console.log(err);
                res.status(200).json({ success: true, message: "Successful deletion" });
            });
        } else {
            res.status(401).json({ success: false, message: "O board não pertence a você" });
        }
    } catch {
        res.status(400).json({ success: false, message: "Não existe esse id" });
    }
};
