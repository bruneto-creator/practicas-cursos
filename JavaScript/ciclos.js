var paises = ["España", "Mexico", "Italia", "Francia"];

function nombrarPaises(nombrepais) {
  console.log(`Bienvenido a los Juegos Olímpicos, ${nombrepais}`);
}

for (var i = 0; i < paises.length; i++) {
  nombrarPaises(paises[i]);
}

var alimentos = ["harina", "huevos", "azúcar", "avena"];

function nombrarAlimentos(alimento) {
  console.log(`Hay que comprar ${alimento}`);
}

for (var alimento of alimentos) {
  nombrarAlimentos(alimento);
}

var numero = 1;

while (numero <= 10) {
  console.log(numero);
  numero++;
}

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

while (estudiantes.length > 0) {
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

var vuelta = 1;

do {
  console.log(vuelta);
  vuelta++;
} while (vuelta <= 5);

