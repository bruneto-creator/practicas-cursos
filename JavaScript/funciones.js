function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar("Diego");

function suma(a, b) {
  var resultado = a + b;
  return resultado;
}

console.log(suma(1, 3));

var otroSaludo = function (nombre) {
  console.log(`Hola ${nombre}`);
};

otroSaludo("Diego");

function saludoCompleto(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido);
}

saludoCompleto("Sebastian", "Arocha");

var miApellido = "Arocha";

function saludoScope() {
  var miNombre = "Sebastian";
  console.log("Hola " + miNombre + " " + miApellido);
}

saludoScope();

