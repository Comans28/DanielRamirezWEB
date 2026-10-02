
// NIVEL 01 // Los cimientos: variables y tipos


// 1. Declaración de variables iniciales de la cuenta
const titularCuenta = "Daniel Ramírez";
let saldoInicial = 1000.00;
const simboloMoneda = "€";

/**
 * Recibe una cantidad numérica y devuelve el texto formateado
 * con dos decimales y el símbolo de la moneda en formato español.
 * @param {number} cantidad 
 * @returns {string} Ej: "85,50 €"
 */
function formatearDinero(cantidad) {
  // toFixed(2) asegura dos decimales y replace('.', ',') pone la coma decimal
  return cantidad.toFixed(2).replace('.', ',') + " " + simboloMoneda;
}

