const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(texto) {
  return new Promise(function (resolve) {
    rl.question(texto, resolve);
  });
}

function nuevoEstudiante(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = Number(edad);
}

async function iniciar() {
  var numEstudiantes = Number(
    await preguntar("¿Cuántos estudiantes hay en tu sección? ")
  );

  var listaEstudiantes = [];

  for (var i = 0; i < numEstudiantes; i++) {
    var nombre = await preguntar("¿Cuál es tu nombre? ");
    var apellido = await preguntar("¿Cuál es tu apellido? ");
    var edad = await preguntar("¿Cuál es tu edad? ");

    listaEstudiantes.push(new nuevoEstudiante(nombre, apellido, edad));
  }

  console.log(listaEstudiantes);
  rl.close();
}

iniciar();

