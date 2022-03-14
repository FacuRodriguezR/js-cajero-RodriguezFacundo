// variables
let saldo = 23500;

// Realizamos todas las operaciones disponibles por el "cajero" en funciones
// Nombramos las funciones con verbos en infinitivo
// Le pasamos por parámetro los datos de entrada, que serán el saldo actual
// y el monto a operar
function retirarDinero(saldoActual, monto) {
  return saldoActual - monto;
}

function depositarDinero(saldoActual, monto) {
  return saldoActual + monto;
}

// + Ejecución del código +
let opcion = prompt(
  "Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. Presioná X para finalizar"
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
    default:
      alert("Opcion Incorrecta");
      break;
  }

  opcion = prompt(
    "Elegí una opción: 1- Saldos. 2 - Retiro de dinero. 3 - Depositos. Presioná X para finalizar"
  );
}
