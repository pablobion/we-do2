const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SmartphoneSchema = new Schema({
    nome: { type: String, required: true, max: 100 },
    categoria: { type: String },
    description: { type: String },
    integrantes: [],
    wedos: [],
    date: { type: Date, default: Date.now },
    author: { type: String },
});
// Exportar o modelo
module.exports = mongoose.model("boards", SmartphoneSchema);
