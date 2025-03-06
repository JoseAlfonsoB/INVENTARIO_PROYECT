const { ProductoController } = require("../Controller/productos.controller");
const router = require('express').Router(); // EXPORTAMOS EXPRESS Y SU MÉTODO ROUTER

// CREAMOS NUESTRAS RUTAS
router.get("/", ProductoController.getAll);
router.get("/:id", ProductoController.getOneById);
router.post("/", ProductoController.create);

module.exports = router; // EXPORTAMOS EL ROUTER
