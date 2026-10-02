var miPerro = {
  nombre: "Bruno",
  raza: "Dalmata",
  edad: 4,
  genero: "Macho",
  detallesDelPerro: function () {
    console.log(`Perro ${this.raza} ${this.genero}`);
  }
};

console.log(miPerro.nombre);
miPerro.detallesDelPerro();

function estudiante(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

var nuevoEstudiante = new estudiante("Luis", "Rosa", 21);
var nuevoEstudiante2 = new estudiante("Sebastian", "Arocha", 18);

console.log(nuevoEstudiante);
console.log(nuevoEstudiante2);

