// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// CONFIGURACIÓN TUYA DE FIREBASE:
const firebaseConfig = {
  apiKey: "AIzaSyA...f7Y",
  authDomain: "comision-de-jubilados.firebaseapp.com",
  projectId: "comision-de-jubilados",
  storageBucket: "comision-de-jubilados.appspot.com",
  messagingSenderId: "280242734804",
  appId: "TU_APP_ID", // <- la encontrarás en Firebase al registrar tu app web
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
