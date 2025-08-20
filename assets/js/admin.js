// /assets/js/admin.js
import { app } from "/firebase-config.js";
import { getFirestore, collection, addDoc, query, where, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const db = getFirestore(app);

// --- TOAST ---
function mostrarToast(mensaje) {
  const toast = document.getElementById("toast");
  toast.textContent = mensaje;
  toast.style.visibility = "visible";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => (toast.style.visibility = "hidden"), 500);
  }, 2000);
}

// --- REGISTRAR MIEMBRO ---
document.getElementById("form-miembro").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = e.target.nombre.value.trim();
  const correo = e.target.correo.value.trim();
  const descripcion = e.target.descripcion.value.trim();

  if (!nombre || !correo) return;

  await addDoc(collection(db, "Miembros"), { nombre, correo, descripcion });
  mostrarToast("✅ Miembro agregado exitosamente");

  e.target.reset();
});

// --- REGISTRAR EVENTO ---
document.getElementById("form-evento").addEventListener("submit", async (e) => {
  e.preventDefault();
  const titulo = e.target.titulo.value.trim();
  const fecha = e.target.fecha.value;

  if (!titulo || !fecha) return;

  await addDoc(collection(db, "Actividades"), { titulo, fecha });
  mostrarToast("✅ Evento agregado exitosamente");

  e.target.reset();
});

// --- BUSCAR Y ELIMINAR MIEMBROS ---
const buscarMiembro = document.getElementById("buscar-miembro");
const listaMiembros = document.getElementById("lista-miembros");

buscarMiembro.addEventListener("input", async () => {
  listaMiembros.innerHTML = "";
  const texto = buscarMiembro.value.trim();
  if (texto.length < 2) return;

  const q = query(collection(db, "Miembros"), where("nombre", ">=", texto), where("nombre", "<=", texto + "\uf8ff"));
  const snapshot = await getDocs(q);

  snapshot.forEach((docSnap) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span><strong>${docSnap.data().nombre}</strong> - ${docSnap.data().correo || ""}</span>
      <button data-id="${docSnap.id}" class="eliminar">Eliminar</button>
    `;
    listaMiembros.appendChild(li);
  });

  document.querySelectorAll("#lista-miembros .eliminar").forEach((btn) => {
    btn.addEventListener("click", async () => {
      await deleteDoc(doc(db, "Miembros", btn.dataset.id));
      mostrarToast("🗑️ Miembro eliminado");
      btn.parentElement.remove();
    });
  });
});

// --- BUSCAR Y ELIMINAR ACTIVIDADES ---
const buscarActividad = document.getElementById("buscar-actividad");
const listaActividades = document.getElementById("lista-actividades");

buscarActividad.addEventListener("input", async () => {
  listaActividades.innerHTML = "";
  const texto = buscarActividad.value.trim();
  if (texto.length < 2) return;

  const q = query(collection(db, "Actividades"), where("titulo", ">=", texto), where("titulo", "<=", texto + "\uf8ff"));
  const snapshot = await getDocs(q);

  snapshot.forEach((docSnap) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span><strong>${docSnap.data().titulo}</strong> - 📅 ${docSnap.data().fecha}</span>
      <button data-id="${docSnap.id}" class="eliminar">Eliminar</button>
    `;
    listaActividades.appendChild(li);
  });

  document.querySelectorAll("#lista-actividades .eliminar").forEach((btn) => {
    btn.addEventListener("click", async () => {
      await deleteDoc(doc(db, "Actividades", btn.dataset.id));
      mostrarToast("🗑️ Actividad eliminada");
      btn.parentElement.remove();
    });
  });
});
