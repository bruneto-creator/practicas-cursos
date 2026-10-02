var piedra = 1;
var papel = 2;
var tijera = 3;
var jugador1 = 1;
var jugador2 = 2;

function juego() {
  switch (true) {
    case (jugador1 == piedra && jugador2 == tijera) ||
      (jugador1 == papel && jugador2 == piedra) ||
      (jugador1 == tijera && jugador2 == papel):
      console.log("¡Ganó el jugador 1!");
      break;
    case (jugador1 == tijera && jugador2 == piedra) ||
      (jugador1 == piedra && jugador2 == papel) ||
      (jugador1 == papel && jugador2 == tijera):
      console.log("¡Ganó el jugador 2!");
      break;
    case jugador1 == jugador2:
      console.log("Empate");
      break;
    default:
      console.log("Ingresa un valor");
  }
}

juego();

