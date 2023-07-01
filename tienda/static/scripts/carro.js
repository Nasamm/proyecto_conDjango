//carrito
const elementos1 = document.getElementById('productos');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCrritoBtn = document.getElementById('vaciar-carrito');
let carritoBtn = document.getElementById('carrito-btn');
let carrito = document.getElementById('carrito');
let carritoItems = document.getElementById('carrito-items');
let vaciarCarritoBtn = document.getElementById('vaciar-carrito');
let continuarCompraBtn = document.getElementById('continuar-compra');
let totalCarritoElement = document.getElementById('total-carrito');
let precio = document.getElementById('precio')

function showCart() {
    let x = document.getElementById("carrito");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function agregarAlCarrito(nombre, precio, imagenURL) {
    let totalCarrito = parseFloat(totalCarritoElement.dataset.total || 0);
    let item = document.createElement('li');
    let imagen = document.createElement('img');
    imagen.src = imagenURL;
    let nombreElemento = document.createElement('span');
    nombreElemento.textContent = nombre;
    let precioElemento = document.createElement('span');
    precioElemento.textContent = precio;
    
    let botonEliminar = document.createElement('button');
    botonEliminar.innerHTML = '-';
    botonEliminar.addEventListener('click', function() {
      let item = this.parentNode; // Obtener el elemento del carrito (elemento padre del botón)
      item.remove(); // Eliminar el elemento del carrito
      calcularTotalCarrito();
      totalCarrito -= precio;
    });

    item.appendChild(imagen);
    item.appendChild(nombreElemento);
    item.appendChild(precioElemento);
    item.appendChild(botonEliminar)

    carritoItems.appendChild(item);

    totalCarrito += precio;
    totalCarritoElement.textContent = 'Total: $' + totalCarrito.toFixed(2);
    totalCarritoElement.dataset.total = totalCarrito;
}

vaciarCarritoBtn.addEventListener('click', function () {
    carritoItems.innerHTML = '';
    totalCarritoElement.textContent = 'Total: $0.00';
    totalCarritoElement.dataset.total = 0;
});

continuarCompraBtn.addEventListener('click', function () {
    // Lógica para continuar con la compra
});

function calcularTotalCarrito() {
    var itemsCarrito = document.querySelectorAll('#carrito-items li');
    var total = 0;

    itemsCarrito.forEach(function (item) {
        var precioElemento = item.querySelector('span:last-child');
        var precioTexto = precioElemento.textContent.replace('$', '');
        var precio = parseFloat(precioTexto);
        total += precio;
    });

    totalCarritoElement.textContent = 'Total: $' + total.toFixed(2);
}
