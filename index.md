---
layout: default
title: Inicio
permalink: /
---

# inicio

Contenido de entrega y recepción...

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

<script src="/firebase-config.js"></script>
<script src="/assets/js/form-handler.js"></script>
