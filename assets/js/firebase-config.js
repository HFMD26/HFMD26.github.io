// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// CONFIGURACIÓN TUYA DE FIREBASE:
const firebaseConfig = {
  apiKey: "AIzaSyANkyqb_sums26jtzcZTmpzTTBJZ5khf7Y",
  authDomain: "comision-de-jubilados.firebaseapp.com",
  projectId: "comision-de-jubilados",
  storageBucket: "comision-de-jubilados.firebasestorage.app",
  messagingSenderId: "280242734804",
  appId: "1:280242734804:web:4af99b90c762e412c89d41",
  measurementId: "G-RHQ3SKW94M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
