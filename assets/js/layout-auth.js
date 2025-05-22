layout_auth_js = "import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "/firebase-config.js";

const loginForm = document.getElementById("login-form");
const loginSection = document.getElementById("admin-login");
const loggedSection = document.getElementById("admin-logged");
const userEmailSpan = document.getElementById("admin-user-email");
const logoutBtn = document.getElementById("logout-btn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginSection.style.display = "none";
    loggedSection.style.display = "block";
    userEmailSpan.textContent = user.email;
  } else {
    loginSection.style.display = "block";
    loggedSection.style.display = "none";
  }
});

loginForm?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("login-mensaje").innerText = "Inicio de sesión exitoso.";
    })
    .catch((error) => {
      document.getElementById("login-mensaje").innerText = "Error: " + error.message;
    });
});

logoutBtn?.addEventListener("click", () => {
  signOut(auth).then(() => {
    location.reload();
  });
});
""

