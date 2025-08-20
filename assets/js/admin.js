// Inicializar Firestore
const db = firebase.firestore();

// Referencias a contenedores
const listaMiembros = document.getElementById("lista-miembros");
const listaActividades = document.getElementById("lista-actividades");
const buscarMiembro = document.getElementById("buscar-miembro");
const buscarActividad = document.getElementById("buscar-actividad");

// ----------------------
// AGREGAR MIEMBRO
// ----------------------
function agregarMiembro() {
  const nombre = document.getElementById("Nombre").value;
  const descripcion = document.getElementById("Descripcion").value;

  if (!nombre.trim()) {
    alert("El nombre es obligatorio.");
    return;
  }

  db.collection("Miembros").add({ nombre, descripcion })
    .then(() => {
      alert("Miembro agregado ✅");
      document.getElementById("Nombre").value = "";
      document.getElementById("Descripcion").value = "";
    })
    .catch(err => console.error("Error al agregar miembro:", err));
}

// ----------------------
// AGREGAR ACTIVIDAD
// ----------------------
function agregarActividad() {
  const fecha = document.getElementById("Fecha").value;
  const titulo = document.getElementById("Titulo").value;

  if (!fecha || !titulo.trim()) {
    alert("La fecha y el título son obligatorios.");
    return;
  }

  db.collection("Actividades").add({ fecha, titulo })
    .then(() => {
      alert("Actividad agregada ✅");
      document.getElementById("Fecha").value = "";
      document.getElementById("Titulo").value = "";
    })
    .catch(err => console.error("Error al agregar actividad:", err));
}

// ----------------------
// CARGAR LISTAS
// ----------------------
function cargarMiembros() {
  db.collection("Miembros").onSnapshot(snapshot => {
    listaMiembros.innerHTML = "";
    snapshot.forEach(doc => {
      const miembro = doc.data();
      const li = document.createElement("li");
      li.innerHTML = `
        <span><strong>${miembro.nombre}</strong><br>${miembro.descripcion || ""}</span>
        <button onclick="eliminarMiembro('${doc.id}')">Eliminar</button>
      `;
      listaMiembros.appendChild(li);
    });
  });
}

function cargarActividades() {
  db.collection("Actividades").onSnapshot(snapshot => {
    listaActividades.innerHTML = "";
    snapshot.forEach(doc => {
      const act = doc.data();
      const li = document.createElement("li");
      li.innerHTML = `
        <span><strong>${act.titulo}</strong><br>📅 ${act.fecha}</span>
        <button onclick="eliminarActividad('${doc.id}')">Eliminar</button>
      `;
      listaActividades.appendChild(li);
    });
  });
}

// ----------------------
// ELIMINAR
// ----------------------
function eliminarMiembro(id) {
  if (confirm("¿Seguro que deseas eliminar este miembro?")) {
    db.collection("Miembros").doc(id).delete()
      .then(() => alert("Miembro eliminado ✅"))
      .catch(err => console.error("Error al eliminar miembro:", err));
  }
}

function eliminarActividad(id) {
  if (confirm("¿Seguro que deseas eliminar esta actividad?")) {
    db.collection("Actividades").doc(id).delete()
      .then(() => alert("Actividad eliminada ✅"))
      .catch(err => console.error("Error al eliminar actividad:", err));
  }
}

// ----------------------
// BUSCAR (filtro local)
// ----------------------
buscarMiembro.addEventListener("input", () => {
  const texto = buscarMiembro.value.toLowerCase();
  listaMiembros.querySelectorAll("li").forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(texto) ? "" : "none";
  });
});

buscarActividad.addEventListener("input", () => {
  const texto = buscarActividad.value.toLowerCase();
  listaActividades.querySelectorAll("li").forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(texto) ? "" : "none";
  });
});

// ----------------------
// INICIALIZAR
// ----------------------
cargarMiembros();
cargarActividades();

// Exponer funciones a HTML
window.agregarMiembro = agregarMiembro;
window.agregarActividad = agregarActividad;
window.eliminarMiembro = eliminarMiembro;
window.eliminarActividad = eliminarActividad;
