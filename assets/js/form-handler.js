import { ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { database } from "/firebase-config.js"; 


document.getElementById("form-miembro").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;
  const fecha = e.target.fecha.value;

  const miembrosRef = ref(database, "miembros");
  push(miembrosRef, { nombre, correo, fecha })
    .then(() => {
      document.getElementById("mensaje").innerText = "Miembro registrado exitosamente.";
      e.target.reset();
    })
    .catch((error) => {
      document.getElementById("mensaje").innerText = "Error al registrar: " + error.message;
    });
});
