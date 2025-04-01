// Datos de ejemplo de productos
const productos = [
    { id: 1, nombre: "Jugo de Naranja", precio: 5.0 },
    { id: 2, nombre: "Batido de Fresa", precio: 7.5 },
    { id: 3, nombre: "Jugo Verde", precio: 6.0 },
];

// Cargar productos en la página
function cargarProductos() {
    const listaProductos = document.getElementById("lista-productos");
    productos.forEach((producto) => {
        const productoElemento = document.createElement("div");
        productoElemento.className = "border rounded p-4";
        productoElemento.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>`;
        listaProductos.appendChild(productoElemento);
    });
}

// Iniciar sesión (simulado)
document
    .getElementById("formulario-login")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;
        if (usuario === "admin" && contrasena === "admin") {
            alert("Inicio de sesión exitoso");
            document.getElementById("crud-productos").classList.remove("hidden");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });

// CRUD de productos (simulado)
const listaCrudProductos = document.getElementById("lista-crud-productos");
productos.forEach((producto) => {
    const productoElemento = document.createElement("li");
    productoElemento.textContent = `${producto.nombre} - $${producto.precio}`;
    listaCrudProductos.appendChild(productoElemento);
});

document
    .getElementById("formulario-producto")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre-producto").value;
        const precio = document.getElementById("precio-producto").value;
        productos.push({
            id: productos.length + 1,
            nombre,
            precio: parseFloat(precio),
        });
        cargarProductos(); // Recargar la lista de productos
    });

cargarProductos();
