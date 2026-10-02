var jugadores = ["Messi", "Ronaldo", "Beckham", "Suárez"];

console.log(jugadores.length);
console.log(jugadores[0]);
console.log(jugadores[3]);

var posicion = jugadores.indexOf("Beckham");
console.log(posicion);

var invitados = ["Karla", "Diego", "Luis", "Miriam"];
console.log(invitados);

invitados.push("Jose", "Luisa");
console.log(invitados);

invitados.pop();
console.log(invitados);

invitados.unshift("Carlos");
console.log(invitados);

invitados.shift();
console.log(invitados);

