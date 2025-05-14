---
layout: default
title: Actividades
permalink: /actividades/
---

<h2>Calendario de Actividades</h2>
<div id="calendario"></div>

<!-- Este script carga el calendario -->
<<h2 id="mes-anio"></h2>
<div style="text-align: center; margin-bottom: 1rem;">
  <button onclick="cambiarMes(-1)">← Anterior</button>
  <button onclick="cambiarMes(1)">Siguiente →</button>
</div>
<table id="calendario" border="1" cellspacing="0" cellpadding="5" style="margin: 0 auto; border-collapse: collapse;"></table>

<script src="/assets/js/calendario.js"></script>
