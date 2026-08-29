const catalogoMuebles = [
    {
        id: 1,
        nombre: "Sofá Patagonia",
        precio: 125000,
        imagenURL: "https://placehold.co/150/png?text=Sofa"
    },
    {
        id: 2,
        nombre: "Mesa Comedor Pampa",
        precio: 89000,
        imagenURL: "https://placehold.co/150/png?text=Mesa"
    },
    {
        id: 3,
        nombre: "Sillón Copacabana",
        precio: 67500,
        imagenURL: "https://placehold.co/150/png?text=Sillon"
    }
];

const productContainer = document.getElementById("product-container");

catalogoMuebles.forEach(function (producto) {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const nombreProducto = document.createElement("h3");
    nombreProducto.textContent = producto.nombre;

    const precioProducto = document.createElement("p");
    precioProducto.textContent = "$" + producto.precio;

    const imagenProducto = document.createElement("img");
    imagenProducto.src = producto.imagenURL;
    imagenProducto.alt = producto.nombre;

    productCard.appendChild(imagenProducto);
    productCard.appendChild(nombreProducto);
    productCard.appendChild(precioProducto);

    productContainer.appendChild(productCard);
});
