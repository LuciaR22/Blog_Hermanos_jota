const precioBaseSilla = 4500.50;
const iva = 0.21;

let valorIva = precioBaseSilla * iva;
let precioFinal = precioBaseSilla + valorIva;

console.log("Precio Base de la Silla: $" + precioBaseSilla);
console.log("IVA: $" + valorIva);
console.log("Precio Final: $" + precioFinal);
