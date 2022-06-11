// existe 2 metodos para blindar objetos.. pero ambos metodos deben tener como primera instruccion:
"use strict"

const producto1 = {
    nombre: "Monitor 21 pulgadas",
    precio: 130,
    disponible: true,    
}

console.log(producto1)

// object method o metodo de objetos
// llamamos primero la palabra reservada object sintaxis de punto el metodo y dentro de parentesis el objeto

Object.freeze (producto1)

//producto1.disponible = false;

console.log(producto1)

// frezeer no permite que hagamos modificaciones a un objeto, tampoco borrar propiedades, ni asignar nuevas
console.log( Object.isFrozen (producto1))