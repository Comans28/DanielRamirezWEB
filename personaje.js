// Declaración de variables con la ficha del personaje
const nombre = "Dani";
let nivel = 150;
let vida = 1845;
const esJefe = true;
const habilidades = ["Saltar", "Correr", "Usar Objeto"];

// Muestra por consola de cada variable con un mensaje descriptivo
console.log("--- Ficha del personaje ---");
console.log(`Nombre del personaje: ${nombre}`);
console.log(`Nivel actual: ${nivel}`);
console.log(`Puntos de vida: ${vida}`);
console.log(`¿Es un jefe final?: ${esJefe}`);
console.log(`Habilidades especiales: ${habilidades.join(", ")}`);

// Comprobación de los tipos de datos usando typeof
console.log("--- Tipos de datos ---");
console.log(`Tipo de 'nombre': ${typeof nombre}`);
console.log(`Tipo de 'nivel': ${typeof nivel}`);
console.log(`Tipo de 'vida': ${typeof vida}`);
console.log(`Tipo de 'esJefe': ${typeof esJefe}`);
console.log(`Tipo de 'habilidades': ${typeof habilidades}`);