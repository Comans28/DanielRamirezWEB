// 1. Muestra por consola los números del 1 al 10.
console.log("--- Ejercicio 1: Números del 1 al 10 ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 3. Muestra solo los números pares del 2 al 20.
console.log("--- Ejercicio 3: Pares del 2 al 20 ---");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}


console.log("--- Ejercicio 4: Recorrer frutas ---");
const frutas = ["manzana", "pera", "plátano"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 5. Pide un número y muestra su tabla de multiplicar del 1 al 10.
console.log("--- Ejercicio 5: Tabla de multiplicar ---");
const numero = 7; // Puedes cambiar el 7 por el número que quieras
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
