// variables
let saldo = 23500;


// Creamos array y agregamos objetos en el

const listaDestinatario = [];

class Destinatario {
  constructor(id, nombre, CBU, banco) {
    this.id = id;
    this.nombre = nombre;
    this.CBU = CBU;
    this.banco = banco;
  }
}

listaDestinatario.push(
  new Destinatario("1", "Maria Cortez", "8852887741233", "BBVA Francés")
);
listaDestinatario.push(
  new Destinatario("2", "Celeste Fiocchette", "10258596748", "Supervielle")
);
listaDestinatario.push(
  new Destinatario("3", "Mercedes Tagliafaro", "9673528461221", "Supervielle")
);
listaDestinatario.push(
  new Destinatario("4", "Estefania Maroto", "8352417968552", "Banco Macro")
);
// HACEMOS UNA BUSQUEDA DEL PRIMER CONTACTO QUE TENGA COMO BANCO ASIGNADO "SUPERVIELLE"
let busquedaBanco = "Supervielle"
let arrayBusqueda = listaDestinatario.find((elemento)=> elemento.banco == busquedaBanco)

console.table(arrayBusqueda);

// FUNCION PARA TRANSFERIR DINERO
function transferir() {
  let mensaje = "";
  for (const element of listaDestinatario) {
    mensaje += `${element.id} ${element.nombre}\n`

   
  }

  let contactos = prompt(mensaje) ;

  // hacemos un while y creamos un switch para poder elejir la opcion que queremos

  // CORREGIR COSAS PARA QUE APAREZCAN DE NUEVO LAS OPCIONES DE TRANSFERENCIAS

  while (contactos.toLocaleUpperCase() != "x") {
    switch (contactos) {
      case "1":
        let transferencia = prompt('Ingrese el monto que desea transferir a Maria Cortez');

      if (transferencia < saldo) {
      
        alert('Transferencia exitosa');
      } else {
        alert('Saldo insuficiente');
      }
        break;
        
      case "2":

        let transferencia2 = prompt('Ingrese el monto que desea transferir a Celeste Fiocchette')
        if (transferencia2 < saldo) {
        
          alert('Transferencia exitosa');
        } else {
          alert('Saldo insuficiente');
        }

        break;
      case "3":

        let transferencia3 = prompt('Ingrese el monto que desea transferir a Mercedes Tagliafaro');

        if (transferencia3 < saldo) {
  
          alert('Transferencia exitosa');
        } else {
          alert('Saldo insuficiente');

          // opcion = prompt(
          //   "Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. 4 - Transferencias. - Presioná X para finalizar"
          // );
        } 

        break;
      case "4":

        let transferencia4 = prompt('Ingrese el monto que desea transferir a Estefania Maroto');

        if (transferencia4 < saldo) {
          
          alert('Transferencia exitosa');
        } else {
          alert('Saldo insuficiente');
        } 

        break;
      default:
          alert('Elija una opcion valida')


        break;
    }
    opcion = prompt(
      "Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. 4 - Transferencias. - Presioná X para finalizar"
    );
  }
}


function retirarDinero(saldoActual, monto) {
  return saldoActual - monto;
}

function depositarDinero(saldoActual, monto) {
  return saldoActual + monto;
}

// + Ejecución del código +
let opcion = prompt(
  "Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. 4 - Transferencias. - Presioná X para finalizar"
);

while (opcion.toUpperCase() != "X") {
  switch (opcion) {
    case "1":
      // Informar saldo
      alert("Tu saldo es $" + saldo);
      break;
    case "2":
      // Retirar dinero
      // Number() hace exactamente lo mismo que parseInt(). Es solo otra manera de escribirlo
      let monto = Number(prompt("Ingrese el monto a retirar"));
      // También verificar que el ingreso sea mayor a 0
      if (monto > saldo) {
        alert("Saldo insuficiente");
      } else if (monto <= 0) {
        alert("Ingrese un monto válido");
      } else {
        saldo = retirarDinero(saldo, monto);
        alert("Retiro de dinero exitoso, su nuevo saldo es $" + saldo);
      }
      break;
    case "3":
      // Depositar dinero
      let depositoSaldo = parseInt(prompt("Ingrese el monto a depositar"));
      if (depositoSaldo > 0) {
        saldo = depositarDinero(saldo, depositoSaldo);
        alert(
          "Usted deposito $" +
            depositoSaldo +
            "." +
            " Su nuevo saldo es $" +
            saldo
        );
      } else {
        alert("Ingrese un monto valido");
      }

      break;

    case "4":
      alert("Elija una opcion para transferir");
      transferir();

      

      break;

    default:
      alert("Opcion Incorrecta");
      break;
  }

  opcion = prompt(
    "Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. 4 - Transferencias. - Presioná X para finalizar"
  );
}

// CODIGO Y ARRAY DE TIENDA

let productos = [
  {   
      id:1,
      nombre:"Cocina",
      precio: "$50000",
      puntos: 9600,
      imagen:"/images/cocina.jpg",
  },

  {   
      id:2,
      nombre:"Heladera",
      precio: "$168999",
      puntos: 10400,
      imagen:"/images/heladera.jpg",
  },

  {   
      id:3,
      nombre:"Aire Acondicionado",
      precio: "$189999",
      puntos: 20000,
      imagen:"/images/aire-acondicionado.jpg",
  },

  {   
      id:4,
      nombre:"Lavarropas",
      precio: "$125499",
      puntos: 10300,
      imagen:"/images/lavarropas-1.png",
  },

  {   
      id:5,
      nombre:"Microondas",
      precio: "$32500",
      puntos: 5800 ,
      imagen:"/images/microondas.jpg",
  },

  {   
      id:6,
      nombre:"Televisor",
      precio: "$119899",
      puntos: 10200,
      imagen:"/images/televisor.webp",
  },

  {   
    id:7,
    nombre:"Lavavajillas",
    precio: "$100999",
    puntos: 10600,
    imagen:"/images/lavavajilla.jpg",
},

{   
  id:8,
  nombre:"Cafetera 3 en 1",
  precio: "$28799",
  puntos: 6700,
  imagen:"/images/cafetera.jpg",
},
];

// HACEMOS UN FILTRO PARA QUE NOS DEVUELVA UN ARRAY CON LOS ELEMENTOS QUE REQUIERAN MAS DE 10000 PUNTOS 
let productosPuntos = productos.filter((elemento)=> elemento.puntos > "10000")

console.table(productosPuntos);

// CREAMOS LA CARD UTILIZANDO LOS ELEMENTOS DEL ARRAY Y CON CLASES DE BOOT, COMO HIZO VANI EN EL AFTER
const contenedor = document.getElementById("container");
productos.forEach((producto)=>{
  let card = document.createElement('div');
  card.classList.add("card","col-sm-12","col-lg-3");
  card.innerHTML =  `<img src=${producto.imagen} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.precio}</p>
    <p class="card-text">${producto.puntos}</p>
    <a href="#" class="btn btn-primary">Comprar</a>
    <a href="#" class="btn btn-primary">Canjear</a>
  </div>`;
  
  contenedor.appendChild(card);
}


);