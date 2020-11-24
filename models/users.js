const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

let UserSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    email: { type: String, required: true, unique: true, min: 5 },
    password: { type: String, required: true, unique: true, min: 5 },
    createdAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function (next) {
    let user = this;

    if (!user.isModified("password")) return next();

    user.password = await bcrypt.hash(user.password, 10);

    user.email = await user.email.toLowerCase();

    return next();
});

// Exportar o modelo
module.exports = mongoose.model("boards", SmartphoneSchema);
