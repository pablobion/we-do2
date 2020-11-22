const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SmartphoneSchema = new Schema({
    nome: { type: String, required: true, max: 100 },
    marca: { type: Number, required: true },
    description: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    author: String,
});
// Exportar o modelo
module.exports = mongoose.model("Smartphone", SmartphoneSchema);
