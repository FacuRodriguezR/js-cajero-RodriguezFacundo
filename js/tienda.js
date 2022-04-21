const contenedor = document.getElementById("container");
const contenedorCarrito = document.getElementById("carritoModal")
const vaciarCarrito = document.getElementById("botonEliminar")
const contadorCarrito = document.getElementById("contadorCarrito")
const botonComprar = document.getElementById("botonComprar")
const precioTotal = document.getElementById('precioTotal')




// CODIGO Y ARRAY DE TIENDA

let productos = [
  {
    id: 0,
    nombre: "Cocina Escorial",
    precio: "$50000",
    puntos: 9600,
    imagen: "/images/cocina.jpg",
  },

  {
    id: 1,
    nombre: "Heladera Patrick",
    precio: "$168999",
    puntos: 10400,
    imagen: "/images/heladera.jpg",
  },

  {
    id: 2,
    nombre: "Aire Acondicionado BGH",
    precio: "$189999",
    puntos: 20000,
    imagen: "/images/aire-acondicionado.jpg",
  },

  {
    id: 3,
    nombre: "Lavarropas Electrolux",
    precio: "$125499",
    puntos: 10300,
    imagen: "/images/lavarropas-1.png",
  },

  {
    id: 4,
    nombre: "Microondas Whirlpool",
    precio: "$32500",
    puntos: 5800,
    imagen: "/images/microondas.jpg",
  },

  {
    id: 5,
    nombre: "SMART TV LG 50' ",
    precio: "$119899",
    puntos: 10200,
    imagen: "/images/televisor.webp",
  },

  {
    id: 6,
    nombre: "Lavavajillas Drean",
    precio: "$100999",
    puntos: 10600,
    imagen: "/images/lavavajilla.jpg",
  },

  {
    id: 7,
    nombre: "Cafetera 3 en 1 Winco",
    precio: "$28799",
    puntos: 6700,
    imagen: "/images/cafetera.jpg",
  },
];

// BOTON COMPRA CARRITO: Basicamente acá simulamos la compra agregando un sweet alert, si la longitud es mayor a cero, tira un sucess, si no, larga un error
botonComprar.addEventListener("click", ()=> {
  if(carrito.length > 0){
  Swal.fire({
    icon: 'success',
    title: 'Su compra fue realizada con éxito',
    text: 'El pedido será entregado dentro de las 72h hábiles, ponele',
   
  })
  carrito.length = 0
  actualizarCarrito()
}else{
    Swal.fire({
      icon: 'error',
      title: '¡Que culiao!',
      text: 'No has ingresado ningun producto al carrito',
     
    })
  }
 
})


// VACIAR CARRITO: Lo que hacemos acá es agregar un evento al boton vaciar carrito e igualamos la longitud de el array carrito a 0, luego actualizamos el carrito

vaciarCarrito.addEventListener('click', ()=> {
  carrito.length = 0
  actualizarCarrito()
})


// CREAMOS LA CARD UTILIZANDO LOS ELEMENTOS DEL ARRAY Y CON CLASES DE BOOT

productos.forEach((producto) => {
  let card = document.createElement("div");
  card.classList.add("card", "col-sm-12", "col-lg-3");
  card.innerHTML = `<img src=${producto.imagen} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <p class="card-text">${producto.puntos+ " puntos"}</p>
      <button class="btn btn-primary" id="botonCanjear${producto.id}">Agregar al carrito</button>
    </div>`;

  contenedor.appendChild(card);
  
  const boton = document.getElementById(`botonCanjear${producto.id}`)

// agregamos el evento al boton 

  boton.addEventListener("click", () => {
    agregarCarrito(producto.id)
  })

 
});
// CARRITO
// creamos la funcion de agregar al carrito

const agregarCarrito = (prodId) => {
  const item = productos.find ((e) => e.id === prodId)
  carrito.push(item)
  actualizarCarrito()
  console.log(carrito)

  sessionStorage.setItem("Producto", JSON.stringify(carrito))

 
}
// creamos funcion para eliminar del carrito
const eliminarCarrito = (prodId) => {
  const item = carrito.find ((prod) => prod.id === prodId )
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)

  actualizarCarrito()
}

// creamos una funcion para actualizar nuestro carrito cada vez que cliqueemos

const actualizarCarrito = () => {
  // hacemos esto para que cada vez que agreguemos al carrito y actualicemos no se repitan los elementos
  contenedorCarrito.innerHTML = ""
  carrito.forEach((elemento) => {
    const div = document.createElement('div')
    div.className = ("productosCarrito")
    div.innerHTML = `
    <img src="${elemento.imagen}" alt="imagenproducto" height="70px" width="70px"/>
    <p>${elemento.nombre}</p>
    <p>${elemento.precio}</p>
    <button onclick="eliminarCarrito(${elemento.id})" class="boton botonElim btn btn-primary">Eliminar del carrito</button>
    
    `
    contenedorCarrito.appendChild(div)
  })

  contadorCarrito.innerText = carrito.length
 
}

let carrito = [];


if (JSON.parse(sessionStorage.getItem("Producto"))){
  carrito = JSON.parse(sessionStorage.getItem("Producto"));
  actualizarCarrito();

}



// API'S

