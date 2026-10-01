// Array inicial de videojuegos 
let videojuegos = [
  { nombre: "The Witcher 3", compania: "CD Projekt", plataforma: "PC", valoracion: 9.8, precio: 29.99 },
  { nombre: "Elden Ring", compania: "FromSoftware", plataforma: "PlayStation 5", valoracion: 9.6, precio: 59.99 }
];

// Función para pintar la tabla en el DOM
function pintarTabla() {
  const tbody = document.querySelector("#tabla-juegos tbody") || document.querySelector("tbody");
  if (!tbody) return;

  tbody.innerHTML = ""; 

  videojuegos.forEach((juego) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${juego.nombre}</td>
      <td>${juego.compania}</td>
      <td>${juego.plataforma}</td>
      <td>${juego.valoracion}</td>
      <td>${juego.precio} €</td>
    `;
    tbody.appendChild(fila);
  });
}

// Pintar la tabla al cargar la página
pintarTabla();

// --- RETO FINAL: LÓGICA DEL FORMULARIO ---
const btnAnadir = document.getElementById("btn-anadir");

btnAnadir.addEventListener("click", function () {
  // 1. Leer valores de los campos
  const nombreInput = document.getElementById("nombre").value.trim();
  const companiaInput = document.getElementById("compania").value.trim();
  const plataformaInput = document.getElementById("plataforma").value;
  const valoracionInput = document.getElementById("valoracion").value;
  const precioInput = document.getElementById("precio").value;

  // 2. Validación: Comprobar si algún campo está vacío
  if (!nombreInput || !companiaInput || !plataformaInput || !valoracionInput || !precioInput) {
    alert("Por favor, rellena todos los campos antes de añadir el juego.");
    return;
  }

  // 3. Crear nuevo objeto con los tipos de datos correctos 
  const nuevoJuego = {
    nombre: nombreInput,
    compania: companiaInput,
    plataforma: plataformaInput,
    valoracion: parseFloat(valoracionInput),
    precio: parseFloat(precioInput)
  };

  // 4. Añadir el objeto al array
  videojuegos.push(nuevoJuego);

  // 5. Re-pintar la tabla
  pintarTabla();

  // 6. Limpiar el formulario
  document.getElementById("form-juego").reset();
});