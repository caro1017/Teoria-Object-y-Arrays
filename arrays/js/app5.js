// Supongamos que tenemos una tieneda Oline con varios productos y un carrito de compra

// Supongamos los sigueintes productos

const carrito = [];

const producto1 ={
    nombre: "Monitor",
    precio: 200,
}
const producto2 = {
    nombre: "Tablet 8",
    precio: 100,
}
const producto3 = {
    nombre: "Parlante BT",
    precio: 270,
}

//para añadir al final del Array usan el metodo push

carrito.push (producto1)
carrito.push (producto2)
// para adicionar al principio existe otro metodo llamdo unshift
carrito.unshift(producto3)

console.log(carrito)

