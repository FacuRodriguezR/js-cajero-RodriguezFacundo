// variables
let saldo = 23500;


// intentamos agregar eventos a la pagina por cada boton

// boton saldo

let botonConsulta = document.getElementById("botonSaldo")
botonConsulta.addEventListener("click", accionBotonSaldo)


function accionBotonSaldo ( ){
  alert("Tu saldo es $" + saldo);
};
// fin boton saldo
/* ******************************************************* */ 
/* boton retiro dinero*/

let botonExtraccion = document.getElementById("botonRetiro")
botonExtraccion.addEventListener("click", accionRetiro)

function accionRetiro() {
  let monto = parseFloat(prompt("Ingrese el monto a retirar"));
  if (monto > saldo) {
    alert("Saldo insuficiente");
  } else if (monto <= 0) {
    alert("Ingrese un monto válido");
  } else {
    saldo = retirarDinero(saldo, monto);
    alert("Retiro de dinero exitoso, su nuevo saldo es $" + saldo);
  }
}

// FIN BOTON RETIRO
/* ******************************************************* */ 
// BOTON INGRESO DINERO 
let botonAdicionarDinero = document.getElementById("botonDeposito")
botonAdicionarDinero.addEventListener("click", accionDeposito)

// funcion accionDeposito

function accionDeposito (){
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
}

// FIN BOTON INGRESO 
/* ******************************************************* */ 
//  BOTON TRANSFERENCIA

// IMPORTANTE, TRATAR DE SACAR ESE BUG

let botonTransferir = document.getElementById("botonTransferencia")
botonTransferir.addEventListener("click", transferir)
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

// while (opcion.toUpperCase() != "X") {
//   switch (opcion) {
//     case "1":
//       // Informar saldo
//       alert("Tu saldo es $" + saldo);
//       break;
//     case "2":
//       // Retirar dinero
//       // Number() hace exactamente lo mismo que parseInt(). Es solo otra manera de escribirlo
//       let monto = Number(prompt("Ingrese el monto a retirar"));
//       // También verificar que el ingreso sea mayor a 0
//       if (monto > saldo) {
//         alert("Saldo insuficiente");
//       } else if (monto <= 0) {
//         alert("Ingrese un monto válido");
//       } else {
//         saldo = retirarDinero(saldo, monto);
//         alert("Retiro de dinero exitoso, su nuevo saldo es $" + saldo);
//       }
//       break;
//     case "3":
//       // Depositar dinero
//       let depositoSaldo = parseInt(prompt("Ingrese el monto a depositar"));
//       if (depositoSaldo > 0) {
//         saldo = depositarDinero(saldo, depositoSaldo);
//         alert(
//           "Usted deposito $" +
//             depositoSaldo +
//             "." +
//             " Su nuevo saldo es $" +
//             saldo
//         );
//       } else {
//         alert("Ingrese un monto valido");
//       }

//       break;

//     case "4":
//       alert("Elija una opcion para transferir");
//       transferir();

      

//       break;

//     default:
//       alert("Opcion Incorrecta");
//       break;
//   }

//   opcion = prompt(
//     "Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. 4 - Transferencias. - Presioná X para finalizar"
//   );
// }

