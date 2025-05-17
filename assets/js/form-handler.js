// assets/js/form-handler.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-miembro");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.nombre.value;
    const correo = form.correo.value;
    const fecha = form.fecha.value;

    firebase.firestore().collection("miembros").add({
      nombre: nombre,
      correo: correo,
      fechaIngreso: fecha,
      creado: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      mensaje.textContent = "Miembro registrado con éxito.";
      form.reset();
    })
    .catch((error) => {
      console.error("Error al registrar miembro:", error);
      mensaje.textContent = "Hubo un error al registrar.";
    });
  });
});
