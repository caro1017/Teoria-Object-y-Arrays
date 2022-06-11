// como hacer para destructuring en Objetos anidados

const producto1 = {
    nombre: "Monitor 21 pulgadas",
    precio: 130,
    disponible: true,
    medidas: {
        peso: "1kg",
        largo: "50cm",
        alto: "25cm",
        profundo:"5cm"
    }
    
}

const {nombre,precio,disponible, medidas:{ peso,largo,alto,profundo }} = producto1;

console.log(peso)

//crear un objeto con nombre apellido edad y hobbies (Otro objeto)
// Descructurar de manera individual cada llave

const persona ={
    nombre: "Carolina",
    apellido: "Uribe Botero",
    edad: 32,
    hobbies:{
        deporte: "Artes Marciales Mixtas",
        Peliculas: " Terror ",
        pasion: "Motos", 
        tranquilidad: "Yogga"
    }
}
