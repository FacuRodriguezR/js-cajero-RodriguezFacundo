// variables

let saldo = 23500;
let saldoIngresado =0;
let depositoSaldo =0;
let nuevoSaldo = (saldo+depositoSaldo);

let opcion = prompt(
  "Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. 4 - Transferencias. Presioná X para finalizar"
);
// fin variables

// ------------------------------------------

// funciones
  const retiro = function (params) {

    saldoIngresado = parseInt(prompt('Ingrese el monto a retirar')); if(saldoIngresado>saldo) {
      alert('Saldo insuficiente')   
      
  }else {

    saldo = saldo - saldoIngresado;

    alert('Retiro de dinero exitoso, su nuevo saldo es $' + saldo)

  }
    
  }
// fin funciones


// codigo
while (opcion != "X") {
  switch (opcion) {
    case '1':
        alert('Tu saldo es $'+ saldo)
      break;
    case '2':
        // saldoIngresado = parseInt(prompt('Ingrese el monto a retirar')); if(saldoIngresado>saldo) {
        //     alert('Saldo insuficiente')   
        // }else {
        //   saldo = saldo - saldoIngresado;

        //   alert('Retiro de dinero exitoso, su nuevo saldo es $' + saldo)

        // }

        retiro();
      break;



    case '3':
        depositoSaldo = parseInt(prompt('Ingrese el monto a depositar')); if (depositoSaldo>0) {
          alert('Usted deposito $'+depositoSaldo+ '.'+' Su nuevo saldo es $' + (saldo+depositoSaldo))
        } else{
          alert('Ingrese un monto valido')
        }
       
      break;

    case '4':
      

    default:
        alert('Opcion Incorrecta')
      break;
  }

  opcion = prompt("Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. Presioná X para finalizar")
}
