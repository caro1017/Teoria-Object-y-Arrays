" use strict"

// Existe otro modo similar a freeze, que se llama seal
// a diferencia de freeze, que no permite agregar, modificar

const producto1 = {
    nombre: "Monitor 21 pulgadas",
    precio: 130,
    disponible: true,    
}

Object.seal (producto1);

// seal permite reasignar

producto1.nombre = "Tablet"

console.log(producto1)

// pero no permite borrar ni agregar nuevas propiedades

console.log(Object. isSealed (prducto1))