import { auth } from "../../firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Verifica si el usuario está autenticado
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("✅ Usuario autenticado:", user.email);
    configurarFormularios();
  } else {
    alert("⚠️ Debes iniciar sesión para acceder al panel de administrador.");
    window.location.href = "/login.html"; // redirige a login
  }
});

function configurarFormularios() {
  const formMiembro = document.getElementById("form-miembro");
  const formEvento = document.getElementById("form-evento");

  formMiembro.addEventListener("submit", async function (e) {
    e.preventDefault();
    const nombre = formMiembro.nombre.value;
    const correo = formMiembro.correo.value;
    const fecha = formMiembro.fecha.value;

    try {
      await addDoc(collection(db, "miembros"), {
        nombre,
        correo,
        fecha
      });
      document.getElementById("mensaje").innerText = "✅ Miembro registrado.";
      formMiembro.reset();
    } catch (error) {
      document.getElementById("mensaje").innerText = "❌ Error al guardar: " + error;
    }
  });

  formEvento.addEventListener("submit", async function (e) {
    e.preventDefault();
    const titulo = formEvento.titulo.value;
    const fecha = formEvento.fecha.value;

    try {
      await addDoc(collection(db, "eventos"), {
        titulo,
        fecha
      });
      document.getElementById("mensaje").innerText = "✅ Evento agregado.";
      formEvento.reset();
    } catch (error) {
      document.getElementById("mensaje").innerText = "❌ Error al guardar evento: " + error;
    }
  });
}
