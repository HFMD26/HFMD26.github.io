// assets/js/load-miembros.js
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { app } from "/firebase-config.js";

const db = getDatabase(app);
const contenedor = document.getElementById("miembros-contenedor");

async function cargarMiembros() {
  const snapshot = await get(ref(db, "miembros"));
  if (!snapshot.exists()) {
    contenedor.innerHTML = "<p>No hay miembros registrados aún.</p>";
    return;
  }

  const data = snapshot.val();
  contenedor.innerHTML = "";

  Object.values(data).forEach(miembro => {
    contenedor.innerHTML += `
      <div class="miembro">
        <img src="${miembro.fotoURL || '/assets/miembros/logo.jpg'}" alt="${miembro.nombre}">
        <h4>${miembro.nombre}</h4>
        <p>${miembro.descripcion}</p>
      </div>
    `;
  });
}

cargarMiembros();
