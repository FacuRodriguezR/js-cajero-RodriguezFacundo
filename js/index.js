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
  let depositoSaldo = parseFloat(prompt("Ingrese el monto a depositar"));
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

  while (contactos) {
    switch (contactos) {
      case "1":
        let transferencia = parseFloat(prompt('Ingrese el monto que desea transferir a Maria Cortez'));

     

      transferencia < saldo ? alert('Transferencia exitosa') : alert('Saldo insuficiente')
        break;
        
      case "2":

        let transferencia2 = parseFloat(prompt('Ingrese el monto que desea transferir a Celeste Fiocchette'))
       
        transferencia2 < saldo ? alert('Transferencia exitosa') : alert('Saldo insuficiente')
        

        break;
      case "3":

        let transferencia3 = parseFloat(prompt('Ingrese el monto que desea transferir a Mercedes Tagliafaro'));

          transferencia3 < saldo ? alert('Transferencia exitosa') : alert('Saldo insuficiente')
        
        break;

      case "4":

        let transferencia4 = parseFloat(prompt('Ingrese el monto que desea transferir a Estefania Maroto'));

        transferencia4 < saldo ? alert('Transferencia exitosa') : alert('Saldo insuficiente')

        break;

      default:
          alert('Elija una opcion valida');
          

        break;
    }
   
  }
  
}


function retirarDinero(saldoActual, monto) {
  return saldoActual - monto;
}

function depositarDinero(saldoActual, monto) {
  return saldoActual + monto;
}



