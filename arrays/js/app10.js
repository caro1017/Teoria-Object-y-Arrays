// el map. () soluciona el problema de guardado forEch, mapme permite guardar un nuevo array y forEach No

const carrito = [
    {nombre: "Monitor de Pulgadas", precio:130},
    {nombre: "Tablet 8 Pulgadas", precio:200},
    {nombre: "Teclado Wireless", precio:30},
    {nombre: "Audifonos", precio:100},
    {nombre: "Mause", precio:20},
    {nombre: "Smartphone", precio:20},
]

const nuevoCarrito = carrito.map(function (producto){
    return `Articulo: ${producto.nombre} precio:${producto.precio}`
})

/*const nuevoCarrito2 = carrito.forEach(function (producto){
    return `Articulo: ${producto.nombre} precio:${producto.precio}`
})*/

console.log(nuevoCarrito)
/*console.log(nuevoCarrito2)*/ // Esta funcion no se reproduce ni se guarda en ninguna parte

//