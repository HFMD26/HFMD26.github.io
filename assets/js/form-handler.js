import { ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { database } from "/firebase-config.js"; 


document.getElementById("form-miembro").addEventListener("submit", function(e) {
  e.preventDefault();
   const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;
  const descripcion = e.target.descripcion.value;

  const miembrosRef = ref(database, "miembros");
  push(miembrosRef, { nombre, correo, descripcion })
    .then(() => {
      mostrarToast("Miembro registrado exitosamente.", "success");
    })
    .catch((error) => {
      mostrarToast("Error al registrar: " + error.message, "error");
    });
});

// REGISTRO DE EVENTOS
const formEvento = document.getElementById("form-evento");
if (formEvento) {
  formEvento.addEventListener("submit", function (e) {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    const fecha = e.target.fecha.value;

    const eventosRef = ref(database, "eventos");
    push(eventosRef, { titulo, fecha })
      .then(() => {
        mostrarToast("Evento agregado correctamente", "success");

        e.target.reset();
      })
      .catch((error) => {
        mostrarToast("Error al agregar evento: " + error.message, "error");
      });
  });
}

function mostrarToast(mensaje, tipo = "error") {
  const toast = document.getElementById("toast");
  toast.innerText = mensaje;
  toast.style.backgroundColor = tipo === "success" ? "#4CAF50" : "#f44336";
  toast.style.visibility = "visible";

  setTimeout(() => {
    toast.style.visibility = "hidden";
  }, 3000);
}