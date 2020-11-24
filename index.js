require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database/connection");

//rotas
const smartphones = require("./routes/wedos"); // Importa rota
const login = require("./routes/login");
const logout = require("./routes/logout");

const app = express();
const PORT = 8000;
const HOST = "0.0.0.0";
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(401).json({ auth: false, message: "No token provided." });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: "Failed to authenticate token." });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

app.use("/smartphone", verifyJWT, smartphones);
app.use("/login", login);
app.use("/logout", logout);

//database
database.connectDabatase();

//Servidor
app.listen(PORT, HOST, () => {
    console.log("server online " + PORT);
});
