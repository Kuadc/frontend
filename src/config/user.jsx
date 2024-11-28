import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default async function loginUser(email, password) {
    const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuario conectado:", userCredential);
    const user = userCredential.user; 
    console.log("Usuario conectado:", user);
    return auth.currentUser;
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
  }
}

