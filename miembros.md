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


<div class="miembros-contenedor">
  {% for persona in site.data.miembros %}
  <div class="miembro">
    <img src="{{ persona.imagen }}" alt="{{ persona.nombre }}">
    <div class="info">
      <h3>{{ persona.nombre }}</h3>
      <p>{{ persona.descripcion }}</p>
    </div>
  </div>
  {% endfor %}
</div>