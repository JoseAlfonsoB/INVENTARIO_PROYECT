// Imporación del ProductoService
const { ProductosService } = require("../Service/productosService");

class ProductoController{
    // Funciones para los endpoints
    static getAll(req, res){
        // Con res.json estamos devolviendo la respuesta al ususario
        return res.json(ProductosService.getAll());
    }

    static getOneById(req, res){
        const {id} = req.params; // LO ENVIAMOS POR LOS PARAMETRO (URL)
        return res.json(ProductosService.getOneById(id));
    }

    static create(req, res){
        const {nombre,precio, stock} = req.body;
        return res.json(ProductosService.create(nombre, precio, stock));
    }

    //TODO: Colocar el controller de update y de delete
    
}

module.exports = { ProductoController } // Exportamos la clase ProductoController