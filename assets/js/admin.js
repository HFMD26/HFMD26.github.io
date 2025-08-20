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


 