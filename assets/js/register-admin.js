document.getElementById("register-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("mensaje-register").innerText = "Administrador registrado con éxito.";
    })
    .catch((error) => {
      document.getElementById("mensaje-register").innerText = "Error: " + error.message;
    });
});
