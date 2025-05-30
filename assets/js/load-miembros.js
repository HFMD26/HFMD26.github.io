document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("miembros-contenedor");

  const db = firebase.database();  // <-- Ahora sí debería funcionar
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
