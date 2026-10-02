var articulos = [
  { nombre: "Franela", precio: 5 },
  { nombre: "Pantalon", precio: 20 },
  { nombre: "Zapatos", precio: 40 },
  { nombre: "Gorra", precio: 4 },
  { nombre: "Sueter", precio: 15 }
];

var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.precio <= 5;
});

console.log(articulosFiltrados);

var franela = articulos.filter(function (articulo) {
  return articulo.nombre === "Franela";
});

console.log(franela);

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

console.log(nombreArticulos);

var frutas = [
  { nombre: "Manzana", color: "Rojo" },
  { nombre: "Cambur", color: "Amarillo" },
  { nombre: "Mango", color: "Amarillo" },
  { nombre: "Limón", color: "Verde" },
  { nombre: "Fresa", color: "Rojo" }
];

var encontrarFruta = frutas.find(function (fruta) {
  return fruta.color === "Rojo";
});

console.log(encontrarFruta);

articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.precio <= 15;
});

console.log(articulosBaratos);

var numeros = [1, 2, 3, 4, 5];
numeros.push(6, 7);
console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.pop();
console.log(numeros);

