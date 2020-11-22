const express = require("express");
const bodyParser = require("body-parser");
const smartphones = require("./routes/smartphones.route"); // Importa rota
const database = require("./database/connection");
const app = express();
const PORT = 8000;
const HOST = "0.0.0.0";

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", smartphones);

//database
database.connectDabatase();

//Servidor
app.listen(PORT, HOST, () => {
    console.log("server online " + PORT);
});
