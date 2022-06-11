// Una variable creada con CONST una vez definida no se le puede cambiar el valor 

/*const producto = "Monitor";
pruducto= "Tablet";
console.log(producto)*/

// En el caso de los objetos es un comportamiento diferente

const producto1 = {
    nombre: "Monitor 21 pulgadas",
    precio: 130,
    disponible: true,// Esta ultima coma no es obligatoria pero es una buena practica
    
}

console.log(producto1)

producto1.disponible= false;
producto1.precio = 200;
