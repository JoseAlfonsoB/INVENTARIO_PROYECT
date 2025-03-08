const productos = [
    {
        id: 1,
        nombre: "Producto 1", 
        precio: 100,
        stock: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200,
        stock: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300,
        stock: 300
    },
];

/** FORMA EXPLICITA
module.exports = {
    productos: productos
} */

// FORMA IMPLICITA
module.exports = {productos}
