// /firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// CONFIGURACIÓN TUYA DE FIREBASE:
const firebaseConfig = {
  apiKey: "AIzaSyBAzBqaEuslFBlmzEqj2xkRzGlH6i8MsKk",
  authDomain: "comision-de-jubilados-69f1d.firebaseapp.com",
  databaseURL: "https://comision-de-jubilados-69f1d-default-rtdb.firebaseio.com",
  projectId: "comision-de-jubilados-69f1d",
  storageBucket: "comision-de-jubilados-69f1d.firebasestorage.app",
  messagingSenderId: "859744872523",
  appId: "1:859744872523:web:b4d384d8897caa072505ce",
  measurementId: "G-J0MYWNCXMD"
};


const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth, app};
