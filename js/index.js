// variables
let saldo = 23500;


// intentamos agregar eventos a la pagina por cada boton

// boton saldo

let botonConsulta = document.getElementById("botonSaldo")
botonConsulta.addEventListener("click", accionBotonSaldo)


function accionBotonSaldo ( ){
  Swal.fire('Tu saldo es de $' + saldo)
};
// fin boton saldo
/* ******************************************************* */ 
/* boton retiro dinero*/

let botonExtraccion = document.getElementById("botonRetiro")
botonExtraccion.addEventListener("click", accionRetiro)

function accionRetiro() {
  let monto = parseFloat(prompt("Ingrese el monto a retirar"));
  if (monto > saldo) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Saldo insuficiente',
     
    })
  } else if (monto <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese un monto válido',
     
    })
  } else {
    saldo = retirarDinero(saldo, monto);
    

    Swal.fire({
      icon: 'success',
      title: 'Retiro de dinero exitoso',
      text: 'Su nuevo saldo es de $' + saldo,
     
    })

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
   

    Swal.fire({
      icon: 'success',
      title: 'Usted depositó $' + depositoSaldo + '.',
      text: 'Su nuevo saldo es de $' + saldo,
     
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese un monto válido',
     
    })
  }
}

// FIN BOTON INGRESO 
/* ******************************************************* */ 
//  BOTON TRANSFERENCIA

// IMPORTANTE, TRATAR DE SACAR ESE BUG




// console.table(arrayBusqueda);
const lista = document.getElementById("botonTransf")

fetch("/index.json")
.then(response => response.json())
.then((data) =>{
 data.forEach((destinatario)=>{
   const li = document.createElement("li")
   li.innerHTML = `
   <h4>Nombre: ${destinatario.nombre}</h4>
   <h4>CBU: ${destinatario.CBU}</h4>
   <h4>Banco: ${destinatario.banco}</h4>
   <button id="transferir" class="boton btn btn-primary">Transferir Dinero</button>
   <hr>
   `
   lista.append(li)
 })
 
} )

let botonTransferir = document.getElementById("botonTransferencia")
botonTransferir.addEventListener("click", transferir)

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



