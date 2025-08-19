---
layout: default
title: Procedimientos y formatos
permalink: /procedimientos/
---

# Procedimientos

<section class="procedimiento-reporte">
  <div class="procedimiento-texto">
    <h2>Procedimiento para entregar un reporte trimestral</h2>
    <ol>
      <li> Recolectar toda la información de actividades, eventos y estadísticas del trimestre.</li>
      <li> Completar el formato oficial de reporte con los datos requeridos.</li>
      <li> Adjuntar gráficas, fotografías y evidencias que respalden las actividades.</li>
      <li> Revisar y validar la información con el responsable del área correspondiente.</li>
      <li> Enviar el reporte final a través del sistema en línea o entregarlo de manera física en la oficina designada.</li>
    </ol>
  </div>

  <div class="procedimiento-imagen">
    <img src="/assets/img/reporte-trimestral.png" alt="Entrega de reporte trimestral">
  </div>
</section>

<style>
.procedimiento-reporte {
  display: grid;
  grid-template-columns: 1fr 1fr; /* texto a la izquierda, imagen a la derecha */
  gap: 2rem;
  align-items: center;
  padding: 2rem;
}

.procedimiento-texto {
  font-size: 1rem;
  line-height: 1.6;
}

.procedimiento-texto h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.procedimiento-texto ol {
  padding-left: 1.2rem;
}

.procedimiento-texto li {
  margin-bottom: 0.8rem;
}

.procedimiento-imagen img {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .procedimiento-reporte {
    grid-template-columns: 1fr; /* en móviles: texto arriba, imagen abajo */
    text-align: center;
  }
  .procedimiento-imagen img {
    margin: 1rem auto;
  }
}
</style>
