document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-miembro");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const fecha = form.fecha.value;

    if (!nombre || !correo || !fecha) {
      mensaje.textContent = "Por favor, completa todos los campos.";
      return;
    }

    try {
      await db.collection("miembros").add({
        nombre,
        correo,
        fecha_ingreso: fecha
      });
      mensaje.textContent = "Miembro registrado correctamente.";
      form.reset();
    } catch (error) {
      console.error("Error al guardar:", error);
      mensaje.textContent = "Ocurrió un error al registrar.";
    }
  });
});