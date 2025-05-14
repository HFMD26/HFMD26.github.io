const actividades = {
  "2025-05-20": true,
  "2025-05-24": true,
  "2025-06-02": true,
};

const hoy = new Date();
let mesActual = hoy.getMonth();
let anioActual = hoy.getFullYear();

const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function generarCalendario(mes, anio) {
  const primerDia = new Date(anio, mes, 1).getDay();
  const diasMes = new Date(anio, mes + 1, 0).getDate();

  const tabla = document.getElementById("calendario");
  tabla.innerHTML = "";

  const titulo = document.getElementById("mes-anio");
  titulo.textContent = `${nombresMeses[mes]} ${anio}`;

  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  let filaEncabezado = "<tr>";
  for (const dia of diasSemana) {
    filaEncabezado += `<th style="padding: 0.5rem; background: #0044cc; color: white;">${dia}</th>`;
  }
  filaEncabezado += "</tr>";
  tabla.innerHTML += filaEncabezado;

  let fila = "<tr>";
  let dia = 1;

  for (let i = 0; i < 7; i++) {
    if (i < primerDia) {
      fila += "<td></td>";
    } else {
      fila += pintarCelda(dia++, mes, anio);
    }
  }
  fila += "</tr>";
  tabla.innerHTML += fila;

  while (dia <= diasMes) {
    fila = "<tr>";
    for (let i = 0; i < 7; i++) {
      if (dia > diasMes) {
        fila += "<td></td>";
      } else {
        fila += pintarCelda(dia++, mes, anio);
      }
    }
    fila += "</tr>";
    tabla.innerHTML += fila;
  }
}

function pintarCelda(dia, mes, anio) {
  const fecha = `${anio}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
  let estilo = "background-color: white;";
  const actual = new Date(anio, mes, dia);

  if (actividades[fecha]) {
    estilo = "background-color: #c4f7c4;";
  } else if (actual < new Date()) {
    estilo = "background-color: #fff6c4;";
  }

  return `<td style="${estilo} text-align:center; padding: 0.5rem;"><strong>${dia}</strong></td>`;
}

function cambiarMes(offset) {
  mesActual += offset;
  if (mesActual > 11) {
    mesActual = 0;
    anioActual++;
  } else if (mesActual < 0) {
    mesActual = 11;
    anioActual--;
  }
  generarCalendario(mesActual, anioActual);
}

document.addEventListener("DOMContentLoaded", () => {
  generarCalendario(mesActual, anioActual);
});
