require("dotenv-safe").config();

const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database/connection");

//rotas
const smartphones = require("./routes/wedos"); // Importa rota
const login = require("./routes/login");
const logout = require("./routes/logout");
const user = require("./routes/user");

//middleware
const verifyJWT = require("./middleware/verifyJWT");

const app = express();
const PORT = 8000;
const HOST = "0.0.0.0";
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/smartphone", verifyJWT, smartphones);
app.use("/user", user);
app.use("/login", login);
app.use("/logout", logout);

//database
database.connectDabatase();

//Servidor
app.listen(PORT, HOST, () => {
    console.log("server online " + PORT);
});
