// como unir 2 objetos

const producto1 = {
    nombre: "Monitor 21 pulgadas",
    precio: 130,
    disponible: true,    
}

const medidas = {
    peso: "1kg",
    largo: "40cm",
}

// la forma antigua se unir objetos es un Object Method 

const resultado = Object.assign (producto1,medidas)
console.log(producto1)
console.log(medidas)
console.log(resultado)

// Ojo asign modifica el primer objeto