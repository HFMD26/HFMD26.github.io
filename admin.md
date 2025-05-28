---
layout: default
title: Panel de Administrador
permalink: /admin/
---

<section id="registro-miembros" style="padding: 1rem;">
  <h2>Registro de Nuevos Miembros</h2>
  <form id="form-miembro">
    <label>Nombre: <input type="text" name="nombre" required /></label><br />
    <label>Correo: <input type="email" name="correo" required /></label><br />
    <label>Fecha de ingreso: <input type="date" name="fecha" required /></label><br />
    <button type="submit">Registrar</button>
  </form>
  <div id="mensaje"></div>
</section>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
<script type="module" src="/firebase-config.js"></script>
<script type="module" src="/assets/js/form-handler.js"></script>


<h2>Agregar Nuevo Evento</h2>
<form id="form-evento">
  <label>Título del evento:
    <input type="text" name="titulo" required />
  </label><br />
  <label>Fecha:
    <input type="date" name="fecha" required />
  </label><br />
  <button type="submit">Agregar Evento</button>
</form>

<div id="mensaje"></div>

<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
<script type="module" src="/firebase-config.js"></script>
<script type="module" src="/assets/js/admin-events.js"></script>
