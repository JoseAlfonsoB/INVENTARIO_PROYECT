const { productos } = require("../DataBase/DB"/** O pudes ser DB.jx */);

class productosService {

    //FUNCIONES DE PRODUCTOS
    getAll(){
        return productos;
    }

    getOne(id){
        return producto = productos.filter((/** pt */producto) => producto.id === id);
        return producto;
    }

    create (nombre, precio, stock){
        const nuevoProducto = {
            /** ES LO MISMO PARA LA CREACIÓN DE UN PRODUCTO
            nombre: nombre,
            precio: precio,
            stock: stock*/
            nombre, precio, stock
        };
        pruductos.push(nuevoProducto); // NOS PERMITE AGREGAR UN NUEVO ARREGLO
        return nuevoProducto;
    }

    update(object){
        //TODO: usar el ID para ubicar el producto a cambiar 
        //objetio -> para obtener los datros a cambiar (stock:991)
        const productoActualizado = [];

        return productoActual;
    }

    delete(id){
        // TODO: usar el ID para ubicar el producto a eliminar
        const productoEliminado = [];

        return productoEliminado;
    }
}

module.exports = {ProductosService: new productosService()}; // Exportamos la clase productosService