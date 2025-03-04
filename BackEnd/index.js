//import express from "express"
const express = require("express");//IMPORTAMOS EXPRESS
const cors = require("cors"); //IMPORTAMOS CORS
const PORT = 3000; //PUERTO PARA NUESTRO SERVIDOR

// DECLARAMOS NUESTRA INSTANCIA DE EXPRESS
const app = express();

// CORRIENDO EL SERVIDOR
app.listen(PORT, () => {
  console.log("Server is running on port ${port}");
  console.log("Server ir running in http://localhost:"+PORT);
});