import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { app } from "/firebase-config.js";

const db = getDatabase(app);
const calendario = document.getElementById("calendario");
let fechaActual = new Date();
let actividades = {}; // se cargan desde Firebase

// Cargar actividades desde Firebase en tiempo real
function cargarActividades() {
  const eventosRef = ref(db, "eventos");
  onValue(eventosRef, (snapshot) => {
    actividades = snapshot.val() || {};
    renderizarCalendario(fechaActual);
  });
}

// Renderizar calendario
function renderizarCalendario(fecha) {
  const año = fecha.getFullYear();
  const mes = fecha.getMonth();

  const diasMes = new Date(año, mes + 1, 0).getDate();
  const primerDia = new Date(año, mes, 1).getDay();
  const nombreMes = fecha.toLocaleString("es-ES", { month: "long" });

  let tabla = `
    <div style="text-align:center; margin-bottom: 1rem;">
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
    const fechaStr = fechaCompleta.toISOString().split("T")[0]; // YYYY-MM-DD

    // buscar actividad en Firebase
    const actividadId = Object.keys(actividades).find(id => actividades[id].fecha === fechaStr);
    const actividad = actividadId ? actividades[actividadId] : null;

    let clase = actividad ? "con-actividad" : "";

    tabla += `
      <td class="${clase}" data-id="${actividadId || ''}" data-fecha="${fechaStr}">
        ${dia}
      </td>
    `;

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

  // Eventos click en días con actividad
  document.querySelectorAll("td.con-actividad").forEach(td => {
    td.addEventListener("click", () => {
      const id = td.dataset.id;
      const act = actividades[id];

      if (!act) return;

      mostrarDetalleActividad(id, act);
    });
  });
}

cargarActividades();
