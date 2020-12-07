require("dotenv-safe").config();

const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database/connection");

//rotas
const boardRoute = require("./routes/boardRoute"); // Importa rota
const user = require("./routes/user");

//middleware
const verifyJWT = require("./middleware/verifyJWT");

const app = express();
const PORT = 8000;
const HOST = "0.0.0.0";

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/board", verifyJWT, boardRoute);
app.use("/user", user);

//database
database.connectDabatase();

//Servidor
app.listen(PORT, HOST, () => {
    console.log("server online " + PORT);
});
