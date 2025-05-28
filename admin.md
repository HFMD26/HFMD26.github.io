---
layout: default
title: Panel de Administrador
permalink: /admin/
---

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

<script src="/firebase-config.js"></script>
<script src="/assets/js/admin-events.js"></script>
