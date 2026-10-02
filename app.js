
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

// NIVEL 02 // El modelo de datos: array de objetos


// Array de objetos de movimientos. Ingresos en positivo, gastos en negativo.
let movimientos = [
  { id: 1, concepto: "Nómina de Trabajo", importe: 1500.00, categoria: "Nómina", fecha: "2026-10-01" },
  { id: 2, concepto: "Supermercado Mercadona", importe: -68.40, categoria: "Comida", fecha: "2026-10-02" },
  { id: 3, concepto: "Cena con Amigos", importe: -32.50, categoria: "Ocio", fecha: "2026-10-03" },
  { id: 4, concepto: "Gasolina Coche", importe: -50.00, categoria: "Transporte", fecha: "2026-10-04" },
  { id: 5, concepto: "Venta Guitarra Segunda Mano", importe: 200.00, categoria: "Otros", fecha: "2026-10-05" },
  { id: 6, concepto: "Factura de Luz", importe: -85.20, categoria: "Hogar", fecha: "2026-10-06" }
];
// NIVEL 03 // Cálculos con funciones y bucles
// ==========================================

/**
 * Recorre el array con un bucle y suma solo los importes positivos (ingresos).
 * @returns {number} Total de ingresos
 */
function totalIngresos() {
  let acumulador = 0;
  for (let i = 0; i < movimientos.length; i++) {
    if (movimientos[i].importe > 0) {
      acumulador += movimientos[i].importe;
    }
  }
  return acumulador;
}

/**
 * Recorre el array con un bucle y suma solo los importes negativos (gastos).
 * @returns {number} Total de gastos (valor negativo)
 */
function totalGastos() {
  let acumulador = 0;
  for (let i = 0; i < movimientos.length; i++) {
    if (movimientos[i].importe < 0) {
      acumulador += movimientos[i].importe;
    }
  }
  return acumulador;
}

/**
 * Devuelve el saldo total sumando el saldo inicial, los ingresos y los gastos.
 * @returns {number} Saldo actual
 */
function saldoActual() {
  return saldoInicial + totalIngresos() + totalGastos();
}