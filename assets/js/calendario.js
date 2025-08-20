import { getDatabase, ref, get, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { app } from "/firebase-config.js";

const db = getDatabase(app);
const contenedor = document.getElementById("calendario");

async function cargarActividades() {
  const snapshot = await get(ref(db, "eventos"));
  if (!snapshot.exists()) {
    contenedor.innerHTML = "<p>No hay actividades programadas aún.</p>";
    return;
  }

  const data = snapshot.val();
  contenedor.innerHTML = `
    <ul class="lista-eventos">
      ${Object.entries(data).map(([id, act]) => `
        <li>
          <strong>${act.titulo}</strong><br>
          📅 ${act.fecha}<br>
          <em>${act.descripcion}</em><br>
          <button class="eliminar-evento" data-id="${id}">🗑 Eliminar</button>
        </li>
      `).join("")}
    </ul>
  `;

  // Botones de eliminación
  document.querySelectorAll(".eliminar-evento").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-id");
      if (confirm("¿Seguro que deseas eliminar este evento?")) {
        await remove(ref(db, "eventos/" + id));
        alert("Evento eliminado ✅");
        cargarActividades(); // refrescar lista
      }
    });
  });
}

cargarActividades();
