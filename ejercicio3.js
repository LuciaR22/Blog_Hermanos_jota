/* Objetivo: Practicar el uso del bucle while y la función confirm para crear un flujo interactivo.

Tareas:

    En un nuevo archivo ejercicio3.js, inicializa una variable totalCompra en 0.
    Iniciá un bucle while que se ejecute mientras el usuario quiera seguir comprando.
    Dentro del bucle, usa confirm('¿Desea agregar un producto al carrito?'). La respuesta (true o false) determinará si el bucle continúa.
    Si el usuario hace clic en "Aceptar" (true):

    Usá prompt('Ingrese el valor del producto:').
    Importante: Convertí el valor ingresado (que es un string) a un número usando parseFloat().
    Verificá si el valor ingresado es un número válido. Si lo es, súmalo a totalCompra.

       5. Cuando el usuario haga clic en "Cancelar" (false), el bucle terminará.

       6. Fuera del bucle, muestra un alert() con el total de la compra. Por ejemplo: El total de su compra es: $[valor_total]. */

let totalCompra = 0;
let seguirComprando = true;

while (seguirComprando) {
    seguirComprando = confirm("¿Desea agregar un producto al carrito?");
    if (seguirComprando) {
        let valorProducto = parseFloat(prompt("Ingrese el valor del producto:"));
        if (!isNaN(valorProducto) && valorProducto > 0) {
            totalCompra += valorProducto;
        }
    }
}

alert("El total de su compra es: $" + totalCompra);
