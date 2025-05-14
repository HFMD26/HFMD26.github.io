document.addEventListener("DOMContentLoaded", function () {
  const calendario = document.getElementById("calendario");
  const fechaActual = new Date();
  const actividades = [
    { fecha: "2025-06-10", titulo: "Convivencia anual" },
    { fecha: "2025-06-20", titulo: "Entrega de reconocimientos" },
    { fecha: "2025-05-15", titulo: "Reunión mensual" }
  ];

  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth();

  const diasMes = new Date(año, mes + 1, 0).getDate();
  const primerDia = new Date(año, mes, 1).getDay();

  const nombreMes = fechaActual.toLocaleString("es-ES", { month: "long" });
  let tabla = `<h2 style="text-align:center;">${nombreMes.toUpperCase()}</h2><table><tr>`;

  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  diasSemana.forEach(d => tabla += `<th>${d}</th>`);
  tabla += "</tr><tr>";

  for (let i = 0; i < primerDia; i++) {
    tabla += "<td></td>";
  }

  for (let dia = 1; dia <= diasMes; dia++) {
    const fechaCompleta = new Date(año, mes, dia);
    const fechaStr = fechaCompleta.toLocaleDateString("en-CA"); // "YYYY-MM-DD"

    const actividad = actividades.find(act => act.fecha === fechaStr);
    const hoy = new Date();
    let clase = actividad
      ? (fechaCompleta < hoy ? "pasado" : "futuro")
      : "normal";

    tabla += `<td class="${clase}" title="${actividad ? actividad.titulo : ''}">${dia}</td>`;

    if ((dia + primerDia) % 7 === 0) tabla += "</tr><tr>";
  }

  tabla += "</tr></table>";
  calendario.innerHTML = tabla;
});
