import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function PrivateRoute({ children }) {
  const [user, setUser] = useState(null); // Estado para almacenar el usuario
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false); // Finaliza la carga al obtener el estado del usuario
    });

    // Limpia el observador al desmontar el componente
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Muestra un indicador de carga mientras Firebase verifica el estado del usuario
    return <p>Loading...</p>;
  }

  // Si hay usuario, renderiza los hijos; de lo contrario, redirige al login
  return user ? children : <Navigate to="/Login" />;
}
