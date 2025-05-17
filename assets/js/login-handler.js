import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

window.login = async function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    window.location.href = "/admin.html"; // Redirige si el login fue exitoso
  } catch (error) {
    errorDiv.textContent = "Error al iniciar sesión: " + error.message;
  }
};

window.register = async function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");

  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
  } catch (error) {
    errorDiv.textContent = "Error al registrar: " + error.message;
  }
};
