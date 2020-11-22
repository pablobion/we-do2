const express = require("express");
const bodyParser = require("body-parser");

//Acesso à BD
const database = require("./database/connection");

const smartphones = require("./routes/smartphones.route"); // Importa rota

const PORT = 8000;
const HOST = "0.0.0.0";

const app = express();

app.use("/smartphones", smartphones);

database.connectDabatase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", smartphones);

//Servidor
app.listen(PORT, HOST, () => {
    console.log("server online " + PORT);
});
