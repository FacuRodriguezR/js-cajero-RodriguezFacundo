const contenedor = document.getElementById("container");
const canjear = document.getElementById("botonCanjear");

// CODIGO Y ARRAY DE TIENDA

let productos = [
  {
    id: 1,
    nombre: "Cocina",
    precio: "$50000",
    puntos: 9600,
    imagen: "/images/cocina.jpg",
  },

  {
    id: 2,
    nombre: "Heladera",
    precio: "$168999",
    puntos: 10400,
    imagen: "/images/heladera.jpg",
  },

  {
    id: 3,
    nombre: "Aire Acondicionado",
    precio: "$189999",
    puntos: 20000,
    imagen: "/images/aire-acondicionado.jpg",
  },

  {
    id: 4,
    nombre: "Lavarropas",
    precio: "$125499",
    puntos: 10300,
    imagen: "/images/lavarropas-1.png",
  },

  {
    id: 5,
    nombre: "Microondas",
    precio: "$32500",
    puntos: 5800,
    imagen: "/images/microondas.jpg",
  },

  {
    id: 6,
    nombre: "Televisor",
    precio: "$119899",
    puntos: 10200,
    imagen: "/images/televisor.webp",
  },

  {
    id: 7,
    nombre: "Lavavajillas",
    precio: "$100999",
    puntos: 10600,
    imagen: "/images/lavavajilla.jpg",
  },

  {
    id: 8,
    nombre: "Cafetera 3 en 1",
    precio: "$28799",
    puntos: 6700,
    imagen: "/images/cafetera.jpg",
  },
];

// HACEMOS UN FILTRO PARA QUE NOS DEVUELVA UN ARRAY CON LOS ELEMENTOS QUE REQUIERAN MAS DE 10000 PUNTOS
let productosPuntos = productos.filter((elemento) => elemento.puntos > "10000");

console.table(productosPuntos);

// CREAMOS LA CARD UTILIZANDO LOS ELEMENTOS DEL ARRAY Y CON CLASES DE BOOT

productos.forEach((producto) => {
  let card = document.createElement("div");
  card.classList.add("card", "col-sm-12", "col-lg-3");
  card.innerHTML = `<img src=${producto.imagen} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <p class="card-text">${producto.puntos+ " puntos"}</p>
      <a href="#" class="btn btn-primary" id="botonComprar">Comprar</a>
      <a href="#" class="btn btn-primary" id="botonCanjear">Canjear</a>
    </div>`;

  contenedor.appendChild(card);
});


canjear.addEventListener("click", agregarCarrito)
function agregarCarrito(){

}