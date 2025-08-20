import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { app } from "/firebase-config.js";

const db = getDatabase(app);
const contenedor = document.getElementById("miembros-contenedor");

function cargarMiembros() {
  const miembrosRef = ref(db, "miembros");
  onValue(miembrosRef, (snapshot) => {
    contenedor.innerHTML = ""; // limpiar antes de volver a renderizar
    snapshot.forEach((child) => {
      const miembro = child.val();
      const miembroId = child.key;

      const div = document.createElement("div");
      div.className = "miembro";
      div.innerHTML = `
        <img src="${miembro.foto || '/assets/miembros/logo.jpg'}" alt="${miembro.nombre}">
        <p><strong>${miembro.nombre}</strong><br>${miembro.descripcion || ''}</p>
        <button class="eliminar-btn" data-id="${miembroId}">🗑 Eliminar</button>
      `;
      contenedor.appendChild(div);
    });

    // Asignar eventos de borrado
    document.querySelectorAll(".eliminar-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        if (confirm("¿Seguro que deseas eliminar este miembro?")) {
          await remove(ref(db, "miembros/" + id));
          alert("Miembro eliminado ✅");
        }
      });
    });
  });
}

cargarMiembros();

