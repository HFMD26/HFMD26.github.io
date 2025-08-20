// Importar Firebase
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { app } from "/firebase-config.js";

const db = getDatabase(app);

document.addEventListener("DOMContentLoaded", async function () {
  const calendario = document.getElementById("calendario");
  let fechaActual = new Date();
  let actividades = []; // se cargará desde Firebase

  // 🔹 Cargar actividades desde Firebase
  async function cargarActividades() {
    const snapshot = await get(ref(db, "eventos"));
    if (!snapshot.exists()) return [];

    const data = snapshot.val();
    return Object.values(data); // convierte objeto en array
  }

  // 🔹 Renderizar calendario
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
      let tooltip = "";
      if (actividad) {
        clase = fechaCompleta < hoy ? "pasado" : "futuro";
        tooltip = actividad.titulo;
      }

      tabla += `<td class="${clase}" title="${tooltip}">${dia}</td>`;

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

  // 🔹 Inicialización: cargar eventos y luego renderizar
  actividades = await cargarActividades();
  renderizarCalendario(fechaActual);
});