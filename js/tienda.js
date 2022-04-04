const contenedor = document.getElementById("container");
const contenedorCarrito = document.getElementById("carritoModal")

// CODIGO Y ARRAY DE TIENDA

let productos = [
  {
    id: 0,
    nombre: "Cocina",
    precio: "$50000",
    puntos: 9600,
    imagen: "/images/cocina.jpg",
  },

  {
    id: 1,
    nombre: "Heladera",
    precio: "$168999",
    puntos: 10400,
    imagen: "/images/heladera.jpg",
  },

  {
    id: 2,
    nombre: "Aire Acondicionado",
    precio: "$189999",
    puntos: 20000,
    imagen: "/images/aire-acondicionado.jpg",
  },

  {
    id: 3,
    nombre: "Lavarropas",
    precio: "$125499",
    puntos: 10300,
    imagen: "/images/lavarropas-1.png",
  },

  {
    id: 4,
    nombre: "Microondas",
    precio: "$32500",
    puntos: 5800,
    imagen: "/images/microondas.jpg",
  },

  {
    id: 5,
    nombre: "Televisor",
    precio: "$119899",
    puntos: 10200,
    imagen: "/images/televisor.webp",
  },

  {
    id: 6,
    nombre: "Lavavajillas",
    precio: "$100999",
    puntos: 10600,
    imagen: "/images/lavavajilla.jpg",
  },

  {
    id: 7,
    nombre: "Cafetera 3 en 1",
    precio: "$28799",
    puntos: 6700,
    imagen: "/images/cafetera.jpg",
  },
];


// ARRAY CARRITO COMPRAS  CON SU CONSTRUCTOR
let carrito = [];







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

// creamos la funcion de agregar al carrito

const agregarCarrito = (prodId) => {
  const item = productos.find ((e) => e.id === prodId)
  carrito.push(item)
  actualizarCarrito()
  console.log(carrito)
}

// creamos una funcion para actualizar nuestro carrito cada vez que cliqueemos

const actualizarCarrito = () => {
  // hacemos esto para que cada vez que agreguemos al carrito y actualicemos no se repitan los elementos
  contenedorCarrito.innerHTML = ""
  carrito.forEach((elemento) => {
    const div = document.createElement('div')
    div.className = ("productosCarrito")
    div.innerHTML = `
    <p>${elemento.nombre}</p>
    <p>${elemento.precio}</p>
    
    `
    contenedorCarrito.appendChild(div)
  })
}