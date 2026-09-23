console.log("Aplicación cargada correctamente.");

const boton = document.getElementById("mi-boton");
const aviso = document.getElementById("mensaje-contador");
let contador = 0;

if (boton && aviso) {
    boton.addEventListener("click", () => {
        contador++;
        aviso.textContent = `Has pulsado el botón ${contador} veces.`;
    });
}

const btnModo = document.getElementById("modonoche");
if (btnModo) {
    btnModo.addEventListener("click", () => {
        document.body.classList.toggle("tema-claro");
        if (document.body.classList.contains("tema-claro")) {
            btnModo.textContent = "☀️ Modo";
        } else {
            btnModo.textContent = "🌙 Modo";
        }
    });
}