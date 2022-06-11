// Los objetos son una de las 2 piezas clave en JS
// Sirven para unir informacion de diferente tipo pero que tienen algo en comun 
// Ejemplos

const nombreProducto = "Monitor de 21 Pulgadas";
const precio = 130;
const disponible= true;

// Podemos remplazar las variables, creando un objeto para toda esta informacion
// Siempre que se crea un objeto debe ir en {}
/*const producto1 = {
    //Esto es lo que se conoce como OBJECT LITERAL

}

// Luegp podemos poner conjuntos de llave {}:valor (Key:Value)

const producto1 = {
    nombre://Esto se le llama llave (Key) de objeto
}

// Pero las llaven deben tener un valor 

const producto1 ={
    nombre= "Monitor de 21 pulgadas"// si lo notan dentro de los objetos los valores se asignan con : no con =
    
}*/

// si desean agregar mas propiedades, solamente deben colocar comas para separar
const producto1 = {
    nombre: "Monitor 21 pulgadas",
    precio: 130,
    disponible: true,// Esta ultima coma no es obligatoria pero es una buena practica
    
}
console.log(producto1)