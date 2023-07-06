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
  const item = document.createElement('li');
  const imagen = document.createElement('img');
  imagen.src = imagenURL;
  const nombreElemento = document.createElement('span');
  nombreElemento.textContent = nombre;

  item.appendChild(imagen);
  item.appendChild(nombreElemento);

  carritoItems.appendChild(item);

  totalCarrito += precio;
  totalCarritoElement.textContent = `Total: $${totalCarrito.toFixed(2)}`;
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
  const itemsCarrito = document.querySelectorAll('#carrito-items li');
  total = 0; // Reiniciar el valor de total antes de recalcularlo

  itemsCarrito.forEach(function (item) {
    const precioElemento = item.querySelector('span:last-child');
    
    if (precioElemento !== null) {
      const precioTexto = precioElemento.textContent;
      const precio = parseFloat(precioTexto);
      total += precio;
    }
  });

  totalCarritoElement.textContent = `Total: $${total.toFixed(2)}`;
  totalCarritoElement.dataset.total = total;
}
