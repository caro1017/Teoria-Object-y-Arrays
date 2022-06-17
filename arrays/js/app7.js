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

//vemos ahora como borrar elementos 

carrito.push(producto1)
carrito.push(producto2)
carrito.push(producto3)

//para borrar el primer elemento de un array .shift()
//carrito.shift();

// como borramos el ultimo elemento
carrito.pop();

//como usar .splice() borrar un elemento en otra posision 
//carrito.splice(1,0)
//carrito.splice(1,2)

console.log(carrito)