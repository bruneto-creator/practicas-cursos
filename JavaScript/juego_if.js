var piedra = 1;
var papel = 2;
var tijera = 3;
var jugador1 = 1;
var jugador2 = 2;

function ganador() {
  if (jugador1 == piedra && jugador2 == tijera) {
    console.log("Ganó jugador 1");
  } else if (jugador1 == tijera && jugador2 == piedra) {
    console.log("Ganó jugador 2");
  } else if (jugador1 == tijera && jugador2 == papel) {
    console.log("Ganó jugador 1");
  } else if (jugador1 == papel && jugador2 == tijera) {
    console.log("Ganó jugador 2");
  } else if (jugador1 == papel && jugador2 == piedra) {
    console.log("Ganó jugador 1");
  } else if (jugador1 == piedra && jugador2 == papel) {
    console.log("Ganó jugador 2");
  } else if (jugador1 == jugador2) {
    console.log("Empate");
  } else {
    console.log("Escoge un valor del 1 al 3 para el jugador 1 y el jugador 2");
  }
}

ganador();

