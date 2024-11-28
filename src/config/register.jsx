import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default async function  registerUser(email, password){
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado:", userCredential.user);
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
  }
};
