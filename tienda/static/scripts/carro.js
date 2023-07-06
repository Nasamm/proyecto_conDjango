// Variables globales
const carritoItems = document.getElementById('carrito-items');
const totalCarritoElement = document.getElementById('total-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const continuarCompraBtn = document.getElementById('continuar-compra');
let totalCarrito = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio, imagenURL) {
  const productoExistente = buscarProductoEnCarrito(nombre);
  
  if (productoExistente) {
    productoExistente.cantidad++;
    actualizarItemCarrito(productoExistente);
  } else {
    const nuevoProducto = {
      nombre: nombre,
      precio: precio,
      imagenURL: imagenURL,
      cantidad: 1
    };
    carritoItems.appendChild(crearItemCarrito(nuevoProducto));
  }
  
  totalCarrito += precio;
  actualizarTotalCarrito();
}

// Función para crear un nuevo item de carrito
function crearItemCarrito(producto) {
  const item = document.createElement('li');
  
  const imagen = document.createElement('img');
  imagen.src = producto.imagenURL;
  item.appendChild(imagen);
  
  const nombreElemento = document.createElement('span');
  nombreElemento.textContent = producto.nombre;
  item.appendChild(nombreElemento);
  
  const cantidadElemento = document.createElement('span');
  cantidadElemento.textContent = producto.cantidad;
  item.appendChild(cantidadElemento);
  
  const precioElemento = document.createElement('span');
  precioElemento.textContent = producto.precio.toFixed(2);
  item.appendChild(precioElemento);
  
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.addEventListener('click', function() {
    totalCarrito -= producto.precio * producto.cantidad;
    actualizarTotalCarrito();
    item.remove();
  });
  item.appendChild(botonEliminar);
  
  return item;
}

// Función para actualizar un item de carrito existente
function actualizarItemCarrito(producto) {
  const item = buscarItemEnCarrito(producto.nombre);
  
  if (item) {
    item.querySelector('span:nth-child(3)').textContent = producto.cantidad;
    item.querySelector('span:last-child').textContent = (producto.precio * producto.cantidad).toFixed(2);
  }
}

// Función para buscar un producto en el carrito
function buscarProductoEnCarrito(nombre) {
  const itemsCarrito = carritoItems.querySelectorAll('li');
  
  for (let i = 0; i < itemsCarrito.length; i++) {
    const item = itemsCarrito[i];
    const nombreItem = item.querySelector('span:nth-child(2)').textContent;
    
    if (nombreItem === nombre) {
      return {
        nombre: nombreItem,
        precio: parseFloat(item.querySelector('span:last-child').textContent),
        imagenURL: item.querySelector('img').src,
        cantidad: parseInt(item.querySelector('span:nth-child(3)').textContent)
      };
    }
  }
  
  return null;
}

// Función para buscar un item en el carrito por su nombre
function buscarItemEnCarrito(nombre) {
    const itemsCarrito = carritoItems.querySelectorAll('li');
    
    for (let i = 0; i < itemsCarrito.length; i++) {
      const item = itemsCarrito[i];
      const nombreItem = item.querySelector('span:nth-child(2)').textContent;
      
      if (nombreItem === nombre) {
        return item;
      }
    }
    
    return null;
  }
  
