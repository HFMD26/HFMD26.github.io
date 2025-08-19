---
layout: default
title: Inicio
permalink: /
---

# Inicio

<section class="seccion-enlaces">
  <h2>Accesos Rápidos</h2>
  <div class="enlaces-grid">
    <div class="enlace-card">
      <h3><a href="/procedimientos/"> Procedimientos</a></h3>
      <p>Aquí encontrarás los pasos y lineamientos para realizar los distintos trámites y actividades de la organización.</p>
    </div>

    <div class="enlace-card">
      <h3><a href="/entrega/"> Entregas</a></h3>
      <p>Consulta y gestiona las entregas programadas, así como los materiales o reconocimientos que se distribuyen.</p>
    </div>

    <div class="enlace-card">
      <h3><a href="/reportes/"> Reportes</a></h3>
      <p>Accede a los reportes de actividades, eventos y estadísticas para mantener un registro actualizado.</p>
    </div>
  </div>
</section>

<style>
.seccion-enlaces {
  padding: 2rem;
  text-align: center;
}

.enlaces-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.enlace-card {
  background: #fffbe6;
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.enlace-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.enlace-card h3 a {
  text-decoration: none;
  color: #2c3e50;
}

.enlace-card h3 a:hover {
  color: #0077cc;
}
</style>