const db = firebase.firestore();

function agregarMiembro() {
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  db.collection("miembros").add({ nombre, descripcion });
}

function agregarActividad() {
  const fecha = document.getElementById("fecha").value;
  const titulo = document.getElementById("titulo").value;
  db.collection("actividades").add({ fecha, titulo });
}
