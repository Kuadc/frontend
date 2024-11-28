import React from 'react'
import "./Login.css"
import loginUser from '../config/user.jsx'
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import Footer from '../components/Footer.jsx';

export default function Login() {
  
  const navigate = useNavigate(); // Hook para redirigir

  const getCurrentUser = () => {
    const auth = getAuth();
    return auth.currentUser; // Devuelve el usuario autenticado o null
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginform = new FormData(event.target);
    const username = loginform.get("username");
    console.log("email:",username)
    const password = loginform.get("password");
    console.log("passwrod:",password)

    try {
      const userCredential = await loginUser(username, password);
      console.log("usurario que trae el login",userCredential);
      const user = getCurrentUser(); // Obtén el usuario tras el login
      if (user) {
        alert("Inicio de sesión exitoso");
        navigate("/Dashboard"); // Redirige al Dashboard
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      alert("Hubo un error al iniciar sesión");
    }
  };

  return (
    <>
        
        <div className='user' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='usersvg'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        </div>
        <form action="" className='login' onSubmit={handleSubmit}>
            <h3>Login</h3>
            
            <input type="text" name="username" id="User" placeholder='Enter email' />
            
            <input type="password" name="password" id="password" placeholder='Enter password' />
            <a className='forgot'>forgot password?</a>
            <button type="submit" className='button'>Send</button>
            <div className='signup'><p>Dont have an account?</p><p className='sign'>sing up!</p></div>
            <p className='or'>or</p>

            <button className='button-google'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#535bf2" viewBox="0 0 256 256"><path d="M228,128a100,100,0,1,1-22.86-63.64,12,12,0,0,1-18.51,15.28A76,76,0,1,0,203.05,140H128a12,12,0,0,1,0-24h88A12,12,0,0,1,228,128Z"></path></svg>Login With Google</button>

        </form>
        <Footer />
    </>
    
  )
}

