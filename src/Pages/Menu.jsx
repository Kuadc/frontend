import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"

export default function Menu() {
  return (
    <>
    
    <nav>
                <NavLink  className="link nav-link" to="/">Home</NavLink>
                <NavLink className="link nav-link" to="/Dashboard">Dashboard</NavLink>
    </nav>
    </>
  )
}
