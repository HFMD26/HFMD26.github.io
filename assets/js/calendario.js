document.addEventListener("DOMContentLoaded", function () {
  const calendario = document.getElementById("calendario");
  const fechaActual = new Date();
  const actividades = [
    { fecha: "2025-06-10", titulo: "Convivencia anual" },
    { fecha: "2025-06-20", titulo: "Entrega de reconocimientos" },
    { fecha: "2025-05-15", titulo: "Reunión mensual" }
  ];

  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth(); // 0 = enero

  const diasMes = new Date(año, mes + 1, 0).getDate();
  const primerDia = new Date(año, mes, 1).getDay();

  let tabla = "<table><tr>";
  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  diasSemana.forEach(d => tabla += `<th>${d}</th>`);
  tabla += "</tr><tr>";

  // Rellenar días vacíos antes del 1
  for (let i = 0; i < primerDia; i++) {
    tabla += "<td></td>";
  }

  for (let dia = 1; dia <= diasMes; dia++) {
    const fechaCompleta = new Date(año, mes, dia);
    const fechaStr = fechaCompleta.toISOString().split("T")[0];

    const actividad = actividades.find(act => act.fecha === fechaStr);
    const hoy = new Date();
    let clase = "";

    if (actividad) {
      clase = fechaCompleta < hoy ? "pasado" : "futuro";
    }

    tabla += `<td class="${clase}" title="${actividad ? actividad.titulo : ''}">${dia}</td>`;

    if ((dia + primerDia) % 7 === 0) tabla += "</tr><tr>";
  }

  tabla += "</tr></table>";
  calendario.innerHTML = tabla;
});
