const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BoardSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    category: { type: String },
    description: { type: String },
    members: [],
    wedos: [],
    data: { type: Date, default: Date.now },
    author: { type: String },
});
// Exportar o modelo
module.exports = mongoose.model("boards", BoardSchema);
