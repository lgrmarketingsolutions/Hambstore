let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    // Añadir el producto al carrito
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    // Actualizar el número de productos en el carrito
    document.getElementById('carritoCantidad').textContent = carrito.length;

    // Actualizar la lista de productos en el modal
    const carritoList = document.getElementById('carritoLista');
    carritoList.innerHTML = ''; // Limpiar la lista antes de agregar los productos

    // Agregar cada producto con su botón de eliminar
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        
        // Crear el botón de eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'X';
        eliminarBtn.classList.add('eliminar');
        eliminarBtn.onclick = () => eliminarDelCarrito(index); // Llamar a la función para eliminar el producto
        
        // Agregar el botón de eliminar al <li>
        li.appendChild(eliminarBtn);
        carritoList.appendChild(li);
    });

    // Actualizar el total
    document.getElementById('total').textContent = total;
}

function eliminarDelCarrito(index) {
    // Eliminar el producto del carrito
    total -= carrito[index].precio; // Restar el precio al total
    carrito.splice(index, 1); // Eliminar el producto del array
    actualizarCarrito(); // Actualizar la vista del carrito
}

function mostrarCarrito() {
    const carritoModal = document.getElementById('carritoModal');
    carritoModal.style.display = 'block';
}

function cerrarCarrito() {
    const carritoModal = document.getElementById('carritoModal');
    carritoModal.style.display = 'none';
}

function comprarTodo() {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    alert(`Gracias por tu compra. Total: $${total}`);

    // Limpiar el carrito
    carrito = [];
    total = 0;
    actualizarCarrito();
    cerrarCarrito();
}


// Lista de imágenes que se pueden utilizar como fondo
const imagenesFondo = [
    "3.png",
    "dos.png",
    "4.png",
];

document.getElementById('cambiarFondoBtn').addEventListener('click', function() {
    // Obtener una imagen aleatoria de la lista
    const imagenAleatoria = imagenesFondo[Math.floor(Math.random() * imagenesFondo.length)];

    // Cambiar el fondo de la sección '.inicio'
    const inicio = document.querySelector('.inicio');
    inicio.style.backgroundImage = `url(${imagenAleatoria})`;  // Cambiar el fondo a la imagen seleccionada
      // Asegurarse de que la imagen cubra todo el fondo
    inicio.style.backgroundPosition = 'center'; // Centrar la imagen
    inicio.style.transition = 'background-image 0.5s ease'; // Transición suave para el cambio de imagen
});


function comprarTodo() {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    // Guardar el carrito en localStorage antes de redirigir
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Redirigir a la página de pago
    window.location.href = 'pagina.html';
}

