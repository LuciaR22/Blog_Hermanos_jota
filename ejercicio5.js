/*
Ejercicio 5: Función Reutilizable para Calcular DescuentoSprint 2 - Semana 1
*/

function aplicarDescuento(precio, porcentajeDescuento) {
    let montoDescuento = (precio * porcentajeDescuento) / 100;
    let precioFinal = precio - montoDescuento;
    return precioFinal;
}

// rprecios de prueba
let precioMesa = 15000;
let precioSofa = 50000;

// calculo de descuento
let precioFinalMesa = aplicarDescuento(precioMesa, 10);
let precioFinalSofa = aplicarDescuento(precioSofa, 25);

// log en consola con los precios ordenados con descuento.
console.log(`Precio original de la mesa: $${precioMesa}. Descuento: 10%. Precio final: $${precioFinalMesa}`);
console.log(`Precio original del sofá: $${precioSofa}. Descuento: 25%. Precio final: $${precioFinalSofa}`);
