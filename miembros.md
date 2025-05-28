---
layout: default
title: Lista de miembros
permalink: /miembros/
---

# Miembros

<h2>En memoria</h2>

<div class="carousel-container">
  <div class="carousel">
    <div class="carousel-item">
      <img src="/assets/miembros/logo.jpg" alt="Miembro 1">
      <p><strong>Nombre 1</strong><br>Descripción breve del miembro 1.</p>
    </div>
    <div class="carousel-item">
      <img src="/assets/miembros/logo.jpg" alt="Miembro 2">
      <p><strong>Nombre 2</strong><br>Descripción breve del miembro 2.</p>
    </div>
    <div class="carousel-item">
      <img src="/assets/miembros/logo.jpg" alt="Miembro 3">
      <p><strong>Nombre 3</strong><br>Descripción breve del miembro 3.</p>
    </div>
    <div class="carousel-item">
      <img src="/assets/miembros/logo.jpg" alt="Miembro 4">
      <p><strong>Nombre 4</strong><br>Descripción breve del miembro 4.</p>
    </div>
    <div class="carousel-item">
      <img src="/assets/miembros/logo.jpg" alt="Miembro 5">
      <p><strong>Nombre 5</strong><br>Descripción breve del miembro 5.</p>
    </div>
    <!-- Agrega más miembros aquí -->
  </div>
</div>


<h2>Miembros registrados</h2>

<div id="miembros-contenedor" class="miembros-contenedor"></div>

<!-- Firebase y scripts -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>
<script src="/firebase-config.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("miembros-contenedor");

  const db = firebase.database();
  const refMiembros = db.ref("miembros");

  refMiembros.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      const miembro = childSnapshot.val();
      const div = document.createElement("div");
      div.className = "miembro";
      div.innerHTML = `
        <img src="/assets/miembros/logo.jpg" alt="${miembro.nombre}">
        <div class="info">
          <h3>${miembro.nombre}</h3>
          <p>${miembro.descripcion || "Sin descripción"}</p>
        </div>
      `;
      contenedor.appendChild(div);
    });
  });
});

</script>

<style>
.miembros-contenedor {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}
.miembro {
  background-color: #fffbe6;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  width: 220px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.miembro img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}
</style>