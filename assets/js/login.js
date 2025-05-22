document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "/admin.html";
    })
    .catch((error) => {
      document.getElementById("mensaje-login").innerText = "Error: " + error.message;
    });
});
