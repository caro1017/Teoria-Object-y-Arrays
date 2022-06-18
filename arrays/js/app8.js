//los arrays tambien tienen destructuring, no es comun usarlo

const edades = [44,11,36,32,25];

const [Diego, Sofia, Aide,Mario,Laura] = edades;

console.log(Diego)
console.log(Sofia)
console.log(Aide)
console.log(Mario)
console.log(Laura)

// Podemos utilizarlo para sacar valores muy especificos y dejar el resto quieto

const [Maria, Juan,...otroArray] = edades;
console.log(Maria)
console.log(Juan)
console.log(otroArray)

