
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
// NIVEL 04 // Métodos de array: filtrar y transformar


/**
 * Pinta los movimientos recibidos en la tabla HTML del DOM.
 * @param {Array} listaMovimientos - Array de movimientos a mostrar
 */
function pintarTabla(listaMovimientos) {
  const tbody = document.getElementById("tbody-movimientos");
  tbody.innerHTML = ""; // Limpiar contenido previo

  listaMovimientos.forEach((mov) => {
    const fila = document.createElement("tr");

    // Formatear el importe con la clase de color según corresponda (verde/rojo)
    const claseMonto = mov.importe >= 0 ? "monto-ingreso" : "monto-gasto";
    const signo = mov.importe > 0 ? "+" : "";

    fila.innerHTML = `
      <td>${mov.fecha}</td>
      <td>${mov.concepto}</td>
      <td>${mov.categoria}</td>
      <td class="${claseMonto}">${signo}${formatearDinero(mov.importe)}</td>
      <td>
        <button class="btn-borrar" data-id="${mov.id}">Borrar</button>
      </td>
    `;

    tbody.appendChild(fila);
  });

  // Asignar los eventos de borrado a los botones recién creados
  const botonesBorrar = document.querySelectorAll(".btn-borrar");
  botonesBorrar.forEach(boton => {
    boton.addEventListener("click", function() {
      const idParaBorrar = parseInt(this.getAttribute("data-id"));
      borrarMovimiento(idParaBorrar);
    });
  });
}

/**
 * Filtra los movimientos según la categoría seleccionada en el desplegable.
 */
function filtrarPorCategoria() {
  const categoriaSeleccionada = document.getElementById("filtro-categoria").value;
  
  if (categoriaSeleccionada === "TODAS") {
    pintarTabla(movimientos);
  } else {
    // Uso del método filter
    const filtrados = movimientos.filter(mov => mov.categoria === categoriaSeleccionada);
    pintarTabla(filtrados);
  }
}