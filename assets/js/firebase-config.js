// /firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// CONFIGURACIÓN TUYA DE FIREBASE:
const firebaseConfig = {
  apiKey: "AIzaSyANkyqb_sums26jtzcZTmpzTTBJZ5khf7Y",
  authDomain: "comision-de-jubilados.firebaseapp.com",
  databaseURL: "https://comision-de-jubilados-default-rtdb.firebaseio.com",
  projectId: "comision-de-jubilados",
  storageBucket: "comision-de-jubilados.firebasestorage.app",
  messagingSenderId: "280242734804",
  appId: "1:280242734804:web:4af99b90c762e412c89d41",
  measurementId: "G-RHQ3SKW94M"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
