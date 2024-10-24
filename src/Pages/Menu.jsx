import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"
import { router } from '../router/router'

export default function Menu() {
  return (
    <>
    
    <nav>
                <NavLink  className="link nav-link" to="/">Home</NavLink>
                <NavLink className="link nav-link" to="/Products">Products</NavLink>
                <NavLink className="link nav-link" to="/register">Register</NavLink>
                <NavLink className='link nav-link' to="/login">Login</NavLink>
            
    </nav>
    </>
  )
}
