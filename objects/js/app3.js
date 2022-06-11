// veamos como asignar variables a las propiedades de un objeto

const producto1 = {
    nombre: "Monitor 21 pulgadas",
    precio: 130,
    disponible: true,    
}

//const nombre = producto1.nombre;
// Esta es la forma mas intuitiva, pero es la menos optima

//Existe una forma moderna que llego con ES6 que se llama Object Destructuring, al principio puede ser compleja, pero despues se vuleve mas natural ( cuando se practica)

const { nombre,precio,disponible } = producto1


console.log(nombre)
console.log(precio)
console.log(disponible)
