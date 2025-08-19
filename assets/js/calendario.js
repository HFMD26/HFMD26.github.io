document.addEventListener("DOMContentLoaded", function () {
  const calendario = document.getElementById("calendario");
  let fechaActual = new Date();

  const actividades = [
    { fecha: "2025-04-10", titulo: "Convivencia anual" },
    { fecha: "2025-06-20", titulo: "Entrega de reconocimientos" },
    { fecha: "2025-05-15", titulo: "Dia del maestro" }
  ];

  function renderizarCalendario(fecha) {
    const año = fecha.getFullYear();
    const mes = fecha.getMonth();

    const diasMes = new Date(año, mes + 1, 0).getDate();
    const primerDia = new Date(año, mes, 1).getDay();
    const nombreMes = fecha.toLocaleString("es-ES", { month: "long" });

    let tabla = `
      <div style="text-align:center;">
        <button id="prev">←</button>
        <strong style="margin: 0 1rem;">${nombreMes.toUpperCase()} ${año}</strong>
        <button id="next">→</button>
      </div>
      <table><tr>
    `;

    const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    diasSemana.forEach(d => tabla += `<th>${d}</th>`);
    tabla += "</tr><tr>";

    for (let i = 0; i < primerDia; i++) {
      tabla += "<td></td>";
    }

    for (let dia = 1; dia <= diasMes; dia++) {
      const fechaCompleta = new Date(año, mes, dia);
      const fechaStr = fechaCompleta.toLocaleDateString("en-CA"); // YYYY-MM-DD
      const actividad = actividades.find(act => act.fecha === fechaStr);

      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      fechaCompleta.setHours(0, 0, 0, 0);

      let clase = "";
      if (actividad) {
        clase = fechaCompleta < hoy ? "pasado" : "futuro";
      }

      tabla += `<td class="${clase}" title="${actividad ? actividad.titulo : ''}">${dia}</td>`;

      if ((dia + primerDia) % 7 === 0) tabla += "</tr><tr>";
    }

    tabla += "</tr></table>";
    calendario.innerHTML = tabla;

    // Navegación
    document.getElementById("prev").onclick = () => {
      fechaActual.setMonth(fechaActual.getMonth() - 1);
      renderizarCalendario(fechaActual);
    };

    document.getElementById("next").onclick = () => {
      fechaActual.setMonth(fechaActual.getMonth() + 1);
      renderizarCalendario(fechaActual);
    };
  }

  renderizarCalendario(fechaActual);
});

// assets/js/calendario.js
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { app } from "/firebase-config.js";

const db = getDatabase(app);
const contenedor = document.getElementById("calendario");

async function cargarActividades() {
  const snapshot = await get(ref(db, "actividades"));
  if (!snapshot.exists()) {
    contenedor.innerHTML = "<p>No hay actividades programadas aún.</p>";
    return;
  }

  const data = snapshot.val();
  contenedor.innerHTML = `
    <ul class="lista-actividades">
      ${Object.values(data).map(act => `
        <li>
          <strong>${act.titulo}</strong><br>
          📅 ${act.fecha}<br>
          <em>${act.descripcion}</em>
        </li>
      `).join("")}
    </ul>
  `;
}

cargarActividades();
