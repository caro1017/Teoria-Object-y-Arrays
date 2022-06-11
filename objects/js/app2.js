const producto1 = {
    nombre: "Monitor 21 pulgadas",
    precio: 130,
    disponible: true,    
}

// Supongamos que quiero acceder al precio
// Para esto usamos sintaxis de punto

console.log(producto1.precio)
console.log(producto1.nombre)
console.log(producto1.disponible)

// Esxiste otra no tan comun... pero que en elagun momento lo vana  necesitar

console.log(producto1["precio"])

 // añadir propiedades a un objeto... tambien utilizamos la sintaxis de puento
producto1. imagen = "imagen.jpg"

console.log (producto1)

// Finalemnete si queremos eliminar propiedades 

delete producto1.disponible;

console.log (producto1)


