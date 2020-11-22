const mongoose = require("mongoose");
const password = process.env.PASSWORD;

const connectDabatase = () => {
    const url = `mongodb://admin:a12345678@cluster0-shard-00-00.pmfzf.mongodb.net:27017,cluster0-shard-00-01.pmfzf.mongodb.net:27017,cluster0-shard-00-02.pmfzf.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-942u82-shard-0&authSource=admin&retryWrites=true&w=majority`;

    const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, useNewUrlParser: true };

    mongoose.connect(url, options);

    mongoose.set("useCreateIndex", true);

    mongoose.connection.on("error", (err) => {
        if (err) console.log("Erro na conexão com o banco");
    });

    mongoose.connection.on("connected", (err) => {
        if (err) console.log(err);
        console.log("Sucesso na conexão com o banco");
    });

    mongoose.connection.on("disconnected", (err) => {
        if (err) console.log(err);
        console.log("Perda de conexão com o banco");
    });
};

exports.connectDabatase = connectDabatase; // usando module.exports não funciona para este caso
