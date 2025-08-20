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
    <label>Descripción: <br />
    <textarea name="descripcion" rows="4" cols="40" placeholder="Escribe una breve descripción del miembro..."></textarea></label><br />
    <button type="submit">Registrar</button>
  </form>

  <h2>Agregar Nuevo Evento</h2>
  <form id="form-evento">
    <label>Título del evento: <input type="text" name="titulo" required /></label><br />
    <label>Fecha: <input type="date" name="fecha" required /></label><br />
    <button type="submit">Agregar Evento</button>
  </form>
</section>

<div class="admin-section">
  <h3>🔎 Buscar y eliminar miembros</h3>
  <input type="text" id="buscar-miembro" placeholder="Escribe el nombre del miembro...">
  <ul id="lista-miembros"></ul>
</div>

<div class="admin-section">
  <h3>🔎 Buscar y eliminar actividades</h3>
  <input type="text" id="buscar-actividad" placeholder="Escribe el título de la actividad...">
  <ul id="lista-actividades"></ul>
</div>

<!-- Firebase v9 (compat) -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<!-- Configuración Firebase -->
<script type="module" src="/firebase-config.js"></script>

<!-- Lógica de administrador -->
<script type="module" src="/assets/js/admin.js"></script>

<!-- Form handler (si usas envío con toast) -->
<script type="module" src="/assets/js/form-handler.js"></script>

<style>
.admin-section {
  margin-bottom: 2rem;
  background: #fdfdfd;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}
.admin-section input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
.admin-section ul {
  list-style: none;
  padding: 0;
}
.admin-section li {
  background: #fff8dc;
  margin-bottom: 0.5rem;
  padding: 0.6rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.admin-section button {
  background: red;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}
.admin-section button:hover {
  background: darkred;
}
</style>
