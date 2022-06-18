// veamos commo correr un array

// vemaos como lo hariamos en un lenguaje tradicional (incluso en JS)

const carrito = [
    {nombre: "Monitor de Pulgadas", precio:130},
    {nombre: "Tablet 8 Pulgadas", precio:200},
    {nombre: "Teclado Wireless", precio:30},
    {nombre: "Audifonos", precio:100},
    {nombre: "Mause", precio:20},
    {nombre: "Smartphone", precio:20},
]

//recorrer forma tradicional
for (let i=0;i<carrito.length;i++){
    console.log(`Articulo: ${carrito[i].nombre} precio: ${carrito[i].precio}`)
}

//como lo hariamos  con forEach()
carrito.forEach(function(producto){
    console.log(`El Articulo ${producto.nombre} tiene un precio de ${producto.precio}`)
})