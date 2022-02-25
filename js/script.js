let saldo = 23500;
let saldoIngresado =0;
let depositoSaldo =0;
let nuevoSaldo = (saldo+depositoSaldo);

let opcion = prompt(
  "Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. Presioná X para finalizar"
);

while (opcion != "X") {
  switch (opcion) {
    case '1':
        alert('Tu saldo es $'+ saldo)
      break;
    case '2':
        saldoIngresado = parseInt(prompt('Ingrese el monto a retirar')); if(saldoIngresado>saldo) {
            alert('Saldo insuficiente')   
        }else {
            alert('Retiro de dinero exitoso, su nuevo saldo es $'+ (saldo-saldoIngresado))

        }
      break;



    case '3':
        depositoSaldo = parseInt(prompt('Ingrese el monto a depositar')); if (depositoSaldo>0) {
          alert('Usted deposito $'+depositoSaldo+ '.'+' Su nuevo saldo es $' + (saldo+depositoSaldo))
        } else{
          alert('Ingrese un monto valido')
        }
        // alert('Usted está haciendo un deposito')3
      break;

    default:
        alert('Opcion Incorrecta')
      break;
  }

  opcion = prompt("Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. Presioná X para finalizar")
}
