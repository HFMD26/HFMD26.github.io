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

