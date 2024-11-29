import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"
import { router } from '../router/router'
import { getAuth, onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Menu() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Actualiza si el usuario está autenticado
    });

    return () => unsubscribe(); // Limpia el observador al desmontar
  }, []);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth); // Cierra la sesión
      setIsAuthenticated(false); // Actualiza el estado
      navigate("/login"); // Redirige a la página de login
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <>
    
    <nav>
                <NavLink  className="link nav-link" to="/">Home</NavLink>
                <NavLink className="link nav-link" to="/Products">Products</NavLink>
                <NavLink className="link nav-link" to="/register">Register</NavLink>
                {!isAuthenticated && (
                <NavLink className="link nav-link" to="/login">Login</NavLink>
                )}
                {isAuthenticated && (
                <>
                <NavLink className="link nav-link" to="/Dashboard">Dashboard</NavLink>
                <button onClick={handleLogout} className="link nav-link">Logout</button>
                </>
                 )}
            
    </nav>
    </>
  )
}
