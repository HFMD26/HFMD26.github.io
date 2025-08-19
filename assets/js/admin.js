const db = firebase.firestore();

function agregarMiembro() {
  const nombre = document.getElementById("Nombre").value;
  const descripcion = document.getElementById("Descripcion").value;
  db.collection("Miembros").add({ nombre, descripcion });
}

function agregarActividad() {
  const fecha = document.getElementById("Fecha").value;
  const titulo = document.getElementById("Titulo").value;
  db.collection("Actividades").add({ fecha, titulo });
}
