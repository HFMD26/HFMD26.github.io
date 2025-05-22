<!DOCTYPE html>
<html>
<head>
  <title>Panel de Administración</title>
</head>
<body>
  <h2>Bienvenido al Panel Privado</h2>
  <p>Solo administradores pueden ver esto.</p>
  <button onclick="logout()">Cerrar sesión</button>

  <script src="/firebase-config.js"></script>
  <script>
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = "/login.html";
      }
    });

    function logout() {
      firebase.auth().signOut().then(() => {
        window.location.href = "/login.html";
      });
    }
  </script>
</body>
</html>
