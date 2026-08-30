/*
Ejercicio 4: Generador de Lista de Productos
Sprint 2 - Semana 1
*/

let cantidadProductos = parseInt(prompt("¿Cuantos productos desea agregar a la lista?"));
for (let i = 1; i <= cantidadProductos; i++) {
    console.log(`Producto #${i} agregado`);
}

console.log(`Se han agregado ${cantidadProductos} productos a la lista.`);
