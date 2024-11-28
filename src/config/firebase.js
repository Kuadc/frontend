// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqTs7PHrONvm7PAr9H24X47S6M3Rrro64",
    authDomain: "comercio-ropa-app.firebaseapp.com",
    projectId: "comercio-ropa-app",
    storageBucket: "comercio-ropa-app.firebasestorage.app",
    messagingSenderId: "281461342850",
    appId: "1:281461342850:web:6c82bd1d6f83cf9aa22a9b"
    
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Log para validar la conexión a la base de datos
console.log("Conexión a Firestore establecida:", db);

export default db;