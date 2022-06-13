const express = require("express");
const mongoose = require("mongoose");
const members = require("./Controller/memberController");
//Acceso a las variables de entorno
require("dotenv").config();

//Cadena de conexión a la base de datos
const conn = process.env.DATABASE_URL;
const port =8000;
//Conexión a la base de datos
mongoose.connect(conn);
const database = mongoose.connection;
//Verificar la conexión con la base de datos
database.on("error", (error)=>{
    console.log(error);
});
database.once("connected", ()=>{
    console.log("succesfully connected");
});

const app = express();
app.use(express.json());
app.use("/members", members);

app.listen(port,() => {
    console.log("server running at http://localhost:"+ port);
});