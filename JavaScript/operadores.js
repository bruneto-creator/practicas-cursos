var a = 4 + "7";
var b = 4 * "7";
var numero = 20;
var texto = String(numero);
var otraVezNumero = Number(texto);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(texto, typeof texto);
console.log(otraVezNumero, typeof otraVezNumero);

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(""));
console.log(Boolean(1));
console.log(Boolean("a"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {}));

console.log(3 + 2);
console.log(50 - 10);
console.log(10 * 20);
console.log(20 / 2);
console.log(2 ** 6);
console.log("Sebastian " + "Arocha");
console.log(!false);
console.log(3 == "3");
console.log(3 === "3");
console.log(5 < 3);
console.log(5 > 3);
console.log(5 <= 6);
console.log(5 >= 6);

var edad = 40;
edad++;
edad += 2;
console.log(edad);

