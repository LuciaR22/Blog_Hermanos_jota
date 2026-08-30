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

function simulacionCarrito() {
    let totalCompra = 0;

    while (confirm("¿Desea agregar un producto al carrito?")) {
        totalCompra += agregarProducto();
    }

    alert("El total de su compra es: $" + totalCompra);
}

function agregarProducto() {
    while (true) {
        const raw = prompt("Ingrese el valor del producto:");
        if (raw === null) {
            alert("La compra del producto ha sido cancelada.");
            return 0;
        }

        const parsed = parseFloat(raw.trim().replace(",", "."));
        if (Number.isFinite(parsed) && parsed > 0) return parsed;

        alert("Por favor ingrese un número válido para continuar.");
    }
}
