//import express from "express"
const express = require("express");//IMPORTAMOS EXPRESS
const cors = require("cors"); //IMPORTAMOS CORS
const PORT = 3000; //PUERTO PARA NUESTRO SERVIDOR

// DECLARAMOS NUESTRA INSTANCIA DE EXPRESS
const app = express();

// Middleware
app.use(express.json()); // INTERPRETE DE JSON
// app.use("/una_ruta",express.json()) SOLO SE VA EJECUTAR EN ESA RUTA
app.use(cors()) // PERMITE O NIEGA EL ACCESO A LAS IPs

// MÉTODO GET
app.get("/", (req, res)/** PARA LA FUNCIÓN DE FLECHA: Lo que requiero y lo que devuelvo */ => {
    //res.send("<h1>Hola desde Express</h1>"); PARA MANDAR TEXTO PLANO.
    res.json (
        {
            mensaje:"Hola desde Express"
        }
    );
}/** EL MÉTODO GET LLEVA DOS COSAS: la ruta y una función que se manda a llamar. */);

app.get("/:nombre", (req, res) => {
    /** DOS MANERAS DE EXTRAER EL NOMBRE: solo que el segundo es mejor. */
    //const nombre = req.params.nombre;
    const {nombre} = req.params;
    res.json(
        {
            mensaje:"Hola usando una URL personal de: "+nombre
        }
    );
});

// CORRIENDO EL SERVIDOR
app.listen(PORT, () => {
  console.log("Server is running on port ${port}");
  console.log("Server ir running in http://localhost:"+PORT);
});