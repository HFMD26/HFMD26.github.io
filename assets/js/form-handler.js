document.getElementById("form-miembro").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;
  const fecha = e.target.fecha.value;

  firebase.database().ref("miembros").push({
    nombre,
    correo,
    fecha
  }).then(() => {
    document.getElementById("mensaje").innerText = "Miembro registrado exitosamente.";
    e.target.reset();
  }).catch((error) => {
    document.getElementById("mensaje").innerText = "Error al registrar: " + error.message;
  });
});
